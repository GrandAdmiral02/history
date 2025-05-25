"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"verifying" | "success" | "error">("verifying");
  const [message, setMessage] = useState("Đang xác thực email của bạn...");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error");
        setMessage("Token không hợp lệ. Vui lòng kiểm tra lại link xác thực.");
        return;
      }

      try {
        const response = await fetch(`/api/verify-email?token=${token}`);

        if (response.redirected) {
          // API redirect thành công, chuyển hướng đến trang thành công
          router.push(response.url);
          return;
        }

        const data = await response.json();

        if (!response.ok) {
          setStatus("error");
          setMessage(data.message || "Đã xảy ra lỗi khi xác thực email.");
        } else {
          setStatus("success");
          setMessage("Email đã được xác thực thành công!");

          // Chuyển hướng đến trang thành công sau 2 giây
          setTimeout(() => {
            router.push("/email-verified");
          }, 2000);
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
        setMessage("Đã xảy ra lỗi khi xác thực email. Vui lòng thử lại sau.");
      }
    };

    verifyEmail();
  }, [token, router]);

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-180px)]">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Xác thực Email</CardTitle>
          <CardDescription>
            {status === "verifying" && "Hệ thống đang xác thực email của bạn"}
            {status === "success" && "Xác thực thành công"}
            {status === "error" && "Xác thực thất bại"}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pt-6 pb-6">
          {status === "verifying" && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Loader2 className="h-8 w-8 animate-spin text-green-700" />
              </div>
              <p>{message}</p>
            </div>
          )}

          {status === "success" && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-700" />
              </div>
              <p className="text-green-700 font-medium">{message}</p>
              <p className="text-sm text-muted-foreground mt-2">Đang chuyển hướng...</p>
            </div>
          )}

          {status === "error" && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <p className="text-red-600 font-medium">{message}</p>
            </div>
          )}
        </CardContent>
        {status === "error" && (
          <CardFooter className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/register">Đăng ký lại</Link>
            </Button>
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/">Về trang chủ</Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
