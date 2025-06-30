import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DauAnDanhNhanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg"
          alt="Dấu ấn danh nhân"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dấu Ấn Danh Nhân</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Hành trình theo chân những danh nhân lịch sử xứ Nghệ
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
            <span className="text-foreground">Dấu ấn danh nhân</span>
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
                  <h2>Giới thiệu Dấu ấn danh nhân</h2>
                  <p>
                    <strong>Dấu ấn danh nhân</strong> là hành trình khám phá những di tích gắn liền với cuộc đời và sự nghiệp của các danh nhân lịch sử nổi tiếng của xứ Nghệ.
                  </p>
                  <p>
                    Chuyến hành trình 3 ngày 2 đêm sẽ đưa du khách đến những nơi gắn bó với cuộc đời của Chủ tịch Hồ Chí Minh, cụ Phan Bội Châu, Hoàng đế Quang Trung và Mai Hắc Đế.
                  </p>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Thời gian:</strong> 3 ngày 2 đêm</li>
                    <li><strong>Khởi hành:</strong> Thứ 2 hàng tuần</li>
                    <li><strong>Điểm đến tiêu biểu:</strong> Khu di tích Kim Liên, Di tích cụ Phan Bội Châu, Đền thờ Hoàng đế Quang Trung</li>
                    <li><strong>Phương tiện di chuyển:</strong> Xe ô tô du lịch</li>
                    <li><strong>Chỗ ở:</strong> Khách sạn 3-4 sao</li>
                    <li><strong>Phù hợp cho:</strong> Những ai muốn tìm hiểu về các danh nhân lịch sử</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch trình Dấu ấn danh nhân</h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 1: VINH - NAM ĐÀN</h3>
                    <ul>
                      <li><strong>08:00:</strong> Đón khách tại thành phố Vinh</li>
                      <li><strong>09:00:</strong> Tham quan Khu di tích Kim Liên</li>
                      <li><strong>11:00:</strong> Viếng mộ bà Hoàng Thị Loan</li>
                      <li><strong>13:00:</strong> Ăn trưa</li>
                      <li><strong>14:30:</strong> Tham quan Di tích lưu niệm cụ Phan Bội Châu</li>
                      <li><strong>16:30:</strong> Check-in khách sạn</li>
                      <li><strong>19:00:</strong> Ăn tối</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 2: VINH VÀ VÙNG PHỤ CẬN</h3>
                    <ul>
                      <li><strong>08:00:</strong> Ăn sáng</li>
                      <li><strong>09:00:</strong> Tham quan đền thờ Hoàng đế Quang Trung</li>
                      <li><strong>11:00:</strong> Tham quan di tích liên quan đến Mai Hắc Đế</li>
                      <li><strong>13:00:</strong> Ăn trưa</li>
                      <li><strong>14:30:</strong> Tham quan Bảo tàng Nghệ An</li>
                      <li><strong>16:00:</strong> Tự do tham quan thành phố Vinh</li>
                      <li><strong>19:00:</strong> Ăn tối</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="mt-0">NGÀY 3: HOÀN THÀNH HÀNH TRÌNH</h3>
                    <ul>
                      <li><strong>08:00:</strong> Ăn sáng, làm thủ tục trả phòng</li>
                      <li><strong>09:00:</strong> Tham quan các di tích còn lại</li>
                      <li><strong>11:00:</strong> Mua sắm đặc sản</li>
                      <li><strong>12:00:</strong> Ăn trưa</li>
                      <li><strong>14:00:</strong> Kết thúc hành trình</li>
                    </ul>
                  </div>
                  <TourReviews />
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm đến gắn liền với danh nhân</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                          alt="Khu di tích Kim Liên"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Khu di tích Kim Liên</CardTitle>
                        <CardDescription>Quê hương Chủ tịch Hồ Chí Minh</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Nơi sinh ra và lớn lên của Chủ tịch Hồ Chí Minh, bao gồm làng Sen và làng Hoàng Trù với nhiều di tích quý giá.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg"
                          alt="Di tích cụ Phan Bội Châu"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Di tích cụ Phan Bội Châu</CardTitle>
                        <CardDescription>Nhà yêu nước vĩ đại</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Di tích lưu niệm cụ Phan Bội Châu - nhà yêu nước, nhà cách mạng tiền bối của dân tộc Việt Nam.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hình ảnh Dấu ấn danh nhân</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Khu di tích Kim Liên"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3359488301.jpeg"
                        alt="Di tích cụ Phan Bội Châu"
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
                  <p className="text-sm text-muted-foreground">3 ngày 2 đêm</p>
                </div>
                <div>
                  <h4 className="font-medium">Khởi hành</h4>
                  <p className="text-sm text-muted-foreground">Thứ 2 hàng tuần</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá tour</h4>
                  <p className="text-sm text-muted-foreground">2.590.000 VNĐ/người</p>
                </div>
                <div>
                  <h4 className="font-medium">Đã bao gồm</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe du lịch đời mới</li>
                    <li>Khách sạn 3-4 sao (2 người/phòng)</li>
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
                  <Link href="/booking?tourId=dau-an-danh-nhan">Đặt tour ngay</Link>
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