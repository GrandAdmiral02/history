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
import {
  MapPin,
  Mountain,
  Phone,
  Mail,
  Facebook,
  Youtube,
  ShoppingBag,
  Route,
  Info,
  User,
  Compass,
  LogOut,
  Settings,
} from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const { data: session, status } = useSession();

  return (
    <>
      {/* Main header */}
      <header className="border-b bg-gradient-to-br from-slate-100 via-white to-green-100/60 backdrop-blur-lg sticky top-0 z-50 shadow-2xl border-green-300/70 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-600/10 before:via-green-500/5 before:to-green-600/10 before:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/20 after:via-transparent after:to-black/5 after:pointer-events-none">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-green-800 transition-all duration-300">
                Nghệ An Historical
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block group-hover:text-green-600 transition-colors">
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
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 hover:text-green-700 hover:shadow-md focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-50 data-[state=open]:bg-green-50">
                        <MapPin className="w-4 h-4 mr-2 group-hover:text-green-600 transition-colors" />
                        Trang Chủ
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-background hover:bg-green-50 hover:text-green-700 transition-all duration-300 hover:shadow-md data-[state=open]:bg-green-50">
                      <Compass className="w-4 h-4 mr-2 group-hover:text-green-600 transition-colors" />
                      Điểm Đến
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-6 p-6 md:w-[700px] lg:w-[800px] lg:grid-cols-2">
                        <div>
                          <h3 className="mb-4 text-lg font-semibold text-green-700">
                            Di tích lịch sử
                          </h3>
                          <ul className="space-y-3">
                            {historicalSites.map((site) => (
                              <ListItem
                                key={site.title}
                                title={site.title}
                                href={site.href}
                                className="p-3"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">
                                    {site.description}
                                  </span>
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                    {site.category}
                                  </span>
                                </div>
                              </ListItem>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-4 text-lg font-semibold text-green-700">
                            Hành trình du lịch
                          </h3>
                          <ul className="space-y-3">
                            {journeys.map((journey) => (
                              <ListItem
                                key={journey.title}
                                title={journey.title}
                                href={journey.href}
                                className="p-3"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">
                                    {journey.description}
                                  </span>
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
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 hover:text-green-700 hover:shadow-md focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-50 data-[state=open]:bg-green-50">
                        <Route className="w-4 h-4 mr-2 group-hover:text-green-600 transition-colors" />
                        Hành Trình
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/shop" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-orange-50 hover:text-orange-700 hover:shadow-md focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-orange-50 data-[state=open]:bg-orange-50">
                        <ShoppingBag className="w-4 h-4 mr-2 group-hover:text-orange-600 transition-colors" />
                        Cửa hàng
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 hover:text-green-700 hover:shadow-md focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-50 data-[state=open]:bg-green-50">
                        <Info className="w-4 h-4 mr-2 group-hover:text-green-600 transition-colors" />
                        Giới Thiệu
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center gap-2">
              <MobileMenu />

              <div className="lg:hidden">
                <SearchButton />
              </div>

              <div className="hidden md:flex items-center gap-2">
                <Link href="/login">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Đăng nhập
                  </Button>
                </Link>
              </div>
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
            className,
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
