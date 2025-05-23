"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Loader2,
  MapPin,
  Calendar,
  Users,
  Clock,
  CreditCard,
  CheckCircle,
  AlertCircle,
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
  tourId: string;
  departureDate: string;
  participants: number;
  totalPrice: number;
  notes?: string;
  status: string;
  createdAt: string;
  tour: {
    id: string;
    name: string;
    duration: string;
    location: string;
    image?: string;
    price: number;
  };
  payments: Payment[];
}

interface Payment {
  id: string;
  amount: number;
  paymentMethod: string;
  paymentStatus: string;
  createdAt: string;
}

interface BookingListProps {
  userId: string;
}

export function BookingList({ userId }: BookingListProps) {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Trong ứng dụng thực, chúng ta sẽ gọi API để lấy dữ liệu
        // const response = await fetch('/api/bookings');
        // const data = await response.json();
        // setBookings(data.bookings);

        // Mock data cho demo
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setBookings([
          {
            id: "booking-1",
            tourId: "tour-1",
            departureDate: new Date().toISOString(),
            participants: 2,
            totalPrice: 2000000,
            status: "CONFIRMED",
            createdAt: new Date().toISOString(),
            tour: {
              id: "tour-1",
              name: "Tour Khu di tích Kim Liên",
              duration: "1 ngày",
              location: "Huyện Nam Đàn, Nghệ An",
              image: "https://i.imgur.com/2WmH12Y.jpg",
              price: 1000000,
            },
            payments: [
              {
                id: "payment-1",
                amount: 2000000,
                paymentMethod: "CREDIT_CARD",
                paymentStatus: "PAID",
                createdAt: new Date().toISOString(),
              },
            ],
          },
          {
            id: "booking-2",
            tourId: "tour-2",
            departureDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            participants: 3,
            totalPrice: 3000000,
            status: "PENDING",
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            tour: {
              id: "tour-2",
              name: "Tour Đền Cuông",
              duration: "1 ngày",
              location: "Huyện Thanh Chương, Nghệ An",
              image: "https://i.imgur.com/Jyyua3P.jpg",
              price: 1000000,
            },
            payments: [
              {
                id: "payment-2",
                amount: 3000000,
                paymentMethod: "CASH",
                paymentStatus: "PENDING",
                createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
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
  }, [userId]);

  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === "all") return true;
    if (activeTab === "upcoming") {
      return (
        new Date(booking.departureDate) > new Date() &&
        (booking.status === "CONFIRMED" || booking.status === "PENDING")
      );
    }
    if (activeTab === "completed") return booking.status === "COMPLETED";
    if (activeTab === "cancelled") return booking.status === "CANCELLED";
    return true;
  });

  const handleCancelBooking = async (bookingId: string) => {
    if (!confirm("Bạn có chắc chắn muốn hủy đặt tour này?")) return;

    try {
      setIsLoading(true);

      // Trong ứng dụng thực, chúng ta sẽ gọi API để hủy đặt tour
      // await fetch(`/api/bookings/${bookingId}/cancel`, { method: 'POST' });

      // Mock hủy đặt tour
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Cập nhật danh sách đặt tour
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === bookingId
            ? { ...booking, status: "CANCELLED" }
            : booking
        )
      );

      alert("Hủy đặt tour thành công");
    } catch (err) {
      console.error("Error cancelling booking:", err);
      alert("Đã xảy ra lỗi khi hủy đặt tour");
    } finally {
      setIsLoading(false);
    }
  };

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

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "PAID":
        return (
          <div className="flex items-center bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
            <CheckCircle className="h-3 w-3 mr-1" />
            Đã thanh toán
          </div>
        );
      case "PENDING":
        return (
          <div className="flex items-center bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 text-xs font-medium">
            <Clock className="h-3 w-3 mr-1" />
            Chờ thanh toán
          </div>
        );
      case "FAILED":
        return (
          <div className="flex items-center bg-red-100 text-red-800 rounded-full px-2 py-1 text-xs font-medium">
            <AlertCircle className="h-3 w-3 mr-1" />
            Thất bại
          </div>
        );
      case "REFUNDED":
        return (
          <div className="flex items-center bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs font-medium">
            <CreditCard className="h-3 w-3 mr-1" />
            Đã hoàn tiền
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

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-green-700 mb-4" />
        <p className="text-muted-foreground">Đang tải thông tin đặt tour...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center">
        <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Đã xảy ra lỗi
        </h3>
        <p className="text-red-700">{error}</p>
        <Button
          onClick={() => router.refresh()}
          variant="outline"
          className="mt-4"
        >
          Thử lại
        </Button>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="bg-muted/30 border rounded-md p-12 text-center">
        <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Bạn chưa đặt tour nào</h3>
        <p className="text-muted-foreground mb-6">
          Khám phá các tour du lịch hấp dẫn và đặt ngay để có trải nghiệm tuyệt vời!
        </p>
        <Button
          className="bg-green-700 hover:bg-green-800"
          onClick={() => router.push("/historical-sites")}
        >
          Khám phá các tour
        </Button>
      </div>
    );
  }

  return (
    <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="all">Tất cả</TabsTrigger>
        <TabsTrigger value="upcoming">Sắp tới</TabsTrigger>
        <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
        <TabsTrigger value="cancelled">Đã hủy</TabsTrigger>
      </TabsList>

      <TabsContent value={activeTab} className="space-y-6">
        {filteredBookings.length === 0 ? (
          <div className="bg-muted/30 border rounded-md p-8 text-center">
            <p className="text-muted-foreground">
              Không tìm thấy đặt tour nào trong danh mục này
            </p>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">
                      {booking.tour.name}
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {booking.tour.location}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(booking.status)}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/bookings/${booking.id}`}>
                            Xem chi tiết
                          </Link>
                        </DropdownMenuItem>
                        {booking.status === "PENDING" && (
                          <DropdownMenuItem onClick={() => handleCancelBooking(booking.id)}>
                            Hủy đặt tour
                          </DropdownMenuItem>
                        )}
                        {(booking.status === "COMPLETED" || booking.status === "CONFIRMED") && (
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/bookings/${booking.id}/review`}>
                              Đánh giá
                            </Link>
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Ngày khởi hành</p>
                        <p className="text-sm">
                          {format(new Date(booking.departureDate), "PPP", {
                            locale: vi,
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Thời gian</p>
                        <p className="text-sm">{booking.tour.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Số người</p>
                        <p className="text-sm">{booking.participants} người</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Thanh toán</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm">
                            {booking.totalPrice.toLocaleString()} VNĐ
                          </p>
                          {booking.payments.length > 0 && (
                            getPaymentStatusBadge(booking.payments[0].paymentStatus)
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {booking.tour.image && (
                    <div className="rounded-md overflow-hidden h-48 md:h-full">
                      <img
                        src={booking.tour.image}
                        alt={booking.tour.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push(`/dashboard/bookings/${booking.id}`)}
                >
                  Xem chi tiết
                </Button>

                {booking.status === "PENDING" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-700 border-red-200 hover:bg-red-50 hover:text-red-800"
                    onClick={() => handleCancelBooking(booking.id)}
                  >
                    Hủy đặt tour
                  </Button>
                )}

                {booking.payments.length > 0 &&
                 booking.payments[0].paymentStatus === "PENDING" && (
                  <Button
                    className="bg-green-700 hover:bg-green-800"
                    size="sm"
                    onClick={() => router.push(`/dashboard/payments/${booking.payments[0].id}`)}
                  >
                    Thanh toán ngay
                  </Button>
                )}

                {(booking.status === "COMPLETED" || booking.status === "CONFIRMED") && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/dashboard/bookings/${booking.id}/review`)}
                  >
                    Đánh giá
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))
        )}
      </TabsContent>
    </Tabs>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
