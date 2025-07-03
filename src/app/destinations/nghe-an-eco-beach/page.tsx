import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NgheAnEcoAndBeachTourPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://static.vinwonders.com/production/bien-cua-lo-1.jpg"
          alt="Bãi biển Cửa Lò, Nghệ An"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tour Du Lịch Sinh Thái & Biển Nghệ An
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Khám phá thiên nhiên xanh mát tại Hòn Mát và thư giãn tại bãi biển
            Cửa Lò thơ mộng
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
            <span className="text-foreground">
              Tour Sinh Thái & Biển Nghệ An
            </span>
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
                  <h2>Giới thiệu Tour Sinh Thái & Biển Nghệ An</h2>
                  <p>
                    <strong>Tour Sinh Thái & Biển Nghệ An</strong> mang đến trải
                    nghiệm kết hợp giữa khám phá thiên nhiên tại Khu du lịch
                    sinh thái Hòn Mát, thư giãn tại bãi biển Cửa Lò thơ mộng và
                    tìm hiểu lịch sử tại Khu di tích Truông Bồn.
                  </p>
                  <p>
                    Hành trình 3 ngày 2 đêm sẽ đưa du khách đến với những vườn
                    cây ăn trái xanh mát, bãi biển trong xanh, đảo Ngư hoang sơ
                    và những di tích lịch sử đầy ý nghĩa.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://dbnd.1cdn.vn/thumbs/1200x630/2023/04/06/b652b1b3e799ec2e8c37dc0d43e8a2757fedb3092e60fcc33c04fcfdcf60c3968ef108-_anh-chup-man-hinh-2023-04-06-luc-1680772071909.jpg"
                        alt="Khu du lịch sinh thái Hòn Mát"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://www.dbndnghean.vn/dbndna-media/25/4/6/bien-cua-lo-nghe-an.jpg"
                        alt="Bãi biển Cửa Lò"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li>
                      <strong>Thời gian:</strong> 3 ngày 2 đêm
                    </li>
                    <li>
                      <strong>Khởi hành:</strong> Thứ 6 hàng tuần
                    </li>
                    <li>
                      <strong>Điểm đến tiêu biểu:</strong> Khu du lịch sinh thái
                      Hòn Mát, Bãi biển Cửa Lò, Đảo Ngư, Khu di tích Truông Bồn
                    </li>
                    <li>
                      <strong>Phương tiện di chuyển:</strong> Xe ô tô du lịch
                    </li>
                    <li>
                      <strong>Chỗ ở:</strong> Khách sạn 3 sao tại Cửa Lò
                    </li>
                    <li>
                      <strong>Phù hợp cho:</strong> Gia đình, nhóm bạn yêu thiên
                      nhiên và biển cả
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch trình Tour Sinh Thái & Biển Nghệ An</h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">
                      NGÀY 1: HÀ NỘI - VINH - HÒN MÁT - CỬA LÒ
                    </h3>
                    <ul>
                      <li>
                        <strong>06:00:</strong> Đón khách tại Hà Nội, khởi hành
                        đi TP. Vinh
                      </li>
                      <li>
                        <strong>11:30:</strong> Ăn trưa tại nhà hàng địa phương
                        ở Vinh (cháo lươn, bánh mướt)
                      </li>
                      <li>
                        <strong>13:00:</strong> Tham quan Khu du lịch sinh thái
                        Hòn Mát: hái trái cây, chèo kayak, khám phá rừng
                      </li>
                      <li>
                        <strong>16:30:</strong> Đến Cửa Lò, nhận phòng khách sạn
                        3 sao
                      </li>
                      <li>
                        <strong>18:30:</strong> Ăn tối hải sản, tự do khám phá
                        chợ đêm Cửa Lò
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">
                      NGÀY 2: CỬA LÒ - ĐẢO NGƯ - TRUÔNG BỒN
                    </h3>
                    <ul>
                      <li>
                        <strong>06:30:</strong> Ăn sáng tại khách sạn
                      </li>
                      <li>
                        <strong>07:30:</strong> Thuyền ra đảo Ngư, tham quan
                        chùa Song Ngư, tắm biển, lặn ngắm san hô
                      </li>
                      <li>
                        <strong>11:30:</strong> Trở về đất liền, ăn trưa
                      </li>
                      <li>
                        <strong>13:30:</strong> Tham quan Khu di tích Truông
                        Bồn, dâng hương, tìm hiểu lịch sử
                      </li>
                      <li>
                        <strong>16:00:</strong> Trở về Cửa Lò, nghỉ ngơi
                      </li>
                      <li>
                        <strong>19:00:</strong> Ăn tối, tự do dạo biển
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="mt-0">NGÀY 3: CỬA LÒ - VINH - HÀ NỘI</h3>
                    <ul>
                      <li>
                        <strong>06:30:</strong> Ăn sáng, tắm biển tự do
                      </li>
                      <li>
                        <strong>08:30:</strong> Tham quan làng nghề nước mắm Cửa
                        Lò
                      </li>
                      <li>
                        <strong>10:00:</strong> Mua sắm đặc sản (nước mắm, mực
                        khô)
                      </li>
                      <li>
                        <strong>11:30:</strong> Ăn trưa, trả phòng khách sạn
                      </li>
                      <li>
                        <strong>13:00:</strong> Khởi hành về Hà Nội
                      </li>
                      <li>
                        <strong>19:00:</strong> Đến Hà Nội, kết thúc tour
                      </li>
                    </ul>
                  </div>
                  <TourReviews />
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/471579626.jpg?k=f34976a255b41402436bebfb63201f889468043de127ff55fae8b73a555770a5&o=&hp=1"
                          alt="Khu du lịch sinh thái Hòn Mát"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Khu du lịch sinh thái Hòn Mát</CardTitle>
                        <CardDescription>
                          Thiên đường xanh giữa lòng Nghệ An
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Khu du lịch sinh thái Hòn Mát là nơi lý tưởng để khám
                          phá thiên nhiên với vườn cây ăn trái, rừng sinh thái
                          và các hoạt động như chèo kayak trên hồ.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://tapchisonglam.vn/wp-content/uploads/2022/08/Minh-Chau.jpg.webp"
                          alt="Bãi biển Cửa Lò"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Bãi biển Cửa Lò</CardTitle>
                        <CardDescription>
                          Bãi biển nổi tiếng của Nghệ An
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Bãi biển Cửa Lò với bờ cát trắng mịn, nước biển trong
                          xanh là điểm đến lý tưởng để thư giãn và thưởng thức
                          hải sản tươi ngon.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://statics.vinpearl.com/tinh-hoa-vinhomes_1747915468.jpg"
                          alt="Đảo Ngư"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Đảo Ngư</CardTitle>
                        <CardDescription>
                          Điểm đến hoang sơ, linh thiêng
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Đảo Ngư nổi bật với chùa Song Ngư, bãi tắm hoang sơ và
                          cơ hội lặn ngắm san hô, mang đến trải nghiệm gần gũi
                          với thiên nhiên.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg"
                          alt="Khu di tích Truông Bồn"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Khu di tích Truông Bồn</CardTitle>
                        <CardDescription>
                          Di tích lịch sử hào hùng
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Truông Bồn là nơi ghi dấu sự hy sinh anh dũng của các
                          thanh niên xung phong trong kháng chiến chống Mỹ, với
                          Đài tưởng niệm và Bảo tàng lịch sử.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hình ảnh Tour Sinh Thái & Biển Nghệ An</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://media.baonghean.vn/v3/Photos/Img/202306/7/1686124800-19-1.jpg"
                        alt="Khu du lịch sinh thái Hòn Mát"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://statics.vinpearl.com/cua-lo-beach_1627636047.jpg"
                        alt="Bãi biển Cửa Lò"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://media.baonghean.vn/v3/Photos/Img/202306/7/1686124800-19-2.jpg"
                        alt="Đảo Ngư"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg"
                        alt="Khu di tích Truông Bồn"
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
                <h3 className="text-lg font-semibold text-green-800">
                  Thông tin tour
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Thời gian</h4>
                  <p className="text-sm text-muted-foreground">3 ngày 2 đêm</p>
                </div>
                <div>
                  <h4 className="font-medium">Khởi hành</h4>
                  <p className="text-sm text-muted-foreground">
                    Thứ 6 hàng tuần
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Giá tour</h4>
                  <p className="text-sm text-muted-foreground">
                    2.990.000 VNĐ/người
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Đã bao gồm</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe du lịch đời mới</li>
                    <li>Khách sạn 3 sao (2 người/phòng)</li>
                    <li>Các bữa ăn theo chương trình</li>
                    <li>Vé tham quan các điểm</li>
                    <li>Thuyền ra đảo Ngư</li>
                    <li>Hướng dẫn viên chuyên nghiệp</li>
                    <li>Bảo hiểm du lịch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Đặt tour
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href="/booking?tourId=nghe-an-eco-beach">
                    Đặt tour ngay
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Hoặc liên hệ với chúng tôi qua hotline
                </p>
                <p className="text-lg font-semibold text-center">
                  0238 1234 567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
