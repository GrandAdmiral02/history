import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Helper function để định dạng trạng thái booking
const formatBookingStatus = (status: string) => {
  switch (status) {
    case "PENDING":
      return <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">Chờ xác nhận</span>;
    case "CONFIRMED":
      return <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">Đã xác nhận</span>;
    case "CANCELLED":
      return <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-800">Đã hủy</span>;
    case "COMPLETED":
      return <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">Đã hoàn thành</span>;
    default:
      return <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-800">{status}</span>;
  }
};

export default async function UserBookingsPage() {
  const session = await auth();

  // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard/bookings");
  }

  // Lấy danh sách booking của người dùng
  const bookings = await prisma.booking.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      tour: true,
      payments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Quản lý đặt tour</h1>
        <Button asChild className="bg-green-700 hover:bg-green-800">
          <Link href="/booking">Đặt tour mới</Link>
        </Button>
      </div>

      {bookings.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Chưa có đặt tour nào</CardTitle>
            <CardDescription>Bạn chưa đặt tour nào. Hãy khám phá và đặt một tour ngay!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/historical-sites">Khám phá điểm đến</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Đơn đặt tour của bạn</CardTitle>
              <CardDescription>Danh sách tất cả các tour bạn đã đặt</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tour</TableHead>
                    <TableHead>Ngày khởi hành</TableHead>
                    <TableHead>Số người</TableHead>
                    <TableHead>Tổng tiền</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thanh toán</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => {
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
                      paymentStatus = "Đã thanh toán";
                      paymentStatusClass = "text-green-600";
                    }

                    return (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.tour.name}</TableCell>
                        <TableCell>{new Date(booking.departureDate).toLocaleDateString("vi-VN")}</TableCell>
                        <TableCell>{booking.participants} người</TableCell>
                        <TableCell>{booking.totalPrice.toLocaleString("vi-VN")} VNĐ</TableCell>
                        <TableCell>{formatBookingStatus(booking.status)}</TableCell>
                        <TableCell className={paymentStatusClass}>{paymentStatus}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button asChild variant="outline" size="sm">
                              <Link href={`/dashboard/bookings/${booking.id}`}>Chi tiết</Link>
                            </Button>
                            {remainingAmount > 0 && booking.status !== "CANCELLED" && (
                              <Button asChild size="sm" className="bg-green-700 hover:bg-green-800">
                                <Link href={`/booking/payment?bookingId=${booking.id}`}>Thanh toán</Link>
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Thông tin thanh toán</CardTitle>
              <CardDescription>Danh sách các giao dịch thanh toán của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã giao dịch</TableHead>
                    <TableHead>Tour</TableHead>
                    <TableHead>Phương thức</TableHead>
                    <TableHead>Số tiền</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Ngày thanh toán</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.flatMap(booking =>
                    booking.payments.map(payment => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.transactionId || "N/A"}</TableCell>
                        <TableCell>{booking.tour.name}</TableCell>
                        <TableCell>
                          {payment.paymentMethod === "CREDIT_CARD" && "Thẻ tín dụng"}
                          {payment.paymentMethod === "BANK_TRANSFER" && "Chuyển khoản"}
                          {payment.paymentMethod === "E_WALLET" && "Ví điện tử"}
                          {payment.paymentMethod === "CASH" && "Tiền mặt"}
                        </TableCell>
                        <TableCell>{payment.amount.toLocaleString("vi-VN")} VNĐ</TableCell>
                        <TableCell>
                          {payment.paymentStatus === "PAID" && (
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                              Thành công
                            </span>
                          )}
                          {payment.paymentStatus === "PENDING" && (
                            <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
                              Đang xử lý
                            </span>
                          )}
                          {payment.paymentStatus === "FAILED" && (
                            <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-800">
                              Thất bại
                            </span>
                          )}
                          {payment.paymentStatus === "REFUNDED" && (
                            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                              Đã hoàn tiền
                            </span>
                          )}
                        </TableCell>
                        <TableCell>{new Date(payment.createdAt).toLocaleDateString("vi-VN")}</TableCell>
                      </TableRow>
                    ))
                  )}
                  {bookings.flatMap(booking => booking.payments).length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Chưa có giao dịch thanh toán nào
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
