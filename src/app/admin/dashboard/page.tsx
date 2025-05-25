import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { auth } from '@/lib/auth/auth'
import { notFound, redirect } from 'next/navigation'

export default async function AdminDashboardPage() {
  const session = await auth()

  // Kiểm tra xem người dùng đã đăng nhập chưa và có quyền admin không
  if (!session?.user || session.user.role !== 'ADMIN') {
    redirect('/login?callbackUrl=/admin/dashboard')
  }

  try {
    // Lấy dữ liệu từ cơ sở dữ liệu
    const userCount = await prisma.user.count()
    const bookingCount = await prisma.booking.count()
    const paymentCount = await prisma.payment.count()
    const tourCount = await prisma.tour.count()

    // Lấy danh sách 5 người dùng mới nhất
    const recentUsers = await prisma.user.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    })

    // Lấy danh sách 5 đơn đặt tour mới nhất
    const recentBookings = await prisma.booking.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        },
        tour: {
          select: {
            name: true
          }
        }
      }
    })

    return (
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Bảng điều khiển quản trị</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Người dùng</CardTitle>
              <CardDescription>Tổng số người dùng đã đăng ký</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{userCount}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Tours</CardTitle>
              <CardDescription>Tổng số tour du lịch</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{tourCount}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Đặt tour</CardTitle>
              <CardDescription>Tổng số đơn đặt tour</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{bookingCount}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Thanh toán</CardTitle>
              <CardDescription>Tổng số giao dịch thanh toán</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{paymentCount}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Người dùng mới nhất</CardTitle>
              <CardDescription>5 người dùng đăng ký gần đây nhất</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Vai trò</TableHead>
                    <TableHead>Ngày đăng ký</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name || "Chưa cập nhật"}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{new Date(user.createdAt).toLocaleDateString('vi-VN')}</TableCell>
                    </TableRow>
                  ))}
                  {recentUsers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center">Không có dữ liệu</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Đặt tour gần đây</CardTitle>
              <CardDescription>5 đơn đặt tour gần đây nhất</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Người đặt</TableHead>
                    <TableHead>Tour</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Tổng tiền</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.user.name || booking.user.email}</TableCell>
                      <TableCell>{booking.tour.name}</TableCell>
                      <TableCell>{booking.status}</TableCell>
                      <TableCell>{booking.totalPrice.toLocaleString('vi-VN')} VND</TableCell>
                    </TableRow>
                  ))}
                  {recentBookings.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center">Không có dữ liệu</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu từ database:", error)
    return (
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Bảng điều khiển quản trị</h1>
        <Card>
          <CardHeader>
            <CardTitle className="text-red-500">Lỗi kết nối</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Không thể kết nối đến cơ sở dữ liệu. Vui lòng kiểm tra lại cấu hình kết nối.</p>
            <p className="text-sm text-muted-foreground mt-2">Chi tiết lỗi: {(error as Error).message}</p>
          </CardContent>
        </Card>
      </div>
    )
  }
}
