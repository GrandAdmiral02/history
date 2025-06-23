
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
import { ShoppingCart, Star, Heart, Filter, X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  description?: string;
  rating: number;
  sold: number;
  category: string;
  discount?: string;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

const categories = [
  "Tất cả",
  "Đặc sản",
  "Lưu niệm",
  "Thời trang",
  "Sách",
  "Khác"
];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState("Mới nhất");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Load sản phẩm từ API
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, sortBy]);

  // Load giỏ hàng từ localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Lưu giỏ hàng vào localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedCategory !== "Tất cả") {
        params.append('category', selectedCategory);
      }
      
      const response = await fetch(`/api/products?${params}`);
      const data = await response.json();
      
      if (response.ok) {
        let sortedProducts = [...data.products];
        
        // Sắp xếp sản phẩm
        if (sortBy === "Giá thấp đến cao") {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === "Giá cao đến thấp") {
          sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === "Bán chạy nhất") {
          sortedProducts.sort((a, b) => b.sold - a.sold);
        } else if (sortBy === "Đánh giá cao nhất") {
          sortedProducts.sort((a, b) => b.rating - a.rating);
        }
        
        setProducts(sortedProducts);
      } else {
        toast.error("Không thể tải danh sách sản phẩm");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Đã xảy ra lỗi khi tải sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCart(cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
        toast.success(`Đã thêm ${product.name} vào giỏ hàng`);
      } else {
        toast.error("Không đủ hàng trong kho");
      }
    } else {
      if (product.stock > 0) {
        setCart([...cart, { ...product, quantity: 1 }]);
        toast.success(`Đã thêm ${product.name} vào giỏ hàng`);
      } else {
        toast.error("Sản phẩm đã hết hàng");
      }
    }
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p>Đang tải sản phẩm...</p>
        </div>
      </div>
    );
  }

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
            <div className="flex gap-4 items-center">
              <Button
                size="lg"
                className="bg-white text-green-800 hover:bg-gray-100"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Mua sắm ngay
              </Button>
              <Link href="/checkout">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800 relative"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Giỏ hàng ({getCartItemCount()})
                </Button>
              </Link>
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
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`flex items-center justify-between w-full text-left p-2 rounded-md transition-colors ${
                            selectedCategory === category
                              ? "bg-green-100 text-green-800"
                              : "hover:bg-green-50"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {category}
                          </span>
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
                            src={product.image || "/placeholder-product.jpg"}
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
                        {product.stock === 0 && (
                          <Badge className="absolute top-2 right-2 bg-gray-500">
                            Hết hàng
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-1 hover:text-green-700 transition-colors">
                          {product.name}
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
                          <span className="text-xs text-muted-foreground">
                            Còn {product.stock}
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
                        <Button 
                          className="w-full bg-green-700 hover:bg-green-800"
                          onClick={() => addToCart(product)}
                          disabled={product.stock === 0}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {product.stock === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Không tìm thấy sản phẩm nào</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
