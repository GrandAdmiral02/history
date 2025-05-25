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
        setError("Email hoặc mật khẩu không chính xác");
        return;
      }

      router.push("/");
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
        <CardTitle>Đăng nhập</CardTitle>
        <CardDescription>
          Đăng nhập để đặt tour và quản lý tài khoản
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

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
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

        <div className="mt-4">
          <p className="text-center text-sm">Hoặc đăng nhập với</p>
          <div className="flex gap-2 mt-2">
            <Button
              variant="outline"
              className="w-full"
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 mr-2"
              >
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.44 0 2.88.59 3.94 1.65l2.91-2.91C17.06 2.04 14.62 1 12 1 7.5 1 3.56 3.35 1.64 7.04l3.36 2.61c.9-2.68 3.39-4.61 7-4.61z"
                />
                <path
                  fill="#4285F4"
                  d="M23 12c0-.84-.07-1.66-.21-2.44H12v4.62h6.21c-.27 1.44-1.09 2.66-2.31 3.49l3.26 2.53c1.91-1.78 3-4.37 3-7.2z"
                />
                <path
                  fill="#FBBC05"
                  d="M5 12c0-.93.15-1.82.44-2.65L2.08 6.74C1.37 8.31 1 10.11 1 12c0 1.89.37 3.69 1.08 5.26l3.36-2.61c-.29-.83-.44-1.72-.44-2.65z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.62 0 5.06-1.04 6.85-2.81l-3.26-2.53c-.91.61-2.07.97-3.59.97-3.61 0-6.1-1.93-7-4.61L1.64 16.56C3.56 20.65 7.5 23 12 23z"
                />
              </svg>
              Google
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <p className="text-center text-sm">
          Chưa có tài khoản?{" "}
          <Link href="/register" className="text-green-700 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
