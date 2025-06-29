
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
import { ChevronLeft, MapPin, Clock, Users, Calendar, Star, Phone, Mail, User, Plus, X } from "lucide-react";

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
      phone: ""
    }
  });

  const [itinerary, setItinerary] = useState<CustomTourDay[]>([
    { day: 1, title: "", activities: [""], location: "" }
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
      // Cập nhật lại số ngày
      const updatedItinerary = newItinerary.map((day, index) => ({
        ...day,
        day: index + 1
      }));
      setItinerary(updatedItinerary);
    }
  };

  const updateDay = (dayIndex: number, field: keyof CustomTourDay, value: string) => {
    const newItinerary = [...itinerary];
    if (field === 'activities') {
      return; // Activities được xử lý riêng
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

    // Kiểm tra lịch trình
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
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/destinations">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Thiết kế hành trình theo yêu cầu</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form thiết kế tour */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
                    alt="Thiết kế tour theo yêu cầu"
                    fill
                    className="object-cover"
                    sizes="66vw"
                  />
                </div>
                <CardTitle className="text-2xl">Tạo hành trình riêng của bạn</CardTitle>
                <CardDescription>
                  Thiết kế một chuyến du lịch độc đáo phù hợp với sở thích và ngân sách của nhóm bạn
                </CardDescription>
              </CardHeader>
            </Card>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Thông tin cơ bản */}
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin cơ bản</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tourName">Tên tour *</Label>
                      <Input
                        id="tourName"
                        placeholder="VD: Khám phá Nghệ An 3 ngày"
                        value={formData.tourName}
                        onChange={(e) => setFormData({...formData, tourName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="duration">Thời gian *</Label>
                      <Select 
                        value={formData.duration} 
                        onValueChange={(value) => setFormData({...formData, duration: value})}
                      >
                        <SelectTrigger>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="numberOfPeople">Số lượng người (tối thiểu 10) *</Label>
                      <Input
                        id="numberOfPeople"
                        type="number"
                        min="10"
                        value={formData.numberOfPeople}
                        onChange={(e) => setFormData({...formData, numberOfPeople: parseInt(e.target.value) || 10})}
                        required
                      />
                      {formData.numberOfPeople < 10 && (
                        <p className="text-sm text-red-600 mt-1">Số lượng người phải từ 10 trở lên</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="budget">Ngân sách dự kiến (VNĐ/người)</Label>
                      <Input
                        id="budget"
                        placeholder="VD: 2000000"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="startDate">Ngày khởi hành mong muốn</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Lịch trình chi tiết */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Lịch trình chi tiết</CardTitle>
                    <CardDescription>Thiết kế lịch trình theo từng ngày</CardDescription>
                  </div>
                  <Button type="button" onClick={addDay} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm ngày
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {itinerary.map((day, dayIndex) => (
                    <Card key={dayIndex} className="border-l-4 border-l-green-500">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-green-700">Ngày {day.day}</CardTitle>
                          {itinerary.length > 1 && (
                            <Button 
                              type="button" 
                              variant="ghost" 
                              size="sm"
                              onClick={() => removeDay(dayIndex)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <Label>Tiêu đề ngày *</Label>
                          <Input
                            placeholder="VD: Khám phá Kim Liên"
                            value={day.title}
                            onChange={(e) => updateDay(dayIndex, 'title', e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label>Địa điểm chính *</Label>
                          <Input
                            placeholder="VD: Kim Liên, Nghệ An"
                            value={day.location}
                            onChange={(e) => updateDay(dayIndex, 'location', e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label>Hoạt động trong ngày *</Label>
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="sm"
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
                              />
                              {day.activities.length > 1 && (
                                <Button 
                                  type="button" 
                                  variant="ghost" 
                                  size="sm"
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
              <Card>
                <CardHeader>
                  <CardTitle>Yêu cầu đặc biệt</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Nhập các yêu cầu đặc biệt về ăn uống, nghỉ ngơi, phương tiện di chuyển..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                    rows={4}
                  />
                </CardContent>
              </Card>

              {/* Thông tin liên hệ */}
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin liên hệ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contactName">Họ và tên *</Label>
                    <Input
                      id="contactName"
                      placeholder="Nhập họ và tên"
                      value={formData.contactInfo.name}
                      onChange={(e) => setFormData({
                        ...formData, 
                        contactInfo: {...formData.contactInfo, name: e.target.value}
                      })}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactEmail">Email *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="Nhập email"
                        value={formData.contactInfo.email}
                        onChange={(e) => setFormData({
                          ...formData, 
                          contactInfo: {...formData.contactInfo, email: e.target.value}
                        })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPhone">Số điện thoại *</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.contactInfo.phone}
                        onChange={(e) => setFormData({
                          ...formData, 
                          contactInfo: {...formData.contactInfo, phone: e.target.value}
                        })}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-lg py-6">
                Gửi yêu cầu thiết kế tour
              </Button>
            </form>
          </div>

          {/* Thông tin hướng dẫn */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Hướng dẫn thiết kế</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Số lượng tối thiểu</h4>
                      <p className="text-sm text-muted-foreground">
                        Tour theo yêu cầu cần tối thiểu 10 người để đảm bảo chất lượng dịch vụ
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Thời gian xử lý</h4>
                      <p className="text-sm text-muted-foreground">
                        Chúng tôi sẽ liên hệ trong vòng 24h để tư vấn và báo giá chi tiết
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Điểm đến</h4>
                      <p className="text-sm text-muted-foreground">
                        Chuyên về các tour khám phá Nghệ An và các tỉnh lân cận
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Dịch vụ chuyên nghiệp</h4>
                      <p className="text-sm text-muted-foreground">
                        Đội ngũ hướng dẫn viên giàu kinh nghiệm và am hiểu văn hóa địa phương
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Liên hệ trực tiếp</h4>
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
  );
}
