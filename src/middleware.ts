import { NextResponse, type NextRequest } from "next/server";

// Middleware đơn giản tạm thời - cho phép tất cả requests
export async function middleware(request: NextRequest) {
  console.log("Middleware running for:", request.nextUrl.pathname);

  // Temporarily allow all requests
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
  ],
};
