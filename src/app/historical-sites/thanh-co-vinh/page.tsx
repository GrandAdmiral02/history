
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
          src="https://ext.same-assets.com/3334769225/3264552788.jpeg"
          alt="Thành cổ Vinh"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thành Cổ Vinh</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Di tích lịch sử cấp tỉnh - Chứng tích lịch sử của xứ Nghệ
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
                    <strong>Thành cổ Vinh</strong> là một di tích lịch sử cấp tỉnh nằm trên địa bàn của ba phường Cửa Nam, Đội Cung, Quang Trung thuộc thành phố Vinh, tỉnh Nghệ An. Đây là chứng tích lịch sử quan trọng ghi lại dấu ấn nhiều biến động của xứ Nghệ qua các thời kỳ.
                  </p>
                  <p>
                    Thành cổ Vinh được xây dựng vào thế kỷ XVII dưới thời chúa Nguyễn, có vai trò quan trọng trong việc bảo vệ vùng đất Nghệ An khỏi các cuộc xâm lược và làm trung tâm hành chính, quân sự của khu vực.
                  </p>
                  <p>
                    Ngày nay, mặc dù chỉ còn lại những dấu tích của thành xưa, nhưng Thành cổ Vinh vẫn là điểm đến hấp dẫn cho những ai muốn tìm hiểu về lịch sử văn hóa của vùng đất Nghệ An.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/3334769225/3264552788.jpeg"
                        alt="Dấu tích Thành cổ Vinh"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                        alt="Khu vực Thành cổ Vinh ngày nay"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3>Thông tin cơ bản</h3>
                  <ul>
                    <li><strong>Địa chỉ:</strong> Phường Cửa Nam, Đội Cung, Quang Trung, thành phố Vinh, Nghệ An</li>
                    <li><strong>Cách trung tâm thành phố Vinh:</strong> Tại trung tâm thành phố</li>
                    <li><strong>Giờ tham quan:</strong> Mọi lúc trong ngày (khu vực công cộng)</li>
                    <li><strong>Thời gian tham quan phù hợp:</strong> 1-1.5 giờ</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="attractions" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Kiến trúc và dấu tích Thành cổ Vinh</h2>

                  <h3>1. Dấu tích thành luỹ</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden my-6">
                    <Image
                      src="https://ext.same-assets.com/3334769225/3264552788.jpeg"
                      alt="Dấu tích thành luỹ cổ"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Mặc dù phần lớn thành luỹ đã bị phá hủy theo thời gian, nhưng tại một số khu vực vẫn còn thấy được những đoạn tường thành cổ bằng đá và gạch nung. Những dấu tích này cho thấy quy mô và sự vững chắc của thành xưa.
                  </p>

                  <h3>2. Cửa thành và các công trình phụ</h3>
                  <p>
                    Thành cổ Vinh ban đầu có 4 cửa chính: Cửa Nam, Cửa Bắc, Cửa Đông và Cửa Tây. Hiện tại, tên các phường như Cửa Nam vẫn còn lưu giữ tên gọi từ thời thành cổ, là minh chứng cho vị trí các cửa thành xưa.
                  </p>

                  <h3>3. Khu vực nội thành</h3>
                  <p>
                    Bên trong thành cổ từng là nơi đóng quân của các đơn vị quân đội và trụ sở hành chính. Ngày nay, khu vực này đã trở thành các phường của thành phố Vinh với nhiều công trình hiện đại.
                  </p>

                  <h3>4. Các di tích liên quan</h3>
                  <ul>
                    <li><strong>Đền Quán Chánh:</strong> Nằm trong khu vực thành cổ, thờ các vị quan đã có công với địa phương.</li>
                    <li><strong>Chùa Đức Ông:</strong> Ngôi chùa cổ nằm gần khu vực thành, có lịch sử lâu đời.</li>
                    <li><strong>Các con phố cổ:</strong> Vẫn giữ được bố cục và tên gọi từ thời thành cổ.</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Lịch sử Thành cổ Vinh</h2>

                  <p>
                    Thành cổ Vinh có lịch sử gắn liền với sự phát triển của vùng đất Nghệ An qua nhiều thế kỷ.
                  </p>

                  <h3>Những dấu mốc lịch sử quan trọng</h3>
                  <ul>
                    <li><strong>Thế kỷ XVII:</strong> Thành cổ Vinh được xây dựng dưới thời chúa Nguyễn để bảo vệ vùng đất Nghệ An.</li>
                    <li><strong>Thế kỷ XVIII:</strong> Thành trở thành trung tâm hành chính, quân sự quan trọng của khu vực.</li>
                    <li><strong>Thế kỷ XIX:</strong> Dưới thời Nguyễn, thành tiếp tục được gia cố và mở rộng.</li>
                    <li><strong>Thế kỷ XX:</strong> Trong các cuộc kháng chiến, khu vực thành cổ chứng kiến nhiều sự kiện lịch sử quan trọng.</li>
                    <li><strong>1945-1954:</strong> Thành cổ bị hư hại nặng nề trong thời kỳ kháng chiến chống Pháp.</li>
                    <li><strong>Sau 1975:</strong> Khu vực thành cổ được quy hoạch trở thành trung tâm thành phố Vinh hiện đại.</li>
                  </ul>

                  <h3>Vai trò lịch sử</h3>
                  <p>
                    Thành cổ Vinh không chỉ có vai trò quân sự mà còn là trung tâm văn hóa, kinh tế của vùng. Đây là nơi diễn ra nhiều sự kiện lịch sử quan trọng và là minh chứng cho sự phát triển của đô thị Vinh qua các thời kỳ.
                  </p>

                  <h3>Ý nghĩa hiện tại</h3>
                  <p>
                    Mặc dù phần lớn thành cổ đã không còn, nhưng những dấu tích còn lại vẫn có giá trị to lớn trong việc nghiên cứu lịch sử, kiến trúc và đô thị học. Đây là minh chứng sống động cho sự phát triển của thành phố Vinh từ một thành trì quân sự thành một đô thị hiện đại.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="activities" className="space-y-6 mt-6">
                <div className="prose prose-green max-w-none">
                  <h2>Hoạt động tham quan Thành cổ Vinh</h2>

                  <h3>Các điểm tham quan chính</h3>
                  <ol>
                    <li>
                      <strong>Khu vực Cửa Nam:</strong> Tham quan dấu tích cửa thành cổ và tìm hiểu về lịch sử khu vực.
                    </li>
                    <li>
                      <strong>Phố cổ Vinh:</strong> Dạo bước trên những con phố có từ thời thành cổ, cảm nhận không khí lịch sử.
                    </li>
                    <li>
                      <strong>Đền Quán Chánh:</strong> Thăm đền thờ các vị quan có công với địa phương.
                    </li>
                    <li>
                      <strong>Chùa Đức Ông:</strong> Tham quan ngôi chùa cổ gần khu vực thành.
                    </li>
                  </ol>

                  <h3>Lịch trình tham quan</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4>Lịch trình gợi ý (1.5 giờ)</h4>
                    <ol>
                      <li><strong>08:00 - 08:30:</strong> Tham quan khu vực Cửa Nam và tìm hiểu lịch sử</li>
                      <li><strong>08:30 - 09:00:</strong> Dạo bước trên các phố cổ</li>
                      <li><strong>09:00 - 09:15:</strong> Thăm Đền Quán Chánh</li>
                      <li><strong>09:15 - 09:30:</strong> Chụp ảnh và tìm hiểu thêm về khu vực</li>
                    </ol>
                  </div>

                  <h3>Kết hợp tham quan</h3>
                  <p>
                    Do nằm tại trung tâm thành phố Vinh, du khách có thể dễ dàng kết hợp tham quan Thành cổ Vinh với các điểm du lịch khác như:
                  </p>
                  <ul>
                    <li>Quảng trường Hồ Chí Minh</li>
                    <li>Bảo tàng Nghệ An</li>
                    <li>Phố đi bộ Vinh</li>
                    <li>Chợ Vinh</li>
                  </ul>

                  <h3>Kinh nghiệm tham quan</h3>
                  <ul>
                    <li><strong>Thời điểm lý tưởng:</strong> Buổi sáng sớm hoặc chiều tối khi thời tiết mát mẻ.</li>
                    <li><strong>Cách di chuyển:</strong> Có thể đi bộ hoặc xe máy trong khu vực trung tâm thành phố.</li>
                    <li><strong>Trang bị:</strong> Nên mang theo nước uống và mũ che nắng khi tham quan ngoài trời.</li>
                    <li><strong>Lưu ý:</strong> Tìm hiểu trước về lịch sử để có trải nghiệm tham quan ý nghĩa hơn.</li>
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
                  <p className="text-sm text-muted-foreground">Phường Cửa Nam, Đội Cung, Quang Trung, thành phố Vinh</p>
                </div>
                <div>
                  <h4 className="font-medium">Giờ tham quan</h4>
                  <p className="text-sm text-muted-foreground">Mọi lúc trong ngày (khu vực công cộng)</p>
                </div>
                <div>
                  <h4 className="font-medium">Giá vé</h4>
                  <p className="text-sm text-muted-foreground">Miễn phí</p>
                </div>
              </div>
            </div>

            {/* Getting there */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-green-800">Cách đến Thành cổ Vinh</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium">Từ ga Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Chỉ cách ga Vinh khoảng 2km, có thể đi bộ, xe máy hoặc taxi trong vòng 5-10 phút.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Từ sân bay Vinh</h4>
                  <p className="text-sm text-muted-foreground">
                    Cách sân bay khoảng 8km, đi taxi khoảng 15-20 phút.
                  </p>
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
                    Quảng trường trung tâm với tượng đài Bác Hồ (cách 500m)
                  </li>
                  <li>
                    <span className="font-medium block">Bảo tàng Nghệ An</span>
                    Bảo tàng tỉnh với nhiều hiện vật quý (cách 1km)
                  </li>
                  <li>
                    <span className="font-medium block">Nhà thờ Vinh</span>
                    Công trình kiến trúc Gothic đẹp (cách 800m)
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
                src="https://lh6.googleusercontent.com/proxy/2st8LkMIX_pmp19TXDRZDs79yYQ3X3fQfzOMkyBT9ifK_eW1XTh41HNaqXomqocnmPYbFiT9NqwE2qxuSntU5kUov9mDkr449u7Gvf1KXJy_ofBEz80g"
                alt="Thành cổ Vinh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative h-24 rounded overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/4052699563/777305328.jpeg"
                  alt="Thành cổ Vinh 2"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 rounded overflow-hidden">
                <Image
                  src="https://static.vinwonders.com/production/den-cuong-dien-chau-nghe-an-1.jpg"
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
