import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Lấy phiên người dùng
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const bookingId = params.id;

    // Lấy thông tin booking
    const booking = await prisma.booking.findUnique({
      where: {
        id: bookingId,
        // Đảm bảo người dùng là chủ sở hữu booking hoặc là admin
        ...(session.user.role !== "ADMIN" ? { userId: session.user.id } : {}),
      },
      include: {
        tour: true,
        payments: {
          orderBy: {
            createdAt: "desc",
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
          },
        },
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ booking });

  } catch (error) {
    console.error("Error fetching booking:", error);
    return NextResponse.json(
      { error: "Failed to fetch booking" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Lấy phiên người dùng
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Chỉ admin và guide mới có thể cập nhật trạng thái booking
    if (session.user.role !== "ADMIN" && session.user.role !== "GUIDE") {
      return NextResponse.json(
        { error: "Forbidden: Only admins and guides can update bookings" },
        { status: 403 }
      );
    }

    const bookingId = params.id;
    const body = await request.json();

    // Cập nhật booking
    const updatedBooking = await prisma.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        status: body.status,
        notes: body.notes,
      },
      include: {
        tour: true,
        payments: true,
      },
    });

    return NextResponse.json({
      message: "Booking updated successfully",
      booking: updatedBooking,
    });

  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { error: "Failed to update booking" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Lấy phiên người dùng
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const bookingId = params.id;

    // Kiểm tra booking tồn tại và thuộc về người dùng hoặc là admin
    const booking = await prisma.booking.findFirst({
      where: {
        id: bookingId,
        ...(session.user.role !== "ADMIN" ? { userId: session.user.id } : {}),
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: "Booking not found or you don't have permission" },
        { status: 404 }
      );
    }

    // Nếu là người dùng thông thường, chỉ cho phép hủy (không xóa)
    if (session.user.role === "USER") {
      const updatedBooking = await prisma.booking.update({
        where: {
          id: bookingId,
        },
        data: {
          status: "CANCELLED",
        },
      });

      return NextResponse.json({
        message: "Booking cancelled successfully",
        booking: updatedBooking,
      });
    }

    // Nếu là admin, cho phép xóa hoàn toàn
    await prisma.booking.delete({
      where: {
        id: bookingId,
      },
    });

    return NextResponse.json({
      message: "Booking deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json(
      { error: "Failed to delete booking" },
      { status: 500 }
    );
  }
}
