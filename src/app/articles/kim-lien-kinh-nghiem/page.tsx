
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, Share2, Heart, MapPin } from "lucide-react";

export default function KimLienArticle() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/#articles" className="hover:text-foreground">
              Bài viết
            </Link>
            <span>/</span>
            <span className="text-foreground">Kinh nghiệm du lịch Kim Liên</span>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại trang chủ
            </Link>
          </Button>

          {/* Article header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Kinh nghiệm du lịch Kim Liên - Hành trình về với quê hương Bác Hồ
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>10/01/2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Trần Thị Lan</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nam Đàn, Nghệ An</span>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Chia sẻ
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Yêu thích
              </Button>
            </div>

            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src="https://static.vinwonders.com/production/dia-chi-khu-di-tich-kim-lien.jpg"
                alt="Kim Liên - Quê hương Bác Hồ"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article content */}
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Kim Liên - làng Sen, quê hương của Chủ tịch Hồ Chí Minh, là điểm đến không thể bỏ qua khi du lịch Nghệ An. Hãy cùng khám phá những kinh nghiệm hữu ích để có chuyến viếng thăm ý nghĩa nhất.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Chuẩn bị trước chuyến đi</h2>
            
            <h3 className="text-xl font-medium mb-2">Thời điểm lý tưởng</h3>
            <p className="mb-4">
              Thời gian tốt nhất để tham quan Kim Liên là từ tháng 9 đến tháng 4 năm sau, khi thời tiết mát mẻ và ít mưa. Tránh những ngày nắng gắt từ tháng 5 đến tháng 8, đặc biệt là giữa trua.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">📅 Lịch sinh hoạt hàng ngày:</h4>
              <ul className="list-disc pl-6">
                <li><strong>6:00 - 11:30:</strong> Sáng (thời tiết mát mẻ, lý tưởng để tham quan)</li>
                <li><strong>14:00 - 17:30:</strong> Chiều (ánh sáng đẹp để chụp ảnh)</li>
                <li><strong>Chủ nhật:</strong> Đông du khách, nên đến sớm</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mb-2">Cách di chuyển</h3>
            <p className="mb-4">
              Từ thành phố Vinh, bạn có thể di chuyển đến Kim Liên theo các cách sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Xe máy:</strong> Khoảng 45 phút (20km), thuận tiện và linh hoạt</li>
              <li><strong>Ô tô:</strong> 40 phút, phù hợp cho gia đình</li>
              <li><strong>Xe bus:</strong> Tuyến Vinh - Nam Đàn, rồi đi xe ôm 5km</li>
              <li><strong>Tour du lịch:</strong> Tiện lợi nhất, có hướng dẫn viên</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://file3.qdnd.vn/data/images/0/2024/05/19/upload_2049/kim-lien2.jpg?dpi=150&quality=100&w=870"
                  alt="Đường đến Kim Liên"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://mia.vn/media/uploads/blog-du-lich/khu-di-tich-kim-lien-nha-bac-ho-1740978215.jpg"
                  alt="Cảnh quan Kim Liên"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Lịch trình tham quan chi tiết</h2>

            <h3 className="text-xl font-medium mb-2">Sáng: Làng Sen (7:00 - 11:30)</h3>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">🏠 Nhà lưu niệm Bác Hồ</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Thời gian: 60-90 phút</li>
                <li>Nơi Bác Hồ sinh ra và lớn lên</li>
                <li>Triển lãm những hiện vật quý báu</li>
                <li>Tìm hiểu về tuổi thơ của Bác</li>
              </ul>

              <h4 className="font-semibold mb-2">🌸 Vườn sen và ao cá</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Thời gian: 30-45 phút</li>
                <li>Biểu tượng của sự trong sạch</li>
                <li>Điểm chụp ảnh đẹp nhất</li>
                <li>Mùa sen nở: tháng 6-8</li>
              </ul>

              <h4 className="font-semibold mb-2">⛪ Đình làng Sen</h4>
              <ul className="list-disc pl-6">
                <li>Thời gian: 20-30 phút</li>
                <li>Kiến trúc truyền thống</li>
                <li>Nơi sinh hoạt cộng đồng xưa</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mb-2">Chiều: Làng Hoàng Trù (14:00 - 17:00)</h3>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">🏛️ Nhà thờ họ Hoàng</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Quê ngoại của Bác Hồ</li>
                <li>Tìm hiểu về dòng họ Hoàng</li>
                <li>Kiến trúc nhà thờ họ cổ</li>
              </ul>

              <h4 className="font-semibold mb-2">🌾 Cánh đồng lúa xung quanh</h4>
              <ul className="list-disc pl-6">
                <li>Cảnh quan nông thôn bình yên</li>
                <li>Thời điểm đẹp nhất: mùa lúa chín (tháng 10-11)</li>
                <li>Trải nghiệm cuộc sống nông dân</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Những điều cần lưu ý</h2>

            <h3 className="text-xl font-medium mb-2">Trang phục và thái độ</h3>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6">
                <li>Mặc trang phục lịch sự, kín đáo khi tham quan</li>
                <li>Không mặc quần short, áo ba lỗ khi vào khu di tích</li>
                <li>Giữ thái độ trang nghiêm, không gây ồn ào</li>
                <li>Tắt flash khi chụp ảnh trong nhà</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mb-2">Phí tham quan</h3>
            <p className="mb-4">
              <strong>Miễn phí</strong> tham quan tất cả các điểm trong khu di tích Kim Liên. Bạn chỉ cần đăng ký tại cổng và nhận vé miễn phí.
            </p>

            <h3 className="text-xl font-medium mb-2">Dịch vụ hướng dẫn</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Hướng dẫn viên miễn phí:</strong> Có sẵn tại các điểm chính</li>
              <li><strong>Thuê hướng dẫn riêng:</strong> 100.000 - 200.000 VNĐ/nhóm</li>
              <li><strong>Audio guide:</strong> Đang được phát triển</li>
            </ul>

            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden my-8">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAFXtsKwSi3YPEN10P0L_1IOGjGNqDCBgZg&s"
                alt="Hoạt động tại Kim Liên"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Ẩm thực địa phương</h2>
            <p className="mb-4">
              Kim Liên và vùng phụ cận có nhiều món ăn đặc sản đáng thử:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">🍜 Bún bò Nam Đàn</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Đặc sản nổi tiếng với nước dùng đậm đà, thịt bò tươi ngon
                </p>
                <p className="text-sm"><strong>Giá:</strong> 35.000 - 45.000 VNĐ/tô</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">🥟 Bánh mướt Nghệ An</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Bánh truyền thống làm từ bột gạo, nhân đậu xanh
                </p>
                <p className="text-sm"><strong>Giá:</strong> 5.000 - 8.000 VNĐ/cái</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">🍯 Kẹo Cu Đơ</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Đặc sản ngọt ngào, hương vị truyền thống xứ Nghệ
                </p>
                <p className="text-sm"><strong>Giá:</strong> 80.000 - 120.000 VNĐ/hộp</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">🌽 Bánh tráng nướng</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Món ăn vặt phổ biến, thường ăn vào buổi chiều
                </p>
                <p className="text-sm"><strong>Giá:</strong> 10.000 - 15.000 VNĐ/phần</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Nơi lưu trú gần đó</h2>
            <p className="mb-4">
              Kim Liên không có khách sạn lớn, nhưng bạn có thể ở tại các nơi sau:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">🏨 Tại thành phố Vinh (40km)</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Khách sạn Sài Gòn Kim Liên:</strong> 4 sao, 800.000 - 1.200.000 VNĐ</li>
                <li><strong>Muong Thanh Grand Vinh:</strong> 5 sao, 1.500.000 - 2.500.000 VNĐ</li>
                <li><strong>Nhà nghỉ bình dân:</strong> 200.000 - 500.000 VNĐ</li>
              </ul>

              <h4 className="font-semibold mb-3">🏠 Tại Nam Đàn (5km)</h4>
              <ul className="list-disc pl-6">
                <li><strong>Homestay địa phương:</strong> 300.000 - 500.000 VNĐ</li>
                <li><strong>Nhà nghỉ Nam Đàn:</strong> 250.000 - 400.000 VNĐ</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Lưu niệm đáng mua</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Sách về Bác Hồ:</strong> Tiểu sử, thơ văn, ảnh lịch sử</li>
              <li><strong>Tranh ảnh Bác Hồ:</strong> Từ 50.000 - 500.000 VNĐ</li>
              <li><strong>Áo thun in hình:</strong> 150.000 - 300.000 VNĐ</li>
              <li><strong>Kẹo Cu Đơ đặc sản:</strong> 100.000 - 200.000 VNĐ/hộp</li>
              <li><strong>Postcard Kim Liên:</strong> 10.000 - 20.000 VNĐ/bộ</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Một số lưu ý cuối</h2>
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">💡 Tips hữu ích:</h3>
              <ul className="list-disc pl-6">
                <li>Mang theo nước uống và mũ chống nắng</li>
                <li>Điện thoại nên có đủ pin để chụp ảnh</li>
                <li>Chuẩn bị tiền mặt cho việc mua đồ ăn, lưu niệm</li>
                <li>Đọc trước về lịch sử để hiểu sâu hơn</li>
                <li>Tham gia tour nếu lần đầu đến để không bỏ sót điểm nào</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
            <p className="mb-4">
              Chuyến viếng thăm Kim Liên không chỉ là một hành trình du lịch mà còn là cơ hội để chúng ta tìm hiểu sâu hơn về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh. Hy vọng những kinh nghiệm chia sẻ trên sẽ giúp bạn có chuyến đi ý nghĩa và đáng nhớ.
            </p>

            <blockquote className="border-l-4 border-green-500 pl-4 my-6 italic">
              "Kim Liên - nơi bắt đầu của một hành trình vĩ đại, và cũng là nơi chúng ta tìm lại được nguồn cội, bản sắc dân tộc của mình."
            </blockquote>
          </div>

          {/* Related articles */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Bài viết liên quan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/articles/con-cuong-trai-nghiem" className="group">
                <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                  <Image
                    src="https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/19/5/16/thac-khe-kem-con-cuong.jpg"
                    alt="Trải nghiệm Con Cuông"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium group-hover:text-green-600 transition-colors">
                  Trải nghiệm Con Cuông: Khám phá vẻ đẹp núi rừng Tây Bắc
                </h4>
              </Link>
              <div className="group cursor-pointer">
                <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400"
                    alt="Di tích lịch sử Nghệ An"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium group-hover:text-green-600 transition-colors">
                  Top 9 di tích lịch sử ở Nghệ An thu hút hàng triệu du khách
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
