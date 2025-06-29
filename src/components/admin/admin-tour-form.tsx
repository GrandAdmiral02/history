
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TourFormProps {
  tour?: {
    id: string;
    name: string;
    description: string | null;
    location: string;
    duration: string;
    price: number;
    maxPeople: number;
    imageUrl: string | null;
    difficulty: string | null;
    includes: string | null;
    schedule: string | null;
    category: string | null;
  };
  isEdit?: boolean;
}

export function AdminTourForm({ tour, isEdit = false }: TourFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: tour?.name || "",
    description: tour?.description || "",
    location: tour?.location || "",
    duration: tour?.duration || "",
    price: tour?.price || 0,
    maxPeople: tour?.maxPeople || 20,
    imageUrl: tour?.imageUrl || "",
    difficulty: tour?.difficulty || "EASY",
    includes: tour?.includes || "",
    schedule: tour?.schedule || "",
    category: tour?.category || "CULTURAL"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = isEdit ? `/api/tours/${tour?.id}` : "/api/tours";
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/admin/tours");
        router.refresh();
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra khi lưu tour");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{isEdit ? "Chỉnh sửa tour" : "Thêm tour mới"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Tên tour *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="VD: Hành trình về nguồn"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Địa điểm *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="VD: Khu di tích Kim Liên, Nam Đàn"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Thời gian *</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
                placeholder="VD: 3 ngày 2 đêm"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Giá tour (VNĐ) *</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange("price", Number(e.target.value))}
                placeholder="VD: 2990000"
                min="0"
                max="999999999999"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxPeople">Số người tối đa *</Label>
              <Input
                id="maxPeople"
                type="number"
                value={formData.maxPeople}
                onChange={(e) => handleInputChange("maxPeople", Number(e.target.value))}
                placeholder="VD: 30"
                min="1"
                max="100"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Độ khó</Label>
              <Select 
                value={formData.difficulty} 
                onValueChange={(value) => handleInputChange("difficulty", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn độ khó" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EASY">Dễ</SelectItem>
                  <SelectItem value="MEDIUM">Trung bình</SelectItem>
                  <SelectItem value="HARD">Khó</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Loại tour</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleInputChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn loại tour" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CULTURAL">Di sản văn hóa</SelectItem>
                  <SelectItem value="HISTORICAL">Lịch sử</SelectItem>
                  <SelectItem value="SPIRITUAL">Tâm linh</SelectItem>
                  <SelectItem value="NATURE">Thiên nhiên</SelectItem>
                  <SelectItem value="ADVENTURE">Phiêu lưu</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="imageUrl">URL hình ảnh</Label>
              <Input
                id="imageUrl"
                value={formData.imageUrl}
                onChange={(e) => handleInputChange("imageUrl", e.target.value)}
                placeholder="VD: https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Mô tả tour *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Mô tả chi tiết về tour du lịch..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="includes">Tour bao gồm</Label>
            <Textarea
              id="includes"
              value={formData.includes}
              onChange={(e) => handleInputChange("includes", e.target.value)}
              placeholder="VD: Xe du lịch đời mới, Khách sạn 3-4 sao, Các bữa ăn theo chương trình, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="schedule">Lịch trình tour</Label>
            <Textarea
              id="schedule"
              value={formData.schedule}
              onChange={(e) => handleInputChange("schedule", e.target.value)}
              placeholder="Mô tả chi tiết lịch trình theo ngày..."
              rows={6}
            />
          </div>

          <div className="flex gap-4">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-green-700 hover:bg-green-800"
            >
              {isLoading ? "Đang lưu..." : isEdit ? "Cập nhật" : "Thêm tour"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => router.back()}
            >
              Hủy
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
