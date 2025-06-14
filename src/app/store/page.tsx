"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

// Định nghĩa interface cho sản phẩm
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "souvenir" | "specialty";
}

// Định nghĩa interface cho hóa đơn
interface Invoice {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  amount: number;
  date: string;
}

// Dữ liệu sản phẩm mẫu
const initialProducts: Product[] = [
  {
    id: "1",
    name: "Sách Lịch Sử Nghệ An",
    description: "Cuốn sách kể về lịch sử và văn hóa xứ Nghệ.",
    price: 150000,
    image: "/store/images/book-nghe-an.jpg",
    category: "specialty",
  },
  {
    id: "2",
    name: "Mô hình Thành cổ Vinh",
    description: "Mô hình thu nhỏ của Thành cổ Vinh, làm thủ công.",
    price: 300000,
    image: "/store/images/thanh-co-vinh-model.jpg",
    category: "souvenir",
  },
  {
    id: "3",
    name: "Tour Khám Phá Truông Bồn",
    description: "Hành trình khám phá di tích lịch sử Truông Bồn.",
    price: 1200000,
    image: "/store/images/tour-truong-bon.jpg",
    category: "specialty",
  },
  {
    id: "4",
    name: "Áo thêu Văn hóa Nghệ An",
    description: "Áo phông với họa tiết truyền thống độc đáo.",
    price: 200000,
    image: "/store/images/tshirt-nghean.jpg",
    category: "souvenir",
  },
];

export default function StorePage() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "souvenir" as "souvenir" | "specialty",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  // Kiểm tra quyền admin
  const isAdmin = session?.user?.role === "admin";

  // Xử lý thêm sản phẩm
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = (products.length + 1).toString();
    setProducts([
      ...products,
      { id: newId, ...newProduct, price: Number(newProduct.price) },
    ]);
    setNewProduct({ name: "", description: "", price: 0, image: "", category: "souvenir" });
    setShowAddForm(false);
  };

  // Xử lý thanh toán
  const handleCheckout = (product: Product) => {
    if (!session?.user) {
      alert("Vui lòng đăng nhập để thanh toán!");
      return;
    }
    const newInvoice: Invoice = {
      id: (invoices.length + 1).toString(),
      userId: session.user.id || "",
      productId: product.id,
      productName: product.name,
      amount: product.price,
      date: new Date().toLocaleDateString("vi-VN"),
    };
    setInvoices([...invoices, newInvoice]);
    alert(`Thanh toán thành công cho ${product.name}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-teal-900 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">
            Cửa Hàng Nghệ An Historical
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Khám phá các sản phẩm độc đáo về lịch sử và văn hóa Nghệ An
          </p>
        </div>

        {/* Admin: Nút thêm sản phẩm */}
        {isAdmin && (
          <div className="mb-8 flex justify-end">
            <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-teal-500 to-amber-500 text-white hover:from-teal-600 hover:to-amber-600 transition-all duration-300">
                  Thêm Sản Phẩm
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white/95 backdrop-blur-lg">
                <DialogHeader>
                  <DialogTitle>Thêm Sản Phẩm Mới</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Tên Sản Phẩm</Label>
                    <Input
                      id="name"
                      value={newProduct.name}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                      }
                      required
                      className="border-teal-200 focus:ring-amber-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Mô Tả</Label>
                    <Input
                      id="description"
                      value={newProduct.description}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, description: e.target.value })
                      }
                      required
                      className="border-teal-200 focus:ring-amber-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Giá (VND)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, price: Number(e.target.value) })
                      }
                      required
                      className="border-teal-200 focus:ring-amber-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">URL Hình Ảnh</Label>
                    <Input
                      id="image"
                      value={newProduct.image}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, image: e.target.value })
                      }
                      required
                      className="border-teal-200 focus:ring-amber-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Danh Mục</Label>
                    <select
                      id="category"
                      value={newProduct.category}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          category: e.target.value as "souvenir" | "specialty",
                        })
                      }
                      className="w-full rounded-md border border-teal-200 p-2 focus:ring-amber-300"
                    >
                      <option value="souvenir">Đồ Lưu Niệm</option>
                      <option value="specialty">Sản Phẩm Đặc Trưng</option>
                    </select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600 text-white"
                  >
                    Thêm Sản Phẩm
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* Tabs cho sản phẩm */}
        <Tabs defaultValue="souvenir" className="mb-12">
          <TabsList className="grid w-full max-w-[400px] mx-auto grid-cols-2 bg-teal-100/50">
            <TabsTrigger
              value="souvenir"
              className="text-teal-900 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-amber-500 data-[state=active]:text-white"
            >
              Đồ Lưu Niệm
            </TabsTrigger>
            <TabsTrigger
              value="specialty"
              className="text-teal-900 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-amber-500 data-[state=active]:text-white"
            >
              Sản Phẩm Đặc Trưng
            </TabsTrigger>
          </TabsList>
          <TabsContent value="souvenir">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .filter((product) => product.category === "souvenir")
                .map((product) => (
                  <Card
                    key={product.id}
                    className="bg-white/95 backdrop-blur-lg border border-teal-200/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <CardHeader>
                      <div className="relative w-full h-48">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-t-md"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg font-semibold text-teal-900">
                        {product.name}
                      </CardTitle>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="mt-2 text-base font-bold text-amber-600">
                        {product.price.toLocaleString("vi-VN")} VND
                      </p>
                    </CardContent>
                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                        <Link href={`/store/product/${product.id}`}>
                          <Button
                            variant="outline"
                            className="border-teal-500 text-teal-500 hover:bg-teal-100"
                          >
                            Xem Chi Tiết
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleCheckout(product)}
                          className="bg-gradient-to-r from-teal-500 to-amber-500 text-white hover:from-teal-600 hover:to-amber-600 transition-all duration-300"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Mua Ngay
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="specialty">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .filter((product) => product.category === "specialty")
                .map((product) => (
                  <Card
                    key={product.id}
                    className="bg-white/95 backdrop-blur-lg border border-teal-200/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <CardHeader>
                      <div className="relative w-full h-48">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-t-md"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg font-semibold text-teal-900">
                        {product.name}
                      </CardTitle>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="mt-2 text-base font-bold text-amber-600">
                        {product.price.toLocaleString("vi-VN")} VND
                      </p>
                    </CardContent>
                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                        <Link href={`/store/product/${product.id}`}>
                          <Button
                            variant="outline"
                            className="border-teal-500 text-teal-500 hover:bg-teal-100"
                          >
                            Xem Chi Tiết
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleCheckout(product)}
                          className="bg-gradient-to-r from-teal-500 to-amber-500 text-white hover:from-teal-600 hover:to-amber-600 transition-all duration-300"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Mua Ngay
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Lịch sử hóa đơn */}
        {session?.user && invoices.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-teal-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-amber-600 mb-6">
              Lịch Sử Hóa Đơn
            </h2>
            <div className="grid gap-4">
              {invoices
                .filter((item) => item.userId === session.user.id)
                .map((invoice) => (
                  <Card
                    key={invoice.id}
                    className="bg-white/95 backdrop-blur-lg border border-teal-200/50"
                  >
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Sản Phẩm</p>
                          <p className="font-medium text-teal-900">{invoice.productName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Số Tiền</p>
                          <p className="font-medium text-amber-600">
                            {invoice.amount.toLocaleString("vi-VN")} VND
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Ngày</p>
                          <p className="font-medium text-teal-900">{invoice.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}