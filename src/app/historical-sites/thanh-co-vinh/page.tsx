import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Camera, ArrowLeft, Star } from "lucide-react";

export default function ThanhCoVinhPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/historical-sites" className="inline-flex items-center text-green-700 hover:text-green-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại Di tích lịch sử
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thành cổ Vinh</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>Thành phố Vinh, Nghệ An</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>Mở cửa: 6:00 - 18:00</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-1 text-yellow-500" />
              <span>4.5/5</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                alt="Thành cổ Vinh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative h-24 rounded overflow-hidden">
                <Image
                  src="https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg"
                  alt="Thành cổ Vinh 2"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 rounded overflow-hidden">
                <Image
                  src="https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g"
                  alt="Thành cổ Vinh 3"
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
                  <Badge variant="secondary">Di tích cấp tỉnh</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Giới thiệu</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Thành cổ Vinh là di tích lịch sử quan trọng, từng là thành trì quân sự kiên cố bảo vệ vùng đất Nghệ An. 
                    Với kiến trúc độc đáo và vị trí chiến lược, thành cổ đã chứng kiến nhiều biến cố lịch sử quan trọng 
                    của dân tộc Việt Nam.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Điểm nổi bật</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Hệ thống thành lũy cổ</li>
                    <li>Cổng thành cổ kính</li>
                    <li>Khu di tích khảo cổ</li>
                    <li>Bảo tàng lịch sử địa phương</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Thời gian tham quan</h3>
                  <p className="text-gray-700">
                    Nên dành 2-3 giờ để tham quan toàn bộ khu vực thành cổ và tìm hiểu lịch sử.
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
                          className={`h-5 w-5 ${
                            star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.5/5 (67 đánh giá)</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Một di tích lịch sử thú vị với kiến trúc cổ kính. Rất phù hợp để tìm hiểu về 
                    lịch sử phát triển của thành phố Vinh."
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