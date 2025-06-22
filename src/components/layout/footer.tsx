import Link from "next/link";
import {
  Mountain,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Instagram,
  Star,
  Award,
  Users,
  Calendar,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-100 via-slate-50 to-green-50/40 text-slate-800 border-t border-slate-200">
      {/* Stats section */}
      <div className="border-b border-slate-200/80">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-700">100K+</div>
              <div className="text-sm text-slate-600">
                Du khách đã tham quan
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400">50+</div>
              <div className="text-sm text-slate-400">Điểm đến lịch sử</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Award className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400">375</div>
              <div className="text-sm text-slate-400">Di tích đã xếp hạng</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Star className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400">4.8/5</div>
              <div className="text-sm text-slate-400">Đánh giá từ du khách</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
                <Mountain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">
                  Nghệ An Historical
                </h3>
                <p className="text-sm text-slate-400">
                  Du lịch di tích lịch sử
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Khám phá vẻ đẹp lịch sử và văn hóa của mảnh đất xứ Nghệ, nơi lưu
              giữ những di tích lịch sử mang đậm bản sắc dân tộc. Chúng tôi tự
              hào mang đến những trải nghiệm du lịch ý nghĩa và đáng nhớ.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors flex items-center"
                >
                  <span>Trang chủ</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/historical-sites"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors"
                >
                  Điểm đến di tích
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors"
                >
                  Hành trình du lịch
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors"
                >
                  Đặt tour
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">
              Điểm đến nổi bật
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/historical-sites/kim-lien"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors group"
                >
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-2 text-green-500" />
                    Khu di tích Kim Liên
                  </div>
                  <div className="text-xs text-slate-500 ml-5">
                    Quê hương Bác Hồ
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/historical-sites/den-cuong"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors group"
                >
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-2 text-green-500" />
                    Đền Cuông
                  </div>
                  <div className="text-xs text-slate-500 ml-5">
                    Di tích cấp quốc gia
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/historical-sites/truong-bon"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors group"
                >
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-2 text-green-500" />
                    Truông Bồn
                  </div>
                  <div className="text-xs text-slate-500 ml-5">
                    Di tích cách mạng
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/ve-nguon"
                  className="text-sm text-slate-300 hover:text-green-400 transition-colors group"
                >
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-2 text-blue-500" />
                    Hành trình về nguồn
                  </div>
                  <div className="text-xs text-slate-500 ml-5">
                    Tour 3 ngày 2 đêm
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">
              Thông tin liên hệ
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-300">
                    Thành phố Vinh, Nghệ An, Việt Nam
                  </p>
                  <p className="text-xs text-slate-500">
                    Khu vực trung tâm, gần các di tích
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-sm text-slate-300">0238 1234 567</p>
                  <p className="text-xs text-slate-500">Hỗ trợ 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-sm text-slate-300">
                    info@nghean-historical.vn
                  </p>
                  <p className="text-xs text-slate-500">Phản hồi trong 24h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-sm text-slate-300">Thứ 2 - Chủ nhật</p>
                  <p className="text-xs text-slate-500">7:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-slate-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-400">
                © 2025 Nghệ An Historical. Tất cả quyền được bảo lưu.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Được phát triển với ❤️ cho du lịch Nghệ An
              </p>
            </div>
            <div className="flex items-center space-x-6 text-xs text-slate-500">
              <Link
                href="/privacy"
                className="hover:text-green-400 transition-colors"
              >
                Chính sách bảo mật
              </Link>
              <Link
                href="/terms"
                className="hover:text-green-400 transition-colors"
              >
                Điều khoản sử dụng
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-green-400 transition-colors"
              >
                Sơ đồ trang web
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
