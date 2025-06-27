
import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { ProductList } from "@/components/admin/product-list";

export const metadata: Metadata = {
  title: "Quản lý sản phẩm | Admin",
  description: "Quản lý sản phẩm cửa hàng",
};

export default async function ProductsAdminPage() {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_SHOP", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quản lý sản phẩm</h1>
        <p className="text-muted-foreground mt-2">
          Thêm, sửa, xóa và quản lý tất cả sản phẩm
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <ProductList />
      </div>
    </div>
  );
}
