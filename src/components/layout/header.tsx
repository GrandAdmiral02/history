"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { SearchButton } from "@/components/search";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, Phone, Mail, Facebook, Youtube } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
// import { useSession } from "next-auth/react";
// import { UserAccountNav } from "@/components/auth/user-account-nav";

const historicalSites = [
  {
    title: "Khu di tích Kim Liên",
    href: "/historical-sites/kim-lien",
    description: "Quê hương Chủ tịch Hồ Chí Minh với làng Sen",
    category: "Đặc biệt",
  },
  {
    title: "Đền Cuông",
    href: "/historical-sites/den-cuong",
    description: "Di tích lịch sử văn hóa cấp quốc gia",
    category: "Tâm linh",
  },
  {
    title: "Truông Bồn",
    href: "/historical-sites/truong-bon",
    description: "Di tích cách mạng lịch sử",
    category: "Cách mạng",
  },
  {
    title: "Đền Quả Sơn",
    href: "/historical-sites/den-qua-son",
    description: "Thờ Mai Hắc Đế tại Đô Lương",
    category: "Tâm linh",
  },
];

const journeys = [
  {
    title: "Hành trình về nguồn",
    href: "/destinations/ve-nguon",
    description: "3 ngày 2 đêm khám phá quê Bác",
    duration: "3N2Đ",
  },
  {
    title: "Con đường huyền thoại",
    href: "/destinations/con-duong-huyen-thoai",
    description: "2 ngày 1 đêm theo chân anh hùng",
    duration: "2N1Đ",
  },
  {
    title: "Di sản tâm linh",
    href: "/destinations/di-san-tam-linh",
    description: "4 ngày 3 đêm thăm đền chùa",
    duration: "4N3Đ",
  },
];

export function Header() {
  // const { data: session } = useSession();

  return (
    <>
      {/* Top bar */}
      <div className="bg-green-700 text-white text-sm">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Hotline: 0238 1234 567</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@nghean-historical.vn</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-green-200 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-green-200 transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-green-700 rounded-full">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-700">
                Nghệ An Historical
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Du lịch di tích lịch sử
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden lg:block">
              <SearchButton />
            </div>

            <div className="hidden md:block">
              <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      <MapPin className="w-4 h-4 mr-2" />
                      Trang Chủ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-background">
                    Điểm Đến
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-6 p-6 md:w-[700px] lg:w-[800px] lg:grid-cols-2">
                      <div>
                        <h3 className="mb-4 text-lg font-semibold text-green-700">Di tích lịch sử</h3>
                        <ul className="space-y-3">
                          {historicalSites.map((site) => (
                            <ListItem
                              key={site.title}
                              title={site.title}
                              href={site.href}
                              className="p-3"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">{site.description}</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                  {site.category}
                                </span>
                              </div>
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 text-lg font-semibold text-green-700">Hành trình du lịch</h3>
                        <ul className="space-y-3">
                          {journeys.map((journey) => (
                            <ListItem
                              key={journey.title}
                              title={journey.title}
                              href={journey.href}
                              className="p-3"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">{journey.description}</span>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                  {journey.duration}
                                </span>
                              </div>
                            </ListItem>
                          ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t">
                          <Link
                            href="/historical-sites"
                            className="text-sm text-green-700 hover:text-green-800 font-medium"
                          >
                            Xem tất cả điểm đến →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/destinations" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Hành Trình
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Giới Thiệu
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
              <div className="lg:hidden">
                <SearchButton />
              </div>
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                    Đăng nhập
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-green-700 hover:bg-green-800">
                    Đăng ký
                  </Button>
                </Link>
              </>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";