
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BookingForm } from "@/components/booking/booking-form";
import { TourSelection } from "@/components/booking/tour-selection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

interface Tour {
  id: string;
  name: string;
  description: string;
  location: string;
  duration: string;
  price: number;
  maxPeople: number;
  imageUrl: string;
  difficulty?: string;
  includes?: string;
  schedule?: string;
  category?: string;
}

function BookingContent() {
  const searchParams = useSearchParams();
  const tourId = searchParams.get("tourId");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  // Dữ liệu tour mặc định - giống như trong TourSelection component
  const tours: Tour[] = [
    {
      id: "ve-nguon",
      name: "Hành trình về nguồn",
      description: "Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An",
      location: "Nghệ An",
      duration: "3 ngày 2 đêm",
      price: 2990000,
      maxPeople: 30,
      imageUrl: "https://ext.same-assets.com/4052699563/777305328.jpeg",
      category: "HISTORICAL"
    },
    {
      id: "con-duong-huyen-thoai",
      name: "Con đường huyền thoại",
      description: "Hành trình theo dấu chân những người anh hùng",
      location: "Nghệ An",
      duration: "2 ngày 1 đêm",
      price: 1890000,
      maxPeople: 25,
      imageUrl: "https://ext.same-assets.com/3334769225/3220782747.jpeg",
      category: "HISTORICAL"
    },
    {
      id: "di-san-tam-linh",
      name: "Di sản văn hóa tâm linh",
      description: "Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ",
      location: "Nghệ An",
      duration: "4 ngày 3 đêm",
      price: 3490000,
      maxPeople: 20,
      imageUrl: "https://ext.same-assets.com/3334769225/3110326546.jpeg",
      category: "SPIRITUAL"
    },
    {
      id: "dau-an-danh-nhan",
      name: "Dấu ấn danh nhân",
      description: "Hành trình theo chân những danh nhân lịch sử xứ Nghệ",
      location: "Nghệ An",
      duration: "3 ngày 2 đêm",
      price: 2590000,
      maxPeople: 35,
      imageUrl: "https://ext.same-assets.com/3334769225/3359488301.jpeg",
      category: "CULTURAL"
    }
  ];

  useEffect(() => {
    if (tourId) {
      const tour = tours.find(t => t.id === tourId);
      setSelectedTour(tour || null);
    }
  }, [tourId]);

  if (!tourId || !selectedTour) {
    return (
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Button asChild variant="ghost" className="mr-4">
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Quay lại
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Đặt tour</h1>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Vui lòng chọn một trong các tour sau để tiến hành đặt tour
            </p>
            <TourSelection />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/booking">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Chọn tour khác
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Đặt tour</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tour Information */}
          <Card>
            <div className="relative h-64">
              <Image
                src={selectedTour.imageUrl}
                alt={selectedTour.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{selectedTour.name}</h2>
              <p className="text-muted-foreground mb-4">
                {selectedTour.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Thời gian:</span>
                  <span className="font-medium">{selectedTour.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Địa điểm:</span>
                  <span className="font-medium">{selectedTour.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>Số người tối đa:</span>
                  <span className="font-medium">{selectedTour.maxPeople} người</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Giá tour:</span>
                  <span className="font-bold text-green-700">
                    {selectedTour.price.toLocaleString("vi-VN")} VNĐ
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <div>
            <BookingForm
              tourId={selectedTour.id}
              tourName={selectedTour.name}
              tourPrice={selectedTour.price}
              tourDuration={selectedTour.duration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return <BookingContent />;
}
