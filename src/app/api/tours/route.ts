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

    const formData = await request.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const duration = formData.get("duration") as string;
    const location = formData.get("location") as string;
    const maxPeople = parseInt(formData.get("maxPeople") as string);
    const image = formData.get("image") as string;
    const difficulty = formData.get("difficulty") as string;
    const includes = formData.get("includes") as string;
    const schedule = formData.get("schedule") as string;
    const category = formData.get("category") as string;

    const tour = await prisma.tour.create({
      data: {
        name,
        description,
        price,
        duration,
        location,
        maxPeople,
        image: image || null,
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