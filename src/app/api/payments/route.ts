
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

    // Filter by user if not admin or if userId is specified
    const targetUserId = isAdmin && userId ? userId : session.user.id;
    
    if (targetUserId) {
      whereClause.OR = [
        { 
          booking: {
            userId: targetUserId
          }
        },
        {
          order: {
            customerEmail: session.user.email
          }
        }
      ];
    }

    console.log("Payment query whereClause:", JSON.stringify(whereClause, null, 2));
    
    const payments = await prisma.payment.findMany({
      where: whereClause,
      include: {
        booking: {
          select: {
            id: true,
            tourId: true,
            departureDate: true,
            participants: true,
            status: true,
            tour: {
              select: {
                id: true,
                name: true,
              },
            },
            user: {
              select: {
                id: true,
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

    console.log(`Found ${payments.length} payments for type: ${type || 'all'}, user: ${targetUserId || 'any'}`);

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
    const data = await request.json();

    // Validate required fields
    if (!data.amount || (!data.bookingId && !data.orderId)) {
      return NextResponse.json(
        { error: "Thiếu thông tin bắt buộc" },
        { status: 400 }
      );
    }

    const payment = await prisma.payment.create({
      data: {
        amount: parseFloat(data.amount),
        paymentMethod: data.paymentMethod || "CASH",
        paymentStatus: data.paymentStatus || data.status || "PENDING",
        transactionId: data.transactionId || `payment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
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
      { error: "Lỗi khi tạo thanh toán: " + (error instanceof Error ? error.message : "Lỗi không xác định") },
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
