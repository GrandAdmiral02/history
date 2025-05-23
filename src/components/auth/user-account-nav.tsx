"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  User,
  CreditCard,
  Settings,
  LogOut,
  UserCircle,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { UserRole } from "@prisma/client";

interface UserAccountNavProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: UserRole;
  };
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)
    : "?";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="relative rounded-full h-9 w-9 border-green-500"
        >
          {user?.image ? (
            <img
              src={user.image}
              alt={user.name || "Avatar"}
              className="h-9 w-9 rounded-full"
            />
          ) : (
            <div className="h-9 w-9 rounded-full flex items-center justify-center bg-green-100 text-green-700 font-medium">
              {userInitials}
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.name || "Người dùng"}
            </p>
            <p className="text-xs text-muted-foreground leading-none mt-1">
              {user?.email || ""}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profile" className="cursor-pointer">
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Hồ sơ</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/bookings" className="cursor-pointer">
              <ClipboardList className="mr-2 h-4 w-4" />
              <span>Đặt tour của tôi</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/payments" className="cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Thanh toán</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Cài đặt</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {/* Admin/Guide links */}
        {(user?.role === "ADMIN" || user?.role === "GUIDE") && (
          <>
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                Quản lý
              </DropdownMenuLabel>
              {user?.role === "ADMIN" && (
                <DropdownMenuItem asChild>
                  <Link href="/admin" className="cursor-pointer">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    <span>Trang quản trị</span>
                  </Link>
                </DropdownMenuItem>
              )}
              {user?.role === "GUIDE" && (
                <DropdownMenuItem asChild>
                  <Link href="/guide" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Quản lý hướng dẫn</span>
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </>
        )}

        <DropdownMenuItem
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{isSigningOut ? "Đang đăng xuất..." : "Đăng xuất"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
