"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Users,
  ShoppingBag,
  MapPin,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data cho analytics
const analyticsData = {
  revenue: {
    thisMonth: 45200000,
    lastMonth: 40300000,
    growth: 12.2,
  },
  bookings: {
    thisMonth: 123,
    lastMonth: 108,
    growth: 13.9,
  },
  products: {
    thisMonth: 67,
    lastMonth: 45,
    growth: 48.9,
  },
  customers: {
    thisMonth: 89,
    lastMonth: 76,
    growth: 17.1,
  },
};

const topTours = [
  { name: "Hành trình về nguồn", bookings: 45, revenue: 134550000 },
  { name: "Con đường huyền thoại", bookings: 32, revenue: 60480000 },
  { name: "Di sản văn hóa tâm linh", bookings: 28, revenue: 97720000 },
  { name: "Dấu ấn danh nhân", bookings: 18, revenue: 46620000 },
];

const topProducts = [
  { name: "Móc khóa Kim Liên", sales: 234, revenue: 10530000 },
  { name: "Áo thun Nghệ An Historical", sales: 145, revenue: 50750000 },
  { name: "Nón lá truyền thống", sales: 89, revenue: 10680000 },
  { name: "Túi vải bố Nghệ An", sales: 67, revenue: 12060000 },
];

const monthlyData = [
  { month: "T1", tours: 89, products: 234, revenue: 38200000 },
  { month: "T2", tours: 95, products: 267, revenue: 41500000 },
  { month: "T3", tours: 108, products: 298, revenue: 40300000 },
  { month: "T4", tours: 123, products: 334, revenue: 45200000 },
];

export default function Analytics() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!session || session.user?.role !== "SUPER_ADMIN") {
    redirect("/admin");
  }

  const formatCurrency = (amount: number) => {
    return `₫${(amount / 1000000).toFixed(1)}M`;
  };

  const getGrowthBadge = (growth: number) => {
    const isPositive = growth > 0;
    return (
      <Badge
        variant={isPositive ? "default" : "destructive"}
        className={isPositive ? "bg-green-600" : ""}
      >
        {isPositive ? (
          <TrendingUp className="h-3 w-3 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 mr-1" />
        )}
        {isPositive ? "+" : ""}
        {growth.toFixed(1)}%
      </Badge>
    );
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Thống kê doanh thu</h1>
            <p className="text-muted-foreground">
              Phân tích chi tiết doanh thu và hiệu suất kinh doanh
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Doanh thu tháng này
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(analyticsData.revenue.thisMonth)}
            </div>
            <div className="flex items-center space-x-2 mt-1">
              {getGrowthBadge(analyticsData.revenue.growth)}
              <span className="text-xs text-muted-foreground">
                so với tháng trước
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đặt tour</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.bookings.thisMonth}
            </div>
            <div className="flex items-center space-x-2 mt-1">
              {getGrowthBadge(analyticsData.bookings.growth)}
              <span className="text-xs text-muted-foreground">
                so với tháng trước
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bán sản phẩm</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.products.thisMonth}
            </div>
            <div className="flex items-center space-x-2 mt-1">
              {getGrowthBadge(analyticsData.products.growth)}
              <span className="text-xs text-muted-foreground">
                so với tháng trước
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Khách hàng mới
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.customers.thisMonth}
            </div>
            <div className="flex items-center space-x-2 mt-1">
              {getGrowthBadge(analyticsData.customers.growth)}
              <span className="text-xs text-muted-foreground">
                so với tháng trước
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Tours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-green-600" />
              Top Tours theo doanh thu
            </CardTitle>
            <CardDescription>
              Các tour có doanh thu cao nhất tháng này
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTours.map((tour, index) => (
                <div
                  key={tour.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0
                          ? "bg-yellow-100 text-yellow-800"
                          : index === 1
                            ? "bg-gray-100 text-gray-800"
                            : index === 2
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{tour.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {tour.bookings} đặt tour
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {formatCurrency(tour.revenue)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-orange-600" />
              Top Sản phẩm bán chạy
            </CardTitle>
            <CardDescription>
              Sản phẩm có doanh số cao nhất tháng này
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0
                          ? "bg-yellow-100 text-yellow-800"
                          : index === 1
                            ? "bg-gray-100 text-gray-800"
                            : index === 2
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {product.sales} đã bán
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {formatCurrency(product.revenue)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
            Xu hướng 4 tháng gần đây
          </CardTitle>
          <CardDescription>
            Tổng quan doanh thu, đặt tour và bán sản phẩm theo tháng
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div
                key={data.month}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg bg-muted/50"
              >
                <div className="font-medium text-lg">{data.month}/2024</div>
                <div>
                  <div className="text-sm text-muted-foreground">Tours</div>
                  <div className="font-medium">{data.tours} đặt tour</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Sản phẩm</div>
                  <div className="font-medium">{data.products} đã bán</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Doanh thu</div>
                  <div className="font-medium">
                    {formatCurrency(data.revenue)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
