import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DauAnDanhNhanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3359488301.jpeg"
          alt="Dấu ấn danh nhân"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dấu Ấn Danh Nhân</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Hành trình khám phá cuộc đời và sự nghiệp của các danh nhân lịch sử xứ Nghệ
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
                    <strong>Dấu ấn danh nhân</strong> là tour du lịch đặc biệt, đưa du khách khám phá cuộc đời và sự nghiệp của các danh nhân lịch sử xuất thân từ Nghệ An - vùng đất "địa linh nhân kiệt" đã sinh ra nhiều nhà lãnh đạo, cách mạng, học giả, và anh hùng dân tộc nổi tiếng.
                  </p>
                  <p>
                    Chuyến hành trình kéo dài 3 ngày 2 đêm, dẫn du khách đến các di tích liên quan đến những danh nhân tiêu biểu như Chủ tịch Hồ Chí Minh, nhà cách mạng Phan Bội Châu, nhà thơ Nguyễn Du, nhà bác học Nguyễn Thúc Hàm, và nhiều nhân vật lịch sử khác tại Nghệ An.
                  </p>
                  <p>
                    Tour này không chỉ là hành trình tham quan các di tích, mà còn là dịp để du khách hiểu sâu hơn về những nhân vật lịch sử đã góp phần làm nên diện mạo của lịch sử dân tộc, đồng thời cảm nhận được giá trị văn hóa, tinh thần hiếu học và truyền thống yêu nước của người dân xứ Nghệ.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Khu di tích Kim Liên"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3359488301.jpeg"
                        alt="Di tích lưu niệm cụ Phan Bội Châu"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Thời gian:</strong> 3 ngày 2 đêm</li>
                    <li><strong>Khởi hành:</strong> Thứ 4 hàng tuần</li>
                    <li><strong>Điểm đến tiêu biểu:</strong> Khu di tích Kim Liên, Di tích Phan Bội Châu, Di tích Nguyễn Du, Kỷ niệm nhà Nguyễn Thúc Hàm...</li>
                    <li><strong>Phương tiện di chuyển:</strong> Xe ô tô du lịch</li>
                    <li><strong>Chỗ ở:</strong> Khách sạn 3-4 sao tại thành phố Vinh</li>
                    <li><strong>Phù hợp cho:</strong> Mọi lứa tuổi, đặc biệt là các đoàn học sinh, sinh viên, những người yêu thích lịch sử, văn học</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch trình Dấu ấn danh nhân</h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 1: VINH - KHU DI TÍCH KIM LIÊN - MỘ BÀ HOÀNG THỊ LOAN</h3>
                    <ul>
                      <li><strong>07:30 - 08:00:</strong> Đón khách tại điểm hẹn ở thành phố Vinh.</li>
                      <li><strong>08:00 - 09:00:</strong> Di chuyển đến Khu di tích Kim Liên, huyện Nam Đàn.</li>
                      <li><strong>09:00 - 11:30:</strong> Tham quan Khu di tích Kim Liên:
                        <ul>
                          <li>Thăm làng Sen - quê nội của Bác Hồ, nơi Bác được sinh ra</li>
                          <li>Thăm nhà thờ họ Nguyễn Sinh</li>
                          <li>Thăm làng Hoàng Trù - quê ngoại của Bác, nơi Bác sống những năm tháng đầu đời</li>
                          <li>Tham quan Khu lưu niệm Chủ tịch Hồ Chí Minh</li>
                        </ul>
                      </li>
                      <li><strong>11:30 - 13:30:</strong> Ăn trưa tại nhà hàng địa phương, thưởng thức các món ăn đặc sản xứ Nghệ.</li>
                      <li><strong>13:30 - 15:30:</strong> Thăm mộ bà Hoàng Thị Loan - thân mẫu Chủ tịch Hồ Chí Minh tại núi Động Tranh, xã Nam Giang:
                        <ul>
                          <li>Dâng hương tưởng niệm bà Hoàng Thị Loan</li>
                          <li>Tìm hiểu về cuộc đời và công lao của bà trong việc nuôi dạy Bác Hồ</li>
                          <li>Chiêm ngưỡng cảnh quan thiên nhiên từ đỉnh núi Động Tranh</li>
                        </ul>
                      </li>
                      <li><strong>15:30 - 17:00:</strong> Thăm Đền Chung Sơn và cảnh quan núi Chung.</li>
                      <li><strong>17:00 - 18:00:</strong> Trở về thành phố Vinh, nhận phòng khách sạn.</li>
                      <li><strong>18:30 - 20:30:</strong> Ăn tối tại nhà hàng, thưởng thức văn nghệ dân ca Nghệ Tĩnh.</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 2: VINH - DI TÍCH PHAN BỘI CHÂU - DI TÍCH NGUYỄN DU</h3>
                    <ul>
                      <li><strong>07:00 - 08:00:</strong> Ăn sáng tại khách sạn.</li>
                      <li><strong>08:00 - 09:00:</strong> Di chuyển đến Di tích lưu niệm cụ Phan Bội Châu tại xã Đông Liễu, huyện Nam Đàn.</li>
                      <li><strong>09:00 - 11:00:</strong> Tham quan Di tích lưu niệm cụ Phan Bội Châu:
                        <ul>
                          <li>Tham quan nhà thờ và khu lưu niệm cụ Phan Bội Châu</li>
                          <li>Tìm hiểu về cuộc đời, sự nghiệp và tư tưởng của nhà cách mạng tiền bối</li>
                          <li>Xem các hiện vật, tài liệu quý về phong trào Đông Du</li>
                        </ul>
                      </li>
                      <li><strong>11:00 - 12:00:</strong> Di chuyển đến huyện Nghi Xuân, Hà Tĩnh.</li>
                      <li><strong>12:00 - 13:30:</strong> Ăn trưa tại nhà hàng địa phương.</li>
                      <li><strong>13:30 - 16:00:</strong> Tham quan Khu di tích Nguyễn Du:
                        <ul>
                          <li>Viếng mộ đại thi hào Nguyễn Du</li>
                          <li>Thăm đền thờ và nhà lưu niệm Nguyễn Du</li>
                          <li>Tìm hiểu về cuộc đời và sự nghiệp văn chương của tác giả Truyện Kiều</li>
                          <li>Chiêm ngưỡng các hiện vật, tài liệu về đại thi hào dân tộc</li>
                        </ul>
                      </li>
                      <li><strong>16:00 - 17:30:</strong> Trở về thành phố Vinh.</li>
                      <li><strong>17:30 - 19:00:</strong> Tự do tham quan thành phố Vinh, mua sắm đặc sản địa phương.</li>
                      <li><strong>19:00 - 21:00:</strong> Ăn tối tại nhà hàng, thưởng thức ẩm thực xứ Nghệ.</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="mt-0">NGÀY 3: VINH - DI TÍCH NGUYỄN THÚC HÀM - BẢO TÀNG XỨ NGHỆ</h3>
                    <ul>
                      <li><strong>07:00 - 08:00:</strong> Ăn sáng tại khách sạn, làm thủ tục trả phòng.</li>
                      <li><strong>08:00 - 09:30:</strong> Di chuyển đến Di tích nhà bác học Nguyễn Thúc Hàm tại huyện Hưng Nguyên.</li>
                      <li><strong>09:30 - 11:00:</strong> Tham quan Di tích Nguyễn Thúc Hàm:
                        <ul>
                          <li>Tham quan nhà thờ và khu lưu niệm</li>
                          <li>Tìm hiểu về cuộc đời, sự nghiệp và đóng góp của nhà bác học trong lĩnh vực y học cổ truyền</li>
                          <li>Xem các hiện vật, tài liệu về y học dân tộc</li>
                        </ul>
                      </li>
                      <li><strong>11:00 - 12:00:</strong> Di chuyển về thành phố Vinh.</li>
                      <li><strong>12:00 - 13:30:</strong> Ăn trưa tại nhà hàng.</li>
                      <li><strong>13:30 - 15:30:</strong> Tham quan Bảo tàng Xứ Nghệ:
                        <ul>
                          <li>Xem trưng bày về các danh nhân Nghệ An qua các thời kỳ lịch sử</li>
                          <li>Tìm hiểu về những đóng góp của các danh nhân đối với lịch sử dân tộc</li>
                          <li>Chiêm ngưỡng các hiện vật, tài liệu quý về lịch sử, văn hóa xứ Nghệ</li>
                        </ul>
                      </li>
                      <li><strong>15:30 - 16:00:</strong> Mua sắm đặc sản, quà lưu niệm.</li>
                      <li><strong>16:00:</strong> Tiễn khách, kết thúc chương trình.</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm đến nổi bật trong Dấu ấn danh nhân</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                        <CardDescription>Di tích lịch sử quốc gia đặc biệt</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Khu di tích Kim Liên là quê hương của Chủ tịch Hồ Chí Minh, bao gồm làng Sen (quê nội) và làng Hoàng Trù (quê ngoại). Đây là nơi Bác Hồ sinh ra và lớn lên, với những ngôi nhà tranh, ao sen, giếng nước được bảo tồn nguyên vẹn.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/kim-lien">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3377099892.jpeg"
                          alt="Mộ bà Hoàng Thị Loan"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Mộ bà Hoàng Thị Loan</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Mộ bà Hoàng Thị Loan - thân mẫu Chủ tịch Hồ Chí Minh nằm tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn. Đây là công trình kiến trúc trang nghiêm, thể hiện lòng tôn kính đối với mẹ của vị lãnh tụ kính yêu.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/mo-ba-hoang-thi-loan">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3359488301.jpeg"
                          alt="Di tích lưu niệm cụ Phan Bội Châu"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Di tích Phan Bội Châu</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Di tích lưu niệm cụ Phan Bội Châu tại xã Đông Liễu, huyện Nam Đàn, là nơi ghi dấu cuộc đời và sự nghiệp của nhà cách mạng tiền bối. Khu di tích bao gồm nhà thờ và các công trình lưu niệm, cùng nhiều hiện vật quý giá.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/phan-boi-chau">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3935718425.jpeg"
                          alt="Di tích Nguyễn Du"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Khu di tích Nguyễn Du</CardTitle>
                        <CardDescription>Di tích lịch sử văn hóa đặc biệt</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Khu di tích Nguyễn Du tại huyện Nghi Xuân, tỉnh Hà Tĩnh, là nơi có mộ phần, đền thờ và nhà lưu niệm đại thi hào dân tộc. Đây là nơi để du khách tìm hiểu về cuộc đời và sự nghiệp văn chương của tác giả Truyện Kiều.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/nguyen-du">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/3972356176.jpeg"
                          alt="Di tích Nguyễn Thúc Hàm"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Di tích Nguyễn Thúc Hàm</CardTitle>
                        <CardDescription>Di tích lịch sử cấp tỉnh</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Di tích nhà bác học Nguyễn Thúc Hàm tại huyện Hưng Nguyên là nơi tưởng nhớ vị danh y nổi tiếng thời Lê. Khu di tích bao gồm nhà thờ, khu lưu niệm và trưng bày về y học cổ truyền Việt Nam.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/nguyen-thuc-ham">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/3334769225/4009124637.jpeg"
                          alt="Bảo tàng Xứ Nghệ"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Bảo tàng Xứ Nghệ</CardTitle>
                        <CardDescription>Không gian văn hóa - lịch sử</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Bảo tàng Xứ Nghệ tại thành phố Vinh là nơi lưu giữ và trưng bày các hiện vật, tài liệu về lịch sử, văn hóa Nghệ An, trong đó có nhiều tư liệu quý về các danh nhân xứ Nghệ qua các thời kỳ lịch sử.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                          <Link href="/historical-sites/bao-tang-xu-nghe">Chi tiết</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hình ảnh Dấu ấn danh nhân</h2>
                  <p>
                    Những hình ảnh đẹp từ các điểm đến trong hành trình khám phá cuộc đời và sự nghiệp của các danh nhân lịch sử xứ Nghệ.
                  </p>

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
                        src="https://ext.same-assets.com/3334769225/3377099892.jpeg"
                        alt="Mộ bà Hoàng Thị Loan"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3359488301.jpeg"
                        alt="Di tích Phan Bội Châu"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3935718425.jpeg"
                        alt="Di tích Nguyễn Du"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3972356176.jpeg"
                        alt="Di tích Nguyễn Thúc Hàm"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/4009124637.jpeg"
                        alt="Bảo tàng Xứ Nghệ"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/4045748218.jpeg"
                        alt="Tượng đài Hồ Chí Minh"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/4082314659.jpeg"
                        alt="Tài liệu về danh nhân"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/4119421720.jpeg"
                        alt="Du khách tham quan"
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
                  <p className="text-sm text-muted-foreground">Thứ 4 hàng tuần</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá tour</h4>
                  <p className="text-sm text-muted-foreground">2.790.000 VNĐ/người</p>
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
                    <h4 className="font-medium">Hoàng Văn Long</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Tour rất bổ ích, đặc biệt là cho học sinh, sinh viên. Tôi đã đưa các con đi và chúng đã học được rất nhiều điều về các danh nhân lịch sử. Hướng dẫn viên rất am hiểu lịch sử và nhiệt tình."
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Lê Thị Thu Hà</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★☆</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Chuyến đi mang lại nhiều kiến thức lịch sử thú vị. Tôi đặc biệt ấn tượng với di tích Phan Bội Châu và câu chuyện về phong trào Đông Du. Có thể cải thiện thêm về thời gian tại mỗi điểm."
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Nguyễn Huy Hoàng</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Là một người yêu lịch sử, tôi thực sự thích tour này. Hiếm có nơi nào có thể tham quan di tích của nhiều danh nhân khác nhau trong một hành trình. Dịch vụ tốt, giá cả hợp lý, rất đáng để trải nghiệm."
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
