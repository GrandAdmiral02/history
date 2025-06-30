
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TruongBonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
          alt="Truông Bồn"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Truông Bồn</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử quốc gia đặc biệt - Nơi tưởng nhớ Thanh niên xung phong
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
            <span className="text-foreground">Truông Bồn</span>
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
                <TabsTrigger value="attractions">Điểm tham quan</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Hoạt động</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Truông Bồn</h2>
                  <p>
                    <strong>Truông Bồn</strong> là một di tích lịch sử quốc gia đặc biệt nằm tại huyện Đô Lương, tỉnh Nghệ An. Đây là nơi tưởng nhớ sự hy sinh anh dũng của 13 chiến sĩ thanh niên xung phong và 49 cán bộ, chiến sĩ đã anh dũng hy sinh trong cuộc chiến tranh chống Mỹ cứu nước.
                  </p>
                  <p>
                    Truông Bồn không chỉ là một di tích lịch sử mà còn là biểu tượng của lòng yêu nước, tinh thần hy sinh vì Tổ quốc của tuổi trẻ Việt Nam. Nơi đây đã trở thành điểm đến thiêng liêng, thu hút hàng triệu lượt du khách và học sinh, sinh viên đến tham quan, học tập mỗi năm.
                  </p>
                  <p>
                    Khu di tích Truông Bồn được quy hoạch với nhiều công trình tưởng niệm, bảo tàng và không gian xanh, tạo nên một môi trường trang nghiêm, phù hợp cho việc giáo dục truyền thống yêu nước.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                        alt="Đài tưởng niệm Truông Bồn"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Khu vực tưởng niệm"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Huyện Đô Lương, tỉnh Nghệ An</li>
                    <li><strong>Cách thành phố Vinh:</strong> Khoảng 60km về phía tây nam</li>
                    <li><strong>Giờ mở cửa:</strong> Hàng ngày từ 7h00 đến 17h00</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 2-3 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Các điểm tham quan tại Truông Bồn</h2>

                  <h3>1. Đài tưởng niệm</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/3334769225/3220782747.jpeg"
                      alt="Đài tưởng niệm Truông Bồn"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Đài tưởng niệm Truông Bồn là công trình kiến trúc trang nghiêm, được xây dựng để tôn vinh sự hy sinh của các chiến sĩ thanh niên xung phong. Đài được thiết kế với hình dáng hiện đại, symbolizing cho tinh thần bất khuất của tuổi trẻ Việt Nam.
                  </p>

                  <h3>2. Bảo tàng Truông Bồn</h3>
                  <p>
                    Bảo tàng trưng bày nhiều hiện vật, tài liệu, hình ảnh quý giá về cuộc đời và sự nghiệp của 13 chiến sĩ thanh niên xung phong. Đây là nơi du khách có thể tìm hiểu chi tiết về câu chuyện hy sinh anh dũng của các anh hùng trẻ tuổi.
                  </p>

                  <h3>3. Khu mộ tập thể</h3>
                  <p>
                    Khu mộ tập thể là nơi an nghỉ của 13 chiến sĩ thanh niên xung phong. Khu vực này được thiết kế trang nghiêm với nhiều cây xanh bao quanh, tạo không gian yên tĩnh, phù hợp cho việc tưởng nhớ và dâng hương.
                  </p>

                  <h3>4. Nhà trưng bày chuyên đề</h3>
                  <p>
                    Nhà trưng bày chuyên đề giới thiệu về phong trào thanh niên xung phong trong kháng chiến chống Mỹ, với nhiều hình ảnh, tài liệu và hiện vật mô tả sinh động cuộc sống và công việc của thanh niên xung phong thời kỳ này.
                  </p>

                  <h3>5. Vườn tưởng niệm</h3>
                  <p>
                    Vườn tưởng niệm với nhiều loài hoa và cây xanh được trồng để tôn vinh ký ức về các anh hùng. Đây cũng là nơi tổ chức các hoạt động giáo dục truyền thống và các buổi lễ tưởng niệm.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Truông Bồn</h2>

                  <p>
                    Truông Bồn gắn liền với một trong những sự kiện bi thương nhất trong cuộc kháng chiến chống Mỹ cứu nước của dân tộc Việt Nam.
                  </p>

                  <h3>Sự kiện lịch sử</h3>
                  <p>
                    Ngày 31 tháng 7 năm 1968, tại khu vực Truông Bồn, huyện Đô Lương, một đoàn xe của thanh niên xung phong gồm 13 chiến sĩ trẻ tuổi đang làm nhiệm vụ vận chuyển hàng hóa phục vụ kháng chiến đã bị máy bay Mỹ ném bom, dẫn đến cái chết anh dũng của cả 13 chiến sĩ.
                  </p>
                  <p>
                    13 thanh niên xung phong hy sinh gồm có: Nguyễn Văn Cương (22 tuổi), Phan Huy Chương (21 tuổi), Lý Tự Do (18 tuổi), Nguyễn Quang Huy (19 tuổi), Phạm Văn Tám (20 tuổi), Trần Văn Năm (19 tuổi), Lê Văn Tách (18 tuổi), Đinh Văn Tốn (19 tuổi), Phạm Văn Cường (18 tuổi), Nguyễn Văn Trỗi (20 tuổi), Nguyễn Văn Hiến (19 tuổi), Cao Văn Cường (21 tuổi), và Phạm Văn Cường (19 tuổi).
                  </p>

                  <h3>Những dấu mốc quan trọng</h3>
                  <ul>
                    <li><strong>31/7/1968:</strong> Sự kiện Truông Bồn xảy ra, 13 thanh niên xung phong hy sinh.</li>
                    <li><strong>1969:</strong> Nhân dân địa phương dựng bia tưởng niệm đầu tiên.</li>
                    <li><strong>1978:</strong> Xây dựng đài tưởng niệm chính thức.</li>
                    <li><strong>1988:</strong> Truông Bồn được công nhận là Di tích lịch sử cấp quốc gia.</li>
                    <li><strong>1998:</strong> Nâng cấp thành Di tích lịch sử quốc gia đặc biệt.</li>
                    <li><strong>2008:</strong> Khánh thành khu di tích mới với quy mô lớn hơn.</li>
                  </ul>

                  <h3>Ý nghĩa lịch sử</h3>
                  <p>
                    Truông Bồn không chỉ là nơi tưởng nhớ 13 thanh niên xung phong mà còn là biểu tượng của toàn bộ thế hệ thanh niên Việt Nam đã hy sinh trong kháng chiến. Đây là minh chứng sống động cho tinh thần yêu nước, sẵn sàng hy sinh vì độc lập tự do của Tổ quốc.
                  </p>
                  <p>
                    Câu chuyện Truông Bồn đã trở thành nguồn cảm hứng cho nhiều tác phẩm văn học, nghệ thuật và là bài học giáo dục truyền thống quý báu cho các thế hệ trẻ.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động và trải nghiệm tại Truông Bồn</h2>

                  <h3>Các hoạt động chính</h3>
                  <ol>
                    <li>
                      <strong>Dâng hương tưởng niệm:</strong> Thắp hương tại đài tưởng niệm và khu mộ tập thể để tỏ lòng thành kính với các anh hùng hy sinh.
                    </li>
                    <li>
                      <strong>Tham quan bảo tàng:</strong> Tìm hiểu về cuộc đời và sự nghiệp của 13 thanh niên xung phong qua các hiện vật và tài liệu trưng bày.
                    </li>
                    <li>
                      <strong>Lễ tuyên thệ:</strong> Nhiều đoàn thanh niên, học sinh, sinh viên tổ chức lễ tuyên thệ trước đài tưởng niệm.
                    </li>
                    <li>
                      <strong>Hoạt động giáo dục truyền thống:</strong> Tham gia các chương trình giáo dục về lịch sử và truyền thống yêu nước.
                    </li>
                  </ol>

                  <h3>Lễ kỷ niệm hàng năm</h3>
                  <p>
                    Mỗi năm vào ngày 31/7, tại Truông Bồn diễn ra lễ kỷ niệm trọng thể tưởng nhớ 13 thanh niên xung phong hy sinh. Đây là dịp để các thế hệ cùng nhau tưởng nhớ và tri ân những hy sinh to lớn của các anh hùng.
                  </p>

                  <h3>Lịch trình tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (2-3 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:30:</strong> Dâng hương tại đài tưởng niệm</li>
                      <li><strong>08:30 - 09:30:</strong> Tham quan bảo tàng và nhà trưng bày chuyên đề</li>
                      <li><strong>09:30 - 10:00:</strong> Viếng khu mộ tập thể</li>
                      <li><strong>10:00 - 10:30:</strong> Dạo quanh vườn tưởng niệm và chụp ảnh lưu niệm</li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Mùa thu (tháng 9-11) hoặc mùa xuân (tháng 2-4) khi thời tiết mát mẻ.</li>
                    <li><strong>Trang phục:</strong> Mặc trang phục lịch sự, trang trọng khi đến viếng.</li>
                    <li><strong>Thái độ:</strong> Giữ thái độ trang nghiêm, tôn kính trong suốt quá trình tham quan.</li>
                    <li><strong>Chuẩn bị:</strong> Nên tìm hiểu trước về lịch sử để có trải nghiệm ý nghĩa hơn.</li>
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
                  <p className="text-sm text-muted-foreground">Huyện Đô Lương, tỉnh Nghệ An</p>
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
                  <p className="text-sm text-muted-foreground">Điện thoại: 0238 3755 XXX</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Đường đến Truông Bồn</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo Quốc lộ 7 về hướng tây nam khoảng 60km đến huyện Đô Lương, sau đó theo biển chỉ dẫn đến khu di tích Truông Bồn.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thời gian khoảng 1.5 giờ</li>
                    <li>Ô tô: Thời gian khoảng 1 giờ 15 phút</li>
                    <li>Xe khách: Có tuyến xe khách từ Vinh đi Đô Lương</li>
                    <li>Tour du lịch: Nhiều công ty tổ chức tour tham quan Truông Bồn</li>
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
                    <span className="font-medium block">Đền Quả Sơn</span>
                    Di tích lịch sử thờ Mai Hắc Đế (cách khoảng 15km)
                  </li>
                  <li>
                    <span className="font-medium block">Khu du lịch sinh thái Đô Lương</span>
                    Khu sinh thái với cảnh quan đẹp (cách khoảng 10km)
                  </li>
                  <li>
                    <span className="font-medium block">Chùa Phúc Thành</span>
                    Ngôi chùa cổ có kiến trúc đẹp (cách khoảng 8km)
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
