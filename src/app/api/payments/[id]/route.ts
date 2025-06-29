
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_TOUR", "ADMIN_PRODUCT", "ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const data = await request.json();
    const paymentId = params.id;

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
