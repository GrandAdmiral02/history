import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_TOUR", "ADMIN_PRODUCT", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const payments = await prisma.payment.findMany({
      include: {
        booking: {
          select: {
            id: true,
            tour: {
              select: {
                name: true,
              },
            },
          },
        },
        order: {
          select: {
            id: true,
            orderItems: {
              include: {
                product: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { error: "Lỗi khi tải dữ liệu thanh toán" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Chưa đăng nhập" },
        { status: 401 }
      );
    }

    const data = await request.json();

    const payment = await prisma.payment.create({
      data: {
        amount: data.amount,
        paymentMethod: data.paymentMethod,
        paymentStatus: data.status || "PENDING",
        transactionId: data.transactionId,
        bookingId: data.bookingId || null,
        orderId: data.orderId || null,
      },
      include: {
        booking: {
          select: {
            id: true,
            tour: {
              select: {
                name: true,
              },
            },
          },
        },
        order: {
          select: {
            id: true,
            orderItems: {
              include: {
                product: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return NextResponse.json(payment);
  } catch (error) {
    console.error("Error creating payment:", error);
    return NextResponse.json(
      { error: "Lỗi khi tạo thanh toán" },
      { status: 500 }
    );
  }
}