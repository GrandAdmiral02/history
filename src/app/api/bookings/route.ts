import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const bookings = await prisma.booking.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        tour: {
          select: {
            name: true,
            price: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Lỗi khi tải dữ liệu đặt tour" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    const data = await request.json();

    // Allow guest bookings or authenticated users
    if (session?.user) {
      // Authenticated user booking
      const booking = await prisma.booking.create({
        data: {
          userId: session.user.id!,
          tourId: data.tourId,
          departureDate: new Date(data.departureDate),
          participants: data.participants,
          totalPrice: data.totalPrice,
          notes: data.notes,
        },
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
          tour: {
            select: {
              name: true,
              price: true,
            },
          },
        },
      });

      return NextResponse.json(booking);
    } else {
      // Guest booking - create without userId
      const booking = await prisma.booking.create({
        data: {
          userId: null, // Guest booking
          tourId: data.tourId,
          departureDate: new Date(data.departureDate),
          participants: data.participants,
          totalPrice: data.totalPrice,
          notes: data.notes,
          // Store guest info in notes for now
          notes: `${data.notes || ''}\nGuest Info: ${data.customerName} - ${data.customerEmail} - ${data.customerPhone}`,
        },
        include: {
          tour: {
            select: {
              name: true,
              price: true,
            },
          },
        },
      });

      return NextResponse.json(booking);
    }
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Lỗi khi tạo đặt tour" },
      { status: 500 }
    );
  }
} = await request.json();

    const booking = await prisma.booking.create({
      data: {
        userId: data.userId,
        tourId: data.tourId,
        numberOfPeople: data.numberOfPeople,
        totalAmount: data.totalAmount,
        bookingDate: new Date(data.bookingDate),
        status: data.status || "PENDING",
        specialRequests: data.specialRequests,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        tour: {
          select: {
            name: true,
            price: true,
          },
        },
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Lỗi khi tạo đặt tour" },
      { status: 500 }
    );
  }
}