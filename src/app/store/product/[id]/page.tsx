import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Thêm import này

// Giả lập hàm lấy sản phẩm
async function getProduct(id: string) {
  const products = [
    { id: "1", name: "Sách Lịch Sử Nghệ An", description: "Cuốn sách kể về lịch sử và văn hóa xứ Nghệ.", price: 150000, image: "/images/book-nghe-an.jpg" },
    { id: "2", name: "Mô hình Thành cổ Vinh", description: "Mô hình thu nhỏ của Thành cổ Vinh, làm thủ công.", price: 300000, image: "/images/thanh-co-vinh-model.jpg" },
  ];
  return products.find((p) => p.id === id);
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) notFound();

  return (
    <div className="container py-6">
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-teal-900">{product.price.toLocaleString("vi-VN")} VND</p>
          <Button className="mt-4 bg-teal-500 hover:bg-teal-600">Mua Ngay</Button>
        </CardContent>
      </Card>
    </div>
  );
}