"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { email, password } = formData;

      // Sử dụng NextAuth để đăng nhập
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        if (result.error === "UNAUTHORIZED_ROLE") {
          setError(
            "Bạn không có quyền truy cập. Chỉ Admin và Super Admin mới được đăng nhập.",
          );
        } else {
          setError("Email hoặc mật khẩu không chính xác");
        }
        return;
      }

      // Redirect dựa trên role
      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
      setError("Đã xảy ra lỗi khi đăng nhập");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Đăng nhập quản trị viên</CardTitle>
        <CardDescription className="text-center">
          Dành cho Admin và Super Admin
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
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Mật khẩu</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-green-700 hover:underline"
              >
                Quên mật khẩu?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

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
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <p className="text-center text-xs text-muted-foreground">
          Liên hệ Super Admin để được cấp tài khoản
        </p>
      </CardFooter>
    </Card>
  );
}
