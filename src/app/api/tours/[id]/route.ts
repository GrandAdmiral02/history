
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const tour = await prisma.tour.findUnique({
      where: { id },
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
      { error: "Lỗi khi tải tour" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    const {
      name,
      description,
      location,
      duration,
      price,
      maxPeople,
      imageUrl,
      difficulty,
      includes,
      schedule,
      category,
    } = body;

    const tour = await prisma.tour.update({
      where: { id },
      data: {
        name,
        description,
        location,
        duration,
        price: parseFloat(price),
        maxPeople: parseInt(maxPeople),
        imageUrl,
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
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user || !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.json(
        { error: "Không có quyền truy cập" },
        { status: 403 }
      );
    }

    const { id } = await params;
    await prisma.tour.delete({
      where: { id },
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
