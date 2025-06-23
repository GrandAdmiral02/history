import { NextResponse } from "next/server";
import type { NextRequest } from "next/request";
import { auth } from "@/lib/auth/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // Trang admin chung - chỉ cho phép admin và super admin
  if (pathname.startsWith("/admin") && pathname === "/admin") {
    if (!session || !session.user || 
        !["ADMIN_TOUR", "ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Trang quản lý tour - chỉ cho phép ADMIN_TOUR và SUPER_ADMIN
  if (pathname.startsWith("/admin/tours") || pathname.startsWith("/admin/bookings")) {
    if (!session || !session.user || 
        !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Trang quản lý shop - chỉ cho phép ADMIN_SHOP và SUPER_ADMIN
  if (pathname.startsWith("/admin/products") || pathname.startsWith("/admin/orders")) {
    if (!session || !session.user || 
        !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Trang quản lý users và thống kê - chỉ cho phép SUPER_ADMIN
  if (pathname.startsWith("/admin/users") || 
      pathname.startsWith("/admin/analytics") || 
      pathname.startsWith("/admin/settings")) {
    if (!session || !session.user || session.user.role !== "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Các trang yêu cầu đăng nhập
  if (
    (pathname.startsWith("/profile") ||
    pathname.startsWith("/dashboard")) &&
    !session
  ) {
    const signInUrl = new URL("/login", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};