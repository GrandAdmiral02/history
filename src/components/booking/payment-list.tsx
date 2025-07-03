
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
  CreditCard,
  Wallet,
  DollarSign,
  Download,
  ChevronRight,
} from "lucide-react";

interface TourPayment {
  id: string;
  bookingId: string;
  amount: number;
  paymentMethod: string;
  paymentStatus: string;
  transactionId?: string;
  createdAt: string;
  booking: {
    id: string;
    tourId: string;
    departureDate: string;
    participants: number;
    status: string;
    tour: {
      id: string;
      name: string;
    };
  };
}

interface PaymentListProps {
  userId: string;
}

export function PaymentList({ userId }: PaymentListProps) {
  const router = useRouter();
  const [payments, setPayments] = useState<TourPayment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchTourPayments = async () => {
      try {
        console.log("Fetching tour payments for user:", userId);
        
        // Gọi API để lấy dữ liệu thanh toán tour thực tế
        const response = await fetch(`/api/payments?type=tour&userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched payments data:", data);
        
        // Transform data để match với interface TourPayment
        const transformedPayments: TourPayment[] = data.map((payment: any) => ({
          id: payment.id,
          bookingId: payment.bookingId,
          amount: payment.amount,
          paymentMethod: payment.paymentMethod,
          paymentStatus: payment.paymentStatus,
          transactionId: payment.transactionId,
          createdAt: payment.createdAt,
          booking: {
            id: payment.booking?.id || '',
            tourId: payment.booking?.tourId || '',
            departureDate: payment.booking?.departureDate || '',
            participants: payment.booking?.participants || 0,
            status: payment.booking?.status || 'PENDING',
            tour: {
              id: payment.booking?.tour?.id || '',
              name: payment.booking?.tour?.name || 'Unknown Tour',
            },
          },
        }));

        setPayments(transformedPayments);
      } catch (err) {
        console.error("Error fetching tour payments:", err);
        setError("Không thể tải dữ liệu thanh toán tour: " + (err instanceof Error ? err.message : "Lỗi không xác định"));
        // Fallback to empty array on error
        setPayments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTourPayments();
  }, [userId]);

  const filteredPayments = payments
    .filter((payment) => {
      if (activeTab === "all") return true;
      if (activeTab === "paid") return payment.paymentStatus === "PAID";
      if (activeTab === "pending") return payment.paymentStatus === "PENDING";
      if (activeTab === "failed") return payment.paymentStatus === "FAILED";
      return true;
    })
    .filter((payment) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        payment.booking.tour.name.toLowerCase().includes(query) ||
        (payment.transactionId && payment.transactionId.toLowerCase().includes(query))
      );
    });

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "CREDIT_CARD":
        return <CreditCard className="h-4 w-4 text-blue-600" />;
      case "E_WALLET":
        return <Wallet className="h-4 w-4 text-purple-600" />;
      case "BANK_TRANSFER":
        return <DollarSign className="h-4 w-4 text-green-600" />;
      case "CASH":
        return <DollarSign className="h-4 w-4 text-orange-600" />;
      default:
        return <CreditCard className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "CREDIT_CARD":
        return "Thẻ tín dụng/ghi nợ";
      case "E_WALLET":
        return "Ví điện tử";
      case "BANK_TRANSFER":
        return "Chuyển khoản";
      case "CASH":
        return "Tiền mặt";
      default:
        return method;
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
        <p className="text-muted-foreground">Đang tải lịch sử thanh toán tour...</p>
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

  if (payments.length === 0) {
    return (
      <div className="bg-muted/30 border rounded-md p-12 text-center">
        <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Chưa có giao dịch thanh toán tour nào</h3>
        <p className="text-muted-foreground mb-6">
          Khi bạn đặt tour và thực hiện thanh toán, các giao dịch sẽ hiển thị ở đây
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
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm theo tên tour hoặc mã giao dịch"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="paid">Đã thanh toán</TabsTrigger>
          <TabsTrigger value="pending">Chờ thanh toán</TabsTrigger>
          <TabsTrigger value="failed">Thất bại</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Lịch sử thanh toán tour</CardTitle>
              <CardDescription>
                Danh sách tất cả các giao dịch thanh toán tour du lịch của bạn
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredPayments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Không tìm thấy giao dịch thanh toán tour nào
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Thời gian</TableHead>
                      <TableHead>Tour</TableHead>
                      <TableHead>Phương thức</TableHead>
                      <TableHead>Mã giao dịch</TableHead>
                      <TableHead>Số tiền</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">
                          {format(new Date(payment.createdAt), "dd/MM/yyyy", {
                            locale: vi,
                          })}
                          <div className="text-xs text-muted-foreground">
                            {format(new Date(payment.createdAt), "HH:mm", {
                              locale: vi,
                            })}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Link
                            href={`/dashboard/bookings/${payment.bookingId}`}
                            className="hover:underline font-medium"
                          >
                            {payment.booking.tour.name}
                          </Link>
                          <div className="text-xs text-muted-foreground">
                            {payment.booking.participants} người
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getPaymentMethodIcon(payment.paymentMethod)}
                            <span className="ml-2">
                              {getPaymentMethodName(payment.paymentMethod)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {payment.transactionId || "-"}
                        </TableCell>
                        <TableCell className="font-medium">
                          {payment.amount.toLocaleString()} VNĐ
                        </TableCell>
                        <TableCell>
                          {getPaymentStatusBadge(payment.paymentStatus)}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => router.push(`/dashboard/payments/${payment.id}`)}
                          >
                            <span className="sr-only">Xem chi tiết</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
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
