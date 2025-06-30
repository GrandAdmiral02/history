
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DenVanLocPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3332155849.jpeg"
          alt="Đền Vạn Lộc"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Đền Vạn Lộc</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử văn hóa cấp quốc gia - Nơi thờ phụng các vị anh hùng dân tộc
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
            <span className="text-foreground">Đền Vạn Lộc</span>
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
                <TabsTrigger value="activities">Lễ hội</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Đền Vạn Lộc</h2>
                  <p>
                    <strong>Đền Vạn Lộc</strong> là một di tích lịch sử văn hóa cấp quốc gia nằm tại xã Hưng Lộc, thành phố Vinh, tỉnh Nghệ An. Đây là nơi thờ phụng các vị anh hùng dân tộc trong lịch sử đấu tranh chống ngoại xâm của vùng đất Nghệ An.
                  </p>
                  <p>
                    Đền được xây dựng trên một vị trí đồi cao, có cảnh quan tươi đẹp với nhiều cây xanh bao quanh. Từ đền, du khách có thể ngắm nhìn toàn cảnh thành phố Vinh và vùng nông thôn xung quanh, tạo nên một không gian yên bình, linh thiêng.
                  </p>
                  <p>
                    Đền Vạn Lộc không chỉ có giá trị tâm linh mà còn là nơi lưu giữ những giá trị văn hóa truyền thống, thu hút đông đảo nhân dân và du khách đến thăm viếng, cầu an và tìm hiểu về lịch sử địa phương.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3332155849.jpeg"
                        alt="Cổng chính Đền Vạn Lộc"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Không gian thờ tự Đền Vạn Lộc"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Xã Hưng Lộc, thành phố Vinh, tỉnh Nghệ An</li>
                    <li><strong>Cách trung tâm thành phố Vinh:</strong> Khoảng 8km về phía tây</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 6h00 đến 18h00</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc Đền Vạn Lộc</h2>

                  <h3>1. Cổng tam quan</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/3334769225/3332155849.jpeg"
                      alt="Cổng tam quan Đền Vạn Lộc"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Cổng tam quan của Đền Vạn Lộc được xây dựng theo kiến trúc truyền thống với ba cổng vòm tượng trưng cho ba cõi. Trên các cổng có nhiều họa tiết chạm khắc tinh xảo thể hiện tài nghệ của các nghệ nhân địa phương.
                  </p>

                  <h3>2. Điện thờ chính</h3>
                  <p>
                    Điện thờ chính có kiến trúc theo kiểu chữ Đinh với mái cong vút đặc trưng. Bên trong điện thờ có bàn thờ các vị anh hùng dân tộc với tượng thờ được điêu khắc trang nghiêm, uy nghiêm.
                  </p>

                  <h3>3. Hậu cung</h3>
                  <p>
                    Hậu cung là nơi thờ phụng các vị thần linh và tổ tiên, được trang trí với nhiều đồ thờ cúng quý giá và các bài vị thần linh.
                  </p>

                  <h3>4. Khu phụ trợ</h3>
                  <ul>
                    <li><strong>Nhà bia:</strong> Lưu giữ các bia đá ghi chép lịch sử đền và công đức của các nhà hảo tâm.</li>
                    <li><strong>Nhà khách:</strong> Phục vụ các đoàn tham quan và du khách nghỉ ngơi.</li>
                    <li><strong>Vườn cây:</strong> Với nhiều loài cây cổ thụ tạo không gian xanh mát.</li>
                  </ul>

                  <h3>5. Cảnh quan xung quanh</h3>
                  <p>
                    Đền nằm trên địa thế cao, xung quanh là cảnh quan thiên nhiên tươi đẹp với nhiều đồi núi nhỏ, cây cối xanh tươi. Từ đền có thể ngắm nhìn toàn cảnh thành phố Vinh và sông Lam thơ mộng.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Đền Vạn Lộc</h2>

                  <p>
                    Đền Vạn Lộc có lịch sử lâu đời, gắn liền với truyền thống thờ phụng các vị anh hùng dân tộc và thần linh bảo hộ của vùng đất Nghệ An.
                  </p>

                  <h3>Những dấu mốc lịch sử</h3>
                  <ul>
                    <li><strong>Thế kỷ XV:</strong> Đền được xây dựng lần đầu để thờ phụng các vị anh hùng địa phương.</li>
                    <li><strong>Thế kỷ XVII-XVIII:</strong> Đền được mở rộng và trùng tu với quy mô lớn hơn.</li>
                    <li><strong>Thế kỷ XIX:</strong> Dưới thời Nguyễn, đền tiếp tục được tu bổ và tôn tạo.</li>
                    <li><strong>1945-1975:</strong> Trong thời kỳ kháng chiến, đền bị hư hại một phần.</li>
                    <li><strong>Năm 1985:</strong> Được công nhận là Di tích lịch sử văn hóa cấp tỉnh.</li>
                    <li><strong>Năm 2000:</strong> Nâng cấp thành Di tích lịch sử văn hóa cấp quốc gia.</li>
                    <li><strong>2005-2010:</strong> Trùng tu lớn với sự đóng góp của nhân dân và nhà nước.</li>
                  </ul>

                  <h3>Các vị thần được thờ phụng</h3>
                  <p>
                    Tại Đền Vạn Lộc thờ phụng nhiều vị thần linh và anh hùng dân tộc, bao gồm:
                  </p>
                  <ul>
                    <li>Các vị anh hùng trong cuộc đấu tranh chống ngoại xâm</li>
                    <li>Các vị thần linh bảo hộ làng xóm</li>
                    <li>Các bậc tiền hiền có công với địa phương</li>
                  </ul>

                  <h3>Ý nghĩa văn hóa</h3>
                  <p>
                    Đền Vạn Lộc là nơi lưu giữ và phát huy các giá trị văn hóa truyền thống của dân tộc, thể hiện lòng biết ơn của nhân dân đối với các vị anh hùng và tổ tiên. Đền cũng là nơi tổ chức nhiều hoạt động văn hóa, tâm linh quan trọng của cộng đồng.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lễ hội và hoạt động tại Đền Vạn Lộc</h2>

                  <h3>Lễ hội truyền thống</h3>
                  <p>
                    <strong>Lễ hội Đền Vạn Lộc</strong> được tổ chức hàng năm vào tháng 3 âm lịch, thu hút đông đảo nhân dân và du khách tham dự.
                  </p>

                  <ol>
                    <li>
                      <strong>Lễ khai hội:</strong> Nghi lễ khai mạc lễ hội với sự tham gia của đại diện chính quyền và nhân dân địa phương.
                    </li>
                    <li>
                      <strong>Lễ tế chính:</strong> Nghi lễ trang nghiêm tưởng nhớ và cầu phúc cho các vị thần linh.
                    </li>
                    <li>
                      <strong>Các hoạt động văn nghệ:</strong> Trình diễn hát chèo, dân ca Nghệ Tĩnh, múa rối nước và các màn biểu diễn nghệ thuật truyền thống.
                    </li>
                    <li>
                      <strong>Các trò chơi dân gian:</strong> Tổ chức các trò chơi truyền thống như kéo co, đánh cờ người, bịt mắt bắt dê.
                    </li>
                  </ol>

                  <h3>Hoạt động thường nhật</h3>
                  <ul>
                    <li><strong>Thắp hương cầu an:</strong> Du khách có thể thắp hương cầu an, cầu phúc cho gia đình.</li>
                    <li><strong>Tham quan tìm hiểu:</strong> Khám phá kiến trúc và lịch sử của đền.</li>
                    <li><strong>Ngắm cảnh:</strong> Thưởng ngoạn cảnh quan thiên nhiên xung quanh đền.</li>
                  </ul>

                  <h3>Lịch trình tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (1-2 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:20:</strong> Tham quan cổng tam quan và khuôn viên đền</li>
                      <li><strong>08:20 - 09:00:</strong> Thắp hương, chiêm bái tại điện thờ chính</li>
                      <li><strong>09:00 - 09:20:</strong> Tham quan hậu cung và nhà bia</li>
                      <li><strong>09:20 - 09:40:</strong> Ngắm cảnh và chụp ảnh lưu niệm</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Tháng 3 âm lịch (mùa lễ hội) hoặc các tháng mùa thu khi thời tiết mát mẻ.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, kín đáo khi vào khu vực thờ tự.</li>
                    <li><strong>Cách đi lại:</strong> Từ trung tâm Vinh có thể đi xe máy hoặc ô tô khoảng 20 phút.</li>
                    <li><strong>Lưu ý:</strong> Nên thắp số lẻ nén hương và giữ thái độ trang nghiêm trong khu vực đền.</li>
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
                  <p className="text-sm text-muted-foreground">Xã Hưng Lộc, thành phố Vinh, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">Hàng ngày: 6h00 - 18h00</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Đền Vạn Lộc</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo đường Nguyễn Văn Cừ về hướng tây khoảng 8km, sau đó rẽ vào đường liên xã đến xã Hưng Lộc, theo biển chỉ dẫn đến Đền Vạn Lộc.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thời gian khoảng 20 phút</li>
                    <li>Ô tô: Thời gian khoảng 15 phút</li>
                    <li>Xe buýt: Có tuyến xe buýt đi qua khu vực</li>
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
                    Quê hương Chủ tịch Hồ Chí Minh (cách khoảng 12km)
                  </li>
                  <li>
                    <span className="font-medium block">Chùa Dân Nam</span>
                    Ngôi chùa cổ với kiến trúc đẹp (cách khoảng 5km)
                  </li>
                  <li>
                    <span className="font-medium block">Làng nghề gốm Bát Tràng Nghệ An</span>
                    Làng nghề truyền thống (cách khoảng 6km)
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
