
import { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, CreditCard, Map, CalendarCheck, ShoppingBag, Package, BarChart3, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Trang quản trị | Nghệ An Historical",
  description: "Quản lý hệ thống du lịch Nghệ An Historical",
};

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_TOUR", "ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login?callbackUrl=/admin");
  }

  const userRole = session.user.role;

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Trang quản trị</h1>
        <p className="text-muted-foreground mt-2">
          Chào mừng {session.user.name} - {userRole === "ADMIN_TOUR" ? "Quản lý Tour" : userRole === "ADMIN_SHOP" ? "Quản lý Cửa hàng" : "Super Admin"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Thống kê tổng quan */}
        <div className="md:col-span-2 lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Thống kê tổng quan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(userRole === "ADMIN_TOUR" || userRole === "SUPER_ADMIN") && (
                  <>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-muted-foreground">Tours</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">45</div>
                      <div className="text-sm text-muted-foreground">Bookings</div>
                    </div>
                  </>
                )}
                {(userRole === "ADMIN_SHOP" || userRole === "SUPER_ADMIN") && (
                  <>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">28</div>
                      <div className="text-sm text-muted-foreground">Sản phẩm</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">67</div>
                      <div className="text-sm text-muted-foreground">Đơn hàng</div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Menu quản lý cho Admin Tour */}
        {(userRole === "ADMIN_TOUR" || userRole === "SUPER_ADMIN") && (
          <Card>
            <CardHeader>
              <CardTitle>Quản lý Tour</CardTitle>
              <CardDescription>
                Quản lý tours và bookings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link
                href="/admin/tours"
                className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
              >
                <Map className="h-5 w-5 mr-3 text-muted-foreground" />
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
            </CardContent>
          </Card>
        )}

        {/* Menu quản lý cho Admin Shop */}
        {(userRole === "ADMIN_SHOP" || userRole === "SUPER_ADMIN") && (
          <Card>
            <CardHeader>
              <CardTitle>Quản lý Cửa hàng</CardTitle>
              <CardDescription>
                Quản lý sản phẩm và đơn hàng
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link
                href="/admin/products"
                className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
              >
                <Package className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Quản lý sản phẩm</span>
              </Link>
              <Link
                href="/admin/orders"
                className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
              >
                <ShoppingBag className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Quản lý đơn hàng</span>
              </Link>
              <Link
                href="/admin/payments"
                className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
              >
                <CreditCard className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Quản lý thanh toán</span>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Menu cho Super Admin */}
        {userRole === "SUPER_ADMIN" && (
          <Card>
            <CardHeader>
              <CardTitle>Quản lý hệ thống</CardTitle>
              <CardDescription>
                Chỉ dành cho Super Admin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link
                href="/admin/users"
                className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
              >
                <User className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Quản lý người dùng</span>
              </Link>
              <Link
                href="/admin/analytics"
                className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
              >
                <BarChart3 className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Thống kê doanh thu</span>
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
              >
                <Settings className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Cài đặt hệ thống</span>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Thanh toán - tất cả admin */}
        <Card>
          <CardHeader>
            <CardTitle>Thanh toán</CardTitle>
            <CardDescription>
              Quản lý thanh toán
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/admin/payments"
              className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
            >
              <CreditCard className="h-5 w-5 mr-3 text-muted-foreground" />
              <span>Quản lý thanh toán</span>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
