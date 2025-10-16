import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-red-900/50 to-transparent z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3380477770.jpeg"
          alt="Nghệ An - Địa linh nhân kiệt"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Giới Thiệu Nghệ An Historical
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl font-light">
            Khám phá di sản lịch sử và văn hóa đặc sắc của xứ Nghệ
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
            <span className="text-green-700 font-medium">Giới thiệu</span>
          </nav>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-green prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-green-800">Về Dự Án Nghệ An Historical</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Nghệ An Historical</strong> là dự án được xây dựng với mục đích giới thiệu, quảng bá và tôn vinh những giá trị lịch sử, văn hóa đặc sắc của vùng đất xứ Nghệ đến với du khách trong nước và quốc tế.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dự án ra đời từ tình yêu và niềm tự hào đối với mảnh đất địa linh nhân kiệt, nơi có lịch sử hình thành và phát triển lâu đời, gắn liền với nhiều sự kiện trọng đại trong tiến trình lịch sử dân tộc Việt Nam.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Thông qua nền tảng website hiện đại và thân thiện với người dùng, chúng tôi mong muốn mang đến những thông tin chi tiết, hấp dẫn và đáng tin cậy về các di tích lịch sử, danh lam thắng cảnh, và những trải nghiệm du lịch đáng nhớ tại Nghệ An.
              </p>

              <h2 className="text-3xl font-bold text-green-800">Nghệ An - Vùng Đất Địa Linh Nhân Kiệt</h2>
              <div className="relative h-80 rounded-xl overflow-hidden my-10 shadow-lg">
                <Image
                  src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                  alt="Làng Sen - Quê hương Chủ tịch Hồ Chí Minh"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Nghệ An là một tỉnh nằm ở khu vực Bắc Trung Bộ của Việt Nam, có diện tích lớn thứ 4 cả nước với hơn 16.000 km². Với vị trí địa lý đặc biệt, Nghệ An vừa có núi cao, đồng bằng, vừa có biển và hải đảo, tạo nên một vùng đất có cảnh quan thiên nhiên đa dạng và phong phú.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nghệ An được mệnh danh là "đất học", "đất võ" và "địa linh nhân kiệt" khi đã sản sinh ra nhiều danh nhân, anh hùng dân tộc, nhà cách mạng kiệt xuất như: Chủ tịch Hồ Chí Minh, Phan Bội Châu, Phan Đình Phùng và nhiều anh hùng, liệt sĩ khác đã cống hiến, hy sinh cho sự nghiệp đấu tranh giải phóng dân tộc và xây dựng đất nước.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Với gần 1.400 di tích lịch sử văn hóa, trong đó có 375 di tích đã được xếp hạng cấp quốc gia đặc biệt, cấp quốc gia và cấp tỉnh, Nghệ An là "bảo tàng sống" về lịch sử và văn hóa Việt Nam. Mỗi di tích đều mang trong mình những câu chuyện, những giá trị đặc sắc về lịch sử, văn hóa, tín ngưỡng của người dân xứ Nghệ nói riêng và dân tộc Việt Nam nói chung.
              </p>

              <h2 className="text-3xl font-bold text-green-800">Ý Nghĩa Của Việc Bảo Tồn Di Sản Lịch Sử</h2>
              <p className="text-gray-700 leading-relaxed">
                Di sản lịch sử và văn hóa là tài sản vô giá của mỗi dân tộc, là chứng nhân của quá khứ, là cầu nối giữa các thế hệ, và là nguồn lực quý báu cho sự phát triển bền vững trong tương lai.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bảo tồn di sản lịch sử không chỉ là gìn giữ những công trình, hiện vật vật chất mà còn là bảo tồn những giá trị tinh thần, tri thức, kỹ năng và những truyền thống tốt đẹp của cha ông ta.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Việc bảo tồn di sản lịch sử có ý nghĩa quan trọng trong việc:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span> Giáo dục thế hệ trẻ về truyền thống lịch sử, văn hóa và tinh thần yêu nước của dân tộc
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span> Phát triển du lịch bền vững, tạo việc làm và thu nhập cho người dân địa phương
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span> Nghiên cứu khoa học về lịch sử, văn hóa, kiến trúc và nghệ thuật truyền thống
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span> Tăng cường bản sắc dân tộc và niềm tự hào dân tộc
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span> Thúc đẩy giao lưu, hợp tác quốc tế trong lĩnh vực văn hóa, du lịch
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-green-800">Mục Đích Của Website Nghệ An Historical</h2>
              <p className="text-gray-700 leading-relaxed">
                Website Nghệ An Historical được xây dựng với các mục đích chính sau:
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>
                  <strong className="text-green-800">Cung cấp thông tin chi tiết và đáng tin cậy</strong> về các di tích lịch sử, danh lam thắng cảnh tại Nghệ An, giúp du khách có được hiểu biết sâu sắc về giá trị lịch sử, văn hóa của từng địa điểm.
                </li>
                <li>
                  <strong className="text-green-800">Quảng bá và giới thiệu</strong> vẻ đẹp và sự phong phú của di sản văn hóa, lịch sử Nghệ An đến với du khách trong nước và quốc tế.
                </li>
                <li>
                  <strong className="text-green-800">Hỗ trợ và hướng dẫn du khách</strong> trong việc lập kế hoạch, lịch trình tham quan các điểm di tích lịch sử tại Nghệ An một cách hiệu quả.
                </li>
                <li>
                  <strong className="text-green-800">Kết nối cộng đồng</strong> những người yêu thích lịch sử, văn hóa và du lịch, tạo diễn đàn chia sẻ kinh nghiệm, cảm nhận sau mỗi chuyến đi.
                </li>
                <li>
                  <strong className="text-green-800">Góp phần bảo tồn và phát huy</strong> giá trị di sản văn hóa, lịch sử của dân tộc thông qua việc nâng cao nhận thức của cộng đồng về tầm quan trọng của các di tích.
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-green-800">Đội Ngũ Phát Triển</h2>
              <p className="text-gray-700 leading-relaxed">
                Đội ngũ phát triển website Nghệ An Historical bao gồm các chuyên gia trong lĩnh vực lịch sử, văn hóa, du lịch và công nghệ thông tin, cùng chung tâm huyết và khát vọng giới thiệu, quảng bá vẻ đẹp lịch sử, văn hóa của quê hương Nghệ An đến với bạn bè trong nước và quốc tế.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi cam kết không ngừng cập nhật, bổ sung thông tin và cải tiến giao diện, tính năng của website để mang đến trải nghiệm tốt nhất cho người dùng.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mọi góp ý, phản hồi của quý độc giả là nguồn động viên quý báu giúp chúng tôi hoàn thiện website ngày một tốt hơn. Vui lòng liên hệ với chúng tôi qua thông tin bên dưới.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Contact information */}
            <Card className="border-green-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-100 to-red-50">
                <CardTitle className="text-lg font-semibold text-green-800">Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  {
                    icon: <Mail className="h-5 w-5 text-green-600" />,
                    label: "Email",
                    value: "info@nghean-historical.vn",
                  },
                  {
                    icon: <Phone className="h-5 w-5 text-green-600" />,
                    label: "Điện thoại",
                    value: "+84 238 1234 567",
                  },
                  {
                    icon: <MapPin className="h-5 w-5 text-green-600" />,
                    label: "Địa chỉ",
                    value: "Thành phố Vinh, Nghệ An, Việt Nam",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <h4 className="font-medium text-green-800">{item.label}</h4>
                      <p className="text-sm text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Useful links */}
            <Card className="border-green-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-100 to-red-50">
                <CardTitle className="text-lg font-semibold text-green-800">Liên kết hữu ích</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                {[
                  { href: "https://dulich.nghean.gov.vn", label: "Sở Du lịch Nghệ An" },
                  { href: "https://www.vietnamtourism.gov.vn", label: "Cục Du lịch Quốc gia Việt Nam" },
                  { href: "https://www.nghean.gov.vn", label: "UBND tỉnh Nghệ An" },
                  { href: "https://www.baonghean.vn", label: "Báo Nghệ An" },
                ].map((link, idx) => (
                  <div key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 hover:text-green-800 hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="border-green-100 shadow-lg bg-green-50">
              <CardContent className="p-6 space-y-4 text-center">
                <h3 className="text-lg font-semibold text-green-800">Khám phá ngay</h3>
                <p className="text-sm text-gray-600">
                  Bắt đầu hành trình khám phá di sản lịch sử Nghệ An với những trải nghiệm đáng nhớ
                </p>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800 flex items-center gap-2"
                >
                  <Link href="/historical-sites">
                    Xem tất cả điểm đến <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}