import { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { UserList } from "@/components/admin/user-list";

export const metadata: Metadata = {
  title: "Quản lý người dùng | Admin Nghệ An Historical",
  description: "Quản lý thông tin người dùng hệ thống",
};

export default async function AdminUsersPage() {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "SUPER_ADMIN") {
    redirect("/login?callbackUrl=/admin/users");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Quản lý người dùng</h1>
          <p className="text-muted-foreground mt-2">
            Quản lý tài khoản người dùng trong hệ thống
          </p>
        </div>
        <div>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-2"
          >
            Quay lại dashboard
          </Link>
        </div>
      </div>

      <UserList />
    </div>
  );
}
