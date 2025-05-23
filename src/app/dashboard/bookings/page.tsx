import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { BookingList } from "@/components/booking/booking-list";

export const metadata: Metadata = {
  title: "Đặt tour của tôi | Nghệ An Historical",
  description: "Quản lý các tour du lịch đã đặt",
};

export default async function BookingsPage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/login?callbackUrl=/dashboard/bookings");
  }

  return (
    <div className="container max-w-screen-lg mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Đặt tour của tôi</h1>
        <p className="text-muted-foreground mt-2">
          Quản lý tất cả các tour du lịch bạn đã đặt
        </p>
      </div>

      <BookingList userId={session.user.id} />
    </div>
  );
}
