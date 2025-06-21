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
// import { useSession } from "next-auth/react";
// import { UserAccountNav } from "@/components/auth/user-account-nav";

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
  // const { data: session } = useSession();

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-700">
            Nghệ An Historical
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <SearchButton />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Trang Chủ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Điểm Đến</NavigationMenuTrigger>
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
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Đăng nhập
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-green-700 hover:bg-green-800"
                  >
                    Đăng ký
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
