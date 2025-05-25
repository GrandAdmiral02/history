"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SearchDialog } from "@/components/search";
import dynamic from "next/dynamic";

// Dynamic import để tránh lỗi SSR với Leaflet
const MapComponent = dynamic(() => import('@/components/ui/map'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] flex items-center justify-center bg-slate-100 rounded-md">Đang tải bản đồ...</div>
});

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-sm animate-fade-in-up">
            Du Lịch Lịch Sử Nghệ An
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
            Khám phá những di tích lịch sử, văn hóa và danh thắng nổi tiếng của quê hương xứ Nghệ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="bg-green-700 hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/destinations">
                <span className="mr-2">🏛️</span>
                Khám Phá Ngay
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <Link href="/about">
                <span className="mr-2">📖</span>
                Tìm Hiểu Thêm
              </Link>
            </Button>
          </div>
          <div className="w-full max-w-md animate-fade-in-up animation-delay-900">
            <SearchDialog />
          </div>
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

      {/* Video Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block border-b-2 border-green-700 pb-1 mb-4">
              <span className="text-sm uppercase tracking-wider text-green-700 font-semibold">Video</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Khám Phá Nghệ An Qua Video</h2>
            <p className="text-muted-foreground max-w-3xl">
              Những video đẹp về du lịch và di tích lịch sử tại Nghệ An
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="https://www.youtube.com/watch?v=WNvaEIJDNQ0" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4 bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/images/kim-lien-1.jpg"
                  alt="Video về Kim Liên"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  YouTube
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-green-700 transition-colors">
                Khám Phá Quê Hương Bác Hồ
              </h3>
              <p className="text-muted-foreground text-sm">
                Hành trình về nguồn khám phá quê hương của Chủ tịch Hồ Chí Minh tại Kim Liên, Nghệ An.
              </p>
            </Link>
            <Link href="https://www.youtube.com/watch?v=ur6O2SqPpXw" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4 bg-gradient-to-br from-blue-100 to-blue-200">
                <Image
                  src="/images/truong-bon-aerial.jpg"
                  alt="Video về Truông Bồn"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  YouTube
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-green-700 transition-colors">
                Di Tích Lịch Sử Nghệ An
              </h3>
              <p className="text-muted-foreground text-sm">
                Tìm hiểu về lịch sử và ý nghĩa của các di tích quan trọng tại Nghệ An qua video tài liệu.
              </p>
            </Link>
            <Link href="https://www.youtube.com/watch?v=sPD6h186_V8" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4 bg-gradient-to-br from-purple-100 to-purple-200">
                <Image
                  src="/images/den-cuong-1.jpg"
                  alt="Video về Đền Cuông"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  YouTube
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-green-700 transition-colors">
                Thiên Nhiên Hùng Vĩ Nghệ An
              </h3>
              <p className="text-muted-foreground text-sm">
                Chiêm ngưỡng vẻ đẹp thiên nhiên hùng vĩ và thơ mộng của các danh thắng tại Nghệ An.
              </p>
            </Link>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-green-700 hover:bg-green-800 transition-all duration-300 shadow-md">
              <Link href="/interactive-map" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                <span>Xem Bản Đồ Di Tích</span>
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

      {/* Statistics Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1,400+</div>
              <div className="text-green-100">Di tích lịch sử</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">375+</div>
              <div className="text-green-100">Di tích được xếp hạng</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1,000+</div>
              <div className="text-green-100">Năm lịch sử</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">2M+</div>
              <div className="text-green-100">Du khách/năm</div>
            </div>
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

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block border-b-2 border-green-700 pb-1 mb-4">
              <span className="text-sm uppercase tracking-wider text-green-700 font-semibold">Chia sẻ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Du Khách Nói Gì Về Nghệ An</h2>
            <p className="text-muted-foreground max-w-3xl">
              Những trải nghiệm đáng nhớ và cảm nhận chân thực từ du khách
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Anh Minh - Hà Nội</h4>
                  <div className="flex text-yellow-400">
                    {"⭐".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Khu di tích Kim Liên thật sự ấn tượng! Được đứng ở nơi Bác Hồ sinh ra và lớn lên, tôi cảm thấy vô cùng xúc động. Hướng dẫn viên rất nhiệt tình và am hiểu."
              </p>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  L
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Chị Lan - TP.HCM</h4>
                  <div className="flex text-yellow-400">
                    {"⭐".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Chuyến du lịch về nguồn 3 ngày 2 đêm thật tuyệt vời. Từ Đền Cuông đến Truông Bồn, mỗi địa điểm đều mang ý nghĩa lịch sử sâu sắc. Rất đáng để trải nghiệm!"
              </p>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  T
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Anh Tuấn - Đà Nẵng</h4>
                  <div className="flex text-yellow-400">
                    {"⭐".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Nghệ An không chỉ có di tích lịch sử mà còn có thiên nhiên tuyệt đẹp. Website này giúp tôi lên kế hoạch rất chi tiết. Dịch vụ tốt, giá cả hợp lý!"
              </p>
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
