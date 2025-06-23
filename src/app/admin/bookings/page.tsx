
import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Quản lý đặt tour | Admin",
  description: "Quản lý đặt tour du lịch",
};

export default async function BookingsAdminPage() {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quản lý đặt tour</h1>
        <p className="text-muted-foreground mt-2">
          Theo dõi và xử lý đặt tour
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Danh sách đặt tour</h2>
        <p className="text-muted-foreground">
          Tính năng quản lý đặt tour sẽ được phát triển ở đây.
        </p>
        <p className="text-sm text-green-600 mt-2">
          Quyền truy cập: {session.user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin Tour"}
        </p>
      </div>
    </div>
  );
}
