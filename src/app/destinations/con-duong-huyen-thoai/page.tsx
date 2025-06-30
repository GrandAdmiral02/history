import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConDuongHuyenThoaiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://statics.vinpearl.com/du-lich-quy-chau-anh-thumb_1633531971.jpg"
          alt="Con đường huyền thoại"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Con Đường Huyền Thoại</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Hành trình theo dấu chân những người anh hùng trên đường mòn Hồ Chí Minh
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
            <Link href="/destinations" className="hover:text-foreground">
              Hành trình
            </Link>
            <span>/</span>
            <span className="text-foreground">Con đường huyền thoại</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                <TabsTrigger value="itinerary">Lịch trình</TabsTrigger>
                <TabsTrigger value="attractions">Điểm đến</TabsTrigger>
                <TabsTrigger value="gallery">Hình ảnh</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Con đường huyền thoại</h2>
                  <p>
                    <strong>Con đường huyền thoại</strong> là hành trình khám phá những địa danh gắn liền với đường mòn Hồ Chí Minh và các chiến sĩ anh hùng đã hy sinh vì độc lập, tự do của Tổ quốc.
                  </p>
                  <p>
                    Chuyến hành trình 2 ngày 1 đêm sẽ đưa du khách đến với Cột mốc số 0 - điểm khởi đầu của đường mòn Hồ Chí Minh huyền thoại, và Truông Bồn - nơi ghi dấu sự hy sinh anh dũng của các chiến sĩ thanh niên xung phong.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://statics.vinpearl.com/du-lich-quy-chau-anh-thumb_1633531971.jpg"
                        alt="Cột mốc số 0"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3290883099.jpeg"
                        alt="Bảo tàng Xô Viết Nghệ Tĩnh"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Thời gian:</strong> 2 ngày 1 đêm</li>
                    <li><strong>Khởi hành:</strong> Thứ 7 hàng tuần</li>
                    <li><strong>Điểm đến tiêu biểu:</strong> Cột mốc số 0, Truông Bồn, Bảo tàng Xô Viết Nghệ Tĩnh</li>
                    <li><strong>Phương tiện di chuyển:</strong> Xe ô tô du lịch</li>
                    <li><strong>Chỗ ở:</strong> Khách sạn 3 sao tại thành phố Vinh</li>
                    <li><strong>Phù hợp cho:</strong> Những ai muốn tìm hiểu về lịch sử đấu tranh của dân tộc</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch trình Con đường huyền thoại</h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 1: VINH - CỘT MỐC SỐ 0</h3>
                    <ul>
                      <li><strong>07:30:</strong> Đón khách tại điểm hẹn ở thành phố Vinh</li>
                      <li><strong>08:00:</strong> Tham quan Bảo tàng Xô Viết Nghệ Tĩnh</li>
                      <li><strong>10:00:</strong> Di chuyển đến huyện Tân Kỳ</li>
                      <li><strong>12:00:</strong> Ăn trưa tại nhà hàng địa phương</li>
                      <li><strong>13:30:</strong> Tham quan Cột mốc số 0 - Đường Hồ Chí Minh</li>
                      <li><strong>15:00:</strong> Tìm hiểu về đường mòn Hồ Chí Minh huyền thoại</li>
                      <li><strong>17:00:</strong> Trở về Vinh, nhận phòng khách sạn</li>
                      <li><strong>19:00:</strong> Ăn tối tại nhà hàng</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="mt-0">NGÀY 2: TRUÔNG BỒN - VINH</h3>
                    <ul>
                      <li><strong>07:00:</strong> Ăn sáng tại khách sạn</li>
                      <li><strong>08:00:</strong> Di chuyển đến Khu di tích Truông Bồn</li>
                      <li><strong>09:30:</strong> Dâng hương tại Đài tưởng niệm</li>
                      <li><strong>10:30:</strong> Tham quan Bảo tàng Truông Bồn</li>
                      <li><strong>12:00:</strong> Ăn trưa tại nhà hàng địa phương</li>
                      <li><strong>13:30:</strong> Tham quan đền thờ Hoàng đế Quang Trung</li>
                      <li><strong>15:00:</strong> Mua sắm đặc sản</li>
                      <li><strong>16:00:</strong> Kết thúc chương trình</li>
                    </ul>
                  </div>
                  <TourReviews />
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm đến trong Con đường huyền thoại</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://statics.vinpearl.com/du-lich-quy-chau-anh-thumb_1633531971.jpg"
                          alt="Cột mốc số 0"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Cột mốc số 0</CardTitle>
                        <CardDescription>Điểm khởi đầu đường mòn Hồ Chí Minh</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Cột mốc số 0 tại xã Tân Kỳ là điểm khởi đầu của đường mòn Hồ Chí Minh huyền thoại - tuyến đường vận chuyển chiến lược quan trọng nhất trong kháng chiến chống Mỹ.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3290883099.jpeg"
                          alt="Bảo tàng Xô Viết Nghệ Tĩnh"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Bảo tàng Xô Viết Nghệ Tĩnh</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Nơi lưu giữ các hiện vật về phong trào Xô Viết Nghệ Tĩnh 1930-1931, một cao trào cách mạng quan trọng trong lịch sử dân tộc Việt Nam.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hình ảnh Con đường huyền thoại</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                        alt="Cột mốc số 0"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3290883099.jpeg"
                        alt="Bảo tàng Xô Viết Nghệ Tĩnh"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3264552788.jpeg"
                        alt="Đền thờ Hoàng đế Quang Trung"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8">
            {/* Tour information */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Thông tin tour</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Thời gian</h4>
                  <p className="text-sm text-muted-foreground">2 ngày 1 đêm</p>
                </div>
                <div>
                  <h4 className="font-medium">Khởi hành</h4>
                  <p className="text-sm text-muted-foreground">Thứ 7 hàng tuần</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá tour</h4>
                  <p className="text-sm text-muted-foreground">1.890.000 VNĐ/người</p>
                </div>
                <div>
                  <h4 className="font-medium">Đã bao gồm</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe du lịch đời mới</li>
                    <li>Khách sạn 3 sao (2 người/phòng)</li>
                    <li>Các bữa ăn theo chương trình</li>
                    <li>Vé tham quan các điểm</li>
                    <li>Hướng dẫn viên chuyên nghiệp</li>
                    <li>Bảo hiểm du lịch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đặt tour</h3>
              </div>
              <div className="p-6 space-y-4">
                <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                  <Link href="/booking?tourId=con-duong-huyen-thoai">Đặt tour ngay</Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Hoặc liên hệ với chúng tôi qua hotline
                </p>
                <p className="text-lg font-semibold text-center">0238 1234 567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}