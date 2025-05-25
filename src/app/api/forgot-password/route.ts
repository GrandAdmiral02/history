import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { z } from "zod";
import { sendPasswordResetEmail } from "@/lib/email";

// Schema validation cho dữ liệu email
const EmailSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
});

// Tạo token đặt lại mật khẩu
const generateResetToken = async (email: string) => {
  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 giờ

  const existingToken = await prisma.verificationToken.findFirst({
    where: {
      identifier: email,
      // Thêm điều kiện để phân biệt với token xác thực email
      token: {
        startsWith: "reset-"
      }
    }
  });

  if (existingToken) {
    return prisma.verificationToken.update({
      where: {
        identifier_token: {
          identifier: email,
          token: existingToken.token
        }
      },
      data: {
        token: `reset-${token}`,
        expires
      }
    });
  }

  return prisma.verificationToken.create({
    data: {
      identifier: email,
      token: `reset-${token}`,
      expires
    }
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Kiểm tra dữ liệu với schema
    const { email } = EmailSchema.parse(body);

    // Kiểm tra email có tồn tại trong cơ sở dữ liệu không
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Luôn trả về phản hồi thành công, ngay cả khi email không tồn tại
    // Để tránh tiết lộ thông tin người dùng thông qua phản hồi API

    if (user) {
      // Tạo token và gửi email sử dụng dịch vụ email mới
      const resetToken = await generateResetToken(email);
      await sendPasswordResetEmail(email, resetToken.token, user.name || undefined);
    }

    return NextResponse.json({
      success: true,
      message: "Nếu email tồn tại, một liên kết đặt lại mật khẩu đã được gửi đến địa chỉ email của bạn.",
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Forgot password error:", error);
    return NextResponse.json(
      { success: false, error: "Đã xảy ra lỗi khi xử lý yêu cầu" },
      { status: 500 }
    );
  }
}
