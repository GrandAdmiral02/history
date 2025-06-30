import { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { TourList } from "@/components/admin/tour-list";

export const metadata: Metadata = {
  title: "Quản lý Tour | Admin",
  description: "Quản lý tour du lịch",
};

export default async function ToursAdminPage() {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Quản lý Tour</h1>
          <p className="text-muted-foreground mt-2">
            Quản lý các tour du lịch và điểm đến
          </p>
        </div>
        <div>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Quay lại Dashboard
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Danh sách Tours</h2>
          <div className="text-sm text-muted-foreground">
            Chức năng thêm tour đã bị loại bỏ
          </div>
        </div>
        <TourList />
      </div>
    </div>
  );
}