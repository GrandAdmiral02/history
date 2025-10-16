
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
          src="https://63stravel.com/s3_amazon/d4c75bfe-7b1c-4e34-91be-7cdb71b2952d-qua-son-1-1505jpg20240518140920.jpg"
          alt="Đền Quả Sơn"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Đền Quả Sơn</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử văn hóa cấp quốc gia, thờ Mai Hắc Đế - vua nông dân đầu tiên của Việt Nam
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
                <TabsTrigger value="attractions">Kiến trúc</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Lễ hội</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Đền Quả Sơn</h2>
                  <p>
                    <strong>Đền Quả Sơn</strong> là một di tích lịch sử văn hóa cấp quốc gia nằm tại huyện Đô Lương, tỉnh Nghệ An. Đây là nơi thờ phụng Mai Hắc Đế - vị vua nông dân đầu tiên trong lịch sử Việt Nam và là biểu tượng của tinh thần đấu tranh bất khuất của nhân dân lao động.
                  </p>
                  <p>
                    Đền được xây dựng trên một ngọn núi thấp, nằm ở trung tâm xã Hồng Sơn, huyện Đô Lương. Từ đền, du khách có thể ngắm nhìn toàn cảnh vùng nông thôn Nghệ An rộng lớn với những cánh đồng lúa xanh tươi và dãy núi hùng vĩ.
                  </p>
                  <p>
                    Đền Quả Sơn không chỉ có giá trị lịch sử to lớn mà còn là nơi lưu giữ những nét văn hóa truyền thống đặc sắc của vùng đất Nghệ An, thu hút hàng nghìn lượt du khách thập phương đến tham quan, chiêm bái mỗi năm.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://statics.vinpearl.com/den-qua-son-1_1633840174.jpg"
                        alt="Cổng chính Đền Quả Sơn"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNc84MrsvPcRRFYztFeD8O5i1Q7mV8BQGh7eqLFKUhADHLL_xO5jk8z2GqC79XdC4oGw4&usqp=CAU"
                        alt="Không gian thờ tự Đền Quả Sơn"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Xã Hồng Sơn, huyện Đô Lương, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 45km về phía tây</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 6h00 đến 18h00</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc Đền Quả Sơn</h2>

                  <h3>1. Cổng tam quan</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://bna.1cdn.vn/2023/02/06/uploaded-huythubna-2023_02_06-_bna-3-355.jpg"
                      alt="Cổng tam quan Đền Quả Sơn"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Cổng tam quan của Đền Quả Sơn được xây dựng theo lối kiến trúc truyền thống với ba cổng vòm cách điệu tinh xảo. Trên các cổng có khắc nhiều hoa văn, họa tiết mang đậm bản sắc văn hóa dân tộc.
                  </p>

                  <h3>2. Đại điện thờ chính</h3>
                  <p>
                    Đại điện có kiến trúc theo kiểu chữ Đinh với mái cong vút, được làm bằng gỗ quý và gạch cổ. Trong đại điện có bàn thờ Mai Hắc Đế với tượng thờ được điêu khắc tinh xảo, thể hiện vẻ uy nghiêm của vị vua nông dân.
                  </p>

                  <h3>3. Các công trình phụ</h3>
                  <ul>
                    <li><strong>Nhà bia:</strong> Lưu giữ các bia đá ghi chép công đức và lịch sử đền qua các thời kỳ.</li>
                    <li><strong>Hậu cung:</strong> Nơi thờ phụng các vị thần hộ mệnh và tổ tiên.</li>
                    <li><strong>Khu vườn linh thiêng:</strong> Với nhiều cây cổ thụ hàng trăm năm tuổi.</li>
                  </ul>

                  <h3>4. Không gian thiêng liêng</h3>
                  <p>
                    Toàn bộ khu đền được bao quanh bởi khung cảnh thiên nhiên hùng vĩ với núi non, cây cối, tạo nên một không gian yên tĩnh, trang nghiêm, phù hợp cho việc tham quan, chiêm bái và tìm hiểu về lịch sử.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Đền Quả Sơn</h2>

                  <p>
                    Đền Quả Sơn có lịch sử gắn liền với Mai Hắc Đế (thế kỷ VIII-IX), người được coi là vua nông dân đầu tiên trong lịch sử Việt Nam.
                  </p>

                  <h3>Sự tích Mai Hắc Đế</h3>
                  <p>
                    Mai Hắc Đế tên thật là Mai Thúc Loan, sinh ra trong một gia đình nông dân nghèo ở vùng Hoan Châu (nay là Nghệ An). Vào thế kỷ VIII, ông đã đứng lên lãnh đạo cuộc khởi nghĩa của nông dân chống lại sự áp bức của triều đình nhà Đường.
                  </p>
                  <p>
                    Năm 722, Mai Thúc Loan tự xưng là Hắc Đế (Hoàng đế da đen), thành lập nhà nước độc lập và cai trị vùng đất từ Nghệ An đến Quảng Bình trong 6 năm.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>Thế kỷ VIII:</strong> Mai Hắc Đế khởi nghĩa và thành lập nhà nước độc lập.</li>
                    <li><strong>Thế kỷ X-XI:</strong> Người dân địa phương bắt đầu thờ phụng Mai Hắc Đế như một vị anh hùng dân tộc.</li>
                    <li><strong>Thế kỷ XV:</strong> Đền được xây dựng chính thức để thờ phụng Mai Hắc Đế.</li>
                    <li><strong>Thế kỷ XVII-XVIII:</strong> Đền được mở rộng và tôn tạo với quy mô lớn hơn.</li>
                    <li><strong>Năm 1962:</strong> Đền Quả Sơn được công nhận là Di tích lịch sử cấp tỉnh.</li>
                    <li><strong>Năm 1990:</strong> Được nâng cấp thành Di tích lịch sử văn hóa cấp quốc gia.</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử</h3>
                  <p>
                    Đền Quả Sơn không chỉ tôn vinh Mai Hắc Đế - vị vua nông dân đầu tiên mà còn là biểu tượng của tinh thần yêu nước, ý chí đấu tranh vì tự do, độc lập của dân tộc Việt Nam từ thời kỳ đầu.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lễ hội và hoạt động tại Đền Quả Sơn</h2>

                  <h3>Lễ hội truyền thống</h3>
                  <p>
                    <strong>Lễ hội Đền Quả Sơn</strong> được tổ chức hàng năm vào tháng 3 âm lịch, thu hút hàng nghìn người dân và du khách tham dự.
                  </p>

                  <ol>
                    <li>
                      <strong>Lễ tế chính:</strong> Nghi lễ trang nghiêm tưởng nhớ công đức của Mai Hắc Đế với sự tham gia của các nhân sĩ và đại diện chính quyền địa phương.
                    </li>
                    <li>
                      <strong>Lễ rước kiệu:</strong> Rước kiệu Mai Hắc Đế quanh khu vực đền với sự tham gia của đông đảo nhân dân.
                    </li>
                    <li>
                      <strong>Hoạt động văn nghệ:</strong> Trình diễn các làn điệu dân ca Nghệ Tĩnh, hát chèo, múa rối nước và các trò chơi dân gian.
                    </li>
                  </ol>

                  <h3>Các hoạt động tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (2 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:30:</strong> Tham quan cổng tam quan và khuôn viên đền</li>
                      <li><strong>08:30 - 09:15:</strong> Thắp hương, chiêm bái tại đại điện thờ chính</li>
                      <li><strong>09:15 - 09:45:</strong> Tham quan nhà bia và tìm hiểu lịch sử</li>
                      <li><strong>09:45 - 10:00:</strong> Ngắm cảnh và chụp ảnh lưu niệm</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Tháng 3 âm lịch (mùa lễ hội) hoặc các tháng thu đông khi thời tiết mát mẻ.</li>
                    <li><strong>Trang phục:</strong> Nên mặc trang phục lịch sự, kín đáo khi vào khu vực thờ tự.</li>
                    <li><strong>Cách đi lại:</strong> Từ Vinh có thể đi xe máy hoặc ô tô theo Quốc lộ 7 khoảng 45km đến huyện Đô Lương, sau đó theo đường liên xã đến đền.</li>
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
                  <p className="text-sm text-muted-foreground">Xã Hồng Sơn, huyện Đô Lương, tỉnh Nghệ An</p>
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
                <h3 className="text-lg font-semibold text-green-800">Đường đến Đền Quả Sơn</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 7 về hướng tây khoảng 45km đến huyện Đô Lương, sau đó theo đường liên xã đến xã Hồng Sơn, theo biển chỉ dẫn đến Đền Quả Sơn.
                  </p>
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
                    <span className="font-medium block">Khu du lịch sinh thái Đô Lương</span>
                    Khu sinh thái với nhiều hoạt động giải trí (cách khoảng 5km)
                  </li>
                  <li>
                    <span className="font-medium block">Chùa Đức Hạnh</span>
                    Ngôi chùa cổ với kiến trúc độc đáo (cách khoảng 8km)
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
