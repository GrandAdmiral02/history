
import { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { PaymentList } from "@/components/admin/payment-list";

export const metadata: Metadata = {
  title: "Quản lý thanh toán | Admin",
  description: "Quản lý thanh toán",
};

export default async function PaymentsAdminPage() {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_TOUR", "ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {session.user.role === "SUPER_ADMIN" 
              ? "Quản lý thanh toán tổng hợp" 
              : session.user.role === "ADMIN_TOUR" 
                ? "Quản lý thanh toán tour" 
                : "Quản lý thanh toán shop"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {session.user.role === "SUPER_ADMIN" 
              ? "Theo dõi và quản lý tất cả giao dịch thanh toán hệ thống" 
              : session.user.role === "ADMIN_TOUR" 
                ? "Theo dõi và quản lý giao dịch thanh toán tour du lịch" 
                : "Theo dõi và quản lý giao dịch thanh toán cửa hàng"}
          </p>
        </div>
        <div>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Quay lại Dashboard
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <PaymentList userRole={session.user.role} />
      </div>
    </div>
  );
}
