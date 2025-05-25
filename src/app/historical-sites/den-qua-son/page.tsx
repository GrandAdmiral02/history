import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DenQuaSonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/4052699563/2214275301.jpeg"
          alt="Đền Quả Sơn"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Đền Quả Sơn</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử văn hóa cấp quốc gia - Nơi thờ phụng các anh hùng dân tộc
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
            <span className="text-foreground">Đền Quả Sơn</span>
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
                  <h2>Giới thiệu Đền Quả Sơn</h2>
                  <p>
                    <strong>Đền Quả Sơn</strong> là một di tích lịch sử văn hóa cấp quốc gia, tọa lạc ở xã Quỳnh Đôi, huyện Quỳnh Lưu, tỉnh Nghệ An. Đền được xây dựng để thờ phụng các anh hùng dân tộc và các vị thần linh đã có công với nước, đặc biệt là những người đã có công trong việc bảo vệ và xây dựng vùng đất Nghệ An.
                  </p>
                  <p>
                    Đền Quả Sơn nằm trên một quả đồi nhỏ, bao quanh là cảnh quan thiên nhiên hùng vĩ với nhiều cây cổ thụ và hồ nước trong xanh, tạo nên một không gian tĩnh lặng, linh thiêng, thích hợp cho việc tâm linh và du lịch văn hóa.
                  </p>
                  <p>
                    Đền không chỉ là một công trình kiến trúc có giá trị nghệ thuật cao mà còn là nơi lưu giữ nhiều hiện vật lịch sử, văn hóa quý giá, góp phần giáo dục truyền thống yêu nước và tôn vinh những giá trị văn hóa truyền thống của dân tộc.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/3485414857.jpeg"
                        alt="Cổng Đền Quả Sơn"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/1818602473.jpeg"
                        alt="Không gian Đền Quả Sơn"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Xã Quỳnh Đôi, huyện Quỳnh Lưu, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 40km về phía Bắc</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 6h đến 18h</li>
                    <li><strong>Lệ phí tham quan:</strong> Miễn phí (có thể ủng hộ tùy tâm)</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="architecture" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc Đền Quả Sơn</h2>

                  <h3>1. Tổng thể kiến trúc</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/4052699563/2214275301.jpeg"
                      alt="Tổng thể Đền Quả Sơn"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Đền Quả Sơn được xây dựng theo lối kiến trúc truyền thống của đình, chùa Việt Nam, bao gồm một quần thể các công trình với bố cục hài hòa, cân đối. Tổng thể đền được chia thành ba phần chính: tiền đường, thiên điện và hậu cung, nằm trên một trục thẳng từ trước ra sau.
                  </p>
                  <p>
                    Mái đền được lợp ngói âm dương, với nhiều đầu đao cong vút, tạo nên vẻ mềm mại, uyển chuyển. Hệ thống cột và kèo được chạm khắc tinh xảo với nhiều hoa văn, họa tiết truyền thống như rồng, phượng, tứ linh, hoa sen,...
                  </p>

                  <h3>2. Cổng đền và sân đền</h3>
                  <p>
                    Cổng đền được xây dựng kiên cố với kiến trúc tam quan đặc trưng. Hai bên cổng là hai bức tường thành bao quanh khuôn viên đền. Sân đền rộng rãi, lát gạch Bát Tràng, tạo không gian thoáng đãng cho các nghi lễ tâm linh và lễ hội.
                  </p>

                  <h3>3. Điện thờ chính</h3>
                  <p>
                    Điện thờ chính của đền là nơi đặt bàn thờ và các tượng thờ của các vị thần và anh hùng dân tộc. Không gian điện thờ được trang trí trang nghiêm với nhiều đồ thờ cúng quý giá như đỉnh đồng, lư hương, bát hương, hoành phi, câu đối,... Trên các cột và kèo của điện thờ còn có nhiều bài thơ, câu đối ca ngợi công đức của các vị thần linh và anh hùng được thờ phụng.
                  </p>

                  <h3>4. Các di vật và hiện vật quý</h3>
                  <p>
                    Trong đền còn lưu giữ nhiều di vật, hiện vật quý như:
                  </p>
                  <ul>
                    <li>Bộ sưu tập bia đá có niên đại từ thế kỷ XV-XVIII</li>
                    <li>Các bài vị gỗ chạm khắc tinh xảo</li>
                    <li>Các tượng thờ được làm từ gỗ quý và đồng</li>
                    <li>Các đồ thờ cúng bằng đồng, gỗ, gốm sứ cổ</li>
                    <li>Các văn bản, sắc phong từ thời phong kiến</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Đền Quả Sơn</h2>

                  <p>
                    Đền Quả Sơn có lịch sử hình thành từ lâu đời, gắn liền với sự phát triển và bảo vệ vùng đất Nghệ An qua nhiều thời kỳ lịch sử.
                  </p>

                  <h3>Nguồn gốc và sự hình thành</h3>
                  <p>
                    Theo các tài liệu lịch sử và truyền thuyết dân gian, Đền Quả Sơn được xây dựng từ thời Lý - Trần (khoảng thế kỷ XIII) để thờ phụng các vị thần linh bảo vệ vùng đất này. Ban đầu, đền chỉ là một ngôi miếu nhỏ, được xây dựng đơn giản bằng tre, nứa.
                  </p>
                  <p>
                    Đến thời Lê (thế kỷ XV-XVI), đền được trùng tu và mở rộng thành một công trình kiến trúc lớn hơn để thờ phụng các anh hùng đã có công trong việc đánh đuổi giặc Minh và xây dựng triều đại Lê. Trong thời kỳ này, đền đã được vua Lê ban sắc phong, công nhận là nơi thờ tự thiêng liêng của vùng.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>Thế kỷ XIII:</strong> Đền được xây dựng ban đầu với quy mô nhỏ</li>
                    <li><strong>Thế kỷ XV-XVI:</strong> Đền được trùng tu, mở rộng và được vua Lê ban sắc phong</li>
                    <li><strong>Thế kỷ XVIII:</strong> Đền bị hư hại nặng trong thời kỳ loạn lạc và được trùng tu lại dưới thời Tây Sơn</li>
                    <li><strong>Thế kỷ XIX:</strong> Đền được nhà Nguyễn tiếp tục trùng tu và ban thêm sắc phong</li>
                    <li><strong>Năm 1945-1954:</strong> Đền bị hư hại trong thời kỳ kháng chiến chống Pháp</li>
                    <li><strong>Năm 1990:</strong> Đền được trùng tu lớn với sự đóng góp của nhân dân và nhà nước</li>
                    <li><strong>Năm 1995:</strong> Đền được công nhận là Di tích lịch sử văn hóa cấp tỉnh</li>
                    <li><strong>Năm 2005:</strong> Đền được công nhận là Di tích lịch sử văn hóa cấp quốc gia</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Đền Quả Sơn không chỉ là công trình kiến trúc cổ có giá trị nghệ thuật cao mà còn là nơi lưu giữ nhiều giá trị lịch sử, văn hóa của dân tộc. Đền là biểu tượng của lòng tự hào dân tộc, tinh thần đoàn kết và ý chí quật cường của người dân xứ Nghệ nói riêng và dân tộc Việt Nam nói chung.
                  </p>
                  <p>
                    Việc bảo tồn và phát huy giá trị của Đền Quả Sơn có ý nghĩa quan trọng trong việc giáo dục truyền thống yêu nước và tôn vinh những giá trị văn hóa truyền thống tốt đẹp của dân tộc cho các thế hệ mai sau.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động và trải nghiệm tại Đền Quả Sơn</h2>

                  <h3>Các hoạt động chính</h3>
                  <ol>
                    <li>
                      <strong>Tham quan di tích:</strong> Du khách có thể tham quan toàn bộ khuôn viên đền, tìm hiểu về kiến trúc, lịch sử và các giá trị văn hóa của đền.
                    </li>
                    <li>
                      <strong>Dâng hương, cầu may:</strong> Nhiều du khách đến Đền Quả Sơn để dâng hương, cầu may mắn, bình an cho gia đình và người thân.
                    </li>
                    <li>
                      <strong>Tham gia lễ hội truyền thống:</strong> Vào các dịp lễ hội, đền tổ chức nhiều hoạt động văn hóa, tâm linh đặc sắc như rước kiệu, múa lân sư rồng, biểu diễn nghệ thuật truyền thống,...
                    </li>
                    <li>
                      <strong>Tìm hiểu văn hóa địa phương:</strong> Trò chuyện với người dân địa phương, tìm hiểu về phong tục, tập quán và đời sống văn hóa tinh thần của người dân vùng đất này.
                    </li>
                    <li>
                      <strong>Khám phá cảnh quan thiên nhiên:</strong> Đi dạo quanh khu vực đền để ngắm nhìn cảnh quan thiên nhiên đẹp, hít thở không khí trong lành và tận hưởng không gian yên tĩnh.
                    </li>
                  </ol>

                  <h3>Lễ hội truyền thống</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lễ hội chính tại Đền Quả Sơn</h4>
                    <ul>
                      <li><strong>Lễ hội Xuân (tháng Giêng):</strong> Diễn ra từ mùng 1 đến 15 tháng Giêng âm lịch, là dịp người dân cầu mong một năm mới an lành, may mắn.</li>
                      <li><strong>Lễ kỷ niệm ngày thành lập đền (tháng 8 âm lịch):</strong> Tổ chức nhiều hoạt động văn hóa, nghệ thuật truyền thống.</li>
                      <li><strong>Lễ cầu mùa (tháng 4 âm lịch):</strong> Cầu mong mưa thuận gió hòa, mùa màng bội thu.</li>
                    </ul>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Mùa xuân (tháng 2-4) và mùa thu (tháng 9-11) khi thời tiết mát mẻ, dễ chịu. Đặc biệt nên đến vào dịp lễ hội để trải nghiệm không khí văn hóa đặc sắc.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, kín đáo khi tham quan đền.</li>
                    <li><strong>Tôn trọng không gian tâm linh:</strong> Giữ im lặng, không nói to, cười đùa trong khuôn viên đền.</li>
                    <li><strong>Hướng dẫn viên:</strong> Có thể thuê hướng dẫn viên địa phương để hiểu sâu hơn về lịch sử, văn hóa của đền.</li>
                    <li><strong>Lưu ý:</strong> Tránh chụp ảnh khu vực thờ tự nếu không được phép. Không mang theo đồ ăn, thức uống vào trong đền.</li>
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
                  <p className="text-sm text-muted-foreground">Xã Quỳnh Đôi, huyện Quỳnh Lưu, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">Hàng ngày từ 6h - 18h</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí (có thể ủng hộ tùy tâm)</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3868 xxx</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Đền Quả Sơn</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 1A hướng Bắc khoảng 35km đến huyện Quỳnh Lưu, sau đó rẽ vào đường tỉnh lộ theo biển chỉ dẫn đến xã Quỳnh Đôi, tiếp tục đi thêm khoảng 5km là đến Đền Quả Sơn. Tổng quãng đường khoảng 40km.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thuận tiện để tự do khám phá</li>
                    <li>Taxi: Giá khoảng 400.000 - 500.000 VNĐ cho chuyến đi 2 chiều từ Vinh</li>
                    <li>Xe buýt: Có tuyến xe buýt từ Vinh đi Quỳnh Lưu, sau đó đi xe ôm đến đền</li>
                    <li>Tour du lịch: Nhiều công ty lữ hành tổ chức tour tham quan các di tích tâm linh ở Nghệ An</li>
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
                    <span className="font-medium block">Làng cổ Quỳnh Đôi</span>
                    Làng cổ với lịch sử hơn 700 năm, nổi tiếng với kiến trúc nhà cổ và truyền thống hiếu học (cách khoảng 3km)
                  </li>
                  <li>
                    <span className="font-medium block">Biển Quỳnh</span>
                    Bãi biển đẹp với bờ cát trắng mịn, nước biển trong xanh (cách khoảng 15km)
                  </li>
                  <li>
                    <span className="font-medium block">Đền Cờn</span>
                    Di tích lịch sử tâm linh nổi tiếng khác trong vùng (cách khoảng 10km)
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
