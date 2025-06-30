
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
        tour: {
          select: {
            id: true,
            name: true,
            location: true,
            duration: true,
            price: true,
          },
        },
        payments: {
          select: {
            id: true,
            amount: true,
            paymentMethod: true,
            paymentStatus: true,
            createdAt: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Lỗi khi tải danh sách đặt tour" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    const body = await request.json();

    const {
      tourId,
      departureDate,
      participants,
      notes,
      customerName,
      customerEmail,
      customerPhone,
      paymentMethod,
      paymentAmount,
    } = body;

    // Validation
    if (!tourId || !departureDate || !participants || !customerEmail) {
      return NextResponse.json(
        { error: "Thiếu thông tin bắt buộc" },
        { status: 400 }
      );
    }

    // Get tour details to calculate total price
    const tour = await prisma.tour.findUnique({
      where: { id: tourId },
    });

    if (!tour) {
      return NextResponse.json(
        { error: "Tour không tồn tại" },
        { status: 404 }
      );
    }

    const totalPrice = tour.price * parseInt(participants);

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        userId: session?.user?.id || null,
        tourId,
        departureDate: new Date(departureDate),
        participants: parseInt(participants),
        totalPrice,
        notes,
        status: "PENDING",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
        tour: {
          select: {
            id: true,
            name: true,
            location: true,
            duration: true,
            price: true,
          },
        },
      },
    });

    // Create payment record if payment information is provided
    if (paymentMethod && paymentAmount) {
      await prisma.payment.create({
        data: {
          bookingId: booking.id,
          amount: parseFloat(paymentAmount),
          paymentMethod,
          paymentStatus: "PENDING",
        },
      });
    }

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Lỗi khi tạo đặt tour" },
      { status: 500 }
    );
  }
}
