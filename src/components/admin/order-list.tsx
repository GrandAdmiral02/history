
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
  Package,
  Truck,
  Eye,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  product: {
    id: string;
    name: string;
    image?: string;
  };
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  totalAmount: number;
  shippingFee: number;
  paymentMethod: string;
  status: string;
  createdAt: string;
  orderItems: OrderItem[];
  payments: Array<{
    id: string;
    amount: number;
    paymentStatus: string;
    paymentMethod: string;
  }>;
}

export function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Mock data cho demo - trong thực tế sẽ gọi API
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        setOrders([
          {
            id: "order-1",
            customerName: "Nguyễn Văn A",
            customerEmail: "nguyenvana@email.com",
            customerPhone: "0123456789",
            customerAddress: "123 Đường ABC, Phường XYZ, Thành phố Vinh, Nghệ An",
            totalAmount: 550000,
            shippingFee: 30000,
            paymentMethod: "CREDIT_CARD",
            status: "PROCESSING",
            createdAt: new Date().toISOString(),
            orderItems: [
              {
                id: "item-1",
                productId: "product-1",
                quantity: 2,
                price: 250000,
                product: {
                  id: "product-1",
                  name: "Áo thun Nghệ An Historical",
                },
              },
              {
                id: "item-2",
                productId: "product-2",
                quantity: 1,
                price: 20000,
                product: {
                  id: "product-2",
                  name: "Postcard Kim Liên",
                },
              },
            ],
            payments: [
              {
                id: "payment-1",
                amount: 550000,
                paymentStatus: "PAID",
                paymentMethod: "CREDIT_CARD",
              },
            ],
          },
          {
            id: "order-2",
            customerName: "Trần Thị B",
            customerEmail: "tranthib@email.com",
            customerPhone: "0987654321",
            customerAddress: "456 Đường DEF, Phường UVW, Thành phố Vinh, Nghệ An",
            totalAmount: 180000,
            shippingFee: 30000,
            paymentMethod: "CASH",
            status: "PENDING",
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            orderItems: [
              {
                id: "item-3",
                productId: "product-3",
                quantity: 3,
                price: 50000,
                product: {
                  id: "product-3",
                  name: "Bookmark Đền Cuông",
                },
              },
            ],
            payments: [
              {
                id: "payment-2",
                amount: 180000,
                paymentStatus: "PENDING",
                paymentMethod: "CASH",
              },
            ],
          },
          {
            id: "order-3",
            customerName: "Lê Văn C",
            customerEmail: "levanc@email.com",
            customerPhone: "0369852147",
            customerAddress: "789 Đường GHI, Phường RST, Huyện Nam Đàn, Nghệ An",
            totalAmount: 330000,
            shippingFee: 30000,
            paymentMethod: "E_WALLET",
            status: "SHIPPED",
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            orderItems: [
              {
                id: "item-4",
                productId: "product-4",
                quantity: 1,
                price: 300000,
                product: {
                  id: "product-4",
                  name: "Mô hình Đền Cuông",
                },
              },
            ],
            payments: [
              {
                id: "payment-3",
                amount: 330000,
                paymentStatus: "PAID",
                paymentMethod: "E_WALLET",
              },
            ],
          },
        ]);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Không thể tải dữ liệu đơn hàng");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = orders
    .filter((order) => {
      if (activeTab === "all") return true;
      if (activeTab === "pending") return order.status === "PENDING";
      if (activeTab === "processing") return order.status === "PROCESSING";
      if (activeTab === "shipped") return order.status === "SHIPPED";
      if (activeTab === "delivered") return order.status === "DELIVERED";
      if (activeTab === "cancelled") return order.status === "CANCELLED";
      return true;
    })
    .filter((order) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        order.customerName.toLowerCase().includes(query) ||
        order.customerEmail.toLowerCase().includes(query) ||
        order.id.toLowerCase().includes(query)
      );
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return (
          <div className="flex items-center bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 text-xs font-medium">
            <Clock className="h-3 w-3 mr-1" />
            Chờ xử lý
          </div>
        );
      case "PROCESSING":
        return (
          <div className="flex items-center bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs font-medium">
            <Package className="h-3 w-3 mr-1" />
            Đang xử lý
          </div>
        );
      case "SHIPPED":
        return (
          <div className="flex items-center bg-purple-100 text-purple-800 rounded-full px-2 py-1 text-xs font-medium">
            <Truck className="h-3 w-3 mr-1" />
            Đang giao
          </div>
        );
      case "DELIVERED":
        return (
          <div className="flex items-center bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
            <CheckCircle className="h-3 w-3 mr-1" />
            Đã giao
          </div>
        );
      case "CANCELLED":
        return (
          <div className="flex items-center bg-red-100 text-red-800 rounded-full px-2 py-1 text-xs font-medium">
            <AlertCircle className="h-3 w-3 mr-1" />
            Đã hủy
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

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      // Mock update - trong thực tế sẽ gọi API
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
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
        <p className="text-muted-foreground">Đang tải dữ liệu đơn hàng...</p>
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
            placeholder="Tìm kiếm theo tên khách hàng, email hoặc mã đơn hàng"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="pending">Chờ xử lý</TabsTrigger>
          <TabsTrigger value="processing">Đang xử lý</TabsTrigger>
          <TabsTrigger value="shipped">Đang giao</TabsTrigger>
          <TabsTrigger value="delivered">Đã giao</TabsTrigger>
          <TabsTrigger value="cancelled">Đã hủy</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <Card>
            <CardHeader>
              <CardTitle>Danh sách đơn hàng</CardTitle>
              <CardDescription>
                Quản lý tất cả các đơn hàng từ khách hàng
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredOrders.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Không tìm thấy đơn hàng nào</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã đơn hàng</TableHead>
                      <TableHead>Khách hàng</TableHead>
                      <TableHead>Sản phẩm</TableHead>
                      <TableHead>Ngày đặt</TableHead>
                      <TableHead>Tổng tiền</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Thanh toán</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          #{order.id.slice(-8).toUpperCase()}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{order.customerName}</p>
                            <p className="text-sm text-muted-foreground">
                              {order.customerEmail}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {order.customerPhone}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            {order.orderItems.map((item, index) => (
                              <div key={item.id} className="text-sm">
                                {item.product.name} x{item.quantity}
                                {index < order.orderItems.length - 1 && <br />}
                              </div>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          {format(new Date(order.createdAt), "dd/MM/yyyy", {
                            locale: vi,
                          })}
                          <div className="text-xs text-muted-foreground">
                            {format(new Date(order.createdAt), "HH:mm", {
                              locale: vi,
                            })}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {order.totalAmount.toLocaleString()} VNĐ
                        </TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell>
                          {order.payments.length > 0 && (
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                order.payments[0].paymentStatus === "PAID"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.payments[0].paymentStatus === "PAID"
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
                              {order.status === "PENDING" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleStatusChange(order.id, "PROCESSING")
                                  }
                                >
                                  <Package className="h-4 w-4 mr-2" />
                                  Xử lý đơn hàng
                                </DropdownMenuItem>
                              )}
                              {order.status === "PROCESSING" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleStatusChange(order.id, "SHIPPED")
                                  }
                                >
                                  <Truck className="h-4 w-4 mr-2" />
                                  Giao hàng
                                </DropdownMenuItem>
                              )}
                              {order.status === "SHIPPED" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleStatusChange(order.id, "DELIVERED")
                                  }
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Đã giao hàng
                                </DropdownMenuItem>
                              )}
                              {(order.status === "PENDING" || order.status === "PROCESSING") && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleStatusChange(order.id, "CANCELLED")
                                  }
                                >
                                  <AlertCircle className="h-4 w-4 mr-2" />
                                  Hủy đơn hàng
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
