import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center space-x-1 text-sm text-muted-foreground",
        className,
      )}
    >
      <Link
        href="/"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Trang chủ</span>
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4" />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.title}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

// Hook để tự động tạo breadcrumb từ pathname
export function useBreadcrumb(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbMap: Record<string, string> = {
    "historical-sites": "Điểm đến",
    destinations: "Hành trình",
    about: "Giới thiệu",
    login: "Đăng nhập",
    register: "Đăng ký",
    booking: "Đặt tour",
    "kim-lien": "Khu di tích Kim Liên",
    "den-cuong": "Đền Cuông",
    "truong-bon": "Truông Bồn",
    "ve-nguon": "Hành trình về nguồn",
  };

  const items: BreadcrumbItem[] = [];
  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const title = breadcrumbMap[segment] || segment;

    items.push({
      title,
      href: index < segments.length - 1 ? currentPath : undefined,
    });
  });

  return items;
}
