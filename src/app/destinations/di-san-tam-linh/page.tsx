
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DiSanTamLinhPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3110326546.jpeg"
          alt="Di sản văn hóa tâm linh"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Di Sản Văn Hóa Tâm Linh</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ
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
            <span className="text-foreground">Di sản văn hóa tâm linh</span>
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
                  <h2>Giới thiệu Di sản văn hóa tâm linh</h2>
                  <p>
                    <strong>Di sản văn hóa tâm linh</strong> là hành trình khám phá những công trình kiến trúc tôn giáo độc đáo và các di tích tâm linh nổi tiếng của xứ Nghệ.
                  </p>
                  <p>
                    Chuyến hành trình 4 ngày 3 đêm sẽ đưa du khách đến các đền, chùa có giá trị lịch sử và kiến trúc đặc sắc như Đền Cuông, Đền Quả Sơn, Đền Vạn Lộc và nhiều công trình tâm linh khác.
                  </p>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Thời gian:</strong> 4 ngày 3 đêm</li>
                    <li><strong>Khởi hành:</strong> Chủ nhật hàng tuần</li>
                    <li><strong>Điểm đến tiêu biểu:</strong> Đền Cuông, Đền Quả Sơn, Đền Vạn Lộc, Chùa Đại Tuệ</li>
                    <li><strong>Phương tiện di chuyển:</strong> Xe ô tô du lịch</li>
                    <li><strong>Chỗ ở:</strong> Khách sạn 3-4 sao</li>
                    <li><strong>Phù hợp cho:</strong> Những ai muốn tìm hiểu về văn hóa tâm linh xứ Nghệ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch trình Di sản văn hóa tâm linh</h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 1: VINH - ĐỀN CUÔNG</h3>
                    <ul>
                      <li><strong>08:00:</strong> Đón khách tại thành phố Vinh</li>
                      <li><strong>09:00:</strong> Di chuyển đến huyện Diễn Châu</li>
                      <li><strong>10:30:</strong> Tham quan Đền Cuông</li>
                      <li><strong>12:00:</strong> Ăn trưa tại nhà hàng địa phương</li>
                      <li><strong>14:00:</strong> Tìm hiểu về tín ngưỡng thờ phụng An Dương Vương</li>
                      <li><strong>16:00:</strong> Check-in khách sạn</li>
                      <li><strong>19:00:</strong> Ăn tối</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 2-3: KHÁM PHÁ CÁC ĐỀN CHÙA</h3>
                    <ul>
                      <li>Tham quan Đền Quả Sơn tại Đô Lương</li>
                      <li>Tham quan Đền Vạn Lộc tại Hưng Lộc</li>
                      <li>Tham quan đền thờ Hoàng đế Quang Trung</li>
                      <li>Viếng chùa Đại Tuệ</li>
                      <li>Khám phá các di tích tâm linh khác trong khu vực</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="mt-0">NGÀY 4: CON CUÔNG</h3>
                    <ul>
                      <li><strong>08:00:</strong> Di chuyển đến huyện Con Cuông</li>
                      <li><strong>10:00:</strong> Tham quan đền Cửa Rào</li>
                      <li><strong>12:00:</strong> Ăn trưa</li>
                      <li><strong>14:00:</strong> Khám phá Vườn quốc gia Pù Mát</li>
                      <li><strong>16:00:</strong> Kết thúc hành trình</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm đến tâm linh nổi bật</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3110326546.jpeg"
                          alt="Đền Cuông"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Đền Cuông</CardTitle>
                        <CardDescription>Di tích lịch sử văn hóa cấp quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Đền Cuông thờ An Dương Vương và các vị công thần, có kiến trúc độc đáo với nhiều hiện vật quý giá và lễ hội truyền thống đặc sắc.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3264552788.jpeg"
                          alt="Đền Quả Sơn"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Đền Quả Sơn</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Đền Quả Sơn tại Đô Lương là một trong những ngôi đền linh thiêng nhất xứ Nghệ, thu hút đông đảo du khách thập phương về viếng thăm.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hình ảnh Di sản văn hóa tâm linh</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3110326546.jpeg"
                        alt="Đền Cuông"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3264552788.jpeg"
                        alt="Đền Quả Sơn"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/4032542331.jpeg"
                        alt="Cảnh đẹp Nghệ An"
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
                  <p className="text-sm text-muted-foreground">4 ngày 3 đêm</p>
                </div>
                <div>
                  <h4 className="font-medium">Khởi hành</h4>
                  <p className="text-sm text-muted-foreground">Chủ nhật hàng tuần</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá tour</h4>
                  <p className="text-sm text-muted-foreground">3.490.000 VNĐ/người</p>
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
                  <Link href="/booking?tourId=di-san-tam-linh">Đặt tour ngay</Link>
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
