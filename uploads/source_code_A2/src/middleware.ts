// src/middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth/auth";

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

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // Kiểm tra nếu route nằm trong danh sách publicRoutes
  const isPublicRoute = publicRoutes.some((route) =>
    route.endsWith("/")
      ? pathname === route || pathname.startsWith(`${route}`)
      : pathname === route || pathname.startsWith(`${route}/`)
  );

  // Cho phép truy cập các route công khai và API auth
  if (isPublicRoute || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Nếu không có session và route không công khai, chuyển hướng đến trang login
  if (!session) {
    const signInUrl = new URL("/login", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Kiểm tra quyền truy cập cho route admin
  if (pathname.startsWith("/admin") && session.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Kiểm tra quyền truy cập cho route guide
  if (
    pathname.startsWith("/guide") &&
    !(session.user?.role === "GUIDE" || session.user?.role === "ADMIN")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Kiểm tra quyền truy cập cho các route yêu cầu đăng nhập
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

  // Cho phép tiếp tục nếu không có điều kiện nào bị vi phạm
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};