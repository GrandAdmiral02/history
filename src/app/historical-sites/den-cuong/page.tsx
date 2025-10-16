import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DenCuongPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://phuongnam.vanhoavaphattrien.vn/uploads/images/blog/pvnguyendieu/2022/03/17/20220317-221935-1647531757.jpg"
          alt="Đền Cuông"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Đền Cuông</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương và các công thần
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
            <span className="text-foreground">Đền Cuông</span>
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
                  <h2>Giới thiệu Đền Cuông</h2>
                  <p>
                    <strong>Đền Cuông</strong> là một di tích lịch sử văn hóa cấp quốc gia, nằm tại xã Diễn An, huyện Diễn Châu, tỉnh Nghệ An. Đây là ngôi đền cổ có lịch sử hàng nghìn năm, được xây dựng để thờ An Dương Vương và các công thần Cao Sơn, Quý Minh.
                  </p>
                  <p>
                    Nằm trên một vùng đất linh thiêng, Đền Cuông không chỉ là nơi thờ phụng các vị thần, mà còn là minh chứng cho nền văn minh và lịch sử lâu đời của dân tộc Việt Nam. Đền được xây dựng với kiến trúc độc đáo, mang đậm phong cách truyền thống.
                  </p>
                  <p>
                    Hàng năm, Đền Cuông đón hàng nghìn lượt khách thập phương đến tham quan, chiêm bái và tìm hiểu về giá trị lịch sử, văn hóa của di tích đặc biệt này.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://media2.gody.vn/public/images/place/den-cuong-cuong-temple/621d8cb977f9f-1646103737.jpeg"
                        alt="Cổng tam quan Đền Cuông"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/4028eaa467f477c80167f4aa053f0c68/102022/den-thieng-7-1438_20221018082645.jpg"
                        alt="Không gian thờ tự Đền Cuông"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Xã Diễn An, huyện Diễn Châu, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 40km về phía bắc</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 6h00 đến 18h00</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc Đền Cuông</h2>

                  <h3>1. Cổng tam quan</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://vgmo.com.vn/wp-content/uploads/2025/02/Anh-tin-tuc-870-x-580-2024-12-03T102351.223.jpg"
                      alt="Cổng tam quan Đền Cuông"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Cổng tam quan của Đền Cuông được xây dựng theo kiến trúc truyền thống, với ba cổng tượng trưng cho ba cõi Thiên - Địa - Nhân. Cổng chính giữa dành cho các vị thần linh, cổng bên trái dành cho nam giới và cổng bên phải dành cho nữ giới.
                  </p>
                  <p>
                    Trên các cổng có nhiều hoa văn, họa tiết trang trí tinh xảo, thể hiện tài nghệ điêu luyện của các nghệ nhân xưa.
                  </p>

                  <h3>2. Đền chính</h3>
                  <p>
                    Đền chính có kiến trúc theo kiểu chữ Đinh, gồm ba gian tiền đường và ba gian hậu cung. Đền được xây dựng bằng gỗ quý với nhiều cột trụ, kèo, rui mè chạm khắc hoa văn, họa tiết tinh xảo.
                  </p>
                  <p>
                    Hậu cung là nơi đặt các bàn thờ An Dương Vương và các vị công thần Cao Sơn, Quý Minh. Không gian thiêng liêng, trang nghiêm với nhiều đồ thờ cúng quý giá.
                  </p>

                  <h3>3. Các công trình phụ</h3>
                  <ul>
                    <li><strong>Nhà bia:</strong> Nơi lưu giữ các bia đá khắc ghi công đức của các vị vua, quan và các đời trùng tu đền.</li>
                    <li><strong>Nhà tế:</strong> Nơi thực hiện các nghi lễ tế tự trong các dịp lễ hội.</li>
                    <li><strong>Giếng cổ:</strong> Giếng nước thiêng được cho là có từ thời An Dương Vương.</li>
                  </ul>

                  <h3>4. Hiện vật quý giá</h3>
                  <p>
                    Đền Cuông hiện còn lưu giữ nhiều hiện vật quý giá, bao gồm:
                  </p>
                  <ul>
                    <li>Tượng An Dương Vương và các vị thần</li>
                    <li>Các bài vị thờ tự</li>
                    <li>Các đồ thờ cúng bằng đồng, gỗ quý</li>
                    <li>Các câu đối, hoành phi với chữ Hán cổ</li>
                    <li>Các bia đá khắc ghi lịch sử đền và công đức của các vị vua, quan qua các thời kỳ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Đền Cuông</h2>

                  <p>
                    Đền Cuông có lịch sử lâu đời, gắn liền với sự tích về An Dương Vương và quá trình xây dựng, bảo vệ đất nước của dân tộc Việt Nam.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>Thế kỷ III TCN:</strong> Theo truyền thuyết, Đền Cuông được xây dựng từ thời An Dương Vương để thờ phụng thần núi Cao Sơn và thần nước Quý Minh - hai vị thần đã giúp An Dương Vương xây dựng Loa Thành.</li>
                    <li><strong>Thế kỷ XI-XII:</strong> Đền được trùng tu lớn dưới thời nhà Lý, trở thành một trong những trung tâm tín ngưỡng quan trọng của vùng đất Nghệ An.</li>
                    <li><strong>Thế kỷ XV:</strong> Đền tiếp tục được các vua nhà Lê quan tâm trùng tu, mở rộng.</li>
                    <li><strong>Thế kỷ XVII-XVIII:</strong> Dưới thời chúa Nguyễn, Đền Cuông được tôn tạo với quy mô lớn hơn, kiến trúc đẹp hơn.</li>
                    <li><strong>Năm 1945-1954:</strong> Trong thời kỳ kháng chiến chống Pháp, đền bị hư hại nặng nề.</li>
                    <li><strong>Năm 1991:</strong> Đền Cuông được công nhận là Di tích lịch sử văn hóa cấp quốc gia.</li>
                    <li><strong>Năm 2002-2005:</strong> Đền được trùng tu, tôn tạo lớn với sự đầu tư của nhà nước và đóng góp của nhân dân.</li>
                  </ul>

                  <h3>Sự tích về An Dương Vương và Đền Cuông</h3>
                  <p>
                    Theo truyền thuyết, khi An Dương Vương xây dựng Loa Thành (thế kỷ III TCN), vua đã gặp nhiều khó khăn vì thành xây đến đâu, sụp đến đó. Vua cầu khấn thì được thần Kim Quy (Rùa Vàng) hiện lên chỉ bảo rằng: muốn xây thành phải cúng tế thần núi Cao Sơn và thần nước Quý Minh.
                  </p>
                  <p>
                    Sau khi làm theo lời thần Kim Quy, An Dương Vương đã xây dựng thành công Loa Thành. Để tỏ lòng biết ơn, vua đã cho xây dựng đền thờ hai vị thần tại vùng đất này. Đó chính là tiền thân của Đền Cuông ngày nay.
                  </p>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Đền Cuông không chỉ là di tích lịch sử văn hóa có giá trị, mà còn là biểu tượng của tinh thần đoàn kết, bất khuất của dân tộc Việt Nam trong công cuộc dựng nước và giữ nước.
                  </p>
                  <p>
                    Đền còn là nơi lưu giữ và phát huy các giá trị văn hóa truyền thống, với nhiều nghi lễ, phong tục tập quán độc đáo được duy trì qua nhiều thế hệ.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lễ hội và hoạt động tại Đền Cuông</h2>

                  <h3>Lễ hội truyền thống</h3>
                  <p>
                    <strong>Lễ hội Đền Cuông</strong> là một trong những lễ hội truyền thống lớn và độc đáo nhất của tỉnh Nghệ An, thu hút hàng vạn người dân và du khách tham dự mỗi năm.
                  </p>

                  <ol>
                    <li>
                      <strong>Thời gian tổ chức:</strong> Lễ hội Đền Cuông được tổ chức vào tháng 2 âm lịch hàng năm, kéo dài trong 3 ngày.
                    </li>
                    <li>
                      <strong>Nghi lễ chính:</strong>
                      <ul>
                        <li><strong>Lễ rước:</strong> Rước kiệu An Dương Vương và các vị thần từ đền ra bến sông, sau đó rước về đền với sự tham gia của hàng trăm người.</li>
                        <li><strong>Lễ tế:</strong> Nghi lễ trang nghiêm với các nghi thức tế lễ cổ truyền, dâng lễ vật lên thần linh.</li>
                        <li><strong>Lễ cầu an:</strong> Cầu cho quốc thái dân an, mưa thuận gió hòa, mùa màng bội thu.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Hoạt động văn hóa, văn nghệ:</strong> Trong thời gian diễn ra lễ hội, có nhiều hoạt động văn hóa, văn nghệ dân gian đặc sắc như hát chèo, hát dân ca Nghệ Tĩnh, múa rồng, múa lân, các trò chơi dân gian truyền thống.
                    </li>
                    <li>
                      <strong>Phiên chợ lễ hội:</strong> Phiên chợ đặc biệt chỉ họp trong những ngày lễ hội, bày bán các sản phẩm thủ công mỹ nghệ, đồ lưu niệm và các món ăn đặc sản địa phương.
                    </li>
                  </ol>

                  <h3>Hoạt động tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (2-3 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:30:</strong> Tham quan cổng tam quan và khuôn viên đền</li>
                      <li><strong>08:30 - 09:30:</strong> Vào đền chính thắp hương, chiêm bái và tìm hiểu về lịch sử, kiến trúc đền</li>
                      <li><strong>09:30 - 10:00:</strong> Tham quan nhà bia và các công trình phụ</li>
                      <li><strong>10:00 - 10:30:</strong> Ngắm cảnh, chụp ảnh lưu niệm</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Tháng 2 âm lịch (mùa lễ hội) hoặc các tháng mùa thu (9-11) khi thời tiết mát mẻ.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, kín đáo khi vào đền thờ.</li>
                    <li><strong>Lưu ý khi thắp hương:</strong> Nên thắp số lẻ nén hương (1, 3, 5 nén) theo phong tục.</li>
                    <li><strong>Cách đi lại:</strong> Từ thành phố Vinh có thể đi ô tô, xe máy theo Quốc lộ 1A khoảng 40km về phía Bắc đến huyện Diễn Châu, sau đó rẽ vào đường liên xã đến Đền Cuông.</li>
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
                  <p className="text-sm text-muted-foreground">Xã Diễn An, huyện Diễn Châu, tỉnh Nghệ An</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">Hàng ngày: 6h00 - 18h00</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3861 XXX</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Đền Cuông</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 1A về phía Bắc khoảng 40km đến huyện Diễn Châu, sau đó rẽ vào đường liên xã đến xã Diễn An, theo biển chỉ dẫn đến Đền Cuông.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thuận tiện để tự do khám phá</li>
                    <li>Taxi: Giá khoảng 350.000 - 400.000 VNĐ cho chuyến đi 2 chiều từ Vinh</li>
                    <li>Xe buýt: Có tuyến xe buýt từ Vinh đi Diễn Châu, sau đó đi xe ôm đến đền</li>
                    <li>Tour du lịch: Nhiều công ty lữ hành tổ chức tour tham quan Đền Cuông</li>
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
                    <span className="font-medium block">Biển Diễn Thành</span>
                    Bãi biển đẹp với làn nước trong xanh (cách khoảng 10km)
                  </li>
                  <li>
                    <span className="font-medium block">Đền Quả Sơn</span>
                    Di tích lịch sử thờ Mai Hắc Đế (cách khoảng 30km)
                  </li>
                  <li>
                    <span className="font-medium block">Làng nghề đúc đồng Làng Vạc</span>
                    Làng nghề truyền thống hơn 400 năm tuổi (cách khoảng 15km)
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
