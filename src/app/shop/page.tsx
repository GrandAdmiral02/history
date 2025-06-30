
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Filter, 
  X, 
  Plus, 
  Minus, 
  Edit, 
  Trash2, 
  Package, 
  Search,
  Grid3X3,
  List,
  SortAsc,
  MapPin,
  Award,
  TrendingUp,
  Zap,
  Truck,
  Shield,
  Clock,
  Percent,
  Gift,
  Flame,
  Loader2, 
  ShoppingBag
} from "lucide-react";
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
  isActive: boolean;
}

const categories = ["Tất cả", "Đặc sản", "Lưu niệm", "Thời trang", "Khác"];
const sortOptions = [
  { value: "name", label: "Tên A-Z" },
  { value: "price-asc", label: "Giá thấp đến cao" },
  { value: "price-desc", label: "Giá cao đến thấp" },
  { value: "rating", label: "Đánh giá cao" },
  { value: "sold", label: "Bán chạy nhất" },
];

export default function ShopPage() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [priceRange, setPriceRange] = useState([0, 999999999999]);
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<string[]>([]);

  // Admin states
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [adminMode, setAdminMode] = useState(false);

  // Check if user is admin
  const isAdmin = Boolean(session?.user?.role && 
    (session.user.role === "ADMIN_SHOP" || session.user.role === "SUPER_ADMIN"));

  useEffect(() => {
    fetchProducts();
    loadCartFromStorage();
    loadFavoritesFromStorage();
  }, [session, isAdmin]);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, selectedCategory, priceRange, searchQuery, sortBy]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/products", {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
      localStorage.setItem('products', JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Không thể tải sản phẩm");
    } finally {
      setIsLoading(false);
    }
  };

  const loadCartFromStorage = () => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  };

  const loadFavoritesFromStorage = () => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = products;

    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "sold":
          return b.sold - a.sold;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  };

  const addToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) {
      toast.error("Sản phẩm đã hết hàng");
      return;
    }

    const currentQuantity = cart[productId] || 0;
    if (currentQuantity >= product.stock) {
      toast.error("Đã đạt giới hạn tồn kho");
      return;
    }

    const newCart = {
      ...cart,
      [productId]: currentQuantity + 1,
    };
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    toast.success("Đã thêm vào giỏ hàng");
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const toggleFavorite = (productId: string) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    toast.success(favorites.includes(productId) ? "Đã xóa khỏi yêu thích" : "Đã thêm vào yêu thích");
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
      const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Xóa sản phẩm thành công!");
        fetchProducts();
      } else {
        const error = await response.json();
        toast.error(error.error || "Không thể xóa sản phẩm");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra khi xóa sản phẩm");
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const calculateDiscount = (price: number, originalPrice?: number) => {
    if (!originalPrice || originalPrice <= price) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const getTotalCartValue = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-orange-500 mx-auto mb-4" />
              <div className="text-lg font-medium text-gray-700">Đang tải sản phẩm...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Shopee Style */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🛍️ Cửa hàng Nghệ An
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-6">
                Khám phá những sản phẩm đặc biệt mang đậm văn hóa và lịch sử xứ Nghệ
              </p>
              
              {/* Service Features */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Truck className="h-4 w-4" />
                  <span>Miễn phí vận chuyển</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Shield className="h-4 w-4" />
                  <span>Đảm bảo chất lượng</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Zap className="h-4 w-4" />
                  <span>Giao hàng nhanh</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Gift className="h-4 w-4" />
                  <span>Quà tặng hấp dẫn</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Admin Controls */}
      {isAdmin && (
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between flex-wrap gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Quản lý cửa hàng</h3>
                  <p className="text-sm text-blue-600">Thống kê: {products.length} sản phẩm</p>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/admin">
                  <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                    <Package className="h-4 w-4 mr-2" />
                    Trang Admin
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    setEditingProduct(null);
                    setShowAdminForm(true);
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm sản phẩm
                </Button>
                <Button
                  variant={adminMode ? "default" : "outline"}
                  onClick={() => setAdminMode(!adminMode)}
                >
                  {adminMode ? "Ẩn chỉnh sửa" : "Hiện chỉnh sửa"}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters - Lazada Style */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          {/* Main Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-orange-500 rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-6 border-2 border-gray-200 hover:border-orange-500"
              >
                <Filter className="h-5 w-5 mr-2" />
                Bộ lọc
              </Button>
              <Button
                variant="outline"
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                className="h-12 px-4 border-2 border-gray-200 hover:border-orange-500"
              >
                {viewMode === "grid" ? <List className="h-5 w-5" /> : <Grid3X3 className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg" 
                  : "border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <SortAsc className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-orange-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>Hiển thị {filteredProducts.length} trong {products.length} sản phẩm</span>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 border-2 border-orange-100 rounded-lg bg-orange-50"
              >
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Khoảng giá: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={999999999999}
                      min={0}
                      step={1000000}
                      className="w-full"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="lg:self-start hover:bg-orange-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-4 ${
          viewMode === "grid" 
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
            : "grid-cols-1"
        }`}>
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={viewMode === "list" ? "w-full" : ""}
              >
                <Card className={`h-full flex ${viewMode === "list" ? "flex-row" : "flex-col"} hover:shadow-xl transition-all duration-300 group relative overflow-hidden bg-white border-0 shadow-md hover:shadow-2xl`}>
                  {/* Admin Controls Overlay */}
                  {isAdmin && adminMode && (
                    <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleEditProduct(product)}
                        className="h-8 w-8 p-0 bg-white shadow-lg hover:bg-gray-100"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteProduct(product.id)}
                        className="h-8 w-8 p-0 shadow-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Product Image */}
                  <div className={`relative ${viewMode === "list" ? "w-48 h-48" : "w-full aspect-square"} overflow-hidden`}>
                    <CardHeader className="p-0 h-full">
                      <div className="relative h-full group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={product.image || "/placeholder.jpg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.jpg";
                          }}
                        />

                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.originalPrice && (
                            <Badge className="bg-red-500 text-white shadow-lg flex items-center gap-1">
                              <Percent className="h-3 w-3" />
                              -{calculateDiscount(product.price, product.originalPrice)}%
                            </Badge>
                          )}

                          {product.sold > 100 && (
                            <Badge className="bg-orange-500 text-white shadow-lg flex items-center gap-1">
                              <Flame className="h-3 w-3" />
                              Bán chạy
                            </Badge>
                          )}

                          {product.stock === 0 && (
                            <Badge className="bg-gray-500 text-white shadow-lg">
                              Hết hàng
                            </Badge>
                          )}
                        </div>

                        {/* Favorite Button */}
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => toggleFavorite(product.id)}
                          className={`absolute top-2 right-2 h-8 w-8 p-0 shadow-lg transition-all duration-200 ${
                            favorites.includes(product.id) 
                              ? "bg-red-100 text-red-500 hover:bg-red-200" 
                              : "bg-white hover:bg-gray-100"
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                        </Button>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                      </div>
                    </CardHeader>
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col flex-1 p-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-medium line-clamp-2 group-hover:text-orange-600 transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        {product.category}
                      </Badge>
                    </div>

                    {viewMode === "list" && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {product.description || "Không có mô tả"}
                      </p>
                    )}

                    {/* Rating and Sales */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < product.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-600 ml-1">
                          ({product.sold})
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-orange-600 font-bold text-lg">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs line-through text-gray-400">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Stock Info */}
                    <div className="text-xs text-gray-500 mb-3">
                      <span className={`inline-flex items-center gap-1 ${
                        product.stock > 10 ? "text-green-600" : 
                        product.stock > 0 ? "text-yellow-600" : "text-red-600"
                      }`}>
                        <Package className="h-3 w-3" />
                        {product.stock > 0 ? `Còn ${product.stock}` : "Hết hàng"}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto space-y-2">
                      {cart[product.id] ? (
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(product.id)}
                            className="h-8 w-8 p-0 border-orange-200 hover:border-orange-400"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium px-2 py-1 bg-orange-50 border border-orange-200 rounded text-center min-w-[2rem]">
                            {cart[product.id]}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCart(product.id)}
                            className="h-8 w-8 p-0 border-orange-200 hover:border-orange-400"
                            disabled={cart[product.id] >= product.stock}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          className="w-full h-8 bg-orange-500 hover:bg-orange-600 text-white shadow-lg text-sm"
                          onClick={() => addToCart(product.id)}
                          disabled={product.stock === 0}
                        >
                          <ShoppingCart className="h-3 w-3 mr-2" />
                          {product.stock === 0 ? "Hết hàng" : "Thêm vào giỏ"}
                        </Button>
                      )}
                      
                      {/* Detail Button */}
                      <Link href="/checkout">
                        <Button
                          variant="outline"
                          className="w-full h-8 text-sm border-gray-300 hover:border-orange-400 hover:text-orange-600"
                          onClick={() => {
                            if (!cart[product.id]) {
                              addToCart(product.id);
                            }
                          }}
                        >
                          Chi tiết & Mua ngay
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-sm"
          >
            <div className="max-w-md mx-auto">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {products.length === 0 ? "Chưa có sản phẩm nào" : "Không tìm thấy sản phẩm"}
              </h3>
              <p className="text-gray-500 mb-4">
                {products.length === 0 
                  ? "Hãy thêm sản phẩm đầu tiên vào cửa hàng" 
                  : "Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm khác"
                }
              </p>
              {products.length > 0 && (
                <Button
                  onClick={() => {
                    setSelectedCategory("Tất cả");
                    setSearchQuery("");
                    setPriceRange([0, 999999999999]);
                  }}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Xóa bộ lọc
                </Button>
              )}
            </div>
          </motion.div>
        )}

        {/* Cart Summary - Fixed Bottom */}
        <AnimatePresence>
          {getTotalCartItems() > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-6 right-6 bg-white shadow-2xl rounded-xl p-6 border-2 border-orange-200 z-50 min-w-[320px]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <ShoppingCart className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Giỏ hàng ({getTotalCartItems()})
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatPrice(getTotalCartValue())}
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/checkout">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 shadow-lg h-12 text-lg font-semibold">
                  Thanh toán ngay
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Admin Product Form */}
        <AdminProductForm
          isOpen={showAdminForm}
          onClose={() => {
            setShowAdminForm(false);
            setEditingProduct(null);
          }}
          product={editingProduct}
          onSave={() => {
            fetchProducts();
            setShowAdminForm(false);
            setEditingProduct(null);
          }}
        />
      </div>
    </div>
  );
}
