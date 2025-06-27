
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
import { toast } from "sonner";

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
  "Đặc sản",
  "Lưu niệm",
  "Thời trang",
  "Khác"
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

  // Reset form data khi product thay đổi hoặc dialog mở/đóng
  useEffect(() => {
    if (isOpen) {
      if (product) {
        setFormData({
          name: product.name || "",
          description: product.description || "",
          price: product.price?.toString() || "",
          originalPrice: product.originalPrice?.toString() || "",
          image: product.image || "",
          category: product.category || "",
          stock: product.stock?.toString() || "",
          discount: product.discount || "",
        });
      } else {
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
      }
    }
  }, [product, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const errors: string[] = [];
    
    if (!formData.name.trim()) {
      errors.push("Vui lòng nhập tên sản phẩm");
    }
    
    if (!formData.description.trim()) {
      errors.push("Vui lòng nhập mô tả sản phẩm");
    }
    
    const price = parseFloat(formData.price);
    if (!formData.price || isNaN(price) || price <= 0) {
      errors.push("Vui lòng nhập giá bán hợp lệ");
    }
    
    if (!formData.category) {
      errors.push("Vui lòng chọn danh mục");
    }
    
    const stock = parseInt(formData.stock);
    if (!formData.stock || isNaN(stock) || stock < 0) {
      errors.push("Vui lòng nhập số lượng tồn kho hợp lệ");
    }
    
    const originalPrice = formData.originalPrice ? parseFloat(formData.originalPrice) : null;
    if (formData.originalPrice && (isNaN(originalPrice!) || originalPrice! <= 0)) {
      errors.push("Giá gốc phải là số dương");
    }

    if (errors.length > 0) {
      toast.error(errors[0]);
      return;
    }

    setIsLoading(true);

    try {
      const isEditing = !!product?.id;
      const url = isEditing ? `/api/products/${product.id}` : "/api/products";
      const method = isEditing ? "PUT" : "POST";

      const requestBody = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price),
        originalPrice: originalPrice,
        category: formData.category,
        image: formData.image.trim() || "/placeholder.jpg",
        stock: parseInt(formData.stock),
        discount: formData.discount.trim() || null,
      };

      // Nếu đang sửa, thêm ID vào body
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

      // Gọi onSave để refresh danh sách
      await onSave();
      
      toast.success(`${isEditing ? 'Cập nhật' : 'Thêm'} sản phẩm thành công!`);

      // Đóng dialog
      onClose();
      
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error(error instanceof Error ? error.message : `Đã có lỗi xảy ra khi ${product?.id ? 'cập nhật' : 'thêm'} sản phẩm`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset form khi đóng
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
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {product ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}
          </DialogTitle>
          <DialogDescription>
            {product ? "Cập nhật thông tin sản phẩm" : "Điền thông tin sản phẩm mới"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Tên sản phẩm *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nhập tên sản phẩm"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Mô tả *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Nhập mô tả sản phẩm"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Giá bán (VNĐ) *</Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="1000"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="0"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="originalPrice">Giá gốc (VNĐ)</Label>
              <Input
                id="originalPrice"
                type="number"
                min="0"
                step="1000"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                placeholder="0"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category">Danh mục *</Label>
            <Select 
              value={formData.category} 
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn danh mục" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="stock">Số lượng tồn kho *</Label>
              <Input
                id="stock"
                type="number"
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                placeholder="0"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="discount">Giảm giá</Label>
              <Input
                id="discount"
                value={formData.discount}
                onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                placeholder="VD: -50%"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">URL hình ảnh</Label>
            <Input
              id="image"
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <DialogFooter className="gap-2">
            <Button type="button" variant="outline" onClick={handleClose} disabled={isLoading}>
              Hủy
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Đang lưu..." : product ? "Cập nhật" : "Thêm mới"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
