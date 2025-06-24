
"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Loader2,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  MapPin,
  Calendar,
  Eye,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Booking {
  id: string;
  userId: string;
  tourId: string;
  departureDate: string;
  participants: number;
  totalPrice: number;
  notes?: string;
  status: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  tour: {
    id: string;
    name: string;
    location: string;
    duration: string;
  };
  payments: Array<{
    id: string;
    amount: number;
    paymentStatus: string;
    paymentMethod: string;
  }>;
}

export function BookingList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Mock data cho demo - trong thực tế sẽ gọi API
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        setBookings([
          {
            id: "booking-1",
            userId: "user-1",
            tourId: "tour-1",
            departureDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            participants: 2,
            totalPrice: 2000000,
            status: "CONFIRMED",
            createdAt: new Date().toISOString(),
            user: {
              id: "user-1",
              name: "Nguyễn Văn A",
              email: "nguyenvana@email.com",
            },
            tour: {
              id: "tour-1",
              name: "Tour Khu di tích Kim Liên",
              location: "Huyện Nam Đàn, Nghệ An",
              duration: "1 ngày",
            },
            payments: [
              {
                id: "payment-1",
                amount: 2000000,
                paymentStatus: "PAID",
                paymentMethod: "CREDIT_CARD",
              },
            ],
          },
          {
            id: "booking-2",
            userId: "user-2",
            tourId: "tour-2",
            departureDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            participants: 4,
            totalPrice: 4000000,
            status: "PENDING",
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            user: {
              id: "user-2",
              name: "Trần Thị B",
              email: "tranthib@email.com",
            },
            tour: {
              id: "tour-2",
              name: "Tour Đền Cuông",
              location: "Huyện Thanh Chương, Nghệ An",
              duration: "1 ngày",
            },
            payments: [
              {
                id: "payment-2",
                amount: 4000000,
                paymentStatus: "PENDING",
                paymentMethod: "CASH",
              },
            ],
          },
          {
            id: "booking-3",
            userId: "user-3",
            tourId: "tour-3",
            departureDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            participants: 3,
            totalPrice: 3000000,
            status: "COMPLETED",
            createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            user: {
              id: "user-3",
              name: "Lê Văn C",
              email: "levanc@email.com",
            },
            tour: {
              id: "tour-3",
              name: "Tour Hành trình về nguồn",
              location: "Nghệ An",
              duration: "2 ngày 1 đêm",
            },
            payments: [
              {
                id: "payment-3",
                amount: 3000000,
                paymentStatus: "PAID",
                paymentMethod: "E_WALLET",
              },
            ],
          },
        ]);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Không thể tải dữ liệu đặt tour");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const filteredBookings = bookings
    .filter((booking) => {
      if (activeTab === "all") return true;
      if (activeTab === "pending") return booking.status === "PENDING";
      if (activeTab === "confirmed") return booking.status === "CONFIRMED";
      if (activeTab === "completed") return booking.status === "COMPLETED";
      if (activeTab === "cancelled") return booking.status === "CANCELLED";
      return true;
    })
    .filter((booking) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        booking.tour.name.toLowerCase().includes(query) ||
        booking.user.name.toLowerCase().includes(query) ||
        booking.user.email.toLowerCase().includes(query)
      );
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return (
          <div className="flex items-center bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
            <CheckCircle className="h-3 w-3 mr-1" />
            Đã xác nhận
          </div>
        );
      case "PENDING":
        return (
          <div className="flex items-center bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 text-xs font-medium">
            <Clock className="h-3 w-3 mr-1" />
            Chờ xác nhận
          </div>
        );
      case "CANCELLED":
        return (
          <div className="flex items-center bg-red-100 text-red-800 rounded-full px-2 py-1 text-xs font-medium">
            <AlertCircle className="h-3 w-3 mr-1" />
            Đã hủy
          </div>
        );
      case "COMPLETED":
        return (
          <div className="flex items-center bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs font-medium">
            <CheckCircle className="h-3 w-3 mr-1" />
            Hoàn thành
          </div>
        );
      default:
        return (
          <div className="flex items-center bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">
            {status}
          </div>
        );
    }
  };

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    try {
      // Mock update - trong thực tế sẽ gọi API
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === bookingId ? { ...booking, status: newStatus } : booking
        )
      );
      alert(`Đã cập nhật trạng thái thành ${newStatus}`);
    } catch (error) {
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
        <h3 className="text-lg font-semibold text-red-800 mb-2">Đã xảy ra lỗi</h3>
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm theo tên tour, khách hàng hoặc email"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="pending">Chờ xác nhận</TabsTrigger>
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
                            <p className="font-medium">{booking.user.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.user.email}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{booking.tour.name}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              {booking.tour.location}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            {format(new Date(booking.departureDate), "dd/MM/yyyy", {
                              locale: vi,
                            })}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                            {booking.participants}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {booking.totalPrice.toLocaleString()} VNĐ
                        </TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell>
                          {booking.payments.length > 0 && (
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                booking.payments[0].paymentStatus === "PAID"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {booking.payments[0].paymentStatus === "PAID"
                                ? "Đã thanh toán"
                                : "Chưa thanh toán"}
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                Xem chi tiết
                              </DropdownMenuItem>
                              {booking.status === "PENDING" && (
                                <>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleStatusChange(booking.id, "CONFIRMED")
                                    }
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Xác nhận
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleStatusChange(booking.id, "CANCELLED")
                                    }
                                  >
                                    <AlertCircle className="h-4 w-4 mr-2" />
                                    Hủy
                                  </DropdownMenuItem>
                                </>
                              )}
                              {booking.status === "CONFIRMED" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleStatusChange(booking.id, "COMPLETED")
                                  }
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Hoàn thành
                                </DropdownMenuItem>
                              )}
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
