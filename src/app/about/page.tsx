import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://images.pexels.com/photos/6130344/pexels-photo-6130344.jpeg"
          alt="Nghệ An"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Giới Thiệu</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Về dự án du lịch lịch sử Nghệ An và sứ mệnh bảo tồn di sản văn hóa
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
            <span className="text-foreground">Giới thiệu</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div className="prose prose-lg max-w-none">
              <h2>Về Dự Án Nghệ An Historical</h2>
              <p>
                <strong>Nghệ An Historical</strong> là dự án được xây dựng với
                mục đích giới thiệu, quảng bá và tôn vinh những giá trị lịch sử,
                văn hóa đặc sắc của vùng đất xứ Nghệ đến với du khách trong nước
                và quốc tế.
              </p>
              <p>
                Dự án ra đời từ tình yêu và niềm tự hào đối với mảnh đất địa
                linh nhân kiệt, nơi có lịch sử hình thành và phát triển lâu đời,
                gắn liền với nhiều sự kiện trọng đại trong tiến trình lịch sử
                dân tộc Việt Nam.
              </p>
              <p>
                Thông qua nền tảng website hiện đại và thân thiện với người
                dùng, chúng tôi mong muốn mang đến những thông tin chi tiết, hấp
                dẫn và đáng tin cậy về các di tích lịch sử, danh lam thắng cảnh,
                và những trải nghiệm du lịch đáng nhớ tại Nghệ An.
              </p>

              <h2>Nghệ An - Vùng Đất Địa Linh Nhân Kiệt</h2>
              <div className="relative h-80 rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.pexels.com/photos/28999550/pexels-photo-28999550.jpeg"
                  alt="Nghệ An - Vùng đất địa linh nhân kiệt"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                Nghệ An là một tỉnh nằm ở khu vực Bắc Trung Bộ của Việt Nam, có
                diện tích lớn thứ 4 cả nước với hơn 16.000 km². Với vị trí địa
                lý đặc biệt, Nghệ An vừa có núi cao, đồng bằng, vừa có biển và
                hải đảo, tạo nên một vùng đất có cảnh quan thiên nhiên đa dạng
                và phong phú.
              </p>
              <p>
                Nghệ An được mệnh danh là "đất học", "đất võ" và "địa linh nhân
                kiệt" khi đã sản sinh ra nhiều danh nhân, anh hùng dân tộc, nhà
                cách mạng kiệt xuất như: Chủ tịch Hồ Chí Minh, Phan Bội Châu,
                Phan Đình Phùng và nhiều anh hùng, liệt sĩ khác đã cống hiến, hy
                sinh cho sự nghiệp đấu tranh giải phóng dân tộc và xây dựng đất
                nước.
              </p>
              <p>
                Với gần 1.400 di tích lịch sử văn hóa, trong đó có 375 di tích
                đã được xếp hạng cấp quốc gia đặc biệt, cấp quốc gia và cấp
                tỉnh, Nghệ An là "bảo tàng sống" về lịch sử và văn hóa Việt Nam.
                Mỗi di tích đều mang trong mình những câu chuyện, những giá trị
                đặc sắc về lịch sử, văn hóa, tín ngưỡng của người dân xứ Nghệ
                nói riêng và dân tộc Việt Nam nói chung.
              </p>

              <h2>Ý Nghĩa Của Việc Bảo Tồn Di Sản Lịch Sử</h2>
              <p>
                Di sản lịch sử và văn hóa là tài sản vô giá của mỗi dân tộc, là
                chứng nhân của quá khứ, là cầu nối giữa các thế hệ, và là nguồn
                lực quý báu cho sự phát triển bền vững trong tương lai.
              </p>
              <p>
                Bảo tồn di sản lịch sử không chỉ là gìn giữ những công trình,
                hiện vật vật chất mà còn là bảo tồn những giá trị tinh thần, tri
                thức, kỹ năng và những truyền thống tốt đẹp của cha ông ta.
              </p>
              <p>
                Việc bảo tồn di sản lịch sử có ý nghĩa quan trọng trong việc:
              </p>
              <ul>
                <li>
                  Giáo dục thế hệ trẻ về truyền thống lịch sử, văn hóa và tinh
                  thần yêu nước của dân tộc
                </li>
                <li>
                  Phát triển du lịch bền vững, tạo việc làm và thu nhập cho
                  người dân địa phương
                </li>
                <li>
                  Nghiên cứu khoa học về lịch sử, văn hóa, kiến trúc và nghệ
                  thuật truyền thống
                </li>
                <li>Tăng cường bản sắc dân tộc và niềm tự hào dân tộc</li>
                <li>
                  Thúc đẩy giao lưu, hợp tác quốc tế trong lĩnh vực văn hóa, du
                  lịch
                </li>
              </ul>

              <h2>Mục Đích Của Website Nghệ An Historical</h2>
              <p>
                Website Nghệ An Historical được xây dựng với các mục đích chính
                sau:
              </p>
              <ol>
                <li>
                  <strong>Cung cấp thông tin chi tiết và đáng tin cậy</strong>{" "}
                  về các di tích lịch sử, danh lam thắng cảnh tại Nghệ An, giúp
                  du khách có được hiểu biết sâu sắc về giá trị lịch sử, văn hóa
                  của từng địa điểm.
                </li>
                <li>
                  <strong>Quảng bá và giới thiệu</strong> vẻ đẹp và sự phong phú
                  của di sản văn hóa, lịch sử Nghệ An đến với du khách trong
                  nước và quốc tế.
                </li>
                <li>
                  <strong>Hỗ trợ và hướng dẫn du khách</strong> trong việc lập
                  kế hoạch, lịch trình tham quan các điểm di tích lịch sử tại
                  Nghệ An một cách hiệu quả.
                </li>
                <li>
                  <strong>Kết nối cộng đồng</strong> những người yêu thích lịch
                  sử, văn hóa và du lịch, tạo diễn đàn chia sẻ kinh nghiệm, cảm
                  nhận sau mỗi chuyến đi.
                </li>
                <li>
                  <strong>Góp phần bảo tồn và phát huy</strong> giá trị di sản
                  văn hóa, lịch sử của dân tộc thông qua việc nâng cao nhận thức
                  của cộng đồng về tầm quan trọng của các di tích.
                </li>
              </ol>

              <h2>Đội Ngũ Phát Triển</h2>
              <p>
                Đội ngũ phát triển website Nghệ An Historical bao gồm các chuyên
                gia trong lĩnh vực lịch sử, văn hóa, du lịch và công nghệ thông
                tin, cùng chung tâm huyết và khát vọng giới thiệu, quảng bá vẻ
                đẹp lịch sử, văn hóa của quê hương Nghệ An đến với bạn bè trong
                nước và quốc tế.
              </p>
              <p>
                Chúng tôi cam kết không ngừng cập nhật, bổ sung thông tin và cải
                tiến giao diện, tính năng của website để mang đến trải nghiệm
                tốt nhất cho người dùng.
              </p>
              <p>
                Mọi góp ý, phản hồi của quý độc giả là nguồn động viên quý báu
                giúp chúng tôi hoàn thiện website ngày một tốt hơn. Vui lòng
                liên hệ với chúng tôi qua thông tin bên dưới.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Contact information */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Thông tin liên hệ
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    info@nghean-historical.vn
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Điện thoại</h4>
                  <p className="text-sm text-muted-foreground">
                    +84 238 1234 567
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Địa chỉ</h4>
                  <p className="text-sm text-muted-foreground">
                    Thành phố Vinh, Nghệ An, Việt Nam
                  </p>
                </div>
              </div>
            </div>

            {/* Useful links */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Liên kết hữu ích
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://dulich.nghean.gov.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 hover:underline"
                    >
                      Sở Du lịch Nghệ An
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.vietnamtourism.gov.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 hover:underline"
                    >
                      Cục Du lịch Quốc gia Việt Nam
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nghean.gov.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 hover:underline"
                    >
                      UBND tỉnh Nghệ An
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.baonghean.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 hover:underline"
                    >
                      Báo Nghệ An
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to action */}
            <div className="border rounded-lg overflow-hidden bg-green-50">
              <div className="p-6 space-y-4 text-center">
                <h3 className="text-lg font-semibold text-green-800">
                  Khám phá ngay
                </h3>
                <p className="text-sm text-muted-foreground">
                  Bắt đầu hành trình khám phá di sản lịch sử Nghệ An với những
                  trải nghiệm đáng nhớ
                </p>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href="/historical-sites">Xem tất cả điểm đến</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
