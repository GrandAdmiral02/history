import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Điểm đến du lịch | Du lịch Nghệ An",
  description: "Khám phá các điểm đến du lịch hấp dẫn tại Nghệ An",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
}

function getDifficultyText(difficulty: string | null) {
  switch (difficulty) {
    case 'EASY': return 'Dễ';
    case 'MEDIUM': return 'Trung bình';
    case 'HARD': return 'Khó';
    default: return 'Chưa xác định';
  }
}

function getCategoryText(category: string | null) {
  switch (category) {
    case 'CULTURAL': return 'Di sản văn hóa';
    case 'HISTORICAL': return 'Lịch sử';
    case 'SPIRITUAL': return 'Tâm linh';
    case 'NATURE': return 'Thiên nhiên';
    case 'ADVENTURE': return 'Phiêu lưu';
    default: return 'Khác';
  }
}

export default async function DestinationsPage() {
  const tours = await prisma.tour.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Điểm đến du lịch</h1>
          <p className="text-xl text-muted-foreground">
            Khám phá vẻ đẹp và lịch sử của xứ Nghệ qua những hành trình đầy ý nghĩa
          </p>
        </div>

        {tours.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Hiện tại chưa có tour nào được thêm vào hệ thống.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={tour.imageUrl || "/placeholder-image.jpg"}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary">
                      {getCategoryText(tour.category)}
                    </Badge>
                  </div>
                  {tour.difficulty && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline">
                        {getDifficultyText(tour.difficulty)}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {tour.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="mr-2 h-4 w-4" />
                      Tối đa {tour.maxPeople} người
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="font-bold text-green-700 text-lg">
                      {formatPrice(tour.price)}
                    </div>
                    <Button asChild>
                      <Link href={`/booking?tourId=${tour.id}`}>
                        Đặt tour
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}