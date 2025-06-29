import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, Users } from "lucide-react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTours() {
  try {
    const tours = await prisma.tour.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return tours;
  } catch (error) {
    console.error('Error fetching tours:', error);
    return [];
  }
}

export default async function DestinationsPage() {
  const tours = await getTours();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3380477770.jpeg"
          alt="Hành trình du lịch Nghệ An"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hành Trình Khám Phá</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Những lịch trình tham quan đặc sắc giúp bạn trải nghiệm trọn vẹn vẻ đẹp lịch sử văn hóa Nghệ An
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
            Chúng tôi đã chuẩn bị các hành trình tham quan tiêu biểu để giúp bạn khám phá trọn vẹn vẻ đẹp lịch sử, văn hóa của vùng đất Nghệ An. Mỗi hành trình đều được thiết kế tỉ mỉ để mang đến trải nghiệm phong phú và đáng nhớ.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Static tours - keep existing static tours */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                  alt="Hành trình về nguồn"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Hành trình du lịch</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">4.8</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Hành trình về nguồn</CardTitle>
                <CardDescription>
                  Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    Khu di tích Kim Liên, Nam Đàn
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    3 ngày 2 đêm
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Tối đa 30 người
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-700">2.990.000đ</div>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/destinations/ve-nguon">Xem chi tiết</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                  alt="Con đường huyền thoại"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Hành trình du lịch</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">4.6</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Con đường huyền thoại</CardTitle>
                <CardDescription>
                  Hành trình theo dấu chân những người anh hùng dân tộc Việt Nam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    Truông Bồn, Đô Lương
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    2 ngày 1 đêm
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Tối đa 25 người
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-700">1.890.000đ</div>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/destinations/con-duong-huyen-thoai">Xem chi tiết</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/3334769225/3110326546.jpeg"
                  alt="Di sản văn hóa tâm linh"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Hành trình du lịch</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">4.7</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Di sản văn hóa tâm linh</CardTitle>
                <CardDescription>
                  Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    Đền Cuông, Diễn Châu
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    4 ngày 3 đêm
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Tối đa 35 người
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-700">3.490.000đ</div>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/destinations/di-san-tam-linh">Xem chi tiết</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/3334769225/3359488301.jpeg"
                  alt="Dấu ấn danh nhân"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Hành trình du lịch</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">4.5</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Dấu ấn danh nhân</CardTitle>
                <CardDescription>
                  Hành trình theo chân những danh nhân lịch sử xứ Nghệ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    Di tích Phan Bội Châu, Con Cuông
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    3 ngày 2 đêm
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Tối đa 28 người
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-700">2.590.000đ</div>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/destinations/dau-an-danh-nhan">Xem chi tiết</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Dynamic tours from database */}
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={tour.imageUrl || "https://ext.same-assets.com/4052699563/777305328.jpeg"}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Hành trình du lịch</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm">4.5</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{tour.name}</CardTitle>
                  <CardDescription>
                    {tour.description || "Hành trình khám phá di sản văn hóa Nghệ An"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      Tối đa {tour.maxPeople} người
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-700">
                    {tour.price.toLocaleString('vi-VN')}đ
                  </div>
                  <Button className="bg-green-700 hover:bg-green-800">
                    Xem chi tiết
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        {/* Travel tips */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Lời Khuyên Cho Chuyến Đi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">Thời điểm lý tưởng</h3>
              <p className="text-sm text-muted-foreground">
                Thời điểm lý tưởng nhất để du lịch Nghệ An là từ tháng 9 đến tháng 4 năm sau. Trong khoảng thời gian này, thời tiết mát mẻ, ít mưa, thuận lợi cho việc tham quan các điểm di tích.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">Phương tiện di chuyển</h3>
              <p className="text-sm text-muted-foreground">
                Để di chuyển giữa các điểm tham quan, bạn có thể thuê xe máy, ô tô hoặc sử dụng dịch vụ taxi. Nhiều địa điểm nằm cách xa nhau, nên việc có phương tiện di chuyển riêng sẽ giúp bạn chủ động hơn trong hành trình.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">Ẩm thực</h3>
              <p className="text-sm text-muted-foreground">
                Đừng quên thưởng thức các món ăn đặc sản của Nghệ An như cháo lươn, bánh mướt, gỏi cá trích, kẹo Cu Đơ... Những món ăn này không chỉ ngon miệng mà còn mang đậm bản sắc văn hóa ẩm thực xứ Nghệ.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">Lưu trú</h3>
              <p className="text-sm text-muted-foreground">
                Thành phố Vinh có nhiều khách sạn từ 2-5 sao, đáp ứng nhu cầu đa dạng của du khách. Tại các huyện, bạn có thể tìm thấy các nhà nghỉ, homestay với giá cả phải chăng và dịch vụ thân thiện.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">Trang phục</h3>
              <p className="text-sm text-muted-foreground">
                Khi tham quan các đền, chùa, di tích lịch sử, bạn nên mặc trang phục lịch sự, kín đáo để thể hiện sự tôn trọng. Nên mang theo mũ, kem chống nắng và áo khoác nhẹ để thích ứng với thời tiết thay đổi.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-800">Hướng dẫn viên</h3>
              <p className="text-sm text-muted-foreground">
                Để hiểu sâu hơn về giá trị lịch sử, văn hóa của các di tích, bạn nên thuê hướng dẫn viên địa phương. Họ sẽ giúp bạn khám phá những câu chuyện thú vị mà sách vở không đề cập đến.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}