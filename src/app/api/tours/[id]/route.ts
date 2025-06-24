
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
    
    if (!session?.user || !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const duration = formData.get("duration") as string;
    const location = formData.get("location") as string;
    const maxPeople = parseInt(formData.get("maxPeople") as string);
    const image = formData.get("image") as string;

    const tour = await prisma.tour.update({
      where: { id: params.id },
      data: {
        name,
        description,
        price,
        duration,
        location,
        maxPeople,
        image: image || null,
      },
    });

    return NextResponse.json(tour);
  } catch (error) {
    console.error("Error updating tour:", error);
    return NextResponse.json(
      { error: "Lỗi khi cập nhật tour" },
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
    
    if (!session?.user || !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    await prisma.tour.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Đã xóa tour thành công" });
  } catch (error) {
    console.error("Error deleting tour:", error);
    return NextResponse.json(
      { error: "Lỗi khi xóa tour" },
      { status: 500 }
    );
  }
}
