
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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

export function TourSelection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTourId, setSelectedTourId] = useState<string | null>(
    searchParams.get("tourId")
  );

  // Dữ liệu tour mặc định - 4 tour như bạn yêu cầu
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

  const handleTourSelect = (tourId: string) => {
    setSelectedTourId(tourId);
    router.push(`/booking?tourId=${tourId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tours.map((tour) => (
        <Card
          key={tour.id}
          className={`cursor-pointer transition-colors ${
            selectedTourId === tour.id
              ? "border-green-500 bg-green-50"
              : "hover:border-gray-300"
          }`}
          onClick={() => handleTourSelect(tour.id)}
        >
          <div className="relative h-32">
            <Image
              src={tour.imageUrl}
              alt={tour.name}
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-1">{tour.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {tour.duration}
            </p>
            <p className="font-bold text-green-700">
              {tour.price.toLocaleString("vi-VN")} VNĐ
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
