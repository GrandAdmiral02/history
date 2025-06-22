"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Plus, Edit, Trash2, Eye, ChevronLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  stock: number;
  status: "available" | "out_of_stock" | "discontinued";
  image: string;
  sales: number;
  created: string;
}

// Mock data - trong thực tế sẽ fetch từ API
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Áo thun Nghệ An Historical",
    price: 350000,
    originalPrice: 450000,
    category: "Thời trang",
    stock: 25,
    status: "available",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
    sales: 145,
    created: "2024-01-15",
  },
  {
    id: "2",
    name: "Nón lá truyền thống",
    price: 120000,
    category: "Phụ kiện",
    stock: 50,
    status: "available",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200",
    sales: 89,
    created: "2024-02-10",
  },
  {
    id: "3",
    name: "Túi vải bố Nghệ An",
    price: 180000,
    originalPrice: 220000,
    category: "Phụ kiện",
    stock: 0,
    status: "out_of_stock",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200",
    sales: 67,
    created: "2024-01-20",
  },
  {
    id: "4",
    name: "Móc khóa Kim Liên",
    price: 45000,
    category: "Lưu niệm",
    stock: 100,
    status: "available",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200",
    sales: 234,
    created: "2024-03-05",
  },
  {
    id: "5",
    name: "Tranh thêu Nghệ An",
    price: 850000,
    category: "Nghệ thuật",
    stock: 8,
    status: "available",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200",
    sales: 23,
    created: "2024-02-28",
  },
  {
    id: "6",
    name: "Bánh đậu xanh Nghệ An",
    price: 95000,
    category: "Đặc sản",
    stock: 15,
    status: "discontinued",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=200",
    sales: 78,
    created: "2024-01-10",
  },
];

export default function ProductsManagement() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState<Product[]>(mockProducts);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (
    !session ||
    (session.user?.role !== "ADMIN" && session.user?.role !== "SUPER_ADMIN")
  ) {
    redirect("/login");
  }

  const handleDeleteProduct = (productId: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      setProducts(products.filter((product) => product.id !== productId));
      console.log("Deleted product:", productId);
    }
  };

  const toggleProductStatus = (productId: string) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              status:
                product.status === "available" ? "discontinued" : "available",
            }
          : product,
      ),
    );
  };

  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-600">Có sẵn</Badge>;
      case "out_of_stock":
        return <Badge variant="secondary">Hết hàng</Badge>;
      case "discontinued":
        return <Badge variant="destructive">Ngừng bán</Badge>;
      default:
        return <Badge variant="outline">Không xác định</Badge>;
    }
  };

  const totalProducts = products.length;
  const availableProducts = products.filter(
    (p) => p.status === "available",
  ).length;
  const totalSales = products.reduce((acc, product) => acc + product.sales, 0);
  const totalRevenue = products.reduce(
    (acc, product) => acc + product.price * product.sales,
    0,
  );

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Quản lý Sản phẩm</h1>
            <p className="text-muted-foreground">
              Thêm, sửa, xóa và quản lý sản phẩm trong cửa hàng
            </p>
          </div>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Thêm sản phẩm mới
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tổng sản phẩm</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProducts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Có sẵn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {availableProducts}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tổng đã bán</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSales}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₫{Math.round((totalRevenue / 1000000) * 10) / 10}M
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách Sản phẩm</CardTitle>
          <CardDescription>
            Quản lý tất cả sản phẩm trong cửa hàng
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hình ảnh</TableHead>
                <TableHead>Tên sản phẩm</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Kho</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Đã bán</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ID: {product.id}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">
                        {product.price.toLocaleString()} VNĐ
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          {product.originalPrice.toLocaleString()} VNĐ
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`font-medium ${product.stock <= 10 ? "text-red-600" : ""}`}
                    >
                      {product.stock}
                    </span>
                  </TableCell>
                  <TableCell>{getStatusBadge(product.status)}</TableCell>
                  <TableCell>
                    <span className="font-medium">{product.sales}</span> đã bán
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/shop?product=${product.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/admin/products/${product.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleProductStatus(product.id)}
                      >
                        {product.status === "available"
                          ? "Ngừng bán"
                          : "Kích hoạt"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
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
        </CardContent>
      </Card>
    </div>
  );
}
