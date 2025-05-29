"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { CreditCard, Banknote, Wallet2, Coins } from "lucide-react";
import Image from "next/image";

interface PaymentFormProps {
  bookingId: string;
  remainingAmount: number;
}

export function PaymentForm({ bookingId, remainingAmount }: PaymentFormProps) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<string>("CREDIT_CARD");
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });
  const [bankInfo, setBankInfo] = useState({
    accountNumber: "",
    bankName: "",
    transferDate: "",
    note: "",
  });
  const [walletInfo, setWalletInfo] = useState({
    walletType: "MOMO",
    phoneNumber: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Chuẩn bị dữ liệu thanh toán
      let paymentDetails = {};

      switch (paymentMethod) {
        case "CREDIT_CARD":
          paymentDetails = {
            cardNumber: cardInfo.cardNumber.replace(/\s/g, "").slice(-4),
            cardHolder: cardInfo.cardHolder,
            cardType: getCardType(cardInfo.cardNumber),
          };
          break;
        case "BANK_TRANSFER":
          paymentDetails = {
            bankName: bankInfo.bankName,
            accountNumber: bankInfo.accountNumber,
            transferDate: bankInfo.transferDate,
            note: bankInfo.note,
          };
          break;
        case "E_WALLET":
          paymentDetails = {
            walletType: walletInfo.walletType,
            phoneNumber: walletInfo.phoneNumber,
          };
          break;
        case "CASH":
          paymentDetails = {
            note: "Thanh toán bằng tiền mặt tại địa điểm",
          };
          break;
      }

      // Gọi API để xử lý thanh toán
      const response = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingId,
          amount: remainingAmount,
          paymentMethod,
          paymentDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Có lỗi xảy ra khi xử lý thanh toán");
      }

      // Hiển thị thông báo thành công
      toast.success("Thanh toán thành công!", {
        description: "Cảm ơn bạn đã đặt tour. Chúng tôi sẽ liên hệ sớm để xác nhận.",
      });

      // Chuyển hướng đến trang chi tiết đặt tour
      router.push(`/dashboard/bookings/${bookingId}`);
      router.refresh();
    } catch (error) {
      console.error("Lỗi thanh toán:", error);
      toast.error("Thanh toán thất bại", {
        description: (error as Error).message || "Vui lòng thử lại sau",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Helper function để xác định loại thẻ dựa trên số thẻ
  const getCardType = (cardNumber: string) => {
    const cleanNumber = cardNumber.replace(/\s/g, "");
    if (cleanNumber.startsWith("4")) return "Visa";
    if (/^5[1-5]/.test(cleanNumber)) return "MasterCard";
    if (/^3[47]/.test(cleanNumber)) return "American Express";
    if (/^6(?:011|5)/.test(cleanNumber)) return "Discover";
    return "Unknown";
  };

  // Helper function để định dạng số thẻ tín dụng
  const formatCardNumber = (value: string) => {
    const cleanValue = value.replace(/\s/g, "");
    const chunks = [];

    for (let i = 0; i < cleanValue.length; i += 4) {
      chunks.push(cleanValue.substr(i, 4));
    }

    return chunks.join(" ");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <RadioGroup
        value={paymentMethod}
        onValueChange={setPaymentMethod}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div>
          <RadioGroupItem
            value="CREDIT_CARD"
            id="credit-card"
            className="peer sr-only"
          />
          <Label
            htmlFor="credit-card"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <CreditCard className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">Thẻ tín dụng</span>
          </Label>
        </div>

        <div>
          <RadioGroupItem
            value="BANK_TRANSFER"
            id="bank-transfer"
            className="peer sr-only"
          />
          <Label
            htmlFor="bank-transfer"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Banknote className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">Chuyển khoản</span>
          </Label>
        </div>

        <div>
          <RadioGroupItem value="E_WALLET" id="e-wallet" className="peer sr-only" />
          <Label
            htmlFor="e-wallet"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Wallet2 className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">Ví điện tử</span>
          </Label>
        </div>

        <div>
          <RadioGroupItem value="CASH" id="cash" className="peer sr-only" />
          <Label
            htmlFor="cash"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Coins className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">Tiền mặt</span>
          </Label>
        </div>
      </RadioGroup>

      <div className="mt-6">
        {paymentMethod === "CREDIT_CARD" && (
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4 flex gap-2">
                <div className="w-12 h-8 relative">
                  <Image
                    src="/visa.svg"
                    alt="Visa"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-12 h-8 relative">
                  <Image
                    src="https://ext.same-assets.com/3334769225/4037353626.png"
                    alt="MasterCard"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Số thẻ</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardInfo.cardNumber}
                  onChange={(e) => setCardInfo({
                    ...cardInfo,
                    cardNumber: formatCardNumber(e.target.value.slice(0, 19))
                  })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-holder">Tên chủ thẻ</Label>
                <Input
                  id="card-holder"
                  placeholder="NGUYEN VAN A"
                  value={cardInfo.cardHolder}
                  onChange={(e) => setCardInfo({
                    ...cardInfo,
                    cardHolder: e.target.value.toUpperCase()
                  })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry-date">Ngày hết hạn</Label>
                  <Input
                    id="expiry-date"
                    placeholder="MM/YY"
                    value={cardInfo.expiryDate}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d]/g, "");
                      let formattedValue = value;
                      if (value.length > 2) {
                        formattedValue = value.slice(0, 2) + "/" + value.slice(2, 4);
                      }
                      setCardInfo({
                        ...cardInfo,
                        expiryDate: formattedValue.slice(0, 5)
                      });
                    }}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    type="password"
                    maxLength={4}
                    value={cardInfo.cvv}
                    onChange={(e) => setCardInfo({
                      ...cardInfo,
                      cvv: e.target.value.replace(/[^\d]/g, "").slice(0, 4)
                    })}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "BANK_TRANSFER" && (
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="font-medium">Thông tin chuyển khoản:</p>
                  <ul className="text-sm space-y-1">
                    <li><span className="text-muted-foreground">Ngân hàng:</span> <span className="font-medium">BIDV - Ngân hàng Đầu tư và Phát triển Việt Nam</span></li>
                    <li><span className="text-muted-foreground">Số tài khoản:</span> <span className="font-medium">12345678910</span></li>
                    <li><span className="text-muted-foreground">Chủ tài khoản:</span> <span className="font-medium">CÔNG TY DU LỊCH NGHỆ AN HISTORICAL</span></li>
                    <li><span className="text-muted-foreground">Nội dung chuyển khoản:</span> <span className="font-medium">TOUR {bookingId.substring(0, 8).toUpperCase()}</span></li>
                    <li><span className="text-muted-foreground">Số tiền:</span> <span className="font-medium">{remainingAmount.toLocaleString("vi-VN")} VNĐ</span></li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground">
              Vui lòng nhập thông tin chuyển khoản của bạn để chúng tôi xác nhận:
            </p>

            <div className="space-y-2">
              <Label htmlFor="bank-name">Tên ngân hàng</Label>
              <Input
                id="bank-name"
                placeholder="VD: BIDV, Vietcombank, ..."
                value={bankInfo.bankName}
                onChange={(e) => setBankInfo({
                  ...bankInfo,
                  bankName: e.target.value
                })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account-number">Số tài khoản của bạn</Label>
              <Input
                id="account-number"
                placeholder="Số tài khoản chuyển khoản"
                value={bankInfo.accountNumber}
                onChange={(e) => setBankInfo({
                  ...bankInfo,
                  accountNumber: e.target.value.replace(/[^\d]/g, "")
                })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transfer-date">Ngày chuyển khoản</Label>
              <Input
                id="transfer-date"
                type="date"
                value={bankInfo.transferDate}
                onChange={(e) => setBankInfo({
                  ...bankInfo,
                  transferDate: e.target.value
                })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transfer-note">Nội dung chuyển khoản</Label>
              <Textarea
                id="transfer-note"
                placeholder="Nhập chính xác nội dung chuyển khoản"
                value={bankInfo.note}
                onChange={(e) => setBankInfo({
                  ...bankInfo,
                  note: e.target.value
                })}
                required
              />
            </div>
          </div>
        )}

        {paymentMethod === "E_WALLET" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wallet-type">Loại ví điện tử</Label>
              <RadioGroup
                value={walletInfo.walletType}
                onValueChange={(value) => setWalletInfo({
                  ...walletInfo,
                  walletType: value
                })}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="MOMO"
                    id="momo"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="momo"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="relative h-8 w-8 mb-2">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3911782935.png"
                        alt="MoMo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">MoMo</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="ZALOPAY"
                    id="zalopay"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="zalopay"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="relative h-8 w-8 mb-2">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3844876345.png"
                        alt="ZaloPay"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">ZaloPay</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="VNPAY"
                    id="vnpay"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="vnpay"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="relative h-8 w-8 mb-2">
                      <Image
                        src="https://ext.same-assets.com/3334769225/2957634566.png"
                        alt="VNPay"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">VNPay</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="OTHER"
                    id="other-wallet"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="other-wallet"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Wallet2 className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">Khác</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone-number">Số điện thoại đăng ký ví</Label>
              <Input
                id="phone-number"
                placeholder="0901234567"
                value={walletInfo.phoneNumber}
                onChange={(e) => setWalletInfo({
                  ...walletInfo,
                  phoneNumber: e.target.value.replace(/[^\d]/g, "").slice(0, 11)
                })}
                required
              />
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Lưu ý:</strong> Sau khi nhấn nút thanh toán, bạn sẽ nhận được mã QR hoặc được chuyển đến trang thanh toán của ví điện tử để hoàn tất giao dịch.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {paymentMethod === "CASH" && (
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-green-700">
                    <Coins className="h-8 w-8" />
                    <div>
                      <h3 className="font-medium">Thanh toán bằng tiền mặt</h3>
                      <p className="text-sm text-muted-foreground">Thanh toán trực tiếp tại điểm khởi hành</p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Thông tin thanh toán:</h4>
                    <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Số tiền cần thanh toán: <strong>{remainingAmount.toLocaleString("vi-VN")} VNĐ</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Thanh toán tại điểm khởi hành trước khi lên xe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Nhân viên sẽ liên hệ xác nhận trước chuyến đi 24h</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Vui lòng chuẩn bị đúng số tiền để thuận tiện trong việc thanh toán</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div className="text-sm text-yellow-800 dark:text-yellow-200">
                        <p className="font-medium mb-1">Lưu ý quan trọng:</p>
                        <p>Trong trường hợp bạn không có mặt tại điểm khởi hành đúng giờ hoặc không thanh toán, tour sẽ bị hủy và không được hoàn tiền.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <div className="border-t pt-6 mt-6">
        <Button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800"
          disabled={isProcessing}
        >
          {isProcessing ? "Đang xử lý..." : `Thanh toán ${remainingAmount.toLocaleString("vi-VN")} VNĐ`}
        </Button>
      </div>
    </form>
  );
}
