import type { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/auth/profile-form";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Hồ sơ cá nhân | Nghệ An Historical",
  description: "Quản lý thông tin cá nhân của bạn",
};

export default async function ProfilePage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/login?callbackUrl=/profile");
  }

  // Lấy thông tin chi tiết người dùng từ database
  const userData = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      phone: true,
      address: true,
      emailVerified: true,
      createdAt: true,
    },
  });

  if (!userData) {
    redirect("/login");
  }

  return (
    <div className="container max-w-screen-lg mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Hồ sơ cá nhân</h1>
        <p className="text-muted-foreground mt-2">
          Quản lý thông tin cá nhân của bạn
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ProfileForm user={userData} />
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-4 bg-muted/30">
            <h3 className="font-semibold mb-2">Thông tin tài khoản</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span>{session.user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vai trò</span>
                <span>
                  {session.user.role === "ADMIN" && "Quản trị viên"}
                  {session.user.role === "GUIDE" && "Hướng dẫn viên"}
                  {session.user.role === "USER" && "Người dùng"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tham gia từ</span>
                <span>
                  {userData.createdAt ?
                    new Date(userData.createdAt).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) :
                    "Không xác định"
                  }
                </span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Đang theo dõi</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Tour mới</span>
                <span className="inline-flex h-5 w-10 items-center rounded-full bg-green-200 px-1 text-green-700">
                  <span className="mx-auto h-3 w-3 rounded-full bg-green-700"></span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Khuyến mãi đặc biệt</span>
                <span className="inline-flex h-5 w-10 items-center rounded-full bg-green-200 px-1 text-green-700">
                  <span className="mx-auto h-3 w-3 rounded-full bg-green-700"></span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tin tức du lịch</span>
                <span className="inline-flex h-5 w-10 items-center rounded-full bg-green-200 px-1 text-green-700">
                  <span className="mx-auto h-3 w-3 rounded-full bg-green-700"></span>
                </span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Liên kết tài khoản</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2 text-blue-600"
                  >
                    <path
                      fill="currentColor"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  <span>Facebook</span>
                </div>
                <button className="text-sm text-green-700 hover:underline">
                  Liên kết
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2 text-red-600"
                  >
                    <path
                      fill="currentColor"
                      d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.2c-3.978 0-7.2-3.222-7.2-7.2 0-3.978 3.222-7.2 7.2-7.2 3.978 0 7.2 3.222 7.2 7.2 0 3.978-3.222 7.2-7.2 7.2z"
                    />
                  </svg>
                  <span>Google</span>
                </div>
                <span className="text-sm text-green-700">Đã liên kết</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
