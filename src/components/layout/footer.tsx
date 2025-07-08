import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Nghệ An Historical</h3>
                <p className="text-sm text-gray-300">Du lịch lịch sử văn hóa</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Khám phá vẻ đẹp lịch sử và văn hóa của mảnh đất xứ Nghệ, nơi lưu
              giữ những di tích lịch sử mang đậm bản sắc dân tộc và những câu
              chuyện hào hùng của quê hương Bác Hồ.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-24">
            {" "}
            {/* Thay ml-20 bằng ml-24 để thụt lùi 6rem */}
            <h3 className="text-lg font-semibold text-green-400">
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Hành trình
                </Link>
              </li>
              <li>
                <Link
                  href="/historical-sites"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Điểm đến
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Bản đồ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">
              Điểm đến nổi bật
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/historical-sites/kim-lien"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <MapPin className="h-3 w-3 mr-2 text-green-400" />
                  Khu di tích Kim Liên
                </Link>
              </li>
              <li>
                <Link
                  href="/historical-sites/den-cuong"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <MapPin className="h-3 w-3 mr-2 text-green-400" />
                  Đền Cuông
                </Link>
              </li>
              <li>
                <Link
                  href="/historical-sites/truong-bon"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <MapPin className="h-3 w-3 mr-2 text-green-400" />
                  Truông Bồn
                </Link>
              </li>
              <li>
                <Link
                  href="/historical-sites/thanh-co-vinh"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <MapPin className="h-3 w-3 mr-2 text-green-400" />
                  Thành cổ Vinh
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">
              Liên hệ & Theo dõi
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Thành phố Vinh, Nghệ An, Việt Nam
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">+84 238 1234 567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">
                  info@nghean-historical.vn
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">
                  T2 - CN: 8:00 - 17:00
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Đăng ký nhận tin</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email của bạn"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
                />
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
              <p>© 2025 Nghệ An Historical. Tất cả quyền được bảo lưu.</p>
              <div className="flex gap-4">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Chính sách bảo mật
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Điều khoản sử dụng
                </Link>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <span>Thiết kế bởi </span>
              <span className="text-green-400 font-semibold">
                Nghệ An Historical Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
