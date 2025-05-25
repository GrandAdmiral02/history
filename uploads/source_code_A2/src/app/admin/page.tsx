import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, CreditCard, MapPin, CalendarCheck, Tag, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Trang quản trị | Nghệ An Historical",
  description: "Quản lý hệ thống du lịch Nghệ An Historical",
};

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Trang quản trị</h1>
        <p className="text-muted-foreground mt-2">
          Quản lý người dùng, tour, đặt tour và thanh toán
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Người dùng</CardTitle>
            <CardDescription>Số lượng người dùng trong hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <User className="h-10 w-10 text-green-700 mr-4" />
              <div>
                <p className="text-3xl font-bold">128</p>
                <p className="text-sm text-muted-foreground">
                  Tăng 12% so với tháng trước
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Đặt tour</CardTitle>
            <CardDescription>Tổng số đơn đặt tour hiện tại</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CalendarCheck className="h-10 w-10 text-blue-600 mr-4" />
              <div>
                <p className="text-3xl font-bold">85</p>
                <p className="text-sm text-muted-foreground">
                  15 chờ xác nhận
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Doanh thu</CardTitle>
            <CardDescription>Tổng doanh thu trong tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CreditCard className="h-10 w-10 text-purple-600 mr-4" />
              <div>
                <p className="text-3xl font-bold">75.4M</p>
                <p className="text-sm text-muted-foreground">
                  VNĐ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Thống kê đặt tour</CardTitle>
              <CardDescription>
                Phân tích số lượng đặt tour theo thời gian
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center bg-muted/30 rounded-md">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">
                  Biểu đồ thống kê sẽ hiển thị ở đây
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Quản lý hệ thống</CardTitle>
              <CardDescription>
                Truy cập nhanh các chức năng quản lý
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link
                  href="/admin/users"
                  className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <User className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>Quản lý người dùng</span>
                </Link>
                <Link
                  href="/admin/tours"
                  className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>Quản lý tour</span>
                </Link>
                <Link
                  href="/admin/bookings"
                  className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <CalendarCheck className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>Quản lý đặt tour</span>
                </Link>
                <Link
                  href="/admin/payments"
                  className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <CreditCard className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>Quản lý thanh toán</span>
                </Link>
                <Link
                  href="/admin/settings"
                  className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <Tag className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>Cài đặt hệ thống</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
