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
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

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