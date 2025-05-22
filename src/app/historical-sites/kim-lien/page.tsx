import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function KimLienPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/4052699563/4264775910.jpeg"
          alt="Khu di tích lịch sử Kim Liên"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Khu Di Tích Kim Liên</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Quê hương Chủ tịch Hồ Chí Minh - Di tích lịch sử cấp quốc gia đặc biệt
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
            <Link href="/historical-sites" className="hover:text-foreground">
              Điểm đến
            </Link>
            <span>/</span>
            <span className="text-foreground">Khu di tích Kim Liên</span>
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
                <TabsTrigger value="attractions">Điểm tham quan</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Hoạt động</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Khu di tích Kim Liên</h2>
                  <p>
                    <strong>Khu di tích Kim Liên</strong> là một di tích lịch sử cấp quốc gia đặc biệt, nằm tại xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Đây là quê hương của Chủ tịch Hồ Chí Minh - vị lãnh tụ vĩ đại của dân tộc Việt Nam.
                  </p>
                  <p>
                    Khu di tích Kim Liên bao gồm nhiều điểm tham quan quan trọng như Làng Sen (nơi Bác Hồ sinh ra và sống những năm tháng tuổi thơ), làng Hoàng Trù (quê ngoại của Bác), nhà tưởng niệm Chủ tịch Hồ Chí Minh và nhiều hiện vật, tài liệu quý giá khác.
                  </p>
                  <p>
                    Với không gian rộng lớn, môi trường trong lành và nhiều công trình kiến trúc độc đáo, Khu di tích Kim Liên đã và đang trở thành điểm đến hấp dẫn, thu hút hàng triệu lượt du khách trong và ngoài nước mỗi năm, đặc biệt là trong các dịp lễ quan trọng như ngày sinh nhật Bác (19/5) và ngày Quốc khánh (2/9).
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Làng Sen quê Bác"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/2493542445.jpeg"
                        alt="Khu di tích Kim Liên"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 15km về phía tây</li>
                    <li><strong>Giờ mở cửa:</strong>
                      <ul>
                        <li>Mùa hè: Sáng từ 7h đến 11h30, chiều từ 13h30 đến 17h</li>
                        <li>Mùa đông: Sáng từ 7h30 đến 12h, chiều từ 13h30 đến 17h</li>
                      </ul>
                    </li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 2-3 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm tham quan trong Khu di tích Kim Liên</h2>

                  <h3>1. Làng Sen - Quê nội của Bác</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                      alt="Làng Sen quê Bác"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Làng Sen là nơi Chủ tịch Hồ Chí Minh sinh ra và lớn lên. Tại đây, du khách có thể tham quan ngôi nhà tranh ba gian nơi Bác được sinh ra, với các hiện vật nguyên bản được bảo tồn như giường tre, bàn, ghế, đèn dầu và nhiều vật dụng hàng ngày khác của gia đình Bác.
                  </p>
                  <p>
                    Xung quanh ngôi nhà là khung cảnh làng quê bình dị với ao sen, giếng nước, vườn cây ăn quả và cây bóng mát tạo nên không gian yên bình, gần gũi với thiên nhiên - nơi đã hình thành nên nhân cách cao đẹp của Chủ tịch Hồ Chí Minh.
                  </p>

                  <h3>2. Cụm di tích làng Hoàng Trù</h3>
                  <p>
                    Làng Hoàng Trù cách làng Kim Liên khoảng 2km, là quê ngoại của Bác Hồ. Tại đây, du khách có thể tham quan:
                  </p>
                  <ul>
                    <li>Nhà ông ngoại Bác - nơi Bác Hồ đã sống những năm đầu đời cùng gia đình</li>
                    <li>Khu vực Bác sinh học chữ và trưởng thành</li>
                    <li>Các hiện vật, tài liệu về cuộc đời và thời thơ ấu của Người</li>
                  </ul>

                  <h3>3. Khu lưu niệm Chủ tịch Hồ Chí Minh</h3>
                  <p>
                    Đây là khu trưng bày rộng lớn với nhiều hiện vật, hình ảnh, tài liệu quý giá về cuộc đời và sự nghiệp cách mạng của Chủ tịch Hồ Chí Minh, giúp du khách hiểu rõ hơn về hành trình vĩ đại của Người từ một người con của làng Sen đến vị lãnh tụ kính yêu của dân tộc Việt Nam.
                  </p>

                  <h3>4. Đền thờ Chủ tịch Hồ Chí Minh</h3>
                  <p>
                    Được xây dựng với kiến trúc truyền thống Việt Nam, đền thờ là nơi thể hiện lòng tôn kính và biết ơn sâu sắc của nhân dân đối với Chủ tịch Hồ Chí Minh. Không gian trang nghiêm, linh thiêng mang đến cho du khách cảm giác tĩnh lặng và tôn kính.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Khu di tích Kim Liên</h2>

                  <p>
                    Khu di tích Kim Liên có ý nghĩa lịch sử đặc biệt quan trọng, gắn liền với cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh - người anh hùng giải phóng dân tộc, danh nhân văn hóa thế giới.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>Năm 1890:</strong> Ngày 19/5, Nguyễn Sinh Cung (tên khai sinh của Chủ tịch Hồ Chí Minh) ra đời tại làng Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.</li>
                    <li><strong>1895-1900:</strong> Nguyễn Sinh Cung sống tại làng Hoàng Trù (quê ngoại) và bắt đầu học chữ tại đây.</li>
                    <li><strong>1901-1906:</strong> Nguyễn Sinh Cung theo cha (cụ Nguyễn Sinh Sắc) vào Huế và bắt đầu hành trình học tập.</li>
                    <li><strong>Năm 1941:</strong> Sau 30 năm xa Tổ quốc, Nguyễn Ái Quốc (Hồ Chí Minh) trở về Việt Nam để lãnh đạo cách mạng.</li>
                    <li><strong>Năm 1957:</strong> Chủ tịch Hồ Chí Minh về thăm quê hương Kim Liên, gặp gỡ bà con làng xóm.</li>
                    <li><strong>Năm 1969:</strong> Chủ tịch Hồ Chí Minh qua đời để lại niềm tiếc thương vô hạn cho toàn dân tộc Việt Nam và bạn bè quốc tế.</li>
                    <li><strong>Năm 1970:</strong> Khu di tích Kim Liên được công nhận là Di tích lịch sử cấp quốc gia.</li>
                    <li><strong>Năm 1992:</strong> Khu di tích được nâng cấp thành Di tích lịch sử cấp quốc gia đặc biệt.</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Khu di tích Kim Liên không chỉ là nơi lưu giữ những kỷ niệm về thời thơ ấu của Chủ tịch Hồ Chí Minh mà còn là biểu tượng của truyền thống yêu nước, tinh thần đấu tranh bất khuất của nhân dân Việt Nam.
                  </p>
                  <p>
                    Mỗi năm, hàng triệu lượt du khách trong nước và quốc tế đến thăm Khu di tích để tìm hiểu về cuộc đời, tư tưởng và những đóng góp to lớn của Chủ tịch Hồ Chí Minh đối với sự nghiệp cách mạng Việt Nam và phong trào giải phóng dân tộc trên thế giới.
                  </p>
                  <p>
                    Việc bảo tồn và phát huy giá trị của Khu di tích Kim Liên có ý nghĩa quan trọng trong việc giáo dục truyền thống cách mạng, lòng yêu nước và niềm tự hào dân tộc cho các thế hệ người Việt Nam, đặc biệt là thế hệ trẻ.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động và trải nghiệm tại Khu di tích Kim Liên</h2>

                  <h3>Các hoạt động chính</h3>
                  <ol>
                    <li>
                      <strong>Tham quan có hướng dẫn:</strong> Du khách có thể đăng ký tham quan theo nhóm với sự hướng dẫn của các thuyết minh viên chuyên nghiệp, am hiểu sâu sắc về lịch sử khu di tích.
                    </li>
                    <li>
                      <strong>Dâng hương tưởng niệm:</strong> Tại đền thờ Chủ tịch Hồ Chí Minh, du khách có thể dâng hương, tưởng nhớ vị lãnh tụ kính yêu của dân tộc.
                    </li>
                    <li>
                      <strong>Trải nghiệm không gian làng quê:</strong> Dạo bước trong không gian làng quê yên bình với những khóm tre, bờ ao, đồng ruộng và hàng cau, hàng dừa đặc trưng của làng quê Việt Nam.
                    </li>
                    <li>
                      <strong>Chụp ảnh lưu niệm:</strong> Ghi lại những khoảnh khắc đáng nhớ tại các địa điểm nổi bật trong khu di tích.
                    </li>
                    <li>
                      <strong>Tham gia các sự kiện đặc biệt:</strong> Vào các dịp lễ lớn như ngày sinh nhật Bác (19/5), Quốc khánh (2/9), khu di tích thường tổ chức nhiều hoạt động văn hóa, nghệ thuật đặc sắc.
                    </li>
                  </ol>

                  <h3>Lịch trình tham quan gợi ý</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình nửa ngày (3-4 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:30:</strong> Tham quan Khu lưu niệm Chủ tịch Hồ Chí Minh</li>
                      <li><strong>08:30 - 09:30:</strong> Khám phá làng Sen, tham quan ngôi nhà nơi Bác sinh ra</li>
                      <li><strong>09:30 - 10:30:</strong> Di chuyển và tham quan làng Hoàng Trù</li>
                      <li><strong>10:30 - 11:00:</strong> Dâng hương tại đền thờ Chủ tịch Hồ Chí Minh</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Mùa xuân (tháng 2-4) và mùa thu (tháng 9-11) khi thời tiết mát mẻ, dễ chịu.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, kín đáo khi tham quan khu di tích, đặc biệt khi vào đền thờ.</li>
                    <li><strong>Đi lại:</strong> Trong khu di tích có các điểm tham quan cách nhau khoảng 2km, du khách có thể đi bộ hoặc sử dụng dịch vụ xe điện.</li>
                    <li><strong>Hướng dẫn viên:</strong> Nên đăng ký hướng dẫn viên để hiểu sâu hơn về giá trị lịch sử, văn hóa của khu di tích.</li>
                    <li><strong>Lưu ý:</strong> Giữ gìn vệ sinh chung, không viết, vẽ lên các công trình, hiện vật trong khu di tích.</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8">
            {/* Practical information */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Thông tin thực tế</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Địa chỉ</h4>
                  <p className="text-sm text-muted-foreground">Xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">Mùa hè: 7h - 11h30, 13h30 - 17h</p>
                  <p className="text-sm text-muted-foreground">Mùa đông: 7h30 - 12h, 13h30 - 17h</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3861 477</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Khu di tích</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 46 về hướng tây, qua cầu Bến Thủy, đến ngã ba rẽ vào huyện Nam Đàn, sau đó theo biển chỉ dẫn đến Khu di tích Kim Liên. Tổng quãng đường khoảng 15km.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thuận tiện để tự do khám phá</li>
                    <li>Taxi: Giá khoảng 200.000 - 250.000 VNĐ cho chuyến đi 2 chiều từ Vinh</li>
                    <li>Xe buýt: Có tuyến xe buýt từ Vinh đi Nam Đàn, sau đó đi xe ôm đến khu di tích</li>
                    <li>Tour du lịch: Nhiều công ty lữ hành tổ chức tour tham quan Khu di tích Kim Liên</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby attractions */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Điểm tham quan lân cận</h3>
              </div>
              <div className="p-6 space-y-4">
                <ul className="text-sm text-muted-foreground space-y-3">
                  <li>
                    <span className="font-medium block">Mộ bà Hoàng Thị Loan</span>
                    Mộ thân mẫu Chủ tịch Hồ Chí Minh tại núi Động Tranh (cách khoảng 10km)
                  </li>
                  <li>
                    <span className="font-medium block">Đền Chung Sơn</span>
                    Di tích lịch sử thờ các nhân vật lịch sử và anh hùng dân tộc (cách khoảng 5km)
                  </li>
                  <li>
                    <span className="font-medium block">Núi Chung</span>
                    Danh thắng tự nhiên có cảnh quan đẹp (cách khoảng 7km)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
