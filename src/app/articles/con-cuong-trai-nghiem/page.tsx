
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, Share2, Heart } from "lucide-react";

export default function ConCuongArticle() {
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
            <span className="text-foreground">Trải nghiệm Con Cuông</span>
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
              Trải nghiệm Con Cuông: Khám phá vẻ đẹp núi rừng Tây Bắc Nghệ An
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15/01/2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Nguyễn Văn Minh</span>
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
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Con Cuông - Vẻ đẹp núi rừng"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article content */}
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Con Cuông là một trong những huyện miền núi đẹp nhất của tỉnh Nghệ An, nổi tiếng với vẻ đẹp hoang sơ của núi rừng Tây Bắc và những giá trị văn hóa độc đáo của đồng bào dân tộc thiểu số.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Vẻ đẹp thiên nhiên hùng vĩ</h2>
            <p className="mb-4">
              Con Cuông sở hữu cảnh quan thiên nhiên tuyệt đẹp với những dãy núi cao chót vót, những thung lũng xanh mướt và hệ thống sông suối trong vắt. Khí hậu mát mẻ quanh năm tạo nên một không gian lý tưởng để du khách thoát khỏi sự ồn ào, náo nhiệt của cuộc sống thành thị.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=400"
                  alt="Núi rừng Con Cuông"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400"
                  alt="Suối trong Con Cuông"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Vườn quốc gia Pù Mát</h2>
            <p className="mb-4">
              Điểm nhấn đặc biệt của Con Cuông chính là Vườn quốc gia Pù Mát - một trong những khu bảo tồn thiên nhiên quan trọng nhất của Việt Nam. Với diện tích hơn 91.000 hecta, Pù Mát là nơi sinh sống của nhiều loài động thực vật quý hiếm, bao gồm cả những loài chỉ có ở Việt Nam.
            </p>

            <blockquote className="border-l-4 border-green-500 pl-4 my-6 italic">
              "Pù Mát không chỉ là kho báu sinh học mà còn là địa điểm lý tưởng cho những ai yêu thích trekking và khám phá thiên nhiên hoang dã."
            </blockquote>

            <h2 className="text-2xl font-semibold mb-4">Văn hóa đa dân tộc</h2>
            <p className="mb-4">
              Con Cuông là nơi sinh sống của nhiều dân tộc như Kinh, Thái, Khơ Mú, H'Mông... Mỗi dân tộc đều có nền văn hóa độc đáo, từ trang phục, ẩm thực đến các lễ hội truyền thống. Du khách đến đây sẽ có cơ hội trải nghiệm cuộc sống bình dị nhưng đầy ý nghĩa của người dân địa phương.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Ẩm thực đặc sắc</h2>
            <p className="mb-4">
              Ẩm thực Con Cuông mang đậm hương vị núi rừng với những món ăn được chế biến từ các nguyên liệu tự nhiên như thịt rừng, rau rừng, cá suối. Một số món đặc sản không thể bỏ qua:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cơm lam nướng trong ống tre</li>
              <li>Thịt nướng cuốn lá chuối</li>
              <li>Canh chua cá suối</li>
              <li>Rau rừng luộc chấm tương</li>
              <li>Ruou cần - đặc sản của đồng bào dân tộc</li>
            </ul>

            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden my-8">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Ẩm thực Con Cuông"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Những điểm tham quan nổi bật</h2>
            <h3 className="text-xl font-medium mb-2">1. Thác Pu Cường</h3>
            <p className="mb-4">
              Thác Pu Cường là một trong những thác nước đẹp nhất của Con Cuông, với dòng nước đổ từ độ cao gần 100m tạo nên tiếng nước reo vang khắp thung lũng.
            </p>

            <h3 className="text-xl font-medium mb-2">2. Đỉnh Pu Xai Lai Leng</h3>
            <p className="mb-4">
              Với độ cao 1.540m, đây là đỉnh núi cao nhất của Con Cuông, nơi du khách có thể ngắm nhìn toàn cảnh vùng núi rừng hùng vĩ.
            </p>

            <h3 className="text-xl font-medium mb-2">3. Làng dân tộc Thái Môn Sơn</h3>
            <p className="mb-4">
              Nơi du khách có thể trải nghiệm cuộc sống của đồng bào dân tộc Thái với những nhà sàn truyền thống và các hoạt động văn hóa đặc sắc.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Lời khuyên cho du khách</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Thời điểm tốt nhất:</h3>
              <p className="mb-3">Từ tháng 10 đến tháng 4 năm sau, thời tiết mát mẻ, ít mưa.</p>
              
              <h3 className="font-semibold mb-3">Chuẩn bị:</h3>
              <ul className="list-disc pl-6 mb-3">
                <li>Giày trekking chắc chắn</li>
                <li>Áo ấm (nhiệt độ có thể xuống dưới 10°C vào mùa đông)</li>
                <li>Thuốc chống côn trùng</li>
                <li>Đèn pin và pin dự phòng</li>
              </ul>

              <h3 className="font-semibold mb-3">Lưu ý:</h3>
              <p>Nên đi theo nhóm và có hướng dẫn viên địa phương khi khám phá các tuyến trekking.</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
            <p className="mb-4">
              Con Cuông là một điểm đến tuyệt vời cho những ai yêu thích thiên nhiên và muốn tìm hiểu về văn hóa đa dân tộc của Việt Nam. Với vẻ đẹp hoang sơ, khí hậu mát mẻ và con người thân thiện, Con Cuông chắc chắn sẽ mang đến cho du khách những trải nghiệm khó quên.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Bài viết liên quan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/articles/kim-lien-que-huong-bac-ho" className="group">
                <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400"
                    alt="Kim Liên - Quê hương Bác Hồ"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium group-hover:text-green-600 transition-colors">
                  Kim Liên - Quê hương Bác Hồ: Hành trình về nguồn cội
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
