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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      date !== undefined
    );
  };

  const calculateTotalPrice = () => {
    return tourPrice * parseInt(formData.participants);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    setIsLoading(true);

    // Simulate API request
    try {
      // In a real application, we would send this data to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const bookingData = {
        tourId,
        tourName,
        departureDate: date,
        ...formData,
        totalPrice: calculateTotalPrice(),
      };

      console.log("Booking data:", bookingData);

      // Store booking data in localStorage for demo purposes
      const bookingId = `guest-booking-${Date.now()}`;
      localStorage.setItem(bookingId, JSON.stringify({
        ...bookingData,
        isGuestBooking: true
      }));

      setFormSubmitted(true);

      // Redirect to payment page after short delay
      setTimeout(() => {
        router.push(`/booking/payment?bookingId=${bookingId}`);
      }, 1000);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
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
            Chuyển hướng đến trang thanh toán...
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
        <CardTitle>Đặt tour</CardTitle>
        <CardDescription>
          Điền thông tin để đặt tour {tourName} ({tourDuration})
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Ngày khởi hành <span className="text-red-500">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP", { locale: vi })
                      ) : (
                        <span>Chọn ngày</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      locale={vi}
                    />
                  </PopoverContent>
                </Popover>
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
