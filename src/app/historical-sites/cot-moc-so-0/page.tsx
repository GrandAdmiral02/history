
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Camera, ArrowLeft, Star } from "lucide-react";

export default function CotMocSo0Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/historical-sites" className="inline-flex items-center text-green-700 hover:text-green-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại Di tích lịch sử
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cột mốc số 0 đường Hồ Chí Minh</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>Tân Kỳ, Nghệ An</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>Mở cửa: 7:00 - 17:00</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-1 text-yellow-500" />
              <span>4.9/5</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg"
                alt="Cột mốc số 0 đường Hồ Chí Minh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative h-24 rounded overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                  alt="Cột mốc số 0 - 2"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 rounded overflow-hidden">
                <Image
                  src="https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g"
                  alt="Cột mốc số 0 - 3"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                <Camera className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Thông tin di tích
                  <Badge variant="secondary">Di tích quốc gia đặc biệt</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Giới thiệu</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cột mốc số 0 tại xã Tân Kỳ, Nghệ An đánh dấu điểm khởi đầu của đường mòn Hồ Chí Minh huyền thoại - 
                    con đường huyết mạch trong kháng chiến chống Mỹ cứu nước. Đây là biểu tượng của ý chí kiên cường 
                    và tinh thần bất굴 của dân tộc Việt Nam.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Ý nghĩa lịch sử</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Điểm khởi đầu đường mòn Hồ Chí Minh</li>
                    <li>Con đường huyết mạch trong kháng chiến</li>
                    <li>Biểu tượng của ý chí chiến thắng</li>
                    <li>Chứng tích lịch sử thiêng liêng</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Điểm tham quan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Cột mốc số 0 nguyên bản</li>
                    <li>Khu vườn tưởng niệm</li>
                    <li>Bảo tàng đường mòn Hồ Chí Minh</li>
                    <li>Tượng đài Bác Hồ</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Thời gian tham quan</h3>
                  <p className="text-gray-700">
                    Nên dành 1-2 giờ để tham quan và tìm hiểu về lịch sử đường mòn Hồ Chí Minh.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Đánh giá và nhận xét</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 text-yellow-400 fill-current`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9/5 (156 đánh giá)</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Một di tích có ý nghĩa lịch sử sâu sắc. Đứng tại cột mốc số 0, cảm nhận được sự thiêng liêng 
                    và tự hào về truyền thống anh hùng của dân tộc."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" className="bg-green-700 hover:bg-green-800">
            Đặt tour tham quan
          </Button>
          <Button variant="outline" size="lg">
            Xem bản đồ
          </Button>
        </div>
      </div>
    </div>
  );
}
