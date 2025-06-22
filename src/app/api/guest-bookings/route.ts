import { NextResponse } from "next/server";
import { z } from "zod";

const GuestBookingSchema = z.object({
  tourId: z.string().min(1, "ID tour không được để trống"),
  tourName: z.string().min(1, "Tên tour không được để trống"),
  tourPrice: z.number().min(0, "Giá tour không được âm"),
  tourDuration: z.string().min(1, "Thời gian tour không được để trống"),
  departureDate: z.string().or(z.date()),
  fullName: z.string().min(1, "Họ tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 số"),
  address: z.string().min(1, "Địa chỉ không được để trống"),
  participants: z.string().min(1, "Số người tham gia không được để trống"),
  emergencyContact: z.string().optional(),
  emergencyPhone: z.string().optional(),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = GuestBookingSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          error: "Dữ liệu không hợp lệ",
          details: validatedData.error.errors[0].message,
        },
        { status: 400 },
      );
    }

    const bookingData = validatedData.data;

    // Tính tổng tiền
    const totalPrice =
      bookingData.tourPrice * parseInt(bookingData.participants);

    // Tạo ID booking unique
    const bookingId = `guest-booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Tạo object booking hoàn chỉnh
    const completeBooking = {
      id: bookingId,
      ...bookingData,
      totalPrice,
      bookingType: "GUEST",
      status: "PENDING",
      createdAt: new Date().toISOString(),
      departureDate: new Date(bookingData.departureDate).toISOString(),
    };

    // Trong môi trường thực tế, bạn có thể:
    // 1. Lưu vào database với bảng guest_bookings
    // 2. Gửi email xác nhận
    // 3. Tích hợp với hệ thống thanh toán
    // 4. Gửi thông báo cho admin

    console.log("Guest booking created:", completeBooking);

    // Giả lập gửi email xác nhận
    await sendConfirmationEmail(completeBooking);

    return NextResponse.json(
      {
        success: true,
        message:
          "Đặt tour thành công! Chúng tôi sẽ liên hệ với bạn trong 24h để xác nhận.",
        bookingId: bookingId,
        booking: completeBooking,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating guest booking:", error);
    return NextResponse.json(
      {
        error: "Đã xảy ra lỗi khi đặt tour. Vui lòng thử lại sau.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

// Giả lập hàm gửi email xác nhận
async function sendConfirmationEmail(booking: any) {
  // Trong thực tế, bạn sẽ tích hợp với dịch vụ email như:
  // - SendGrid
  // - Nodemailer
  // - AWS SES

  console.log(`📧 Sending confirmation email to ${booking.email}`);
  console.log(`📋 Booking details:`, {
    bookingId: booking.id,
    tourName: booking.tourName,
    departureDate: booking.departureDate,
    participants: booking.participants,
    totalPrice: booking.totalPrice,
  });

  // Giả lập delay gửi email
  await new Promise((resolve) => setTimeout(resolve, 100));

  return true;
}

export async function GET() {
  return NextResponse.json(
    {
      message: "Guest Booking API is working",
      endpoints: {
        POST: "/api/guest-bookings - Create a new guest booking",
      },
    },
    { status: 200 },
  );
}
