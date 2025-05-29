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
import { Button } from "@/components/ui/button";
import { SearchButton } from "@/components/search";
import { UserAccountNav } from "@/components/auth/user-account-nav";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Khu di tích Kim Liên",
    href: "/historical-sites/kim-lien",
    description: "Quê hương Chủ tịch Hồ Chí Minh với làng Sen và đền thờ.",
  },
  {
    title: "Đền Cuông",
    href: "/historical-sites/den-cuong",
    description: "Di tích thờ An Dương Vương và công thần Cao Sơn, Quý Minh.",
  },
  {
    title: "Đền Quả Sơn",
    href: "/historical-sites/den-qua-son",
    description: "Di tích thờ Mai Hắc Đế tại huyện Đô Lương.",
  },
  {
    title: "Thành cổ Vinh",
    href: "/historical-sites/thanh-co-vinh",
    description: "Chứng tích lịch sử với nhiều biến động của xứ Nghệ.",
  },
  {
    title: "Truông Bồn",
    href: "/historical-sites/truong-bon",
    description: "Tưởng nhớ sự hy sinh của Thanh niên xung phong.",
  },
  {
    title: "Mộ bà Hoàng Thị Loan",
    href: "/historical-sites/mo-ba-hoang-thi-loan",
    description: "Nơi an nghỉ của thân mẫu Chủ tịch Hồ Chí Minh.",
  },
];

export function Header() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className="bg-gradient-to-br from-teal-600 via-cyan-500 to-amber-100 border-b border-teal-300/50 shadow-lg sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between py-3 px-4 sm:px-6 md:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-amber-200 hover:text-amber-100 transition-colors duration-300">
            Nghệ An Historical
          </span>
        </Link>

        {/* Navigation and Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Button */}
          <SearchButton
            className="hidden md:block text-gray-100 hover:text-amber-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-full"
            aria-label="Search historical sites"
          />

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-1">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-xs font-medium text-gray-100 hover:bg-amber-200/20 hover:text-amber-100 focus:bg-amber-200/20 focus:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                >
                  Trang Chủ
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-xs text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 focus:bg-amber-200/20 focus:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                  aria-controls="destinations-menu"
                >
                  Điểm Đến
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[350px] gap-2 p-3 md:w-[450px] md:grid-cols-2 lg:w-[550px] bg-white/95 backdrop-blur-lg rounded-xl shadow-md">
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
                <Link
                  href="/destinations"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-xs font-medium text-gray-100 hover:bg-amber-200/20 hover:text-amber-100 focus:bg-amber-200/20 focus:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                >
                  Hành Trình
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/interactive-map"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-xs font-medium text-gray-100 hover:bg-amber-200/20 hover:text-amber-100 focus:bg-amber-200/20 focus:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                >
                  Bản Đồ
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/store"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-xs font-medium text-gray-100 hover:bg-amber-200/20 hover:text-amber-100 focus:bg-amber-200/20 focus:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                >
                  Cửa Hàng
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-xs font-medium text-gray-100 hover:bg-amber-200/20 hover:text-amber-100 focus:bg-amber-200/20 focus:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                >
                  Giới Thiệu
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9 rounded-full text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </Button>

          {/* Authentication Buttons */}
          <div className="flex items-center gap-1">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <>
                <Link href="/login" className="hidden sm:block">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    Đăng nhập
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-teal-500 to-amber-500 text-white hover:from-teal-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-md text-xs"
                  >
                    <span className="hidden sm:inline">Đăng ký</span>
                    <span className="sm:hidden">Đăng nhập</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-teal-600 via-cyan-500 to-amber-100 border-t border-teal-300/50 shadow-lg">
          <div className="container py-3 px-4 sm:px-6 flex flex-col gap-2">
            <Link
              href="/"
              className="text-xs text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 px-3 py-1.5 rounded-md transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Trang Chủ
            </Link>
            <div className="relative">
              <button
                className="w-full text-left text-xs text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 px-3 py-1.5 rounded-md transition-all duration-300"
                aria-expanded="true"
              >
                Điểm Đến
              </button>
              <ul className="mt-1 pl-4 flex flex-col gap-1">
                {components.map((component) => (
                  <li key={component.title}>
                    <Link
                      href={component.href}
                      className="block text-xs text-gray-200 hover:text-amber-100 hover:bg-amber-200/20 px-3 py-1 rounded-md transition-all duration-300"
                      onClick={toggleMobileMenu}
                    >
                      {component.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/destinations"
              className="text-xs text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 px-3 py-1.5 rounded-md transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Hành Trình
            </Link>
            <Link
              href="/interactive-map"
              className="text-xs text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 px-3 py-1.5 rounded-md transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Bản Đồ
            </Link>
            <Link
              href="/store"
              className="text-xs text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 px-3 py-1.5 rounded-md transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Cửa Hàng
            </Link>
            <Link
              href="/about"
              className="text-xs text-gray-100 hover:text-amber-100 hover:bg-amber-200/20 px-3 py-1.5 rounded-md transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Giới Thiệu
            </Link>
            {/* Social Links for Mobile */}
            <div className="flex gap-3 mt-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-100 hover:text-amber-100 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-100 hover:text-amber-100 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.771.13 4.407.393 3.296 1.504 2.185 2.615 1.922 3.979 1.864 5.26 1.806 6.54 1.792 6.949 1.792 12s.014 5.46.072 6.74c.058 1.281.321 2.645 1.432 3.756 1.111 1.111 2.475 1.374 3.756 1.432 1.28.058 1.689.072 6.948.072s5.668-.014 6.948-.072c1.281-.058 2.645-.321 3.756-1.432 1.111-1.111 1.374-2.475 1.432-3.756.058-1.28.072-1.689.072-6.948s-.014-5.668-.072-6.948c-.058-1.281-.321-2.645-1.432-3.756C21.645.393 20.281.13 19 .072 17.72.014 17.311 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-100 hover:text-amber-100 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.46 6c-.77.34-1.6.57-2.46.67 1.11-.67 1.96-1.74 2.36-3.02-.84.5-1.77.86-2.76 1.05A4.34 4.34 0 0016.34 3c-2.4 0-4.34 1.94-4.34 4.34 0 .34.04.68.11 1-3.62-.18-6.83-1.92-8.98-4.56-.38.64-.6 1.39-.6 2.18 0 1.5.76 2.83 1.92 3.61-.71-.02-1.37-.22-1.95-.54v.05c0 2.1 1.49 3.85 3.47 4.25-.36.1-.74.16-1.13.16-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.97 4.05 3.01-1.48 1.16-3.34 1.85-5.36 1.85-.35 0-.69-.02-1.03-.07 1.91 1.23 4.18 1.94 6.62 1.94 7.94 0 12.29-6.58 12.29-12.29 0-.19 0-.37-.01-.56.84-.61 1.57-1.37 2.15-2.24-.77.34-1.6.57-2.46.67z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
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
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-teal-100 hover:text-teal-900 focus:bg-teal-100 focus:text-teal-900",
            className
          )}
          {...props}
        >
          <div className="text-xs font-medium leading-none text-teal-900">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-gray-600">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";