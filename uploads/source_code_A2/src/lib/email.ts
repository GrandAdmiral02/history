import type { EmailConfig } from './types';

/**
 * Cấu hình email service
 */
const emailConfig: EmailConfig = {
  // Trong môi trường thực tế, bạn sẽ cấu hình dịch vụ email như Sendgrid, Mailchimp, v.v.
  fromEmail: process.env.EMAIL_FROM || 'no-reply@ngheantourism.com',
  host: process.env.EMAIL_SERVER_HOST || 'localhost',
  port: Number.parseInt(process.env.EMAIL_SERVER_PORT || '1025', 10),
  secure: process.env.EMAIL_SERVER_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_SERVER_USER || '',
    pass: process.env.EMAIL_SERVER_PASSWORD || '',
  },
};

/**
 * Gửi email xác thực
 * @param email Email người nhận
 * @param token Token xác thực
 * @param name Tên người nhận
 * @returns Promise<boolean>
 */
export async function sendVerificationEmail(
  email: string,
  token: string,
  name?: string
): Promise<boolean> {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`;

  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #047857;">Nghệ An Historical</h1>
      </div>
      <p>Xin chào ${name || 'bạn'},</p>
      <p>Cảm ơn bạn đã đăng ký tài khoản tại Nghệ An Historical. Để hoàn tất quá trình đăng ký, vui lòng xác thực email của bạn bằng cách nhấp vào nút bên dưới:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" style="background-color: #047857; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Xác thực Email</a>
      </div>
      <p>Hoặc bạn có thể sao chép và dán đường link này vào trình duyệt:</p>
      <p style="word-break: break-all; background-color: #f5f5f5; padding: 10px; border-radius: 4px;">${verificationUrl}</p>
      <p>Link xác thực có hiệu lực trong vòng 24 giờ.</p>
      <p>Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.</p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; color: #666; font-size: 14px;">
        <p>© 2024 Nghệ An Historical. Tất cả các quyền được bảo lưu.</p>
      </div>
    </div>
  `;

  try {
    // Trong môi trường phát triển, chỉ log ra console
    if (process.env.NODE_ENV === 'development') {
      console.log(`
        ===============================
        Email xác thực sẽ được gửi đến: ${email}
        Link xác thực: ${verificationUrl}
        (Link có hiệu lực trong 24 giờ)
        ===============================
      `);
      return true;
    }

    // Trong môi trường production sẽ gửi email thực tế
    // Uncomment đoạn code dưới đây và cấu hình dịch vụ email của bạn
    /*
    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass,
      },
    });

    await transporter.sendMail({
      from: `"Nghệ An Historical" <${emailConfig.fromEmail}>`,
      to: email,
      subject: 'Xác thực tài khoản của bạn',
      html: emailContent,
    });
    */

    return true;
  } catch (error) {
    console.error('Error sending verification email:', error);
    return false;
  }
}

/**
 * Gửi email đặt lại mật khẩu
 * @param email Email người nhận
 * @param token Token đặt lại mật khẩu
 * @param name Tên người nhận
 * @returns Promise<boolean>
 */
export async function sendPasswordResetEmail(
  email: string,
  token: string,
  name?: string
): Promise<boolean> {
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #047857;">Nghệ An Historical</h1>
      </div>
      <p>Xin chào ${name || 'bạn'},</p>
      <p>Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Để đặt lại mật khẩu, vui lòng nhấp vào nút bên dưới:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background-color: #047857; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Đặt lại mật khẩu</a>
      </div>
      <p>Hoặc bạn có thể sao chép và dán đường link này vào trình duyệt:</p>
      <p style="word-break: break-all; background-color: #f5f5f5; padding: 10px; border-radius: 4px;">${resetUrl}</p>
      <p>Link đặt lại mật khẩu có hiệu lực trong vòng 1 giờ.</p>
      <p>Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này và mật khẩu của bạn sẽ không bị thay đổi.</p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; color: #666; font-size: 14px;">
        <p>© 2024 Nghệ An Historical. Tất cả các quyền được bảo lưu.</p>
      </div>
    </div>
  `;

  try {
    // Trong môi trường phát triển, chỉ log ra console
    if (process.env.NODE_ENV === 'development') {
      console.log(`
        ===============================
        Email đặt lại mật khẩu sẽ được gửi đến: ${email}
        Link đặt lại mật khẩu: ${resetUrl}
        (Link có hiệu lực trong 1 giờ)
        ===============================
      `);
      return true;
    }

    // Trong môi trường production sẽ gửi email thực tế
    // Thực hiện tương tự như hàm sendVerificationEmail

    return true;
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return false;
  }
}

/**
 * Gửi email xác nhận đặt tour
 * @param email Email người nhận
 * @param bookingDetails Chi tiết đặt tour
 * @param name Tên người nhận
 * @returns Promise<boolean>
 */
export async function sendBookingConfirmationEmail(
  email: string,
  bookingDetails: {
    id: string;
    tourName?: string;
    departureDate: string;
    participants: number;
    totalPrice: number;
  },
  name?: string
): Promise<boolean> {
  try {
    // Triển khai tương tự như các hàm trên
    console.log(`Email xác nhận đặt tour sẽ được gửi đến: ${email}`);
    return true;
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    return false;
  }
}
