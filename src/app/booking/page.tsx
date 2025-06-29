"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BookingForm } from "@/components/booking/booking-form";
import { TourSelection } from "@/components/booking/tour-selection";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Tour {
  id: string;
  name: string;
  duration: string;
  price: number;
  image: string;
  description: string;
}

export default function BookingPage() {
  const searchParams = useSearchParams();
  const tourId = searchParams.get("tourId");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  useEffect(() => {
    if (tourId && tours[tourId]) {
      setSelectedTour(tours[tourId]);
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
              Vui lòng chọn một trong các tour sau để tiến hành đặt tour:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(tours).map((tour) => (
                <div
                  key={tour.id}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={tour.image}
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
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/booking">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Đặt tour</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <BookingForm
              tourId={selectedTour.id}
              tourName={selectedTour.name}
              tourPrice={selectedTour.price}
              tourDuration={selectedTour.duration}
            />
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={selectedTour.image}
                  alt={selectedTour.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">
                  {selectedTour.name}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {selectedTour.duration}
                </p>
                <p className="mb-4">{selectedTour.description}</p>
                <div className="font-bold text-green-700 text-lg">
                  {selectedTour.price.toLocaleString()} VNĐ/người
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Bao gồm</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Xe du lịch đời
                  mới
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Khách sạn 3-4
                  sao
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Các bữa ăn theo
                  chương trình
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Vé tham quan
                  các điểm
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Hướng dẫn viên
                  chuyên nghiệp
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Bảo hiểm du
                  lịch
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Không bao gồm</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span> Đồ uống trong các
                  bữa ăn
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span> Chi phí cá nhân
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span> Tiền tip cho
                  hướng dẫn viên và tài xế
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Hỗ trợ</h3>
              <p className="text-sm mb-2">
                Cần hỗ trợ? Liên hệ với chúng tôi:
              </p>
              <p className="text-sm font-medium">
                Hotline: 0238 1234 567
              </p>
              <p className="text-sm">
                (Hỗ trợ 24/7, bao gồm cả ngày lễ)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}