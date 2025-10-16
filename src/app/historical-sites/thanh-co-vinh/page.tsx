
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
          src="https://vcdn1-vnexpress.vnecdn.net/2015/11/07/IMG-8325-1446861611.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=9XCm-YTOSh-iAnjXc5pnNg"
          alt="Thành cổ Vinh"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thành cổ Vinh</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Chứng tích lịch sử và nơi ghi lại dấu ấn nhiều biến động của xứ Nghệ
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
                <TabsTrigger value="attractions">Kiến trúc</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Tham quan</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Thành cổ Vinh</h2>
                  <p>
                    <strong>Thành cổ Vinh</strong> là một di tích lịch sử văn hóa quan trọng nằm tại thành phố Vinh, tỉnh Nghệ An. Đây là công trình kiến trúc quân sự cổ, được xây dựng từ thế kỷ XVII, đóng vai trò quan trọng trong lịch sử bảo vệ và phát triển của vùng đất xứ Nghệ.
                  </p>
                  <p>
                    Thành cổ Vinh không chỉ là một di tích lịch sử mà còn là biểu tượng của tinh thần kiên cường, bất khuất của người dân Nghệ An qua nhiều thế kỷ. Những bức tường thành cổ kính còn lại đến nay vẫn ghi dấu ấn của những biến động lịch sử, những cuộc chiến tranh và hòa bình.
                  </p>
                  <p>
                    Ngày nay, Thành cổ Vinh đã trở thành một điểm tham quan du lịch quan trọng, thu hút nhiều du khách trong và ngoài nước đến tìm hiểu về lịch sử và văn hóa của xứ Nghệ anh hùng.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://mia.vn/media/uploads/blog-du-lich/thanh-co-vinh-01-1700059284.jpg"
                        alt="Cổng thành cổ Vinh"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://vanhoavaphattrien.vn/uploads/images/2024/10/07/z5906712310689-1ce68c947ad1815298040eee56bcf089-1728314925.jpg"
                        alt="Tường thành cổ Vinh"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Trung tâm thành phố Vinh, tỉnh Nghệ An</li>
                    <li><strong>Cách trung tâm:</strong> Tại trung tâm thành phố</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 6h00 đến 22h00</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc Thành cổ Vinh</h2>

                  <h3>1. Hệ thống tường thành</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ticotravel.com.vn/wp-content/uploads/2024/10/thanh-co-vinh-11.jpeg"
                      alt="Tường thành cổ Vinh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Hệ thống tường thành của Thành cổ Vinh được xây dựng bằng đá và gạch, có độ dày lên đến 2-3 mét. Tường thành được thiết kế theo kiến trúc quân sự truyền thống với các lỗ châu mai và hệ thống phòng thủ kiên cố.
                  </p>
                  <p>
                    Mặc dù qua thời gian và các cuộc chiến tranh, nhiều đoạn tường thành đã bị hư hại, nhưng những phần còn lại vẫn thể hiện rõ nét kiến trúc quân sự độc đáo của thời xưa.
                  </p>

                  <h3>2. Cổng thành</h3>
                  <p>
                    Thành cổ Vinh có nhiều cổng thành được xây dựng theo phong cách kiến trúc truyền thống. Các cổng thành không chỉ có chức năng phòng thủ mà còn thể hiện tính thẩm mỹ cao với những họa tiết chạm khắc tinh xảo.
                  </p>
                  <p>
                    Cổng chính của thành có kiến trúc hùng vĩ, được trang trí bằng các họa tiết rồng phượng và hoa văn truyền thống, thể hiện quyền uy và vẻ đẹp của kiến trúc cung đình thời xưa.
                  </p>

                  <h3>3. Hệ thống công sự</h3>
                  <ul>
                    <li><strong>Lũy tre:</strong> Hệ thống phòng thủ bằng tre nứa bao quanh thành.</li>
                    <li><strong>Hào nước:</strong> Kênh đào bao quanh thành để tăng cường khả năng phòng thủ.</li>
                    <li><strong>Pháo đài:</strong> Các vị trí đặt pháo và quan sát được bố trí khoa học.</li>
                  </ul>

                  <h3>4. Hiện vật và tàn tích</h3>
                  <p>
                    Khu vực Thành cổ Vinh hiện còn lưu giữ nhiều hiện vật quý giá:
                  </p>
                  <ul>
                    <li>Các khối đá tảng lớn của tường thành cổ</li>
                    <li>Hệ thống cống thoát nước cổ</li>
                    <li>Các viên gạch cổ có niên đại hàng trăm năm</li>
                    <li>Dấu tích của các công trình kiến trúc cung đình</li>
                    <li>Các hiện vật khảo cổ được phát hiện trong quá trình khai quật</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Thành cổ Vinh</h2>

                  <p>
                    Thành cổ Vinh có lịch sử hình thành và phát triển gắn liền với quá trình xây dựng và bảo vệ vùng đất xứ Nghệ qua nhiều thời kỳ lịch sử.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>Thế kỷ XVII:</strong> Thành cổ Vinh được xây dựng dưới thời chúa Nguyễn để bảo vệ vùng đất phía Bắc và làm căn cứ quân sự quan trọng.</li>
                    <li><strong>Thế kỷ XVIII:</strong> Thành được mở rộng và củng cố thêm, trở thành một trong những thành trì kiên cố nhất miền Trung.</li>
                    <li><strong>Thế kỷ XIX:</strong> Dưới thời nhà Nguyễn, thành tiếp tục được trùng tu và nâng cấp, đóng vai trò quan trọng trong hệ thống phòng thủ quốc gia.</li>
                    <li><strong>Thời kỳ kháng chiến chống Pháp:</strong> Thành cổ Vinh là nơi diễn ra nhiều trận đánh ác liệt giữa quân dân ta và quân xâm lược.</li>
                    <li><strong>Thời kỳ kháng chiến chống Mỹ:</strong> Khu vực này chịu nhiều thiệt hại do bom đạn, nhiều công trình bị phá hủy.</li>
                    <li><strong>Từ năm 1975 đến nay:</strong> Các di tích được bảo tồn và tu bổ, trở thành điểm tham quan du lịch quan trọng.</li>
                  </ul>

                  <h3>Vai trò trong lịch sử</h3>
                  <p>
                    Thành cổ Vinh đã đóng vai trò quan trọng như một trung tâm quân sự, hành chính và kinh tế của vùng. Từ đây, các chúa Nguyễn và sau này là triều đình nhà Nguyễn đã điều hành và quản lý vùng đất rộng lớn phía Bắc.
                  </p>
                  <p>
                    Trong các cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, khu vực Thành cổ Vinh là nơi diễn ra nhiều sự kiện lịch sử quan trọng, là minh chứng cho tinh thần anh dũng, bất khuất của nhân dân Nghệ An.
                  </p>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Thành cổ Vinh không chỉ có giá trị về mặt kiến trúc và lịch sử mà còn là biểu tượng của sự kiên cường, bền bỉ của người dân xứ Nghệ. Những tàn tích còn lại của thành cổ là bằng chứng sống động về một thời kỳ huy hoàng trong lịch sử dân tộc.
                  </p>
                  <p>
                    Di tích này cũng góp phần quan trọng trong việc giáo dục truyền thống lịch sử, văn hóa cho các thế hệ trẻ, giúp họ hiểu rõ hơn về quá khứ hào hùng của quê hương.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Tham quan Thành cổ Vinh</h2>

                  <h3>Hoạt động tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (2-3 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:30:</strong> Tham quan khu vực cổng thành và tìm hiểu lịch sử hình thành</li>
                      <li><strong>08:30 - 09:30:</strong> Khám phá hệ thống tường thành và các công trình phòng thủ</li>
                      <li><strong>09:30 - 10:30:</strong> Tham quan các hiện vật và tàn tích khảo cổ</li>
                      <li><strong>10:30 - 11:00:</strong> Chụp ảnh lưu niệm và mua quà lưu niệm</li>
                    </ol>
                  </div>

                  <h3>Các hoạt động văn hóa</h3>
                  <p>
                    Tại Thành cổ Vinh thường xuyên tổ chức các hoạt động văn hóa, giáo dục như:
                  </p>
                  <ul>
                    <li><strong>Triển lãm lịch sử:</strong> Trưng bày các hiện vật, tài liệu về lịch sử thành cổ và vùng đất Nghệ An.</li>
                    <li><strong>Chương trình giáo dục:</strong> Tổ chức các buổi thuyết trình, hướng dẫn cho học sinh, sinh viên.</li>
                    <li><strong>Lễ hội truyền thống:</strong> Các ngày lễ lớn trong năm có tổ chức các hoạt động văn hóa, nghệ thuật.</li>
                    <li><strong>Tour du lịch lịch sử:</strong> Kết hợp tham quan thành cổ với các di tích lịch sử khác trong thành phố Vinh.</li>
                  </ul>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Buổi sáng sớm (7h-9h) hoặc chiều tối (16h-18h) khi thời tiết mát mẻ.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục thoải mái, giày dép phù hợp để đi lại trên địa hình gồ ghề.</li>
                    <li><strong>Chuẩn bị:</strong> Mang theo nước uống, mũ che nắng và máy ảnh để ghi lại khoảnh khắc đẹp.</li>
                    <li><strong>Hướng dẫn viên:</strong> Nên thuê hướng dẫn viên địa phương để hiểu rõ hơn về lịch sử và ý nghĩa của di tích.</li>
                  </ul>

                  <h3>Lưu ý quan trọng</h3>
                  <ul>
                    <li>Giữ gìn vệ sinh và bảo vệ di tích, không vẽ bậy hoặc làm hỏng các công trình cổ</li>
                    <li>Tuân thủ quy định về an toàn khi tham quan, đặc biệt với trẻ em</li>
                    <li>Tôn trọng không gian di tích, không gây ồn ào</li>
                    <li>Chụp ảnh ở những khu vực được phép</li>
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
                  <p className="text-sm text-muted-foreground">Trung tâm thành phố Vinh, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">Hàng ngày: 6h00 - 22h00</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3842 XXX</p>
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
                    Thành cổ Vinh nằm ngay tại trung tâm thành phố, có thể đi bộ hoặc sử dụng các phương tiện giao thông công cộng để đến.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Đi bộ: Thuận tiện cho việc khám phá khu vực trung tâm</li>
                    <li>Xe máy: Dễ dàng tìm chỗ đậu xe xung quanh khu vực</li>
                    <li>Taxi/Grab: Thuận tiện và nhanh chóng</li>
                    <li>Xe buýt: Nhiều tuyến xe buýt đi qua khu vực trung tâm</li>
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
                    Quảng trường trung tâm của thành phố Vinh (cách 500m)
                  </li>
                  <li>
                    <span className="font-medium block">Bảo tàng Xô viết Nghệ Tĩnh</span>
                    Bảo tàng lưu giữ những kỷ vật lịch sử quan trọng (cách 1km)
                  </li>
                  <li>
                    <span className="font-medium block">Khu di tích Kim Liên</span>
                    Quê hương của Chủ tịch Hồ Chí Minh (cách 14km)
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
