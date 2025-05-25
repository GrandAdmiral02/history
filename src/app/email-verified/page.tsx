import { CheckCircle } from "lucide-react";
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

export default function EmailVerifiedPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-180px)]">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-700" />
          </div>
          <CardTitle className="text-2xl">Email đã xác thực!</CardTitle>
          <CardDescription>
            Cảm ơn bạn đã xác thực email. Tài khoản của bạn đã được kích hoạt.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            Bây giờ bạn có thể đăng nhập và sử dụng đầy đủ tính năng của ứng dụng.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild className="bg-green-700 hover:bg-green-800">
            <Link href="/login">Đăng nhập</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
