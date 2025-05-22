"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PaymentForm } from "@/components/booking/payment-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  if (!bookingId) {
    return (
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Button asChild variant="ghost" className="mr-4">
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Quay lại
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Thanh toán</h1>
          </div>

          <div className="text-center py-12">
            <h2 className="text-2xl font-medium mb-4">
              Không tìm thấy thông tin đặt tour
            </h2>
            <p className="text-muted-foreground mb-8">
              Có thể thông tin đặt tour đã hết hạn hoặc không tồn tại
            </p>
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/booking">Đặt tour mới</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/booking">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Thanh toán</h1>
        </div>

        <PaymentForm bookingId={bookingId} />

        <div className="mt-8 border-t pt-8">
          <h3 className="text-lg font-semibold mb-4">Câu hỏi thường gặp</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Các phương thức thanh toán nào được chấp nhận?</h4>
              <p className="text-sm text-muted-foreground">
                Chúng tôi chấp nhận thanh toán qua thẻ tín dụng/ghi nợ, ví điện tử (MoMo, ZaloPay, VNPay), và thanh toán khi tham gia tour.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Thông tin thanh toán của tôi có an toàn không?</h4>
              <p className="text-sm text-muted-foreground">
                Chúng tôi sử dụng các cổng thanh toán an toàn và bảo mật để đảm bảo thông tin thanh toán của bạn được bảo vệ.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Tôi có thể hủy tour sau khi đã thanh toán không?</h4>
              <p className="text-sm text-muted-foreground">
                Bạn có thể hủy tour và được hoàn tiền theo chính sách của chúng tôi. Nếu hủy trước 7 ngày, bạn sẽ được hoàn 80% tổng giá trị tour. Nếu hủy trong vòng 3-7 ngày, bạn sẽ được hoàn 50%. Nếu hủy trong vòng 3 ngày, bạn sẽ không được hoàn tiền.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Tôi cần mang những gì khi đi tour?</h4>
              <p className="text-sm text-muted-foreground">
                Bạn cần mang theo CCCD/CMND, tiền mặt cho chi tiêu cá nhân, quần áo phù hợp với thời tiết, và các vật dụng cá nhân cần thiết khác.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
