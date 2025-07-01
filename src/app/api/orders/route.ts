import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const orders = await prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
        payments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Lỗi khi tải dữ liệu đơn hàng" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.customerName || !data.customerEmail || !data.customerPhone || 
        !data.shippingAddress || !data.totalAmount || !data.items || data.items.length === 0) {
      return NextResponse.json(
        { error: "Thiếu thông tin bắt buộc" },
        { status: 400 }
      );
    }

    // Validate items
    for (const item of data.items) {
      if (!item.productId || !item.quantity || !item.price) {
        return NextResponse.json(
          { error: "Thông tin sản phẩm không hợp lệ" },
          { status: 400 }
        );
      }
    }

    // Create order with items
    const order = await prisma.order.create({
      data: {
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        shippingAddress: data.shippingAddress,
        totalAmount: parseFloat(data.totalAmount),
        paymentMethod: data.paymentMethod || "CASH",
        notes: data.notes || "",
        status: "PENDING",
        orderItems: {
          create: data.items.map((item: any) => ({
            productId: item.productId,
            quantity: parseInt(item.quantity),
            price: parseFloat(item.price),
          })),
        },
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Lỗi khi tạo đơn hàng: " + (error instanceof Error ? error.message : "Lỗi không xác định") },
      { status: 500 }
    );
  }
}