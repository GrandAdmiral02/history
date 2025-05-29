"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { YouTubePlayer, YouTubeGrid } from "@/components/ui/youtube-player";
import Link from "next/link";

// Dynamic import cho MapComponent
const MapComponent = dynamic(() => import('@/components/ui/map'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] flex items-center justify-center bg-slate-100 rounded-md">Đang tải bản đồ...</div>
});

interface Video {
  id: string;
  title: string;
  description: string;
}

interface TravelExperience {
  title: string;
  duration: string;
  description: string;
  link: string;
}

interface ClientComponentsProps {
  youtubeVideos?: Video[];
  travelExperiences?: TravelExperience[];
}

export const ClientComponents = {
  VideoSection: ({ youtubeVideos }: { youtubeVideos: Video[] }) => (
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

        {/* Featured Video */}
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

        {/* Video Grid */}
        <YouTubeGrid
          videos={youtubeVideos}
          className="max-w-6xl mx-auto"
        />

        <div className="flex justify-center gap-4 mt-10">
          <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 hover:scale-105 transition-all duration-300">
            <Link href="/interactive-map" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              Xem Bản Đồ Di Tích
            </Link>
          </Button>
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
  ),

  TravelExperiences: ({ travelExperiences }: { travelExperiences: TravelExperience[] }) => (
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
            {travelExperiences.map((exp, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b">
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-green-700 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {exp.duration}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-1-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      </svg>
                      Có hướng dẫn viên
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300">
                      <Link href={exp.link}>Chi Tiết</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/80 hover:bg-white shadow-md" aria-label="Previous experience" />
          <CarouselNext className="bg-white/80 hover:bg-white shadow-md" aria-label="Next experience" />
        </Carousel>
      </div>
    </section>
  ),

  MapSection: () => (
    <section className="py-16 bg">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block border-b-2 border-green-600 pb-2 mb-4">
            <span className="text-sm uppercase tracking-wider text-green-600 font-semibold">Bản đồ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bản Đồ Di Tích Nghệ An</h2>
          <p className="text-muted max-w-3xl">
            Khám phá vị trí của các di tích lịch sử nổi tiếng tại Nghệ An trên bản đồ tương tác
          </p>
        </div>
        <MapComponent />
      </div>
    </section>
  ),
};