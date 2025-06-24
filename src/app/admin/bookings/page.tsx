
import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { BookingList } from "@/components/admin/booking-list";

export const metadata: Metadata = {
  title: "Quản lý đặt tour | Admin",
  description: "Quản lý đặt tour du lịch",
};

export default async function BookingsAdminPage() {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quản lý đặt tour</h1>
        <p className="text-muted-foreground mt-2">
          Theo dõi và xử lý đặt tour
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <BookingList />
      </div>
    </div>
  );
}
