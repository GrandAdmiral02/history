
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart, CreditCard, Banknote, Smartphone, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";

// Lấy dữ liệu giỏ hàng từ localStorage hoặc context
const getCartItems = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    const savedProducts = localStorage.getItem('products');
    
    if (savedCart && savedProducts) {
      const cart = JSON.parse(savedCart);
      const products = JSON.parse(savedProducts);
      
      return Object.entries(cart).map(([productId, quantity]) => {
        const product = products.find((p: any) => p.id === productId);
        return product ? {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity as number,
          image: product.image
        } : null;
      }).filter(Boolean);
    }
  }
  return [];
};

export default function CheckoutPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    paymentMethod: "cod",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Load cart items on component mount
  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    
    // Redirect to shop if cart is empty
    if (items.length === 0) {
      router.push('/shop');
      toast.error('Giỏ hàng trống');
    }
  }, [router]);

  // Tính tổng tiền
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 30000; // Phí vận chuyển cố định
  const total = subtotal + shippingFee;

  // Load user data if logged in
  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        fullName: session.user.name || "",
        email: session.user.email || "",
      }));
    }
  }, [session]);

  // Xử lý thay đổi input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Tạo order và payment
  const createOrderAndPayment = async () => {
    try {
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
          items: cartItems.map(item => ({
            productId: `product-${item.id}`,
            quantity: item.quantity,
            price: item.price,
          })),
        }),
      });

      if (!orderResponse.ok) {
        throw new Error("Không thể tạo đơn hàng");
      }

      const order = await orderResponse.json();

      // Tạo payment
      const paymentResponse = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.user?.id || null,
          orderId: order.id,
          amount: total,
          paymentMethod: getPaymentMethodCode(formData.paymentMethod),
          status: formData.paymentMethod === "cod" ? "PENDING" : "PAID",
          transactionId: `order_${Date.now()}`,
        }),
      });

      if (!paymentResponse.ok) {
        throw new Error("Không thể tạo thanh toán");
      }

      const payment = await paymentResponse.json();

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
        description: `Mã đơn hàng: ${order.id.slice(-8).toUpperCase()}`
      });

      // Tạo vé mua hàng
      const ticketCode = `NA${Date.now().toString().slice(-8)}`;
      
      const ticketHTML = `
        <div style="max-width: 400px; margin: 0 auto; border: 2px dashed #16a34a; border-radius: 12px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; font-family: Arial, sans-serif;">
          <div style="text-align: center; border-bottom: 1px dashed #16a34a; padding-bottom: 15px; margin-bottom: 15px;">
            <h2 style="color: #15803d; margin: 0; font-size: 18px;">🎫 VÉ MUA HÀNG NGHỆ AN</h2>
            <p style="color: #166534; margin: 5px 0; font-size: 12px;">Cửa hàng lưu niệm xứ Nghệ</p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="background: #16a34a; color: white; padding: 8px; border-radius: 6px; text-align: center; font-weight: bold; font-size: 14px;">
              MÃ ĐƠN: ${order.id.slice(-8).toUpperCase()}
            </div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 0; font-size: 12px; color: #166534;"><strong>Khách hàng:</strong> ${formData.fullName}</p>
            <p style="margin: 0; font-size: 12px; color: #166534;"><strong>Điện thoại:</strong> ${formData.phone}</p>
            <p style="margin: 0; font-size: 12px; color: #166534;"><strong>Địa chỉ:</strong> ${formData.address}</p>
            <p style="margin: 0; font-size: 12px; color: #166534;"><strong>Thanh toán:</strong> ${getPaymentMethodName(formData.paymentMethod)}</p>
          </div>
          
          <div style="border-top: 1px dashed #16a34a; padding-top: 15px;">
            ${cartItems.map(item => `
              <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 5px;">
                <span>${item.name} x${item.quantity}</span>
                <span>${(item.price * item.quantity).toLocaleString()}đ</span>
              </div>
            `).join('')}
            <div style="border-top: 1px solid #16a34a; margin-top: 10px; padding-top: 10px;">
              <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 5px;">
                <span>Phí vận chuyển:</span>
                <span>${shippingFee.toLocaleString()}đ</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-weight: bold; color: #15803d;">
                <span>TỔNG CỘNG:</span>
                <span>${total.toLocaleString()}đ</span>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 15px; padding-top: 15px; border-top: 1px dashed #16a34a;">
            <p style="margin: 0; font-size: 10px; color: #166534;">Cảm ơn bạn đã mua hàng!</p>
            <p style="margin: 0; font-size: 10px; color: #166534;">Thời gian: ${new Date().toLocaleString('vi-VN')}</p>
            <p style="margin: 0; font-size: 10px; color: #166534;">Trạng thái: ${payment.status === 'PENDING' ? 'Chờ thanh toán' : 'Đã thanh toán'}</p>
          </div>
        </div>
      `;
      
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head><title>Hóa đơn mua hàng - ${order.id.slice(-8).toUpperCase()}</title></head>
            <body style="margin: 20px; background: #f3f4f6;">
              ${ticketHTML}
              <div style="text-align: center; margin-top: 20px;">
                <button onclick="window.print()" style="background: #16a34a; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; margin-right: 10px;">In hóa đơn</button>
                <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Đóng</button>
              </div>
            </body>
          </html>
        `);
        newWindow.document.close();
      }

      // Clear cart after successful order
      localStorage.removeItem('cart');
      
      // Redirect về shop sau 2 giây
      setTimeout(() => {
        router.push("/shop");
      }, 2000);

    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Đã có lỗi xảy ra khi đặt hàng. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
            Thanh Toán
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Thông tin khách hàng */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Thông Tin Giao Hàng
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Họ và tên</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Nguyễn Văn A"
                        className={errors.fullName ? "border-red-500" : ""}
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-500">{errors.fullName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Địa chỉ</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Đường Láng, Đống Đa, Hà Nội"
                        className={errors.address ? "border-red-500" : ""}
                      />
                      {errors.address && (
                        <p className="text-sm text-red-500">{errors.address}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0123 456 789"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500">{errors.phone}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@email.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phương thức thanh toán */}
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Phương Thức Thanh Toán
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, paymentMethod: value }))
                      }
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex items-center gap-2">
                          <Banknote className="h-4 w-4" />
                          Thanh toán khi nhận hàng (COD)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          Chuyển khoản ngân hàng
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Label htmlFor="mobile" className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4" />
                          Ví điện tử (Momo, ZaloPay)
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Tóm tắt đơn hàng */}
              <div className="lg:col-span-1">
                <Card className="border-none shadow-lg sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Tóm Tắt Đơn Hàng
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="relative w-16 h-16">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Số lượng: {item.quantity}
                          </p>
                          <p className="text-sm font-bold text-green-600">
                            {(item.price * item.quantity).toLocaleString()}đ
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Tạm tính</span>
                        <span>{subtotal.toLocaleString()}đ</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Phí vận chuyển</span>
                        <span>{shippingFee.toLocaleString()}đ</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-green-600">
                        <span>Tổng cộng</span>
                        <span>{total.toLocaleString()}đ</span>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Đang xử lý...
                        </>
                      ) : (
                        "Xác Nhận Đặt Hàng"
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                      disabled={isLoading}
                    >
                      <Link href="/shop">Tiếp Tục Mua Sắm</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
