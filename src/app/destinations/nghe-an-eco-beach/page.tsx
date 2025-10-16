import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Hotel, Bus, Leaf, Waves } from "lucide-react";

export default function NgheAnEcoAndBeachTourPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/50 to-transparent z-10" />
        <Image
          src="https://static.vinwonders.com/production/bien-cua-lo-1.jpg"
          alt="Bãi biển Cửa Lò, Nghệ An"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Tour Du Lịch Sinh Thái & Biển Nghệ An
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl font-light">
            Khám phá thiên nhiên xanh mát tại Hòn Mát và thư giãn tại bãi biển Cửa Lò thơ mộng
          </p>
          <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
            <Link href="/booking?tourId=nghe-an-eco-beach">Đặt tour ngay</Link>
          </Button>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/destinations" className="hover:text-green-600 transition-colors">
              Hành trình
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-green-700 font-medium">Tour Sinh Thái & Biển Nghệ An</span>
          </nav>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-green-50 rounded-lg p-1">
                {["overview", "itinerary", "attractions", "gallery"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="text-sm md:text-base capitalize font-medium data-[state=active]:bg-green-600 data-[state=active]:text-white"
                  >
                    {tab === "overview" ? "Tổng quan" : tab === "itinerary" ? "Lịch trình" : tab === "attractions" ? "Điểm đến" : "Hình ảnh"}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="overview" className="space-y-8 mt-8">
                <div className="prose prose-green max-w-none">
                  <h2 className="text-3xl font-bold text-green-800">Giới thiệu Tour Sinh Thái & Biển Nghệ An</h2>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Tour Sinh Thái & Biển Nghệ An</strong> mang đến trải nghiệm kết hợp giữa khám phá thiên nhiên tại Khu du lịch sinh thái Hòn Mát, thư giãn tại bãi biển Cửa Lò thơ mộng và tìm hiểu lịch sử tại Khu di tích Truông Bồn.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Hành trình 3 ngày 2 đêm sẽ đưa du khách đến với những vườn cây ăn trái xanh mát, bãi biển trong xanh, đảo Ngư hoang sơ và những di tích lịch sử đầy ý nghĩa.
                  </p>

                  <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://dbnd.1cdn.vn/thumbs/1200x630/2023/04/06/b652b1b3e799ec2e8c37dc0d43e8a2757fedb3092e60fcc33c04fcfdcf60c3968ef108-_anh-chup-man-hinh-2023-04-06-luc-1680772071909.jpg",
                        alt: "Khu du lịch sinh thái Hòn Mát",
                      },
                      {
                        src: "https://www.dbndnghean.vn/dbndna-media/25/4/6/bien-cua-lo-nghe-an.jpg",
                        alt: "Bãi biển Cửa Lò",
                      },
                    ].map((img, idx) => (
                      <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold text-green-800">Thông tin cơ bản</h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      { icon: <Calendar className="w-5 h-5 text-green-600" />, label: "Thời gian", value: "3 ngày 2 đêm" },
                      { icon: <Clock className="w-5 h-5 text-green-600" />, label: "Khởi hành", value: "Thứ 6 hàng tuần" },
                      { icon: <MapPin className="w-5 h-5 text-green-600" />, label: "Điểm đến tiêu biểu", value: "Khu du lịch sinh thái Hòn Mát, Bãi biển Cửa Lò, Đảo Ngư, Khu di tích Truông Bồn" },
                      { icon: <Bus className="w-5 h-5 text-green-600" />, label: "Phương tiện di chuyển", value: "Xe ô tô du lịch" },
                      { icon: <Hotel className="w-5 h-5 text-green-600" />, label: "Chỗ ở", value: "Khách sạn 3 sao tại Cửa Lò" },
                      { icon: <Leaf className="w-5 h-5 text-green-600" />, label: "Phù hợp cho", value: "Gia đình, nhóm bạn yêu thiên nhiên và biển cả" },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        {item.icon && <span>{item.icon}</span>}
                        <strong>{item.label}:</strong> {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-8 mt-8">
                <div className="prose prose-green max-w-none">
                  <h2 className="text-3xl font-bold text-green-800">Lịch trình Tour Sinh Thái & Biển Nghệ An</h2>

                  {[
                    {
                      day: "NGÀY 1: HÀ NỘI - VINH - HÒN MÁT - CỬA LÒ",
                      schedule: [
                        { time: "06:00", activity: "Đón khách tại Hà Nội, khởi hành đi TP. Vinh" },
                        { time: "11:30", activity: "Ăn trưa tại nhà hàng địa phương ở Vinh (cháo lươn, bánh mướt)" },
                        { time: "13:00", activity: "Tham quan Khu du lịch sinh thái Hòn Mát: hái trái cây, chèo kayak, khám phá rừng" },
                        { time: "16:30", activity: "Đến Cửa Lò, nhận phòng khách sạn 3 sao" },
                        { time: "18:30", activity: "Ăn tối hải sản, tự do khám phá chợ đêm Cửa Lò" },
                      ],
                    },
                    {
                      day: "NGÀY 2: CỬA LÒ - ĐẢO NGƯ - TRUÔNG BỒN",
                      schedule: [
                        { time: "06:30", activity: "Ăn sáng tại khách sạn" },
                        { time: "07:30", activity: "Thuyền ra đảo Ngư, tham quan chùa Song Ngư, tắm biển, lặn ngắm san hô" },
                        { time: "11:30", activity: "Trở về đất liền, ăn trưa" },
                        { time: "13:30", activity: "Tham quan Khu di tích Truông Bồn, dâng hương, tìm hiểu lịch sử" },
                        { time: "16:00", activity: "Trở về Cửa Lò, nghỉ ngơi" },
                        { time: "19:00", activity: "Ăn tối, tự do dạo biển" },
                      ],
                    },
                    {
                      day: "NGÀY 3: CỬA LÒ - VINH - HÀ NỘI",
                      schedule: [
                        { time: "06:30", activity: "Ăn sáng, tắm biển tự do" },
                        { time: "08:30", activity: "Tham quan làng nghề nước mắm Cửa Lò" },
                        { time: "10:00", activity: "Mua sắm đặc sản (nước mắm, mực khô)" },
                        { time: "11:30", activity: "Ăn trưa, trả phòng khách sạn" },
                        { time: "13:00", activity: "Khởi hành về Hà Nội" },
                        { time: "19:00", activity: "Đến Hà Nội, kết thúc tour" },
                      ],
                    },
                  ].map((day, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-md mb-6 border border-green-100">
                      <h3 className="text-xl font-semibold text-green-800">{day.day}</h3>
                      <ul className="space-y-3 mt-4 text-gray-700">
                        {day.schedule.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="font-medium text-green-600">{item.time}:</span>
                            <span>{item.activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <TourReviews />
                </div>
              </TabsContent>

              <TabsContent value="attractions" className="space-y-8 mt-8">
                <div className="prose prose-green max-w-none">
                  <h2 className="text-3xl font-bold text-green-800">Các điểm đến nổi bật</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/471579626.jpg?k=f34976a255b41402436bebfb63201f889468043de127ff55fae8b73a555770a5&o=&hp=1",
                        alt: "Khu du lịch sinh thái Hòn Mát",
                        title: "Khu du lịch sinh thái Hòn Mát",
                        desc: "Thiên đường xanh giữa lòng Nghệ An",
                        content:
                          "Khu du lịch sinh thái Hòn Mát là nơi lý tưởng để khám phá thiên nhiên với vườn cây ăn trái, rừng sinh thái và các hoạt động như chèo kayak trên hồ.",
                      },
                      {
                        src: "https://tapchisonglam.vn/wp-content/uploads/2022/08/Minh-Chau.jpg.webp",
                        alt: "Bãi biển Cửa Lò",
                        title: "Bãi biển Cửa Lò",
                        desc: "Bãi biển nổi tiếng của Nghệ An",
                        content:
                          "Bãi biển Cửa Lò với bờ cát trắng mịn, nước biển trong xanh là điểm đến lý tưởng để thư giãn và thưởng thức hải sản tươi ngon.",
                      },
                      {
                        src: "https://statics.vinpearl.com/tinh-hoa-vinhomes_1747915468.jpg",
                        alt: "Đảo Ngư",
                        title: "Đảo Ngư",
                        desc: "Điểm đến hoang sơ, linh thiêng",
                        content:
                          "Đảo Ngư nổi bật với chùa Song Ngư, bãi tắm hoang sơ và cơ hội lặn ngắm san hô, mang đến trải nghiệm gần gũi với thiên nhiên.",
                      },
                      {
                        src: "https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg",
                        alt: "Khu di tích Truông Bồn",
                        title: "Khu di tích Truông Bồn",
                        desc: "Di tích lịch sử hào hùng",
                        content:
                          "Truông Bồn là nơi ghi dấu sự hy sinh anh dũng của các thanh niên xung phong trong kháng chiến chống Mỹ, với Đài tưởng niệm và Bảo tàng lịch sử.",
                      },
                    ].map((attraction, idx) => (
                      <Card key={idx} className="overflow-hidden border-green-100 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative h-56">
                          <Image
                            src={attraction.src}
                            alt={attraction.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl text-green-800">{attraction.title}</CardTitle>
                          <CardDescription className="text-gray-600">{attraction.desc}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-gray-700">{attraction.content}</CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-8 mt-8">
                <div className="prose prose-green max-w-none">
                  <h2 className="text-3xl font-bold text-green-800">Hình ảnh Tour Sinh Thái & Biển Nghệ An</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    {[
                      {
                        src: "https://dbnd.1cdn.vn/thumbs/1200x630/2023/04/06/b652b1b3e799ec2e8c37dc0d43e8a2757fedb3092e60fcc33c04fcfdcf60c3968ef108-_anh-chup-man-hinh-2023-04-06-luc-1680772071909.jpg",
                        alt: "Khu du lịch sinh thái Hòn Mát",
                      },
                      {
                        src: "https://cdn.media.dulich24.com.vn/diemden/cua-lo-nghe-an-3325/cua-lo.jpg",
                        alt: "Bãi biển Cửa Lò",
                      },
                      {
                        src: "https://static.vinwonders.com/production/dao-hon-ngu-dao-song-ngu-9.jpg",
                        alt: "Đảo Ngư",
                      },
                      {
                        src: "https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg",
                        alt: "Khu di tích Truông Bồn",
                      },
                    ].map((img, idx) => (
                      <div key={idx} className="relative h-40 md:h-52 rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8">
            {/* Tour information */}
            <Card className="border-green-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-100 to-blue-50">
                <CardTitle className="text-lg font-semibold text-green-800">Thông tin tour</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  { label: "Thời gian", value: "3 ngày 2 đêm", icon: <Calendar className="w-5 h-5 text-green-600" /> },
                  { label: "Khởi hành", value: "Thứ 6 hàng tuần", icon: <Clock className="w-5 h-5 text-green-600" /> },
                  { label: "Giá tour", value: "2.990.000 VNĐ/người", icon: null },
                  {
                    label: "Đã bao gồm",
                    value: [
                      "Xe du lịch đời mới",
                      "Khách sạn 3 sao (2 người/phòng)",
                      "Các bữa ăn theo chương trình",
                      "Vé tham quan các điểm",
                      "Thuyền ra đảo Ngư",
                      "Hướng dẫn viên chuyên nghiệp",
                      "Bảo hiểm du lịch",
                    ],
                    icon: null,
                  },
                ].map((info, idx) => (
                  <div key={idx}>
                    <h4 className="font-medium text-green-800 flex items-center gap-2">
                      {info.icon} {info.label}
                    </h4>
                    {Array.isArray(info.value) ? (
                      <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
                        {info.value.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-600">{info.value}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Booking */}
            <Card className="border-green-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-100 to-blue-50">
                <CardTitle className="text-lg font-semibold text-green-800">Đặt tour</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-colors">
                  <Link href="/booking?tourId=nghe-an-eco-beach">Đặt tour ngay</Link>
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Hoặc liên hệ với chúng tôi qua hotline
                </p>
                <p className="text-lg font-semibold text-center text-green-700">0238 1234 567</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}