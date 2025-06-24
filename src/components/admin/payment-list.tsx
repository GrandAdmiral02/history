
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
  CreditCard,
  Wallet,
  DollarSign,
  Eye,
  MoreHorizontal,
  Download,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Payment {
  id: string;
  bookingId?: string;
  orderId?: string;
  amount: number;
  paymentMethod: string;
  paymentStatus: string;
  transactionId?: string;
  createdAt: string;
  type: "BOOKING" | "ORDER";
  booking?: {
    id: string;
    tour: {
      name: string;
    };
    user: {
      name: string;
      email: string;
    };
  };
  order?: {
    id: string;
    customerName: string;
    customerEmail: string;
  };
}

export function PaymentList() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        // Mock data cho demo - trong thực tế sẽ gọi API
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        setPayments([
          {
            id: "payment-1",
            bookingId: "booking-1",
            amount: 2000000,
            paymentMethod: "CREDIT_CARD",
            paymentStatus: "PAID",
            transactionId: "TXN001234567",
            createdAt: new Date().toISOString(),
            type: "BOOKING",
            booking: {
              id: "booking-1",
              tour: {
                name: "Tour Khu di tích Kim Liên",
              },
              user: {
                name: "Nguyễn Văn A",
                email: "nguyenvana@email.com",
              },
            },
          },
          {
            id: "payment-2",
            orderId: "order-1",
            amount: 550000,
            paymentMethod: "E_WALLET",
            paymentStatus: "PAID",
            transactionId: "MOMO987654321",
            createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            type: "ORDER",
            order: {
              id: "order-1",
              customerName: "Trần Thị B",
              customerEmail: "tranthib@email.com",
            },
          },
          {
            id: "payment-3",
            bookingId: "booking-2",
            amount: 4000000,
            paymentMethod: "CASH",
            paymentStatus: "PENDING",
            createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
            type: "BOOKING",
            booking: {
              id: "booking-2",
              tour: {
                name: "Tour Đền Cuông",
              },
              user: {
                name: "Lê Văn C",
                email: "levanc@email.com",
              },
            },
          },
          {
            id: "payment-4",
            orderId: "order-2",
            amount: 180000,
            paymentMethod: "BANK_TRANSFER",
            paymentStatus: "FAILED",
            transactionId: "BANK12345678",
            createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            type: "ORDER",
            order: {
              id: "order-2",
              customerName: "Phạm Văn D",
              customerEmail: "phamvand@email.com",
            },
          },
          {
            id: "payment-5",
            bookingId: "booking-3",
            amount: 3000000,
            paymentMethod: "CREDIT_CARD",
            paymentStatus: "REFUNDED",
            transactionId: "REF987654321",
            createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            type: "BOOKING",
            booking: {
              id: "booking-3",
              tour: {
                name: "Tour Hành trình về nguồn",
              },
              user: {
                name: "Hoàng Thị E",
                email: "hoangthie@email.com",
              },
            },
          },
        ]);
      } catch (err) {
        console.error("Error fetching payments:", err);
        setError("Không thể tải dữ liệu thanh toán");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const filteredPayments = payments
    .filter((payment) => {
      if (activeTab === "all") return true;
      if (activeTab === "paid") return payment.paymentStatus === "PAID";
      if (activeTab === "pending") return payment.paymentStatus === "PENDING";
      if (activeTab === "failed") return payment.paymentStatus === "FAILED";
      if (activeTab === "refunded") return payment.paymentStatus === "REFUNDED";
      if (activeTab === "bookings") return payment.type === "BOOKING";
      if (activeTab === "orders") return payment.type === "ORDER";
      return true;
    })
    .filter((payment) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      
      const customerName = payment.booking?.user.name || payment.order?.customerName || "";
      const customerEmail = payment.booking?.user.email || payment.order?.customerEmail || "";
      const itemName = payment.booking?.tour.name || "";
      
      return (
        customerName.toLowerCase().includes(query) ||
        customerEmail.toLowerCase().includes(query) ||
        itemName.toLowerCase().includes(query) ||
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

  const getTotalAmount = (status?: string) => {
    const filtered = status ? payments.filter(p => p.paymentStatus === status) : payments;
    return filtered.reduce((sum, payment) => sum + payment.amount, 0);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-green-700 mb-4" />
        <p className="text-muted-foreground">Đang tải dữ liệu thanh toán...</p>
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
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng thanh toán</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getTotalAmount().toLocaleString()} VNĐ</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đã thanh toán</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {getTotalAmount("PAID").toLocaleString()} VNĐ
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chờ thanh toán</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {getTotalAmount("PENDING").toLocaleString()} VNĐ
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thất bại</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {getTotalAmount("FAILED").toLocaleString()} VNĐ
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm theo khách hàng, tour/sản phẩm hoặc mã giao dịch"
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
          <TabsTrigger value="refunded">Đã hoàn tiền</TabsTrigger>
          <TabsTrigger value="bookings">Tour</TabsTrigger>
          <TabsTrigger value="orders">Sản phẩm</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <Card>
            <CardHeader>
              <CardTitle>Danh sách thanh toán</CardTitle>
              <CardDescription>
                Quản lý tất cả các giao dịch thanh toán trong hệ thống
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredPayments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Không tìm thấy giao dịch thanh toán nào</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Thời gian</TableHead>
                      <TableHead>Khách hàng</TableHead>
                      <TableHead>Loại</TableHead>
                      <TableHead>Nội dung</TableHead>
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
                          <div>
                            <p className="font-medium">
                              {payment.booking?.user.name || payment.order?.customerName}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {payment.booking?.user.email || payment.order?.customerEmail}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            payment.type === "BOOKING" 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-green-100 text-green-800"
                          }`}>
                            {payment.type === "BOOKING" ? "Tour" : "Sản phẩm"}
                          </span>
                        </TableCell>
                        <TableCell>
                          {payment.booking?.tour.name || "Đơn hàng sản phẩm"}
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
                              {payment.paymentStatus === "PAID" && (
                                <DropdownMenuItem>
                                  <Download className="h-4 w-4 mr-2" />
                                  Tải hóa đơn
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
