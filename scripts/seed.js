const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  // Tạo admin tour
  const adminTour = await prisma.user.upsert({
    where: { email: "admin.tour@nghean.com" },
    update: {},
    create: {
      email: "admin.tour@nghean.com",
      name: "Admin Tour",
      password: await bcrypt.hash("admin123", 10),
      role: "ADMIN_TOUR",
      phone: "0123456789",
    },
  });

  // Tạo admin shop
  const adminShop = await prisma.user.upsert({
    where: { email: "admin.shop@nghean.com" },
    update: {},
    create: {
      email: "admin.shop@nghean.com",
      name: "Admin Shop",
      password: await bcrypt.hash("admin123", 10),
      role: "ADMIN_SHOP",
      phone: "0123456790",
    },
  });

  // Tạo super admin
  const superAdmin = await prisma.user.upsert({
    where: { email: "super.admin@nghean.com" },
    update: {},
    create: {
      email: "super.admin@nghean.com",
      name: "Super Admin",
      password: await bcrypt.hash("admin123", 10),
      role: "SUPER_ADMIN",
      phone: "0123456791",
    },
  });

  // Tạo user thường
  const normalUser = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      email: "user@example.com",
      name: "Nguyễn Văn A",
      password: await bcrypt.hash("user123", 10),
      role: "USER",
      phone: "0987654321",
      address: "Hà Nội, Việt Nam",
    },
  });

  // Tạo các tour mẫu
  const tours = [
    {
      name: "Tour Kim Liên - Quê hương Bác Hồ",
      description:
        "Khám phá làng Sen quê hương Chủ tịch Hồ Chí Minh với những di tích lịch sử ý nghĩa.",
      price: 500000,
      duration: "1 ngày",
      location: "Nam Đàn, Nghệ An",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800",
      maxPeople: 30,
    },
    {
      name: "Tour Đền Cường - Linh thiêng xứ Nghệ",
      description:
        "Hành trình tâm linh tại ngôi đền cổ linh thiêng bậc nhất xứ Nghệ.",
      price: 400000,
      duration: "6 tiếng",
      location: "Quỳ Châu, Nghệ An",
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
      maxPeople: 25,
    },
    {
      name: "Tour Thác Pù Cường - Thiên nhiên hùng vĩ",
      description:
        "Chinh phục thác nước hùng vĩ và khám phá vẻ đẹp núi rừng Tây Bắc.",
      price: 800000,
      duration: "2 ngày 1 đêm",
      location: "Kỳ Sơn, Nghệ An",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      maxPeople: 20,
    },
  ];

  for (const tourData of tours) {
    await prisma.tour.upsert({
      where: { name: tourData.name },
      update: {},
      create: tourData,
    });
  }

  // Tạo các sản phẩm mẫu
  const products = [
    {
      name: "Kẹo Cu Đơ Nghệ An",
      description:
        "Đặc sản nổi tiếng xứ Nghệ, hương vị truyền thống được chế biến từ nguyên liệu tự nhiên",
      price: 150000,
      originalPrice: 180000,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
      category: "Đặc sản",
      stock: 50,
      discount: "17%",
      rating: 4.8,
      sold: 245,
    },
    {
      name: "Bánh Mướt Nghệ An",
      description: "Bánh truyền thống làm từ bột gạo, nhân đậu xanh thơm ngon",
      price: 120000,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop",
      category: "Đặc sản",
      stock: 30,
      rating: 4.6,
      sold: 156,
    },
    {
      name: "Tranh Dân Gian Kim Liên",
      description: "Tranh vẽ tay mô tả phong cảnh làng Sen quê Bác",
      price: 280000,
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      category: "Lưu niệm",
      stock: 15,
      rating: 4.9,
      sold: 89,
    },
    {
      name: "Áo thun in hình Bác Hồ",
      description: "Áo cotton cao cấp, in hình chân dung Bác Hồ",
      price: 199000,
      originalPrice: 250000,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      category: "Thời trang",
      stock: 25,
      discount: "20%",
      rating: 4.7,
      sold: 324,
    },
    {
      name: "Mũ cói truyền thống",
      description: "Mũ cói thủ công, kiểu dáng truyền thống Nghệ An",
      price: 85000,
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop",
      category: "Thời trang",
      stock: 40,
      rating: 4.5,
      sold: 178,
    },
    {
      name: "Sách lịch sử Nghệ An",
      description: "Tập sách chi tiết về lịch sử và văn hóa xứ Nghệ",
      price: 165000,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
      category: "Sách",
      stock: 20,
      rating: 4.8,
      sold: 92,
    },
    {
      name: "Nón lá Nghệ An",
      description: "Nón lá truyền thống được làm thủ công từ lá cọ",
      price: 95000,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      category: "Thời trang",
      stock: 35,
      rating: 4.4,
      sold: 145,
    },
    {
      name: "Tượng gỗ Bác Hồ",
      description: "Tượng gỗ khắc tay tinh xảo hình Bác Hồ",
      price: 320000,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      category: "Lưu niệm",
      stock: 10,
      rating: 4.9,
      sold: 67,
    },
  ];

  for (const productData of products) {
    await prisma.product.upsert({
      where: { name: productData.name },
      update: {},
      create: productData,
    });
  }

  console.log("✅ Seed data created successfully!");
  console.log("👥 Users created:");
  console.log("   - Admin Tour: admin.tour@nghean.com / admin123");
  console.log("   - Admin Shop: admin.shop@nghean.com / admin123");
  console.log("   - Super Admin: super.admin@nghean.com / admin123");
  console.log("   - Normal User: user@example.com / user123");
  console.log("🎯 Tours created:", tours.length);
  console.log("🛍️ Products created:", products.length);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Lỗi:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
