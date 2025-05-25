import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Helper function để định dạng trạng thái booking
const formatBookingStatus = (status: string) => {
  switch (status) {
    case "PENDING":
      return { label: "Chờ xác nhận", color: "bg-yellow-100 text-yellow-800" };
    case "CONFIRMED":
      return { label: "Đã xác nhận", color: "bg-green-100 text-green-800" };
    case "CANCELLED":
      return { label: "Đã hủy", color: "bg-red-100 text-red-800" };
    case "COMPLETED":
      return { label: "Đã hoàn thành", color: "bg-blue-100 text-blue-800" };
    default:
      return { label: status, color: "bg-gray-100 text-gray-800" };
  }
};

export default async function BookingDetailPage({ params }: { params: { id: string } }) {
  const session = await auth();

  // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard/bookings");
  }

  // Lấy thông tin chi tiết đơn đặt tour
  const booking = await prisma.booking.findUnique({
    where: {
      id: params.id,
      userId: session.user.id, // Chỉ lấy booking của người dùng hiện tại
    },
    include: {
      tour: true,
      payments: {
        orderBy: {
          createdAt: "desc",
        },
      },
      user: {
        select: {
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });

  // Nếu không tìm thấy booking, chuyển hướng đến trang 404
  if (!booking) {
    notFound();
  }

  // Tính tổng số tiền đã thanh toán
  const totalPaid = booking.payments.reduce((sum, payment) => {
    return payment.paymentStatus === "PAID" ? sum + payment.amount : sum;
  }, 0);

  // Tính số tiền còn lại cần thanh toán
  const remainingAmount = booking.totalPrice - totalPaid;

  // Xác định trạng thái thanh toán
  let paymentStatus = "Chưa thanh toán";
  let paymentStatusClass = "text-red-600";

  if (totalPaid > 0 && totalPaid < booking.totalPrice) {
    paymentStatus = `Đã thanh toán ${Math.round((totalPaid / booking.totalPrice) * 100)}%`;
    paymentStatusClass = "text-yellow-600";
  } else if (totalPaid >= booking.totalPrice) {
    paymentStatus = "Đã thanh toán đầy đủ";
    paymentStatusClass = "text-green-600";
  }

  // Định dạng trạng thái đơn hàng
  const bookingStatus = formatBookingStatus(booking.status);

  return (
    <div className="container py-10">
      <div className="flex items-center mb-8">
        <Link href="/dashboard/bookings" className="text-sm text-muted-foreground hover:text-foreground mr-2">
          ← Quay lại danh sách
        </Link>
        <h1 className="text-3xl font-bold">Chi tiết đơn đặt tour</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin tour</CardTitle>
              <CardDescription>Chi tiết về tour du lịch đã đặt</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-6">
                <div className="relative w-32 h-32 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={booking.tour.image || "https://via.placeholder.com/150"}
                    alt={booking.tour.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{booking.tour.name}</h3>
                  <p className="text-muted-foreground mt-1">{booking.tour.location}</p>
                  <p className="mt-2">{booking.tour.description}</p>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Thời gian:</span> {booking.tour.duration}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <h4 className="font-medium mb-2">Chi tiết đặt tour</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Mã đặt tour:</span>
                      <span className="font-medium">{booking.id.substring(0, 8).toUpperCase()}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Ngày khởi hành:</span>
                      <span className="font-medium">{new Date(booking.departureDate).toLocaleDateString("vi-VN")}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Số người tham gia:</span>
                      <span className="font-medium">{booking.participants} người</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Ngày đặt:</span>
                      <span className="font-medium">{new Date(booking.createdAt).toLocaleDateString("vi-VN")}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Thông tin giá</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Giá tour/người:</span>
                      <span className="font-medium">{booking.tour.price.toLocaleString("vi-VN")} VNĐ</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Số người:</span>
                      <span className="font-medium">x {booking.participants}</span>
                    </li>
                    <li className="flex justify-between font-medium border-t pt-2 mt-2">
                      <span>Tổng cộng:</span>
                      <span>{booking.totalPrice.toLocaleString("vi-VN")} VNĐ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ghi chú đặt tour</CardTitle>
            </CardHeader>
            <CardContent>
              {booking.notes ? (
                <p>{booking.notes}</p>
              ) : (
                <p className="text-muted-foreground">Không có ghi chú</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lịch sử thanh toán</CardTitle>
              <CardDescription>Các giao dịch thanh toán cho đơn đặt tour này</CardDescription>
            </CardHeader>
            <CardContent>
              {booking.payments.length > 0 ? (
                <div className="space-y-4">
                  {booking.payments.map((payment) => (
                    <div key={payment.id} className="flex justify-between items-center p-4 rounded-md border">
                      <div>
                        <div className="font-medium">{new Date(payment.createdAt).toLocaleDateString("vi-VN")}</div>
                        <div className="text-sm text-muted-foreground">
                          {payment.paymentMethod === "CREDIT_CARD" && "Thanh toán bằng thẻ tín dụng"}
                          {payment.paymentMethod === "BANK_TRANSFER" && "Thanh toán bằng chuyển khoản"}
                          {payment.paymentMethod === "E_WALLET" && "Thanh toán bằng ví điện tử"}
                          {payment.paymentMethod === "CASH" && "Thanh toán bằng tiền mặt"}
                        </div>
                        <div className="text-sm mt-1">
                          {payment.transactionId && <span>Mã GD: {payment.transactionId}</span>}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{payment.amount.toLocaleString("vi-VN")} VNĐ</div>
                        <div className="text-sm">
                          {payment.paymentStatus === "PAID" && (
                            <span className="text-green-600">Thành công</span>
                          )}
                          {payment.paymentStatus === "PENDING" && (
                            <span className="text-yellow-600">Đang xử lý</span>
                          )}
                          {payment.paymentStatus === "FAILED" && (
                            <span className="text-red-600">Thất bại</span>
                          )}
                          {payment.paymentStatus === "REFUNDED" && (
                            <span className="text-blue-600">Đã hoàn tiền</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Chưa có giao dịch thanh toán nào</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tóm tắt đơn hàng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bookingStatus.color}`}>
                  {bookingStatus.label}
                </span>
                {booking.status === "CONFIRMED" && (
                  <span className="text-sm text-muted-foreground">(Đã xác nhận vào {new Date(booking.updatedAt).toLocaleDateString("vi-VN")})</span>
                )}
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Tổng tiền:</span>
                  <span className="font-medium">{booking.totalPrice.toLocaleString("vi-VN")} VNĐ</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Đã thanh toán:</span>
                  <span className="font-medium">{totalPaid.toLocaleString("vi-VN")} VNĐ</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2 mt-2">
                  <span>Còn lại:</span>
                  <span className={paymentStatusClass}>{remainingAmount.toLocaleString("vi-VN")} VNĐ</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              {remainingAmount > 0 && booking.status !== "CANCELLED" && (
                <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                  <Link href={`/booking/payment?bookingId=${booking.id}`}>
                    Thanh toán ngay
                  </Link>
                </Button>
              )}

              {booking.status === "PENDING" && (
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/dashboard/bookings/${booking.id}/cancel`}>
                    Hủy đặt tour
                  </Link>
                </Button>
              )}

              <Button asChild variant="outline" className="w-full">
                <Link href="/dashboard/bookings">
                  Quay lại danh sách
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Thông tin liên hệ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">Tên khách hàng:</span>
                  <div className="font-medium">{booking.user.name || "Chưa cập nhật"}</div>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Email:</span>
                  <div className="font-medium">{booking.user.email}</div>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Số điện thoại:</span>
                  <div className="font-medium">{booking.user.phone || "Chưa cập nhật"}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cần hỗ trợ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Nếu bạn cần hỗ trợ với đơn đặt tour này, vui lòng liên hệ với chúng tôi:
              </p>
              <div className="text-sm">
                <div className="font-medium">Hotline:</div>
                <p>0238 1234 567</p>
              </div>
              <div className="text-sm">
                <div className="font-medium">Email:</div>
                <p>support@nghean-historical.vn</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
