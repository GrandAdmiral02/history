import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";

// Schema validation cho dữ liệu đặt lại mật khẩu
const ResetPasswordSchema = z.object({
  token: z.string().min(1, "Token không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Kiểm tra dữ liệu với schema
    const { token, password } = ResetPasswordSchema.parse(body);

    // Tìm token trong cơ sở dữ liệu
    const resetToken = await prisma.verificationToken.findFirst({
      where: {
        // Kiểm tra token bắt đầu bằng "reset-" để đảm bảo là token đặt lại mật khẩu
        token: {
          startsWith: "reset-"
        },
        // Và token phải khớp với token được gửi
        identifier: token
      }
    });

    if (!resetToken) {
      return NextResponse.json(
        { success: false, message: "Token không hợp lệ hoặc đã hết hạn" },
        { status: 400 }
      );
    }

    // Kiểm tra token đã hết hạn chưa
    if (new Date() > resetToken.expires) {
      return NextResponse.json(
        { success: false, message: "Token đã hết hạn" },
        { status: 400 }
      );
    }

    // Tìm người dùng dựa trên email (identifier)
    const user = await prisma.user.findUnique({
      where: { email: resetToken.identifier },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Không tìm thấy người dùng" },
        { status: 404 }
      );
    }

    // Mã hóa mật khẩu mới
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cập nhật mật khẩu
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // Xóa token đã sử dụng
    await prisma.verificationToken.delete({
      where: { 
        identifier_token: {
          identifier: resetToken.identifier,
          token: resetToken.token
        }
      },
    });

    return NextResponse.json({
      success: true,
      message: "Mật khẩu đã được đặt lại thành công",
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Reset password error:", error);
    return NextResponse.json(
      { success: false, message: "Đã xảy ra lỗi khi đặt lại mật khẩu" },
      { status: 500 }
    );
  }
}
