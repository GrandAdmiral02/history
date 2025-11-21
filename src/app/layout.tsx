import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/providers";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nghệ An Historical - Du lịch lịch sử Nghệ An",
  description: "Khám phá vẻ đẹp văn hóa lịch sử của vùng đất xứ Nghệ, nơi lưu giữ nhiều di tích lịch sử quan trọng của dân tộc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="top-right" richColors />
        </Providers>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </body>
    </html>
  );
}
