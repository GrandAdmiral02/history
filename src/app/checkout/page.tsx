"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart, CreditCard, Banknote, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Mẫu dữ liệu giỏ hàng (có thể thay bằng dữ liệu từ context hoặc API)
const cartItems = [
  {
    id: 1,
    name: "Kẹo Cu Đơ Nghệ An",
    price: 150000,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Áo thun in hình Bác Hồ",
    price: 199000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
  },
];

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    paymentMethod: "cod",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Tính tổng tiền
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 30000; // Phí vận chuyển cố định
  const total = subtotal + shippingFee;

  // Xử lý thay đổi input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Xử lý submit form
  const handleSubmit = (e: React.FormEvent) => {
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

    // Tạo mã vé duy nhất
    const ticketCode = `NA${Date.now().toString().slice(-8)}`;
    
    // Xử lý thanh toán (có thể gọi API tại đây)
    console.log("Đặt hàng:", { ...formData, cartItems, total, ticketCode });
    
    // Hiển thị vé
    const ticketHTML = `
      <div style="max-width: 400px; margin: 0 auto; border: 2px dashed #16a34a; border-radius: 12px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; font-family: Arial, sans-serif;">
        <div style="text-align: center; border-bottom: 1px dashed #16a34a; padding-bottom: 15px; margin-bottom: 15px;">
          <h2 style="color: #15803d; margin: 0; font-size: 18px;">🎫 VÉ MUA HÀNG NGHỆ AN</h2>
          <p style="color: #166534; margin: 5px 0; font-size: 12px;">Cửa hàng lưu niệm xứ Nghệ</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <div style="background: #16a34a; color: white; padding: 8px; border-radius: 6px; text-align: center; font-weight: bold; font-size: 14px;">
            MÃ VÉ: ${ticketCode}
          </div>
        </div>
        
        <div style="margin-bottom: 15px;">
          <p style="margin: 0; font-size: 12px; color: #166534;"><strong>Khách hàng:</strong> ${formData.fullName}</p>
          <p style="margin: 0; font-size: 12px; color: #166534;"><strong>Điện thoại:</strong> ${formData.phone}</p>
          <p style="margin: 0; font-size: 12px; color: #166534;"><strong>Địa chỉ:</strong> ${formData.address}</p>
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
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head><title>Vé mua hàng - ${ticketCode}</title></head>
          <body style="margin: 20px; background: #f3f4f6;">
            ${ticketHTML}
            <div style="text-align: center; margin-top: 20px;">
              <button onclick="window.print()" style="background: #16a34a; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">In vé</button>
            </div>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

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
                    >
                      Xác Nhận Đặt Hàng
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
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
