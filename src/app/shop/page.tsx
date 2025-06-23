"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import { Slider } from "@/components/ui/slider";
import { ShoppingCart, Star, Heart, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Kẹo Cu Đơ Nghệ An",
    price: 150000,
    originalPrice: 180000,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
    description: "Đặc sản nổi tiếng xứ Nghệ, hương vị truyền thống",
    rating: 4.8,
    sold: 245,
    category: "Đặc sản",
    discount: "17%",
  },
  {
    id: 2,
    name: "Bánh Mướt Nghệ An",
    price: 120000,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop",
    description: "Bánh truyền thống làm từ bột gạo, nhân đậu xanh",
    rating: 4.6,
    sold: 156,
    category: "Đặc sản",
    discount: null,
  },
  {
    id: 3,
    name: "Tranh Dân Gian Kim Liên",
    price: 280000,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
    description: "Tranh vẽ tay mô tả phong cảnh làng Sen quê Bác",
    rating: 4.9,
    sold: 89,
    category: "Lưu niệm",
    discount: null,
  },
  {
    id: 4,
    name: "Áo thun in hình Bác Hồ",
    price: 199000,
    originalPrice: 250000,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    description: "Áo cotton cao cấp, in hình chân dung Bác Hồ",
    rating: 4.7,
    sold: 324,
    category: "Thời trang",
    discount: "20%",
  },
  {
    id: 5,
    name: "Mũ cói truyền thống",
    price: 85000,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop",
    description: "Mũ cói thủ công, kiểu dáng truyền thống Nghệ An",
    rating: 4.5,
    sold: 178,
    category: "Thời trang",
    discount: null,
  },
  {
    id: 6,
    name: "Sách lịch sử Nghệ An",
    price: 165000,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
    description: "Tập sách chi tiết về lịch sử và văn hóa xứ Nghệ",
    rating: 4.8,
    sold: 92,
    category: "Sách",
    discount: null,
  },
];

const categories = [
  { name: "Tất cả", count: products.length },
  ...Array.from(new Set(products.map((p) => p.category))).map((category) => ({
    name: category,
    count: products.filter((p) => p.category === category).length,
  })),
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState("Mới nhất");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "Tất cả"
        ? true
        : product.category === selectedCategory,
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1],
    )
    .sort((a, b) => {
      if (sortBy === "Giá thấp đến cao") return a.price - b.price;
      if (sortBy === "Giá cao đến thấp") return b.price - a.price;
      if (sortBy === "Bán chạy nhất") return b.sold - a.sold;
      if (sortBy === "Đánh giá cao nhất") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Cửa Hàng Lưu Niệm Xứ Nghệ
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Khám phá những món quà độc đáo mang đậm dấu ấn văn hóa và lịch sử
              Nghệ An
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-white text-green-800 hover:bg-gray-100"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Mua sắm ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800"
              >
                Xem sản phẩm nổi bật
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full"
            >
              <Filter className="mr-2 h-4 w-4" />
              {isFilterOpen ? "Đóng bộ lọc" : "Mở bộ lọc"}
            </Button>
          </div>

          {/* Sidebar Filters */}
          <AnimatePresence>
            {(isFilterOpen || window.innerWidth >= 1024) && (
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-6">
                  <Card className="border-none shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Danh mục sản phẩm
                      </CardTitle>
                      {isFilterOpen && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsFilterOpen(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`flex items-center justify-between w-full text-left p-2 rounded-md transition-colors ${
                            selectedCategory === category.name
                              ? "bg-green-100 text-green-800"
                              : "hover:bg-green-50"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {category.name}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </button>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle>Khoảng giá</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500000}
                        step={10000}
                        className="py-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{priceRange[0].toLocaleString()}đ</span>
                        <span>{priceRange[1].toLocaleString()}đ</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">
                Sản phẩm ({filteredProducts.length})
              </h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-4 py-2 text-sm bg-white shadow-sm focus:ring-2 focus:ring-green-500"
              >
                <option>Mới nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
                <option>Bán chạy nhất</option>
                <option>Đánh giá cao nhất</option>
              </select>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 border-none">
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
                          className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-white"
                        >
                          <Heart className="h-4 w-4 group-hover:text-red-500 transition-colors" />
                        </Button>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-1 hover:text-green-700 transition-colors">
                          <Link href={`/shop/${product.id}`}>
                            {product.name}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-sm">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">
                              {product.rating}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            Đã bán {product.sold}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-green-600">
                            {product.price.toLocaleString()}đ
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice.toLocaleString()}đ
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
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Load More */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-green-100"
                >
                  Xem thêm sản phẩm
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
