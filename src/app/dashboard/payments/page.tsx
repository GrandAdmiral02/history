import type { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { PaymentList } from "@/components/booking/payment-list";

export const metadata: Metadata = {
  title: "Lịch sử thanh toán | Nghệ An Historical",
  description: "Xem lịch sử thanh toán tour du lịch của bạn",
};

export default async function PaymentsPage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/login?callbackUrl=/dashboard/payments");
  }

  return (
    <div className="container max-w-screen-lg mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Lịch sử thanh toán</h1>
        <p className="text-muted-foreground mt-2">
          Quản lý tất cả các giao dịch thanh toán của bạn
        </p>
      </div>

      <PaymentList userId={session.user.id} />
    </div>
  );
}
