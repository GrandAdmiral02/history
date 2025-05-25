import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ThanhCoVinhPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/4052699563/1395000329.jpeg"
          alt="Thành cổ Vinh"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thành Cổ Vinh</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử văn hóa cấp quốc gia - Chứng nhân lịch sử của thành phố Vinh
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
            <span className="text-foreground">Thành cổ Vinh</span>
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
                <TabsTrigger value="architecture">Kiến trúc</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Hoạt động</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Thành cổ Vinh</h2>
                  <p>
                    <strong>Thành cổ Vinh</strong>, còn được gọi là thành Nghệ An hay Vĩnh Thành, là một di tích lịch sử văn hóa cấp quốc gia nằm tại trung tâm thành phố Vinh, tỉnh Nghệ An. Đây là công trình quân sự cổ có ý nghĩa quan trọng trong lịch sử phòng thủ và phát triển của vùng đất xứ Nghệ.
                  </p>
                  <p>
                    Thành cổ Vinh được xây dựng vào thời nhà Nguyễn, là một trong những thành lũy kiên cố nhất ở miền Trung Việt Nam. Công trình này không chỉ có giá trị về mặt quân sự mà còn là biểu tượng của sự phát triển đô thị và hành chính của Nghệ An thời phong kiến.
                  </p>
                  <p>
                    Mặc dù đã trải qua nhiều biến cố lịch sử và hiện chỉ còn lại một số phần di tích, Thành cổ Vinh vẫn là điểm đến hấp dẫn, thu hút đông đảo du khách trong và ngoài nước đến tham quan, tìm hiểu về lịch sử và văn hóa của thành phố Vinh nói riêng và tỉnh Nghệ An nói chung.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/1395000329.jpeg"
                        alt="Thành cổ Vinh"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/3048232246.jpeg"
                        alt="Cổng Thành cổ Vinh"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Phường Cửa Nam, thành phố Vinh, tỉnh Nghệ An</li>
                    <li><strong>Khoảng cách:</strong> Nằm ở trung tâm thành phố Vinh</li>
                    <li><strong>Giờ mở cửa:</strong> Mở cửa tự do 24/7</li>
                    <li><strong>Lệ phí tham quan:</strong> Miễn phí</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="architecture" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc Thành cổ Vinh</h2>

                  <h3>1. Thiết kế tổng thể</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/4052699563/2936267580.jpeg"
                      alt="Sơ đồ Thành cổ Vinh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Thành cổ Vinh được xây dựng theo kiểu Vauban - một kiểu kiến trúc phòng thủ phổ biến của Pháp, nhưng có sự kết hợp với kiến trúc truyền thống Việt Nam. Thành có hình vuông, mỗi cạnh dài khoảng 400m, được bao quanh bởi tường thành cao khoảng 5m và hào nước rộng 20-25m.
                  </p>
                  <p>
                    Bốn góc thành có bốn pháo đài hình ngũ giác với các lỗ châu mai để đặt đại bác. Thành có bốn cổng chính theo bốn hướng: Đông, Tây, Nam, Bắc, mỗi cổng đều có cầu bắc qua hào nước và được canh gác nghiêm ngặt.
                  </p>

                  <h3>2. Cổng thành và tường thành</h3>
                  <p>
                    Cổng thành được xây bằng gạch nung, có kết cấu vòm kiên cố. Mỗi cổng có tên riêng: cổng Đông gọi là cửa Đông Môn, cổng Tây là Tây Môn, cổng Nam là Nam Môn và cổng Bắc là Bắc Môn. Trong đó, cổng Nam là cổng chính, có kiến trúc đồ sộ nhất với nhiều chi tiết trang trí tinh xảo.
                  </p>
                  <p>
                    Tường thành được xây bằng đá ong và gạch, có độ dày từ 3-4m ở phần chân tường, thu nhỏ dần lên trên cao. Phía trên tường thành có đường đi tuần tra rộng khoảng 1,5m, giúp lính canh dễ dàng di chuyển và quan sát.
                  </p>

                  <h3>3. Các công trình nội thành</h3>
                  <p>
                    Bên trong thành là một quần thể các công trình hành chính, quân sự bao gồm:
                  </p>
                  <ul>
                    <li><strong>Dinh Tổng đốc:</strong> Nơi làm việc của quan Tổng đốc Nghệ An, được xây dựng theo kiến trúc truyền thống Việt Nam với nhiều công trình phụ trợ xung quanh.</li>
                    <li><strong>Kho lương thực và vũ khí:</strong> Nơi dự trữ lương thực, vũ khí phục vụ cho việc phòng thủ thành.</li>
                    <li><strong>Doanh trại lính:</strong> Nơi ở và luyện tập của binh lính bảo vệ thành.</li>
                    <li><strong>Chùa, đền, miếu:</strong> Các công trình tín ngưỡng trong khuôn viên thành.</li>
                  </ul>

                  <h3>4. Hệ thống phòng thủ</h3>
                  <p>
                    Thành cổ Vinh có hệ thống phòng thủ hiện đại cho thời bấy giờ, bao gồm:
                  </p>
                  <ul>
                    <li>Hào nước bao quanh rộng 20-25m, sâu khoảng 3-4m</li>
                    <li>Pháo đài ở bốn góc thành với hệ thống đại bác</li>
                    <li>Lỗ châu mai trên tường thành để bố trí các vị trí bắn tỉa</li>
                    <li>Đường hầm bí mật nối các khu vực quan trọng trong thành</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Thành cổ Vinh</h2>

                  <p>
                    Thành cổ Vinh có lịch sử lâu đời, gắn liền với quá trình hình thành và phát triển của thành phố Vinh và tỉnh Nghệ An qua nhiều thời kỳ lịch sử.
                  </p>

                  <h3>Quá trình xây dựng và phát triển</h3>
                  <p>
                    Thành cổ Vinh được khởi công xây dựng vào năm 1804 dưới thời vua Gia Long (nhà Nguyễn), do Tổng trấn Bắc Thành Nguyễn Văn Thành chỉ đạo. Công trình được hoàn thành vào năm 1831 dưới thời vua Minh Mạng và được đặt tên là "Vĩnh Thành" - tiền thân của tên gọi thành phố Vinh ngày nay.
                  </p>
                  <p>
                    Ban đầu, thành được xây dựng bằng đất, sau đó được tôn tạo và xây dựng lại bằng gạch và đá vào năm 1842 dưới thời vua Thiệu Trị. Thành trở thành trung tâm hành chính, quân sự quan trọng của tỉnh Nghệ An và là nơi đóng quân của nhiều đơn vị quân đội triều Nguyễn.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>Năm 1804-1831:</strong> Thời gian xây dựng thành từ đất đến kiên cố hóa bằng gạch đá.</li>
                    <li><strong>Năm 1842:</strong> Thành được trùng tu lớn dưới thời vua Thiệu Trị.</li>
                    <li><strong>Năm 1885:</strong> Thành bị quân Pháp chiếm đóng trong cuộc xâm lược Việt Nam.</li>
                    <li><strong>Năm 1941-1945:</strong> Thành là nơi diễn ra nhiều hoạt động cách mạng của Việt Minh.</li>
                    <li><strong>Năm 1946-1954:</strong> Thành bị hư hại nặng trong chiến tranh chống Pháp.</li>
                    <li><strong>Năm 1964-1972:</strong> Thành tiếp tục bị tàn phá bởi bom đạn Mỹ trong chiến tranh.</li>
                    <li><strong>Năm 1995:</strong> Thành cổ Vinh được công nhận là Di tích lịch sử cấp tỉnh.</li>
                    <li><strong>Năm 2002:</strong> Thành được công nhận là Di tích lịch sử văn hóa cấp quốc gia.</li>
                  </ul>

                  <h3>Vai trò trong lịch sử</h3>
                  <p>
                    Thành cổ Vinh từng đóng vai trò quan trọng trong việc bảo vệ vùng đất Nghệ An trước các cuộc xâm lược từ bên ngoài. Đây cũng là nơi diễn ra nhiều sự kiện lịch sử quan trọng, đặc biệt là trong thời kỳ chống Pháp và chống Mỹ.
                  </p>
                  <p>
                    Trong thời kỳ kháng chiến chống Pháp và chống Mỹ, thành là căn cứ của nhiều lực lượng cách mạng và là nơi diễn ra nhiều trận đánh ác liệt. Nhiều người con ưu tú của quê hương Nghệ An đã anh dũng hy sinh trong các trận chiến bảo vệ thành.
                  </p>
                  <p>
                    Ngày nay, mặc dù chỉ còn lại một số phần di tích, Thành cổ Vinh vẫn là chứng nhân lịch sử quan trọng, góp phần giáo dục truyền thống yêu nước và tinh thần đấu tranh bất khuất của nhân dân Nghệ An nói riêng và dân tộc Việt Nam nói chung.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động và trải nghiệm tại Thành cổ Vinh</h2>

                  <h3>Các hoạt động chính</h3>
                  <ol>
                    <li>
                      <strong>Tham quan di tích:</strong> Du khách có thể tham quan các phần còn lại của thành như cổng Nam, một số đoạn tường thành và hào nước, tìm hiểu về kiến trúc và lịch sử của thành.
                    </li>
                    <li>
                      <strong>Bảo tàng Nghệ An:</strong> Nằm gần khu vực thành cổ, bảo tàng trưng bày nhiều hiện vật, tài liệu quý giá về lịch sử xây dựng và phát triển của Thành cổ Vinh cũng như tỉnh Nghệ An.
                    </li>
                    <li>
                      <strong>Chụp ảnh lưu niệm:</strong> Với kiến trúc độc đáo và giá trị lịch sử, Thành cổ Vinh là địa điểm lý tưởng để chụp ảnh lưu niệm, đặc biệt là vào buổi sáng sớm hoặc chiều tà.
                    </li>
                    <li>
                      <strong>Dạo bộ khám phá:</strong> Du khách có thể dạo bộ quanh khu vực thành, ngắm nhìn cảnh quan và tìm hiểu về đời sống, văn hóa của người dân địa phương.
                    </li>
                    <li>
                      <strong>Tham gia các hoạt động văn hóa:</strong> Vào các dịp lễ, tết hoặc kỷ niệm các ngày lễ lớn, tại khu vực thành thường diễn ra nhiều hoạt động văn hóa, nghệ thuật đặc sắc.
                    </li>
                  </ol>

                  <h3>Sự kiện văn hóa</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Các sự kiện tại Thành cổ Vinh</h4>
                    <ul>
                      <li><strong>Lễ hội Văn hóa - Du lịch Nghệ An (tháng 2):</strong> Nhiều hoạt động văn hóa, nghệ thuật diễn ra tại khu vực thành.</li>
                      <li><strong>Kỷ niệm ngày Giải phóng thành phố Vinh (21/7):</strong> Tổ chức triển lãm, biểu diễn nghệ thuật.</li>
                      <li><strong>Ngày Di sản văn hóa Việt Nam (23/11):</strong> Tổ chức nhiều hoạt động giới thiệu, quảng bá giá trị di tích.</li>
                    </ul>
                  </div>

                  <h3>Tour khám phá</h3>
                  <p>
                    Du khách có thể tham gia các tour khám phá Thành cổ Vinh và các di tích lịch sử lân cận. Các tour thường bao gồm:
                  </p>
                  <ul>
                    <li>Tham quan Thành cổ Vinh</li>
                    <li>Thăm Bảo tàng Nghệ An</li>
                    <li>Thăm Quảng trường Hồ Chí Minh</li>
                    <li>Tham quan các công trình kiến trúc Pháp còn lại trong thành phố</li>
                  </ul>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Mùa xuân (tháng 2-4) và mùa thu (tháng 9-11) khi thời tiết mát mẻ, dễ chịu.</li>
                    <li><strong>Thời gian tham quan:</strong> Buổi sáng sớm hoặc chiều muộn để tránh nắng nóng, đặc biệt trong mùa hè.</li>
                    <li><strong>Kết hợp tham quan:</strong> Nên kết hợp tham quan Thành cổ Vinh với các điểm du lịch khác trong thành phố như Quảng trường Hồ Chí Minh, Công viên Trung tâm, Bảo tàng Nghệ An.</li>
                    <li><strong>Hướng dẫn viên:</strong> Nên thuê hướng dẫn viên địa phương để hiểu sâu hơn về lịch sử, văn hóa của thành.</li>
                    <li><strong>Lưu ý:</strong> Mang theo nước uống, mũ, kem chống nắng nếu tham quan vào mùa hè.</li>
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
                  <p className="text-sm text-muted-foreground">Phường Cửa Nam, thành phố Vinh, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">Mở cửa tự do 24/7</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Sở Văn hóa và Thể thao Nghệ An: 0238 3844 717</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Thành cổ Vinh</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ trung tâm thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Thành cổ Vinh nằm ngay trung tâm thành phố, cách Quảng trường Hồ Chí Minh khoảng 1km về phía Đông Nam. Du khách có thể dễ dàng đi bộ hoặc sử dụng các phương tiện giao thông công cộng để đến đây.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Đi bộ: Thuận tiện nếu đang ở trung tâm thành phố</li>
                    <li>Taxi: Có nhiều hãng taxi trong thành phố Vinh, giá cả phải chăng</li>
                    <li>Xe máy: Có thể thuê xe máy để tự do khám phá</li>
                    <li>Xe buýt: Có nhiều tuyến xe buýt đi qua khu vực thành cổ</li>
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
                    <span className="font-medium block">Quảng trường Hồ Chí Minh</span>
                    Quảng trường lớn nhất miền Trung với tượng đài Bác Hồ (cách khoảng 1km)
                  </li>
                  <li>
                    <span className="font-medium block">Bảo tàng Nghệ An</span>
                    Nơi lưu giữ và trưng bày nhiều hiện vật, tài liệu quý về lịch sử, văn hóa Nghệ An (cách khoảng 0.5km)
                  </li>
                  <li>
                    <span className="font-medium block">Nhà thờ Chính tòa Vinh</span>
                    Công trình kiến trúc Gothique đẹp, được xây dựng từ thời Pháp thuộc (cách khoảng 2km)
                  </li>
                  <li>
                    <span className="font-medium block">Công viên Trung tâm</span>
                    Không gian xanh rộng lớn, nơi thư giãn lý tưởng (cách khoảng 1.5km)
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
