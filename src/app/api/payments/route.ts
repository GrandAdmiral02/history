import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";
import { z } from "zod";

const prisma = new PrismaClient();

const PaymentSchema = z.object({
  bookingId: z.string().min(1, "ID booking không được để trống"),
  amount: z.number().min(0, "Số tiền thanh toán không được âm"),
  paymentMethod: z.enum(["CREDIT_CARD", "E_WALLET", "BANK_TRANSFER", "CASH"]),
  transactionId: z.string().optional(),
  paymentDetails: z.any().optional(),
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
    const validatedData = PaymentSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: validatedData.error.errors[0].message },
        { status: 400 }
      );
    }

    const paymentData = validatedData.data;

    // Kiểm tra booking có tồn tại không và thuộc về người dùng hiện tại
    const booking = await prisma.booking.findUnique({
      where: {
        id: paymentData.bookingId,
      },
      include: {
        user: true,
      }
    });

    if (!booking) {
      return NextResponse.json(
        { error: "Booking không tồn tại" },
        { status: 404 }
      );
    }

    if (booking.userId !== userId && session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Bạn không có quyền thực hiện thanh toán cho booking này" },
        { status: 403 }
      );
    }

    // Tạo payment mới
    const payment = await prisma.payment.create({
      data: {
        bookingId: paymentData.bookingId,
        amount: paymentData.amount,
        paymentMethod: paymentData.paymentMethod,
        paymentStatus: paymentData.paymentMethod === "CASH" ? "PENDING" : "PAID",
        transactionId: paymentData.transactionId,
        paymentDetails: paymentData.paymentDetails,
      },
    });

    // Cập nhật trạng thái booking nếu thanh toán thành công
    if (paymentData.paymentMethod !== "CASH") {
      await prisma.booking.update({
        where: { id: paymentData.bookingId },
        data: { status: "CONFIRMED" },
      });
    }

    return NextResponse.json(
      {
        message: "Thanh toán thành công",
        payment
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi xử lý thanh toán" },
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
    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('bookingId');

    // Nếu có bookingId, lấy tất cả payment của booking đó
    if (bookingId) {
      // Kiểm tra booking có thuộc về người dùng không
      const booking = await prisma.booking.findFirst({
        where: {
          id: bookingId,
          userId,
        },
      });

      if (!booking && session.user.role !== "ADMIN") {
        return NextResponse.json(
          { error: "Không tìm thấy booking hoặc bạn không có quyền xem thông tin này" },
          { status: 404 }
        );
      }

      const payments = await prisma.payment.findMany({
        where: { bookingId },
        orderBy: { createdAt: "desc" },
      });

      return NextResponse.json({ payments });
    }

    // Nếu không có bookingId, lấy tất cả payment của người dùng
    const payments = await prisma.payment.findMany({
      where: {
        booking: {
          userId,
        },
      },
      include: {
        booking: {
          include: {
            tour: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ payments });
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi lấy thông tin thanh toán" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
