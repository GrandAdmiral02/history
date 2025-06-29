
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { BookingForm } from "@/components/booking/booking-form";

interface Tour {
  id: string;
  name: string;
  description: string | null;
  location: string;
  duration: string;
  price: number;
  maxPeople: number;
  imageUrl: string | null;
}

function BookingContent() {
  const searchParams = useSearchParams();
  const tourId = searchParams.get("tourId");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    if (tourId && tours.length > 0) {
      const tour = tours.find(t => t.id === tourId);
      setSelectedTour(tour || null);
    }
  }, [tourId, tours]);

  const fetchTours = async () => {
    try {
      const response = await fetch("/api/tours");
      if (response.ok) {
        const data = await response.json();
        setTours(data);
      }
    } catch (error) {
      console.error("Error fetching tours:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p>Đang tải...</p>
        </div>
      </div>
    );
  }

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
              Vui lòng chọn một trong các tour sau để tiến hành đặt tour:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={tour.imageUrl || "/placeholder-image.jpg"}
                      alt={tour.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{tour.name}</h3>
                    <p className="text-muted-foreground mb-2">
                      {tour.duration}
                    </p>
                    <p className="mb-4 line-clamp-2">{tour.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green-700">
                        {tour.price.toLocaleString()} VNĐ
                      </span>
                      <Button
                        asChild
                        className="bg-green-700 hover:bg-green-800"
                      >
                        <Link href={`/booking?tourId=${tour.id}`}>
                          Đặt ngay
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/destinations">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Đặt tour</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tour Information */}
          <Card>
            <div className="relative h-64">
              <Image
                src={selectedTour.imageUrl || "/placeholder-image.jpg"}
                alt={selectedTour.name}
                fill
                className="object-cover rounded-t-lg"
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
                    {selectedTour.price.toLocaleString()} VNĐ
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <BookingForm tour={selectedTour} />
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <BookingContent />
    </Suspense>
  );
}
