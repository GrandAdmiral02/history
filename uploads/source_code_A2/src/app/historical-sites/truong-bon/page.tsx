import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TruongBonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
          alt="Di tích lịch sử Truông Bồn"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Di Tích Lịch Sử Truông Bồn</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Nơi tưởng nhớ sự hy sinh anh dũng của các chiến sĩ thanh niên xung phong
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
            <span className="text-foreground">Truông Bồn</span>
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
                  <h2>Giới thiệu Di tích lịch sử Truông Bồn</h2>
                  <p>
                    <strong>Di tích lịch sử Truông Bồn</strong> nằm trên Quốc lộ 15A, thuộc xã Mỹ Sơn, huyện Đô Lương, tỉnh Nghệ An. Đây là một di tích lịch sử cách mạng cấp quốc gia, ghi nhận những hy sinh anh dũng của các chiến sĩ thanh niên xung phong trong thời kỳ chống Mỹ cứu nước.
                  </p>
                  <p>
                    Truông Bồn là một đèo dốc hiểm trở trên tuyến đường Hồ Chí Minh huyền thoại, từng là nơi diễn ra nhiều trận đánh ác liệt giữa quân và dân ta với không quân Mỹ. Đặc biệt, vào ngày 31/10/1968, 13 chiến sĩ thanh niên xung phong đã anh dũng hy sinh khi đang làm nhiệm vụ sửa chữa đường để đảm bảo giao thông thông suốt phục vụ chi viện cho chiến trường.
                  </p>
                  <p>
                    Ngày nay, di tích Truông Bồn đã trở thành biểu tượng của tinh thần "quyết tử để Tổ quốc quyết sinh", là địa điểm giáo dục truyền thống cách mạng cho thế hệ trẻ và thu hút nhiều du khách trong và ngoài nước đến tham quan, tưởng niệm.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                        alt="Tượng đài Truông Bồn"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/1771483245.jpeg"
                        alt="Khu di tích Truông Bồn"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Quốc lộ 15A, xã Mỹ Sơn, huyện Đô Lương, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 50km về phía tây bắc</li>
                    <li><strong>Giờ mở cửa:</strong> 7h đến 17h hàng ngày</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm tham quan tại Di tích Truông Bồn</h2>

                  <h3>1. Tượng đài Truông Bồn</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                      alt="Tượng đài Truông Bồn"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Tượng đài Truông Bồn là công trình nghệ thuật điêu khắc đặc sắc, được xây dựng trên đỉnh đồi cao, tượng trưng cho sức mạnh, tinh thần và ý chí kiên cường của các chiến sĩ thanh niên xung phong. Từ đây, du khách có thể phóng tầm mắt nhìn toàn cảnh khu vực Truông Bồn với những đồi núi trùng điệp và con đường Trường Sơn huyền thoại.
                  </p>

                  <h3>2. Nhà bia tưởng niệm</h3>
                  <p>
                    Nhà bia tưởng niệm được xây dựng để ghi danh và tưởng nhớ 13 chiến sĩ thanh niên xung phong đã hy sinh ngày 31/10/1968. Bên trong nhà bia là không gian linh thiêng, nơi du khách có thể dâng hương, thắp nến tưởng nhớ các anh hùng liệt sĩ.
                  </p>

                  <h3>3. Khu trưng bày hiện vật</h3>
                  <p>
                    Khu trưng bày lưu giữ nhiều hiện vật, tài liệu, hình ảnh quý giá về hoạt động của lực lượng thanh niên xung phong và những trận đánh ác liệt đã diễn ra tại Truông Bồn trong thời kỳ chống Mỹ. Qua đó, du khách có thể hiểu rõ hơn về lịch sử hào hùng của khu di tích.
                  </p>

                  <h3>4. Đường Hồ Chí Minh huyền thoại</h3>
                  <p>
                    Đoạn đường Truông Bồn là một phần của tuyến đường Trường Sơn - Hồ Chí Minh lịch sử, đã góp phần quan trọng vào thắng lợi của cuộc kháng chiến chống Mỹ. Hiện nay, con đường này đã được nâng cấp, nhưng vẫn giữ được những dấu ấn lịch sử đặc biệt.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Di tích Truông Bồn</h2>

                  <p>
                    Truông Bồn là một địa danh gắn liền với những trang sử hào hùng của dân tộc trong cuộc kháng chiến chống Mỹ cứu nước. Đây là một đoạn đèo dốc hiểm trở nằm trên tuyến đường Trường Sơn - Hồ Chí Minh, có vị trí chiến lược quan trọng trong việc vận chuyển hàng hóa, vũ khí từ hậu phương miền Bắc vào chiến trường miền Nam.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>1965-1972:</strong> Truông Bồn trở thành một trong những điểm tập trung ném bom ác liệt nhất của không quân Mỹ nhằm cắt đứt tuyến đường chi viện cho miền Nam.</li>
                    <li><strong>Năm 1968:</strong> Lực lượng thanh niên xung phong Nghệ An được giao nhiệm vụ bảo đảm giao thông thông suốt trên tuyến đường Hồ Chí Minh, trong đó có đoạn Truông Bồn.</li>
                    <li><strong>Ngày 31/10/1968:</strong> Trong một trận bom B52 của Mỹ, 13 chiến sĩ thanh niên xung phong thuộc Đại đội 317, Tổng đội Thanh niên xung phong Nghệ An đã anh dũng hy sinh khi đang thực hiện nhiệm vụ san lấp hố bom, đảm bảo giao thông.</li>
                    <li><strong>Năm 1976:</strong> Truông Bồn được công nhận là di tích lịch sử cấp tỉnh.</li>
                    <li><strong>Năm 1994:</strong> Khu di tích được công nhận là di tích lịch sử cấp quốc gia.</li>
                    <li><strong>Năm 2000:</strong> Tượng đài Truông Bồn được khánh thành, trở thành biểu tượng của tinh thần hy sinh anh dũng vì Tổ quốc.</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Di tích lịch sử Truông Bồn không chỉ là nơi ghi dấu những hy sinh cao cả của các chiến sĩ thanh niên xung phong, mà còn là biểu tượng của tinh thần "sống bám đường, chết kiên cường, đường thông ta tiến quân thành công", tiêu biểu cho chủ nghĩa anh hùng cách mạng Việt Nam trong thời kỳ chống Mỹ.
                  </p>
                  <p>
                    Hàng năm, vào dịp 31/10, tại Khu di tích đều diễn ra lễ tưởng niệm trọng thể để tưởng nhớ sự hy sinh của 13 chiến sĩ thanh niên xung phong và tất cả những người con ưu tú của dân tộc đã ngã xuống tại Truông Bồn. Sự kiện này thu hút đông đảo người dân, đặc biệt là thế hệ trẻ, đến dâng hương, tưởng niệm và học hỏi truyền thống cách mạng vẻ vang.
                  </p>
                  <p>
                    Việc bảo tồn và phát huy giá trị của Di tích Truông Bồn có ý nghĩa quan trọng trong việc giáo dục truyền thống yêu nước, tinh thần dũng cảm hy sinh vì độc lập, tự do của Tổ quốc cho các thế hệ mai sau.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động và trải nghiệm tại Di tích Truông Bồn</h2>

                  <h3>Các hoạt động chính</h3>
                  <ol>
                    <li>
                      <strong>Tham quan và tìm hiểu lịch sử:</strong> Du khách có thể tham quan các công trình trong khu di tích, tìm hiểu về lịch sử hào hùng của Truông Bồn và những hy sinh của các chiến sĩ thanh niên xung phong.
                    </li>
                    <li>
                      <strong>Dâng hương tưởng niệm:</strong> Tại nhà bia tưởng niệm, du khách có thể dâng hương, tưởng nhớ 13 chiến sĩ thanh niên xung phong và các anh hùng liệt sĩ đã hy sinh tại Truông Bồn.
                    </li>
                    <li>
                      <strong>Ngắm cảnh từ tượng đài:</strong> Từ tượng đài Truông Bồn, du khách có thể ngắm nhìn toàn cảnh khu vực với những đồi núi trùng điệp và con đường Trường Sơn lịch sử.
                    </li>
                    <li>
                      <strong>Tham gia các hoạt động giáo dục truyền thống:</strong> Đặc biệt dành cho học sinh, sinh viên khi tham gia các chương trình về nguồn, giáo dục truyền thống cách mạng.
                    </li>
                    <li>
                      <strong>Tham gia sự kiện đặc biệt:</strong> Vào ngày 31/10 hàng năm, khu di tích tổ chức lễ tưởng niệm trọng thể với nhiều hoạt động ý nghĩa.
                    </li>
                  </ol>

                  <h3>Lịch trình tham quan gợi ý</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình nửa ngày (2-3 giờ)</h4>
                    <ol>
                      <li><strong>09:00 - 09:30:</strong> Tham quan khu trưng bày hiện vật, tìm hiểu lịch sử Truông Bồn</li>
                      <li><strong>09:30 - 10:00:</strong> Dâng hương tại nhà bia tưởng niệm</li>
                      <li><strong>10:00 - 10:30:</strong> Thăm tượng đài Truông Bồn và ngắm cảnh từ trên cao</li>
                      <li><strong>10:30 - 11:00:</strong> Tham quan đoạn đường Trường Sơn lịch sử</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Mùa xuân (tháng 2-4) và mùa thu (tháng 9-11) khi thời tiết mát mẻ, dễ chịu.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, kín đáo và thoải mái khi tham quan khu di tích.</li>
                    <li><strong>Lưu ý:</strong> Giữ gìn vệ sinh chung, thể hiện sự tôn trọng đối với di tích lịch sử và các anh hùng liệt sĩ.</li>
                    <li><strong>Kết hợp tham quan:</strong> Có thể kết hợp tham quan Truông Bồn với các điểm du lịch lân cận như Đền Quả Sơn, Đền Hữu (Nam Đàn) để có hành trình ý nghĩa hơn.</li>
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
                  <p className="text-sm text-muted-foreground">Quốc lộ 15A, xã Mỹ Sơn, huyện Đô Lương, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">7h - 17h hàng ngày</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3862 xxx</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Di tích</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 7 đến thị trấn Đô Lương, sau đó rẽ vào Quốc lộ 15A và tiếp tục di chuyển đến Truông Bồn. Tổng quãng đường khoảng 50km.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thuận tiện để tự do khám phá</li>
                    <li>Taxi: Giá khoảng 500.000 - 600.000 VNĐ cho chuyến đi 2 chiều từ Vinh</li>
                    <li>Xe buýt: Có tuyến xe buýt từ Vinh đi Đô Lương, sau đó đi xe ôm đến khu di tích</li>
                    <li>Tour du lịch: Nhiều công ty lữ hành tổ chức tour tham quan Truông Bồn</li>
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
                    <span className="font-medium block">Đền Quả Sơn</span>
                    Di tích lịch sử văn hóa cấp quốc gia thờ Mai Hắc Đế (cách khoảng 15km)
                  </li>
                  <li>
                    <span className="font-medium block">Chùa Đọi Sơn</span>
                    Ngôi chùa cổ với kiến trúc truyền thống (cách khoảng 20km)
                  </li>
                  <li>
                    <span className="font-medium block">Đền Hữu</span>
                    Di tích lịch sử tại huyện Nam Đàn (cách khoảng 25km)
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
