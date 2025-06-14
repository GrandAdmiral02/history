import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-600 via-cyan-500 to-amber-100 border-t border-teal-300/50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-amber-200">
                Nghệ An Historical
              </h3>
            </div>
            <p className="text-xs text-gray-100 leading-relaxed max-w-xs">
              Khám phá di sản văn hóa và lịch sử phong phú của xứ Nghệ, nơi lưu giữ những câu chuyện và dấu ấn dân tộc.
            </p>
            <div className="flex space-x-2 mt-2">
              {[
                {
                  href: "https://facebook.com",
                  label: "Facebook",
                  icon: (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  ),
                },
                {
                  href: "https://instagram.com",
                  label: "Instagram",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  ),
                },
                {
                  href: "https://x.com",
                  label: "X",
                  icon: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  ),
                },
                {
                  href: "https://youtube.com",
                  label: "YouTube",
                  icon: (
                    <>
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-amber-100 transform hover:scale-110 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-full p-1"
                  aria-label={label}
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
                    className="h-4 w-4"
                  >
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Liên kết nhanh</h3>
            <ul className="space-y-1.5">
              {[
                { href: "/", text: "Trang chủ" },
                { href: "/destinations", text: "Hành trình" },
                { href: "/historical-sites", text: "Điểm đến" },
                { href: "/interactive-map", text: "Bản đồ" },
                { href: "/about", text: "Giới thiệu" },
              ].map(({ href, text }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-gray-200 hover:text-amber-100 flex items-center transition-all duration-200 ease-in-out hover:translate-x-1 group focus:outline-none focus:ring-2 focus:ring-amber-300 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1.5 text-amber-100 group-hover:text-amber-200 transition-colors duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlighted Destinations Section */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Điểm đến nổi bật</h3>
            <ul className="space-y-1.5">
              {[
                { href: "/historical-sites/kim-lien", text: "Khu di tích Kim Liên" },
                { href: "/historical-sites/den-cuong", text: "Đền Cuông" },
                { href: "/historical-sites/truong-bon", text: "Truông Bồn" },
                { href: "/historical-sites/thanh-co-vinh", text: "Thành cổ Vinh" },
              ].map(({ href, text }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-gray-200 hover:text-amber-100 flex items-center transition-all duration-200 ease-in-out hover:translate-x-1 group focus:outline-none focus:ring-2 focus:ring-amber-300 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1.5 text-amber-100 group-hover:text-amber-200 transition-colors duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Liên hệ</h3>
            <ul className="space-y-1.5">
              {[
                {
                  icon: (
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
                  ),
                  text: "Email: info@nghean-historical.vn",
                  href: "mailto:info@nghean-historical.vn",
                },
                {
                  icon: (
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  ),
                  text: "Điện thoại: +84 238 1234 567",
                  href: "tel:+842381234567",
                },
                {
                  icon: (
                    <>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </>
                  ),
                  text: "Địa chỉ: Thành phố Vinh, Nghệ An, Việt Nam",
                },
              ].map(({ icon, text, href }, index) => (
                <li key={index} className="flex items-start group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1.5 mt-0.5 text-amber-100 group-hover:text-amber-200 transition-all duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icon}
                  </svg>
                  {href ? (
                    <a
                      href={href}
                      className="text-xs text-gray-200 group-hover:text-amber-100 transition-colors duration-200"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-xs text-gray-200 group-hover:text-amber-100 transition-colors duration-200">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-300/50 mt-4 pt-3 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-200 bg-teal-700/80 backdrop-blur-sm rounded-md shadow-sm p-2">
          <p className="mb-2 sm:mb-0">© 2025 Nghệ An Historical. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-3">
            <Link
              href="/privacy-policy"
              className="text-xs text-gray-200 hover:text-amber-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-gray-200 hover:text-amber-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded"
            >
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}