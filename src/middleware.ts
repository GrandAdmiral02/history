import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ token, req }) {
      const { pathname } = req.nextUrl;

      // Trang admin chung
      if (pathname.startsWith("/admin") && pathname === "/admin") {
        return token?.role && ["ADMIN_TOUR","ADMIN_SHOP","SUPER_ADMIN"].includes(token.role);
      }

      // Trang quản lý tour
      if (pathname.startsWith("/admin/tours") || pathname.startsWith("/admin/bookings")) {
        return token?.role && ["ADMIN_TOUR","SUPER_ADMIN"].includes(token.role);
      }

      // Trang quản lý orders
      if (pathname.startsWith("/admin/orders")) {
        return token?.role && ["ADMIN_SHOP","SUPER_ADMIN"].includes(token.role);
      }

      // Trang quản lý users và analytics/settings
      if (pathname.startsWith("/admin/users") ||
          pathname.startsWith("/admin/analytics") ||
          pathname.startsWith("/admin/settings")) {
        return token?.role === "SUPER_ADMIN";
      }

      // Các trang yêu cầu login
      if (pathname.startsWith("/profile") || pathname.startsWith("/dashboard")) {
        return !!token;
      }

      return true; // các trang khác không cần auth
    },
  },
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
