
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Tour {
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
}

export function TourSelection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTourId, setSelectedTourId] = useState<string | null>(
    searchParams.get("tourId")
  );

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch("/api/tours");
      if (response.ok) {
        const data = await response.json();
        setTours(data);
      }
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

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
              src={tour.imageUrl || "/placeholder-image.jpg"}
              alt={tour.name}
              fill
              className="object-cover rounded-t-lg"
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
