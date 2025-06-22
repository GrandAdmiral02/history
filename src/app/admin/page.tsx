"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  ShoppingBag,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  Package,
  BarChart3,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (
    !session ||
    (session.user?.role !== "ADMIN" && session.user?.role !== "SUPER_ADMIN")
  ) {
    redirect("/login");
  }

  const isSuper = session.user?.role === "SUPER_ADMIN";

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {isSuper ? "Super Admin Dashboard" : "Admin Dashboard"}
        </h1>
        <p className="text-muted-foreground">
          Chào mừng {session.user?.name} - Quản lý hệ thống Nghệ An Historical
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng Tours</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 tour mới tháng này
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sản phẩm</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+8 sản phẩm mới</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Đặt tour hôm nay
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+3 so với hôm qua</p>
          </CardContent>
        </Card>

        {isSuper && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Doanh thu tháng
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₫45.2M</div>
              <p className="text-xs text-muted-foreground">
                +12% so với tháng trước
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tour Management */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <CardTitle>Quản lý Tours</CardTitle>
            </div>
            <CardDescription>
              Thêm, sửa, xóa và quản lý các tour du lịch
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/tours">
                  <MapPin className="mr-2 h-4 w-4" />
                  Xem tất cả tours
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link href="/admin/tours/new">Thêm tour mới</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Shop Management */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-orange-600" />
              <CardTitle>Quản lý Cửa hàng</CardTitle>
            </div>
            <CardDescription>
              Thêm, sửa, xóa sản phẩm trong cửa hàng
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/products">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Xem tất cả sản phẩm
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link href="/admin/products/new">Thêm sản phẩm mới</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bookings */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <CardTitle>Đặt Tours</CardTitle>
            </div>
            <CardDescription>
              Xem và quản lý các đặt tour từ khách hàng
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/bookings">
                  <Calendar className="mr-2 h-4 w-4" />
                  Xem đặt tour
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link href="/admin/bookings?status=pending">
                  Đặt tour chờ xử lý
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Analytics - Chỉ Super Admin */}
        {isSuper && (
          <>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <CardTitle>Thống kê doanh thu</CardTitle>
                </div>
                <CardDescription>
                  Xem báo cáo doanh thu và phân tích
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button asChild className="w-full justify-start">
                    <Link href="/admin/analytics">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Xem thống kê
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/admin/analytics/revenue">
                      Báo cáo doanh thu
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <CardTitle>Phân tích xu hướng</CardTitle>
                </div>
                <CardDescription>
                  Theo dõi xu hướng đặt tour và doanh thu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button asChild className="w-full justify-start">
                    <Link href="/admin/trends">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Xem xu hướng
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/admin/reports">Báo cáo tổng hợp</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Users Management */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-indigo-600" />
              <CardTitle>Quản lý người dùng</CardTitle>
            </div>
            <CardDescription>Xem thông tin khách hàng và admin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/users">
                  <Users className="mr-2 h-4 w-4" />
                  Xem người dùng
                </Link>
              </Button>
              {isSuper && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link href="/admin/users/new">Thêm admin mới</Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
