import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/lib/auth/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tours = await prisma.tour.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(tours);
  } catch (error) {
    console.error("Error fetching tours:", error);
    return NextResponse.json(
      { error: "Lỗi khi tải danh sách tour" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    const tour = await prisma.tour.create({
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

    return NextResponse.json(tour, { status: 201 });
  } catch (error) {
    console.error("Error creating tour:", error);
    return NextResponse.json(
      { error: "Lỗi khi tạo tour" },
      { status: 500 }
    );
  }
}