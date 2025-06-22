"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, ChevronLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Tour {
  id: string;
  name: string;
  duration: string;
  price: number;
  status: "active" | "inactive";
  bookings: number;
  created: string;
}

// Mock data - trong thực tế sẽ fetch từ API
const mockTours: Tour[] = [
  {
    id: "ve-nguon",
    name: "Hành trình về nguồn",
    duration: "3 ngày 2 đêm",
    price: 2990000,
    status: "active",
    bookings: 45,
    created: "2024-01-15",
  },
  {
    id: "con-duong-huyen-thoai",
    name: "Con đường huyền thoại",
    duration: "2 ngày 1 đêm",
    price: 1890000,
    status: "active",
    bookings: 32,
    created: "2024-02-20",
  },
  {
    id: "di-san-tam-linh",
    name: "Di sản văn hóa tâm linh",
    duration: "4 ngày 3 đêm",
    price: 3490000,
    status: "active",
    bookings: 28,
    created: "2024-03-10",
  },
  {
    id: "dau-an-danh-nhan",
    name: "Dấu ấn danh nhân",
    duration: "3 ngày 2 đêm",
    price: 2590000,
    status: "inactive",
    bookings: 15,
    created: "2024-01-05",
  },
];

export default function ToursManagement() {
  const { data: session, status } = useSession();
  const [tours, setTours] = useState<Tour[]>(mockTours);

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

  const handleDeleteTour = (tourId: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa tour này?")) {
      setTours(tours.filter((tour) => tour.id !== tourId));
      // Trong thực tế sẽ gọi API để xóa
      console.log("Deleted tour:", tourId);
    }
  };

  const toggleTourStatus = (tourId: string) => {
    setTours(
      tours.map((tour) =>
        tour.id === tourId
          ? {
              ...tour,
              status: tour.status === "active" ? "inactive" : "active",
            }
          : tour,
      ),
    );
    // Trong thực tế sẽ gọi API để cập nhật
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
            <h1 className="text-3xl font-bold">Quản lý Tours</h1>
            <p className="text-muted-foreground">
              Thêm, sửa, xóa và quản lý các tour du lịch
            </p>
          </div>
        </div>
        <Button asChild>
          <Link href="/admin/tours/new">
            <Plus className="mr-2 h-4 w-4" />
            Thêm tour mới
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tổng Tours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tours.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Tours Hoạt động
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {tours.filter((t) => t.status === "active").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tổng Đặt tour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tours.reduce((acc, tour) => acc + tour.bookings, 0)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Doanh thu ước tính
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₫
              {Math.round(
                tours.reduce(
                  (acc, tour) => acc + tour.price * tour.bookings,
                  0,
                ) / 1000000,
              )}
              M
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tours Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách Tours</CardTitle>
          <CardDescription>
            Quản lý tất cả các tour du lịch trong hệ thống
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên Tour</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Đặt tour</TableHead>
                <TableHead>Ngày tạo</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tours.map((tour) => (
                <TableRow key={tour.id}>
                  <TableCell className="font-medium">{tour.name}</TableCell>
                  <TableCell>{tour.duration}</TableCell>
                  <TableCell>{tour.price.toLocaleString()} VNĐ</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        tour.status === "active" ? "default" : "secondary"
                      }
                      className={tour.status === "active" ? "bg-green-600" : ""}
                    >
                      {tour.status === "active" ? "Hoạt động" : "Tạm dừng"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{tour.bookings}</span> lượt
                  </TableCell>
                  <TableCell>
                    {new Date(tour.created).toLocaleDateString("vi-VN")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/destinations/${tour.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/admin/tours/${tour.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleTourStatus(tour.id)}
                      >
                        {tour.status === "active" ? "Tạm dừng" : "Kích hoạt"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteTour(tour.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
