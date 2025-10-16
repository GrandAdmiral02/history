import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Hotel, Bus, Flame } from "lucide-react";

export default function DiSanTamLinhPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-yellow-900/30 z-10" />
        <Image
          src="https://dulichhonmat.com/uploads/b3dbfd80-d8a0-4003-bbe7-ba41902e1d27.jpg"
          alt="Di sản văn hóa tâm linh"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Di Sản Văn Hóa Tâm Linh
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl font-light">
            Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ
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
            <span className="text-green-700 font-medium">Di sản văn hóa tâm linh</span>
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
                  <h2 className="text-3xl font-bold text-green-800">GលGiới thiệu Di sản văn hóa tâm linh</h2>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Di sản văn hóa tâm linh</strong> là hành trình khám phá những công trình kiến trúc tôn giáo độc đáo và các di tích tâm linh nổi tiếng của xứ Nghệ.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Chuyến hành trình 4 ngày 3 đêm sẽ đưa du khách đến các đền, chùa có giá trị lịch sử và kiến trúc đặc sắc như <strong>Đền Cuông</strong>, <strong>Đền Quả Sơn</strong>, <strong>Đền Vạn Lộc</strong> và <strong>Chùa Đại Tuệ</strong>.
                  </p>

                  <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg",
                        alt: "Đền Cuông",
                      },
                      {
                        src: "https://lh6.googleusercontent.com/proxy/0J4M0FNuEa-beTy7RgD9IoV9x7Xob7iUGi6JFtgkD5CzviBbvvXgEF2DbX0kffWDCntKzU-Ii28NaAC2I09uo22UiIPbRGe5g4l2M20Dlgc-zGaLwBhB3ek0ydyMUw",
                        alt: "Đền Quả Sơn",
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
                      { icon: <Calendar className="w-5 h-5 text-green-600" />, label: "Thời gian", value: "4 ngày 3 đêm" },
                      { icon: <Clock className="w-5 h-5 text-green-600" />, label: "Khởi hành", value: "Chủ nhật hàng tuần" },
                      { icon: <MapPin className="w-5 h-5 text-green-600" />, label: "Điểm đến tiêu biểu", value: "Đền Cuông, Đền Quả Sơn, Đền Vạn Lộc, Chùa Đại Tuệ" },
                      { icon: <Bus className="w-5 h-5 text-green-600" />, label: "Phương tiện di chuyển", value: "Xe ô tô du lịch" },
                      { icon: <Hotel className="w-5 h-5 text-green-600" />, label: "Chỗ ở", value: "Khách sạn 3-4 sao" },
                      { icon: <Flame className="w-5 h-5 text-green-600" />, label: "Phù hợp cho", value: "Những ai muốn tìm hiểu về văn hóa tâm linh xứ Nghệ" },
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
                  <h2 className="text-3xl font-bold text-green-800">Lịch trình Di sản văn hóa tâm linh</h2>

                  {[
                    {
                      day: "NGÀY 1: VINH - ĐỀN CUÔNG",
                      schedule: [
                        { time: "08:00", activity: "Đón khách tại thành phố Vinh" },
                        { time: "09:00", activity: "Di chuyển đến huyện Diễn Châu" },
                        { time: "10:30", activity: "Tham quan Đền Cuông" },
                        { time: "12:00", activity: "Ăn trưa tại nhà hàng địa phương" },
                        { time: "14:00", activity: "Tìm hiểu về tín ngưỡng thờ phụng An Dương Vương" },
                        { time: "16:00", activity: "Check-in khách sạn" },
                        { time: "19:00", activity: "Ăn tối" },
                      ],
                    },
                    {
                      day: "NGÀY 2-3: KHÁM PHÁ CÁC ĐỀN CHÙA",
                      schedule: [
                        { time: null, activity: "Tham quan Đền Quả Sơn tại Đô Lương" },
                        { time: null, activity: "Tham quan Đền Vạn Lộc tại Hưng Lộc" },
                        { time: null, activity: "Tham quan đền thờ Hoàng đế Quang Trung" },
                        { time: null, activity: "Viếng chùa Đại Tuệ" },
                        { time: null, activity: "Khám phá các di tích tâm linh khác trong khu vực" },
                      ],
                    },
                    {
                      day: "NGÀY 4: CON CUÔNG",
                      schedule: [
                        { time: "08:00", activity: "Di chuyển đến huyện Con Cuông" },
                        { time: "10:00", activity: "Tham quan đền Cửa Rào" },
                        { time: "12:00", activity: "Ăn trưa" },
                        { time: "14:00", activity: "Khám phá Vườn quốc gia Pù Mát" },
                        { time: "16:00", activity: "Kết thúc hành trình" },
                      ],
                    },
                  ].map((day, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-md mb-6 border border-green-100">
                      <h3 className="text-xl font-semibold text-green-800">{day.day}</h3>
                      <ul className="space-y-3 mt-4 text-gray-700">
                        {day.schedule.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            {item.time && <span className="font-medium text-green-600">{item.time}:</span>}
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
                  <h2 className="text-3xl font-bold text-green-800">Các điểm đến tâm linh nổi bật</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg",
                        alt: "Đền Cuông",
                        title: "Đền Cuông",
                        desc: "Di tích lịch sử văn hóa cấp quốc gia",
                        content:
                          "Đền Cuông thờ An Dương Vương và các vị công thần, có kiến trúc độc đáo với nhiều hiện vật quý giá và lễ hội truyền thống đặc sắc.",
                      },
                      {
                        src: "https://lh6.googleusercontent.com/proxy/0J4M0FNuEa-beTy7RgD9IoV9x7Xob7iUGi6JFtgkD5CzviBbvvXgEF2DbX0kffWDCntKzU-Ii28NaAC2I09uo22UiIPbRGe5g4l2M20Dlgc-zGaLwBhB3ek0ydyMUw",
                        alt: "Đền Quả Sơn",
                        title: "Đền Quả Sơn",
                        desc: "Di tích lịch sử quốc gia",
                        content:
                          "Đền Quả Sơn tại Đô Lương là một trong những ngôi đền linh thiêng nhất xứ Nghệ, thu hút đông đảo du khách thập phương về viếng thăm.",
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
                  <h2 className="text-3xl font-bold text-green-800">Hình ảnh Di sản văn hóa tâm linh</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    {[
                      {
                        src: "https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg",
                        alt: "Đền Cuông",
                      },
                      {
                        src: "https://lh6.googleusercontent.com/proxy/0J4M0FNuEa-beTy7RgD9IoV9x7Xob7iUGi6JFtgkD5CzviBbvvXgEF2DbX0kffWDCntKzU-Ii28NaAC2I09uo22UiIPbRGe5g4l2M20Dlgc-zGaLwBhB3ek0ydyMUw",
                        alt: "Đền Quả Sơn",
                      },
                      {
                        src: "https://titangroup.vn/wp-content/uploads/diem-du-lich-tam-linh-nghe-an-5.jpeg",
                        alt: "Di sản tâm linh Nghệ An",
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
              <CardHeader className="bg-gradient-to-r from-green-100 to-yellow-50">
                <CardTitle className="text-lg font-semibold text-green-800">Thông tin tour</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  { label: "Thời gian", value: "4 ngày 3 đêm", icon: <Calendar className="w-5 h-5 text-green-600" /> },
                  { label: "Khởi hành", value: "Chủ nhật hàng tuần", icon: <Clock className="w-5 h-5 text-green-600" /> },
                  { label: "Giá tour", value: "3.490.000 VNĐ/người", icon: null },
                  {
                    label: "Đã bao gồm",
                    value: [
                      "Xe du lịch đời mới",
                      "Khách sạn 3-4 sao (2 người/phòng)",
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
              <CardHeader className="bg-gradient-to-r from-green-100 to-yellow-50">
                <CardTitle className="text-lg font-semibold text-green-800">Đặt tour</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-colors">
                  <Link href="/booking?tourId=di-san-tam-linh">Đặt tour ngay</Link>
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