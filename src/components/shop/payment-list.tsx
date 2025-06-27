
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
  ShoppingBag,
} from "lucide-react";

interface OrderPayment {
  id: string;
  orderId: string;
  amount: number;
  paymentMethod: string;
  paymentStatus: string;
  transactionId?: string;
  createdAt: string;
  order: {
    id: string;
    customerName: string;
    totalAmount: number;
    status: string;
    orderItems: {
      id: string;
      quantity: number;
      price: number;
      product: {
        id: string;
        name: string;
        image?: string;
      };
    }[];
  };
}

interface ShopPaymentListProps {
  userId?: string;
}

export function ShopPaymentList({ userId }: ShopPaymentListProps) {
  const router = useRouter();
  const [payments, setPayments] = useState<OrderPayment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchOrderPayments = async () => {
      try {
        // Trong ứng dụng thực, chúng ta sẽ gọi API để lấy dữ liệu thanh toán đơn hàng
        // const response = await fetch(`/api/payments/orders?userId=${userId}`);
        // const data = await response.json();
        // setPayments(data.payments);

        // Mock data cho demo - chỉ thanh toán đơn hàng shop
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setPayments([
          {
            id: "payment-order-1",
            orderId: "order-1",
            amount: 450000,
            paymentMethod: "CREDIT_CARD",
            paymentStatus: "PAID",
            transactionId: "shop_trx_98765432",
            createdAt: new Date().toISOString(),
            order: {
              id: "order-1",
              customerName: "Nguyễn Văn A",
              totalAmount: 450000,
              status: "DELIVERED",
              orderItems: [
                {
                  id: "item-1",
                  quantity: 2,
                  price: 150000,
                  product: {
                    id: "product-1",
                    name: "Áo thun truyền thống Nghệ An",
                    image: "https://example.com/product1.jpg",
                  },
                },
                {
                  id: "item-2",
                  quantity: 1,
                  price: 150000,
                  product: {
                    id: "product-2",
                    name: "Mũ lưỡi trai Bác Hồ",
                    image: "https://example.com/product2.jpg",
                  },
                },
              ],
            },
          },
          {
            id: "payment-order-2",
            orderId: "order-2",
            amount: 250000,
            paymentMethod: "E_WALLET",
            paymentStatus: "PENDING",
            transactionId: "momo_shop_11223344",
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            order: {
              id: "order-2",
              customerName: "Trần Thị B",
              totalAmount: 250000,
              status: "PROCESSING",
              orderItems: [
                {
                  id: "item-3",
                  quantity: 1,
                  price: 250000,
                  product: {
                    id: "product-3",
                    name: "Tranh thêu truyền thống",
                    image: "https://example.com/product3.jpg",
                  },
                },
              ],
            },
          },
          {
            id: "payment-order-3",
            orderId: "order-3",
            amount: 800000,
            paymentMethod: "BANK_TRANSFER",
            paymentStatus: "PAID",
            transactionId: "bank_shop_55667788",
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            order: {
              id: "order-3",
              customerName: "Lê Văn C",
              totalAmount: 800000,
              status: "DELIVERED",
              orderItems: [
                {
                  id: "item-4",
                  quantity: 2,
                  price: 300000,
                  product: {
                    id: "product-4",
                    name: "Gốm sứ thủ công Nghệ An",
                    image: "https://example.com/product4.jpg",
                  },
                },
                {
                  id: "item-5",
                  quantity: 1,
                  price: 200000,
                  product: {
                    id: "product-5",
                    name: "Lụa truyền thống",
                    image: "https://example.com/product5.jpg",
                  },
                },
              ],
            },
          },
        ]);
      } catch (err) {
        console.error("Error fetching order payments:", err);
        setError("Không thể tải dữ liệu thanh toán đơn hàng");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderPayments();
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
        payment.order.customerName.toLowerCase().includes(query) ||
        payment.order.orderItems.some(item => 
          item.product.name.toLowerCase().includes(query)
        ) ||
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
        return "Thanh toán khi nhận hàng";
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
        <Loader2 className="h-12 w-12 animate-spin text-blue-700 mb-4" />
        <p className="text-muted-foreground">Đang tải lịch sử thanh toán đơn hàng...</p>
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
        <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Chưa có giao dịch thanh toán đơn hàng nào</h3>
        <p className="text-muted-foreground mb-6">
          Khi bạn mua sản phẩm và thực hiện thanh toán, các giao dịch sẽ hiển thị ở đây
        </p>
        <Button
          className="bg-blue-700 hover:bg-blue-800"
          onClick={() => router.push("/shop")}
        >
          Khám phá cửa hàng
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
            placeholder="Tìm kiếm theo tên khách hàng, sản phẩm hoặc mã giao dịch"
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
              <CardTitle>Lịch sử thanh toán đơn hàng</CardTitle>
              <CardDescription>
                Danh sách tất cả các giao dịch thanh toán đơn hàng của bạn
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredPayments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Không tìm thấy giao dịch thanh toán đơn hàng nào
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Thời gian</TableHead>
                      <TableHead>Khách hàng</TableHead>
                      <TableHead>Sản phẩm</TableHead>
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
                            href={`/admin/orders/${payment.orderId}`}
                            className="hover:underline font-medium"
                          >
                            {payment.order.customerName}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {payment.order.orderItems.slice(0, 2).map((item) => (
                              <div key={item.id} className="text-sm">
                                {item.product.name} x{item.quantity}
                              </div>
                            ))}
                            {payment.order.orderItems.length > 2 && (
                              <div className="text-xs text-muted-foreground">
                                +{payment.order.orderItems.length - 2} sản phẩm khác
                              </div>
                            )}
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
                            onClick={() => router.push(`/admin/payments/${payment.id}`)}
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
