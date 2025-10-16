import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ZeroMilestonePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://e.baonghean.vn/wp-content/uploads/2023/04/T%E1%BB%A7i-ph%E1%BA%ADn-m%E1%BB%91c-Km0-Anhtieude.png"
          alt="Cột mốc số 0"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cột Mốc Số 0</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Biểu tượng khởi đầu của hành trình khám phá Việt Nam tại Nghệ An
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
            <span className="text-foreground">Cột Mốc Số 0</span>
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
                <TabsTrigger value="attractions">Thiết kế</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Hoạt động</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Cột Mốc Số 0</h2>
                  <p>
                    <strong>Cột Mốc Số 0</strong> là một biểu tượng độc đáo nằm tại thành phố Vinh, tỉnh Nghệ An, đánh dấu điểm khởi đầu của các tuyến đường giao thông huyết mạch, đặc biệt là Quốc lộ 1A. Đây là nơi được xem như "cửa ngõ" để khám phá các cung đường Việt Nam.
                  </p>
                  <p>
                    Với vị trí ngay trung tâm thành phố, Cột Mốc Số 0 không chỉ có ý nghĩa giao thông mà còn là điểm check-in nổi tiếng, thu hút nhiều du khách đến tham quan, chụp ảnh và tìm hiểu về ý nghĩa văn hóa, lịch sử của địa danh này.
                  </p>
                  <p>
                    Cột mốc được thiết kế đơn giản nhưng trang trọng, mang đậm dấu ấn của một biểu tượng giao thông quốc gia, đại diện cho sự khởi đầu và hành trình khám phá.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://media.thuonghieucongluan.vn/uploads/2019_05_13/kmo-1557735265.jpg"
                        alt="Cột Mốc Số 0"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://nguoiduatin.mediacdn.vn/media/nguyen-hoang-yen/2019/05/18/1d.JPG"
                        alt="Cột Mốc Số 0 về đêm"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Quảng trường Hồ Chí Minh, thành phố Vinh, tỉnh Nghệ An</li>
                    <li><strong>Cách trung tâm thành phố Vinh:</strong> Ngay trung tâm</li>
                    <li><strong>Giờ mở cửa:</strong> 24/7</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 30 phút - 1 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Thiết kế Cột Mốc Số 0</h2>

                  <h3>1. Thiết kế tổng thể</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/4028eaa467f477c80167f48e23810ac6/062022/di-tich-quoc-gia-dac-biet-km-so-0-o-nghe-an-xuong-cap-nghiem-trong_20220630070433.jpg"
                      alt="Cột Mốc Số 0"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Cột Mốc Số 0 được thiết kế dưới dạng một cột trụ hình trụ cao khoảng 2 mét, làm bằng đá granite bền vững, với dòng chữ "KM 0" khắc nổi bật ở đỉnh cột. Phần đế cột được ốp đá cẩm thạch, tạo sự trang trọng và chắc chắn.
                  </p>
                  <p>
                    Xung quanh cột mốc là không gian mở với quảng trường rộng lớn, được trang trí bằng cây xanh, đèn chiếu sáng và các lối đi bộ, tạo điều kiện thuận lợi cho du khách tham quan.
                  </p>

                  <h3>2. Khu vực xung quanh</h3>
                  <p>
                    Cột Mốc Số 0 nằm ngay tại Quảng trường Hồ Chí Minh, một địa điểm trung tâm của thành phố Vinh. Quảng trường được thiết kế với không gian rộng rãi, có tượng đài Chủ tịch Hồ Chí Minh và các khu vực cảnh quan, là nơi tổ chức nhiều sự kiện văn hóa lớn.
                  </p>
                  <p>
                    Khu vực này được chiếu sáng vào ban đêm, làm nổi bật vẻ đẹp của cột mốc và tạo nên một không gian check-in lý tưởng cho du khách.
                  </p>

                  <h3>3. Ý nghĩa thiết kế</h3>
                  <p>
                    Thiết kế của Cột Mốc Số 0 mang ý nghĩa biểu tượng cho sự khởi đầu, điểm xuất phát của mọi hành trình. Với hình ảnh đơn giản nhưng mạnh mẽ, cột mốc không chỉ là một dấu hiệu giao thông mà còn là biểu tượng văn hóa, khơi gợi tinh thần khám phá và kết nối.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Cột Mốc Số 0</h2>

                  <p>
                    Cột Mốc Số 0 tại Nghệ An là một phần trong hệ thống cột mốc giao thông được thiết lập trên toàn quốc, đánh dấu điểm khởi đầu của các tuyến đường huyết mạch, đặc biệt là Quốc lộ 1A - tuyến đường xuyên Việt.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>Thế kỷ XX:</strong> Cột mốc số 0 được xây dựng lần đầu tiên để đánh dấu điểm khởi đầu của Quốc lộ 1A tại thành phố Vinh.</li>
                    <li><strong>Năm 1975:</strong> Sau khi đất nước thống nhất, cột mốc được trùng tu để tôn vinh ý nghĩa giao thông và văn hóa của nó.</li>
                    <li><strong>Năm 2000:</strong> Cột mốc được cải tạo và di dời về vị trí hiện tại tại Quảng trường Hồ Chí Minh, trở thành một biểu tượng của thành phố.</li>
                    <li><strong>Năm 2010:</strong> Cột mốc được nâng cấp với thiết kế hiện đại hơn, sử dụng vật liệu bền vững và được tích hợp vào không gian quảng trường.</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Cột Mốc Số 0 không chỉ là một dấu mốc giao thông mà còn là biểu tượng của sự kết nối, khởi đầu và hành trình khám phá đất nước. Nó đại diện cho tinh thần đoàn kết và sự phát triển của Việt Nam, đặc biệt là tại vùng đất Nghệ An - quê hương của Chủ tịch Hồ Chí Minh.
                  </p>
                  <p>
                    Cột mốc còn là nơi ghi dấu nhiều sự kiện văn hóa, chính trị quan trọng của tỉnh Nghệ An, từ các lễ hội, sự kiện cộng đồng đến các hoạt động giao lưu văn hóa.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động tại Cột Mốc Số 0</h2>

                  <h3>Hoạt động tham quan</h3>
                  <p>
                    Cột Mốc Số 0 là một điểm đến không thể bỏ qua khi đến thành phố Vinh. Du khách thường ghé thăm để chụp ảnh lưu niệm, tìm hiểu về ý nghĩa của cột mốc và khám phá không gian Quảng trường Hồ Chí Minh.
                  </p>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (1 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:15:</strong> Chụp ảnh tại Cột Mốc Số 0</li>
                      <li><strong>08:15 - 08:30:</strong> Tham quan Quảng trường Hồ Chí Minh và tượng đài</li>
                      <li><strong>08:30 - 09:00:</strong> Dạo bộ, khám phá không gian xung quanh và tìm hiểu lịch sử cột mốc</li>
                    </ol>
                  </div>

                  <h3>Các sự kiện văn hóa</h3>
                  <p>
                    Cột Mốc Số 0 nằm trong khu vực Quảng trường Hồ Chí Minh, nơi thường xuyên tổ chức các sự kiện văn hóa lớn như:
                  </p>
                  <ul>
                    <li><strong>Lễ hội ánh sáng:</strong> Diễn ra vào các dịp lễ lớn như Tết Nguyên Đán, Quốc khánh 2/9.</li>
                    <li><strong>Chương trình ca nhạc:</strong> Các buổi biểu diễn nghệ thuật dân gian và hiện đại.</li>
                    <li><strong>Triển lãm ngoài trời:</strong> Trưng bày các tác phẩm nghệ thuật, ảnh lịch sử về Nghệ An.</li>
                  </ul>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Buổi sáng sớm hoặc chiều tối để tránh nắng nóng và tận hưởng không gian thoáng đãng.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục thoải mái, phù hợp với việc đi bộ.</li>
                    <li><strong>Chụp ảnh:</strong> Nên chụp ảnh vào buổi tối khi cột mốc được chiếu sáng, tạo hiệu ứng đẹp.</li>
                    <li><strong>Cách đi lại:</strong> Cột mốc nằm ngay trung tâm thành phố Vinh, dễ dàng di chuyển bằng xe máy, taxi hoặc đi bộ từ các khu vực lân cận.</li>
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
                  <p className="text-sm text-muted-foreground">Quảng trường Hồ Chí Minh, thành phố Vinh, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">24/7</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3843 XXX</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Cột Mốc Số 0</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ trung tâm thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Cột Mốc Số 0 nằm ngay tại Quảng trường Hồ Chí Minh, trung tâm thành phố Vinh, dễ dàng tiếp cận bằng bất kỳ phương tiện nào.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Phù hợp để di chuyển quanh thành phố</li>
                    <li>Taxi: Giá khoảng 50.000 - 100.000 VNĐ từ các khu vực trong thành phố</li>
                    <li>Xe buýt: Có nhiều tuyến xe buýt đi qua Quảng trường Hồ Chí Minh</li>
                    <li>Đi bộ: Nếu bạn ở gần trung tâm, có thể đi bộ để tham quan</li>
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
                    <span className="font-medium block">Bảo tàng Xô Viết Nghệ Tĩnh</span>
                    Nơi lưu giữ lịch sử phong trào Xô Viết Nghệ Tĩnh (cách khoảng 2km)
                  </li>
                  <li>
                    <span className="font-medium block">Công viên Trung tâm</span>
                    Không gian xanh mát, lý tưởng để thư giãn (cách khoảng 1km)
                  </li>
                  <li>
                    <span className="font-medium block">Sông Lam</span>
                    Dòng sông nổi tiếng gắn liền với văn hóa Nghệ An (cách khoảng 3km)
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