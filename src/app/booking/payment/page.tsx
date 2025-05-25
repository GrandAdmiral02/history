import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PaymentForm } from "@/components/booking/payment-form";
import Image from "next/image";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: { bookingId?: string };
}) {
  const session = await auth();

  // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
  if (!session?.user) {
    redirect("/login?callbackUrl=/booking/payment");
  }

  // Nếu không có bookingId, chuyển hướng đến trang đặt tour
  if (!searchParams.bookingId) {
    redirect("/booking");
  }

  // Lấy thông tin chi tiết đơn đặt tour
  const booking = await prisma.booking.findUnique({
    where: {
      id: searchParams.bookingId,
      userId: session.user.id, // Chỉ lấy booking của người dùng hiện tại
    },
    include: {
      tour: true,
      payments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  // Nếu không tìm thấy booking, hiển thị trang 404
  if (!booking) {
    notFound();
  }

  // Nếu đơn hàng đã bị hủy, chuyển hướng đến trang chi tiết
  if (booking.status === "CANCELLED") {
    redirect(`/dashboard/bookings/${booking.id}`);
  }

  // Tính tổng số tiền đã thanh toán
  const totalPaid = booking.payments.reduce((sum, payment) => {
    return payment.paymentStatus === "PAID" ? sum + payment.amount : sum;
  }, 0);

  // Tính số tiền còn lại cần thanh toán
  const remainingAmount = booking.totalPrice - totalPaid;

  // Nếu đã thanh toán đủ, chuyển hướng đến trang chi tiết
  if (remainingAmount <= 0) {
    redirect(`/dashboard/bookings/${booking.id}`);
  }

  return (
    <div className="container py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Thanh toán đặt tour</h1>
        <p className="text-muted-foreground mt-2">
          Hoàn tất thanh toán để xác nhận đặt tour của bạn
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Chọn phương thức thanh toán</CardTitle>
              <CardDescription>
                Vui lòng chọn phương thức thanh toán phù hợp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentForm bookingId={booking.id} remainingAmount={remainingAmount} />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Tóm tắt đơn hàng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="relative w-24 h-20 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={booking.tour.image || "https://via.placeholder.com/150"}
                    alt={booking.tour.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{booking.tour.name}</h3>
                  <p className="text-sm text-muted-foreground">{booking.tour.location}</p>
                  <p className="text-sm mt-1">
                    Ngày khởi hành: {new Date(booking.departureDate).toLocaleDateString("vi-VN")}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Tổng tiền:</span>
                  <span className="font-medium">
                    {booking.totalPrice.toLocaleString("vi-VN")} VNĐ
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Đã thanh toán:</span>
                  <span className="font-medium">
                    {totalPaid.toLocaleString("vi-VN")} VNĐ
                  </span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2 mt-2">
                  <span>Số tiền cần thanh toán:</span>
                  <span className="text-green-700">
                    {remainingAmount.toLocaleString("vi-VN")} VNĐ
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 border-t pt-8 max-w-3xl mx-auto">
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
  );
}
