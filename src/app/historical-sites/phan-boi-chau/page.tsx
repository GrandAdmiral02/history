import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PhanBoiChauMemorialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://nguoinghe.vn/uploads/images/2023/11/13/z-1699862772.jpg"
          alt="Khu lưu niệm Phan Bội Châu"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Khu Lưu Niệm Phan Bội Châu</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử quốc gia đặc biệt, nơi tri ân nhà chí sĩ yêu nước Phan Bội Châu
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
            <span className="text-foreground">Khu Lưu Niệm Phan Bội Châu</span>
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
                <TabsTrigger value="attractions">Kiến trúc</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Hoạt động</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Khu Lưu Niệm Phan Bội Châu</h2>
                  <p>
                    <strong>Khu Lưu Niệm Phan Bội Châu</strong> là một di tích lịch sử quốc gia đặc biệt, nằm tại thị trấn Nam Đàn và xã Xuân Hòa, huyện Nam Đàn, tỉnh Nghệ An. Đây là nơi gắn bó với cuộc đời của nhà chí sĩ yêu nước Phan Bội Châu, một trong những nhân vật tiêu biểu của phong trào giải phóng dân tộc Việt Nam đầu thế kỷ XX.
                  </p>
                  <p>
                    Khu lưu niệm bao gồm hai địa điểm chính cách nhau khoảng 1,5km: quê nội (làng Đan Nhiệm, xã Xuân Hòa) và quê ngoại (làng Sa Nam, thị trấn Nam Đàn). Nơi đây không chỉ là không gian tưởng niệm mà còn là điểm đến văn hóa tâm linh, giáo dục truyền thống yêu nước cho các thế hệ.
                  </p>
                  <p>
                    Với diện tích hơn 5.000m², khu lưu niệm thu hút hàng ngàn lượt khách trong và ngoài nước mỗi năm, đặc biệt là những người muốn tìm hiểu về cuộc đời và sự nghiệp cách mạng của cụ Phan.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://cms.baotangnghean.baotangso.com/DataFiles/2024/01/Places/20240117-102022-bQ466C4d.webp"
                        alt="Nhà lưu niệm Phan Bội Châu"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://lh3.googleusercontent.com/proxy/1hcVhIVB_PLV6ajrw_BiMFxqDYS8sRaOdrqqewnIHKub5YLQNr9O_G09wLkhxAz9sebkCcv8ACSi_zF6_s2-10GM35HXPdnh4Pv0Z-g47A"
                        alt="Tượng đài Phan Bội Châu"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Thị trấn Nam Đàn và xã Xuân Hòa, huyện Nam Đàn, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 20km về phía tây nam</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 7h00 đến 17h00</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc Khu Lưu Niệm Phan Bội Châu</h2>

                  <h3>1. Quê ngoại - Thị trấn Nam Đàn</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://dulichvn.org.vn/nhaptin/uploads/images/khuluuniem-pbc.jpg"
                      alt="Nhà lưu niệm tại quê ngoại"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Khu lưu niệm tại quê ngoại có diện tích khoảng 4.878m², gồm các hạng mục chính như:
                  </p>
                  <ul>
                    <li><strong>Nhà lưu niệm:</strong> Gồm hai ngôi nhà tranh kiểu chữ L, được xây dựng theo kiến trúc truyền thống xứ Nghệ thế kỷ XIX. Nhà trên (46,11m²) và nhà dưới (42,32m²) được làm bằng gỗ, lợp tranh, vách phên nứa, lưu giữ các hiện vật như phản gỗ, án thư, cối xay lúa, khung cửi.</li>
                    <li><strong>Nhà tưởng niệm:</strong> Công trình tri ân của cựu giáo viên và học sinh Trường THPT Chuyên Phan Bội Châu, nơi đặt bàn thờ và tổ chức các nghi lễ tưởng niệm.</li>
                    <li><strong>Nhà trưng bày:</strong> Diện tích 100m², trưng bày hơn 134 hiện vật, tài liệu, ảnh tư liệu về cuộc đời và sự nghiệp của cụ Phan.</li>
                    <li><strong>Tượng đài Phan Bội Châu:</strong> Được khánh thành năm 2020, cao 3m, làm bằng đồng, đặt trên bệ đá hộc cao 2m, thể hiện sự uy nghiêm và cốt cách của cụ Phan.</li>
                  </ul>

                  <h3>2. Quê nội - Xã Xuân Hòa</h3>
                  <p>
                    Khu lưu niệm tại quê nội có diện tích 754m², gồm:
                  </p>
                  <ul>
                    <li><strong>Nhà bia tưởng niệm:</strong> Đánh dấu vị trí ngôi nhà cũ của gia đình cụ Phan, nay đã được chuyển về quê ngoại.</li>
                    <li><strong>Sân vườn:</strong> Trồng các loại cây ăn quả như chuối, ổi, xoài, bưởi, tạo không gian xanh mát, đậm chất làng quê.</li>
                    <li><strong>Cổng và tường bao:</strong> Được xây dựng hài hòa, bảo vệ không gian di tích.</li>
                  </ul>

                  <h3>3. Hiện vật quý giá</h3>
                  <p>
                    Khu lưu niệm lưu giữ nhiều hiện vật quý giá, bao gồm:
                  </p>
                  <ul>
                    <li>Phản gỗ, án thư, cối xay lúa, khung cửi của gia đình cụ Phan.</li>
                    <li>Hàng trăm bức ảnh tư liệu và tài liệu khoa học về phong trào Đông Du, Duy Tân Hội, Việt Nam Quang Phục Hội.</li>
                    <li>Bia đá và các đồ thờ cúng tại nhà tưởng niệm.</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Khu Lưu Niệm Phan Bội Châu</h2>

                  <p>
                    Khu lưu niệm được xây dựng để tri ân và tưởng nhớ nhà chí sĩ yêu nước Phan Bội Châu (1867-1940), người đã dành cả cuộc đời cho sự nghiệp giải phóng dân tộc.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>1867:</strong> Phan Bội Châu sinh ngày 26/12/1867 tại làng Sa Nam, huyện Nam Đàn, tỉnh Nghệ An.</li>
                    <li><strong>1904:</strong> Thành lập Duy Tân Hội, khởi đầu phong trào yêu nước bạo động.</li>
                    <li><strong>1905-1908:</strong> Sống tại Nhật Bản, phát động phong trào Đông Du, đưa thanh niên Việt Nam du học.</li>
                    <li><strong>1912:</strong> Thành lập Việt Nam Quang Phục Hội tại Trung Quốc, tiếp tục con đường đấu tranh.</li>
                    <li><strong>1925:</strong> Bị thực dân Pháp bắt tại Thượng Hải, đưa về an trí tại Huế.</li>
                    <li><strong>1940:</strong> Cụ Phan qua đời ngày 29/10/1940 tại Huế.</li>
                    <li><strong>1990:</strong> Ngôi nhà tranh của gia đình cụ được chuyển từ quê nội về quê ngoại để bảo vệ khỏi lũ lụt.</li>
                    <li><strong>2016:</strong> Khu lưu niệm được công nhận là Di tích lịch sử quốc gia đặc biệt.</li>
                    <li><strong>2020:</strong> Khánh thành tượng đài Phan Bội Châu tại quê ngoại.</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Khu lưu niệm không chỉ là nơi lưu giữ ký ức về cuộc đời và sự nghiệp của cụ Phan mà còn là biểu tượng của tinh thần yêu nước, bất khuất của dân tộc Việt Nam. Đây là nơi giáo dục truyền thống cách mạng, thể hiện đạo lý “uống nước nhớ nguồn”.
                  </p>
                  <p>
                    Ngôi nhà của cụ Phan từng là nơi hội tụ các sĩ phu yêu nước, trong đó có cụ Nguyễn Sinh Sắc - thân sinh Chủ tịch Hồ Chí Minh, góp phần hình thành tư tưởng cứu nước trong Bác Hồ.[](https://dsvh.gov.vn/di-tich-lich-su-khu-luu-niem-phan-boi-chau-tai-nam-dan-1592)[](https://dulichnamdan.nghean.gov.vn/vi/nhatuongniemphanboichau)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động tại Khu Lưu Niệm Phan Bội Châu</h2>

                  <h3>Lễ hội truyền thống</h3>
                  <p>
                    Khu lưu niệm tổ chức hai lễ trọng hàng năm, thu hút đông đảo người dân và du khách:
                  </p>
                  <ul>
                    <li><strong>Lễ kỷ niệm ngày sinh (26/12):</strong> Tưởng niệm ngày sinh của cụ Phan Bội Châu với các nghi thức dâng hương, dâng hoa trang trọng.</li>
                    <li><strong>Lễ kỷ niệm ngày mất (29/10):</strong> Tổ chức lễ giỗ để tri ân công lao của cụ, đặc biệt lễ giỗ lần thứ 80 (2020) kết hợp khánh thành tượng đài.</li>
                  </ul>
                  <p>
                    Ngoài ra, các ngày lễ truyền thống như Tết Nguyên Đán, Thượng Nguyên, Trung Nguyên, và ngày sóc vọng hàng tháng cũng thu hút nhiều người dân đến dâng hương.
                  </p>

                  <h3>Hoạt động tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (1-2 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:30:</strong> Tham quan nhà lưu niệm và sân vườn tại quê ngoại</li>
                      <li><strong>08:30 - 09:00:</strong> Tham quan nhà trưng bày, tìm hiểu hiện vật và tài liệu về cụ Phan</li>
                      <li><strong>09:00 - 09:30:</strong> Dâng hương tại nhà tưởng niệm và chụp ảnh tại tượng đài</li>
                      <li><strong>09:30 - 10:00:</strong> Di chuyển đến quê nội, tham quan nhà bia và khuôn viên</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Tháng 10-12 khi thời tiết mát mẻ, hoặc dịp lễ kỷ niệm ngày sinh/mất của cụ Phan.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, kín đáo khi vào khu tưởng niệm.</li>
                    <li><strong>Lưu ý:</strong> Giữ gìn vệ sinh, không xả rác để bảo vệ cảnh quan di tích.</li>
                    <li><strong>Cách di chuyển:</strong> Từ thành phố Vinh, đi theo Quốc lộ 46 khoảng 20km đến thị trấn Nam Đàn, sau đó theo biển chỉ dẫn đến khu lưu niệm.</li>
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
                  <p className="text-sm text-muted-foreground">Thị trấn Nam Đàn và xã Xuân Hòa, huyện Nam Đàn, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">Hàng ngày: 7h00 - 17h00</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3872 XXX</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Khu Lưu Niệm</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 46 khoảng 20km đến thị trấn Nam Đàn, sau đó theo biển chỉ dẫn đến khu lưu niệm. Từ thị trấn Nam Đàn, di chuyển thêm 1,5km để đến khu vực quê nội tại xã Xuân Hòa.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thuận tiện để di chuyển giữa hai địa điểm quê nội và quê ngoại</li>
                    <li>Taxi: Giá khoảng 200.000 - 250.000 VNĐ cho chuyến đi từ Vinh</li>
                    <li>Xe buýt: Có tuyến xe buýt từ Vinh đến Nam Đàn, sau đó đi xe ôm đến di tích</li>
                    <li>Tour du lịch: Nhiều công ty tổ chức tour kết hợp tham quan khu lưu niệm và các di tích lân cận</li>
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
                    <span className="font-medium block">Khu di tích Kim Liên</span>
                    Quê hương Chủ tịch Hồ Chí Minh (cách khoảng 10km)
                  </li>
                  <li>
                    <span className="font-medium block">Mộ bà Hoàng Thị Loan</span>
                    Mộ mẹ Chủ tịch Hồ Chí Minh trên núi Động Tranh (cách khoảng 15km)
                  </li>
                  <li>
                    <span className="font-medium block">Làng Sen</span>
                    Nơi gắn bó với tuổi thơ của Bác Hồ (cách khoảng 10km)
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