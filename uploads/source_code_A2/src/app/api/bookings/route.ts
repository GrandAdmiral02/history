import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";
import { z } from "zod";

const prisma = new PrismaClient();

const BookingSchema = z.object({
  tourId: z.string().min(1, "ID tour không được để trống"),
  departureDate: z.string().or(z.date()),
  participants: z.number().min(1, "Số người tham gia phải ít nhất là 1"),
  totalPrice: z.number().min(0, "Tổng tiền không được âm"),
  notes: z.string().optional(),
  paymentMethod: z.enum(["CREDIT_CARD", "E_WALLET", "BANK_TRANSFER", "CASH"]),
  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"]).optional().default("PENDING"),
});

export async function POST(request: Request) {
  try {
    // Kiểm tra người dùng đã đăng nhập chưa
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const body = await request.json();

    // Validate request body
    const validatedData = BookingSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: validatedData.error.errors[0].message },
        { status: 400 }
      );
    }

    const bookingData = validatedData.data;

    // Kiểm tra tour có tồn tại không
    const tour = await prisma.tour.findUnique({
      where: { id: bookingData.tourId },
    });

    if (!tour) {
      return NextResponse.json(
        { error: "Tour không tồn tại" },
        { status: 404 }
      );
    }

    // Tạo booking mới
    const booking = await prisma.booking.create({
      data: {
        userId,
        tourId: bookingData.tourId,
        departureDate: new Date(bookingData.departureDate),
        participants: bookingData.participants,
        totalPrice: bookingData.totalPrice,
        notes: bookingData.notes,
        status: bookingData.status || "PENDING",
        // Tạo payment record nếu thanh toán ngay
        payments: {
          create: {
            amount: bookingData.totalPrice,
            paymentMethod: bookingData.paymentMethod,
            paymentStatus: bookingData.paymentMethod === "CASH" ? "PENDING" : "PAID",
          }
        }
      },
      include: {
        tour: true,
        payments: true,
      },
    });

    return NextResponse.json(
      {
        message: "Đặt tour thành công",
        booking
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi đặt tour" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request: Request) {
  try {
    // Kiểm tra người dùng đã đăng nhập chưa
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // Lấy thông tin tất cả booking của người dùng
    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        tour: true,
        payments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi lấy thông tin đặt tour" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
