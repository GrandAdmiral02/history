"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Giả lập dữ liệu sản phẩm
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Giả lập dữ liệu hóa đơn
interface Invoice {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  amount: number;
  date: string;
}

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Sách Lịch Sử Nghệ An",
    description: "Cuốn sách kể về lịch sử và văn hóa xứ Nghệ.",
    price: 150000,
    image: "/images/book-nghe-an.jpg",
  },
  {
    id: "2",
    name: "Mô hình Thành cổ Vinh",
    description: "Mô hình thu nhỏ của Thành cổ Vinh, làm thủ công.",
    price: 300000,
    image: "/images/thanh-co-vinh-model.jpg",
  },
];

// Trang Cửa Hàng
export default function StorePage() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  // Giả lập kiểm tra quyền admin (có thể mở rộng sau)
 const isAdmin = session?.user?.role === "admin"; // Giả định role được lưu trong session

  // Xử lý thêm sản phẩm
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = (products.length + 1).toString();
    setProducts([
      ...products,
      { id: newId, ...newProduct, price: Number(newProduct.price) },
    ]);
    setNewProduct({ name: "", description: "", price: 0, image: "" });
    setShowAddForm(false);
  };

  // Xử lý thanh toán (giả lập)
  const handleCheckout = (product: Product) => {
    if (!session?.user) {
      alert("Vui lòng đăng nhập để thanh toán!");
      return;
    }
    const newInvoice: Invoice = {
      id: (invoices.length + 1).toString(),
      userId: session.user.id,
      productId: product.id,
      productName: product.name,
      amount: product.price,
      date: new Date().toLocaleDateString("vi-VN"),
    };
    setInvoices([...invoices, newInvoice]);
    alert(`Thanh toán thành công cho ${product.name}!`);
  };

  return (
    <div className="container py-6 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
        Cửa Hàng
      </h1>

      {/* Form thêm sản phẩm (chỉ hiển thị cho admin) */}
      {isAdmin && (
        <div className="mb-8">
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-teal-500 hover:bg-teal-600 text-white"
          >
            {showAddForm ? "Ẩn Form" : "Thêm Sản Phẩm"}
          </Button>
          {showAddForm && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Thêm Sản Phẩm Mới</CardTitle>
              </CardHeader>
              <CardContent>
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
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Mô Tả</Label>
                    <Input
                      id="description"
                      value={newProduct.description}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Giá (VND)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          price: Number(e.target.value),
                        })
                      }
                      required
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
                    />
                  </div>
                  <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
                    Thêm
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Danh sách sản phẩm */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-teal-900">
                {product.price.toLocaleString("vi-VN")} VND
              </p>
              <div className="flex gap-2 mt-4">
                <Link href={`/store/product/${product.id}`}>
                  <Button variant="outline">Xem Chi Tiết</Button>
                </Link>
                <Button
                  onClick={() => handleCheckout(product)}
                  className="bg-teal-500 hover:bg-teal-600"
                >
                  Mua Ngay
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lịch sử hóa đơn */}
      {session?.user && invoices.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-teal-900 mb-4">
            Lịch Sử Hóa Đơn
          </h2>
          <div className="space-y-4">
            {invoices
              .filter((invoice) => invoice.userId === session.user.id)
              .map((invoice) => (
                <Card key={invoice.id}>
                  <CardContent className="pt-4">
                    <p>
                      <strong>Sản Phẩm:</strong> {invoice.productName}
                    </p>
                    <p>
                      <strong>Số Tiền:</strong>{" "}
                      {invoice.amount.toLocaleString("vi-VN")} VND
                    </p>
                    <p>
                      <strong>Ngày:</strong> {invoice.date}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}