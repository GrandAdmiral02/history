
import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { OrderList } from "@/components/admin/order-list";

export const metadata: Metadata = {
  title: "Quản lý đơn hàng | Admin",
  description: "Quản lý đơn hàng cửa hàng",
};

export default async function OrdersAdminPage() {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quản lý đơn hàng</h1>
        <p className="text-muted-foreground mt-2">
          Theo dõi và xử lý đơn hàng
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <OrderList />
      </div>
    </div>
  );
}
