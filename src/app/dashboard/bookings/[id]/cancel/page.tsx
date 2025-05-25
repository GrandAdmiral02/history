"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, AlertTriangle } from "lucide-react";

export default function CancelBookingPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [error, setError] = useState("");

  const handleCancel = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/bookings/${params.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cancelReason,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Không thể hủy đơn đặt tour");
      }

      // Chuyển hướng đến trang chi tiết booking sau khi hủy thành công
      router.push(`/dashboard/bookings/${params.id}?cancelled=true`);
      router.refresh();
    } catch (error) {
      console.error("Error cancelling booking:", error);
      setError(error instanceof Error ? error.message : "Đã xảy ra lỗi khi hủy đặt tour");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <CardTitle>Hủy đặt tour</CardTitle>
          </div>
          <CardDescription>
            Vui lòng xác nhận việc hủy đặt tour của bạn
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-sm">
            <p className="font-medium text-yellow-800 mb-2">Lưu ý về chính sách hủy tour:</p>
            <ul className="list-disc pl-5 space-y-1 text-yellow-700">
              <li>Hủy trước 7 ngày: Hoàn tiền 80% tổng giá trị tour</li>
              <li>Hủy trong vòng 3-7 ngày: Hoàn tiền 50% tổng giá trị tour</li>
              <li>Hủy trong vòng 3 ngày: Không được hoàn tiền</li>
            </ul>
          </div>

          <div className="space-y-2">
            <label htmlFor="cancel-reason" className="text-sm font-medium">
              Lý do hủy (tùy chọn)
            </label>
            <Textarea
              id="cancel-reason"
              placeholder="Vui lòng cho chúng tôi biết lý do bạn hủy đặt tour"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              className="resize-none"
              rows={4}
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isLoading}
            >
              Quay lại
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleCancel}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang xử lý...
                </>
              ) : (
                "Xác nhận hủy"
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Nếu bạn cần hỗ trợ, vui lòng liên hệ qua số hotline 0238 1234 567
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
