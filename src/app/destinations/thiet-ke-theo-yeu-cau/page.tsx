"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, MapPin, Clock, Users, Calendar, Star, Phone, Mail, User, Plus, X, ArrowRight, AlertCircle } from "lucide-react";

interface CustomTourDay {
  day: number;
  title: string;
  activities: string[];
  location: string;
}

export default function CustomTourPage() {
  const [formData, setFormData] = useState({
    tourName: "",
    duration: "",
    numberOfPeople: 10,
    budget: "",
    startDate: "",
    specialRequests: "",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [itinerary, setItinerary] = useState<CustomTourDay[]>([
    { day: 1, title: "", activities: [""], location: "" },
  ]);

  const addDay = () => {
    setItinerary([...itinerary, { 
      day: itinerary.length + 1, 
      title: "", 
      activities: [""], 
      location: "" 
    }]);
  };

  const removeDay = (dayIndex: number) => {
    if (itinerary.length > 1) {
      const newItinerary = itinerary.filter((_, index) => index !== dayIndex);
      const updatedItinerary = newItinerary.map((day, index) => ({
        ...day,
        day: index + 1,
      }));
      setItinerary(updatedItinerary);
    }
  };

  const updateDay = (dayIndex: number, field: keyof CustomTourDay, value: string) => {
    const newItinerary = [...itinerary];
    if (field === "activities") {
      return;
    }
    (newItinerary[dayIndex] as any)[field] = value;
    setItinerary(newItinerary);
  };

  const addActivity = (dayIndex: number) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].activities.push("");
    setItinerary(newItinerary);
  };

  const updateActivity = (dayIndex: number, activityIndex: number, value: string) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].activities[activityIndex] = value;
    setItinerary(newItinerary);
  };

  const removeActivity = (dayIndex: number, activityIndex: number) => {
    const newItinerary = [...itinerary];
    if (newItinerary[dayIndex].activities.length > 1) {
      newItinerary[dayIndex].activities.splice(activityIndex, 1);
      setItinerary(newItinerary);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.numberOfPeople < 10) {
      alert("Số lượng người tham gia phải từ 10 người trở lên!");
      return;
    }

    if (!formData.tourName || !formData.duration || !formData.contactInfo.name || 
        !formData.contactInfo.email || !formData.contactInfo.phone) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }

    const hasEmptyFields = itinerary.some(day => 
      !day.title || !day.location || day.activities.some(activity => !activity.trim())
    );

    if (hasEmptyFields) {
      alert("Vui lòng hoàn thiện tất cả thông tin trong lịch trình!");
      return;
    }

    alert("Yêu cầu thiết kế tour đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 24h để tư vấn chi tiết.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-red-900/50 to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200"
          alt="Thiết kế tour theo yêu cầu"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Thiết Kế Hành Trình Theo Yêu Cầu
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl font-light">
            Tạo một chuyến du lịch độc đáo phù hợp với sở thích và ngân sách của nhóm bạn
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/destinations" className="hover:text-green-600 transition-colors">
              Hành trình
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-green-700 font-medium">Thiết kế tour</span>
          </nav>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Button asChild variant="ghost" className="mr-4 hover:text-green-600">
              <Link href="/destinations">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Quay lại
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800">Thiết kế hành trình theo yêu cầu</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form thiết kế tour */}
            <div className="lg:col-span-2 space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Thông tin cơ bản */}
                <Card className="border-green-100 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-red-50">
                    <CardTitle className="text-xl font-semibold text-green-800">Thông tin cơ bản</CardTitle>
                    <CardDescription className="text-gray-600">
                      Cung cấp thông tin cơ bản để chúng tôi thiết kế tour phù hợp
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="tourName" className="text-green-800">Tên tour *</Label>
                        <Input
                          id="tourName"
                          placeholder="VD: Khám phá Nghệ An 3 ngày"
                          value={formData.tourName}
                          onChange={(e) => setFormData({ ...formData, tourName: e.target.value })}
                          required
                          className="border-green-200 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="duration" className="text-green-800">Thời gian *</Label>
                        <Select 
                          value={formData.duration} 
                          onValueChange={(value) => setFormData({ ...formData, duration: value })}
                        >
                          <SelectTrigger className="border-green-200 focus:ring-green-500">
                            <SelectValue placeholder="Chọn thời gian" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1 ngày">1 ngày</SelectItem>
                            <SelectItem value="2 ngày 1 đêm">2 ngày 1 đêm</SelectItem>
                            <SelectItem value="3 ngày 2 đêm">3 ngày 2 đêm</SelectItem>
                            <SelectItem value="4 ngày 3 đêm">4 ngày 3 đêm</SelectItem>
                            <SelectItem value="5 ngày 4 đêm">5 ngày 4 đêm</SelectItem>
                            <SelectItem value="Khác">Khác</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="numberOfPeople" className="text-green-800">Số lượng người (tối thiểu 10) *</Label>
                        <Input
                          id="numberOfPeople"
                          type="number"
                          min="10"
                          value={formData.numberOfPeople}
                          onChange={(e) => setFormData({ ...formData, numberOfPeople: parseInt(e.target.value) || 10 })}
                          required
                          className="border-green-200 focus:ring-green-500"
                        />
                        {formData.numberOfPeople < 10 && (
                          <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" /> Số lượng người phải từ 10 trở lên
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-green-800">Ngân sách dự kiến (VNĐ/người)</Label>
                        <Input
                          id="budget"
                          placeholder="VD: 2.000.000"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="border-green-200 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="startDate" className="text-green-800">Ngày khởi hành mong muốn</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="border-green-200 focus:ring-green-500"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Lịch trình chi tiết */}
                <Card className="border-green-100 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-red-50 flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-green-800">Lịch trình chi tiết</CardTitle>
                      <CardDescription className="text-gray-600">Thiết kế lịch trình theo từng ngày</CardDescription>
                    </div>
                    <Button type="button" onClick={addDay} size="sm" className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Thêm ngày
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {itinerary.map((day, dayIndex) => (
                      <Card key={dayIndex} className="border-l-4 border-l-green-600 bg-green-50">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-green-800">Ngày {day.day}</CardTitle>
                            {itinerary.length > 1 && (
                              <Button 
                                type="button" 
                                variant="ghost" 
                                size="sm"
                                className="hover:text-red-600"
                                onClick={() => removeDay(dayIndex)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <Label className="text-green-800">Tiêu đề ngày *</Label>
                            <Input
                              placeholder="VD: Khám phá Kim Liên"
                              value={day.title}
                              onChange={(e) => updateDay(dayIndex, "title", e.target.value)}
                              required
                              className="border-green-200 focus:ring-green-500"
                            />
                          </div>

                          <div>
                            <Label className="text-green-800">Địa điểm chính *</Label>
                            <Input
                              placeholder="VD: Kim Liên, Nghệ An"
                              value={day.location}
                              onChange={(e) => updateDay(dayIndex, "location", e.target.value)}
                              required
                              className="border-green-200 focus:ring-green-500"
                            />
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <Label className="text-green-800">Hoạt động trong ngày *</Label>
                              <Button 
                                type="button" 
                                variant="outline" 
                                size="sm"
                                className="border-green-600 text-green-600 hover:bg-green-100"
                                onClick={() => addActivity(dayIndex)}
                              >
                                <Plus className="h-4 w-4 mr-1" />
                                Thêm hoạt động
                              </Button>
                            </div>
                            {day.activities.map((activity, activityIndex) => (
                              <div key={activityIndex} className="flex gap-2 mb-2">
                                <Input
                                  placeholder="VD: Tham quan nhà thờ họ Hoàng Trù"
                                  value={activity}
                                  onChange={(e) => updateActivity(dayIndex, activityIndex, e.target.value)}
                                  required
                                  className="border-green-200 focus:ring-green-500"
                                />
                                {day.activities.length > 1 && (
                                  <Button 
                                    type="button" 
                                    variant="ghost" 
                                    size="sm"
                                    className="hover:text-red-600"
                                    onClick={() => removeActivity(dayIndex, activityIndex)}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                {/* Yêu cầu đặc biệt */}
                <Card className="border-green-100 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-red-50">
                    <CardTitle className="text-xl font-semibold text-green-800">Yêu cầu đặc biệt</CardTitle>
                    <CardDescription className="text-gray-600">
                      Ghi chú các yêu cầu về ăn uống, chỗ ở, hoặc hoạt động đặc biệt
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Textarea
                      placeholder="VD: Ưu tiên khách sạn 4 sao, có món chay, xe đời mới..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      rows={5}
                      className="border-green-200 focus:ring-green-500"
                    />
                  </CardContent>
                </Card>

                {/* Thông tin liên hệ */}
                <Card className="border-green-100 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-red-50">
                    <CardTitle className="text-xl font-semibold text-green-800">Thông tin liên hệ</CardTitle>
                    <CardDescription className="text-gray-600">
                      Cung cấp thông tin để chúng tôi liên hệ tư vấn
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <Label htmlFor="contactName" className="text-green-800">Họ và tên *</Label>
                      <Input
                        id="contactName"
                        placeholder="Nhập họ và tên"
                        value={formData.contactInfo.name}
                        onChange={(e) => setFormData({
                          ...formData, 
                          contactInfo: { ...formData.contactInfo, name: e.target.value },
                        })}
                        required
                        className="border-green-200 focus:ring-green-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactEmail" className="text-green-800">Email *</Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          placeholder="Nhập email"
                          value={formData.contactInfo.email}
                          onChange={(e) => setFormData({
                            ...formData, 
                            contactInfo: { ...formData.contactInfo, email: e.target.value },
                          })}
                          required
                          className="border-green-200 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactPhone" className="text-green-800">Số điện thoại *</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          placeholder="Nhập số điện thoại"
                          value={formData.contactInfo.phone}
                          onChange={(e) => setFormData({
                            ...formData, 
                            contactInfo: { ...formData.contactInfo, phone: e.target.value },
                          })}
                          required
                          className="border-green-200 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  type="submit" 
                  className="w-full bg-green-700 hover:bg-green-800 text-lg py-6 flex items-center gap-2"
                >
                  Gửi yêu cầu thiết kế tour <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Thông tin hướng dẫn */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 border-green-100 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-100 to-red-50">
                  <CardTitle className="text-xl font-semibold text-green-800">Hướng dẫn thiết kế</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Users className="h-5 w-5 text-green-600" />,
                        title: "Số lượng tối thiểu",
                        desc: "Tour theo yêu cầu cần tối thiểu 10 người để đảm bảo chất lượng dịch vụ",
                      },
                      {
                        icon: <Calendar className="h-5 w-5 text-green-600" />,
                        title: "Thời gian xử lý",
                        desc: "Chúng tôi sẽ liên hệ trong vòng 24h để tư vấn và báo giá chi tiết",
                      },
                      {
                        icon: <MapPin className="h-5 w-5 text-green-600" />,
                        title: "Điểm đến",
                        desc: "Chuyên về các tour khám phá Nghệ An và các tỉnh lân cận",
                      },
                      {
                        icon: <Star className="h-5 w-5 text-green-600" />,
                        title: "Dịch vụ chuyên nghiệp",
                        desc: "Đội ngũ hướng dẫn viên giàu kinh nghiệm và am hiểu văn hóa địa phương",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        {item.icon}
                        <div>
                          <h4 className="font-medium text-green-800">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-green-800 mb-2">Liên hệ trực tiếp</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-green-600" />
                        <span>0123 456 789</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-green-600" />
                        <span>info@ngheantravel.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}