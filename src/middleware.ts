import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth/auth";

// Danh sách các đường dẫn công khai mà không cần xác thực
const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/about",
  "/destinations",
  "/historical-sites",
  "/search",
  "/api/auth",
];

// Middleware để kiểm tra xác thực và phân quyền
export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // Kiểm tra xem đường dẫn hiện tại có trong danh sách công khai không
  const isPublicRoute = publicRoutes.some(route => {
    // Kiểm tra chính xác route hoặc nếu là subpath của route public
    if (route.endsWith("/")) {
      return pathname === route || pathname.startsWith(`${route}`);
    }
    return pathname === route || pathname.startsWith(`${route}/`);
  });

  // Kiểm tra các API routes
  if (pathname.startsWith("/api") && isPublicRoute) {
    return NextResponse.next();
  }

  // Người dùng chưa đăng nhập và truy cập trang yêu cầu đăng nhập
  if (!session && !isPublicRoute) {
    const signInUrl = new URL("/login", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Kiểm tra quyền admin cho các trang admin
  if (pathname.startsWith("/admin") && session?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Kiểm tra quyền guide hoặc admin cho các trang dành cho hướng dẫn viên
  if (
    pathname.startsWith("/guide") &&
    !(session?.user?.role === "GUIDE" || session?.user?.role === "ADMIN")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Các trang yêu cầu đăng nhập nhưng không yêu cầu quyền đặc biệt
  if (
    (pathname.startsWith("/booking") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/dashboard")) &&
    !session
  ) {
    const signInUrl = new URL("/login", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Cấu hình để middleware chỉ chạy trên các route cần thiết
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
    "/api/:path*",
  ],
};
