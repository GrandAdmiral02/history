
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MoBaHoangThiLoanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3377099892.jpeg"
          alt="Mộ bà Hoàng Thị Loan"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mộ Bà Hoàng Thị Loan</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử quốc gia - Nơi an nghỉ của thân mẫu Chủ tịch Hồ Chí Minh
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
            <span className="text-foreground">Mộ bà Hoàng Thị Loan</span>
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
                <TabsTrigger value="attractions">Khu mộ</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Tham quan</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Mộ bà Hoàng Thị Loan</h2>
                  <p>
                    <strong>Mộ bà Hoàng Thị Loan</strong> là di tích lịch sử quốc gia nằm tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn, tỉnh Nghệ An. Đây là nơi an nghỉ của bà Hoàng Thị Loan - thân mẫu kính yêu của Chủ tịch Hồ Chí Minh.
                  </p>
                  <p>
                    Khu mộ được xây dựng trang nghiêm, tôn kính trên một ngọn đồi cao với cảnh quan thiên nhiên hùng vĩ. Nơi đây không chỉ là điểm đến thiêng liêng mà còn thể hiện lòng hiếu thảo sâu sắc của Chủ tịch Hồ Chí Minh đối với mẹ và là biểu tượng của tình mẫu tử thiêng liêng trong văn hóa Việt Nam.
                  </p>
                  <p>
                    Mỗi năm, đặc biệt trong các dịp lễ lớn như ngày sinh nhật Bác (19/5), ngày Quốc khánh (2/9), hàng vạn người dân và du khách đến viếng mộ bà Hoàng Thị Loan để bày tỏ lòng thành kính và tìm hiểu về cuộc đời của người mẹ vĩ đại đã sinh ra vị lãnh tụ kính yêu của dân tộc.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3377099892.jpeg"
                        alt="Khu mộ bà Hoàng Thị Loan"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Cảnh quan xung quanh khu mộ"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Núi Động Tranh, xã Nam Giang, huyện Nam Đàn, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 20km về phía tây</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 7h00 đến 17h00</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-1.5 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Khu mộ bà Hoàng Thị Loan</h2>

                  <h3>1. Lăng mộ</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/3334769225/3377099892.jpeg"
                      alt="Lăng mộ bà Hoàng Thị Loan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Lăng mộ bà Hoàng Thị Loan được xây dựng bằng đá granite đen, có hình dạng đơn giản nhưng trang nghiêm. Trên bia mộ khắc dòng chữ "Mộ bà Hoàng Thị Loan - Thân mẫu Chủ tịch Hồ Chí Minh" cùng năm sinh và năm mất của bà.
                  </p>

                  <h3>2. Khu vực thờ tự</h3>
                  <p>
                    Trước mộ có khu vực thờ tự được thiết kế trang nghiêm với bàn thờ đá và các đồ thờ cúng. Đây là nơi du khách có thể thắp hương, dâng hoa và bày tỏ lòng kính trọng đối với thân mẫ của Chủ tịch Hồ Chí Minh.
                  </p>

                  <h3>3. Con đường dẫn lên mộ</h3>
                  <p>
                    Con đường từ chân núi lên khu mộ được làm bằng đá, có độ dài khoảng 500m với nhiều bậc thang. Dọc theo đường đi có trồng nhiều cây xanh tạo bóng mát và không gian yên tĩnh.
                  </p>

                  <h3>4. Không gian cảnh quan</h3>
                  <p>
                    Khu mộ nằm trên đỉnh núi Động Tranh, từ đây có thể ngắm nhìn toàn cảnh vùng đất Nam Đàn với những cánh đồng lúa xanh tươi, những ngôi làng yên bình và dòng sông uốn lượn. Cảnh quan hùng vĩ này tạo nên không gian thiêng liêng, phù hợp cho việc tưởng nhớ.
                  </p>

                  <h3>5. Các tiện ích phụ trợ</h3>
                  <ul>
                    <li><strong>Nhà nghỉ du khách:</strong> Nơi du khách có thể nghỉ ngơi trước khi leo lên mộ.</li>
                    <li><strong>Khu vệ sinh:</strong> Được xây dựng sạch sẽ, tiện nghi.</li>
                    <li><strong>Bãi đỗ xe:</strong> Chỗ đỗ xe ô tô và xe máy rộng rãi ở chân núi.</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử về bà Hoàng Thị Loan</h2>

                  <p>
                    Bà Hoàng Thị Loan (1868-1901) là thân mẫu của Chủ tịch Hồ Chí Minh, một người phụ nữ Việt Nam điển hình với những phẩm chất cao đẹp.
                  </p>

                  <h3>Cuộc đời bà Hoàng Thị Loan</h3>
                  <ul>
                    <li><strong>1868:</strong> Bà Hoàng Thị Loan sinh ra tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn.</li>
                    <li><strong>1885:</strong> Bà kết hôn với ông Nguyễn Sinh Sắc (cha của Chủ tịch Hồ Chí Minh).</li>
                    <li><strong>1890:</strong> Sinh Nguyễn Sinh Cung (tên khai sinh của Chủ tịch Hồ Chí Minh).</li>
                    <li><strong>1891:</strong> Sinh con trai thứ hai là Nguyễn Sinh Khiêm (Nguyễn Tất Đạt).</li>
                    <li><strong>1896:</strong> Sinh con gái là Nguyễn Thị Thanh (Bạch Liên).</li>
                    <li><strong>1901:</strong> Bà qua đời khi mới 33 tuổi, lúc này Nguyễn Sinh Cung mới 11 tuổi.</li>
                  </ul>

                  <h3>Ảnh hưởng đến Chủ tịch Hồ Chí Minh</h3>
                  <p>
                    Mặc dù bà Hoàng Thị Loan qua đời sớm, nhưng những năm tháng đầu đời sống bên mẹ đã để lại ảnh hưởng sâu sắc đến nhân cách và tư tưởng của Chủ tịch Hồ Chí Minh. Bà là người mẹ hiền từ, thông minh, có tinh thần yêu nước mạnh mẽ.
                  </p>
                  <p>
                    Trong những bức thư gửi về quê hương, Chủ tịch Hồ Chí Minh luôn bày tỏ nỗi nhớ mẹ da diết và lòng thương tiếc vô hạn vì không thể về thăm mộ mẹ trong suốt 30 năm xa Tổ quốc.
                  </p>

                  <h3>Lịch sử khu mộ</h3>
                  <ul>
                    <li><strong>1901:</strong> Bà Hoàng Thị Loan được chôn cất tại núi Động Tranh.</li>
                    <li><strong>1951:</strong> Lần đầu tiên có công tác trùng tu, tôn tạo mộ.</li>
                    <li><strong>1970:</strong> Xây dựng khu mộ với quy mô trang nghiêm hơn.</li>
                    <li><strong>1990:</strong> Được công nhận là Di tích lịch sử cấp quốc gia.</li>
                    <li><strong>2000-2005:</strong> Trùng tu, tôn tạo lớn với kiến trúc hiện tại.</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Mộ bà Hoàng Thị Loan không chỉ có ý nghĩa riêng đối với gia đình Chủ tịch Hồ Chí Minh mà còn là biểu tượng của tình mẫu tử thiêng liêng, của người mẹ Việt Nam anh hùng - những người đã sinh ra và nuôi dưỡng những anh hùng dân tộc.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động tham quan Mộ bà Hoàng Thị Loan</h2>

                  <h3>Các hoạt động chính</h3>
                  <ol>
                    <li>
                      <strong>Viếng mộ, dâng hương:</strong> Thắp hương, dâng hoa tại mộ bà Hoàng Thị Loan để bày tỏ lòng kính trọng.
                    </li>
                    <li>
                      <strong>Tham quan, tìm hiểu:</strong> Tìm hiểu về cuộc đời và những ảnh hưởng của bà đối với Chủ tịch Hồ Chí Minh.
                    </li>
                    <li>
                      <strong>Ngắm cảnh:</strong> Thưởng ngoạn cảnh quan thiên nhiên hùng vĩ từ đỉnh núi Động Tranh.
                    </li>
                    <li>
                      <strong>Giáo dục truyền thống:</strong> Tham gia các hoạt động giáo dục về tình mẫu tử và lòng hiếu thảo.
                    </li>
                  </ol>

                  <h3>Các dịp lễ quan trọng</h3>
                  <p>
                    Những dịp đặc biệt thu hút đông đảo du khách đến viếng mộ bà Hoàng Thị Loan:
                  </p>
                  <ul>
                    <li><strong>Ngày 19/5:</strong> Sinh nhật Chủ tịch Hồ Chí Minh</li>
                    <li><strong>Ngày 2/9:</strong> Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam</li>
                    <li><strong>Tết Nguyên đán:</strong> Dịp đầu năm mới</li>
                    <li><strong>Ngày Tết Thanh minh:</strong> Ngày truyền thống thăm mộ tổ tiên</li>
                  </ul>

                  <h3>Lịch trình tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (1-1.5 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:15:</strong> Chuẩn bị và bắt đầu leo lên núi Động Tranh</li>
                      <li><strong>08:15 - 08:45:</strong> Đi bộ trên con đường dẫn lên mộ (khoảng 30 phút)</li>
                      <li><strong>08:45 - 09:15:</strong> Viếng mộ, dâng hương, tưởng nhớ</li>
                      <li><strong>09:15 - 09:30:</strong> Ngắm cảnh và chụp ảnh lưu niệm</li>
                      <li><strong>09:30 - 10:00:</strong> Trở về chân núi</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Buổi sáng sớm (7h-9h) khi thời tiết mát mẻ, dễ leo núi.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, giày thể thao để dễ leo núi.</li>
                    <li><strong>Chuẩn bị:</strong> Mang theo nước uống và mũ che nắng.</li>
                    <li><strong>Thái độ:</strong> Giữ thái độ trang nghiêm, tôn kính trong suốt quá trình viếng mộ.</li>
                    <li><strong>Hương hoa:</strong> Có thể mua hương, hoa tại chân núi trước khi lên mộ.</li>
                  </ul>

                  <h3>Kết hợp tham quan</h3>
                  <p>
                    Du khách có thể kết hợp tham quan Mộ bà Hoàng Thị Loan với các điểm du lịch khác gần đó:
                  </p>
                  <ul>
                    <li>Khu di tích Kim Liên (cách khoảng 10km)</li>
                    <li>Đền Chung Sơn (cách khoảng 8km)</li>
                    <li>Làng Sen - quê hương Chủ tịch Hồ Chí Minh</li>
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
                  <p className="text-sm text-muted-foreground">Núi Động Tranh, xã Nam Giang, huyện Nam Đàn, tỉnh Nghệ An</p>
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
                  <h4 className="font-medium">Lưu ý</h4>
                  <p className="text-sm text-muted-foreground">Cần leo bộ khoảng 30 phút để lên đến mộ</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Mộ bà Hoàng Thị Loan</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 46 về hướng tây khoảng 20km đến huyện Nam Đàn, sau đó theo biển chỉ dẫn đến núi Động Tranh.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thuận tiện cho việc di chuyển và đỗ xe</li>
                    <li>Ô tô: Có bãi đỗ xe ở chân núi</li>
                    <li>Tour du lịch: Nhiều công ty tổ chức tour kết hợp với Kim Liên</li>
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
                    <span className="font-medium block">Đền Chung Sơn</span>
                    Di tích thờ các anh hùng dân tộc (cách khoảng 8km)
                  </li>
                  <li>
                    <span className="font-medium block">Núi Chung</span>
                    Danh thắng tự nhiên với cảnh quan đẹp (cách khoảng 5km)
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
