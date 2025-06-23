
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

interface Tour {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  image: string;
  maxPeople: number;
  createdAt: string;
}

export default function ToursAdminPage() {
  const { data: session, status } = useSession();
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    location: "",
    image: "",
    maxPeople: ""
  });

  // Kiểm tra phân quyền
  if (status === "loading") return <div>Đang tải...</div>;
  
  if (!session || !session.user || 
      !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      // Giả lập dữ liệu tour
      const mockTours: Tour[] = [
        {
          id: "1",
          name: "Tour Kim Liên - Quê hương Bác Hồ",
          description: "Khám phá làng Sen quê hương Chủ tịch Hồ Chí Minh với những di tích lịch sử ý nghĩa.",
          price: 500000,
          duration: "1 ngày",
          location: "Nam Đàn, Nghệ An",
          image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800",
          maxPeople: 30,
          createdAt: "2024-01-15"
        },
        {
          id: "2", 
          name: "Tour Đền Cường - Linh thiêng xứ Nghệ",
          description: "Hành trình tâm linh tại ngôi đền cổ linh thiêng bậc nhất xứ Nghệ.",
          price: 400000,
          duration: "6 tiếng",
          location: "Quỳ Châu, Nghệ An",
          image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
          maxPeople: 25,
          createdAt: "2024-01-10"
        }
      ];
      setTours(mockTours);
      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi tải danh sách tour:", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const tourData = {
      ...formData,
      price: parseInt(formData.price),
      maxPeople: parseInt(formData.maxPeople),
    };

    try {
      if (editingTour) {
        // Cập nhật tour
        const updatedTours = tours.map(tour => 
          tour.id === editingTour.id 
            ? { ...tour, ...tourData }
            : tour
        );
        setTours(updatedTours);
        alert("Cập nhật tour thành công!");
      } else {
        // Thêm tour mới
        const newTour: Tour = {
          id: Date.now().toString(),
          ...tourData,
          createdAt: new Date().toISOString().split('T')[0]
        };
        setTours([...tours, newTour]);
        alert("Thêm tour mới thành công!");
      }
      
      resetForm();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Lỗi khi lưu tour:", error);
      alert("Có lỗi xảy ra khi lưu tour!");
    }
  };

  const handleEdit = (tour: Tour) => {
    setEditingTour(tour);
    setFormData({
      name: tour.name,
      description: tour.description,
      price: tour.price.toString(),
      duration: tour.duration,
      location: tour.location,
      image: tour.image,
      maxPeople: tour.maxPeople.toString()
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa tour này?")) {
      try {
        const updatedTours = tours.filter(tour => tour.id !== id);
        setTours(updatedTours);
        alert("Xóa tour thành công!");
      } catch (error) {
        console.error("Lỗi khi xóa tour:", error);
        alert("Có lỗi xảy ra khi xóa tour!");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      duration: "",
      location: "",
      image: "",
      maxPeople: ""
    });
    setEditingTour(null);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  if (loading) {
    return (
      <div className="container max-w-screen-xl mx-auto py-10">
        <div className="text-center">Đang tải dữ liệu...</div>
      </div>
    );
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Quản lý tour</h1>
            <p className="text-muted-foreground mt-2">
              Thêm, sửa, xóa tour du lịch
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="h-4 w-4 mr-2" />
                Thêm tour mới
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingTour ? "Chỉnh sửa tour" : "Thêm tour mới"}
                </DialogTitle>
                <DialogDescription>
                  {editingTour ? "Cập nhật thông tin tour" : "Nhập thông tin tour mới"}
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Tên tour</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Nhập tên tour"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Địa điểm</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Nhập địa điểm"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Mô tả</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Nhập mô tả tour"
                    rows={3}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Giá (VNĐ)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      placeholder="0"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Thời gian</Label>
                    <Input
                      id="duration"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="VD: 2 ngày 1 đêm"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxPeople">Số người tối đa</Label>
                    <Input
                      id="maxPeople"
                      type="number"
                      value={formData.maxPeople}
                      onChange={(e) => setFormData({...formData, maxPeople: e.target.value})}
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="image">URL hình ảnh</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>
                
                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onClick={handleDialogClose}>
                    Hủy
                  </Button>
                  <Button type="submit">
                    {editingTour ? "Cập nhật" : "Thêm mới"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="mt-4">
          <Badge variant="secondary">
            Quyền truy cập: {session.user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin Tour"}
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách tour ({tours.length})</CardTitle>
          <CardDescription>
            Quản lý tất cả các tour du lịch trong hệ thống
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên tour</TableHead>
                <TableHead>Địa điểm</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Số người</TableHead>
                <TableHead>Ngày tạo</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tours.map((tour) => (
                <TableRow key={tour.id}>
                  <TableCell className="font-medium">
                    <div className="max-w-48 truncate">{tour.name}</div>
                  </TableCell>
                  <TableCell>{tour.location}</TableCell>
                  <TableCell>{tour.price.toLocaleString()} VNĐ</TableCell>
                  <TableCell>{tour.duration}</TableCell>
                  <TableCell>{tour.maxPeople} người</TableCell>
                  <TableCell>{tour.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(tour)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(tour.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {tours.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Chưa có tour nào. Hãy thêm tour đầu tiên!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
