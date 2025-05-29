"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SearchDialog } from "@/components/search";
import { YouTubePlayer, YouTubeGrid } from "@/components/ui/youtube-player";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <Image
          src="/images/kim-lien-2.jpg"
          alt="Khu di tích lịch sử Kim Liên"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-sm">Du Lịch Lịch Sử Nghệ An</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Khám phá những di tích lịch sử, văn hóa và danh thắng nổi tiếng của quê hương xứ Nghệ
          </p>
          
        </div>
      </section>

      {/* Introduction section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block border-b-2 border-green-700 pb-1 mb-2">
                <span className="text-sm uppercase tracking-wider text-green-700 font-semibold">Giới thiệu</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Nghệ An - Vùng Đất Địa Linh Nhân Kiệt</h2>
              <p className="text-muted-foreground">
                Nghệ An - miền đất "địa linh nhân kiệt" với lịch sử hình thành và phát triển lâu đời. Đây là vùng đất đã sản sinh ra nhiều danh nhân văn hóa, anh hùng dân tộc, nhà cách mạng kiệt xuất trong lịch sử đấu tranh dựng nước và giữ nước của dân tộc Việt Nam.
              </p>
              <p className="text-muted-foreground">
                Với gần 1.400 di tích lịch sử văn hóa, trong đó có 375 di tích đã được xếp hạng cấp quốc gia đặc biệt, cấp quốc gia và cấp tỉnh, Nghệ An là nơi lưu giữ và bảo tồn nhiều giá trị văn hóa, lịch sử đặc sắc của dân tộc.
              </p>
              <div className="pt-2">
                <Button asChild className="bg-green-700 hover:bg-green-800 transition-all duration-300 shadow-md">
                  <Link href="/about" className="flex items-center">
                    <span>Xem Thêm</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-black/10 z-10"></div>
              <Image
                src="/images/kim-lien-1.jpg"
                alt="Nghệ An"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block border-b-2 border-green-700 pb-1 mb-4">
              <span className="text-sm uppercase tracking-wider text-green-700 font-semibold">Video giới thiệu</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Khám Phá Nghệ An Qua Video</h2>
            <p className="text-muted-foreground max-w-3xl">
              Cùng tìm hiểu về vẻ đẹp và giá trị lịch sử của các di tích nổi tiếng tại Nghệ An
            </p>
          </div>

          {/* Featured video */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <YouTubePlayer
                videoId="lJ0_5wdh5wg"
                title="Khu di tích lịch sử quốc gia đặc biệt Kim Liên"
                className="mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                  Khu di tích lịch sử quốc gia đặc biệt Kim Liên
                </h3>
                <p className="text-muted-foreground">
                  Quê hương của Chủ tịch Hồ Chí Minh - Nơi bắt đầu hành trình vĩ đại của một con người phi thường
                </p>
              </div>
            </div>
          </div>

          {/* Video grid */}
          <YouTubeGrid
            videos={[
              {
                id: "uUXkdzWvrVE",
                title: "Về Thăm Làng Sen Quê Nội Bác Hồ",
                description: "Hành trình khám phá nơi bắt đầu của một huyền thoại"
              },
              {
                id: "je2dQITsCwg",
                title: "Thăm Quan Làng Sen - Khu Di Tích Kim Liên",
                description: "Tìm hiểu về quê hương và tuổi thơ của Người"
              }
            ]}
            className="max-w-6xl mx-auto"
          />

          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 hover:scale-105 transition-all duration-300">
              <Link href="https://www.youtube.com/results?search_query=du+lịch+nghệ+an" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Xem Thêm Video
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Điểm Đến Nổi Bật</h2>
            <p className="text-muted-foreground max-w-3xl">
              Khám phá những di tích lịch sử, văn hóa nổi tiếng nhất tại Nghệ An, thu hút hàng triệu du khách mỗi năm
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/images/kim-lien-1.jpg"
                  alt="Khu di tích Kim Liên"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle>Khu di tích Kim Liên</CardTitle>
                <CardDescription>
                  Quê hương của Chủ tịch Hồ Chí Minh - Di tích lịch sử cấp quốc gia đặc biệt
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300">
                  <Link href="/historical-sites/kim-lien">Chi Tiết</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/images/den-cuong-1.jpg"
                  alt="Đền Cuông"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle>Đền Cuông</CardTitle>
                <CardDescription>
                  Di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương và các công thần
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300">
                  <Link href="/historical-sites/den-cuong">Chi Tiết</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/images/truong-bon-1.jpg"
                  alt="Truông Bồn"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle>Truông Bồn</CardTitle>
                <CardDescription>
                  Nơi tưởng nhớ sự hy sinh anh dũng của các chiến sĩ thanh niên xung phong
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300">
                  <Link href="/historical-sites/truong-bon">Chi Tiết</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 hover:scale-105 transition-all duration-300">
              <Link href="/historical-sites">Xem Tất Cả Điểm Đến</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Travel experiences */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trải Nghiệm Du Lịch</h2>
            <p className="text-muted-foreground max-w-3xl">
              Những hành trình khám phá di sản văn hóa và lịch sử đáng nhớ nhất tại Nghệ An
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b">
                    <CardTitle>Hành trình về nguồn</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-green-700 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        3 ngày 2 đêm
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">Khám phá quê hương Bác Hồ qua các di tích Kim Liên, làng Sen, mộ bà Hoàng Thị Loan.</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      </svg>
                      Có hướng dẫn viên
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300">
                      <Link href="/destinations/ve-nguon">Chi Tiết</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b">
                    <CardTitle>Con đường huyền thoại</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-green-700 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        2 ngày 1 đêm
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">Tham quan các điểm di tích cách mạng như Truông Bồn, Cột mốc số 0 đường Hồ Chí Minh.</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      </svg>
                      Có hướng dẫn viên
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300">
                      <Link href="/destinations/con-duong-huyen-thoai">Chi Tiết</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b">
                    <CardTitle>Di sản văn hóa tâm linh</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-green-700 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        4 ngày 3 đêm
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">Thăm viếng các đền chùa nổi tiếng như Đền Cuông, Đền Quả Sơn, và các di tích tâm linh khác.</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      </svg>
                      Có hướng dẫn viên
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300">
                      <Link href="/destinations/di-san-tam-linh">Chi Tiết</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 hover:bg-white shadow-md" />
            <CarouselNext className="bg-white/80 hover:bg-white shadow-md" />
          </Carousel>
        </div>
      </section>

{/* Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block border-b-2 border-green-700 pb-1 mb-4">
              <span className="text-sm uppercase tracking-wider text-green-700 font-semibold">Thư viện ảnh</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nghệ An Qua Ảnh</h2>
            <p className="text-muted-foreground max-w-3xl">
              Những hình ảnh tuyệt đẹp về di tích lịch sử và danh thắng nổi tiếng tại Nghệ An
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/images/truong-bon-aerial.jpg"
                  alt="Toàn cảnh di tích Truông Bồn"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Di tích Lịch sử Quốc gia Truông Bồn</h3>
                  <p className="text-sm opacity-90">Nơi tưởng nhớ các chiến sĩ thanh niên xung phong</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative h-[190px] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/images/di-tich-nghe-an.jpg"
                  alt="Tổng hợp di tích Nghệ An"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-bold">Di tích nổi tiếng</h4>
                </div>
              </div>
              <div className="relative h-[190px] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/images/kim-lien-1.jpg"
                  alt="Khu di tích Kim Liên"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-bold">Quê hương Bác Hồ</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bài Viết Mới Nhất</h2>
            <p className="text-muted-foreground max-w-3xl">
              Cập nhật những tin tức, sự kiện và kinh nghiệm du lịch mới nhất tại Nghệ An
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <CardHeader className="border-b pb-3">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  28/05/2024
                </div>
                <CardTitle className="text-green-800 dark:text-green-400">Di tích lịch sử Kim Liên - Kinh nghiệm tham quan từ A đến Z</CardTitle>
              </CardHeader>
              <CardContent className="py-4 flex-1">
                <p className="line-clamp-3 text-muted-foreground">
                  Về quê Bắc, ghé thăm khu di tích lịch sử Kim Liên Nghệ An - nơi lưu giữ những hiện vật về Người, bạn sẽ càng thêm kính mến vị lãnh tụ vĩ đại của dân tộc và yêu hơn vẻ đẹp, những giá trị văn hóa lịch sử của vùng đất này.
                </p>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Button variant="outline" className="w-full hover:bg-green-50 hover:text-green-700 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  Đọc Thêm
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <CardHeader className="border-b pb-3">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  15/05/2024
                </div>
                <CardTitle className="text-green-800 dark:text-green-400">Những trải nghiệm không thể bỏ qua ở miền di sản sinh thái Con Cuông</CardTitle>
              </CardHeader>
              <CardContent className="py-4 flex-1">
                <p className="line-clamp-3 text-muted-foreground">
                  Con Cuông là miền di sản sinh thái với thiên nhiên hoang sơ, hùng vĩ, nơi có Vườn quốc gia Pù Mát, đền Cửa Rào và nhiều danh thắng khác đang chờ bạn khám phá.
                </p>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Button variant="outline" className="w-full hover:bg-green-50 hover:text-green-700 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  Đọc Thêm
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <CardHeader className="border-b pb-3">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  08/01/2024
                </div>
                <CardTitle className="text-green-800 dark:text-green-400">Top 9 di tích lịch sử ở Nghệ An thu hút hàng triệu du khách mỗi năm</CardTitle>
              </CardHeader>
              <CardContent className="py-4 flex-1">
                <p className="line-clamp-3 text-muted-foreground">
                  Di tích lịch sử ở Nghệ An nổi tiếng với những công trình lịch sử hoặc điểm đến gắn liền với các danh nhân huyền thoại. Đây là một trong những hoạt động du lịch hấp dẫn bậc nhất tại Nghệ An.
                </p>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Button variant="outline" className="w-full hover:bg-green-50 hover:text-green-700 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
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