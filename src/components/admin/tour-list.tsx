"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Trash2, MapPin, Clock, Users } from "lucide-react";

interface Tour {
  id: string;
  name: string;
  description: string | null;
  price: number;
  duration: string;
  location: string;
  image: string | null;
  maxPeople: number;
  createdAt: string;
}

export function TourList() {
  const router = useRouter();
  // Danh sách tour mặc định được set cứng
  const tours: Tour[] = [
    {
      id: "1",
      name: "Tour Kim Liên - Quê hương Bác Hồ",
      description: "Khám phá làng Sen quê hương Chủ tịch Hồ Chí Minh với những di tích lịch sử ý nghĩa.",
      price: 500000,
      duration: "1 ngày",
      location: "Nam Đàn, Nghệ An",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800",
      maxPeople: 30,
      createdAt: "2024-01-01"
    },
    {
      id: "2",
      name: "Tour Đền Cường - Linh thiêng xứ Nghệ",
      description: "Hành trình tâm linh tại ngôi đền cổ linh thiêng bậc nhất xứ Nghệ.",
      price: 400000,
      duration: "6 tiếng",
      location: "Quỳ Châu, Nghệ An",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
      maxPeople: 25,
      createdAt: "2024-01-02"
    },
    {
      id: "3",
      name: "Tour Thác Pù Cường - Thiên nhiên hùng vĩ",
      description: "Chinh phục thác nước hùng vĩ và khám phá vẻ đẹp núi rừng Tây Bắc.",
      price: 800000,
      duration: "2 ngày 1 đêm",
      location: "Kỳ Sơn, Nghệ An",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      maxPeople: 20,
      createdAt: "2024-01-03"
    },
    {
      id: "4",
      name: "Tour Hành trình về nguồn",
      description: "Khám phá các di tích lịch sử và văn hóa trong hành trình tìm về cội nguồn dân tộc.",
      price: 650000,
      duration: "1 ngày",
      location: "Nghệ An",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      maxPeople: 35,
      createdAt: "2024-01-04"
    }
  ];

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa tour này?")) return;
    alert("Chức năng xóa đã bị vô hiệu hóa cho dữ liệu mặc định");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Danh sách Tour</h2>
        <Button onClick={() => router.push("/admin/tours/add")}>
          <Plus className="h-4 w-4 mr-2" />
          Thêm Tour
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <Card key={tour.id}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{tour.name}</CardTitle>
              <CardDescription className="text-sm">
                {tour.description?.substring(0, 100)}...
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {tour.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {tour.duration}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                Tối đa {tour.maxPeople} người
              </div>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">
                  {tour.price.toLocaleString('vi-VN')}đ
                </Badge>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => router.push(`/admin/tours/edit/${tour.id}`)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(tour.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      </div>
  );
}