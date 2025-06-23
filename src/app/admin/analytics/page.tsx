
import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Thống kê doanh thu | Super Admin",
  description: "Thống kê doanh thu hệ thống",
};

export default async function AnalyticsPage() {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "SUPER_ADMIN") {
    redirect("/login");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Thống kê doanh thu</h1>
        <p className="text-muted-foreground mt-2">
          Báo cáo tổng hợp doanh thu hệ thống
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Doanh thu Tour</h3>
          <p className="text-3xl font-bold text-blue-600">50,000,000 VNĐ</p>
          <p className="text-sm text-muted-foreground">Tháng này</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Doanh thu Shop</h3>
          <p className="text-3xl font-bold text-green-600">25,000,000 VNĐ</p>
          <p className="text-sm text-muted-foreground">Tháng này</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Tổng doanh thu</h3>
          <p className="text-3xl font-bold text-purple-600">75,000,000 VNĐ</p>
          <p className="text-sm text-muted-foreground">Tháng này</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Tăng trưởng</h3>
          <p className="text-3xl font-bold text-orange-600">+15%</p>
          <p className="text-sm text-muted-foreground">So với tháng trước</p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Biểu đồ doanh thu</h2>
        <p className="text-muted-foreground">
          Biểu đồ thống kê chi tiết sẽ được phát triển ở đây.
        </p>
      </div>
    </div>
  );
}
