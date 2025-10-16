import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Hotel, Bus } from "lucide-react";

export default function ConDuongHuyenThoaiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        <Image
          src="https://statics.vinpearl.com/du-lich-quy-chau-anh-thumb_1633531971.jpg"
          alt="Con đường huyền thoại"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Con Đường Huyền Thoại
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl font-light">
            Hành trình theo dấu chân những người anh hùng trên đường mòn Hồ Chí Minh
          </p>
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
            <span className="text-green-700 font-medium">Con đường huyền thoại</span>
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
                  <h2 className="text-3xl font-bold text-green-800">Giới thiệu Con đường huyền thoại</h2>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Con đường huyền thoại</strong> là hành trình khám phá những địa danh gắn liền với đường mòn Hồ Chí Minh và các chiến sĩ anh hùng đã hy sinh vì độc lập, tự do của Tổ quốc.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Chuyến hành trình 2 ngày 1 đêm sẽ đưa du khách đến với <strong>Cột mốc số 0</strong> - điểm khởi đầu của đường mòn Hồ Chí Minh huyền thoại, và <strong>Truông Bồn</strong> - nơi ghi dấu sự hy sinh anh dũng của các chiến sĩ thanh niên xung phong.
                  </p>

                  <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://www.checkinnghean.com/content/images/2023/06/image-156.jpg",
                        alt: "Cột mốc số 0",
                      },
                      {
                        src: "https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg",
                        alt: "Bảo tàng Xô Viết Nghệ Tĩnh",
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
                      { icon: <Calendar className="w-5 h-5 text-green-600" />, label: "Thời gian", value: "2 ngày 1 đêm" },
                      { icon: <Clock className="w-5 h-5 text-green-600" />, label: "Khởi hành", value: "Thứ 7 hàng tuần" },
                      { icon: <MapPin className="w-5 h-5 text-green-600" />, label: "Điểm đến tiêu biểu", value: "Cột mốc số 0, Truông Bồn, Bảo tàng Xô Viết Nghệ Tĩnh" },
                      { icon: <Bus className="w-5 h-5 text-green-600" />, label: "Phương tiện di chuyển", value: "Xe ô tô du lịch" },
                      { icon: <Hotel className="w-5 h-5 text-green-600" />, label: "Chỗ ở", value: "Khách sạn 3 sao tại thành phố Vinh" },
                      { icon: null, label: "Phù hợp cho", value: "Những ai muốn tìm hiểu về lịch sử đấu tranh của dân tộc" },
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
                  <h2 className="text-3xl font-bold text-green-800">Lịch trình Con đường huyền thoại</h2>

                  {[
                    {
                      day: "NGÀY 1: VINH - CỘT MỐC SỐ 0",
                      schedule: [
                        { time: "07:30", activity: "Đón khách tại điểm hẹn ở thành phố Vinh" },
                        { time: "08:00", activity: "Tham quan Bảo tàng Xô Viết Nghệ Tĩnh" },
                        { time: "10:00", activity: "Di chuyển đến huyện Tân Kỳ" },
                        { time: "12:00", activity: "Ăn trưa tại nhà hàng địa phương" },
                        { time: "13:30", activity: "Tham quan Cột mốc số 0 - Đường Hồ Chí Minh" },
                        { time: "15:00", activity: "Tìm hiểu về đường mòn Hồ Chí Minh huyền thoại" },
                        { time: "17:00", activity: "Trở về Vinh, nhận phòng khách sạn" },
                        { time: "19:00", activity: "Ăn tối tại nhà hàng" },
                      ],
                    },
                    {
                      day: "NGÀY 2: TRUÔNG BỒN - VINH",
                      schedule: [
                        { time: "07:00", activity: "Ăn sáng tại khách sạn" },
                        { time: "08:00", activity: "Di chuyển đến Khu di tích Truông Bồn" },
                        { time: "09:30", activity: "Dâng hương tại Đài tưởng niệm" },
                        { time: "10:30", activity: "Tham quan Bảo tàng Truông Bồn" },
                        { time: "12:00", activity: "Ăn trưa tại nhà hàng địa phương" },
                        { time: "13:30", activity: "Tham quan đền thờ Hoàng đế Quang Trung" },
                        { time: "15:00", activity: "Mua sắm đặc sản" },
                        { time: "16:00", activity: "Kết thúc chương trình" },
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
                  <h2 className="text-3xl font-bold text-green-800">Các điểm đến trong Con đường huyền thoại</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://www.checkinnghean.com/content/images/2023/06/image-156.jpg",
                        alt: "Cột mốc số 0",
                        title: "Cột mốc số 0",
                        desc: "Điểm khởi đầu đường mòn Hồ Chí Minh",
                        content:
                          "Cột mốc số 0 tại xã Tân Kỳ là điểm khởi đầu của đường mòn Hồ Chí Minh huyền thoại - tuyến đường vận chuyển chiến lược quan trọng nhất trong kháng chiến chống Mỹ.",
                      },
                      {
                        src: "https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg",
                        alt: "Bảo tàng Xô Viết Nghệ Tĩnh",
                        title: "Bảo tàng Xô Viết Nghệ Tĩnh",
                        desc: "Di tích lịch sử quốc gia",
                        content:
                          "Bảo tàng Xô Viết Nghệ Tĩnh là nơi lưu giữ các hiện vật về phong trào Xô Viết Nghệ Tĩnh 1930-1931, một cao trào cách mạng quan trọng trong lịch sử dân tộc Việt Nam.",
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
                  <h2 className="text-3xl font-bold text-green-800">Hình ảnh Con đường huyền thoại</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    {[
                      {
                        src: "https://www.checkinnghean.com/content/images/2023/06/image-156.jpg",
                        alt: "Cột mốc số 0",
                      },
                      {
                        src: "https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg",
                        alt: "Bảo tàng Xô Viết Nghệ Tĩnh",
                      },
                      {
                        src: "https://dothothonghong.com/media/data/tin-tuc/2017/denthoquangtrung2.jpg",
                        alt: "Đền thờ Hoàng đế Quang Trung",
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
              <CardHeader className="bg-gradient-to-r from-green-100 to-green-50">
                <CardTitle className="text-lg font-semibold text-green-800">Thông tin tour</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  { label: "Thời gian", value: "2 ngày 1 đêm", icon: <Calendar className="w-5 h-5 text-green-600" /> },
                  { label: "Khởi hành", value: "Thứ 7 hàng tuần", icon: <Clock className="w-5 h-5 text-green-600" /> },
                  { label: "Giá tour", value: "1.890.000 VNĐ/người", icon: null },
                  {
                    label: "Đã bao gồm",
                    value: [
                      "Xe du lịch đời mới",
                      "Khách sạn 3 sao (2 người/phòng)",
                      "Các bữa ăn theo chương trình",
                      "Vé tham quan các điểm",
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
              <CardHeader className="bg-gradient-to-r from-green-100 to-green-50">
                <CardTitle className="text-lg font-semibold text-green-800">Đặt tour</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-colors">
                  <Link href="/booking?tourId=con-duong-huyen-thoai">Đặt tour ngay</Link>
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