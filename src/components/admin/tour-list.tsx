
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch("/api/tours");
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (formData: FormData) => {
    try {
      const response = await fetch("/api/tours", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        await fetchTours();
        setIsCreateOpen(false);
      }
    } catch (error) {
      console.error("Error creating tour:", error);
    }
  };

  const handleUpdate = async (formData: FormData) => {
    if (!selectedTour) return;
    
    try {
      const response = await fetch(`/api/tours/${selectedTour.id}`, {
        method: "PUT",
        body: formData,
      });
      
      if (response.ok) {
        await fetchTours();
        setIsEditOpen(false);
        setSelectedTour(null);
      }
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa tour này?")) return;
    
    try {
      const response = await fetch(`/api/tours/${id}`, {
        method: "DELETE",
      });
      
      if (response.ok) {
        await fetchTours();
      }
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Danh sách Tour</h2>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Thêm Tour
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Thêm Tour Mới</DialogTitle>
              <DialogDescription>
                Điền thông tin để tạo tour du lịch mới
              </DialogDescription>
            </DialogHeader>
            <TourForm onSubmit={handleCreate} />
          </DialogContent>
        </Dialog>
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
                    onClick={() => {
                      setSelectedTour(tour);
                      setIsEditOpen(true);
                    }}
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

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa Tour</DialogTitle>
            <DialogDescription>
              Cập nhật thông tin tour du lịch
            </DialogDescription>
          </DialogHeader>
          {selectedTour && (
            <TourForm 
              tour={selectedTour} 
              onSubmit={handleUpdate} 
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function TourForm({ tour, onSubmit }: { tour?: Tour; onSubmit: (data: FormData) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);ata(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Tên Tour</Label>
        <Input
          id="name"
          name="name"
          defaultValue={tour?.name}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="description">Mô tả</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={tour?.description || ""}
          rows={3}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price">Giá (VNĐ)</Label>
          <Input
            id="price"
            name="price"
            type="number"
            defaultValue={tour?.price}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="duration">Thời gian</Label>
          <Input
            id="duration"
            name="duration"
            defaultValue={tour?.duration}
            placeholder="VD: 2 ngày 1 đêm"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="location">Địa điểm</Label>
          <Input
            id="location"
            name="location"
            defaultValue={tour?.location}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="maxPeople">Số người tối đa</Label>
          <Input
            id="maxPeople"
            name="maxPeople"
            type="number"
            defaultValue={tour?.maxPeople}
            required
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="image">URL Hình ảnh</Label>
        <Input
          id="image"
          name="image"
          type="url"
          defaultValue={tour?.image || ""}
          placeholder="https://example.com/image.jpg"
        />
      </div>
      
      <Button type="submit" className="w-full">
        {tour ? "Cập nhật" : "Tạo Tour"}
      </Button>
    </form>
  );
}
