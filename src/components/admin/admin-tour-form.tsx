
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

interface TourFormData {
  name: string;
  description: string;
  price: string;
  duration: string;
  location: string;
  maxPeople: string;
  image: string;
}

interface AdminTourFormProps {
  tour?: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    duration: string;
    location: string;
    maxPeople: number;
    image: string | null;
  };
  isEdit?: boolean;
}

export function AdminTourForm({ tour, isEdit = false }: AdminTourFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<TourFormData>({
    name: tour?.name || "",
    description: tour?.description || "",
    price: tour?.price?.toString() || "",
    duration: tour?.duration || "",
    location: tour?.location || "",
    maxPeople: tour?.maxPeople?.toString() || "",
    image: tour?.image || "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("description", formData.description);
      submitData.append("price", formData.price);
      submitData.append("duration", formData.duration);
      submitData.append("location", formData.location);
      submitData.append("maxPeople", formData.maxPeople);
      submitData.append("image", formData.image);

      const url = isEdit ? `/api/tours/${tour?.id}` : "/api/tours";
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: submitData,
      });

      if (response.ok) {
        router.push("/admin/tours");
        router.refresh();
      } else {
        alert("Có lỗi xảy ra khi lưu tour");
      }
    } catch (error) {
      console.error("Error saving tour:", error);
      alert("Có lỗi xảy ra khi lưu tour");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại
        </Button>
        <div>
          <h1 className="text-2xl font-bold">
            {isEdit ? "Chỉnh sửa Tour" : "Thêm Tour Mới"}
          </h1>
          <p className="text-muted-foreground">
            {isEdit ? "Cập nhật thông tin tour du lịch" : "Tạo tour du lịch mới"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          {/* Thông tin cơ bản */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cơ bản</CardTitle>
              <CardDescription>
                Nhập thông tin chi tiết về tour du lịch
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Tên Tour *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nhập tên tour"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Địa điểm *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Nhập địa điểm tour"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Mô tả</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Nhập mô tả chi tiết về tour"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price">Giá tour (VNĐ) *</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    step="1000"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: 2990000"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Thời gian *</Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    placeholder="VD: 2 ngày 1 đêm"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="maxPeople">Số người tối đa *</Label>
                  <Input
                    id="maxPeople"
                    name="maxPeople"
                    type="number"
                    min="1"
                    value={formData.maxPeople}
                    onChange={handleInputChange}
                    placeholder="VD: 20"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hình ảnh */}
          <Card>
            <CardHeader>
              <CardTitle>Hình ảnh</CardTitle>
              <CardDescription>
                Thêm hình ảnh để tour trông hấp dẫn hơn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="image">URL Hình ảnh</Label>
                <Input
                  id="image"
                  name="image"
                  type="url"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
                {formData.image && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Xem trước:</p>
                    <img
                      src={formData.image}
                      alt="Tour preview"
                      className="w-full max-w-md h-48 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Nút lưu */}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Hủy
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              <Save className="mr-2 h-4 w-4" />
              {isEdit ? "Cập nhật Tour" : "Tạo Tour"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
