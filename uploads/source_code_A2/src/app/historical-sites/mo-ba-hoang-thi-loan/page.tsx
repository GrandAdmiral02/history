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
          src="https://ext.same-assets.com/4052699563/3293732532.jpeg"
          alt="Mộ bà Hoàng Thị Loan"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mộ Bà Hoàng Thị Loan</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử cấp quốc gia - Nơi yên nghỉ của thân mẫu Chủ tịch Hồ Chí Minh
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
                <TabsTrigger value="architecture">Kiến trúc</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Hoạt động</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Mộ bà Hoàng Thị Loan</h2>
                  <p>
                    <strong>Mộ bà Hoàng Thị Loan</strong> là di tích lịch sử cấp quốc gia, nằm tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn, tỉnh Nghệ An. Đây là nơi yên nghỉ của thân mẫu Chủ tịch Hồ Chí Minh - người đã sinh thành và nuôi dưỡng vị lãnh tụ vĩ đại của dân tộc Việt Nam.
                  </p>
                  <p>
                    Mộ bà Hoàng Thị Loan nằm trên một ngọn đồi thoai thoải, xung quanh là cảnh quan thiên nhiên hùng vĩ với nhiều cây cổ thụ xanh tươi. Từ đây, du khách có thể phóng tầm mắt ngắm nhìn toàn cảnh vùng quê Nam Đàn thanh bình, thơ mộng.
                  </p>
                  <p>
                    Di tích không chỉ có ý nghĩa về mặt lịch sử, chứng tích của một thời kỳ, mà còn là nơi thể hiện tình cảm, lòng biết ơn sâu sắc của nhân dân Việt Nam đối với người mẹ đã sinh thành, nuôi dưỡng và dạy dỗ Chủ tịch Hồ Chí Minh - người con ưu tú của dân tộc Việt Nam.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/3293732532.jpeg"
                        alt="Mộ bà Hoàng Thị Loan"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/4226981693.jpeg"
                        alt="Đường lên mộ bà Hoàng Thị Loan"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Núi Động Tranh, xã Nam Giang, huyện Nam Đàn, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 25km về phía tây nam</li>
                    <li><strong>Cách Khu di tích Kim Liên:</strong> Khoảng 7km</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 7h đến 17h</li>
                    <li><strong>Lệ phí tham quan:</strong> Miễn phí</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="architecture" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc Mộ bà Hoàng Thị Loan</h2>

                  <h3>1. Tổng thể khu di tích</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/4052699563/3293732532.jpeg"
                      alt="Tổng thể khu di tích"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Khu di tích mộ bà Hoàng Thị Loan được thiết kế theo kiến trúc truyền thống Việt Nam, hài hòa với cảnh quan thiên nhiên xung quanh. Tổng thể khu di tích bao gồm: đường lên mộ, khu vực mộ chính, nhà bia và các công trình phụ trợ.
                  </p>
                  <p>
                    Đường lên mộ được lát đá granite với 365 bậc thang, tượng trưng cho 365 ngày trong năm. Hai bên đường là hàng cây xanh tươi, tạo cảm giác thoáng đãng, mát mẻ cho du khách khi leo núi.
                  </p>

                  <h3>2. Phần mộ chính</h3>
                  <p>
                    Phần mộ chính của bà Hoàng Thị Loan được xây dựng bằng đá granite cao cấp với thiết kế đơn giản nhưng trang nghiêm, thể hiện sự tôn kính đối với thân mẫu của Chủ tịch Hồ Chí Minh.
                  </p>
                  <p>
                    Mộ có hình chữ nhật, được đặt trên một bệ đá cao, xung quanh có lan can đá bao bọc. Phần bia mộ khắc thông tin về bà Hoàng Thị Loan và được đặt phía trước mộ. Trước mộ có bàn thờ đá để du khách đặt hương hoa khi đến viếng.
                  </p>

                  <h3>3. Nhà bia</h3>
                  <p>
                    Nhà bia được xây dựng phía trước khu vực mộ, có kiến trúc truyền thống với mái ngói đỏ, cột gỗ và được trang trí tinh tế. Bên trong nhà bia đặt tấm bia đá lớn khắc thông tin chi tiết về cuộc đời và công lao của bà Hoàng Thị Loan.
                  </p>
                  <p>
                    Nội dung bia ghi lại thân thế, sự nghiệp và công lao của bà trong việc nuôi dạy Chủ tịch Hồ Chí Minh. Phần chữ trên bia được chạm khắc tinh xảo, thể hiện sự tôn kính và biết ơn sâu sắc.
                  </p>

                  <h3>4. Cảnh quan xung quanh</h3>
                  <p>
                    Khu di tích được bao quanh bởi cảnh quan thiên nhiên đẹp với nhiều cây cổ thụ, tạo nên không gian trang nghiêm, yên tĩnh. Từ khu vực mộ, du khách có thể phóng tầm mắt ngắm nhìn toàn cảnh vùng quê Nam Đàn với những cánh đồng lúa xanh tươi, những ngôi nhà nhỏ và dòng sông Lam uốn lượn.
                  </p>
                  <p>
                    Xung quanh khu di tích còn có nhiều ghế đá và điểm dừng chân để du khách nghỉ ngơi, thư giãn sau khi leo núi. Hệ thống chiếu sáng được bố trí hợp lý, vừa đảm bảo ánh sáng cho khu di tích vào ban đêm, vừa tạo không gian huyền ảo, linh thiêng.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Mộ bà Hoàng Thị Loan</h2>

                  <p>
                    Mộ bà Hoàng Thị Loan có lịch sử gắn liền với cuộc đời của thân mẫu Chủ tịch Hồ Chí Minh và quá trình phát triển của khu di tích qua nhiều thời kỳ lịch sử.
                  </p>

                  <h3>Tiểu sử bà Hoàng Thị Loan</h3>
                  <p>
                    Bà Hoàng Thị Loan (1868-1901) sinh ra trong một gia đình nông dân nghèo tại làng Hoàng Trù, tổng Phúc Đồng, phủ Nam Đường, tỉnh Nghệ An (nay thuộc xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An). Bà là con gái của ông Hoàng Đường và bà Nguyễn Thị Kép.
                  </p>
                  <p>
                    Năm 1884, bà Hoàng Thị Loan kết hôn với ông Nguyễn Sinh Sắc (khi đó là Nguyễn Sinh Huy), một nhà Nho yêu nước. Bà đã sinh được ba người con: Nguyễn Thị Thanh (1884-1954), Nguyễn Sinh Khiêm (1888-1950) và Nguyễn Sinh Cung (1890-1969) - sau này là Chủ tịch Hồ Chí Minh.
                  </p>
                  <p>
                    Bà Hoàng Thị Loan là người phụ nữ hiền lành, đảm đang, thông minh và có lòng nhân hậu. Bà đã dạy dỗ con cái theo truyền thống hiếu học, yêu nước của gia đình và dân tộc. Dù cuộc sống khó khăn, bà vẫn cố gắng nuôi dạy các con nên người.
                  </p>
                  <p>
                    Năm 1901, khi mới 33 tuổi, bà Hoàng Thị Loan qua đời vì bệnh tật, để lại nỗi đau thương vô hạn cho chồng và các con. Lúc đó, Nguyễn Sinh Cung (Hồ Chí Minh) mới 11 tuổi.
                  </p>

                  <h3>Quá trình hình thành và phát triển khu di tích</h3>
                  <ul>
                    <li><strong>Năm 1901:</strong> Bà Hoàng Thị Loan qua đời và được an táng tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn.</li>
                    <li><strong>Trước năm 1945:</strong> Mộ bà chỉ là một ngôi mộ đơn sơ như bao ngôi mộ khác trong vùng.</li>
                    <li><strong>Năm 1961:</strong> Chủ tịch Hồ Chí Minh về thăm quê và đã đến viếng mộ mẹ. Sau chuyến thăm này, mộ bà được tu sửa khang trang hơn.</li>
                    <li><strong>Năm 1980:</strong> Khu di tích được trùng tu lớn với sự đóng góp của nhân dân và nhà nước.</li>
                    <li><strong>Năm 1992:</strong> Mộ bà Hoàng Thị Loan được công nhận là Di tích lịch sử cấp tỉnh.</li>
                    <li><strong>Năm 1994:</strong> Di tích được nâng cấp thành Di tích lịch sử cấp quốc gia.</li>
                    <li><strong>Năm 2005:</strong> Di tích được trùng tu, tôn tạo lớn với quy mô và diện mạo như hiện nay.</li>
                    <li><strong>Năm 2010:</strong> Hoàn thành việc xây dựng đường lên mộ với 365 bậc thang bằng đá granite.</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Mộ bà Hoàng Thị Loan không chỉ là nơi yên nghỉ của thân mẫu Chủ tịch Hồ Chí Minh mà còn là biểu tượng của tình mẫu tử thiêng liêng, của đạo hiếu trong truyền thống văn hóa Việt Nam.
                  </p>
                  <p>
                    Di tích này cũng là một phần quan trọng trong hệ thống các di tích liên quan đến cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh tại quê hương Nghệ An. Việc bảo tồn và phát huy giá trị của di tích có ý nghĩa quan trọng trong việc giáo dục truyền thống, đạo lý "uống nước nhớ nguồn" và lòng biết ơn đối với những người có công với đất nước.
                  </p>
                  <p>
                    Hàng năm, có hàng ngàn lượt du khách trong và ngoài nước đến viếng mộ bà Hoàng Thị Loan để bày tỏ lòng thành kính và biết ơn đối với người mẹ đã sinh thành, nuôi dưỡng vị lãnh tụ kính yêu của dân tộc Việt Nam.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động và trải nghiệm tại Mộ bà Hoàng Thị Loan</h2>

                  <h3>Các hoạt động chính</h3>
                  <ol>
                    <li>
                      <strong>Viếng mộ và dâng hương:</strong> Du khách có thể dâng hương, hoa và bày tỏ lòng thành kính đối với bà Hoàng Thị Loan - thân mẫu Chủ tịch Hồ Chí Minh.
                    </li>
                    <li>
                      <strong>Tham quan di tích:</strong> Du khách có thể tham quan khu vực mộ, nhà bia và tìm hiểu về cuộc đời, công lao của bà Hoàng Thị Loan.
                    </li>
                    <li>
                      <strong>Ngắm cảnh và chụp ảnh:</strong> Từ khu vực mộ, du khách có thể ngắm nhìn toàn cảnh vùng quê Nam Đàn và chụp những bức ảnh đẹp về phong cảnh thiên nhiên.
                    </li>
                    <li>
                      <strong>Tìm hiểu lịch sử:</strong> Du khách có thể tìm hiểu về lịch sử của khu di tích và cuộc đời của bà Hoàng Thị Loan thông qua các biển thông tin, bảng giới thiệu và hướng dẫn viên tại khu di tích.
                    </li>
                    <li>
                      <strong>Tham gia các hoạt động kỷ niệm:</strong> Vào các dịp lễ lớn như ngày sinh/mất của bà Hoàng Thị Loan, ngày sinh của Chủ tịch Hồ Chí Minh, khu di tích thường tổ chức nhiều hoạt động kỷ niệm ý nghĩa.
                    </li>
                  </ol>

                  <h3>Các dịp viếng thăm đặc biệt</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Các ngày lễ đặc biệt tại khu di tích</h4>
                    <ul>
                      <li><strong>Ngày 5/5 âm lịch:</strong> Ngày kỷ niệm bà Hoàng Thị Loan qua đời</li>
                      <li><strong>Ngày 19/5:</strong> Ngày sinh của Chủ tịch Hồ Chí Minh</li>
                      <li><strong>Ngày 2/9:</strong> Ngày Quốc khánh Việt Nam</li>
                      <li><strong>Dịp Tết Nguyên đán:</strong> Thời điểm nhiều người về quê và đến viếng mộ</li>
                    </ul>
                  </div>

                  <h3>Kết hợp tham quan</h3>
                  <p>
                    Du khách có thể kết hợp tham quan Mộ bà Hoàng Thị Loan với các di tích lịch sử khác trong khu vực Nam Đàn như:
                  </p>
                  <ul>
                    <li>Khu di tích Kim Liên (quê nội Bác Hồ)</li>
                    <li>Làng Hoàng Trù (quê ngoại Bác Hồ)</li>
                    <li>Đền Chung Sơn</li>
                    <li>Núi Chung</li>
                  </ul>
                  <p>
                    Các công ty du lịch thường tổ chức các tour tham quan trọn gói, bao gồm tất cả các điểm di tích liên quan đến Chủ tịch Hồ Chí Minh tại Nghệ An.
                  </p>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Mùa xuân (tháng 2-4) và mùa thu (tháng 9-11) khi thời tiết mát mẻ, dễ chịu.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, kín đáo và giày dép phù hợp để leo núi.</li>
                    <li><strong>Chuẩn bị:</strong> Mang theo nước uống, mũ, kem chống nắng nếu tham quan vào mùa hè.</li>
                    <li><strong>Tôn trọng không gian:</strong> Giữ im lặng, không nói to, cười đùa trong khu vực mộ.</li>
                    <li><strong>Hướng dẫn viên:</strong> Nên thuê hướng dẫn viên địa phương để hiểu sâu hơn về lịch sử, ý nghĩa của khu di tích.</li>
                    <li><strong>Lưu ý:</strong> 365 bậc thang lên mộ khá dốc, người cao tuổi hoặc có sức khỏe yếu nên đi chậm và nghỉ ngơi khi cần thiết.</li>
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
                  <p className="text-sm text-muted-foreground">Hàng ngày từ 7h - 17h</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Ban quản lý Khu di tích Kim Liên: 0238 3861 477</p>
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
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 46 về phía tây khoảng 15km đến huyện Nam Đàn. Sau đó, rẽ vào đường huyện theo biển chỉ dẫn đến xã Nam Giang, tiếp tục đi thêm khoảng 10km là đến chân núi Động Tranh. Từ đây, du khách sẽ đi bộ theo 365 bậc thang để lên đến mộ bà Hoàng Thị Loan. Tổng quãng đường từ Vinh khoảng 25km.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Từ Khu di tích Kim Liên</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ Khu di tích Kim Liên, du khách đi theo đường huyện khoảng 7km là đến núi Động Tranh, sau đó đi bộ lên 365 bậc thang để đến mộ bà.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thuận tiện để tự do khám phá</li>
                    <li>Taxi: Giá khoảng 300.000 - 350.000 VNĐ cho chuyến đi 2 chiều từ Vinh</li>
                    <li>Tour du lịch: Nhiều công ty lữ hành tổ chức tour tham quan kết hợp với các di tích khác trong vùng</li>
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
                    Di tích quê hương Chủ tịch Hồ Chí Minh (cách khoảng 7km)
                  </li>
                  <li>
                    <span className="font-medium block">Làng Hoàng Trù</span>
                    Quê ngoại của Chủ tịch Hồ Chí Minh (cách khoảng 9km)
                  </li>
                  <li>
                    <span className="font-medium block">Đền Chung Sơn</span>
                    Di tích lịch sử văn hóa thờ các danh nhân và anh hùng dân tộc (cách khoảng 5km)
                  </li>
                  <li>
                    <span className="font-medium block">Núi Chung</span>
                    Danh thắng tự nhiên với cảnh quan đẹp (cách khoảng 6km)
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
