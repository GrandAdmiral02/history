import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

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
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Điểm đến du lịch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Khám phá những điểm đến hấp dẫn nhất tại Nghệ An
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{tour.name}</CardTitle>
              <CardDescription>{tour.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {tour.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {tour.duration}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-2" />
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
                className="w-full bg-green-700 hover:bg-green-800"
              >
                <Link href={`/destinations/${tour.slug}`}>
                  Chi tiết hành trình
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
