import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConDuongHuyenThoaiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
          alt="Con đường huyền thoại"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Con Đường Huyền Thoại</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Hành trình khám phá các di tích cách mạng và đường Hồ Chí Minh tại Nghệ An
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
                    <strong>Con đường huyền thoại</strong> là tour du lịch đặc biệt, đưa du khách khám phá các di tích cách mạng nổi tiếng và tuyến đường Hồ Chí Minh huyền thoại tại tỉnh Nghệ An - nơi ghi dấu nhiều chiến công hiển hách trong lịch sử đấu tranh giải phóng dân tộc của nhân dân Việt Nam.
                  </p>
                  <p>
                    Chuyến hành trình kéo dài 2 ngày 1 đêm, dẫn du khách đến các địa điểm lịch sử quan trọng trong thời kỳ kháng chiến chống Mỹ như Truông Bồn - nơi hy sinh anh dũng của 13 chiến sĩ thanh niên xung phong, Cột mốc số 0 đường Hồ Chí Minh, Ngã ba Đồng Lộc và nhiều di tích cách mạng khác tại Nghệ An.
                  </p>
                  <p>
                    Tour này không chỉ là hành trình tìm hiểu lịch sử, mà còn là dịp để mỗi người con đất Việt bày tỏ lòng biết ơn sâu sắc đối với các thế hệ cha anh đã hy sinh vì độc lập, tự do của Tổ quốc, đồng thời cảm nhận sâu sắc hơn về tinh thần cách mạng, lòng yêu nước và ý chí quật cường của dân tộc Việt Nam.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                        alt="Truông Bồn"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3334599210.jpeg"
                        alt="Cột mốc số 0 đường Hồ Chí Minh"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Thời gian:</strong> 2 ngày 1 đêm</li>
                    <li><strong>Khởi hành:</strong> Thứ 7 hàng tuần</li>
                    <li><strong>Điểm đến tiêu biểu:</strong> Truông Bồn, Cột mốc số 0 đường Hồ Chí Minh, Ngã ba Đồng Lộc, Bảo tàng Xô Viết Nghệ Tĩnh...</li>
                    <li><strong>Phương tiện di chuyển:</strong> Xe ô tô du lịch</li>
                    <li><strong>Chỗ ở:</strong> Khách sạn 3-4 sao tại thành phố Vinh</li>
                    <li><strong>Phù hợp cho:</strong> Mọi lứa tuổi, đặc biệt là các đoàn học sinh, sinh viên, cán bộ công nhân viên đi về nguồn</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch trình Con đường huyền thoại</h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 1: VINH - TRUÔNG BỒN - CỘT MỐC SỐ 0</h3>
                    <ul>
                      <li><strong>07:30 - 08:00:</strong> Đón khách tại điểm hẹn ở thành phố Vinh.</li>
                      <li><strong>08:00 - 09:00:</strong> Di chuyển đến Khu di tích Truông Bồn, huyện Đô Lương.</li>
                      <li><strong>09:00 - 11:00:</strong> Tham quan Khu di tích Truông Bồn:
                        <ul>
                          <li>Dâng hương tại Đài tưởng niệm 13 liệt sĩ thanh niên xung phong</li>
                          <li>Tìm hiểu về sự hy sinh anh dũng của các chiến sĩ trong chiến tranh chống Mỹ</li>
                          <li>Tham quan Bảo tàng Truông Bồn</li>
                          <li>Nghe thuyết minh về vai trò của tuyến đường Hồ Chí Minh trong thời kỳ kháng chiến</li>
                        </ul>
                      </li>
                      <li><strong>11:00 - 12:00:</strong> Di chuyển đến huyện Tân Kỳ.</li>
                      <li><strong>12:00 - 13:30:</strong> Ăn trưa tại nhà hàng địa phương, thưởng thức các món ăn đặc sản xứ Nghệ.</li>
                      <li><strong>13:30 - 15:30:</strong> Tham quan Cột mốc số 0 đường Hồ Chí Minh:
                        <ul>
                          <li>Tìm hiểu về lịch sử xây dựng và vai trò của đường Hồ Chí Minh</li>
                          <li>Khám phá các hiện vật và tài liệu lịch sử về con đường huyền thoại</li>
                          <li>Chụp ảnh lưu niệm tại Cột mốc số 0</li>
                        </ul>
                      </li>
                      <li><strong>15:30 - 17:00:</strong> Di chuyển đến huyện Hương Khê, Hà Tĩnh để thăm Ngã ba Đồng Lộc.</li>
                      <li><strong>17:00 - 18:00:</strong> Tham quan Khu di tích Ngã ba Đồng Lộc, tưởng niệm 10 nữ thanh niên xung phong đã hy sinh tại đây.</li>
                      <li><strong>18:00 - 19:30:</strong> Di chuyển về thành phố Vinh, nhận phòng khách sạn.</li>
                      <li><strong>19:30 - 21:30:</strong> Ăn tối tại nhà hàng, thưởng thức văn nghệ chủ đề "Con đường Hồ Chí Minh huyền thoại".</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="mt-0">NGÀY 2: VINH - BẢO TÀNG XÔ VIẾT NGHỆ TĨNH - DI TÍCH XÊNH XÔ</h3>
                    <ul>
                      <li><strong>07:00 - 08:00:</strong> Ăn sáng tại khách sạn, làm thủ tục trả phòng.</li>
                      <li><strong>08:00 - 10:00:</strong> Tham quan Bảo tàng Xô Viết Nghệ Tĩnh:
                        <ul>
                          <li>Tìm hiểu về phong trào Xô Viết Nghệ Tĩnh 1930-1931</li>
                          <li>Xem các hiện vật, tài liệu lịch sử về phong trào cách mạng tại Nghệ An</li>
                          <li>Tham quan các phòng trưng bày về tinh thần đấu tranh cách mạng</li>
                        </ul>
                      </li>
                      <li><strong>10:00 - 11:30:</strong> Tham quan Quảng trường Hồ Chí Minh và các công trình kiến trúc nổi bật của thành phố Vinh.</li>
                      <li><strong>11:30 - 13:00:</strong> Ăn trưa tại nhà hàng.</li>
                      <li><strong>13:00 - 15:00:</strong> Di chuyển và tham quan Di tích lịch sử Xênh Xô - nơi thành lập Chi bộ Đảng đầu tiên của tỉnh Nghệ An và Hà Tĩnh:
                        <ul>
                          <li>Tìm hiểu về quá trình thành lập và hoạt động của Chi bộ Đảng</li>
                          <li>Dâng hương tưởng niệm các chiến sĩ cách mạng</li>
                        </ul>
                      </li>
                      <li><strong>15:00 - 16:00:</strong> Mua sắm đặc sản, quà lưu niệm.</li>
                      <li><strong>16:00:</strong> Tiễn khách, kết thúc chương trình.</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm đến nổi bật trong Con đường huyền thoại</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                          alt="Truông Bồn"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Khu di tích Truông Bồn</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia đặc biệt</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Truông Bồn là nơi tưởng nhớ sự hy sinh anh dũng của 13 chiến sĩ thanh niên xung phong và 49 cán bộ, chiến sĩ trong chiến tranh chống Mỹ. Đài tưởng niệm và bảo tàng tại đây lưu giữ nhiều tài liệu, hiện vật quý giá.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/truong-bon">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3334599210.jpeg"
                          alt="Cột mốc số 0 đường Hồ Chí Minh"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Cột mốc số 0 đường Hồ Chí Minh</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Cột mốc số 0 nằm tại xã Tân Kỳ đánh dấu điểm khởi đầu của đường mòn Hồ Chí Minh huyền thoại - con đường huyết mạch trong kháng chiến chống Mỹ, góp phần quyết định vào thắng lợi của cuộc kháng chiến.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/cot-moc-so-0">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3418965923.jpeg"
                          alt="Ngã ba Đồng Lộc"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Ngã ba Đồng Lộc</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia đặc biệt</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Ngã ba Đồng Lộc thuộc huyện Can Lộc, tỉnh Hà Tĩnh, là nơi 10 nữ thanh niên xung phong đã anh dũng hy sinh vào ngày 24/7/1968. Đây là điểm giao thông chiến lược trên tuyến đường Hồ Chí Minh trong thời kỳ chống Mỹ.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/nga-ba-dong-loc">Chi tiết</Link>
                        </Button>
                      </CardFooter>
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
                          Bảo tàng Xô Viết Nghệ Tĩnh tại thành phố Vinh là nơi lưu giữ và trưng bày các hiện vật, tài liệu về phong trào Xô Viết Nghệ Tĩnh 1930-1931 - một cao trào cách mạng quan trọng trong lịch sử dân tộc.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/bao-tang-xo-viet-nghe-tinh">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
                          alt="Di tích Xênh Xô"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Di tích lịch sử Xênh Xô</CardTitle>
                        <CardDescription>Di tích lịch sử cấp tỉnh</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Di tích Xênh Xô nằm tại huyện Nam Đàn, là nơi thành lập Chi bộ Đảng đầu tiên của tỉnh Nghệ An và Hà Tĩnh vào năm 1929, đánh dấu bước phát triển quan trọng của phong trào cách mạng trong khu vực.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/di-tich-xenh-xo">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3498641925.jpeg"
                          alt="Quảng trường Hồ Chí Minh"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Quảng trường Hồ Chí Minh</CardTitle>
                        <CardDescription>Công trình văn hóa trung tâm</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Quảng trường Hồ Chí Minh tại thành phố Vinh là quảng trường lớn nhất miền Trung, với tượng đài Chủ tịch Hồ Chí Minh uy nghi. Đây là nơi diễn ra nhiều sự kiện chính trị, văn hóa quan trọng của tỉnh Nghệ An.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/quang-truong-ho-chi-minh">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hình ảnh Con đường huyền thoại</h2>
                  <p>
                    Những hình ảnh đẹp từ các điểm đến trong hành trình khám phá con đường Hồ Chí Minh huyền thoại và các di tích cách mạng tại Nghệ An.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                        alt="Khu di tích Truông Bồn"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3334599210.jpeg"
                        alt="Cột mốc số 0 đường Hồ Chí Minh"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3418965923.jpeg"
                        alt="Ngã ba Đồng Lộc"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3457842884.jpeg"
                        alt="Di tích Xênh Xô"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3532187536.jpeg"
                        alt="Đường Hồ Chí Minh huyền thoại"
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
                        src="https://ext.same-assets.com/3334769225/3498641925.jpeg"
                        alt="Quảng trường Hồ Chí Minh"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3567321487.jpeg"
                        alt="Lễ dâng hương tại đài tưởng niệm"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3602347248.jpeg"
                        alt="Đoàn du khách tham quan"
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
                  <p className="text-sm text-muted-foreground">1.990.000 VNĐ/người</p>
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

            {/* Booking information */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đặt tour</h3>
              </div>
              <div className="p-6 space-y-4">
                <Button className="w-full bg-green-700 hover:bg-green-800">Đặt tour ngay</Button>
                <p className="text-sm text-muted-foreground text-center">
                  Hoặc liên hệ với chúng tôi qua hotline
                </p>
                <p className="text-lg font-semibold text-center">0238 1234 567</p>
              </div>
            </div>

            {/* Reviews */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đánh giá từ khách hàng</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Trần Văn Nam</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Tour rất ý nghĩa, giúp tôi hiểu rõ hơn về lịch sử đấu tranh của dân tộc. Các di tích được bảo tồn tốt, hướng dẫn viên nhiệt tình, giàu kiến thức lịch sử."
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Nguyễn Thị Minh</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★☆</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Chuyến đi đáng giá, đặc biệt cho các bạn trẻ để hiểu rõ hơn về lịch sử đấu tranh. Tôi chỉ tiếc là thời gian tại mỗi điểm hơi ngắn, không đủ để tìm hiểu sâu."
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Lê Hoàng Anh</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Đây là lần thứ hai tôi tham gia tour này và vẫn thấy xúc động. Việc được đứng tại những nơi ghi dấu lịch sử hào hùng của dân tộc là một trải nghiệm khó quên."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
