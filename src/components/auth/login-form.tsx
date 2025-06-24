
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { email, password } = formData;

      if (!email || !password) {
        setError("Vui lòng nhập đầy đủ email và mật khẩu");
        return;
      }

      console.log("🚀 Attempting login...");

      const result = await signIn("credentials", {
        redirect: false,
        email: email.toLowerCase().trim(),
        password,
      });

      console.log("📋 Login result:", result);

      if (result?.error) {
        setError("Email hoặc mật khẩu không chính xác, hoặc bạn không có quyền truy cập");
        return;
      }

      if (result?.ok) {
        console.log("✅ Login successful, redirecting...");
        router.push("/admin");
        router.refresh();
      } else {
        setError("Đã xảy ra lỗi không mong muốn");
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      setError("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Đăng nhập Admin</CardTitle>
        <CardDescription>
          Dành cho quản trị viên hệ thống
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="admin.tour@nghean.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Nhập mật khẩu"
              value={formData.password}
              onChange={handleInputChange}
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Đang xử lý...
              </>
            ) : (
              "Đăng nhập"
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800 font-medium mb-2">Tài khoản demo:</p>
          <div className="text-xs text-blue-700 space-y-1">
            <div>• Admin Tour: admin.tour@nghean.com / admin123</div>
            <div>• Admin Shop: admin.shop@nghean.com / admin123</div>
            <div>• Super Admin: super.admin@nghean.com / admin123</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
