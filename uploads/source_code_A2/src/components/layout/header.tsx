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
    <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-green-700 transition-colors duration-200 hover:text-green-800">
            Nghệ An Historical
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:block">
            <SearchButton />
          </div>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Trang Chủ
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-green-700">Điểm Đến</NavigationMenuTrigger>
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
                <Link href="/destinations" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Hành Trình
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/interactive-map" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Bản Đồ
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-green-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Giới Thiệu
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button - only show on small screens */}
          <div className="block md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9 border rounded-md hover:bg-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <>
                <Link href="/login" className="hidden sm:block">
                  <Button variant="ghost" size="sm" className="hover:text-green-700">
                    Đăng nhập
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="default" size="sm" className="bg-green-700 hover:bg-green-800 transition-all duration-300">
                    <span className="hidden sm:inline">Đăng ký</span>
                    <span className="sm:hidden">Đăng nhập</span>
                  </Button>
                </Link>
              </>
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
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";