
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Package } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  stock: number;
  discount?: string;
  rating?: number;
  sold?: number;
  createdAt: string;
}

const categories = [
  "Đặc sản",
  "Lưu niệm", 
  "Thời trang",
  "Sách",
  "Khác"
];

export default function ProductsAdminPage() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    image: "",
    category: "",
    stock: "",
    discount: "",
    rating: "",
    sold: ""
  });

  // Kiểm tra phân quyền
  if (status === "loading") return <div>Đang tải...</div>;
  
  if (!session || !session.user || 
      !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Giả lập dữ liệu sản phẩm
      const mockProducts: Product[] = [
        {
          id: "1",
          name: "Kẹo Cu Đơ Nghệ An",
          description: "Đặc sản nổi tiếng xứ Nghệ, hương vị truyền thống được chế biến từ nguyên liệu tự nhiên",
          price: 150000,
          originalPrice: 180000,
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
          category: "Đặc sản",
          stock: 50,
          discount: "17%",
          rating: 4.8,
          sold: 245,
          createdAt: "2024-01-15"
        },
        {
          id: "2",
          name: "Bánh Mướt Nghệ An",
          description: "Bánh truyền thống làm từ bột gạo, nhân đậu xanh thơm ngon",
          price: 120000,
          image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop",
          category: "Đặc sản",
          stock: 30,
          rating: 4.6,
          sold: 156,
          createdAt: "2024-01-10"
        }
      ];
      setProducts(mockProducts);
      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi tải danh sách sản phẩm:", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      price: parseInt(formData.price),
      originalPrice: formData.originalPrice ? parseInt(formData.originalPrice) : undefined,
      stock: parseInt(formData.stock),
      rating: formData.rating ? parseFloat(formData.rating) : undefined,
      sold: formData.sold ? parseInt(formData.sold) : undefined,
    };

    try {
      if (editingProduct) {
        // Cập nhật sản phẩm
        const updatedProducts = products.map(product => 
          product.id === editingProduct.id 
            ? { ...product, ...productData }
            : product
        );
        setProducts(updatedProducts);
        alert("Cập nhật sản phẩm thành công!");
      } else {
        // Thêm sản phẩm mới
        const newProduct: Product = {
          id: Date.now().toString(),
          ...productData,
          createdAt: new Date().toISOString().split('T')[0]
        };
        setProducts([...products, newProduct]);
        alert("Thêm sản phẩm mới thành công!");
      }
      
      resetForm();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Lỗi khi lưu sản phẩm:", error);
      alert("Có lỗi xảy ra khi lưu sản phẩm!");
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || "",
      image: product.image,
      category: product.category,
      stock: product.stock.toString(),
      discount: product.discount || "",
      rating: product.rating?.toString() || "",
      sold: product.sold?.toString() || ""
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      try {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        alert("Xóa sản phẩm thành công!");
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
        alert("Có lỗi xảy ra khi xóa sản phẩm!");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      originalPrice: "",
      image: "",
      category: "",
      stock: "",
      discount: "",
      rating: "",
      sold: ""
    });
    setEditingProduct(null);
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
            <h1 className="text-3xl font-bold">Quản lý sản phẩm</h1>
            <p className="text-muted-foreground mt-2">
              Thêm, sửa, xóa sản phẩm trong cửa hàng
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="h-4 w-4 mr-2" />
                Thêm sản phẩm mới
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingProduct ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
                </DialogTitle>
                <DialogDescription>
                  {editingProduct ? "Cập nhật thông tin sản phẩm" : "Nhập thông tin sản phẩm mới"}
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Tên sản phẩm</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Nhập tên sản phẩm"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Danh mục</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => setFormData({...formData, category: value})}
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
                </div>
                
                <div>
                  <Label htmlFor="description">Mô tả</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Nhập mô tả sản phẩm"
                    rows={3}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Giá bán (VNĐ)</Label>
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
                    <Label htmlFor="originalPrice">Giá gốc (VNĐ)</Label>
                    <Input
                      id="originalPrice"
                      type="number"
                      value={formData.originalPrice}
                      onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="stock">Số lượng tồn kho</Label>
                    <Input
                      id="stock"
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="discount">Giảm giá (%)</Label>
                    <Input
                      id="discount"
                      value={formData.discount}
                      onChange={(e) => setFormData({...formData, discount: e.target.value})}
                      placeholder="VD: 10%"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rating">Đánh giá (1-5)</Label>
                    <Input
                      id="rating"
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={(e) => setFormData({...formData, rating: e.target.value})}
                      placeholder="4.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sold">Đã bán</Label>
                    <Input
                      id="sold"
                      type="number"
                      value={formData.sold}
                      onChange={(e) => setFormData({...formData, sold: e.target.value})}
                      placeholder="0"
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
                    {editingProduct ? "Cập nhật" : "Thêm mới"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="mt-4">
          <Badge variant="secondary">
            Quyền truy cập: {session.user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin Shop"}
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Danh sách sản phẩm ({products.length})
            </div>
          </CardTitle>
          <CardDescription>
            Quản lý tất cả các sản phẩm trong cửa hàng
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên sản phẩm</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Tồn kho</TableHead>
                <TableHead>Đã bán</TableHead>
                <TableHead>Đánh giá</TableHead>
                <TableHead>Ngày tạo</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    <div className="max-w-48 truncate">{product.name}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{product.price.toLocaleString()} VNĐ</span>
                      {product.originalPrice && product.discount && (
                        <span className="text-xs text-muted-foreground line-through">
                          {product.originalPrice.toLocaleString()} VNĐ
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={product.stock > 10 ? "default" : "destructive"}>
                      {product.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.sold || 0}</TableCell>
                  <TableCell>
                    {product.rating ? (
                      <div className="flex items-center gap-1">
                        <span>⭐</span>
                        <span>{product.rating}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Chưa có</span>
                    )}
                  </TableCell>
                  <TableCell>{product.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(product)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(product.id)}
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
          
          {products.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Chưa có sản phẩm nào. Hãy thêm sản phẩm đầu tiên!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
