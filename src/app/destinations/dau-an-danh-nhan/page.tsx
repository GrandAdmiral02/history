import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Hotel, Bus } from "lucide-react";

export default function DauAnDanhNhanPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        <Image
          src="https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg"
          alt="Dấu ấn danh nhân"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Dấu Ấn Danh Nhân
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl font-light">
            Hành trình theo chân những danh nhân lịch sử xứ Nghệ
          </p>
          <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
            <Link href="/booking?tourId=dau-an-danh-nhan">Đặt tour ngay</Link>
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
            <span className="text-green-700 font-medium">Dấu ấn danh nhân</span>
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
                  <h2 className="text-3xl font-bold text-green-800">Giới thiệu Dấu ấn danh nhân</h2>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Dấu ấn danh nhân</strong> là hành trình khám phá những di tích gắn liền với cuộc đời và sự nghiệp của các danh nhân lịch sử nổi tiếng của xứ Nghệ.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Chuyến hành trình 3 ngày 2 đêm sẽ đưa du khách đến những nơi gắn bó với cuộc đời của <strong>Chủ tịch Hồ Chí Minh</strong>, cụ <strong>Phan Bội Châu</strong>, <strong>Hoàng đế Quang Trung</strong> và <strong>Mai Hắc Đế</strong>.
                  </p>

                  <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://ext.same-assets.com/4052699563/777305328.jpeg",
                        alt: "Khu di tích Kim Liên",
                      },
                      {
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKR71ngAAxKjas27_PYOhSQGEK8Bd9Ru6FlA&s",
                        alt: "Di tích cụ Phan Bội Châu",
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
                      { icon: <Clock className="w-5 h-5 text-green-600" />, label: "Khởi hành", value: "Thứ 2 hàng tuần" },
                      { icon: <MapPin className="w-5 h-5 text-green-600" />, label: "Điểm đến tiêu biểu", value: "Khu di tích Kim Liên, Di tích cụ Phan Bội Châu, Đền thờ Hoàng đế Quang Trung" },
                      { icon: <Bus className="w-5 h-5 text-green-600" />, label: "Phương tiện di chuyển", value: "Xe ô tô du lịch" },
                      { icon: <Hotel className="w-5 h-5 text-green-600" />, label: "Chỗ ở", value: "Khách sạn 3-4 sao" },
                      { icon: null, label: "Phù hợp cho", value: "Những ai muốn tìm hiểu về các danh nhân lịch sử" },
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
                  <h2 className="text-3xl font-bold text-green-800">Lịch trình Dấu ấn danh nhân</h2>

                  {[
                    {
                      day: "NGÀY 1: VINH - NAM ĐÀN",
                      schedule: [
                        { time: "08:00", activity: "Đón khách tại thành phố Vinh" },
                        { time: "09:00", activity: "Tham quan Khu di tích Kim Liên" },
                        { time: "11:00", activity: "Viếng mộ bà Hoàng Thị Loan" },
                        { time: "13:00", activity: "Ăn trưa" },
                        { time: "14:30", activity: "Tham quan Di tích lưu niệm cụ Phan Bội Châu" },
                        { time: "16:30", activity: "Check-in khách sạn" },
                        { time: "19:00", activity: "Ăn tối" },
                      ],
                    },
                    {
                      day: "NGÀY 2: VINH VÀ VÙNG PHỤ CẬN",
                      schedule: [
                        { time: "08:00", activity: "Ăn sáng" },
                        { time: "09:00", activity: "Tham quan đền thờ Hoàng đế Quang Trung" },
                        { time: "11:00", activity: "Tham quan di tích liên quan đến Mai Hắc Đế" },
                        { time: "13:00", activity: "Ăn trưa" },
                        { time: "14:30", activity: "Tham quan Bảo tàng Nghệ An" },
                        { time: "16:00", activity: "Tự do tham quan thành phố Vinh" },
                        { time: "19:00", activity: "Ăn tối" },
                      ],
                    },
                    {
                      day: "NGÀY 3: HOÀN THÀNH HÀNH TRÌNH",
                      schedule: [
                        { time: "08:00", activity: "Ăn sáng, làm thủ tục trả phòng" },
                        { time: "09:00", activity: "Tham quan các di tích còn lại" },
                        { time: "11:00", activity: "Mua sắm đặc sản" },
                        { time: "12:00", activity: "Ăn trưa" },
                        { time: "14:00", activity: "Kết thúc hành trình" },
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
                  <h2 className="text-3xl font-bold text-green-800">Các điểm đến gắn liền với danh nhân</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://ext.same-assets.com/4052699563/777305328.jpeg",
                        alt: "Khu di tích Kim Liên",
                        title: "Khu di tích Kim Liên",
                        desc: "Quê hương Chủ tịch Hồ Chí Minh",
                        content:
                          "Nơi sinh ra và lớn lên của Chủ tịch Hồ Chí Minh, bao gồm làng Sen và làng Hoàng Trù với nhiều di tích quý giá.",
                      },
                      {
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKR71ngAAxKjas27_PYOhSQGEK8Bd9Ru6FlA&s",
                        alt: "Di tích cụ Phan Bội Châu",
                        title: "Di tích cụ Phan Bội Châu",
                        desc: "Nhà yêu nước vĩ đại",
                        content:
                          "Di tích lưu niệm cụ Phan Bội Châu - nhà yêu nước, nhà cách mạng tiền bối của dân tộc Việt Nam.",
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
                  <h2 className="text-3xl font-bold text-green-800">Hình ảnh Dấu ấn danh nhân</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    {[
                      {
                        src: "https://ext.same-assets.com/4052699563/777305328.jpeg",
                        alt: "Khu di tích Kim Liên",
                      },
                      {
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKR71ngAAxKjas27_PYOhSQGEK8Bd9Ru6FlA&s",
                        alt: "Di tích Phan Bội Châu",
                      },
                      {
                        src: "https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg",
                        alt: "Thành cổ Vinh",
                      },
                      {
                        src: "https://ticotravel.com.vn/wp-content/uploads/2023/01/canh-dep-nghe-an-7.jpg",
                        alt: "Cảnh đẹp Nghệ An",
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
                  { label: "Thời gian", value: "3 ngày 2 đêm", icon: <Calendar className="w-5 h-5 text-green-600" /> },
                  { label: "Khởi hành", value: "Thứ 2 hàng tuần", icon: <Clock className="w-5 h-5 text-green-600" /> },
                  { label: "Giá tour", value: "2.590.000 VNĐ/người", icon: null },
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
              <CardHeader className="bg-gradient-to-r from-green-100 to-green-50">
                <CardTitle className="text-lg font-semibold text-green-800">Đặt tour</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button asChild className="w-full bg-green-700 hover:bg-green-800 transition-colors">
                  <Link href="/booking?tourId=dau-an-danh-nhan">Đặt tour ngay</Link>
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