
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, MapPin } from "lucide-react";

export const metadata = {
  title: "Kim Liên - Quê hương Bác Hồ | Du lịch Nghệ An",
  description: "Khám phá làng Sen Kim Liên - quê hương của Chủ tịch Hồ Chí Minh với những di tích lịch sử ý nghĩa.",
};

export default function KimLienArticlePage() {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Kim Liên - Quê hương thiêng liêng của Bác Hồ
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            23 tháng 6, 2024
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            Ban biên tập
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            Nam Đàn, Nghệ An
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
        <Image
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800"
          alt="Làng Sen Kim Liên"
          fill
          className="object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Làng Sen Kim Liên không chỉ là quê hương của Chủ tịch Hồ Chí Minh mà còn là biểu tượng của tinh thần yêu nước, ý chí vươn lên của dân tộc Việt Nam. Nơi đây lưu giữ những dấu ấn thiêng liêng về tuổi thơ và cuộc đời của Người.
        </p>

        <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">
          Lịch sử hình thành
        </h2>
        
        <p className="mb-4">
          Kim Liên là tên gọi cũ của làng Sen hiện nay, thuộc xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Đây là nơi sinh của Chủ tịch Hồ Chí Minh (sinh năm 1890) và cũng là nơi Người dành tuổi thơ với ông bà ngoại.
        </p>

        <p className="mb-6">
          Làng Sen từ xưa nổi tiếng là một vùng đất có truyền thống hiền hòa, mộc mạc với những ruộng lúa xanh tươi, ao sen thơm ngát và những con đường làng uốn lượn dưới bóng tre xanh.
        </p>

        <Card className="my-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Thông tin quan trọng
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Vị trí:</strong> Xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An
              </div>
              <div>
                <strong>Diện tích:</strong> Khoảng 2.5 km²
              </div>
              <div>
                <strong>Dân số:</strong> Khoảng 3,200 người
              </div>
              <div>
                <strong>Thời gian tham quan:</strong> Cả ngày
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">
          Các di tích quan trọng
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          1. Nhà lưu niệm Chủ tịch Hồ Chí Minh
        </h3>
        <p className="mb-4">
          Được xây dựng tại nơi có nhà cũ của ông bà ngoại Bác Hồ, nơi Người sinh ra và dành tuổi thơ. Nhà lưu niệm trưng bày những hiện vật, tài liệu quý giá về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          2. Ao sen làng Sen
        </h3>
        <p className="mb-4">
          Ao sen nổi tiếng với những bông sen hồng nở rộ quanh năm, tạo nên khung cảnh thơ mộng. Đây cũng là nơi Bác Hồ thường chơi đùa thời thơ ấu và sau này trở thành biểu tượng trong các bài thơ, văn xuôi về Người.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          3. Đình làng Sen
        </h3>
        <p className="mb-6">
          Công trình kiến trúc cổ kính với lối kiến trúc truyền thống Việt Nam, nơi diễn ra các hoạt động văn hóa, tâm linh của người dân địa phương.
        </p>

        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden my-8">
          <Image
            src="https://images.unsplash.com/photo-1566402237775-9de15b1c9c32?w=800"
            alt="Ao sen làng Sen"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">
          Ý nghĩa lịch sử
        </h2>
        
        <p className="mb-4">
          Kim Liên không chỉ có ý nghĩa về mặt lịch sử mà còn là biểu tượng của tinh thần yêu nước, lòng nhân ái và ý chí vươn lên của con người Việt Nam. Nơi đây đã hun đúc nên những phẩm chất cao đẹp của Chủ tịch Hồ Chí Minh.
        </p>

        <p className="mb-6">
          Làng Sen hôm nay đã được tu sửa, bảo tồn và phát triển thành một khu di tích lịch sử quan trọng, thu hút hàng triệu lượt khách trong và ngoài nước đến tham quan, học tập mỗi năm.
        </p>

        <Card className="my-8 bg-green-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Lời khuyên cho du khách
            </h3>
            <ul className="space-y-2">
              <li>• Nên đến tham quan vào buổi sáng sớm để tránh đông đúc</li>
              <li>• Mặc trang phục lịch sự khi vào khu di tích</li>
              <li>• Chuẩn bị tinh thần tôn kính, nghiêm túc</li>
              <li>• Có thể kết hợp tham quan các di tích khác trong khu vực</li>
              <li>• Mùa sen nở (tháng 6-9) là thời điểm đẹp nhất để tham quan</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">
          Kết luận
        </h2>
        
        <p className="mb-6">
          Kim Liên - làng Sen sẽ mãi mãi là niềm tự hào của người dân Nghệ An nói riêng và của cả dân tộc Việt Nam nói chung. Đây không chỉ là điểm đến du lịch mà còn là nơi giáo dục truyền thống yêu nước, lòng nhân ái cho các thế hệ.
        </p>

        <p>
          Hãy đến với Kim Liên để cùng nhau tìm hiểu về cuộc đời và sự nghiệp vĩ đại của Chủ tịch Hồ Chí Minh, đồng thời cảm nhận được vẻ đẹp bình dị, mộc mạc của làng quê Việt Nam.
        </p>
      </div>

      {/* Call to Action */}
      <Card className="mt-8">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Bạn muốn tham quan Kim Liên?
          </h3>
          <p className="text-muted-foreground mb-4">
            Tham gia tour du lịch Kim Liên với chúng tôi để có trải nghiệm tuyệt vời nhất
          </p>
          <Link href="/destinations">
            <Button className="bg-green-700 hover:bg-green-800">
              Xem các tour có sẵn
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
