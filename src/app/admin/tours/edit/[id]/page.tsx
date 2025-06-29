
import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { AdminTourForm } from "@/components/admin/admin-tour-form";

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Chỉnh sửa Tour | Admin",
  description: "Chỉnh sửa thông tin tour du lịch",
};

interface EditTourPageProps {
  params: {
    id: string;
  };
}

export default async function EditTourPage({ params }: EditTourPageProps) {
  const session = await auth();

  if (!session || !session.user || 
      !["ADMIN_TOUR", "SUPER_ADMIN"].includes(session.user.role || "")) {
    redirect("/login");
  }

  const tour = await prisma.tour.findUnique({
    where: { id: params.id },
  });

  if (!tour) {
    redirect("/admin/tours");
  }

  return <AdminTourForm tour={tour} isEdit={true} />;
}
