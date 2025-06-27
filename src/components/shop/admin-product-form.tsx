
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Upload, Image as ImageIcon, DollarSign, Package, Tag, Star, Info } from "lucide-react";

interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  category: string;
  stock: number;
  discount?: string;
}

interface AdminProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  onSave: () => void;
}

const categories = [
  { value: "Đặc sản", label: "Đặc sản", description: "Món ăn đặc trưng của vùng" },
  { value: "Lưu niệm", label: "Lưu niệm", description: "Vật phẩm kỷ niệm" },
  { value: "Thời trang", label: "Thời trang", description: "Quần áo, phụ kiện" },
  { value: "Khác", label: "Khác", description: "Sản phẩm khác" }
];

export function AdminProductForm({ isOpen, onClose, product, onSave }: AdminProductFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    image: "",
    category: "",
    stock: "",
    discount: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Reset form data khi product thay đổi hoặc dialog mở/đóng
  useEffect(() => {
    if (isOpen) {
      if (product) {
        const newFormData = {
          name: product.name || "",
          description: product.description || "",
          price: product.price ? product.price.toString() : "",
          originalPrice: product.originalPrice ? product.originalPrice.toString() : "",
          image: product.image || "",
          category: product.category || "",
          stock: product.stock ? product.stock.toString() : "",
          discount: product.discount || "",
        };
        setFormData(newFormData);
        setPreviewImage(product.image || null);
      } else {
        const emptyFormData = {
          name: "",
          description: "",
          price: "",
          originalPrice: "",
          image: "",
          category: "",
          stock: "",
          discount: "",
        };
        setFormData(emptyFormData);
        setPreviewImage(null);
      }
      setErrors({});
    }
  }, [product, isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Tên sản phẩm là bắt buộc";
    } else if (formData.name.length < 3) {
      newErrors.name = "Tên sản phẩm phải có ít nhất 3 ký tự";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Mô tả sản phẩm là bắt buộc";
    } else if (formData.description.length < 10) {
      newErrors.description = "Mô tả phải có ít nhất 10 ký tự";
    }
    
    const price = formData.price ? parseFloat(formData.price) : 0;
    if (!formData.price || isNaN(price) || price <= 0) {
      newErrors.price = "Giá bán phải là số dương";
    } else if (price < 1000) {
      newErrors.price = "Giá bán phải ít nhất 1,000 VNĐ";
    }
    
    if (!formData.category) {
      newErrors.category = "Vui lòng chọn danh mục";
    }
    
    const stock = formData.stock ? parseInt(formData.stock) : 0;
    if (!formData.stock || isNaN(stock) || stock < 0) {
      newErrors.stock = "Số lượng tồn kho phải là số không âm";
    }
    
    const originalPrice = formData.originalPrice ? parseFloat(formData.originalPrice) : null;
    if (formData.originalPrice && (isNaN(originalPrice!) || originalPrice! <= 0)) {
      newErrors.originalPrice = "Giá gốc phải là số dương";
    }

    if (originalPrice && originalPrice <= price) {
      newErrors.originalPrice = "Giá gốc phải lớn hơn giá bán";
    }

    if (formData.image && !isValidUrl(formData.image)) {
      newErrors.image = "URL hình ảnh không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleImageChange = (url: string) => {
    setFormData({ ...formData, image: url });
    if (url && isValidUrl(url)) {
      setPreviewImage(url);
    } else {
      setPreviewImage(null);
    }
  };

  const calculateDiscount = () => {
    const price = parseFloat(formData.price) || 0;
    const originalPrice = parseFloat(formData.originalPrice) || 0;
    if (price > 0 && originalPrice > price) {
      return Math.round(((originalPrice - price) / originalPrice) * 100);
    }
    return 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Vui lòng kiểm tra lại thông tin đã nhập");
      return;
    }

    setIsLoading(true);

    try {
      const isEditing = !!product?.id;
      const url = isEditing ? `/api/products/${product.id}` : "/api/products";
      const method = isEditing ? "PUT" : "POST";

      const price = parseFloat(formData.price);
      const originalPrice = formData.originalPrice ? parseFloat(formData.originalPrice) : null;
      const stock = parseInt(formData.stock);

      const requestBody = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: price,
        originalPrice: originalPrice,
        category: formData.category,
        image: formData.image.trim() || "/placeholder.jpg",
        stock: stock,
        discount: formData.discount.trim() || null,
      };

      if (isEditing && product?.id) {
        (requestBody as any).id = product.id;
      }

      console.log("Sending request:", { method, url, body: requestBody });

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();
      console.log("Response:", { status: response.status, data: result });

      if (!response.ok) {
        throw new Error(result.error || `Không thể ${isEditing ? 'cập nhật' : 'thêm'} sản phẩm`);
      }

      await onSave();
      toast.success(`${isEditing ? 'Cập nhật' : 'Thêm'} sản phẩm thành công!`);
      onClose();
      
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error(error instanceof Error ? error.message : `Đã có lỗi xảy ra khi ${product?.id ? 'cập nhật' : 'thêm'} sản phẩm`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      originalPrice: "",
      image: "",
      category: "",
      stock: "",
      discount: "",
    });
    setErrors({});
    setPreviewImage(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Package className="h-5 w-5" />
            {product ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}
          </DialogTitle>
          <DialogDescription>
            {product ? "Cập nhật thông tin sản phẩm" : "Điền thông tin sản phẩm mới vào form bên dưới"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Info className="h-4 w-4" />
                Thông tin cơ bản
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">
                  Tên sản phẩm *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nhập tên sản phẩm"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium">
                  Mô tả sản phẩm *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Nhập mô tả chi tiết về sản phẩm"
                  rows={4}
                  className={errors.description ? "border-red-500" : ""}
                />
                {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  {formData.description.length}/500 ký tự
                </p>
              </div>

              <div>
                <Label htmlFor="category" className="text-sm font-medium">
                  Danh mục *
                </Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                    <SelectValue placeholder="Chọn danh mục sản phẩm" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        <div>
                          <div className="font-medium">{category.label}</div>
                          <div className="text-sm text-gray-500">{category.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category}</p>}
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <DollarSign className="h-4 w-4" />
                Thông tin giá
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price" className="text-sm font-medium">
                    Giá bán (VNĐ) *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="1000"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0"
                    className={errors.price ? "border-red-500" : ""}
                  />
                  {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price}</p>}
                </div>

                <div>
                  <Label htmlFor="originalPrice" className="text-sm font-medium">
                    Giá gốc (VNĐ)
                  </Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    min="0"
                    step="1000"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    placeholder="0"
                    className={errors.originalPrice ? "border-red-500" : ""}
                  />
                  {errors.originalPrice && <p className="text-sm text-red-500 mt-1">{errors.originalPrice}</p>}
                </div>
              </div>

              {calculateDiscount() > 0 && (
                <div className="flex items-center gap-2">
                  <Badge variant="destructive" className="text-sm">
                    Giảm {calculateDiscount()}%
                  </Badge>
                  <span className="text-sm text-gray-500">
                    Tiết kiệm {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format((parseFloat(formData.originalPrice) || 0) - (parseFloat(formData.price) || 0))}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Inventory & Media */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Package className="h-4 w-4" />
                Kho hàng & Hình ảnh
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="stock" className="text-sm font-medium">
                    Số lượng tồn kho *
                  </Label>
                  <Input
                    id="stock"
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    placeholder="0"
                    className={errors.stock ? "border-red-500" : ""}
                  />
                  {errors.stock && <p className="text-sm text-red-500 mt-1">{errors.stock}</p>}
                </div>

                <div>
                  <Label htmlFor="discount" className="text-sm font-medium">
                    Nhãn giảm giá
                  </Label>
                  <Input
                    id="discount"
                    value={formData.discount}
                    onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                    placeholder="VD: HOT, SALE, NEW"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Nhãn hiển thị trên sản phẩm (tùy chọn)
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <Label htmlFor="image" className="text-sm font-medium">
                  URL hình ảnh
                </Label>
                <Input
                  id="image"
                  type="url"
                  value={formData.image}
                  onChange={(e) => handleImageChange(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className={errors.image ? "border-red-500" : ""}
                />
                {errors.image && <p className="text-sm text-red-500 mt-1">{errors.image}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  Nhập URL hình ảnh hoặc để trống để sử dụng hình mặc định
                </p>
              </div>

              {/* Image Preview */}
              {previewImage && (
                <div className="mt-4">
                  <Label className="text-sm font-medium">Xem trước hình ảnh</Label>
                  <div className="mt-2 relative w-32 h-32 border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={() => setPreviewImage(null)}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <DialogFooter className="gap-2 pt-6">
            <Button type="button" variant="outline" onClick={handleClose} disabled={isLoading}>
              Hủy
            </Button>
            <Button type="submit" disabled={isLoading} className="bg-green-600 hover:bg-green-700">
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Đang lưu...
                </>
              ) : (
                product ? "Cập nhật sản phẩm" : "Thêm sản phẩm"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
