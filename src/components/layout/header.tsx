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
import { useSession } from "next-auth/react";
import { UserAccountNav } from "@/components/auth/user-account-nav";
import {
  MapPin,
  ShoppingBag,
  Home,
  Compass,
  Info,
  BookOpen,
} from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Khu di tích Kim Liên",
    href: "/historical-sites/kim-lien",
    description:
      "Quê hương Chủ tịch Hồ Chí Minh với làng Sen, đền thờ Chủ tịch Hồ Chí Minh và Khu di tích Kim Liên.",
  },
  {
    title: "Đền Cuông",
    href: "/historical-sites/den-cuong",
    description:
      "Di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương và công thần Cao Sơn, Quý Minh.",
  },
  {
    title: "Đền Quả Sơn",
    href: "/historical-sites/den-qua-son",
    description:
      "Di tích lịch sử văn hóa cấp quốc gia tại huyện Đô Lương, thờ Mai Hắc Đế.",
  },
  {
    title: "Thành cổ Vinh",
    href: "/historical-sites/thanh-co-vinh",
    description:
      "Chứng tích lịch sử và nơi ghi lại dấu ấn nhiều biến động của xứ Nghệ.",
  },
  {
    title: "Truông Bồn",
    href: "/historical-sites/truong-bon",
    description:
      "Nơi tưởng nhớ sự hy sinh anh dũng của Thanh niên xung phong trong chiến tranh.",
  },
  {
    title: "Mộ bà Hoàng Thị Loan",
    href: "/historical-sites/mo-ba-hoang-thi-loan",
    description:
      "Nơi an nghỉ của thân mẫu Chủ tịch Hồ Chí Minh tại núi Động Tranh, xã Nam Giang, huyện Nam Đàn.",
  },
];

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="border-b bg-green-50 sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">NH</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-green-700">
              Nghệ An Historical
            </span>
            <span className="text-xs text-muted-foreground">
              Khám phá di sản lịch sử xứ Nghệ
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <SearchButton />

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <Home className="h-4 w-4 mr-2" />
                    Trang Chủ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-green-100 hover:text-green-700">
                  <Compass className="h-4 w-4 mr-2" />
                  Điểm Đến
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/destinations" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Hành Trình
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/shop" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Cửa Hàng
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/map" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <MapPin className="h-4 w-4 mr-2" />
                    Bản Đồ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <Info className="h-4 w-4 mr-2" />
                    Giới Thiệu
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-green-100 hover:text-green-700"
                >
                  Admin
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-green-700 focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
