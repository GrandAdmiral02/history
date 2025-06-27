
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
import { ShoppingCart, Star, Heart, Filter, X, Plus, Minus, Edit, Trash2, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { AdminProductForm } from "@/components/shop/admin-product-form";

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

const categories = ["Tất cả", "Đặc sản", "Lưu niệm", "Thời trang", "Khác"];

export default function ShopPage() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  
  // Admin states
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [adminMode, setAdminMode] = useState(false);

  const isAdmin = session?.user?.role === "ADMIN_SHOP" || session?.user?.role === "SUPER_ADMIN";

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory, priceRange]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Không thể tải danh sách sản phẩm");
    } finally {
      setIsLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    toast.success("Đã thêm vào giỏ hàng!");
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowAdminForm(true);
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      return;
    }

    try {
      const response = await fetch(`/api/products?id=${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Xóa sản phẩm thành công!");
        fetchProducts();
      } else {
        throw new Error("Không thể xóa sản phẩm");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra khi xóa sản phẩm");
    }
  };

  const handleFormClose = () => {
    setShowAdminForm(false);
    setEditingProduct(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg">Đang tải sản phẩm...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Cửa hàng lưu niệm Nghệ An
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Khám phá những sản phẩm đặc biệt mang đậm văn hóa và lịch sử xứ Nghệ
        </p>
      </div>

      {/* Admin Controls */}
      {isAdmin && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-blue-800">Chế độ quản lý cửa hàng</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant={adminMode ? "default" : "outline"}
                size="sm"
                onClick={() => setAdminMode(!adminMode)}
              >
                {adminMode ? "Tắt chế độ admin" : "Bật chế độ admin"}
              </Button>
              <Button
                onClick={() => {
                  setEditingProduct(null);
                  setShowAdminForm(true);
                }}
                size="sm"
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                Thêm sản phẩm
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="mb-2"
          >
            <Filter className="h-4 w-4 mr-2" />
            Bộ lọc
          </Button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 border rounded-lg bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Khoảng giá:</label>
                <div className="flex-1 max-w-xs">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000000}
                    min={0}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow relative">
                {/* Admin Controls Overlay */}
                {isAdmin && adminMode && (
                  <div className="absolute top-2 right-2 z-10 flex gap-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEditProduct(product)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <CardHeader className="pb-2">
                  <div className="aspect-square relative mb-2 overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.jpg"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                    {product.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        {product.discount}
                      </Badge>
                    )}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <Badge variant="secondary">{product.category}</Badge>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="line-clamp-2 mb-2">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">
                      ({product.sold} đã bán)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-green-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through text-gray-400">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    Còn lại: {product.stock} sản phẩm
                  </div>
                </CardContent>

                <CardFooter className="pt-2">
                  <div className="flex gap-2 w-full">
                    {cart[product.id] ? (
                      <div className="flex items-center gap-2 flex-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(product.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium px-2">
                          {cart[product.id]}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addToCart(product.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        className="flex-1"
                        onClick={() => addToCart(product.id)}
                        disabled={product.stock === 0}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.stock === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Không tìm thấy sản phẩm nào phù hợp</p>
        </div>
      )}

      {/* Cart Summary */}
      {Object.keys(cart).length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 border">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart className="h-5 w-5" />
            <span className="font-medium">
              Giỏ hàng ({Object.values(cart).reduce((a, b) => a + b, 0)})
            </span>
          </div>
          <Link href="/checkout">
            <Button className="w-full">Thanh toán</Button>
          </Link>
        </div>
      )}

      {/* Admin Product Form */}
      <AdminProductForm
        isOpen={showAdminForm}
        onClose={handleFormClose}
        product={editingProduct}
        onSave={fetchProducts}
      />
    </div>
  );
}
