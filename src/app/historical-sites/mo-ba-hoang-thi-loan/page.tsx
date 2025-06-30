
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
          src="https://ext.same-assets.com/3334769225/3935718425.jpeg"
          alt="Mộ bà Hoàng Thị Loan"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mộ bà Hoàng Thị Loan</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Nơi an nghỉ của mẹ Chủ tịch Hồ Chí Minh
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
                <TabsTrigger value="attractions">Không gian</TabsTrigger>
                <TabsTrigger value="history">Tiểu sử</TabsTrigger>
                <TabsTrigger value="activities">Tham quan</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Mộ bà Hoàng Thị Loan</h2>
                  <p>
                    <strong>Mộ bà Hoàng Thị Loan</strong> là di tích lưu niệm danh nhân quan trọng, nơi an nghỉ của mẹ Chủ tịch Hồ Chí Minh. Bà Hoàng Thị Loan (1868-1901) là người mẹ hiền từ, có ảnh hưởng sâu sắc đến việc hình thành nhân cách và tư tưởng của Nguyễn Tất Thành - sau này là Chủ tịch Hồ Chí Minh.
                  </p>
                  <p>
                    Mộ bà nằm tại xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, trong khu di tích quê hương Chủ tịch Hồ Chí Minh. Đây là nơi được nhân dân cả nước và quốc tế đặc biệt tôn kính, thường xuyên đến viếng và tưởng nhớ.
                  </p>
                  <p>
                    Khu mộ được bảo tồn và tu bổ trang nghiêm, thể hiện lòng kính trọng của dân tộc đối với người mẹ đã sinh ra và nuôi dưỡng vị lãnh tụ vĩ đại của dân tộc Việt Nam.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3935718425.jpeg"
                        alt="Khu mộ bà Hoàng Thị Loan"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Không gian trang nghiêm"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 14km về phía tây nam</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 7h00 đến 17h00</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 30 phút - 1 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Không gian mộ bà Hoàng Thị Loan</h2>

                  <h3>1. Khu mộ chính</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/3334769225/3935718425.jpeg"
                      alt="Khu mộ chính bà Hoàng Thị Loan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Khu mộ chính được xây dựng theo kiến trúc truyền thống Việt Nam, với mộ phần được làm bằng đá xanh chắc chắn. Trên mộ có bia đá ghi rõ tên tuổi và năm mất của bà Hoàng Thị Loan.
                  </p>
                  <p>
                    Xung quanh khu mộ được trồng nhiều cây xanh, tạo nên không gian yên tĩnh, trang nghiêm. Lối đi được lát đá, thuận tiện cho việc đi lại và viếng thăm.
                  </p>

                  <h3>2. Không gian tưởng niệm</h3>
                  <p>
                    Khu vực xung quanh mộ bà được bố trí thành không gian tưởng niệm trang trọng với:
                  </p>
                  <ul>
                    <li><strong>Bàn thờ ngoài trời:</strong> Nơi du khách có thể dâng hương tưởng nhớ</li>
                    <li><strong>Khu vườn hoa:</strong> Được trồng những loài hoa đẹp, thơm mát</li>
                    <li><strong>Hệ thống ghế đá:</strong> Để du khách ngồi nghỉ và tưởng niệm</li>
                  </ul>

                  <h3>3. Bia tưởng niệm</h3>
                  <p>
                    Tại khu mộ có đặt bia tưởng niệm ghi lại những thông tin quan trọng về cuộc đời và đức hạnh của bà Hoàng Thị Loan. Bia được khắc bằng chữ Việt và chữ Hán, thể hiện sự tôn kính của nhân dân.
                  </p>

                  <h3>4. Cảnh quan xung quanh</h3>
                  <p>
                    Khu mộ nằm trong khung cảnh thiên nhiên đẹp của quê hương Kim Liên:
                  </p>
                  <ul>
                    <li>Cây cổ thụ xanh mát bao quanh khu mộ</li>
                    <li>Đường đi được thiết kế hài hòa với cảnh quan</li>
                    <li>Hệ thống thoát nước đảm bảo khu vực luôn khô ráo</li>
                    <li>Ánh sáng tự nhiên tạo không gian linh thiêng</li>
                    <li>Không gian yên tĩnh, phù hợp cho việc tưởng niệm</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Tiểu sử bà Hoàng Thị Loan</h2>

                  <p>
                    Bà Hoàng Thị Loan sinh năm 1868 tại làng Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, trong một gia đình nông dân nghèo nhưng có truyền thống hiếu học và yêu nước.
                  </p>

                  <h3>Cuộc đời và tính cách</h3>
                  <ul>
                    <li><strong>Xuất thân:</strong> Sinh ra trong gia đình nông dân nghèo, từ nhỏ đã phải lao động vất vả</li>
                    <li><strong>Tính cách:</strong> Người phụ nữ hiền từ, nhân hậu, có lòng thương yêu con người</li>
                    <li><strong>Tư tưởng:</strong> Có ý thức yêu nước, ghét cái ác, ủng hộ cái thiện</li>
                    <li><strong>Giáo dục con cái:</strong> Luôn dạy con làm người tốt, học hành chăm chỉ, yêu nước yêu dân</li>
                  </ul>

                  <h3>Ảnh hưởng đến Nguyễn Tất Thành</h3>
                  <p>
                    Bà Hoàng Thị Loan có ảnh hưởng sâu sắc đến việc hình thành nhân cách của Nguyễn Tất Thành:
                  </p>
                  <ul>
                    <li><strong>Tình yêu thương:</strong> Bà truyền cho con tình yêu thương con người, đặc biệt là người nghèo khổ</li>
                    <li><strong>Lòng yêu nước:</strong> Từ nhỏ bà đã gieo vào lòng con ý thức yêu nước, ghét giặc</li>
                    <li><strong>Đạo đức:</strong> Dạy con làm người chính trực, thành thật, có lòng từ bi</li>
                    <li><strong>Ý chí kiên cường:</strong> Bằng tấm gương của mình, bà đã hun đúc trong con ý chí vươn lên</li>
                  </ul>

                  <h3>Di sản tinh thần</h3>
                  <p>
                    Mặc dù bà mất sớm (năm 1901) khi Nguyễn Tất Thành mới 11 tuổi, nhưng những giá trị đạo đức và tình yêu thương mà bà truyền lại đã theo suốt cuộc đời của Chủ tịch Hồ Chí Minh.
                  </p>
                  <p>
                    Chủ tịch Hồ Chí Minh luôn nhớ ơn mẹ và thường nói: "Tôi chỉ muốn cả nước hòa thuận như một gia đình to, trong đó mọi người Việt Nam đều là anh em chị em của nhau".
                  </p>

                  <h3>Ý nghĩa lịch sử</h3>
                  <p>
                    Bà Hoàng Thị Loan được coi là biểu tượng của người mẹ Việt Nam - những người phụ nữ đã âm thầm hy sinh, cống hiến để nuôi dưỡng những thế hệ con em trở thành những con người có ích cho đất nước.
                  </p>
                  <p>
                    Mộ bà không chỉ là nơi tưởng nhớ một người mẹ mà còn là biểu tượng của tình mẫu tử thiêng liêng và truyền thống gia đình Việt Nam.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động tham quan</h2>

                  <h3>Nghi thức viếng mộ</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Quy trình viếng mộ (20-30 phút)</h4>
                    <ol>
                      <li><strong>Chuẩn bị:</strong> Mang theo hoa tươi, hương nến và tâm thành kính</li>
                      <li><strong>Dâng hoa:</strong> Đặt hoa tươi trước mộ bà một cách trang trọng</li>
                      <li><strong>Thắp hương:</strong> Thắp hương tưởng niệm và cầu nguyện</li>
                      <li><strong>Tưởng niệm:</strong> Im lặng tưởng nhớ công ơn và đức hạnh của bà</li>
                      <li><strong>Cúi chào:</strong> Cúi chào ba lần thể hiện lòng kính trọng</li>
                    </ol>
                  </div>

                  <h3>Hoạt động giáo dục</h3>
                  <p>
                    Mộ bà Hoàng Thị Loan thường được tổ chức các hoạt động giáo dục:
                  </p>
                  <ul>
                    <li><strong>Dành cho học sinh:</strong> Các buổi học ngoại khóa về lịch sử và đạo đức</li>
                    <li><strong>Dành cho thanh niên:</strong> Các hoạt động giáo dục truyền thống gia đình Việt Nam</li>
                    <li><strong>Dành cho du khách:</strong> Hướng dẫn tìm hiểu về cuộc đời bà và ảnh hưởng đến Bác Hồ</li>
                  </ul>

                  <h3>Các dịp đặc biệt</h3>
                  <ul>
                    <li><strong>Ngày sinh Chủ tịch Hồ Chí Minh (19/5):</strong> Nhiều đoàn khách đến viếng mộ bà</li>
                    <li><strong>Ngày mất Chủ tịch Hồ Chí Minh (2/9):</strong> Tổ chức các hoạt động tưởng niệm đặc biệt</li>
                    <li><strong>Tết Nguyên đán:</strong> Nhân dân địa phương và du khách đến viếng mộ đầu năm</li>
                    <li><strong>Tết Thanh minh:</strong> Ngày truyền thống viếng mộ của dân tộc</li>
                  </ul>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm tốt nhất:</strong> Sáng sớm (7h-9h) hoặc chiều mát (15h-17h)</li>
                    <li><strong>Trang phục:</strong> Ăn mặc lịch sự, trang trọng, màu sắc không quá sặc sỡ</li>
                    <li><strong>Thái độ:</strong> Giữ thái độ nghiêm trang, tôn kính, không nói chuyện to</li>
                    <li><strong>Chuẩn bị:</strong> Mang theo hoa tươi (hoa cúc trắng, hoa lay ơn...)</li>
                  </ul>

                  <h3>Kết hợp tham quan</h3>
                  <p>
                    Nên kết hợp viếng mộ bà Hoàng Thị Loan với tham quan các điểm khác trong khu di tích Kim Liên:
                  </p>
                  <ul>
                    <li>Nhà sinh của Chủ tịch Hồ Chí Minh tại làng Sen</li>
                    <li>Đình Kim Liên</li>
                    <li>Bảo tàng Hồ Chí Minh</li>
                    <li>Các di tích khác trong khu di tích quê hương Bác Hồ</li>
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
                  <p className="text-sm text-muted-foreground">Hàng ngày: 7h00 - 17h00</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3800 XXX</p>
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
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 46 về hướng Nam Đàn khoảng 14km, rẽ vào đường dẫn đến khu di tích Kim Liên.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Phương tiện thuận tiện và linh hoạt nhất</li>
                    <li>Taxi: Giá khoảng 200.000 - 250.000 VNĐ từ Vinh</li>
                    <li>Xe buýt: Có tuyến xe buýt từ Vinh đến Nam Đàn</li>
                    <li>Tour du lịch: Các công ty lữ hành tổ chức tour thăm quê Bác</li>
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
                    <span className="font-medium block">Nhà sinh Chủ tịch Hồ Chí Minh</span>
                    Tại làng Sen, cách khoảng 500m
                  </li>
                  <li>
                    <span className="font-medium block">Đình Kim Liên</span>
                    Đình làng cổ có giá trị lịch sử (cách 300m)
                  </li>
                  <li>
                    <span className="font-medium block">Bảo tàng Hồ Chí Minh</span>
                    Trưng bày hiện vật về cuộc đời Bác Hồ (cách 1km)
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
