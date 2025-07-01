import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const userId = searchParams.get('userId');

    if (!session?.user) {
      return NextResponse.json(
        { error: "Chưa đăng nhập" },
        { status: 401 }
      );
    }

    // For regular users, only show their own payments
    const isAdmin = ["ADMIN_TOUR", "ADMIN_PRODUCT", "ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "");
    
    if (!isAdmin && userId && userId !== session.user.id) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    let whereClause: any = {};

    // Filter by type
    if (type === 'shop') {
      whereClause.orderId = { not: null };
    } else if (type === 'tour') {
      whereClause.bookingId = { not: null };
    }

    // Filter by user if not admin
    if (!isAdmin && session.user.id) {
      whereClause.OR = [
        { 
          booking: {
            userId: session.user.id
          }
        },
        {
          order: {
            customerEmail: session.user.email
          }
        }
      ];
    }

    const payments = await prisma.payment.findMany({
      where: whereClause,
      include: {
        booking: {
          select: {
            id: true,
            tour: {
              select: {
                name: true,
              },
            },
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
        order: {
          select: {
            id: true,
            customerName: true,
            customerEmail: true,
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
        paymentStatus: data.paymentStatus || data.status || "PENDING",
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

export async function PATCH(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_TOUR", "ADMIN_PRODUCT", "ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const data = await request.json();
    const url = new URL(request.url);
    const paymentId = url.pathname.split('/').pop();

    if (!paymentId) {
      return NextResponse.json(
        { error: "Thiếu ID thanh toán" },
        { status: 400 }
      );
    }

    const payment = await prisma.payment.update({
      where: { id: paymentId },
      data: {
        paymentStatus: data.paymentStatus,
        updatedAt: new Date(),
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
    console.error("Error updating payment:", error);
    return NextResponse.json(
      { error: "Lỗi khi cập nhật thanh toán" },
      { status: 500 }
    );
  }
}