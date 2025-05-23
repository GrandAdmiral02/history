import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Đăng nhập | Nghệ An Historical",
  description: "Đăng nhập vào tài khoản để đặt tour và quản lý thông tin cá nhân",
};

export default function LoginPage() {
  return (
    <div className="container max-w-screen-lg mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <div className="bg-green-700/10 p-6 rounded-lg border border-green-200">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Đăng nhập để trải nghiệm
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 mr-2 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Đặt tour trực tuyến nhanh chóng và tiện lợi</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 mr-2 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Quản lý thông tin đặt tour và lịch sử thanh toán</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 mr-2 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Nhận thông báo về các ưu đãi đặc biệt và tour mới</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 mr-2 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Đánh giá và chia sẻ trải nghiệm của bạn</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
