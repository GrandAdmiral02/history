
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const OrderItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().min(1),
  price: z.number().min(0),
});

const OrderSchema = z.object({
  customerName: z.string().min(1, "Tên khách hàng không được để trống"),
  customerEmail: z.string().email("Email không hợp lệ"),
  customerPhone: z.string().min(1, "Số điện thoại không được để trống"),
  customerAddress: z.string().min(1, "Địa chỉ không được để trống"),
  paymentMethod: z.enum(["CREDIT_CARD", "E_WALLET", "BANK_TRANSFER", "CASH"]),
  items: z.array(OrderItemSchema).min(1, "Đơn hàng phải có ít nhất 1 sản phẩm"),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = OrderSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: validatedData.error.errors[0].message },
        { status: 400 }
      );
    }

    const orderData = validatedData.data;

    // Tính tổng tiền
    const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = 30000; // Phí vận chuyển cố định
    const totalAmount = subtotal + shippingFee;

    // Tạo đơn hàng và các sản phẩm trong đơn hàng
    const order = await prisma.order.create({
      data: {
        customerName: orderData.customerName,
        customerEmail: orderData.customerEmail,
        customerPhone: orderData.customerPhone,
        customerAddress: orderData.customerAddress,
        totalAmount,
        shippingFee,
        paymentMethod: orderData.paymentMethod,
        notes: orderData.notes,
        orderItems: {
          create: orderData.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
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

    // Cập nhật số lượng tồn kho và số lượng đã bán
    for (const item of orderData.items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: {
          stock: { decrement: item.quantity },
          sold: { increment: item.quantity },
        },
      });
    }

    return NextResponse.json(
      {
        message: "Tạo đơn hàng thành công",
        order
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi tạo đơn hàng" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');
    const status = searchParams.get('status');

    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) {
      where.status = status;
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        skip,
        take: limit,
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
          payments: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.order.count({ where }),
    ]);

    return NextResponse.json({
      orders,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      }
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi lấy danh sách đơn hàng" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
