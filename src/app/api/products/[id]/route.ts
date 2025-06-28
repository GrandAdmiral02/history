import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền cập nhật sản phẩm" },
        { status: 403 }
      );
    }

    const body = await request.json();
    console.log("Updating product:", params.id, "with data:", body);

    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        name: body.name,
        description: body.description || null,
        price: body.price,
        originalPrice: body.originalPrice || null,
        image: body.image || "/placeholder.jpg",
        category: body.category,
        stock: body.stock,
        discount: body.discount || null,
      },
    });

    console.log("Product updated:", product);
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Lỗi khi cập nhật sản phẩm" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền xóa sản phẩm" },
        { status: 403 }
      );
    }

    await prisma.product.delete({
      where: { id: params.id },
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