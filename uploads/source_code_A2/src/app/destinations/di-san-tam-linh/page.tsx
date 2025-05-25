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
            Hành trình khám phá các đền, chùa, di tích tâm linh nổi tiếng tại Nghệ An
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
                    <strong>Di sản văn hóa tâm linh</strong> là tour du lịch đặc biệt, đưa du khách khám phá những ngôi đền, chùa, miếu mạo và di tích tâm linh nổi tiếng tại Nghệ An - vùng đất giàu truyền thống văn hóa và tín ngưỡng dân gian.
                  </p>
                  <p>
                    Chuyến hành trình kéo dài 4 ngày 3 đêm, dẫn du khách đến các địa điểm tâm linh quan trọng như Đền Cuông thờ An Dương Vương, Đền Quả Sơn thờ Mai Hắc Đế, Đền thờ Hoàng Mười và nhiều công trình tâm linh khác tại Nghệ An.
                  </p>
                  <p>
                    Tour này không chỉ là chuyến hành hương tâm linh thuần túy mà còn là dịp để du khách tìm hiểu về văn hóa truyền thống, tín ngưỡng dân gian và sự kết hợp hài hòa giữa văn hóa Việt Nam với các tôn giáo, tín ngưỡng khác nhau tại vùng đất xứ Nghệ.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3110326546.jpeg"
                        alt="Đền Cuông"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3151232487.jpeg"
                        alt="Đền Quả Sơn"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Thời gian:</strong> 4 ngày 3 đêm</li>
                    <li><strong>Khởi hành:</strong> Thứ 5 hàng tuần</li>
                    <li><strong>Điểm đến tiêu biểu:</strong> Đền Cuông, Đền Quả Sơn, Đền thờ Hoàng Mười, Chùa Đại Tuệ, Đền Cờn...</li>
                    <li><strong>Phương tiện di chuyển:</strong> Xe ô tô du lịch</li>
                    <li><strong>Chỗ ở:</strong> Khách sạn 3-4 sao tại thành phố Vinh và các khu nghỉ dưỡng gần các điểm đến</li>
                    <li><strong>Phù hợp cho:</strong> Mọi lứa tuổi, đặc biệt là những người quan tâm đến văn hóa tâm linh, tín ngưỡng dân gian</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch trình Di sản văn hóa tâm linh</h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 1: VINH - ĐỀN QUANG TRUNG - CHÙA ĐẠI TUỆ</h3>
                    <ul>
                      <li><strong>07:30 - 08:00:</strong> Đón khách tại điểm hẹn ở thành phố Vinh.</li>
                      <li><strong>08:00 - 09:30:</strong> Di chuyển đến Đền thờ vua Quang Trung tại huyện Hưng Nguyên.</li>
                      <li><strong>09:30 - 11:00:</strong> Tham quan Đền thờ vua Quang Trung:
                        <ul>
                          <li>Dâng hương tại đền chính</li>
                          <li>Tìm hiểu về cuộc đời và sự nghiệp của vua Quang Trung - Nguyễn Huệ</li>
                          <li>Chiêm ngưỡng kiến trúc độc đáo của đền</li>
                        </ul>
                      </li>
                      <li><strong>11:00 - 12:00:</strong> Di chuyển đến thị xã Cửa Lò.</li>
                      <li><strong>12:00 - 13:30:</strong> Ăn trưa tại nhà hàng địa phương, thưởng thức hải sản Cửa Lò.</li>
                      <li><strong>13:30 - 15:30:</strong> Tham quan Chùa Đại Tuệ:
                        <ul>
                          <li>Tìm hiểu về lịch sử và kiến trúc của ngôi chùa cổ</li>
                          <li>Chiêm bái tượng Phật và các công trình trong khuôn viên chùa</li>
                          <li>Nghe thuyết minh về Phật giáo tại Nghệ An</li>
                        </ul>
                      </li>
                      <li><strong>15:30 - 17:00:</strong> Thưởng ngoạn cảnh đẹp biển Cửa Lò, tắm biển (tùy thời tiết).</li>
                      <li><strong>17:00 - 18:00:</strong> Nhận phòng khách sạn tại Cửa Lò.</li>
                      <li><strong>18:30 - 20:30:</strong> Ăn tối tại nhà hàng, thưởng thức đặc sản hải sản Cửa Lò.</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 2: CỬA LÒ - ĐỀN CUÔNG - ĐỀN CỜN</h3>
                    <ul>
                      <li><strong>07:00 - 08:00:</strong> Ăn sáng tại khách sạn.</li>
                      <li><strong>08:00 - 09:30:</strong> Di chuyển đến Đền Cuông, huyện Diễn Châu.</li>
                      <li><strong>09:30 - 11:30:</strong> Tham quan Đền Cuông:
                        <ul>
                          <li>Dâng hương tại đền chính thờ An Dương Vương</li>
                          <li>Tìm hiểu về lịch sử, kiến trúc và giá trị văn hóa của đền</li>
                          <li>Nghe thuyết minh về các nghi lễ và lễ hội truyền thống tại đền</li>
                        </ul>
                      </li>
                      <li><strong>11:30 - 13:00:</strong> Ăn trưa tại nhà hàng địa phương.</li>
                      <li><strong>13:00 - 14:30:</strong> Di chuyển đến Đền Cờn, huyện Quỳnh Lưu.</li>
                      <li><strong>14:30 - 16:30:</strong> Tham quan Đền Cờn:
                        <ul>
                          <li>Dâng hương tại đền chính</li>
                          <li>Tìm hiểu về sự tích Mẫu Cờn và tín ngưỡng thờ Mẫu tại Nghệ An</li>
                          <li>Chiêm ngưỡng kiến trúc độc đáo và các hiện vật quý tại đền</li>
                        </ul>
                      </li>
                      <li><strong>16:30 - 18:00:</strong> Di chuyển về thành phố Vinh, nhận phòng khách sạn.</li>
                      <li><strong>18:30 - 20:30:</strong> Ăn tối tại nhà hàng, thưởng thức ẩm thực Nghệ An.</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 3: VINH - ĐỀN QUẢ SƠN - ĐỀN HOÀNG MƯỜI</h3>
                    <ul>
                      <li><strong>07:00 - 08:00:</strong> Ăn sáng tại khách sạn.</li>
                      <li><strong>08:00 - 09:30:</strong> Di chuyển đến Đền Quả Sơn, huyện Quỳnh Lưu.</li>
                      <li><strong>09:30 - 11:30:</strong> Tham quan Đền Quả Sơn:
                        <ul>
                          <li>Dâng hương tại đền chính thờ Mai Hắc Đế</li>
                          <li>Tìm hiểu về lịch sử cuộc khởi nghĩa Mai Hắc Đế</li>
                          <li>Chiêm ngưỡng kiến trúc và các hiện vật lịch sử tại đền</li>
                        </ul>
                      </li>
                      <li><strong>11:30 - 13:00:</strong> Ăn trưa tại nhà hàng địa phương.</li>
                      <li><strong>13:00 - 14:30:</strong> Di chuyển đến Đền thờ Hoàng Mười, huyện Quỳ Hợp.</li>
                      <li><strong>14:30 - 16:30:</strong> Tham quan Đền thờ Hoàng Mười:
                        <ul>
                          <li>Dâng hương tại đền chính</li>
                          <li>Tìm hiểu về sự tích và tín ngưỡng thờ Hoàng Mười</li>
                          <li>Tham quan khu di tích và cảnh quan thiên nhiên xung quanh</li>
                        </ul>
                      </li>
                      <li><strong>16:30 - 18:00:</strong> Di chuyển về thành phố Vinh.</li>
                      <li><strong>18:30 - 20:30:</strong> Ăn tối tại nhà hàng, thưởng thức văn nghệ dân gian xứ Nghệ.</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="mt-0">NGÀY 4: VINH - ĐỀN CHUNG SƠN - ĐỀN CHA</h3>
                    <ul>
                      <li><strong>07:00 - 08:00:</strong> Ăn sáng tại khách sạn, làm thủ tục trả phòng.</li>
                      <li><strong>08:00 - 09:00:</strong> Di chuyển đến Đền Chung Sơn, huyện Nam Đàn.</li>
                      <li><strong>09:00 - 10:30:</strong> Tham quan Đền Chung Sơn:
                        <ul>
                          <li>Dâng hương tại đền chính</li>
                          <li>Tìm hiểu về lịch sử và ý nghĩa của đền</li>
                          <li>Chiêm ngưỡng kiến trúc và cảnh quan núi Chung</li>
                        </ul>
                      </li>
                      <li><strong>10:30 - 11:30:</strong> Di chuyển đến Đền Cha, huyện Nam Đàn.</li>
                      <li><strong>11:30 - 13:00:</strong> Ăn trưa tại nhà hàng địa phương.</li>
                      <li><strong>13:00 - 15:00:</strong> Tham quan Đền Cha:
                        <ul>
                          <li>Dâng hương tại đền chính</li>
                          <li>Tìm hiểu về lịch sử và ý nghĩa văn hóa của đền</li>
                          <li>Chiêm ngưỡng kiến trúc và các hiện vật tại đền</li>
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
                  <h2>Các điểm đến nổi bật trong Di sản văn hóa tâm linh</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                          Đền Cuông tại huyện Diễn Châu là di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương và các vị công thần. Đền có kiến trúc độc đáo với nhiều hiện vật quý giá và lễ hội truyền thống đặc sắc.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/den-cuong">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3151232487.jpeg"
                          alt="Đền Quả Sơn"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Đền Quả Sơn</CardTitle>
                        <CardDescription>Di tích lịch sử văn hóa cấp quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Đền Quả Sơn tại huyện Quỳnh Lưu thờ Mai Hắc Đế - vị vua nông dân đầu tiên trong lịch sử Việt Nam. Đền có kiến trúc truyền thống đẹp, tọa lạc trên một quả đồi với cảnh quan thiên nhiên hùng vĩ.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/den-qua-son">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3682431958.jpeg"
                          alt="Đền Cờn"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Đền Cờn</CardTitle>
                        <CardDescription>Di tích lịch sử văn hóa cấp quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Đền Cờn là di tích thờ Mẫu Cờn - một vị nữ thần trong tín ngưỡng dân gian Việt Nam. Nằm tại xã Quỳnh Nghĩa, huyện Quỳnh Lưu, đền nổi tiếng với lễ hội hàng năm thu hút hàng vạn du khách thập phương.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/den-con">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3719824639.jpeg"
                          alt="Đền thờ Hoàng Mười"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Đền thờ Hoàng Mười</CardTitle>
                        <CardDescription>Di tích tín ngưỡng nổi tiếng</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Đền thờ Hoàng Mười tại huyện Quỳ Hợp là nơi thờ phụng nhân vật linh thiêng trong tín ngưỡng dân gian xứ Nghệ. Đền nằm giữa khung cảnh thiên nhiên hùng vĩ và là điểm đến tâm linh quan trọng.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/den-hoang-muoi">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3754921340.jpeg"
                          alt="Chùa Đại Tuệ"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Chùa Đại Tuệ</CardTitle>
                        <CardDescription>Di tích Phật giáo cổ</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Chùa Đại Tuệ là một trong những ngôi chùa cổ nhất tại Nghệ An, được xây dựng từ thời Lê. Chùa có kiến trúc Phật giáo truyền thống với nhiều tượng Phật và đồ thờ cúng quý giá.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/chua-dai-tue">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3792428671.jpeg"
                          alt="Đền Chung Sơn"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Đền Chung Sơn</CardTitle>
                        <CardDescription>Di tích lịch sử văn hóa</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Đền Chung Sơn nằm trên núi Chung, huyện Nam Đàn, là nơi thờ các anh hùng dân tộc và các nhân vật lịch sử. Đền có cảnh quan đẹp, tạo nên không gian tâm linh thiêng liêng.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/den-chung-son">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hình ảnh Di sản văn hóa tâm linh</h2>
                  <p>
                    Những hình ảnh đẹp từ các điểm đến trong hành trình khám phá di sản văn hóa tâm linh tại Nghệ An.
                  </p>

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
                        src="https://ext.same-assets.com/3334769225/3151232487.jpeg"
                        alt="Đền Quả Sơn"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3682431958.jpeg"
                        alt="Đền Cờn"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3719824639.jpeg"
                        alt="Đền thờ Hoàng Mười"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3754921340.jpeg"
                        alt="Chùa Đại Tuệ"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3792428671.jpeg"
                        alt="Đền Chung Sơn"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3827419462.jpeg"
                        alt="Lễ hội đền Cờn"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3863174653.jpeg"
                        alt="Nghi lễ tâm linh"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3899423434.jpeg"
                        alt="Cảnh quan thiên nhiên"
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
                  <p className="text-sm text-muted-foreground">Thứ 5 hàng tuần</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá tour</h4>
                  <p className="text-sm text-muted-foreground">3.590.000 VNĐ/người</p>
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
                    <h4 className="font-medium">Phạm Thị Hương</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Tour rất ý nghĩa, giúp tôi hiểu rõ hơn về văn hóa tâm linh xứ Nghệ. Các đền, chùa đều rất đẹp và linh thiêng. Hướng dẫn viên am hiểu sâu sắc về tín ngưỡng dân gian."
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Nguyễn Văn Tuấn</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★☆</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Chuyến đi mang lại nhiều trải nghiệm tâm linh thú vị. Ấn tượng nhất là lễ hội ở Đền Cờn. Chỉ tiếc thời gian hơi dài, có thể rút ngắn xuống 3 ngày là vừa."
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Trần Minh Đức</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Đây là lần đầu tiên tôi tham gia tour tâm linh và rất hài lòng. Cảm giác bình yên và thanh tịnh khi đến các đền chùa. Đồ ăn ngon, khách sạn tốt, nhân viên phục vụ chu đáo."
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
