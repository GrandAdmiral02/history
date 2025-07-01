"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Helper function to format price
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  CreditCard,
  Banknote,
  Smartphone,
  Loader2,
  MapPin,
  User,
  Phone,
  Mail,
  Truck,
  Shield,
  CheckCircle,
  ArrowLeft,
  Gift,
  Percent,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";

// Định nghĩa interface cho CartItem
interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  category: string;
  description?: string;
}

// Lấy dữ liệu giỏ hàng từ localStorage
const getCartItems = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    const savedProducts = localStorage.getItem("products");

    console.log("Saved cart:", savedCart);
    console.log("Saved products:", savedProducts);

    if (savedCart && savedProducts) {
      try {
        const cart = JSON.parse(savedCart);
        const products = JSON.parse(savedProducts);

        const items = Object.entries(cart)
          .map(([productId, quantity]) => {
            const product = products.find((p: any) => p.id === productId);
            if (product) {
              return {
                id: product.id,
                name: product.name,
                price: product.price,
                originalPrice: product.originalPrice,
                quantity: quantity as number,
                image: product.image || "/placeholder.jpg",
                category: product.category,
                description: product.description,
              };
            }
            return null;
          })
          .filter((item): item is CartItem => item !== null);

        console.log("Cart items:", items);
        return items;
      } catch (error) {
        console.error("Error parsing cart data:", error);
        toast.error("Không thể tải dữ liệu giỏ hàng. Vui lòng thử lại.");
        return [];
      }
    }
  }
  return [];
};

export default function CheckoutPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    paymentMethod: "cod",
    notes: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Load cart items on component mount
  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);

    // Redirect to shop if cart is empty
    if (items.length === 0) {
      router.push("/shop");
      toast.error("Giỏ hàng trống");
    }
  }, [router]);

  // Tính tổng tiền
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalTotal = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
    0,
  );
  const savings = originalTotal - subtotal;
  const shippingFee = subtotal >= 500000 ? 0 : 30000; // Free shipping over 500k
  const total = subtotal + shippingFee;

  // Load user data if logged in
  useEffect(() => {
    if (session?.user) {
      setFormData((prev) => ({
        ...prev,
        fullName: session.user.name ?? "",
        email: session.user.email ?? "",
      }));
    }
  }, [session]);

  // Xử lý thay đổi input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Tạo order và payment
  const createOrderAndPayment = async () => {
    try {
      console.log("Creating order with data:", {
        customerName: formData.fullName,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        shippingAddress: formData.address,
        totalAmount: total,
        paymentMethod: getPaymentMethodCode(formData.paymentMethod),
        notes: formData.notes,
        items: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      });

      // Tạo order
      const orderResponse = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: formData.fullName,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          shippingAddress: formData.address,
          totalAmount: total,
          paymentMethod: getPaymentMethodCode(formData.paymentMethod),
          notes: formData.notes,
          items: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        }),
      });

      if (!orderResponse.ok) {
        const errorText = await orderResponse.text();
        console.error("Order API error:", errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: `Lỗi HTTP ${orderResponse.status}: ${errorText}` };
        }
        throw new Error(errorData.error || errorData.message || `HTTP Error: ${orderResponse.status}`);
      }

      const order = await orderResponse.json();
      console.log("Order created successfully:", order);

      // Tạo payment
      const paymentData = {
        orderId: order.id,
        amount: total,
        paymentMethod: getPaymentMethodCode(formData.paymentMethod),
        paymentStatus: formData.paymentMethod === "cod" ? "PENDING" : "PAID",
        transactionId: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      };

      console.log("Creating payment with data:", paymentData);

      const paymentResponse = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (!paymentResponse.ok) {
        const errorText = await paymentResponse.text();
        console.error("Payment API error:", errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: `Lỗi HTTP ${paymentResponse.status}: ${errorText}` };
        }
        throw new Error(errorData.error || errorData.message || `Lỗi thanh toán: ${paymentResponse.status}`);
      }

      const payment = await paymentResponse.json();
      console.log("Payment created successfully:", payment);

      return { order, payment };
    } catch (error) {
      console.error("Error creating order and payment:", error);
      throw error;
    }
  };

  const getPaymentMethodCode = (method: string) => {
    switch (method) {
      case "cod":
        return "CASH";
      case "bank":
        return "BANK_TRANSFER";
      case "mobile":
        return "E_WALLET";
      default:
        return "CASH";
    }
  };

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "cod":
        return "Thanh toán khi nhận hàng";
      case "bank":
        return "Chuyển khoản ngân hàng";
      case "mobile":
        return "Ví điện tử";
      default:
        return method;
    }
  };

  // Xử lý submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName) newErrors.fullName = "Vui lòng nhập họ tên";
    if (!formData.address) newErrors.address = "Vui lòng nhập địa chỉ";
    if (!formData.phone) newErrors.phone = "Vui lòng nhập số điện thoại";
    else if (!/^\d{10,11}$/.test(formData.phone))
      newErrors.phone = "Số điện thoại phải có 10-11 chữ số";
    if (!formData.email) newErrors.email = "Vui lòng nhập email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email không hợp lệ";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Tạo đơn hàng và thanh toán
      const { order, payment } = await createOrderAndPayment();

      // Hiển thị thông báo thành công
      toast.success("Đặt hàng thành công!", {
        description: `Mã đơn hàng: ${order.id.slice(-8).toUpperCase()}`,
      });

      // Tạo và hiển thị hóa đơn
      const showInvoice = () => {
        const ticketHTML = `
          <div style="max-width: 450px; margin: 0 auto; border: 2px solid #f97316; border-radius: 16px; background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%); padding: 24px; font-family: 'Arial', sans-serif; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; border-bottom: 2px dashed #f97316; padding-bottom: 20px; margin-bottom: 20px;">
              <h2 style="color: #ea580c; margin: 0; font-size: 22px; font-weight: bold;">🛍️ HÓA ĐƠN MUA HÀNG</h2>
              <p style="color: #ea580c; margin: 8px 0; font-size: 14px; font-weight: 500;">Cửa hàng lưu niệm xứ Nghệ</p>
              <div style="background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 12px; border-radius: 8px; margin-top: 16px;">
                <strong style="font-size: 16px;">MÃ ĐƠN: ${order.id.slice(-8).toUpperCase()}</strong>
              </div>
            </div>

            <div style="margin-bottom: 20px; background: white; padding: 16px; border-radius: 12px; border: 1px solid #fed7aa;">
              <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #ea580c; border-bottom: 1px solid #fed7aa; padding-bottom: 8px;">👤 Thông tin khách hàng</h3>
              <p style="margin: 4px 0; font-size: 13px; color: #9a3412;"><strong>Họ tên:</strong> ${formData.fullName}</p>
              <p style="margin: 4px 0; font-size: 13px; color: #9a3412;"><strong>Điện thoại:</strong> ${formData.phone}</p>
              <p style="margin: 4px 0; font-size: 13px; color: #9a3412;"><strong>Email:</strong> ${formData.email}</p>
              <p style="margin: 4px 0; font-size: 13px; color: #9a3412;"><strong>Địa chỉ:</strong> ${formData.address}</p>
              <p style="margin: 4px 0; font-size: 13px; color: #9a3412;"><strong>Thanh toán:</strong> ${getPaymentMethodName(formData.paymentMethod)}</p>
            </div>

            <div style="background: white; padding: 16px; border-radius: 12px; border: 1px solid #fed7aa;">
              <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #ea580c; border-bottom: 1px solid #fed7aa; padding-bottom: 8px;">📦 Chi tiết đơn hàng</h3>
              ${cartItems
                .map(
                  (item) => `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding: 8px; background: #fff7ed; border-radius: 8px;">
                  <div style="flex: 1;">
                    <div style="font-size: 13px; font-weight: 600; color: #9a3412; margin-bottom: 4px;">${item.name}</div>
                    <div style="font-size: 11px; color: #c2410c;">
                      ${item.price.toLocaleString()}đ × ${item.quantity}
                    </div>
                  </div>
                  <div style="font-size: 13px; font-weight: bold; color: #ea580c;">
                    ${(item.price * item.quantity).toLocaleString()}đ
                  </div>
                </div>
              `,
                )
                .join("")}

              <div style="border-top: 2px solid #fed7aa; margin-top: 16px; padding-top: 16px;">
                <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px; color: #9a3412;">
                  <span>Tạm tính (${cartItems.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm):</span>
                  <span>${subtotal.toLocaleString()}đ</span>
                </div>
                ${
                  savings > 0
                    ? `
                <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px; color: #16a34a;">
                  <span>🎉 Tiết kiệm:</span>
                  <span>-${savings.toLocaleString()}đ</span>
                </div>
                `
                    : ""
                }
                <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 12px; color: #9a3412;">
                  <span>Phí vận chuyển:</span>
                  <span style="color: ${shippingFee === 0 ? "#16a34a" : "#ea580c"};">${shippingFee === 0 ? "Miễn phí" : shippingFee.toLocaleString() + "đ"}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 16px; color: #ea580c; background: linear-gradient(135deg, #fed7aa, #fdba74); padding: 12px; border-radius: 8px;">
                  <span>TỔNG THANH TOÁN:</span>
                  <span>${total.toLocaleString()}đ</span>
                </div>
              </div>
            </div>

            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 2px dashed #f97316;">
              <p style="margin: 0; font-size: 12px; color: #9a3412; font-weight: 500;">🙏 Cảm ơn bạn đã mua hàng!</p>
              <p style="margin: 4px 0; font-size: 11px; color: #c2410c;">📅 ${new Date().toLocaleString("vi-VN")}</p>
              <p style="margin: 4px 0; font-size: 11px; color: #c2410c;">📋 Trạng thái: ${payment.paymentStatus === "PENDING" ? "Chờ thanh toán" : "Đã thanh toán"}</p>
              <div style="margin-top: 12px; padding: 8px; background: linear-gradient(135deg, #f97316, #ea580c); border-radius: 6px;">
                <p style="margin: 0; font-size: 11px; color: white; font-weight: 500;">🚚 Đơn hàng sẽ được giao trong 2-3 ngày làm việc</p>
              </div>
            </div>
          </div>
        `;

        try {
          const newWindow = window.open("", "_blank", "width=500,height=800");
          if (newWindow) {
            newWindow.document.write(`
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Hóa đơn mua hàng - ${order.id.slice(-8).toUpperCase()}</title>
                  <meta charset="utf-8">
                  <style>
                    @media print {
                      .no-print { display: none; }
                      body { margin: 0; }
                    }
                  </style>
                </head>
                <body style="margin: 20px; background: #f8fafc;">
                  ${ticketHTML}
                  <div style="text-align: center; margin-top: 24px;" class="no-print">
                    <button onclick="window.print()" style="background: linear-gradient(135deg, #f97316, #ea580c); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; margin-right: 12px; font-weight: 600; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">🖨️ In hóa đơn</button>
                    <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">❌ Đóng</button>
                  </div>
                </body>
              </html>
            `);
            newWindow.document.close();
          } else {
            toast.error(
              "Trình duyệt đã chặn cửa sổ hóa đơn. Vui lòng cho phép popup.",
            );
            alert(
              `Hóa đơn đã được tạo!\nMã đơn hàng: ${order.id.slice(-8).toUpperCase()}\nTổng tiền: ${total.toLocaleString()}đ`,
            );
          }
        } catch (error) {
          console.error("Error opening invoice window:", error);
          alert(
            `Hóa đơn đã được tạo!\nMã đơn hàng: ${order.id.slice(-8).toUpperCase()}\nTổng tiền: ${total.toLocaleString()}đ`,
          );
        }
      };

      // Hiển thị hóa đơn sau khi tạo thành công
      setTimeout(showInvoice, 500);

      // Clear cart after successful order
      localStorage.removeItem("cart");

      // Redirect về shop sau 2 giây
      setTimeout(() => {
        router.push("/shop");
      }, 2000);
    } catch (error) {
      console.error("Checkout error:", error);
      const errorMessage = error instanceof Error ? error.message : "Lỗi không xác định";
      toast.error(
        `Đã có lỗi xảy ra khi đặt hàng: ${errorMessage}`,
        {
          description: "Vui lòng kiểm tra thông tin và thử lại",
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500 mx-auto mb-4" />
          <div className="text-lg font-medium text-gray-700">Đang tải...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/shop">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-orange-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Quay lại
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Thanh toán đơn hàng
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Hoàn tất đơn hàng của bạn
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <Shield className="h-4 w-4" />
                <span>Bảo mật</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Truck className="h-4 w-4" />
                <span>Giao hàng nhanh</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Gift className="h-4 w-4" />
                <span>Quà tặng</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Thông tin khách hàng và thanh toán */}
              <div className="xl:col-span-2 space-y-6">
                {/* Thông tin giao hàng */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                  <CardHeader className="border-b bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          Thông tin giao hàng
                        </div>
                        <div className="text-sm opacity-90">
                          Điền chính xác để nhận hàng
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="flex items-center gap-2 font-medium"
                        >
                          <User className="h-4 w-4 text-gray-500" />
                          Họ và tên *
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Nguyễn Văn A"
                          className={`transition-all duration-200 ${errors.fullName ? "border-red-500 focus:border-red-500" : "focus:border-orange-500"}`}
                        />
                        {errors.fullName && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="flex items-center gap-2 font-medium"
                        >
                          <Phone className="h-4 w-4 text-gray-500" />
                          Số điện thoại *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0123 456 789"
                          className={`transition-all duration-200 ${errors.phone ? "border-red-500 focus:border-red-500" : "focus:border-orange-500"}`}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2 font-medium"
                      >
                        <Mail className="h-4 w-4 text-gray-500" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@email.com"
                        className={`transition-all duration-200 ${errors.email ? "border-red-500 focus:border-red-500" : "focus:border-orange-500"}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="address"
                        className="flex items-center gap-2 font-medium"
                      >
                        <MapPin className="h-4 w-4 text-gray-500" />
                        Địa chỉ giao hàng *
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Đường Láng, Đống Đa, Hà Nội"
                        className={`transition-all duration-200 ${errors.address ? "border-red-500 focus:border-red-500" : "focus:border-orange-500"}`}
                      />
                      {errors.address && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="font-medium">
                        Ghi chú đơn hàng
                      </Label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Ghi chú thêm cho đơn hàng..."
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Phương thức thanh toán */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                  <CardHeader className="border-b bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          Phương thức thanh toán
                        </div>
                        <div className="text-sm opacity-90">
                          Chọn cách thanh toán phù hợp
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: value,
                        }))
                      }
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                        <RadioGroupItem
                          value="cod"
                          id="cod"
                          className="text-orange-500"
                        />
                        <Label
                          htmlFor="cod"
                          className="flex items-center gap-3 cursor-pointer flex-1"
                        >
                          <div className="p-2 bg-green-100 rounded-lg">
                            <Banknote className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">
                              Thanh toán khi nhận hàng (COD)
                            </div>
                            <div className="text-sm text-gray-500">
                              Thanh toán bằng tiền mặt khi nhận hàng
                            </div>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-700"
                          >
                            Phổ biến
                          </Badge>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                        <RadioGroupItem
                          value="bank"
                          id="bank"
                          className="text-orange-500"
                        />
                        <Label
                          htmlFor="bank"
                          className="flex items-center gap-3 cursor-pointer flex-1"
                        >
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">
                              Chuyển khoản ngân hàng
                            </div>
                            <div className="text-sm text-gray-500">
                              Chuyển khoản qua ATM/Internet Banking
                            </div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                        <RadioGroupItem
                          value="mobile"
                          id="mobile"
                          className="text-orange-500"
                        />
                        <Label
                          htmlFor="mobile"
                          className="flex items-center gap-3 cursor-pointer flex-1"
                        >
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <Smartphone className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium">Ví điện tử</div>
                            <div className="text-sm text-gray-500">
                              Thanh toán qua Momo, ZaloPay, VNPay
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Order Summary */}
              <div className="xl:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="border-b bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white relative">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <CardTitle className="flex items-center gap-3 relative z-10">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <ShoppingCart className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-xl font-bold">
                            Đơn hàng của bạn
                          </div>
                          <div className="text-sm opacity-90 font-medium">
                            {cartItems.length} sản phẩm • {formatPrice(getTotalCartValue())}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      {/* Sản phẩm */}
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="group">
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 transition-all duration-200">
                              <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  sizes="64px"
                                  className="object-cover rounded-lg border"
                                />
                                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
                                  {item.quantity}
                                </div>
                              </div>
                              <div className="flex-1 space-y-2">
                                <h5 className="font-medium text-sm leading-tight group-hover:text-orange-600 transition-colors">
                                  {item.name}
                                </h5>
                                {item.description && (
                                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                                    {item.description}
                                  </p>
                                )}
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className="text-xs px-2 py-0.5"
                                  >
                                    {item.category}
                                  </Badge>
                                  <span className="text-xs text-gray-500">
                                    SL: {item.quantity}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-orange-600">
                                      {item.price.toLocaleString()}đ
                                    </span>
                                    {item.originalPrice &&
                                      item.originalPrice > item.price && (
                                        <span className="text-xs line-through text-gray-400">
                                          {item.originalPrice.toLocaleString()}đ
                                        </span>
                                      )}
                                  </div>
                                  <span className="text-sm font-bold text-gray-900">
                                    {(
                                      item.price * item.quantity
                                    ).toLocaleString()}
                                    đ
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      {/* Tính toán */}
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              Tạm tính (
                              {cartItems.reduce(
                                (sum, item) => sum + item.quantity,
                                0,
                              )}{" "}
                              sản phẩm)
                            </span>
                            <span className="font-medium">
                              {subtotal.toLocaleString()}đ
                            </span>
                          </div>

                          {savings > 0 && (
                            <div className="flex justify-between text-sm text-green-600">
                              <span className="flex items-center gap-1">
                                <Percent className="h-4 w-4" />
                                Tiết kiệm
                              </span>
                              <span className="font-medium">
                                -{savings.toLocaleString()}đ
                              </span>
                            </div>
                          )}

                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 flex items-center gap-1">
                              <Truck className="h-4 w-4" />
                              Phí vận chuyển
                            </span>
                            <span
                              className={`font-medium ${shippingFee === 0 ? "text-green-600" : "text-orange-600"}`}
                            >
                              {shippingFee === 0
                                ? "Miễn phí"
                                : `${shippingFee.toLocaleString()}đ`}
                            </span>
                          </div>

                          {shippingFee > 0 && (
                            <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded-lg">
                              💡 Mua thêm {(500000 - subtotal).toLocaleString()}
                              đ để được <strong>miễn phí vận chuyển</strong>
                            </div>
                          )}
                        </div>

                        <Separator />

                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl text-white">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">
                              Tổng thanh toán
                            </span>
                            <span className="text-2xl font-bold">
                              {total.toLocaleString()}đ
                            </span>
                          </div>
                          {savings > 0 && (
                            <p className="text-sm opacity-90 mt-2">
                              🎉 Bạn đã tiết kiệm được{" "}
                              {savings.toLocaleString()}đ
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button
                          type="submit"
                          className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Đang xử lý...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="mr-2 h-5 w-5" />
                              Xác nhận đặt hàng
                            </>
                          )}
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full h-10 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                          asChild
                          disabled={isLoading}
                        >
                          <Link
                            href="/shop"
                            className="flex items-center gap-2"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Tiếp tục mua sắm
                          </Link>
                        </Button>
                      </div>

                      {/* Trust badges */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                        <div className="text-center p-2">
                          <Shield className="h-5 w-5 text-green-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">Bảo mật</div>
                        </div>
                        <div className="text-center p-2">
                          <Truck className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">
                            Giao nhanh
                          </div>
                        </div>
                        <div className="text-center p-2">
                          <CheckCircle className="h-5 w-5 text-purple-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">Uy tín</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
  function getTotalCartValue() {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}