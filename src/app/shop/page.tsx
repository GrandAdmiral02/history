import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Áo thun Kim Liên",
    price: 250000,
    originalPrice: 300000,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "Thời trang",
    discount: "17%",
  },
  {
    id: 2,
    name: "Nón lá truyền thống",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    category: "Thủ công",
  },
  {
    id: 3,
    name: "Móc khóa Đền Cuông",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1586953225046-f96adb276f08?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 256,
    category: "Lưu niệm",
  },
  {
    id: 4,
    name: "Tranh thêu Nghệ An",
    price: 500000,
    originalPrice: 600000,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 67,
    category: "Nghệ thuật",
    discount: "17%",
  },
  {
    id: 5,
    name: "Cà phê đặc sản Nghệ An",
    price: 180000,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 198,
    category: "Thực phẩm",
  },
  {
    id: 6,
    name: "Bộ sách lịch sử Nghệ An",
    price: 320000,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 143,
    category: "Sách",
  },
];

const categories = [
  "Tất cả",
  "Thời trang",
  "Thủ công",
  "Lưu niệm",
  "Nghệ thuật",
  "Thực phẩm",
  "Sách",
];

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-800/80 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop"
          alt="Cửa hàng lưu niệm Nghệ An"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cửa Hàng Lưu Niệm
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Mang về những món quà đặc biệt từ vùng đất địa linh nhân kiệt Nghệ
            An
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-foreground">Cửa hàng</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Tất cả" ? "default" : "outline"}
              size="sm"
              className={
                category === "Tất cả"
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "hover:bg-orange-50 hover:text-orange-700"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                {product.discount && (
                  <Badge className="absolute top-3 left-3 z-10 bg-red-500 hover:bg-red-600">
                    -{product.discount}
                  </Badge>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 z-10">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-orange-600">
                    {product.price.toLocaleString()}₫
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice.toLocaleString()}₫
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 group">
                  <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  Thêm vào giỏ
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Không tìm thấy sản phẩm mong muốn?
          </h2>
          <p className="text-muted-foreground mb-6">
            Liên hệ với chúng tôi để được tư vấn và đặt hàng theo yêu cầu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700">
              Liên hệ tư vấn
            </Button>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              Xem catalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
