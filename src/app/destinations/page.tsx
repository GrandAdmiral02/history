"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";

interface Tour {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  imageUrl: string;
  category: string;
  difficulty?: string;
  maxPeople: number;
}

export default function DestinationsPage() {
  // Dữ liệu tour mặc định
  const tours: Tour[] = [
    {
      id: "1",
      name: "Tour Kim Liên - Quê hương Bác Hồ",
      description: "Khám phá làng Sen quê hương Chủ tịch Hồ Chí Minh với những di tích lịch sử ý nghĩa.",
      price: 500000,
      duration: "1 ngày",
      location: "Nam Đàn, Nghệ An",
      imageUrl: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800",
      category: "HISTORICAL",
      maxPeople: 30
    },
    {
      id: "2",
      name: "Tour Đền Cường - Linh thiêng xứ Nghệ",
      description: "Hành trình tâm linh tại ngôi đền cổ linh thiêng bậc nhất xứ Nghệ.",
      price: 400000,
      duration: "6 tiếng",
      location: "Quỳ Châu, Nghệ An",
      imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
      category: "SPIRITUAL",
      maxPeople: 25
    },
    {
      id: "3",
      name: "Tour Thác Pù Cường - Thiên nhiên hùng vĩ",
      description: "Chinh phục thác nước hùng vĩ và khám phá vẻ đẹp núi rừng Tây Bắc.",
      price: 800000,
      duration: "2 ngày 1 đêm",
      location: "Kỳ Sơn, Nghệ An",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      category: "NATURE",
      difficulty: "HARD",
      maxPeople: 20
    },
    {
      id: "4",
      name: "Tour Hành trình về nguồn",
      description: "Khám phá các di tích lịch sử và văn hóa trong hành trình tìm về cội nguồn dân tộc.",
      price: 650000,
      duration: "1 ngày",
      location: "Nghệ An",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      category: "CULTURAL",
      maxPeople: 35
    }
  ];

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const getCategoryText = (category: string) => {
    const categoryMap = {
      HISTORICAL: "Lịch sử",
      SPIRITUAL: "Tâm linh", 
      NATURE: "Thiên nhiên",
      CULTURAL: "Văn hóa"
    };
    return categoryMap[category as keyof typeof categoryMap] || category;
  };

  const getDifficultyText = (difficulty: string) => {
    const difficultyMap = {
      EASY: "Dễ",
      MEDIUM: "Trung bình",
      HARD: "Khó"
    };
    return difficultyMap[difficulty as keyof typeof difficultyMap] || difficulty;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Điểm đến du lịch</h1>
        <p className="text-gray-600 mb-8">Khám phá những điểm đến hấp dẫn nhất tại Nghệ An</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <Card key={tour.id}>
            <div className="relative h-48">
              <Image
                src={tour.imageUrl}
                alt={tour.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
              <p className="text-gray-500 mb-4">{tour.description}</p>
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                {tour.location}
              </div>
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                {tour.duration}
              </div>
              <div className="flex items-center mb-2">
                <Users className="h-4 w-4 mr-2 text-gray-400" />
                Tối đa {tour.maxPeople} người
              </div>
              <div className="flex justify-between items-center">
                <div className="text-green-600 font-bold text-lg">
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
    </div>
  );
}