
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const ProductSchema = z.object({
  name: z.string().min(1, "Tên sản phẩm không được để trống"),
  description: z.string().optional(),
  price: z.number().min(0, "Giá phải lớn hơn 0"),
  originalPrice: z.number().optional(),
  image: z.string().optional(),
  category: z.string().min(1, "Danh mục không được để trống"),
  stock: z.number().int().min(0, "Số lượng tồn kho không được âm"),
  discount: z.string().optional(),
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');

    const skip = (page - 1) * limit;

    const where: any = {
      isActive: true,
    };

    if (category && category !== 'Tất cả') {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      }
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi lấy danh sách sản phẩm" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = ProductSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: validatedData.error.errors[0].message },
        { status: 400 }
      );
    }

    const productData = validatedData.data;

    const product = await prisma.product.create({
      data: productData,
    });

    return NextResponse.json(
      {
        message: "Tạo sản phẩm thành công",
        product
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi tạo sản phẩm" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
