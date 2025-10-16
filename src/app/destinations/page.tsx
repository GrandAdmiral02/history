import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";

const tours = [
  {
    id: "nghe-an-eco-beach",
    name: "Tour Sinh Thái & Biển Nghệ An",
    description:
      "Khám phá thiên nhiên xanh mát tại Hòn Mát và thư giãn tại bãi biển Cửa Lò",
    location: "Cửa Lò, Nghệ An",
    duration: "3 ngày 2 đêm",
    maxPeople: 30,
    price: 2990000,
    image:
      "https://khuyencongnghean.com.vn/wp-content/uploads/2024/07/vuon-quoc-gia-pu-mat-nghe-an.jpg",
    slug: "nghe-an-eco-beach",
  },
  {
    id: "ve-nguon",
    name: "Hành trình về nguồn",
    description:
      "Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An",
    location: "Kim Liên, Nghệ An",
    duration: "3 ngày 2 đêm",
    maxPeople: 30,
    price: 2990000,
    image: "https://ext.same-assets.com/4052699563/777305328.jpeg",
    slug: "ve-nguon",
  },
  {
    id: "con-duong-huyen-thoai",
    name: "Con đường huyền thoại",
    description: "Hành trình theo dấu chân những người anh hùng",
    location: "Quỳ Châu, Nghệ An",
    duration: "2 ngày 1 đêm",
    maxPeople: 25,
    price: 1890000,
    image:
      "https://statics.vinpearl.com/du-lich-quy-chau-anh-thumb_1633531971.jpg",
    slug: "con-duong-huyen-thoai",
  },
  {
    id: "di-san-tam-linh",
    name: "Di sản văn hóa tâm linh",
    description: "Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ",
    location: "Kỳ Sơn, Nghệ An",
    duration: "4 ngày 3 đêm",
    maxPeople: 20,
    price: 3490000,
    image:
      "https://dulichhonmat.com/uploads/b3dbfd80-d8a0-4003-bbe7-ba41902e1d27.jpg",
    slug: "di-san-tam-linh",
  },
  {
    id: "dau-an-danh-nhan",
    name: "Dấu ấn danh nhân",
    description: "Hành trình theo chân những danh nhân lịch sử xứ Nghệ",
    location: "Vinh, Nghệ An",
    duration: "3 ngày 2 đêm",
    maxPeople: 35,
    price: 2590000,
    image:
      "https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_02_21/a2_WUTP.jpg",
    slug: "dau-an-danh-nhan",
  },
  {
    id: "thiet-ke-theo-yeu-cau",
    name: "Thiết kế hành trình theo yêu cầu",
    description:
      "Tạo ra hành trình du lịch riêng theo ý tưởng và mong muốn của bạn",
    location: "Nghệ An",
    duration: "Tùy chọn",
    maxPeople: 50,
    price: 0,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    slug: "thiet-ke-theo-yeu-cau",
  },
];

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-green-900/50 to-transparent z-10" />
        <Image
          src="https://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/102024/image1_20241029152417.jpg"
          alt="Du lịch Nghệ An"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Điểm Đến Du Lịch Nghệ An
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light">
            Khám phá vẻ đẹp thiên nhiên, văn hóa và lịch sử tại xứ Nghệ
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12 md:py-16" id="tours">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Các Hành Trình Nổi Bật
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lựa chọn hành trình phù hợp để khám phá những điểm đến hấp dẫn nhất
            tại Nghệ An
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden border-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="text-xl text-green-800">
                  {tour.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {tour.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-green-600" />
                  {tour.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-green-600" />
                  {tour.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-green-600" />
                  Tối đa {tour.maxPeople} người
                </div>
                <div className="text-lg font-bold text-green-700">
                  {tour.price === 0
                    ? "Liên hệ"
                    : `${tour.price.toLocaleString("vi-VN")} đ`}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800 transition-colors flex items-center gap-2"
                >
                  <Link href={`/destinations/${tour.slug}`}>
                    Chi tiết hành trình <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
