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
import { TikTokEmbed } from "@/components/ui/tiktok-embed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1599582909646-3d30b6e52cd7?w=1200"
          alt="Khu di tích lịch sử Kim Liên"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Du Lịch Lịch Sử Nghệ An
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Khám phá những di tích lịch sử, văn hóa và danh thắng nổi tiếng của
            quê hương xứ Nghệ
          </p>
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
                src="https://images.unsplash.com/photo-1566402441483-e37c4ed48b34?w=800"
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
                  src="https://ext.same-assets.com/4052699563/777305328.jpeg"
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
                  src="https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg"
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
                  src="https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g"
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

      {/* Media Gallery with Tabs */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Video Du Lịch Nghệ An
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Khám phá Nghệ An qua những video hấp dẫn từ YouTube và TikTok
            </p>
          </div>

          <Tabs defaultValue="youtube" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="youtube" className="text-lg py-3">
                📺 YouTube Videos
              </TabsTrigger>
              <TabsTrigger value="tiktok" className="text-lg py-3">
                📱 TikTok Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="youtube" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/uUXkdzWvrVE"
                    title="Du lịch Nghệ An 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/b0tCeCAjTVE"
                    title="Du lịch Nghệ An 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ZBS7RuwgeRg"
                    title="Du lịch Nghệ An 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/VJe5CyJEVL4"
                    title="Du lịch Nghệ An 4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tiktok" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TikTokEmbed 
                  videoId="7271974233117445381"
                  username="@lacavietnam1"
                  caption="Phần 7| 📍Khu di tích lịch sử Truông Bồn #dulich #lacavietnam1 #quockhanh02thang09 #truongbonnghean #ditichlichsu #nghean"
                  videoUrl="https://www.tiktok.com/@lacavietnam1/video/7271974233117445381"
                />
                <TikTokEmbed 
                  videoId="7507089691112492296"
                  username="@abogo.com"
                  caption="Vẻ đẹp của Nghệ An tầm nhìn từ trên cao. Anh em 37 ơi. #abogodanang #abogo #dulich #viral #travel #bookingvilla #fyp"
                  videoUrl="https://www.tiktok.com/@abogo.com/video/7507089691112492296"
                />
                <TikTokEmbed 
                  videoId="7323564956945779986"
                  username="@ngoavan83"
                  caption="Mình Về thăm Làng Sen Quê Bác bao nhiêu lần rồi-Thật bồi hồi xúc động mỗi lần một cảm xúc khác nhau thật khó diễn tả..Có ai như mình ko? ... #langsenquebac #báchokinhyeu❤️❤️ #quêbacnghean #xuhuong #hochiminh #quebacho #nhasanbacho"
                  videoUrl="https://www.tiktok.com/@ngoavan83/video/7323564956945779986"
                />
              </div>
            </TabsContent>
          </Tabs>
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
                <Link href="/articles/kim-lien-kinh-nghiem">
                  <Button variant="outline" className="w-full">
                    Đọc Thêm
                  </Button>
                </Link>
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
                <Link href="/articles/con-cuong-trai-nghiem">
                  <Button variant="outline" className="w-full">
                    Đọc Thêm
                  </Button>
                </Link>
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
                <Link href="/articles/top-9-di-tich-nghe-an">
                  <Button variant="outline" className="w-full">
                    Đọc Thêm
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Beautiful Nghe An Images Gallery */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
              Vẻ Đẹp Nghệ An
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Khám phá vẻ đẹp thiên nhiên hùng vĩ và những cảnh quan tuyệt đẹp
              của quê hương xứ Nghệ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20ngh%E1%BB%87%20an/anh-dep-nghe-an-thumbnail.jpg"
                  alt="Thiên nhiên Nghệ An"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">Thiên nhiên hùng vĩ</h3>
                  <p className="text-sm">
                    Vẻ đẹp hoang sơ của núi rừng Nghệ An
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20ngh%E1%BB%87%20an/anh-dep-nghe-an-51.jpg"
                  alt="Cảnh đẹp Nghệ An"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">Cảnh quan tuyệt đẹp</h3>
                  <p className="text-sm">Những danh thắng nổi tiếng xứ Nghệ</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="https://bvhttdl.mediacdn.vn/291773308735864832/2021/8/9/410031342f74c62a9f65812342218102019-1628471347287-162847134745855120193.jpg"
                  alt="Di tích lịch sử Nghệ An"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">Di sản văn hóa</h3>
                  <p className="text-sm">Những di tích lịch sử quý giá</p>
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="https://cly.1cdn.vn/2020/01/07/congly-vn_lang-que-xu-thanh-dep-ngo-ngang-qua-ong-kinh-nhiep-anh-hinh-anh11442817826.jpg"
                  alt="Làng quê Nghệ An"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">Làng quê xứ Thanh</h3>
                  <p className="text-sm">Nét đẹp bình dị của quê hương</p>
                </div>
              </div>
            </div>

            {/* Image 5 - Spanning 2 columns */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2">
              <div className="relative h-80">
                <Image
                  src="https://cualo.vn/wp-content/uploads/2022/03/nghe-an-mo-cua-don-khach-trong-nuoc-va-quoc-te.jpg"
                  alt="Du lịch Nghệ An"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">Nghệ An đón khách</h3>
                  <p className="text-sm">
                    Chào đón du khách trong và ngoài nước
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/destinations">Khám Phá Nghệ An</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}