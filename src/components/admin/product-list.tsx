
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit2, Trash2, Package, Star, Image as ImageIcon, DollarSign } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  originalPrice: number | null;
  image: string | null;
  category: string;
  stock: number;
  discount: string | null;
  rating: number;
  sold: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const categories = [
  "Đặc sản",
  "Lưu niệm", 
  "Thời trang",
  "Khác"
];

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      console.log('Fetched products:', data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error("Có lỗi xảy ra khi tải sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (formData: any) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thêm sản phẩm thành công!");
        await fetchProducts();
        setIsCreateOpen(false);
      } else {
        const error = await response.json();
        toast.error(error.error || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Có lỗi xảy ra khi thêm sản phẩm");
    }
  };

  const handleUpdate = async (formData: any) => {
    if (!selectedProduct) return;

    try {
      const response = await fetch(`/api/products/${selectedProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Cập nhật sản phẩm thành công!");
        await fetchProducts();
        setIsEditOpen(false);
        setSelectedProduct(null);
      } else {
        const error = await response.json();
        toast.error(error.error || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Có lỗi xảy ra khi cập nhật sản phẩm");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Xóa sản phẩm thành công!");
        await fetchProducts();
      } else {
        const error = await response.json();
        toast.error(error.error || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Có lỗi xảy ra khi xóa sản phẩm");
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <div className="text-lg font-medium text-gray-700">Đang tải sản phẩm...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Danh sách Sản phẩm</h2>
          <p className="text-muted-foreground">Thống kê: {products.length} sản phẩm</p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Thêm Sản phẩm
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Thêm Sản phẩm Mới</DialogTitle>
              <DialogDescription>
                Điền thông tin để tạo sản phẩm mới
              </DialogDescription>
            </DialogHeader>
            <ProductForm onSubmit={handleCreate} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-4">
        <Input
          placeholder="Tìm kiếm sản phẩm..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {products.length === 0 ? "Chưa có sản phẩm nào" : "Không tìm thấy sản phẩm"}
          </h3>
          <p className="text-gray-500 mb-4">
            {products.length === 0 ? "Hãy thêm sản phẩm đầu tiên của bạn" : "Thử thay đổi từ khóa tìm kiếm"}
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="text-sm mt-1 line-clamp-2">
                      {product.description || "Không có mô tả"}
                    </CardDescription>
                  </div>
                  <Badge variant={product.isActive ? "default" : "secondary"} className="ml-2">
                    {product.isActive ? "Hoạt động" : "Tạm dừng"}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {product.image && (
                  <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.jpg";
                      }}
                    />
                  </div>
                )}

                <div className="flex items-center text-sm text-muted-foreground">
                  <Package className="h-4 w-4 mr-1" />
                  {product.category}
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {product.rating} ({product.sold} đã bán)
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-semibold text-green-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <Badge variant="outline">
                    Kho: {product.stock}
                  </Badge>
                </div>

                <div className="flex gap-2 justify-end pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsEditOpen(true);
                    }}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa Sản phẩm</DialogTitle>
            <DialogDescription>
              Cập nhật thông tin sản phẩm
            </DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <ProductForm 
              product={selectedProduct} 
              onSubmit={handleUpdate} 
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProductForm({ product, onSubmit }: { product?: Product; onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    originalPrice: product?.originalPrice || "",
    category: product?.category || "",
    stock: product?.stock || "",
    image: product?.image || "",
    discount: product?.discount || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.category) {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    setIsSubmitting(true);

    const submitData = {
      name: formData.name,
      description: formData.description || null,
      price: parseFloat(formData.price.toString()),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice.toString()) : null,
      category: formData.category,
      stock: parseInt(formData.stock.toString()) || 0,
      image: formData.image || "/placeholder.jpg",
      discount: formData.discount || null,
    };

    await onSubmit(submitData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Tên sản phẩm *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Nhập tên sản phẩm"
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Mô tả</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Nhập mô tả sản phẩm"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price">Giá bán (VNĐ) *</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="0"
            required
          />
        </div>

        <div>
          <Label htmlFor="originalPrice">Giá gốc (VNĐ)</Label>
          <Input
            id="originalPrice"
            type="number"
            value={formData.originalPrice}
            onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
            placeholder="0"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category">Danh mục *</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Chọn danh mục" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="stock">Số lượng tồn kho *</Label>
          <Input
            id="stock"
            type="number"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            placeholder="0"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="image">URL Hình ảnh</Label>
        <Input
          id="image"
          type="url"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <Label htmlFor="discount">Nhãn giảm giá</Label>
        <Input
          id="discount"
          value={formData.discount}
          onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
          placeholder="VD: HOT, SALE, NEW"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Đang lưu...
          </>
        ) : (
          product ? "Cập nhật sản phẩm" : "Tạo sản phẩm"
        )}
      </Button>
    </form>
  );
}
