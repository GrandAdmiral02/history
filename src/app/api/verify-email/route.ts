import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token không hợp lệ" },
        { status: 400 }
      );
    }

    // Tìm token trong cơ sở dữ liệu
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });

    if (!verificationToken) {
      return NextResponse.json(
        { success: false, message: "Token không tồn tại hoặc đã hết hạn" },
        { status: 400 }
      );
    }

    // Kiểm tra token đã hết hạn chưa
    if (new Date() > verificationToken.expires) {
      return NextResponse.json(
        { success: false, message: "Token đã hết hạn" },
        { status: 400 }
      );
    }

    // Cập nhật trạng thái xác thực email của người dùng
    const user = await prisma.user.findUnique({
      where: { email: verificationToken.identifier },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Không tìm thấy người dùng" },
        { status: 404 }
      );
    }

    // Cập nhật trạng thái xác thực email
    await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: new Date() },
    });

    // Xóa token đã sử dụng
    await prisma.verificationToken.delete({
      where: { token: verificationToken.token },
    });

    // Chuyển hướng đến trang thông báo thành công
    const successUrl = new URL("/email-verified", request.url);
    return NextResponse.redirect(successUrl);
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.json(
      { success: false, message: "Đã xảy ra lỗi khi xác thực email" },
      { status: 500 }
    );
  }
}
