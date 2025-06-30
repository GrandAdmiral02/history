import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourReviews } from "@/components/reviews/tour-reviews";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function VeNguonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/4052699563/777305328.jpeg"
          alt="Hành trình về nguồn"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hành Trình Về Nguồn</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An
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
            <span className="text-foreground">Hành trình về nguồn</span>
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
                  <h2>Giới thiệu Hành trình về nguồn</h2>
                  <p>
                    <strong>Hành trình về nguồn</strong> là tour du lịch đặc biệt, đưa du khách khám phá quê hương và những dấu ấn cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An - mảnh đất đã sinh ra vị lãnh tụ vĩ đại của dân tộc Việt Nam.
                  </p>
                  <p>
                    Chuyến hành trình kéo dài 3 ngày 2 đêm, dẫn du khách đến các địa điểm gắn liền với tuổi thơ và quá trình hình thành nhân cách của Bác Hồ. Từ làng Sen nơi Người sinh ra, làng Hoàng Trù nơi Người lớn lên, đến mộ bà Hoàng Thị Loan - thân mẫu của Người, và nhiều di tích lịch sử quan trọng khác tại Nghệ An.
                  </p>
                  <p>
                    Tour này không chỉ là hành trình tham quan, mà còn là dịp để mỗi người con đất Việt bày tỏ lòng biết ơn sâu sắc đối với Chủ tịch Hồ Chí Minh, tìm hiểu sâu hơn về cuộc đời và sự nghiệp cách mạng vĩ đại của Người, đồng thời khám phá vẻ đẹp văn hóa, lịch sử của vùng đất Nghệ An.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Làng Sen quê Bác"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://scontent.iocvnpt.com/resources/portal//Images/NDA/adminportal.nan/NamDan/ThamQuan/MoBaHoangThiLoan/mo%20ba%20hoang%20thi%20%20loan%20than%20mau%20cua%20bac%20ho_636886071794781740.jpg"
                        alt="Mộ bà Hoàng Thị Loan"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Thời gian:</strong> 3 ngày 2 đêm</li>
                    <li><strong>Khởi hành:</strong> Thứ 6 hàng tuần</li>
                    <li><strong>Điểm đến tiêu biểu:</strong> Khu di tích Kim Liên, Mộ bà Hoàng Thị Loan, Bảo tàng Hồ Chí Minh...</li>
                    <li><strong>Phương tiện di chuyển:</strong> Xe ô tô du lịch</li>
                    <li><strong>Chỗ ở:</strong> Khách sạn 3-4 sao tại thành phố Vinh</li>
                    <li><strong>Phù hợp cho:</strong> Mọi lứa tuổi, đặc biệt là các đoàn học sinh, sinh viên, cán bộ công nhân viên đi về nguồn</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="itinerary" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch trình Hành trình về nguồn</h2>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 1: VINH - KHU DI TÍCH KIM LIÊN</h3>
                    <ul>
                      <li><strong>07:30 - 08:00:</strong> Đón khách tại điểm hẹn ở thành phố Vinh.</li>
                      <li><strong>08:00 - 09:00:</strong> Di chuyển đến Khu di tích Kim Liên, huyện Nam Đàn.</li>
                      <li><strong>09:00 - 11:30:</strong> Tham quan Khu di tích Kim Liên:
                        <ul>
                          <li>Thăm làng Sen - quê nội của Bác Hồ, nơi Bác được sinh ra</li>
                          <li>Thăm nhà thờ họ Nguyễn Sinh</li>
                          <li>Thăm làng Hoàng Trù - quê ngoại của Bác, nơi Bác sống những năm tháng đầu đời</li>
                          <li>Tham quan Khu lưu niệm Chủ tịch Hồ Chí Minh</li>
                        </ul>
                      </li>
                      <li><strong>11:30 - 13:30:</strong> Ăn trưa tại nhà hàng địa phương, thưởng thức các món ăn đặc sản xứ Nghệ.</li>
                      <li><strong>13:30 - 15:30:</strong> Thăm mộ bà Hoàng Thị Loan - thân mẫu Chủ tịch Hồ Chí Minh tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn.</li>
                      <li><strong>15:30 - 17:00:</strong> Thăm Đền Chung Sơn và Đền thờ các vua Hùng tại Nam Đàn.</li>
                      <li><strong>17:00 - 18:00:</strong> Trở về thành phố Vinh, nhận phòng khách sạn.</li>
                      <li><strong>18:30 - 20:30:</strong> Ăn tối tại nhà hàng, thưởng thức văn nghệ dân ca Nghệ Tĩnh.</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="mt-0">NGÀY 2: VINH - TRUÔNG BỒN - ĐỀN CUÔNG</h3>
                    <ul>
                      <li><strong>07:00 - 08:00:</strong> Ăn sáng tại khách sạn.</li>
                      <li><strong>08:00 - 09:30:</strong> Di chuyển đến Khu di tích Truông Bồn, huyện Đô Lương.</li>
                      <li><strong>09:30 - 11:00:</strong> Tham quan Khu di tích Truông Bồn:
                        <ul>
                          <li>Dâng hương tại Đài tưởng niệm</li>
                          <li>Tìm hiểu về sự hy sinh anh dũng của 13 chiến sĩ thanh niên xung phong</li>
                          <li>Tham quan Bảo tàng Truông Bồn</li>
                        </ul>
                      </li>
                      <li><strong>11:00 - 12:00:</strong> Di chuyển đến huyện Diễn Châu.</li>
                      <li><strong>12:00 - 13:30:</strong> Ăn trưa tại nhà hàng địa phương.</li>
                      <li><strong>13:30 - 15:30:</strong> Tham quan Đền Cuông:
                        <ul>
                          <li>Tìm hiểu về kiến trúc và giá trị lịch sử của đền</li>
                          <li>Dâng hương tại đền chính</li>
                        </ul>
                      </li>
                      <li><strong>15:30 - 17:00:</strong> Trở về thành phố Vinh.</li>
                      <li><strong>17:00 - 19:00:</strong> Tự do tham quan thành phố Vinh, mua sắm đặc sản địa phương.</li>
                      <li><strong>19:00 - 21:00:</strong> Ăn tối tại nhà hàng.</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="mt-0">NGÀY 3: VINH - BẢO TÀNG NGHỆ AN</h3>
                    <ul>
                      <li><strong>07:00 - 08:00:</strong> Ăn sáng tại khách sạn, làm thủ tục trả phòng.</li>
                      <li><strong>08:00 - 10:00:</strong> Tham quan Bảo tàng Xô Viết Nghệ Tĩnh:
                        <ul>
                          <li>Tìm hiểu về phong trào Xô Viết Nghệ Tĩnh 1930-1931</li>
                          <li>Xem các hiện vật, tài liệu lịch sử về phong trào cách mạng tại Nghệ An</li>
                        </ul>
                      </li>
                      <li><strong>10:00 - 11:30:</strong> Tham quan Quảng trường Hồ Chí Minh và các công trình kiến trúc nổi bật của thành phố Vinh.</li>
                      <li><strong>11:30 - 13:00:</strong> Ăn trưa tại nhà hàng.</li>
                      <li><strong>13:00 - 15:00:</strong> Tham quan Thành cổ Vinh, tìm hiểu về lịch sử hình thành và phát triển của thành phố Vinh qua các thời kỳ.</li>
                      <li><strong>15:00 - 16:00:</strong> Mua sắm đặc sản, quà lưu niệm.</li>
                      <li><strong>16:00:</strong> Tiễn khách, kết thúc chương trình.</li>
                    </ul>
                  </div>
                  <TourReviews />
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm đến nổi bật trong Hành trình về nguồn</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                          alt="Khu di tích Kim Liên"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Khu di tích Kim Liên</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia đặc biệt</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Khu di tích Kim Liên là quê hương của Chủ tịch Hồ Chí Minh, bao gồm làng Sen (quê nội) và làng Hoàng Trù (quê ngoại). Đây là nơi Bác Hồ sinh ra và lớn lên, với những ngôi nhà tranh, ao sen, giếng nước được bảo tồn nguyên vẹn.
                        </p>
                      </CardContent>
                      
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://scontent.iocvnpt.com/resources/portal//Images/NDA/adminportal.nan/NamDan/ThamQuan/MoBaHoangThiLoan/mo%20ba%20hoang%20thi%20%20loan%20than%20mau%20cua%20bac%20ho_636886071794781740.jpg"
                          alt="Mộ bà Hoàng Thị Loan"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Mộ bà Hoàng Thị Loan</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Mộ bà Hoàng Thị Loan - thân mẫu Chủ tịch Hồ Chí Minh nằm tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn. Đây là công trình kiến trúc trang nghiêm, thể hiện lòng tôn kính đối với mẹ của vị lãnh tụ kính yêu.
                        </p>
                      </CardContent>
                      
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g"
                          alt="Truông Bồn"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Khu di tích Truông Bồn</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia đặc biệt</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Truông Bồn là nơi tưởng nhớ sự hy sinh anh dũng của 13 chiến sĩ thanh niên xung phong và 49 cán bộ, chiến sĩ trong chiến tranh chống Mỹ. Đài tưởng niệm và bảo tàng tại đây lưu giữ nhiều tài liệu, hiện vật quý giá.
                        </p>
                      </CardContent>
                      
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg"
                          alt="Đền Cuông"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Đền Cuông</CardTitle>
                        <CardDescription>Di tích lịch sử văn hóa cấp quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Đền Cuông tại huyện Diễn Châu là di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương và các vị công thần. Đền có kiến trúc độc đáo với nhiều hiện vật quý giá và lễ hội truyền thống đặc sắc.
                        </p>
                      </CardContent>
                      
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg"
                          alt="Bảo tàng Xô Viết Nghệ Tĩnh"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Bảo tàng Xô Viết Nghệ Tĩnh</CardTitle>
                        <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Bảo tàng Xô Viết Nghệ Tĩnh tại thành phố Vinh là nơi lưu giữ và trưng bày các hiện vật, tài liệu về phong trào Xô Viết Nghệ Tĩnh 1930-1931 - một cao trào cách mạng quan trọng trong lịch sử dân tộc.
                        </p>
                      </CardContent>
                      
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src="https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg"
                          alt="Thành cổ Vinh"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Thành cổ Vinh</CardTitle>
                        <CardDescription>Di tích lịch sử cấp tỉnh</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Thành cổ Vinh nằm trên địa bàn của ba phường Cửa Nam, Đội Cung, Quang Trung, là chứng tích lịch sử ghi lại dấu ấn nhiều biến động của xứ Nghệ qua các thời kỳ lịch sử.
                        </p>
                      </CardContent>
                      
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gallery" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hình ảnh Hành trình về nguồn</h2>
                  <p>
                    Những hình ảnh đẹp từ các điểm đến trong hành trình khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Làng Sen quê Bác"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://dulichfun.com/wp-content/uploads/2018/04/Dia-diem-tham-quan-chup-anh-dep-nhat-Nghe-An.jpg"
                        alt="Cảnh đẹp Nghệ An"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://scontent.iocvnpt.com/resources/portal//Images/NDA/adminportal.nan/NamDan/ThamQuan/MoBaHoangThiLoan/mo%20ba%20hoang%20thi%20%20loan%20than%20mau%20cua%20bac%20ho_636886071794781740.jpg"
                        alt="Mộ bà Hoàng Thị Loan"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g"
                        alt="Khu di tích Truông Bồn"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg"
                        alt="Đền Cuông"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://btxvnt.org.vn/storage/CrNxyiKSja3NzmWDRgO5zwyrj1CCHs7EFMURJLT0.jpg"
                        alt="Bảo tàng Xô Viết Nghệ Tĩnh"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg"
                        alt="Thành cổ Vinh"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/proxy/e9FNZPpKHWeSGq92mMuqckorFDMxiCVjlp_Jr9tunONwnwZtGQZKocanaWGf1W9vYuEzoKe0ZKlAlmPzEZdgCDQwst0weV0dpscsze4JfgUdI34OYZGSebEUX4SO1rflm0asR0ia259GYP5wEO5xb7Cb9uCA-urKDKtOOqIKuWeOFAbZdfuctvVl_ND8hQ"
                        alt="Di tích lưu niệm cụ Phan Bội Châu"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                      <Image
                        src="https://ticotravel.com.vn/wp-content/uploads/2023/01/canh-dep-nghe-an-7.jpg"
                        alt="Cảnh đẹp Nghệ An"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
                <h3 className="text-lg font-semibold text-green-800">Thông tin tour</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Thời gian</h4>
                  <p className="text-sm text-muted-foreground">3 ngày 2 đêm</p>
                </div>
                <div>
                  <h4 className="font-medium">Khởi hành</h4>
                  <p className="text-sm text-muted-foreground">Thứ 6 hàng tuần</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá tour</h4>
                  <p className="text-sm text-muted-foreground">2.990.000 VNĐ/người</p>
                </div>
                <div>
                  <h4 className="font-medium">Đã bao gồm</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe du lịch đời mới</li>
                    <li>Khách sạn 3-4 sao (2 người/phòng)</li>
                    <li>Các bữa ăn theo chương trình</li>
                    <li>Vé tham quan các điểm</li>
                    <li>Hướng dẫn viên chuyên nghiệp</li>
                    <li>Bảo hiểm du lịch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking information */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đặt tour</h3>
              </div>
              <div className="p-6 space-y-4">
                <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                  <Link href="/booking?tourId=ve-nguon&tourName=Hành trình về nguồn&price=1290000&duration=3 ngày 2 đêm">Đặt Tour Ngay</Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Hoặc liên hệ với chúng tôi qua hotline
                </p>
                <p className="text-lg font-semibold text-center">0238 1234 567</p>
              </div>
            </div>

            {/* Reviews */}
          </div>
        </div>
      </div>
    </div>
  );
}