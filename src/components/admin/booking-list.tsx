"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertCircle, Calendar, Clock, Loader2, MapPin, MoreHorizontal, Users, DollarSign } from "lucide-react";

interface Booking {
  id: string;
  userId?: string;
  tourId: string;
  departureDate: string;
  participants: number;
  totalPrice: number;
  notes?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    name?: string;
    email: string;
    phone?: string;
  };
  tour: {
    id: string;
    name: string;
    location: string;
    duration: string;
    price: number;
  };
  payments: Array<{
    id: string;
    amount: number;
    paymentMethod: string;
    paymentStatus: string;
    createdAt: string;
  }>;
}

export function BookingList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/bookings");

      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await response.json();
      setBookings(data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
      setError("Không thể tải dữ liệu đặt tour");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === "all") return true;
    if (activeTab === "pending") return booking.status === "PENDING";
    if (activeTab === "confirmed") return booking.status === "CONFIRMED";
    if (activeTab === "completed") return booking.status === "COMPLETED";
    if (activeTab === "cancelled") return booking.status === "CANCELLED";
    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Chờ xử lý
          </Badge>
        );
      case "CONFIRMED":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Đã xác nhận
          </Badge>
        );
      case "COMPLETED":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Hoàn thành
          </Badge>
        );
      case "CANCELLED":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Đã hủy
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            {status}
          </Badge>
        );
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "PAID":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Đã thanh toán
          </Badge>
        );
      case "PENDING":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Chờ thanh toán
          </Badge>
        );
      case "FAILED":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Thất bại
          </Badge>
        );
      case "REFUNDED":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Đã hoàn tiền
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            {status}
          </Badge>
        );
    }
  };

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update booking status");
      }

      // Refresh bookings list
      await fetchBookings();
      alert(`Đã cập nhật trạng thái thành ${newStatus}`);
    } catch (error) {
      console.error("Error updating booking status:", error);
      alert("Đã xảy ra lỗi khi cập nhật trạng thái");
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-green-700 mb-4" />
        <p className="text-muted-foreground">Đang tải dữ liệu đặt tour...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center">
        <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">Lỗi tải dữ liệu</h3>
        <p className="text-red-600 mb-4">{error}</p>
        <Button onClick={fetchBookings} variant="outline">
          Thử lại
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng đặt tour</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookings.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chờ xử lý</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bookings.filter(b => b.status === "PENDING").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đã xác nhận</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bookings.filter(b => b.status === "CONFIRMED").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bookings
                .filter(b => b.status === "COMPLETED")
                .reduce((sum, b) => sum + b.totalPrice, 0)
                .toLocaleString('vi-VN')}đ
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="pending">Chờ xử lý</TabsTrigger>
          <TabsTrigger value="confirmed">Đã xác nhận</TabsTrigger>
          <TabsTrigger value="completed">Hoàn thành</TabsTrigger>
          <TabsTrigger value="cancelled">Đã hủy</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <Card>
            <CardHeader>
              <CardTitle>Danh sách đặt tour</CardTitle>
              <CardDescription>
                Quản lý tất cả các đặt tour từ khách hàng
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredBookings.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Không tìm thấy đặt tour nào</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Khách hàng</TableHead>
                      <TableHead>Tour</TableHead>
                      <TableHead>Ngày khởi hành</TableHead>
                      <TableHead>Số người</TableHead>
                      <TableHead>Tổng tiền</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Thanh toán</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              {booking.user?.name || "Khách vãng lai"}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {booking.user?.email}
                            </div>
                            {booking.user?.phone && (
                              <div className="text-sm text-muted-foreground">
                                {booking.user.phone}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{booking.tour.name}</div>
                            <div className="text-sm text-muted-foreground flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {booking.tour.location}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {booking.tour.duration}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {new Date(booking.departureDate).toLocaleDateString('vi-VN')}
                        </TableCell>
                        <TableCell>{booking.participants} người</TableCell>
                        <TableCell className="font-medium">
                          {booking.totalPrice.toLocaleString('vi-VN')}đ
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(booking.status)}
                        </TableCell>
                        <TableCell>
                          {booking.payments.length > 0 ? (
                            getPaymentStatusBadge(booking.payments[0].paymentStatus)
                          ) : (
                            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                              Chưa thanh toán
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => handleStatusChange(booking.id, "CONFIRMED")}
                                disabled={booking.status === "CONFIRMED"}
                              >
                                Xác nhận
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleStatusChange(booking.id, "COMPLETED")}
                                disabled={booking.status === "COMPLETED"}
                              >
                                Hoàn thành
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleStatusChange(booking.id, "CANCELLED")}
                                disabled={booking.status === "CANCELLED"}
                                className="text-red-600"
                              >
                                Hủy bỏ
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}