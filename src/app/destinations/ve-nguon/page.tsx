import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Hotel, Bus, Star, ArrowRight } from "lucide-react";

export default function VeNguonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-red-900/50 to-transparent z-10" />
        <Image
          src="https://ext.same-assets.com/4052699563/777305328.jpeg"
          alt="Hành trình về nguồn"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Hành Trình Về Nguồn
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl font-light">
            Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An
          </p>
          <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
            <Link href="/booking?tourId=ve-nguon">Đặt tour ngay</Link>
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
            <span className="text-green-700 font-medium">Hành trình về nguồn</span>
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
                  <h2 className="text-3xl font-bold text-green-800">Giới thiệu Hành trình về nguồn</h2>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Hành trình về nguồn</strong> là tour du lịch đặc biệt, đưa du khách khám phá quê hương và những dấu ấn cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An - mảnh đất đã sinh ra vị lãnh tụ vĩ đại của dân tộc Việt Nam.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Chuyến hành trình kéo dài 3 ngày 2 đêm, dẫn du khách đến các địa điểm gắn liền với tuổi thơ và quá trình hình thành nhân cách của Bác Hồ. Từ làng Sen nơi Người sinh ra, làng Hoàng Trù nơi Người lớn lên, đến mộ bà Hoàng Thị Loan - thân mẫu của Người, và nhiều di tích lịch sử quan trọng khác tại Nghệ An.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Tour này không chỉ là hành trình tham quan, mà còn là dịp để mỗi người con đất Việt bày tỏ lòng biết ơn sâu sắc đối với Chủ tịch Hồ Chí Minh, tìm hiểu sâu hơn về cuộc đời và sự nghiệp cách mạng vĩ đại của Người, đồng thời khám phá vẻ đẹp văn hóa, lịch sử của vùng đất Nghệ An.
                  </p>

                  <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://ext.same-assets.com/4052699563/777305328.jpeg",
                        alt: "Làng Sen quê Bác",
                      },
                      {
                        src: "https://scontent.iocvnpt.com/resources/portal//Images/NDA/adminportal.nan/NamDan/ThamQuan/MoBaHoangThiLoan/mo%20ba%20hoang%20thi%20%20loan%20than%20mau%20cua%20bac%20ho_636886071794781740.jpg",
                        alt: "Mộ bà Hoàng Thị Loan",
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
                      { icon: <MapPin className="w-5 h-5 text-green-600" />, label: "Điểm đến tiêu biểu", value: "Khu di tích Kim Liên, Mộ bà Hoàng Thị Loan, Bảo tàng Hồ Chí Minh" },
                      { icon: <Bus className="w-5 h-5 text-green-600" />, label: "Phương tiện di chuyển", value: "Xe ô tô du lịch" },
                      { icon: <Hotel className="w-5 h-5 text-green-600" />, label: "Chỗ ở", value: "Khách sạn 3-4 sao tại thành phố Vinh" },
                      { icon: <Star className="w-5 h-5 text-green-600" />, label: "Phù hợp cho", value: "Mọi lứa tuổi, đặc biệt là các đoàn học sinh, sinh viên, cán bộ công nhân viên đi về nguồn" },
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
                  <h2 className="text-3xl font-bold text-green-800">Lịch trình Hành trình về nguồn</h2>

                  {[
                    {
                      day: "NGÀY 1: VINH - KHU DI TÍCH KIM LIÊN",
                      schedule: [
                        { time: "07:30 - 08:00", activity: "Đón khách tại điểm hẹn ở thành phố Vinh." },
                        { time: "08:00 - 09:00", activity: "Di chuyển đến Khu di tích Kim Liên, huyện Nam Đàn." },
                        {
                          time: "09:00 - 11:30",
                          activity: "Tham quan Khu di tích Kim Liên:",
                          subItems: [
                            "Thăm làng Sen - quê nội của Bác Hồ, nơi Bác được sinh ra",
                            "Thăm nhà thờ họ Nguyễn Sinh",
                            "Thăm làng Hoàng Trù - quê ngoại của Bác, nơi Bác sống những năm tháng đầu đời",
                            "Tham quan Khu lưu niệm Chủ tịch Hồ Chí Minh",
                          ],
                        },
                        { time: "11:30 - 13:30", activity: "Ăn trưa tại nhà hàng địa phương, thưởng thức các món ăn đặc sản xứ Nghệ." },
                        { time: "13:30 - 15:30", activity: "Thăm mộ bà Hoàng Thị Loan - thân mẫu Chủ tịch Hồ Chí Minh tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn." },
                        { time: "15:30 - 17:00", activity: "Thăm Đền Chung Sơn và Đền thờ các vua Hùng tại Nam Đàn." },
                        { time: "17:00 - 18:00", activity: "Trở về thành phố Vinh, nhận phòng khách sạn." },
                        { time: "18:30 - 20:30", activity: "Ăn tối tại nhà hàng, thưởng thức văn nghệ dân ca Nghệ Tĩnh." },
                      ],
                    },
                    {
                      day: "NGÀY 2: VINH - TRUÔNG BỒN - ĐỀN CUÔNG",
                      schedule: [
                        { time: "07:00 - 08:00", activity: "Ăn sáng tại khách sạn." },
                        { time: "08:00 - 09:30", activity: "Di chuyển đến Khu di tích Truông Bồn, huyện Đô Lương." },
                        {
                          time: "09:30 - 11:00",
                          activity: "Tham quan Khu di tích Truông Bồn:",
                          subItems: [
                            "Dâng hương tại Đài tưởng niệm",
                            "Tìm hiểu về sự hy sinh anh dũng của 13 chiến sĩ thanh niên xung phong",
                            "Tham quan Bảo tàng Truông Bồn",
                          ],
                        },
                        { time: "11:00 - 12:00", activity: "Di chuyển đến huyện Diễn Châu." },
                        { time: "12:00 - 13:30", activity: "Ăn trưa tại nhà hàng địa phương." },
                        {
                          time: "13:30 - 15:30",
                          activity: "Tham quan Đền Cuông:",
                          subItems: ["Tìm hiểu về kiến trúc và giá trị lịch sử của đền", "Dâng hương tại đền chính"],
                        },
                        { time: "15:30 - 17:00", activity: "Trở về thành phố Vinh." },
                        { time: "17:00 - 19:00", activity: "Tự do tham quan thành phố Vinh, mua sắm đặc sản địa phương." },
                        { time: "19:00 - 21:00", activity: "Ăn tối tại nhà hàng." },
                      ],
                    },
                    {
                      day: "NGÀY 3: VINH - BẢO TÀNG NGHỆ AN",
                      schedule: [
                        { time: "07:00 - 08:00", activity: "Ăn sáng tại khách sạn, làm thủ tục trả phòng." },
                        {
                          time: "08:00 - 10:00",
                          activity: "Tham quan Bảo tàng Xô Viết Nghệ Tĩnh:",
                          subItems: [
                            "Tìm hiểu về phong trào Xô Viết Nghệ Tĩnh 1930-1931",
                            "Xem các hiện vật, tài liệu lịch sử về phong trào cách mạng tại Nghệ An",
                          ],
                        },
                        { time: "10:00 - 11:30", activity: "Tham quan Quảng trường Hồ Chí Minh và các công trình kiến trúc nổi bật của thành phố Vinh." },
                        { time: "11:30 - 13:00", activity: "Ăn trưa tại nhà hàng." },
                        { time: "13:00 - 15:00", activity: "Tham quan Thành cổ Vinh, tìm hiểu về lịch sử hình thành và phát triển của thành phố Vinh qua các thời kỳ." },
                        { time: "15:00 - 16:00", activity: "Mua sắm đặc sản, quà lưu niệm." },
                        { time: "16:00", activity: "Tiễn khách, kết thúc chương trình." },
                      ],
                    },
                  ].map((day, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-md mb-6 border border-green-100">
                      <h3 className="text-xl font-semibold text-green-800">{day.day}</h3>
                      <ul className="space-y-3 mt-4 text-gray-700">
                        {day.schedule.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            {item.time && <span className="font-medium text-green-600">{item.time}:</span>}
                            <div>
                              <span>{item.activity}</span>
                              {item.subItems && (
                                <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
                                  {item.subItems.map((subItem, j) => (
                                    <li key={j}>{subItem}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Đánh giá từ khách hàng</h3>
                    <TourReviews />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="attractions" className="space-y-8 mt-8">
                <div className="prose prose-green max-w-none">
                  <h2 className="text-3xl font-bold text-green-800">Các điểm đến nổi bật trong Hành trình về nguồn</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        src: "https://ext.same-assets.com/4052699563/777305328.jpeg",
                        alt: "Khu di tích Kim Liên",
                        title: "Khu di tích Kim Liên",
                        desc: "Di tích lịch sử quốc gia đặc biệt",
                        content:
                          "Khu di tích Kim Liên là quê hương của Chủ tịch Hồ Chí Minh, bao gồm làng Sen (quê nội) và làng Hoàng Trù (quê ngoại). Đây là nơi Bác Hồ sinh ra và lớn lên, với những ngôi nhà tranh, ao sen, giếng nước được bảo tồn nguyên vẹn.",
                      },
                      {
                        src: "https://scontent.iocvnpt.com/resources/portal//Images/NDA/adminportal.nan/NamDan/ThamQuan/MoBaHoangThiLoan/mo%20ba%20hoang%20thi%20%20loan%20than%20mau%20cua%20bac%20ho_636886071794781740.jpg",
                        alt: "Mộ bà Hoàng Thị Loan",
                        title: "Mộ bà Hoàng Thị Loan",
                        desc: "Di tích lịch sử quốc gia",
                        content:
                          "Mộ bà Hoàng Thị Loan - thân mẫu Chủ tịch Hồ Chí Minh nằm tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn. Đây là công trình kiến trúc trang nghiêm, thể hiện lòng tôn kính đối với mẹ của vị lãnh tụ kính yêu.",
                      },
                      {
                        src: "https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g",
                        alt: "Truông Bồn",
                        title: "Khu di tích Truông Bồn",
                        desc: "Di tích lịch sử quốc gia đặc biệt",
                        content:
                          "Truông Bồn là nơi tưởng nhớ sự hy sinh anh dũng của 13 chiến sĩ thanh niên xung phong và 49 cán bộ, chiến sĩ trong chiến tranh chống Mỹ. Đài tưởng niệm và bảo tàng tại đây lưu giữ nhiều tài liệu, hiện vật quý giá.",
                      },
                      {
                        src: "https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg",
                        alt: "Đền Cuông",
                        title: "Đền Cuông",
                        desc: "Di tích lịch sử văn hóa cấp quốc gia",
                        content:
                          "Đền Cuông tại huyện Diễn Châu là di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương và các vị công thần. Đền có kiến trúc độc đáo với nhiều hiện vật quý giá và lễ hội truyền thống đặc sắc.",
                      },
                      {
                        src: "https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg",
                        alt: "Bảo tàng Xô Viết Nghệ Tĩnh",
                        title: "Bảo tàng Xô Viết Nghệ Tĩnh",
                        desc: "Di tích lịch sử quốc gia",
                        content:
                          "Bảo tàng Xô Viết Nghệ Tĩnh tại thành phố Vinh là nơi lưu giữ và trưng bày các hiện vật, tài liệu về phong trào Xô Viết Nghệ Tĩnh 1930-1931 - một cao trào cách mạng quan trọng trong lịch sử dân tộc.",
                      },
                      {
                        src: "https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg",
                        alt: "Thành cổ Vinh",
                        title: "Thành cổ Vinh",
                        desc: "Di tích lịch sử cấp tỉnh",
                        content:
                          "Thành cổ Vinh nằm trên địa bàn của ba phường Cửa Nam, Đội Cung, Quang Trung, là chứng tích lịch sử ghi lại dấu ấn nhiều biến động của xứ Nghệ qua các thời kỳ lịch sử.",
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
                        <CardFooter />
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-8 mt-8">
                <div className="prose prose-green max-w-none">
                  <h2 className="text-3xl font-bold text-green-800">Hình ảnh Hành trình về nguồn</h2>
                  <p className="text-gray-700">
                    Những hình ảnh đẹp từ các điểm đến trong hành trình khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    {[
                      {
                        src: "https://ext.same-assets.com/4052699563/777305328.jpeg",
                        alt: "Làng Sen quê Bác",
                      },
                      {
                        src: "https://dulichfun.com/wp-content/uploads/2018/04/Dia-diem-tham-quan-chup-anh-dep-nhat-Nghe-An.jpg",
                        alt: "Cảnh đẹp Nghệ An",
                      },
                      {
                        src: "https://scontent.iocvnpt.com/resources/portal//Images/NDA/adminportal.nan/NamDan/ThamQuan/MoBaHoangThiLoan/mo%20ba%20hoang%20thi%20%20loan%20than%20mau%20cua%20bac%20ho_636886071794781740.jpg",
                        alt: "Mộ bà Hoàng Thị Loan",
                      },
                      {
                        src: "https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g",
                        alt: "Khu di tích Truông Bồn",
                      },
                      {
                        src: "https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg",
                        alt: "Đền Cuông",
                      },
                      {
                        src: "https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg",
                        alt: "Bảo tàng Xô Viết Nghệ Tĩnh",
                      },
                      {
                        src: "https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg",
                        alt: "Thành cổ Vinh",
                      },
                      {
                        src: "https://cms.baotangnghean.baotangso.com/DataFiles/2024/01/Places/20240122-134320-fhX9IHFR.webp",
                        alt: "Di tích lưu niệm cụ Phan Bội Châu",
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
              <CardHeader className="bg-gradient-to-r from-green-100 to-red-50">
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
              <CardHeader className="bg-gradient-to-r from-green-100 to-red-50">
                <CardTitle className="text-lg font-semibold text-green-800">Đặt tour</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800 transition-colors flex items-center gap-2"
                >
                  <Link href="/booking?tourId=ve-nguon&tourName=Hành trình về nguồn&price=2990000&duration=3 ngày 2 đêm">
                    Đặt Tour Ngay <ArrowRight className="h-4 w-4" />
                  </Link>
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