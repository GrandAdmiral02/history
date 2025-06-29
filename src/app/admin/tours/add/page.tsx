
import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { AdminTourForm } from "@/components/admin/admin-tour-form";

export const metadata: Metadata = {
  title: "Thêm Tour Mới | Admin",
  description: "Thêm tour du lịch mới",
};

export default async function AddTourPage() {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  return <AdminTourForm />;
}
