import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function XovietNgheTinhPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://bna.1cdn.vn/2024/11/08/anh-thanhcuowngf.jpg"
          alt="Bảo tàng Xô Viết Nghệ Tĩnh"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bảo tàng Xô Viết Nghệ Tĩnh
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử văn hóa cấp quốc gia, lưu giữ ký ức hào hùng của
            phong trào Xô Viết Nghệ Tĩnh
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
            <span className="text-foreground">Bảo tàng Xô Viết Nghệ Tĩnh</span>
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
                <TabsTrigger value="attractions">Hiện vật</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
                <TabsTrigger value="activities">Hoạt động</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Giới thiệu Bảo tàng Xô Viết Nghệ Tĩnh</h2>
                  <p>
                    <strong>Bảo tàng Xô Viết Nghệ Tĩnh</strong> là một di tích
                    lịch sử văn hóa cấp quốc gia, nằm tại thành phố Vinh, tỉnh
                    Nghệ An. Bảo tàng được thành lập để lưu giữ và tôn vinh ký
                    ức về phong trào Xô Viết Nghệ Tĩnh (1930-1931), một trong
                    những phong trào yêu nước tiêu biểu trong lịch sử đấu tranh
                    giải phóng dân tộc Việt Nam.
                  </p>
                  <p>
                    Bảo tàng trưng bày nhiều hiện vật, tư liệu quý giá, tái hiện
                    sống động các sự kiện lịch sử, tinh thần đấu tranh bất khuất
                    của nhân dân Nghệ An và Hà Tĩnh trong thời kỳ cách mạng.
                  </p>
                  <p>
                    Hàng năm, Bảo tàng Xô Viết Nghệ Tĩnh thu hút đông đảo du
                    khách, học sinh, sinh viên đến tham quan, nghiên cứu và tìm
                    hiểu về lịch sử cách mạng Việt Nam.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://dulichthuduc.com.vn/vnt_upload/news/BAC-TRUNG-BO/nghe-an/bao_tang_xo_viet_nghe_tinh_thu_duc_travel2.jpg"
                        alt="Toàn cảnh Bảo tàng Xô Viết Nghệ Tĩnh"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://media.gody.vn//images/nghe-an/bao-tang-xo-viet-nghe-tinh/11-2016/20161109084411-bao-tang-xo-viet-nghe-tinh-gody(4).jpg"
                        alt="Không gian trưng bày Bảo tàng"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li>
                      <strong>Địa chỉ:</strong> Số 10, Đào Tấn, thành phố Vinh,
                      tỉnh Nghệ An
                    </li>
                    <li>
                      <strong>Cách trung tâm thành phố Vinh:</strong> Khoảng 2km
                    </li>
                    <li>
                      <strong>Giờ mở cửa:</strong> Hàng ngày từ 7h30 đến 17h00
                      (trừ thứ Hai)
                    </li>
                    <li>
                      <strong>Thời gian tham quan phù hợp:</strong> 1-2 giờ
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hiện vật tại Bảo tàng Xô Viết Nghệ Tĩnh</h2>

                  <h3>1. Khu vực trưng bày chính</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://vietnamtourism.vn//imguploads/tourist/Diemden/NgheAn/BTXVNTinh/BTXVNTinh14JPG.jpg"
                      alt="Khu vực trưng bày chính"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Khu vực trưng bày chính của bảo tàng tái hiện các sự kiện
                    lịch sử của phong trào Xô Viết Nghệ Tĩnh, bao gồm các mô
                    hình, tranh ảnh và hiện vật gốc.
                  </p>
                  <p>
                    Các hiện vật được sắp xếp theo trình tự thời gian, giúp du
                    khách dễ dàng hình dung diễn biến của phong trào cách mạng.
                  </p>

                  <h3>2. Hiện vật tiêu biểu</h3>
                  <p>
                    Bảo tàng hiện lưu giữ hơn 5.000 hiện vật, tài liệu quý giá,
                    bao gồm:
                  </p>
                  <ul>
                    <li>
                      <strong>Tài liệu in:</strong> Các tờ rơi, báo chí cách
                      mạng, cờ, biểu ngữ của phong trào Xô Viết Nghệ Tĩnh.
                    </li>
                    <li>
                      <strong>Vũ khí thô sơ:</strong> Gậy gộc, dao, giáo mác
                      được nhân dân sử dụng trong các cuộc biểu tình.
                    </li>
                    <li>
                      <strong>Hình ảnh và bản đồ:</strong> Các bức ảnh chụp các
                      cuộc biểu tình, bản đồ khu vực diễn ra phong trào.
                    </li>
                    <li>
                      <strong>Đồ dùng cá nhân:</strong> Các vật dụng của các nhà
                      cách mạng như quần áo, nhật ký, thư từ.
                    </li>
                    <li>
                      <strong>Mô hình:</strong> Mô hình tái hiện cảnh nhân dân
                      biểu tình và các trận đánh chống thực dân Pháp.
                    </li>
                  </ul>

                  <h3>3. Khu vực triển lãm ngoài trời</h3>
                  <p>
                    Ngoài khu vực trưng bày trong nhà, bảo tàng còn có không
                    gian ngoài trời với các mô hình lớn như:
                  </p>
                  <ul>
                    <li>
                      Mô hình tái hiện cảnh nhân dân biểu tình tại Nam Đàn.
                    </li>
                    <li>
                      Tượng đài các anh hùng liệt sĩ của phong trào Xô Viết Nghệ
                      Tĩnh.
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Bảo tàng Xô Viết Nghệ Tĩnh</h2>

                  <p>
                    Bảo tàng Xô Viết Nghệ Tĩnh được thành lập để bảo tồn và phát
                    huy giá trị lịch sử của phong trào Xô Viết Nghệ Tĩnh, một
                    trong những phong trào cách mạng lớn nhất trong lịch sử Việt
                    Nam đầu thế kỷ 20.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li>
                      <strong>1930-1931:</strong> Phong trào Xô Viết Nghệ Tĩnh
                      diễn ra tại Nghệ An và Hà Tĩnh, với hàng loạt cuộc biểu
                      tình, bãi công chống thực dân Pháp và phong kiến tay sai.
                    </li>
                    <li>
                      <strong>1960:</strong> Bảo tàng Xô Viết Nghệ Tĩnh được
                      thành lập tại thành phố Vinh, nhằm lưu giữ ký ức về phong
                      trào.
                    </li>
                    <li>
                      <strong>1986:</strong> Bảo tàng được công nhận là Di tích
                      lịch sử văn hóa cấp quốc gia.
                    </li>
                    <li>
                      <strong>2000-2005:</strong> Bảo tàng được nâng cấp, mở
                      rộng với sự đầu tư của nhà nước.
                    </li>
                    <li>
                      <strong>2010:</strong> Kỷ niệm 80 năm phong trào Xô Viết
                      Nghệ Tĩnh, bảo tàng tổ chức nhiều hoạt động triển lãm và
                      nghiên cứu lớn.
                    </li>
                  </ul>

                  <h3>Phong trào Xô Viết Nghệ Tĩnh</h3>
                  <p>
                    Phong trào Xô Viết Nghệ Tĩnh (1930-1931) là một cao trào
                    cách mạng do Đảng Cộng sản Đông Dương lãnh đạo, với sự tham
                    gia của hàng chục nghìn nông dân, công nhân và trí thức tại
                    Nghệ An và Hà Tĩnh. Phong trào đã lập nên các Xô Viết -
                    chính quyền cách mạng đầu tiên ở Việt Nam, đánh dấu bước
                    ngoặt trong lịch sử đấu tranh giải phóng dân tộc.
                  </p>
                  <p>
                    Mặc dù bị thực dân Pháp đàn áp dã man, phong trào đã để lại
                    dấu ấn sâu đậm, thể hiện tinh thần yêu nước, bất khuất của
                    nhân dân Việt Nam.
                  </p>

                  <h3>Ý nghĩa lịch sử và văn hóa</h3>
                  <p>
                    Bảo tàng Xô Viết Nghệ Tĩnh không chỉ là nơi lưu giữ các hiện
                    vật lịch sử mà còn là trung tâm giáo dục, khơi dậy lòng yêu
                    nước và tinh thần cách mạng cho các thế hệ trẻ.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động tại Bảo tàng Xô Viết Nghệ Tĩnh</h2>

                  <h3>Các hoạt động thường niên</h3>
                  <p>
                    Bảo tàng tổ chức nhiều hoạt động giáo dục và văn hóa nhằm
                    tôn vinh phong trào Xô Viết Nghệ Tĩnh:
                  </p>
                  <ol>
                    <li>
                      <strong>Triển lãm chuyên đề:</strong> Các triển lãm về
                      phong trào Xô Viết Nghệ Tĩnh, được tổ chức vào các dịp lễ
                      lớn như ngày 12/9 (kỷ niệm phong trào).
                    </li>
                    <li>
                      <strong>Hoạt động giáo dục:</strong> Các buổi học ngoại
                      khóa, tham quan dành cho học sinh, sinh viên để tìm hiểu
                      về lịch sử cách mạng.
                    </li>
                    <li>
                      <strong>Hội thảo khoa học:</strong> Các hội thảo nghiên
                      cứu về phong trào Xô Viết Nghệ Tĩnh, thu hút các nhà sử
                      học và chuyên gia.
                    </li>
                  </ol>

                  <h3>Hoạt động tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (1-2 giờ)</h4>
                    <ol>
                      <li>
                        <strong>08:00 - 08:30:</strong> Tham quan khu vực ngoài
                        trời và tượng đài.
                      </li>
                      <li>
                        <strong>08:30 - 09:30:</strong> Khám phá khu trưng bày
                        chính, tìm hiểu các hiện vật và tư liệu.
                      </li>
                      <li>
                        <strong>09:30 - 10:00:</strong> Xem phim tư liệu về
                        phong trào Xô Viết Nghệ Tĩnh (nếu có).
                      </li>
                      <li>
                        <strong>10:00 - 10:30:</strong> Chụp ảnh lưu niệm, tham
                        quan cửa hàng lưu niệm.
                      </li>
                    </ol>
                  </div>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li>
                      <strong>Thời điểm lý tưởng:</strong> Tháng 9 (kỷ niệm
                      phong trào) hoặc các tháng mùa xuân và thu khi thời tiết
                      dễ chịu.
                    </li>
                    <li>
                      <strong>Trang phục:</strong> Mặc trang phục lịch sự, phù
                      hợp với không gian văn hóa.
                    </li>
                    <li>
                      <strong>Lưu ý:</strong> Không chạm vào hiện vật, tuân thủ
                      hướng dẫn của nhân viên bảo tàng.
                    </li>
                    <li>
                      <strong>Cách đi lại:</strong> Từ trung tâm thành phố Vinh,
                      có thể đi bộ, xe máy hoặc taxi đến bảo tàng (khoảng 2km).
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8">
            {/* Practical information */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Thông tin thực tế
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Địa chỉ</h4>
                  <p className="text-sm text-muted-foreground">
                    Số 10, Đào Tấn, thành phố Vinh, tỉnh Nghệ An
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ mở cửa</h4>
                  <p className="text-sm text-muted-foreground">
                    Hàng ngày: 7h30 - 17h00 (trừ thứ Hai)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
                <div>
                  <h4 className="font-medium">Liên hệ</h4>
                  <p className="text-sm text-muted-foreground">
                    Điện thoại: 0238 3841 XXX
                  </p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Đường đến Bảo tàng
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ trung tâm thành phố Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Từ trung tâm thành phố Vinh, đi theo đường Đào Tấn khoảng
                    2km, bảo tàng nằm ngay bên đường, dễ dàng nhận ra với kiến
                    trúc độc đáo.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Phương tiện di chuyển</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Xe máy: Thuận tiện và phổ biến.</li>
                    <li>
                      Taxi: Giá khoảng 50.000 - 100.000 VNĐ từ trung tâm thành
                      phố.
                    </li>
                    <li>
                      Đi bộ: Phù hợp nếu bạn ở gần trung tâm thành phố Vinh.
                    </li>
                    <li>
                      Xe buýt: Có tuyến xe buýt nội thành đi qua đường Đào Tấn.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby attractions */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Điểm tham quan lân cận
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <ul className="text-sm text-muted-foreground space-y-3">
                  <li>
                    <span className="font-medium block">Quê Bác Hồ</span>
                    Làng Sen và làng Hoàng Trù, nơi sinh ra Chủ tịch Hồ Chí Minh
                    (cách khoảng 15km).
                  </li>
                  <li>
                    <span className="font-medium block">
                      Quảng trường Hồ Chí Minh
                    </span>
                    Quảng trường trung tâm thành phố Vinh với tượng đài Bác Hồ
                    (cách khoảng 3km).
                  </li>
                  <li>
                    <span className="font-medium block">Cửa Lò</span>
                    Bãi biển nổi tiếng của Nghệ An (cách khoảng 16km).
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
