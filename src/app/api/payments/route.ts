import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth/auth";
import { z } from "zod";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

// Schema cho dữ liệu thanh toán
const PaymentSchema = z.object({
  bookingId: z.string().cuid(),
  amount: z.number().positive(),
  paymentMethod: z.enum(["CREDIT_CARD", "BANK_TRANSFER", "E_WALLET", "CASH"]),
  paymentDetails: z.any().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Kiểm tra xác thực
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Phân tích dữ liệu từ request
    const body = await request.json();
    const validationResult = PaymentSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, message: "Invalid payment data", errors: validationResult.error.format() },
        { status: 400 }
      );
    }

    const { bookingId, amount, paymentMethod, paymentDetails } = validationResult.data;

    // Kiểm tra booking có tồn tại và thuộc về người dùng hiện tại
    const booking = await prisma.booking.findUnique({
      where: {
        id: bookingId,
        userId: session.user.id,
      },
      include: {
        payments: true,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, message: "Booking not found" },
        { status: 404 }
      );
    }

    // Kiểm tra trạng thái booking
    if (booking.status === "CANCELLED") {
      return NextResponse.json(
        { success: false, message: "Cannot process payment for cancelled booking" },
        { status: 400 }
      );
    }

    // Tính tổng số tiền đã thanh toán
    const totalPaid = booking.payments.reduce((sum, payment) => {
      return payment.paymentStatus === "PAID" ? sum + payment.amount : sum;
    }, 0);

    // Kiểm tra số tiền còn lại cần thanh toán
    const remainingAmount = booking.totalPrice - totalPaid;
    if (amount > remainingAmount) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment amount exceeds the remaining balance",
          data: { remainingAmount }
        },
        { status: 400 }
      );
    }

    // Xử lý thanh toán dựa trên phương thức
    let paymentStatus: "PENDING" | "PAID" | "FAILED" | "REFUNDED" = "PENDING";
    let transactionId: string | null = null;

    // Xử lý thanh toán dựa trên phương thức
    switch (paymentMethod) {
      case "CREDIT_CARD":
        // Xử lý thanh toán thẻ tín dụng qua Stripe
        try {
          if (process.env.STRIPE_SECRET_KEY === "sk_test_demo_key") {
            // Demo mode - giả lập thanh toán thành công
            paymentStatus = "PAID";
            transactionId = `demo_${Date.now()}`;
          } else {
            // Stripe thật - tạo PaymentIntent
            const paymentIntent = await stripe.paymentIntents.create({
              amount: Math.round(amount * 100), // Stripe dùng cents
              currency: "vnd",
              metadata: {
                bookingId,
                userId: session.user.id,
              },
            });

            paymentStatus = "PENDING";
            transactionId = paymentIntent.id;
          }
        } catch (stripeError) {
          console.error("Stripe error:", stripeError);
          paymentStatus = "FAILED";
          transactionId = null;
        }
        break;
      case "BANK_TRANSFER":
        // Xử lý thanh toán chuyển khoản - thường cần xác nhận thủ công
        paymentStatus = "PENDING";
        transactionId = `BT-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
        break;
      case "E_WALLET":
        // Xử lý thanh toán ví điện tử
        paymentStatus = "PAID";
        transactionId = `EW-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
        break;
      case "CASH":
        // Xử lý thanh toán tiền mặt
        paymentStatus = "PENDING";
        break;
    }

    // Lưu thông tin thanh toán vào database
    const payment = await prisma.payment.create({
      data: {
        bookingId,
        amount,
        paymentMethod,
        paymentStatus,
        transactionId,
        paymentDetails: paymentDetails || null,
      },
    });

    // Cập nhật trạng thái booking nếu đã thanh toán đủ
    if (amount + totalPaid >= booking.totalPrice && paymentStatus === "PAID") {
      await prisma.booking.update({
        where: { id: bookingId },
        data: { status: "CONFIRMED" },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Payment processed successfully",
      data: {
        payment: {
          id: payment.id,
          amount: payment.amount,
          paymentMethod: payment.paymentMethod,
          paymentStatus: payment.paymentStatus,
          transactionId: payment.transactionId,
          createdAt: payment.createdAt,
        },
      },
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process payment",
        error: (error as Error).message
      },
      { status: 500 }
    );
  }
}
