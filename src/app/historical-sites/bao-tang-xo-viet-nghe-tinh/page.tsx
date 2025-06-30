
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Camera, ArrowLeft, Star } from "lucide-react";

export default function BaoTangXoVietNgheTinhPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/historical-sites" className="inline-flex items-center text-green-700 hover:text-green-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại Di tích lịch sử
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bảo tàng Xô viết Nghệ Tĩnh</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>Thành phố Vinh, Nghệ An</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>Mở cửa: 8:00 - 16:30</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-1 text-yellow-500" />
              <span>4.8/5</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                alt="Bảo tàng Xô viết Nghệ Tĩnh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative h-24 rounded overflow-hidden">
                <Image
                  src="https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg"
                  alt="Bảo tàng Xô viết 2"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 rounded overflow-hidden">
                <Image
                  src="https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g"
                  alt="Bảo tàng Xô viết 3"
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
                  <Badge variant="secondary">Di tích đặc biệt quốc gia</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Giới thiệu</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bảo tàng Xô viết Nghệ Tĩnh là nơi lưu giữ và trưng bày những hiện vật, tài liệu quý giá về 
                    phong trào Xô viết Nghệ Tĩnh 1930-1931. Đây là một trong những phong trào cách mạng vĩ đại nhất 
                    trong lịch sử dân tộc Việt Nam, đánh dấu bước ngoặt quan trọng trong đấu tranh giải phóng dân tộc.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Điểm nổi bật</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Hiện vật phong trào Xô viết</li>
                    <li>Tài liệu lịch sử quý giá</li>
                    <li>Mô hình tái hiện sự kiện</li>
                    <li>Phòng chiếu phim tài liệu</li>
                    <li>Thư viện chuyên đề</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Thời gian tham quan</h3>
                  <p className="text-gray-700">
                    Nên dành 2-3 giờ để tham quan và tìm hiểu đầy đủ về phong trào Xô viết Nghệ Tĩnh.
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
                            star <= 5 ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.8/5 (124 đánh giá)</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Một bảo tàng rất ý nghĩa với nhiều hiện vật và tài liệu quý giá. Giúp hiểu rõ hơn về 
                    lịch sử đấu tranh cách mạng của nhân dân Nghệ Tĩnh."
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
