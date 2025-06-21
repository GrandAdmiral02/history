"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Mountain,
  MapPin,
  Calendar,
  Info,
  LogIn,
  UserPlus,
  ShoppingBag,
} from "lucide-react";

const menuItems = [
  {
    title: "Trang Chủ",
    href: "/",
    icon: MapPin,
  },
  {
    title: "Điểm Đến",
    href: "/historical-sites",
    icon: MapPin,
    submenu: [
      { title: "Khu di tích Kim Liên", href: "/historical-sites/kim-lien" },
      { title: "Đền Cuông", href: "/historical-sites/den-cuong" },
      { title: "Truông Bồn", href: "/historical-sites/truong-bon" },
      { title: "Tất cả điểm đến", href: "/historical-sites" },
    ],
  },
  {
    title: "Hành Trình",
    href: "/destinations",
    icon: Calendar,
    submenu: [
      { title: "Hành trình về nguồn", href: "/destinations/ve-nguon" },
      {
        title: "Con đường huyền thoại",
        href: "/destinations/con-duong-huyen-thoai",
      },
      { title: "Di sản tâm linh", href: "/destinations/di-san-tam-linh" },
    ],
  },
  {
    title: "Giới Thiệu",
    href: "/about",
    icon: Info,
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-green-700 rounded-full">
              <Mountain className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-green-700">
              Nghệ An Historical
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="grid gap-4 py-6">
          {menuItems.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>

              {item.submenu && (
                <div className="ml-7 mt-2 space-y-1">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="border-t pt-4 mt-4">
            <div className="space-y-2">
              <Link href="/login" onClick={() => setOpen(false)}>
                <Button className="w-full justify-start bg-green-700 hover:bg-green-800">
                  <LogIn className="mr-2 h-4 w-4" />
                  Đăng nhập
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
