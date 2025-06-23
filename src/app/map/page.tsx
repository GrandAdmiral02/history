
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock, Star } from "lucide-react";

const historicalSites = [
  {
    id: 1,
    name: "Khu di tích Kim Liên",
    type: "Di tích quốc gia đặc biệt",
    address: "Xã Kim Liên, huyện Nam Đàn, Nghệ An",
    coordinates: { lat: 19.0760, lng: 105.6198 },
    description: "Quê hương Chủ tịch Hồ Chí Minh",
    phone: "0238 1234 567",
    hours: "7:00 - 17:00",
    rating: 4.8,
    image: "kim-lien.jpg"
  },
  {
    id: 2,
    name: "Đền Cuông",
    type: "Di tích lịch sử văn hóa cấp quốc gia",
    address: "Xã Diễn An, huyện Diễn Châu, Nghệ An",
    coordinates: { lat: 19.1234, lng: 105.7890 },
    description: "Thờ An Dương Vương và các công thần",
    phone: "0238 2345 678",
    hours: "6:00 - 18:00",
    rating: 4.6,
    image: "den-cuong.jpg"
  },
  {
    id: 3,
    name: "Truông Bồn",
    type: "Di tích lịch sử",
    address: "Huyện Đô Lương, Nghệ An",
    coordinates: { lat: 18.9876, lng: 105.4321 },
    description: "Tưởng nhớ Thanh niên xung phong",
    phone: "0238 3456 789",
    hours: "8:00 - 17:00",
    rating: 4.7,
    image: "truong-bon.jpg"
  },
  {
    id: 4,
    name: "Thành cổ Vinh",
    type: "Di tích lịch sử cấp tỉnh",
    address: "Thành phố Vinh, Nghệ An",
    coordinates: { lat: 18.6733, lng: 105.6714 },
    description: "Chứng tích lịch sử xứ Nghệ",
    phone: "0238 4567 890",
    hours: "8:00 - 16:30",
    rating: 4.4,
    image: "thanh-co-vinh.jpg"
  }
];

export default function MapPage() {
  const [selectedSite, setSelectedSite] = useState(historicalSites[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bản Đồ Di Tích Lịch Sử
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Khám phá vị trí và tìm đường đến các di tích lịch sử nổi tiếng của Nghệ An
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-gray-100">
                <Navigation className="mr-2 h-5 w-5" />
                Tìm đường
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                Xem tất cả địa điểm
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Site List */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Danh sách địa điểm</h2>
              {historicalSites.map((site) => (
                <Card 
                  key={site.id} 
                  className={`cursor-pointer transition-colors ${
                    selectedSite?.id === site.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedSite(site)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{site.name}</CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {site.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{site.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{site.description}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="line-clamp-1">{site.address}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-20"></div>
                  <div className="text-center z-10">
                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Bản đồ tương tác</p>
                    <p className="text-sm text-gray-500">Tích hợp Google Maps/OpenStreetMap</p>
                  </div>
                  
                  {/* Sample markers */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Site Details */}
            {selectedSite && (
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{selectedSite.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {selectedSite.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{selectedSite.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge variant="secondary">{selectedSite.type}</Badge>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Địa chỉ</p>
                          <p className="text-sm text-muted-foreground">{selectedSite.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-sm">Điện thoại</p>
                          <p className="text-sm text-muted-foreground">{selectedSite.phone}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="font-medium text-sm">Giờ mở cửa</p>
                          <p className="text-sm text-muted-foreground">{selectedSite.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Navigation className="mr-2 h-4 w-4" />
                      Chỉ đường
                    </Button>
                    <Button variant="outline">
                      <Phone className="mr-2 h-4 w-4" />
                      Gọi điện
                    </Button>
                    <Button variant="outline">
                      Xem chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Travel Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Mẹo du lịch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Phương tiện</p>
                    <p className="text-sm text-muted-foreground">
                      Nên thuê xe máy hoặc ô tô để di chuyển giữa các địa điểm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Thời gian tốt nhất</p>
                    <p className="text-sm text-muted-foreground">
                      Buổi sáng (7-10h) và chiều (14-16h) để tránh nắng nóng
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Chuẩn bị</p>
                    <p className="text-sm text-muted-foreground">
                      Mang theo nước uống, kem chống nắng và trang phục lịch sự
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
