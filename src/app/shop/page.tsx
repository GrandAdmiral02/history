
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, Filter } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Kẹo Cu Đơ Nghệ An",
    price: "150,000",
    originalPrice: "180,000",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
    description: "Đặc sản nổi tiếng xứ Nghệ, hương vị truyền thống",
    rating: 4.8,
    sold: 245,
    category: "Đặc sản",
    discount: "17%"
  },
  {
    id: 2,
    name: "Bánh Mướt Nghệ An",
    price: "120,000",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop",
    description: "Bánh truyền thống làm từ bột gạo, nhân đậu xanh",
    rating: 4.6,
    sold: 156,
    category: "Đặc sản",
    discount: ""
  },
  {
    id: 3,
    name: "Tranh Dân Gian Kim Liên",
    price: "280,000",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
    description: "Tranh vẽ tay mô tả phong cảnh làng Sen quê Bác",
    rating: 4.9,
    sold: 89,
    category: "Lưu niệm",
    discount: ""
  },
  {
    id: 4,
    name: "Áo thun in hình Bác Hồ",
    price: "199,000",
    originalPrice: "250,000",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    description: "Áo cotton cao cấp, in hình chân dung Bác Hồ",
    rating: 4.7,
    sold: 324,
    category: "Thời trang",
    discount: "20%"
  },
  {
    id: 5,
    name: "Mũ cói truyền thống",
    price: "85,000",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop",
    description: "Mũ cói thủ công, kiểu dáng truyền thống Nghệ An",
    rating: 4.5,
    sold: 178,
    category: "Thời trang",
    discount: ""
  },
  {
    id: 6,
    name: "Sách lịch sử Nghệ An",
    price: "165,000",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
    description: "Tập sách chi tiết về lịch sử và văn hóa xứ Nghệ",
    rating: 4.8,
    sold: 92,
    category: "Sách",
    discount: ""
  }
];

const categories = [
  { name: "Tất cả", count: products.length },
  { name: "Đặc sản", count: 2 },
  { name: "Lưu niệm", count: 1 },
  { name: "Thời trang", count: 2 },
  { name: "Sách", count: 1 }
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cửa Hàng Lưu Niệm
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Mang về những món quà đặc biệt từ xứ Nghệ - Nơi lưu giữ tinh hoa văn hóa và lịch sử dân tộc
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-green-800 hover:bg-gray-100">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Mua sắm ngay
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                Xem sản phẩm mới
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Danh mục sản phẩm
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center justify-between w-full text-left p-2 rounded-md hover:bg-green-50 transition-colors"
                    >
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Khoảng giá</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Dưới 100,000đ</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">100,000đ - 200,000đ</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">200,000đ - 500,000đ</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Trên 500,000đ</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">Sản phẩm ({products.length})</h2>
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Mới nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
                <option>Bán chạy nhất</option>
                <option>Đánh giá cao nhất</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {product.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                        -{product.discount}
                      </Badge>
                    )}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2 p-2"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Đã bán {product.sold}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-green-600">
                        {product.price}đ
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}đ
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Thêm vào giỏ
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Xem thêm sản phẩm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
