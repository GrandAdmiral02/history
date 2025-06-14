"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

// Định nghĩa interface cho sản phẩm
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "souvenir" | "specialty";
}

// Giả lập hàm lấy sản phẩm
async function getProduct(id: string): Promise<Product | undefined> {
  const products: Product[] = [
    {
      id: "1",
      name: "Sách Lịch Sử Nghệ An",
      description: "Cuốn sách kể về lịch sử và văn hóa xứ Nghệ, từ thời An Dương Vương đến hiện đại.",
      price: 150000,
      image: "/images/book-nghe-an.jpg",
      category: "specialty",
    },
    {
      id: "2",
      name: "Mô hình Thành cổ Vinh",
      description: "Mô hình thu nhỏ của Thành cổ Vinh, làm thủ công với chi tiết tinh xảo.",
      price: 300000,
      image: "/images/thanh-co-vinh-model.jpg",
      category: "souvenir",
    },
    {
      id: "3",
      name: "Tour Khám Phá Truông Bồn",
      description: "Hành trình khám phá di tích lịch sử Truông Bồn, đậm chất văn hóa Nghệ An.",
      price: 1200000,
      image: "/images/tour-truong-bon.jpg",
      category: "specialty",
    },
    {
      id: "4",
      name: "Áo thêu Văn hóa Nghệ An",
      description: "Áo phông với họa tiết truyền thống độc đáo, tôn vinh văn hóa xứ Nghệ.",
      price: 200000,
      image: "/images/tshirt-nghean.jpg",
      category: "souvenir",
    },
  ];
  return products.find((p) => p.id === id);
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session } = useSession();
  const [invoice, setInvoice] = useState<{ id: string; productName: string; amount: number; date: string } | null>(null);

  // Lấy sản phẩm
  const { id } = params;
  const productPromise = getProduct(id);

  // Xử lý thanh toán giả lập
  const handleCheckout = (product: Product) => {
    if (!session?.user) {
      alert("Vui lòng đăng nhập để thanh toán!");
      return;
    }
    const newInvoice = {
      id: Date.now().toString(),
      productName: product.name,
      amount: product.price,
      date: new Date().toLocaleDateString("vi-VN"),
    };
    setInvoice(newInvoice);
    alert(`Thanh toán thành công cho ${product.name}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-7xl">
        <ProductContent productPromise={productPromise} handleCheckout={handleCheckout} />
        {invoice && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-teal-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-amber-500 mb-6">
              Thông Tin Thanh Toán
            </h2>
            <Card className="bg-white/95 backdrop-blur-lg border border-teal-200/50">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Sản Phẩm</p>
                    <p className="font-medium text-teal-900">{invoice.productName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Số Tiền</p>
                    <p className="font-medium text-amber-600">{invoice.amount.toLocaleString("vi-VN")} VND</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Ngày</p>
                    <p className="font-medium text-teal-900">{invoice.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

async function ProductContent({
  productPromise,
  handleCheckout,
}: {
  productPromise: Promise<Product | undefined>;
  handleCheckout: (product: Product) => void;
}) {
  const product = await productPromise;
  if (!product) notFound();

  return (
    <Card className="bg-white/95 backdrop-blur-lg border border-teal-200/50 shadow-md">
      <CardHeader>
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-amber-500">
          {product.name}
        </h1>
        <p className="text-sm text-gray-600">
          Danh mục: {product.category === "souvenir" ? "Đồ Lưu Niệm" : "Sản Phẩm Đặc Trưng"}
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hình ảnh sản phẩm */}
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-md transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
          {/* Thông tin sản phẩm */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            <p className="text-lg font-bold text-amber-600">{product.price.toLocaleString("vi-VN")} VND</p>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => handleCheckout(product)}
                className="bg-gradient-to-r from-teal-500 to-amber-500 text-white hover:from-teal-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Mua Ngay
              </Button>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-100 transition-all duration-300"
              >
                Thêm vào giỏ
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}