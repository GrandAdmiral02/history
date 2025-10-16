"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, MapPin, Clock, Users, Calendar, Star, Phone, Mail, User } from "lucide-react";

interface Tour {
  id: string;
  name: string;
  description: string;
  location: string;
  duration: string;
  maxPeople: number;
  price: number;
  image: string;
  itinerary: {
    day: number;
    title: string;
    activities: string[];
    meals: string[];
    accommodation?: string;
  }[];
  included: string[];
  excluded: string[];
  notes: string[];
}

// Dữ liệu static tour
const tours: Record<string, Tour> = {
  "nghe-an-eco-beach": {
    id: "nghe-an-eco-beach",
    name: "Tour Sinh Thái & Biển Nghệ An",
    location: "Cửa Lò, Nghệ An",
    duration: "3 ngày 2 đêm",
    maxPeople: 30,
    price: 2990000,
    image: "https://static.vinwonders.com/production/bien-cua-lo-1.jpg",
    description: "Khám phá thiên nhiên xanh mát tại Hòn Mát và thư giãn tại bãi biển Cửa Lò thơ mộng",
    itinerary: [
      {
        day: 1,
        title: "Khởi hành - Biển Cửa Lò",
        activities: [
          "06:00 - Khởi hành từ Hà Nội, đi cao tốc về Nghệ An",
          "10:30 - Nghỉ chân tại Ninh Bình, dùng sáng",
          "14:00 - Đến Cửa Lò, nhận phòng khách sạn",
          "15:30 - Tự do tắm biển Cửa Lò",
          "18:00 - Ăn tối hải sản tại nhà hàng địa phương"
        ],
        meals: ["Sáng", "Trưa", "Tối"],
        accommodation: "Khách sạn 3 sao tại Cửa Lò"
      },
      {
        day: 2,
        title: "Khám phá Hòn Mát",
        activities: [
          "08:00 - Dùng sáng tại khách sạn",
          "09:00 - Đi thuyền ra Hòn Mát",
          "10:30 - Tham quan và tắm biển tại Hòn Mát",
          "14:00 - Lặn biển ngắm san hô",
          "16:00 - Trở về Cửa Lò",
          "18:00 - Tham quan chợ đêm Cửa Lò"
        ],
        meals: ["Sáng", "Trưa", "Tối"],
        accommodation: "Khách sạn 3 sao tại Cửa Lò"
      },
      {
        day: 3,
        title: "Tạm biệt Cửa Lò",
        activities: [
          "08:00 - Dùng sáng và làm thủ tục trả phòng",
          "09:30 - Mua sắm đặc sản Cửa Lò",
          "11:00 - Tham quan Làng Sen quê Bác (nếu còn thời gian)",
          "12:00 - Dùng cơm trưa và khởi hành về Hà Nội",
          "18:00 - Về đến Hà Nội, kết thúc chương trình"
        ],
        meals: ["Sáng", "Trưa"]
      }
    ],
    included: [
      "Xe ô tô du lịch đời mới có điều hòa",
      "Khách sạn 3 sao (2 người/phòng)",
      "Các bữa ăn theo chương trình",
      "Vé tham quan các điểm trong chương trình",
      "Vé tàu ra Hòn Mát",
      "Hướng dẫn viên nhiệt tình",
      "Bảo hiểm du lịch"
    ],
    excluded: [
      "Chi phí cá nhân",
      "Đồ uống có cồn",
      "Tip cho hướng dẫn viên và tài xế",
      "Chi phí phát sinh ngoài chương trình"
    ],
    notes: [
      "Mang theo CCCD/CMND để làm thủ tục check-in",
      "Mang theo đồ bơi, kem chống nắng",
      "Chuẩn bị áo phao nếu không biết bơi",
      "Không xả rác bừa bãi trên biển và các khu du lịch"
    ]
  },
  "ve-nguon": {
    id: "ve-nguon",
    name: "Hành trình về nguồn",
    location: "Kim Liên, Nghệ An",
    duration: "3 ngày 2 đêm",
    maxPeople: 30,
    price: 2990000,
    image: "https://ext.same-assets.com/4052699563/777305328.jpeg",
    description: "Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh tại Nghệ An",
    itinerary: [
      {
        day: 1,
        title: "Khởi hành - Thăm quê hương Bác Hồ",
        activities: [
          "06:00 - Khởi hành từ Hà Nội, đi cao tốc về Nghệ An",
          "10:30 - Nghỉ chân tại Ninh Bình, dùng sáng",
          "14:00 - Đến Kim Liên, thăm Khu di tích Kim Liên",
          "15:30 - Thăm nhà thờ họ Hoàng Trù",
          "16:30 - Tham quan bảo tàng Hồ Chí Minh tại Kim Liên",
          "18:00 - Check-in khách sạn tại thành phố Vinh"
        ],
        meals: ["Sáng", "Trưa", "Tối"],
        accommodation: "Khách sạn 3 sao tại Vinh"
      },
      {
        day: 2,
        title: "Khám phá di tích lịch sử",
        activities: [
          "08:00 - Dùng sáng tại khách sạn",
          "09:00 - Thăm Bảo tàng Xứ Nghệ",
          "10:30 - Tham quan Quảng trường Hồ Chí Minh",
          "14:00 - Thăm làng Sen - nơi Bác Hồ sinh ra",
          "16:00 - Tham quan đền thờ Hoàng đế Quang Trung",
          "17:30 - Khám phá chợ đêm Vinh"
        ],
        meals: ["Sáng", "Trưa", "Tối"],
        accommodation: "Khách sạn 3 sao tại Vinh"
      },
      {
        day: 3,
        title: "Hoàn thành hành trình",
        activities: [
          "08:00 - Dùng sáng và làm thủ tục trả phòng",
          "09:30 - Thăm di tích Phan Bội Châu",
          "11:00 - Mua sắm đặc sản Nghệ An",
          "12:00 - Dùng cơm trưa và khởi hành về Hà Nội",
          "18:00 - Về đến Hà Nội, kết thúc chương trình"
        ],
        meals: ["Sáng", "Trưa"]
      }
    ],
    included: [
      "Xe ô tô du lịch đời mới có điều hòa",
      "Khách sạn 3 sao (2 người/phòng)",
      "Các bữa ăn theo chương trình",
      "Vé tham quan các điểm trong chương trình",
      "Hướng dẫn viên nhiệt tình",
      "Bảo hiểm du lịch"
    ],
    excluded: [
      "Chi phí cá nhân",
      "Đồ uống có cồn",
      "Tip cho hướng dẫn viên và tài xế",
      "Chi phí phát sinh ngoài chương trình"
    ],
    notes: [
      "Mang theo CCCD/CMND để làm thủ tục check-in",
      "Mặc trang phục lịch sự khi tham quan các di tích",
      "Mang theo áo ấm cho buổi tối",
      "Không được hút thuốc trong xe và các khu vực cấm"
    ]
  },
  "con-duong-huyen-thoai": {
    id: "con-duong-huyen-thoai",
    name: "Con đường huyền thoại",
    description: "Hành trình theo dấu chân những người anh hùng",
    location: "Quỳ Châu, Nghệ An", 
    duration: "2 ngày 1 đêm",
    maxPeople: 25,
    price: 1890000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-7ML9Wbwv2OjR8rN0YvrcN1ZdlLMOn0S2XRmT1r2R6931xlk8dMo1rZC-Y_ugFLgELQ&usqp=CAU",
    itinerary: [
      {
        day: 1,
        title: "Khởi hành - Đường mòn Hồ Chí Minh",
        activities: [
          "07:00 - Khởi hành từ Hà Nội",
          "11:00 - Đến Quỳ Châu, thăm cột mốc số 0 đường Hồ Chí Minh",
          "14:00 - Tham quan Truông Bồn",
          "16:00 - Thăm Ngã ba Đồng Lộc",
          "18:00 - Check-in khách sạn"
        ],
        meals: ["Trưa", "Tối"],
        accommodation: "Khách sạn 3 sao"
      },
      {
        day: 2,
        title: "Kết thúc hành trình",
        activities: [
          "08:00 - Dùng sáng",
          "09:00 - Thăm Bảo tàng Xô Viết Nghệ Tĩnh", 
          "11:00 - Mua sắm đặc sản",
          "12:00 - Khởi hành về Hà Nội"
        ],
        meals: ["Sáng", "Trưa"]
      }
    ],
    included: [
      "Xe ô tô du lịch",
      "Khách sạn 3 sao",
      "Các bữa ăn theo chương trình",
      "Vé tham quan",
      "Hướng dẫn viên",
      "Bảo hiểm du lịch"
    ],
    excluded: [
      "Chi phí cá nhân",
      "Đồ uống có cồn",
      "Tip cho HDV và tài xế"
    ],
    notes: [
      "Mang theo giấy tờ tùy thân",
      "Mặc trang phục phù hợp địa hình"
    ]
  },
  "di-san-tam-linh": {
    id: "di-san-tam-linh", 
    name: "Di sản văn hóa tâm linh",
    description: "Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ",
    location: "Kỳ Sơn, Nghệ An",
    duration: "4 ngày 3 đêm",
    maxPeople: 20,
    price: 3490000,
    image: "https://titangroup.vn/wp-content/uploads/diem-du-lich-tam-linh-nghe-an-5.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Khởi hành - Đền Cuông",
        activities: [
          "06:00 - Khởi hành từ Hà Nội",
          "10:00 - Nghỉ chân tại Thanh Hóa",
          "14:00 - Đến Nghệ An, thăm Đền Cuông",
          "16:00 - Tham gia lễ cúng tại đền",
          "18:00 - Check-in khách sạn"
        ],
        meals: ["Trưa", "Tối"],
        accommodation: "Khách sạn 4 sao"
      },
      {
        day: 2,
        title: "Đền Quả Sơn - Đền Vạn Lộc",
        activities: [
          "08:00 - Dùng sáng",
          "09:00 - Thăm Đền Quả Sơn",
          "14:00 - Tham quan Đền Vạn Lộc",
          "16:00 - Khám phá văn hóa tâm linh địa phương",
          "18:00 - Nghỉ ngơi tại khách sạn"
        ],
        meals: ["Sáng", "Trưa", "Tối"],
        accommodation: "Khách sạn 4 sao"
      },
      {
        day: 3,
        title: "Chùa Đại Tuệ - Đền Cờn",
        activities: [
          "08:00 - Dùng sáng",
          "09:00 - Tham quan Chùa Đại Tuệ",
          "14:00 - Thăm Đền Cờn",
          "16:00 - Tham gia nghi lễ tâm linh",
          "18:00 - Ăn tối và nghỉ ngơi"
        ],
        meals: ["Sáng", "Trưa", "Tối"],
        accommodation: "Khách sạn 4 sao"
      },
      {
        day: 4,
        title: "Kết thúc hành trình",
        activities: [
          "08:00 - Dùng sáng và làm thủ tục trả phòng",
          "09:00 - Mua sắm đặc sản tâm linh",
          "11:00 - Khởi hành về Hà Nội",
          "17:00 - Về đến Hà Nội"
        ],
        meals: ["Sáng", "Trưa"]
      }
    ],
    included: [
      "Xe ô tô du lịch cao cấp",
      "Khách sạn 4 sao",
      "Các bữa ăn theo chương trình",
      "Vé tham quan và lễ phí",
      "Hướng dẫn viên chuyên về tâm linh",
      "Bảo hiểm du lịch"
    ],
    excluded: [
      "Chi phí cá nhân",
      "Lễ phí tự nguyện",
      "Tip cho HDV và tài xế"
    ],
    notes: [
      "Mang theo trang phục lịch sự",
      "Tôn trọng quy tắc tại các đền chùa",
      "Không được chụp ảnh trong một số khu vực thiêng"
    ]
  },
  "dau-an-danh-nhan": {
    id: "dau-an-danh-nhan",
    name: "Dấu ấn danh nhân", 
    description: "Hành trình theo chân những danh nhân lịch sử xứ Nghệ",
    location: "Vinh, Nghệ An",
    duration: "3 ngày 2 đêm",
    maxPeople: 35,
    price: 2590000,
    image: "https://ik.imagekit.io/tvlk/blog/2023/07/phu-chu-tich-acc-14.webp?tr=q-70,c-at_max,w-500,h-300,dpr-2",
    itinerary: [
      {
        day: 1,
        title: "Khởi hành - Di tích Phan Bội Châu",
        activities: [
          "07:00 - Khởi hành từ Hà Nội",
          "11:00 - Đến Nghệ An, thăm di tích Phan Bội Châu",
          "14:00 - Tham quan bảo tàng danh nhân Nghệ An",
          "16:00 - Thăm mộ Phan Bội Châu",
          "18:00 - Check-in khách sạn tại Vinh"
        ],
        meals: ["Trưa", "Tối"],
        accommodation: "Khách sạn 3 sao"
      },
      {
        day: 2, 
        title: "Di tích Nguyễn Du - Hoàng đế Quang Trung",
        activities: [
          "08:00 - Dùng sáng",
          "09:00 - Thăm di tích Nguyễn Du",
          "14:00 - Tham quan đền thờ Hoàng đế Quang Trung",
          "16:00 - Khám phá văn hóa danh nhân",
          "18:00 - Nghỉ ngơi tại khách sạn"
        ],
        meals: ["Sáng", "Trưa", "Tối"],
        accommodation: "Khách sạn 3 sao"
      },
      {
        day: 3,
        title: "Kết thúc hành trình",
        activities: [
          "08:00 - Dùng sáng và trả phòng",
          "09:00 - Thăm kỷ niệm nhà Nguyễn Thúc Hàm",
          "11:00 - Mua sắm đặc sản",
          "12:00 - Khởi hành về Hà Nội",
          "17:00 - Về đến Hà Nội"
        ],
        meals: ["Sáng", "Trưa"]
      }
    ],
    included: [
      "Xe ô tô du lịch",
      "Khách sạn 3 sao",
      "Các bữa ăn theo chương trình", 
      "Vé tham quan các di tích",
      "Hướng dẫn viên am hiểu lịch sử",
      "Bảo hiểm du lịch"
    ],
    excluded: [
      "Chi phí cá nhân",
      "Đồ uống có cồn",
      "Tip cho HDV và tài xế"
    ],
    notes: [
      "Mang theo giấy tờ tùy thân",
      "Trang phục lịch sự khi tham quan",
      "Tôn trọng các di tích lịch sử"
    ]
  }
};

export default function BookingPage() {
  return (
    <div className="container py-12">
      <BookingContent />
    </div>
  );
}

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tourId = searchParams.get("tourId");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    numberOfPeople: 1,
    specialRequests: "",
    tourDate: ""
  });

  useEffect(() => {
    if (tourId && tours[tourId]) {
      setSelectedTour(tours[tourId]);
    }
  }, [tourId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.tourDate) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    // Tạo booking ID
    const bookingId = `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Tạo dữ liệu booking
    const bookingData = {
      tourId: selectedTour.id,
      tourName: selectedTour.name,
      departureDate: formData.tourDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Default 7 ngày sau
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      participants: formData.numberOfPeople.toString(),
      notes: formData.specialRequests,
      totalPrice: selectedTour.price * formData.numberOfPeople
    };

    // Lưu vào localStorage
    try {
      localStorage.setItem(bookingId, JSON.stringify(bookingData));

      // Chuyển hướng đến trang thanh toán
      window.location.href = `/booking/payment?bookingId=${bookingId}`;
    } catch (error) {
      console.error("Error saving booking data:", error);
      alert("Có lỗi xảy ra khi lưu thông tin đặt tour. Vui lòng thử lại.");
    }
  };

  if (!tourId || !selectedTour) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/destinations">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Đặt tour</h1>
        </div>

        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            Vui lòng chọn tour từ trang điểm đến
          </p>
          <Button asChild>
            <Link href="/destinations">Chọn tour</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <Button asChild variant="ghost" className="mr-4">
          <Link href="/destinations">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Quay lại
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Đặt tour: {selectedTour.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tour Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tour Overview */}
          <Card>
            <CardHeader>
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={selectedTour.image}
                  alt={selectedTour.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <CardTitle className="text-2xl">{selectedTour.name}</CardTitle>
              <CardDescription>{selectedTour.description}</CardDescription>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-green-600" />
                  {selectedTour.location}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-green-600" />
                  {selectedTour.duration}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-green-600" />
                  Tối đa {selectedTour.maxPeople} người
                </div>
              </div>

              <div className="text-2xl font-bold text-green-700 mt-4">
                {selectedTour.price.toLocaleString("vi-VN")} VNĐ/người
              </div>
            </CardHeader>
          </Card>

          {/* Detailed Itinerary */}
          <Tabs defaultValue="itinerary" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="itinerary">Lịch trình</TabsTrigger>
              <TabsTrigger value="included">Bao gồm</TabsTrigger>
              <TabsTrigger value="excluded">Không bao gồm</TabsTrigger>
              <TabsTrigger value="notes">Lưu ý</TabsTrigger>
            </TabsList>

            <TabsContent value="itinerary" className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Chi tiết hành trình</h3>
              {selectedTour.itinerary.map((day) => (
                <Card key={day.day}>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">
                      Ngày {day.day}: {day.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Hoạt động:</h4>
                      <ul className="space-y-1">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            • {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Bữa ăn:</h4>
                        <div className="flex gap-2">
                          {day.meals.map((meal, index) => (
                            <Badge key={index} variant="secondary">
                              {meal}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {day.accommodation && (
                        <div>
                          <h4 className="font-medium mb-2">Nghỉ ngơi:</h4>
                          <Badge variant="outline">{day.accommodation}</Badge>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="included">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Dịch vụ bao gồm</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedTour.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="excluded">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">Dịch vụ không bao gồm</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedTour.excluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-700">Lưu ý quan trọng</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedTour.notes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-600 mr-2">⚠</span>
                        <span className="text-sm">{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Thông tin đặt tour</CardTitle>
              <CardDescription>
                Vui lòng điền đầy đủ thông tin để hoàn tất đặt tour
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Họ và tên *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Nhập họ và tên"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Nhập email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="numberOfPeople">Số lượng người</Label>
                  <Select
                    value={formData.numberOfPeople.toString()}
                    onValueChange={(value) => setFormData({...formData, numberOfPeople: parseInt(value)})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: selectedTour.maxPeople}, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} người
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tourDate">Ngày khởi hành mong muốn *</Label>
                  <Input
                    id="tourDate"
                    type="date"
                    value={formData.tourDate}
                    onChange={(e) => setFormData({...formData, tourDate: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="specialRequests">Yêu cầu đặc biệt</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Nhập yêu cầu đặc biệt (nếu có)"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Tổng tiền:</span>
                    <span className="text-xl font-bold text-green-700">
                      {(selectedTour.price * formData.numberOfPeople).toLocaleString("vi-VN")} VNĐ
                    </span>
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    Đặt tour ngay
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}