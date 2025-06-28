"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit2, Trash2, Package, Star } from "lucide-react";

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
}

const categories = [
  "Đặc sản",
  "Lưu niệm", 
  "Thời trang",
  "Sách",
  "Khác"
];

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

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
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (formData: FormData) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await fetchProducts();
        setIsCreateOpen(false);
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdate = async (formData: FormData) => {
    if (!selectedProduct) return;

    try {
      const response = await fetch(`/api/products/${selectedProduct.id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        await fetchProducts();
        setIsEditOpen(false);
        setSelectedProduct(null);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchProducts();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Danh sách Sản phẩm</h2>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button>
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {product.description?.substring(0, 80)}...
                  </CardDescription>
                </div>
                <Badge variant={product.isActive ? "default" : "secondary"}>
                  {product.isActive ? "Hoạt động" : "Tạm dừng"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
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
                    {product.price.toLocaleString('vi-VN')}đ
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice.toLocaleString('vi-VN')}đ
                    </span>
                  )}
                </div>
                <Badge variant="outline">
                  Kho: {product.stock}
                </Badge>
              </div>

              <div className="flex gap-2 justify-end">
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

function ProductForm({ product, onSubmit }: { product?: Product; onSubmit: (data: FormData) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Tên sản phẩm</Label>
        <Input
          id="name"
          name="name"
          defaultValue={product?.name}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Mô tả</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={product?.description || ""}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price">Giá bán (VNĐ)</Label>
          <Input
            id="price"
            name="price"
            type="number"
            defaultValue={product?.price}
            required
          />
        </div>

        <div>
          <Label htmlFor="originalPrice">Giá gốc (VNĐ)</Label>
          <Input
            id="originalPrice"
            name="originalPrice"
            type="number"
            defaultValue={product?.originalPrice || ""}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category">Danh mục</Label>
          <Select name="category" defaultValue={product?.category}>
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
          <Label htmlFor="stock">Số lượng tồn kho</Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            defaultValue={product?.stock}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="rating">Đánh giá</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            step="0.1"
            min="0"
            max="5"
            defaultValue={product?.rating}
          />
        </div>

        <div>
          <Label htmlFor="sold">Đã bán</Label>
          <Input
            id="sold"
            name="sold"
            type="number"
            defaultValue={product?.sold}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="image">URL Hình ảnh</Label>
        <Input
          id="image"
          name="image"
          type="url"
          defaultValue={product?.image || ""}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <Label htmlFor="discount">Giảm giá (%)</Label>
        <Input
          id="discount"
          name="discount"
          defaultValue={product?.discount || ""}
          placeholder="VD: 20%"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isActive"
          name="isActive"
          defaultChecked={product?.isActive ?? true}
          className="h-4 w-4"
        />
        <Label htmlFor="isActive">Sản phẩm đang hoạt động</Label>
      </div>

      <Button type="submit" className="w-full">
        {product ? "Cập nhật" : "Tạo sản phẩm"}
      </Button>
    </form>
  );
}