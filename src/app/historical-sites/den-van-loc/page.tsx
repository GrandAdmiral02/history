
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
          src="https://ext.same-assets.com/3334769225/3719824639.jpeg"
          alt="Đền Vạn Lộc"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Đền Vạn Lộc</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích tín ngưỡng linh thiêng nổi tiếng của xứ Nghệ
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
                    <strong>Đền Vạn Lộc</strong> là một di tích tín ngưỡng quan trọng tại Nghệ An, nổi tiếng với sự linh thiêng và vẻ đẹp kiến trúc truyền thống. Đền được xây dựng để thờ phụng các vị thần linh, thánh hiền có công với dân tộc và địa phương.
                  </p>
                  <p>
                    Nằm trong khung cảnh thiên nhiên tươi đẹp, Đền Vạn Lộc không chỉ là nơi thờ cúng thiêng liêng mà còn là điểm tham quan du lịch tâm linh được nhiều người dân và du khách yêu thích. Đền mang đậm nét văn hóa tín ngưỡng dân gian xứ Nghệ.
                  </p>
                  <p>
                    Với kiến trúc độc đáo và những giá trị văn hóa sâu sắc, Đền Vạn Lộc đã trở thành một trong những điểm đến tâm linh không thể bỏ qua khi khám phá vùng đất Nghệ An.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3719824639.jpeg"
                        alt="Cổng vào Đền Vạn Lộc"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3110326546.jpeg"
                        alt="Không gian thờ tự Đền Vạn Lộc"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Tỉnh Nghệ An (cần cập nhật địa chỉ cụ thể)</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 25km</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 5h30 đến 18h30</li>
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
                      src="https://ext.same-assets.com/3334769225/3719824639.jpeg"
                      alt="Cổng tam quan Đền Vạn Lộc"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Cổng tam quan của Đền Vạn Lộc được thiết kế theo lối kiến trúc truyền thống với ba lối vào tượng trưng cho ba cõi. Cổng được trang trí bằng những họa tiết rồng phượng, hoa văn tinh xảo thể hiện tâm linh và sự tôn kính đối với các vị thần linh.
                  </p>
                  <p>
                    Kiến trúc cổng tam quan mang đậm phong cách nghệ thuật truyền thống Việt Nam, với mái cong đặc trưng và hệ thống cột trụ chắc chắn.
                  </p>

                  <h3>2. Đền chính</h3>
                  <p>
                    Đền chính có kiến trúc theo kiểu chữ Đinh, gồm tiền đường và hậu cung. Không gian bên trong đền được bài trí trang nghiêm với hệ thống bàn thờ, tượng thần và các đồ thờ cúng quý giá.
                  </p>
                  <p>
                    Mái đền được lợp ngói âm dương, tạo nên vẻ đẹp hài hòa với thiên nhiên xung quanh. Các cột trụ được làm bằng gỗ quý với những hoa văn chạm khắc tinh xảo.
                  </p>

                  <h3>3. Các công trình phụ</h3>
                  <ul>
                    <li><strong>Nhà bia:</strong> Nơi lưu giữ các bia đá ghi chép lịch sử và các công đức của nhân dân địa phương.</li>
                    <li><strong>Nhà khách:</strong> Nơi tiếp đón và nghỉ ngơi cho khách thập phương.</li>
                    <li><strong>Khu vườn:</strong> Không gian xanh mát với nhiều cây cảnh quý hiếm.</li>
                  </ul>

                  <h3>4. Đặc điểm nghệ thuật</h3>
                  <p>
                    Đền Vạn Lộc nổi bật với những đặc điểm nghệ thuật độc đáo:
                  </p>
                  <ul>
                    <li>Hệ thống chạm khắc gỗ tinh xảo trên các cột trụ, xà ngang</li>
                    <li>Các bức tranh thờ mang đậm tính nghệ thuật dân gian</li>
                    <li>Hệ thống tượng thần được tạc tác tỉ mỉ, sinh động</li>
                    <li>Các đồ thờ cúng bằng đồng, gốm sứ có giá trị nghệ thuật cao</li>
                    <li>Câu đối, hoành phi được viết bằng chữ Hán cổ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Đền Vạn Lộc</h2>

                  <p>
                    Đền Vạn Lộc có lịch sử lâu đời, gắn liền với tín ngưỡng và văn hóa tâm linh của người dân xứ Nghệ qua nhiều thế hệ.
                  </p>

                  <h3>Quá trình hình thành và phát triển</h3>
                  <ul>
                    <li><strong>Thời kỳ sơ khai:</strong> Đền được xây dựng từ nhiều thế kỷ trước, ban đầu chỉ là một ngôi miếu nhỏ thờ thần linh địa phương.</li>
                    <li><strong>Thế kỷ XVI-XVII:</strong> Đền được mở rộng và trùng tu, trở thành một trong những trung tâm tín ngưỡng quan trọng của vùng.</li>
                    <li><strong>Thế kỷ XVIII-XIX:</strong> Dưới sự quan tâm của triều đình và nhân dân, đền được tu sửa nhiều lần với quy mô ngày càng lớn.</li>
                    <li><strong>Thế kỷ XX:</strong> Đền trải qua nhiều biến cố lịch sử nhưng vẫn được nhân dân địa phương bảo vệ và duy trì.</li>
                    <li><strong>Hiện tại:</strong> Đền được tu bổ, tôn tạo và trở thành điểm du lịch tâm linh thu hút nhiều du khách.</li>
                  </ul>

                  <h3>Các vị thần linh được thờ</h3>
                  <p>
                    Tại Đền Vạn Lộc, nhân dân thờ phụng nhiều vị thần linh khác nhau:
                  </p>
                  <ul>
                    <li><strong>Thành Hoàng:</strong> Vị thần bảo vệ làng xã, đất nước</li>
                    <li><strong>Thần Tài:</strong> Vị thần mang lại may mắn, thịnh vượng</li>
                    <li><strong>Quan Âm:</strong> Vị Bồ Tát từ bi, cứu khổ cứu nạn</li>
                    <li><strong>Các vị Thánh:</strong> Những nhân vật lịch sử có công với dân tộc</li>
                  </ul>

                  <h3>Ý nghĩa văn hóa và tâm linh</h3>
                  <p>
                    Đền Vạn Lộc không chỉ là nơi thờ cúng mà còn là biểu tượng của đời sống tâm linh phong phú của người dân Nghệ An. Đền thể hiện lòng tin của con người đối với những giá trị thiêng liêng, sự mong muốn được bình an và hạnh phúc.
                  </p>
                  <p>
                    Đây cũng là nơi lưu giữ và truyền bá những giá trị đạo đức, nhân văn sâu sắc của dân tộc Việt Nam qua các thế hệ.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lễ hội và hoạt động tại Đền Vạn Lộc</h2>

                  <h3>Lễ hội thường niên</h3>
                  <p>
                    <strong>Lễ hội Đền Vạn Lộc</strong> được tổ chức hàng năm vào dịp xuân, thu hút đông đảo người dân và du khách tham dự.
                  </p>

                  <ol>
                    <li>
                      <strong>Thời gian tổ chức:</strong> Thường vào tháng 3 âm lịch, kéo dài 2-3 ngày.
                    </li>
                    <li>
                      <strong>Các nghi lễ chính:</strong>
                      <ul>
                        <li><strong>Lễ khai mạc:</strong> Nghi thức trang nghiêm mở đầu lễ hội</li>
                        <li><strong>Lễ dâng hương:</strong> Toàn thể cộng đồng cùng dâng hương tại đền chính</li>
                        <li><strong>Lễ cầu an:</strong> Cầu cho quốc thái dân an, mưa thuận gió hòa</li>
                        <li><strong>Lễ cầu siêu:</strong> Cầu cho các anh linh được siêu thoát</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Hoạt động văn hóa:</strong> Biểu diễn hát chèo, múa rồng, múa lân, các trò chơi dân gian và phiên chợ đặc sản.
                    </li>
                  </ol>

                  <h3>Hoạt động tham quan thường ngày</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (1-2 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:30:</strong> Tham quan cổng tam quan và khuôn viên đền</li>
                      <li><strong>08:30 - 09:15:</strong> Vào đền chính thắp hương, cầu nguyện</li>
                      <li><strong>09:15 - 09:45:</strong> Tìm hiểu về lịch sử và ý nghĩa của đền</li>
                      <li><strong>09:45 - 10:00:</strong> Nghỉ ngơi, chụp ảnh lưu niệm</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm tốt nhất:</strong> Sáng sớm (6h-8h) hoặc chiều mát (16h-18h)</li>
                    <li><strong>Trang phục:</strong> Ăn mặc lịch sự, kín đáo khi vào khu vực thờ tự</li>
                    <li><strong>Quy tắc thắp hương:</strong> Thắp số lẻ nén hương, cầu nguyện với lòng thành</li>
                    <li><strong>Công đức:</strong> Có thể đóng góp tiền công đức để tu bổ đền và làm từ thiện</li>
                  </ul>

                  <h3>Dịch vụ tại đền</h3>
                  <ul>
                    <li><strong>Hướng dẫn viên:</strong> Có thể thuê hướng dẫn viên địa phương</li>
                    <li><strong>Bán hương:</strong> Cung cấp hương nến và các vật phẩm thờ cúng</li>
                    <li><strong>Lưu trú:</strong> Có nhà khách cho những ai muốn ở lại qua đêm</li>
                    <li><strong>Ăn uống:</strong> Các quán ăn chay và món ăn địa phương xung quanh đền</li>
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
                  <p className="text-sm text-muted-foreground">Tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">Hàng ngày: 5h30 - 18h30</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 XXXX XXX</p>
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
                    Đi theo Quốc lộ hoặc đường tỉnh khoảng 25km, theo biển chỉ dẫn đến Đền Vạn Lộc.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Phương tiện thuận tiện nhất</li>
                    <li>Ô tô: Có đường bê tông, dễ di chuyển</li>
                    <li>Xe khách: Có tuyến xe khách đi qua khu vực</li>
                    <li>Tour du lịch: Các công ty lữ hành tổ chức tour tham quan</li>
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
                    <span className="font-medium block">Các đền chùa khác</span>
                    Nhiều đền chùa linh thiêng trong khu vực
                  </li>
                  <li>
                    <span className="font-medium block">Làng nghề truyền thống</span>
                    Các làng nghề đặc trưng của địa phương
                  </li>
                  <li>
                    <span className="font-medium block">Khu di tích lịch sử</span>
                    Các di tích lịch sử văn hóa gần đó
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
