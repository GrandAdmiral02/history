"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
import { Loader2, CheckCircle2, CreditCard, Wallet } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

interface BookingData {
  tourId: string;
  tourName: string;
  departureDate: string;
  fullName: string;
  email: string;
  phone: string;
  participants: string;
  notes: string;
  totalPrice: number;
}

interface PaymentFormProps {
  bookingId: string;
}

export function PaymentForm({ bookingId }: PaymentFormProps) {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    try {
      // In a real app, we would fetch this data from an API
      const data = localStorage.getItem(bookingId);
      if (data) {
        setBookingData(JSON.parse(data));
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error fetching booking data:", error);
      router.push("/");
    }
  }, [bookingId, router]);

  // Function to save booking to database when user is logged in
  const saveBookingToDatabase = async (bookingData: BookingData, paymentMethod: string, status: string = "PENDING") => {
    try {
      // In a real app, we would send this data to an API endpoint to save in database
      // This is a mock function for demonstration
      console.log('Saving booking to database with payment method:', paymentMethod);
      console.log('Booking data:', bookingData);
      console.log('Status:', status);

      // Here we would call an API endpoint
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     tourId: bookingData.tourId,
      //     departureDate: bookingData.departureDate,
      //     participants: parseInt(bookingData.participants),
      //     totalPrice: bookingData.totalPrice,
      //     notes: bookingData.notes,
      //     paymentMethod: paymentMethod,
      //     status: status,
      //   }),
      // });

      return true;
    } catch (error) {
      console.error("Error saving booking:", error);
      return false;
    }
  };

  const handleCardInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .slice(0, 5);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardInfo((prev) => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setCardInfo((prev) => ({ ...prev, expiryDate: formatted }));
  };

  const isFormValid = () => {
    if (paymentMethod === "card") {
      return (
        cardInfo.cardNumber.replace(/\s/g, "").length === 16 &&
        cardInfo.cardHolder.trim() !== "" &&
        cardInfo.expiryDate.length === 5 &&
        cardInfo.cvv.length === 3
      );
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Vui lòng điền đầy đủ thông tin thanh toán");
      return;
    }

    setIsLoading(true);

    // Simulate payment processing
    try {
      // Process the payment based on the payment method
      if (paymentMethod === "card") {
        // In a real app, we would send this data to a payment gateway API like Stripe
        // const stripeResponse = await fetch('/api/payments/process-card', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ cardInfo, amount: bookingData?.totalPrice }),
        // });

        // For demonstration, simulate a delay for payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      else if (paymentMethod === "e-wallet") {
        // Simulate e-wallet payment redirection and processing
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      else if (paymentMethod === "cash") {
        // For cash payments, simply record the booking with a PENDING payment status
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Record the booking and payment in the database if needed
      if (bookingData) {
        await saveBookingToDatabase(
          bookingData,
          paymentMethod,
          paymentMethod === "cash" ? "PENDING" : "PAID"
        );
      }

      // Set success state to show confirmation
      setIsSuccess(true);

      // In a production app, we might want to clear localStorage after recording in database
      // localStorage.removeItem(bookingId);
    } catch (error) {
      console.error("Payment error:", error);
      alert("Đã có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-center text-2xl text-green-700">
            Thanh toán thành công!
          </CardTitle>
          <CardDescription className="text-center text-lg mt-2">
            Cảm ơn bạn đã đặt tour
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border rounded-lg p-6 bg-muted/30">
            <h3 className="font-semibold text-lg mb-4">Chi tiết đặt tour</h3>
            {bookingData && (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tour:</span>
                  <span className="font-medium">{bookingData.tourName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ngày khởi hành:</span>
                  <span className="font-medium">
                    {format(new Date(bookingData.departureDate), "PPP", { locale: vi })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Số người:</span>
                  <span className="font-medium">{bookingData.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tổng tiền:</span>
                  <span className="font-medium text-green-700">
                    {bookingData.totalPrice.toLocaleString()} VNĐ
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trạng thái:</span>
                  <span className="font-medium text-green-700">Đã thanh toán</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2 text-center">
            <p>
              Thông tin chi tiết đã được gửi đến email của bạn.
            </p>
            <p className="text-sm text-muted-foreground">
              Mã đặt tour: <span className="font-medium">{bookingId.split('-')[1]}</span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button
            onClick={() => router.push("/")}
            className="w-full bg-green-700 hover:bg-green-800"
          >
            Quay lại trang chủ
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/historical-sites")}
          >
            Khám phá thêm các điểm đến
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!bookingData) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Đang tải thông tin</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Thanh toán</CardTitle>
        <CardDescription>
          Hoàn tất thanh toán để đặt tour {bookingData.tourName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border rounded-lg p-4 bg-muted/30">
          <h3 className="font-semibold mb-3">Chi tiết đặt tour</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tour:</span>
              <span>{bookingData.tourName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Ngày khởi hành:</span>
              <span>
                {format(new Date(bookingData.departureDate), "PPP", { locale: vi })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Số người:</span>
              <span>{bookingData.participants}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Tổng tiền:</span>
              <span className="text-green-700">
                {bookingData.totalPrice.toLocaleString()} VNĐ
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Phương thức thanh toán</h3>
          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/30">
              <RadioGroupItem value="card" id="card" />
              <Label
                htmlFor="card"
                className="flex-1 flex items-center cursor-pointer"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                <span>Thẻ tín dụng/ghi nợ</span>
              </Label>
              <div className="flex space-x-1">
                <div className="relative h-6 w-10">
                  <Image
                    src="/visa.svg"
                    alt="Visa"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-6 w-10">
                  <Image
                    src="/mastercard.svg"
                    alt="Mastercard"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/30">
              <RadioGroupItem value="e-wallet" id="e-wallet" />
              <Label
                htmlFor="e-wallet"
                className="flex-1 flex items-center cursor-pointer"
              >
                <Wallet className="h-5 w-5 mr-2" />
                <span>Ví điện tử (MoMo, ZaloPay, VNPay)</span>
              </Label>
              <div className="flex space-x-1">
                <div className="relative h-6 w-10">
                  <Image
                    src="/momo.svg"
                    alt="MoMo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-6 w-10">
                  <Image
                    src="/zalopay.svg"
                    alt="ZaloPay"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/30">
              <RadioGroupItem value="cash" id="cash" />
              <Label
                htmlFor="cash"
                className="flex-1 flex items-center cursor-pointer"
              >
                <span>Thanh toán khi tham gia tour</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {paymentMethod === "card" && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Số thẻ</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardInfo.cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardHolder">Tên chủ thẻ</Label>
              <Input
                id="cardHolder"
                name="cardHolder"
                placeholder="NGUYEN VAN A"
                value={cardInfo.cardHolder}
                onChange={handleCardInputChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Ngày hết hạn</Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={cardInfo.expiryDate}
                  onChange={handleExpiryDateChange}
                  maxLength={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  type="password"
                  placeholder="123"
                  value={cardInfo.cvv}
                  onChange={handleCardInputChange}
                  maxLength={3}
                />
              </div>
            </div>
          </form>
        )}

        {paymentMethod === "e-wallet" && (
          <div className="border rounded-lg p-4 text-center">
            <p className="mb-4">
              Trên trang thanh toán thật, bạn sẽ được chuyển hướng đến trang thanh toán của ví điện tử để hoàn tất giao dịch.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">
                <Image
                  src="/momo.svg"
                  alt="MoMo"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                MoMo
              </Button>
              <Button variant="outline" size="sm">
                <Image
                  src="/zalopay.svg"
                  alt="ZaloPay"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                ZaloPay
              </Button>
              <Button variant="outline" size="sm">
                <Image
                  src="/vnpay.svg"
                  alt="VNPay"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                VNPay
              </Button>
            </div>
          </div>
        )}

        {paymentMethod === "cash" && (
          <div className="border rounded-lg p-4">
            <p>
              Bạn đã chọn phương thức thanh toán khi tham gia tour. Vui lòng
              thanh toán đầy đủ trước khi bắt đầu tour.
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Thanh toán bằng tiền mặt tại điểm khởi hành tour</li>
              <li>• Vui lòng có mặt trước giờ khởi hành tour 30 phút</li>
              <li>• Mang theo CCCD/CMND khi thanh toán</li>
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSubmit}
          className="w-full bg-green-700 hover:bg-green-800"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Đang xử lý...
            </>
          ) : (
            `Thanh toán ${bookingData.totalPrice.toLocaleString()} VNĐ`
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
