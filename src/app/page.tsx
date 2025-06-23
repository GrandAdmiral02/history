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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SearchDialog } from "@/components/search";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://images.pexels.com/photos/32569747/pexels-photo-32569747.jpeg"
          alt="Khu di tích lịch sử Kim Liên"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Du Lịch Lịch Sử Nghệ An
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Khám phá những di tích lịch sử, văn hóa và danh thắng nổi tiếng của
            quê hương xứ Nghệ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-green-700 hover:bg-green-800"
            >
              <Link href="/destinations">Khám Phá Ngay</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700"
            >
              <Link href="/booking">Đặt Tour</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/20"
            >
              <Link href="/about">Tìm Hiểu Thêm</Link>
            </Button>
          </div>
          <div className="w-full max-w-md">
            <SearchDialog />
          </div>
        </div>
      </section>

      {/* Introduction section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Nghệ An - Vùng Đất Địa Linh Nhân Kiệt
              </h2>
              <p className="text-muted-foreground">
                Nghệ An - miền đất "địa linh nhân kiệt" với lịch sử hình thành
                và phát triển lâu đời. Đây là vùng đất đã sản sinh ra nhiều danh
                nhân văn hóa, anh hùng dân tộc, nhà cách mạng kiệt xuất trong
                lịch sử đấu tranh dựng nước và giữ nước của dân tộc Việt Nam.
              </p>
              <p className="text-muted-foreground">
                Với gần 1.400 di tích lịch sử văn hóa, trong đó có 375 di tích
                đã được xếp hạng cấp quốc gia đặc biệt, cấp quốc gia và cấp
                tỉnh, Nghệ An là nơi lưu giữ và bảo tồn nhiều giá trị văn hóa,
                lịch sử đặc sắc của dân tộc.
              </p>
              <div>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/about">Xem Thêm</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2164231/pexels-photo-2164231.jpeg"
                alt="Nghệ An"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Điểm Đến Nổi Bật
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Khám phá những di tích lịch sử, văn hóa nổi tiếng nhất tại Nghệ
              An, thu hút hàng triệu du khách mỗi năm
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="https://images.pexels.com/photos/32614358/pexels-photo-32614358.jpeg"
                  alt="Khu di tích Kim Liên"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Khu di tích Kim Liên</CardTitle>
                <CardDescription>
                  Quê hương của Chủ tịch Hồ Chí Minh - Di tích lịch sử cấp quốc
                  gia đặc biệt
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href="/historical-sites/kim-lien">Chi Tiết</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="https://images.pexels.com/photos/2853964/pexels-photo-2853964.jpeg"
                  alt="Đền Cuông"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Đền Cuông</CardTitle>
                <CardDescription>
                  Di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương và
                  các công thần
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href="/historical-sites/den-cuong">Chi Tiết</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="https://images.pexels.com/photos/262271/pexels-photo-262271.jpeg"
                  alt="Truông Bồn"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Truông Bồn</CardTitle>
                <CardDescription>
                  Nơi tưởng nhớ sự hy sinh anh dũng của các chiến sĩ thanh niên
                  xung phong
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href="/historical-sites/truong-bon">Chi Tiết</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-50"
            >
              <Link href="/historical-sites">Xem Tất Cả Điểm Đến</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Travel experiences */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trải Nghiệm Du Lịch
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Những hành trình khám phá di sản văn hóa và lịch sử đáng nhớ nhất
              tại Nghệ An
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Hành trình về nguồn</CardTitle>
                    <CardDescription>3 ngày 2 đêm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Khám phá quê hương Bác Hồ qua các di tích Kim Liên, làng
                      Sen, mộ bà Hoàng Thị Loan.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-green-700 hover:bg-green-800"
                    >
                      <Link href="/destinations/ve-nguon">Chi Tiết</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Con đường huyền thoại</CardTitle>
                    <CardDescription>2 ngày 1 đêm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Tham quan các điểm di tích cách mạng như Truông Bồn, Cột
                      mốc số 0 đường Hồ Chí Minh.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-green-700 hover:bg-green-800"
                    >
                      <Link href="/destinations/con-duong-huyen-thoai">
                        Chi Tiết
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Di sản văn hóa tâm linh</CardTitle>
                    <CardDescription>4 ngày 3 đêm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Thăm viếng các đền chùa nổi tiếng như Đền Cuông, Đền Quả
                      Sơn, và các di tích tâm linh khác.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-green-700 hover:bg-green-800"
                    >
                      <Link href="/destinations/di-san-tam-linh">Chi Tiết</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Latest posts */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bài Viết Mới Nhất
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Cập nhật những tin tức, sự kiện và kinh nghiệm du lịch mới nhất
              tại Nghệ An
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Di tích lịch sử Kim Liên - Kinh nghiệm tham quan từ A đến Z
                </CardTitle>
                <CardDescription>28/05/2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Về quê Bắc, ghé thăm khu di tích lịch sử Kim Liên Nghệ An -
                  nơi lưu giữ những hiện vật về Người, bạn sẽ càng thêm kính mến
                  vị lãnh tụ vĩ đại của dân tộc và yêu hơn vẻ đẹp, những giá trị
                  văn hóa lịch sử của vùng đất này.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Đọc Thêm
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  Những trải nghiệm không thể bỏ qua ở miền di sản sinh thái Con
                  Cuông
                </CardTitle>
                <CardDescription>15/05/2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Con Cuông là miền di sản sinh thái với thiên nhiên hoang sơ,
                  hùng vĩ, nơi có Vườn quốc gia Pù Mát, đền Cửa Rào và nhiều
                  danh thắng khác đang chờ bạn khám phá.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Đọc Thêm
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  Top 9 di tích lịch sử ở Nghệ An thu hút hàng triệu du khách
                  mỗi năm
                </CardTitle>
                <CardDescription>08/01/2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Di tích lịch sử ở Nghệ An nổi tiếng với những công trình lịch
                  sử hoặc điểm đến gắn liền với các danh nhân huyền thoại. Đây
                  là một trong những hoạt động du lịch hấp dẫn bậc nhất tại Nghệ
                  An.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Đọc Thêm
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
