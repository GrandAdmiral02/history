import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const tour = await prisma.tour.findUnique({
      where: { id: params.id },
    });

    if (!tour) {
      return NextResponse.json(
        { error: "Không tìm thấy tour" },
        { status: 404 }
      );
    }

    return NextResponse.json(tour);
  } catch (error) {
    console.error("Error fetching tour:", error);
    return NextResponse.json(
      { error: "Lỗi khi tải thông tin tour" },
      { status: 500 }
    );
  }
}

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

    const body = await request.json();

    const {
      name,
      description,
      price,
      duration,
      location,
      maxPeople,
      imageUrl,
      difficulty,
      includes,
      schedule,
      category
    } = body;

    // Validation
    if (!name || !location || !duration || !price || !maxPeople) {
      return NextResponse.json(
        { error: "Thiếu thông tin bắt buộc" },
        { status: 400 }
      );
    }

    const tour = await prisma.tour.update({
      where: { id: params.id },
      data: {
        name,
        description,
        price: parseFloat(price),
        duration,
        location,
        maxPeople: parseInt(maxPeople),
        imageUrl: imageUrl || null,
        difficulty,
        includes,
        schedule,
        category,
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

    return NextResponse.json({ message: "Tour đã được xóa" });
  } catch (error) {
    console.error("Error deleting tour:", error);
    return NextResponse.json(
      { error: "Lỗi khi xóa tour" },
      { status: 500 }
    );
  }
}