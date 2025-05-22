import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Nghệ An Historical</h3>
            <p className="text-sm text-muted-foreground">
              Khám phá vẻ đẹp lịch sử và văn hóa của mảnh đất xứ Nghệ, nơi lưu giữ những di tích lịch sử mang đậm bản sắc dân tộc.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm text-muted-foreground hover:text-foreground">
                  Hành trình
                </Link>
              </li>
              <li>
                <Link href="/historical-sites" className="text-sm text-muted-foreground hover:text-foreground">
                  Điểm đến
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Điểm đến nổi bật</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/historical-sites/kim-lien" className="text-sm text-muted-foreground hover:text-foreground">
                  Khu di tích Kim Liên
                </Link>
              </li>
              <li>
                <Link href="/historical-sites/den-cuong" className="text-sm text-muted-foreground hover:text-foreground">
                  Đền Cuông
                </Link>
              </li>
              <li>
                <Link href="/historical-sites/truong-bon" className="text-sm text-muted-foreground hover:text-foreground">
                  Truông Bồn
                </Link>
              </li>
              <li>
                <Link href="/historical-sites/thanh-co-vinh" className="text-sm text-muted-foreground hover:text-foreground">
                  Thành cổ Vinh
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: info@nghean-historical.vn
              </li>
              <li className="text-sm text-muted-foreground">
                Điện thoại: +84 238 1234 567
              </li>
              <li className="text-sm text-muted-foreground">
                Địa chỉ: Thành phố Vinh, Nghệ An, Việt Nam
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Nghệ An Historical. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
