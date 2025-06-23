import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://images.pexels.com/photos/2164231/pexels-photo-2164231.jpeg"
          alt="Hành trình du lịch Nghệ An"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hành Trình Khám Phá
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Những lịch trình tham quan đặc sắc giúp bạn trải nghiệm trọn vẹn vẻ
            đẹp lịch sử văn hóa Nghệ An
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-foreground">Hành trình</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lịch Trình Đề Xuất</h2>
          <p className="text-muted-foreground">
            Chúng tôi đã chuẩn bị các hành trình tham quan tiêu biểu để giúp bạn
            khám phá trọn vẹn vẻ đẹp lịch sử, văn hóa của vùng đất Nghệ An. Mỗi
            hành trình đều được thiết kế tỉ mỉ để mang đến trải nghiệm phong phú
            và đáng nhớ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hành trình 1 */}
          <Card className="flex flex-col h-full">
            <div className="relative h-60">
              <Image
                src="https://images.pexels.com/photos/32614358/pexels-photo-32614358.jpeg"
                alt="Hành trình về nguồn"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                3 ngày 2 đêm
              </div>
            </div>
            <CardHeader>
              <CardTitle>Hành trình về nguồn</CardTitle>
              <CardDescription>
                Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 1: Vinh - Nam Đàn
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Tham quan thành phố Vinh, Quảng trường Hồ Chí Minh</li>
                    <li>Di chuyển đến Khu di tích Kim Liên</li>
                    <li>Tham quan làng Sen, nơi Bác Hồ sinh ra và lớn lên</li>
                    <li>Tham quan làng Hoàng Trù, quê ngoại của Bác</li>
                    <li>Nghỉ đêm tại Nam Đàn hoặc Vinh</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 2: Nam Đàn - Đô Lương
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Viếng mộ bà Hoàng Thị Loan tại núi Động Tranh</li>
                    <li>Tham quan đền Chung Sơn</li>
                    <li>Di chuyển đến huyện Đô Lương</li>
                    <li>Tham quan đền Quả Sơn</li>
                    <li>Tham quan Khu di tích Truông Bồn</li>
                    <li>Nghỉ đêm tại Đô Lương hoặc Vinh</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 3: Vinh - Di tích lịch sử
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Tham quan Bảo tàng Xô Viết Nghệ Tĩnh</li>
                    <li>Tham quan Thành cổ Vinh</li>
                    <li>Ghé thăm đền Vạn Lộc</li>
                    <li>Kết thúc hành trình</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="w-full bg-green-700 hover:bg-green-800"
              >
                <Link href="/destinations/ve-nguon">Chi Tiết Hành Trình</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Hành trình 2 */}
          <Card className="flex flex-col h-full">
            <div className="relative h-60">
              <Image
                src="https://images.pexels.com/photos/2973305/pexels-photo-2973305.jpeg"
                alt="Con đường huyền thoại"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                2 ngày 1 đêm
              </div>
            </div>
            <CardHeader>
              <CardTitle>Con đường huyền thoại</CardTitle>
              <CardDescription>
                Hành trình theo dấu chân những người anh hùng
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 1: Vinh - Cột mốc số 0
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Tham quan Bảo tàng Xô Viết Nghệ Tĩnh</li>
                    <li>Di chuyển đến xã Tân Kỳ</li>
                    <li>Tham quan Cột mốc số 0 - Đường Hồ Chí Minh</li>
                    <li>Tìm hiểu về đường mòn Hồ Chí Minh huyền thoại</li>
                    <li>Nghỉ đêm tại Tân Kỳ hoặc Vinh</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 2: Truông Bồn - Vinh
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Di chuyển đến huyện Đô Lương</li>
                    <li>Tham quan Khu di tích Truông Bồn</li>
                    <li>
                      Tìm hiểu về sự hy sinh anh dũng của các chiến sĩ TNXP
                    </li>
                    <li>
                      Quay về Vinh, tham quan đền thờ Hoàng đế Quang Trung
                    </li>
                    <li>Kết thúc hành trình</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="w-full bg-green-700 hover:bg-green-800"
              >
                <Link href="/destinations/con-duong-huyen-thoai">
                  Chi Tiết Hành Trình
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Hành trình 3 */}
          <Card className="flex flex-col h-full">
            <div className="relative h-60">
              <Image
                src="https://images.pexels.com/photos/7263777/pexels-photo-7263777.jpeg"
                alt="Di sản văn hóa tâm linh"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                4 ngày 3 đêm
              </div>
            </div>
            <CardHeader>
              <CardTitle>Di sản văn hóa tâm linh</CardTitle>
              <CardDescription>
                Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 1: Vinh - Đền Cuông
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Tham quan thành phố Vinh</li>
                    <li>Di chuyển đến huyện Diễn Châu</li>
                    <li>Tham quan Đền Cuông</li>
                    <li>Tìm hiểu về tín ngưỡng thờ phụng An Dương Vương</li>
                    <li>Nghỉ đêm tại Diễn Châu hoặc Vinh</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 2-3: Quanh Nghệ An
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Tham quan Đền Quả Sơn tại Đô Lương</li>
                    <li>Tham quan Đền Vạn Lộc tại Hưng Lộc</li>
                    <li>Tham quan đền thờ Hoàng đế Quang Trung</li>
                    <li>Viếng chùa Đại Tuệ</li>
                    <li>Khám phá các di tích tâm linh khác trong khu vực</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 4: Con Cuông
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Di chuyển đến huyện Con Cuông</li>
                    <li>Tham quan đền Cửa Rào</li>
                    <li>Khám phá Vườn quốc gia Pù M��t</li>
                    <li>Kết thúc hành trình</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="w-full bg-green-700 hover:bg-green-800"
              >
                <Link href="/destinations/di-san-tam-linh">
                  Chi Tiết Hành Trình
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Hành trình 4 */}
          <Card className="flex flex-col h-full">
            <div className="relative h-60">
              <Image
                src="https://images.pexels.com/photos/32016048/pexels-photo-32016048.jpeg"
                alt="Dấu ấn danh nhân"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                2 ngày 1 đêm
              </div>
            </div>
            <CardHeader>
              <CardTitle>Dấu ấn danh nhân</CardTitle>
              <CardDescription>
                Hành trình theo ch��n những danh nhân lịch sử xứ Nghệ
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 1: Vinh - Nam Đàn
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Tham quan Khu di tích Kim Liên</li>
                    <li>Viếng mộ bà Hoàng Thị Loan</li>
                    <li>Tham quan Di tích lưu niệm cụ Phan Bội Châu</li>
                    <li>Nghỉ đêm tại Nam Đàn hoặc Vinh</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">
                    Ngày 2: Vinh và vùng phụ cận
                  </h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                    <li>Tham quan đền thờ Hoàng đế Quang Trung</li>
                    <li>Tham quan di tích liên quan đến Mai Hắc Đế</li>
                    <li>Tham quan Bảo tàng Nghệ An</li>
                    <li>Kết thúc hành trình</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                asChild
                className="w-full bg-green-700 hover:bg-green-800"
              >
                <Link href="/booking?tourId=dau-an-danh-nhan">
                  Đặt tour ngay - 2.590.000đ
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/destinations/dau-an-danh-nhan">
                  Chi Tiết Hành Trình
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Travel tips */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Lời Khuyên Cho Chuyến Đi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">
                Thời điểm lý tưởng
              </h3>
              <p className="text-sm text-muted-foreground">
                Thời điểm lý tưởng nhất để du lịch Nghệ An là từ tháng 9 đến
                tháng 4 năm sau. Trong khoảng thời gian này, thời tiết mát mẻ,
                ít mưa, thuận lợi cho việc tham quan các điểm di tích.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">
                Phương tiện di chuyển
              </h3>
              <p className="text-sm text-muted-foreground">
                Để di chuyển giữa các điểm tham quan, bạn có thể thuê xe máy, ô
                tô hoặc sử dụng dịch vụ taxi. Nhiều địa điểm nằm cách xa nhau,
                nên việc có phương tiện di chuyển riêng sẽ giúp bạn chủ động hơn
                trong hành trình.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">Ẩm thực</h3>
              <p className="text-sm text-muted-foreground">
                Đừng quên thưởng thức các món ăn đặc sản của Nghệ An như cháo
                lươn, bánh mướt, gỏi cá trích, kẹo Cu Đơ... Những món ăn này
                không chỉ ngon miệng mà còn mang đậm bản sắc văn hóa ẩm thực xứ
                Nghệ.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">Lưu trú</h3>
              <p className="text-sm text-muted-foreground">
                Thành phố Vinh có nhiều khách sạn từ 2-5 sao, đáp ứng nhu cầu đa
                dạng của du khách. Tại các huyện, bạn có thể tìm thấy các nhà
                nghỉ, homestay với giá cả phải chăng và dịch vụ thân thiện.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">
                Trang phục
              </h3>
              <p className="text-sm text-muted-foreground">
                Khi tham quan các đền, chùa, di tích lịch sử, bạn nên mặc trang
                phục lịch sự, kín đáo để thể hiện sự tôn trọng. Nên mang theo
                mũ, kem chống nắng và áo khoác nhẹ để thích ứng với thời tiết
                thay đổi.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">
                Hướng dẫn viên
              </h3>
              <p className="text-sm text-muted-foreground">
                Để hiểu sâu hơn về giá trị lịch sử, văn hóa của các di tích, bạn
                nên thuê hướng dẫn viên địa phương. Họ sẽ giúp bạn khám phá
                những câu chuyện thú vị mà sách vở không đề cập đến.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
