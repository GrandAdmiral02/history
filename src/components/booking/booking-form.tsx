"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, CheckIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookingFormProps {
  tourId: string;
  tourName: string;
  tourPrice: number;
  tourDuration: string;
}

export function BookingForm({
  tourId,
  tourName,
  tourPrice,
  tourDuration,
}: BookingFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    participants: "1",
    notes: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.address.trim() !== "" &&
      date !== undefined &&
      date >= today
    );
  };

  const calculateTotalPrice = () => {
    return tourPrice * parseInt(formData.participants);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      const missingFields = [];
      if (!formData.fullName.trim()) missingFields.push("Họ và tên");
      if (!formData.email.trim()) missingFields.push("Email");
      if (!formData.phone.trim()) missingFields.push("Số điện thoại");
      if (!formData.address.trim()) missingFields.push("Địa chỉ");
      if (!date) missingFields.push("Ngày khởi hành");

      alert(
        `Vui lòng điền đầy đủ thông tin bắt buộc:\n${missingFields.join(", ")}`,
      );
      return;
    }

    setIsLoading(true);

    try {
      const bookingData = {
        tourId,
        tourName,
        tourPrice,
        tourDuration,
        departureDate: date?.toISOString(),
        ...formData,
      };

      console.log("Sending booking data:", bookingData);

      // Gửi dữ liệu đến guest booking API
      const response = await fetch("/api/guest-bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Booking failed:", result);
        throw new Error(result.details || result.error || "Đã có lỗi xảy ra");
      }

      console.log("Booking success:", result);

      // Lưu booking ID để sử dụng cho thanh toán
      const bookingId = result.bookingId;
      localStorage.setItem(
        bookingId,
        JSON.stringify({
          ...bookingData,
          totalPrice: calculateTotalPrice(),
          bookingId: bookingId,
          status: "PENDING",
          createdAt: new Date().toISOString(),
        }),
      );

      setFormSubmitted(true);

      // Redirect to payment page after short delay
      setTimeout(() => {
        router.push(`/booking/payment?bookingId=${bookingId}`);
      }, 1500);
    } catch (error) {
      console.error("Booking error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (formSubmitted) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-green-700">
            <CheckIcon className="h-12 w-12 mx-auto mb-2" />
            Đặt tour thành công!
          </CardTitle>
          <CardDescription className="text-center">
            <div className="space-y-2">
              <p>
                Cảm ơn bạn đã đặt tour <strong>{tourName}</strong>
              </p>
              <p>Chúng tôi sẽ liên hệ với bạn trong 24h để xác nhận.</p>
              <p className="text-sm">Đang chuyển đến trang thanh toán...</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-green-700" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckIcon className="h-5 w-5 text-green-600" />
          Đặt tour không cần đăng nhập
        </CardTitle>
        <CardDescription>
          Điền thông tin để đặt tour {tourName} ({tourDuration}). Bạn có thể đặt
          tour ngay mà không cần tạo tài khoản.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Họ và tên <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Nguyễn Văn A"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Số điện thoại <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="0912345678"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">
                Địa chỉ <span className="text-red-500">*</span>
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Người liên hệ khẩn cấp</Label>
                <Input
                  id="emergencyContact"
                  name="emergencyContact"
                  placeholder="Tên người thân"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">
                  SĐT người liên hệ khẩn cấp
                </Label>
                <Input
                  id="emergencyPhone"
                  name="emergencyPhone"
                  placeholder="0912345678"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Ngày khởi hành <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    type="date"
                    value={date ? date.toISOString().split("T")[0] : ""}
                    onChange={(e) => {
                      if (e.target.value) {
                        setDate(new Date(e.target.value));
                      } else {
                        setDate(undefined);
                      }
                    }}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full"
                    placeholder="Chọn ngày khởi hành"
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
                {date && (
                  <p className="text-sm text-green-600">
                    Ngày đã chọn:{" "}
                    {format(date, "EEEE, dd/MM/yyyy", { locale: vi })}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="participants">Số người tham gia</Label>
                <Select
                  value={formData.participants}
                  onValueChange={(value) =>
                    handleSelectChange("participants", value)
                  }
                >
                  <SelectTrigger id="participants">
                    <SelectValue placeholder="Chọn số người" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} người
                      </SelectItem>
                    ))}
                    <SelectItem value="group">Nhóm (10+ người)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Ghi chú</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Yêu cầu đặc biệt, thông tin thêm..."
                value={formData.notes}
                onChange={handleInputChange}
                className="resize-none"
                rows={3}
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between font-medium">
              <span>Tổng tiền:</span>
              <span className="text-green-700">
                {calculateTotalPrice().toLocaleString()} VNĐ
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Giá đã bao gồm thuế và phí dịch vụ
            </p>
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
              "Tiếp tục đến thanh toán"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
