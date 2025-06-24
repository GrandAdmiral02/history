
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
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const originalPrice = formData.get("originalPrice") ? parseFloat(formData.get("originalPrice") as string) : null;
    const category = formData.get("category") as string;
    const stock = parseInt(formData.get("stock") as string);
    const rating = parseFloat(formData.get("rating") as string) || 0;
    const sold = parseInt(formData.get("sold") as string) || 0;
    const image = formData.get("image") as string;
    const discount = formData.get("discount") as string;
    const isActive = formData.get("isActive") === "on";

    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        name,
        description,
        price,
        originalPrice,
        category,
        stock,
        rating,
        sold,
        image: image || null,
        discount: discount || null,
        isActive,
      },
    });

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
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    await prisma.product.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Đã xóa sản phẩm thành công" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Lỗi khi xóa sản phẩm" },
      { status: 500 }
    );
  }
}
