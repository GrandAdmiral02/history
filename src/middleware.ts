import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth/auth";

// Danh sách các đường dẫn công khai mà không cần xác thực
const publicRoutes = [
  "/",
  "/about",
  "/destinations",
  "/historical-sites",
  "/search",
  "/booking",
  "/shop",
  "/api/auth",
  "/api/guest-bookings",
];

// Middleware để kiểm tra xác thực và phân quyền
export async function middleware(request: NextRequest) {
  try {
    const session = await auth();
    const { pathname } = request.nextUrl;

    // Kiểm tra xem đường dẫn hiện tại có trong danh sách công khai không
    const isPublicRoute = publicRoutes.some((route) => {
      if (route.endsWith("/")) {
        return pathname === route || pathname.startsWith(`${route}`);
      }
      return pathname === route || pathname.startsWith(`${route}/`);
    });

    // Kiểm tra các API routes
    if (pathname.startsWith("/api") && isPublicRoute) {
      return NextResponse.next();
    }

    // Special handling for login page
    if (pathname === "/login") {
      // Nếu đã đăng nhập và là admin/super admin, redirect đến admin dashboard
      if (
        session &&
        (session.user?.role === "ADMIN" || session.user?.role === "SUPER_ADMIN")
      ) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      // Cho phép truy cập login page
      return NextResponse.next();
    }

    // Bảo vệ admin routes
    if (pathname.startsWith("/admin")) {
      // Kiểm tra đăng nhập
      if (!session) {
        const signInUrl = new URL("/login", request.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(signInUrl);
      }

      // Kiểm tra quyền admin
      if (
        session.user?.role !== "ADMIN" &&
        session.user?.role !== "SUPER_ADMIN"
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }

      // Bảo vệ analytics routes chỉ cho super admin
      if (
        pathname.startsWith("/admin/analytics") &&
        session.user?.role !== "SUPER_ADMIN"
      ) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }

    // Người dùng chưa đăng nhập và truy cập trang yêu cầu đăng nhập
    if (!session && !isPublicRoute && !pathname.startsWith("/admin")) {
      const signInUrl = new URL("/login", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    // Trong trường hợp lỗi auth, cho phép truy cập public routes
    const { pathname } = request.nextUrl;
    const isPublicRoute = publicRoutes.some((route) => {
      if (route.endsWith("/")) {
        return pathname === route || pathname.startsWith(`${route}`);
      }
      return pathname === route || pathname.startsWith(`${route}/`);
    });

    if (isPublicRoute || pathname === "/login") {
      return NextResponse.next();
    }

    // Redirect về login nếu có lỗi auth
    return NextResponse.redirect(new URL("/login", request.url));
  }
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
  ],
};
