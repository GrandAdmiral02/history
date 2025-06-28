import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log("Products fetched:", products.length);
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Lỗi khi tải danh sách sản phẩm" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền thêm sản phẩm" },
        { status: 403 }
      );
    }

    const body = await request.json();
    console.log("Creating product with data:", body);

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description || null,
        price: body.price,
        originalPrice: body.originalPrice || null,
        image: body.image || "/placeholder.jpg",
        category: body.category,
        stock: body.stock,
        discount: body.discount || null,
        rating: 0,
        sold: 0,
        isActive: true,
      },
    });

    console.log("Product created:", product);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Lỗi khi tạo sản phẩm" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền xóa sản phẩm" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID sản phẩm không hợp lệ" },
        { status: 400 }
      );
    }

    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Xóa sản phẩm thành công" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Lỗi khi xóa sản phẩm" },
      { status: 500 }
    );
  }
}