# Todos cho dự án Nghệ An Historical

## Các trang đã hoàn thành
- [x] Trang chủ (home page)
- [x] Trang chi tiết Khu di tích Kim Liên
- [x] Trang danh sách các điểm đến lịch sử
- [x] Trang Giới thiệu
- [x] Trang Hành trình
- [x] Trang bản đồ tương tác (bản đồ đang tạch, ko hiện)

## Công việc cần làm tiếp theo
- [x] Tạo trang chi tiết cho các di tích khác:
  - [x] Đền Cuông
  - [x] Truông Bồn
  - [x] Đền Quả Sơn
  - [x] Thành cổ Vinh
  - [x] Mộ bà Hoàng Thị Loan
- [x] Tạo trang chi tiết cho các hành trình:
  - [x] Hành trình về nguồn
  - [x] Con đường huyền thoại
  - [x] Di sản văn hóa tâm linh
  - [x] Dấu ấn danh nhân
- [x] Thêm bản đồ tương tác chỉ dẫn đến các di tích
- [ ] Tạo trang Blog/Tin tức với các bài viết về du lịch Nghệ An
- [ ] Tạo trang Liên hệ
- [ ] Tối ưu hóa SEO cho tất cả các trang
- [ ] Cải thiện hiệu suất trang web
- [ ] Thêm tính năng đa ngôn ngữ (tiếng Việt, tiếng Anh)

## Công việc đã hoàn thành gần đây
- [x] Thêm tính năng tìm kiếm để người dùng dễ dàng tìm kiếm các điểm đến
- [x] Thêm bản đồ tương tác cho các di tích lịch sử
- [x] Thêm xác thực email khi đăng ký

## Công việc đang thực hiện
- [in_progress] Hoàn thiện tính năng đăng ký, đăng nhập và phân quyền người dùng
- [in_progress] Hoàn thiện hệ thống đặt tour và thanh toán với nhiều phương thức
- [completed] Tạo trang chi tiết cho các di tích còn lại (Đền Quả Sơn, Thành cổ Vinh, Mộ bà Hoàng Thị Loan)
- [completed] Tạo trang chi tiết cho các hành trình còn thiếu (Con đường huyền thoại, Di sản văn hóa tâm linh, Dấu ấn danh nhân)
- [completed] Thêm tính năng đặt tour và thanh toán trực tuyến (cơ bản)
- [completed] Tạo trang chi tiết cho Truông Bồn
- [completed] Thiết lập kết nối với cơ sở dữ liệu PostgreSQL
- [completed] Thêm bản đồ tương tác chỉ dẫn đến các di tích
- [completed] Thêm xác thực email khi đăng ký

## Công việc mới
- [x] Tạo bảng dữ liệu người dùng (users)
- [x] Tạo bảng dữ liệu đặt tour (bookings)
- [x] Tạo bảng dữ liệu thanh toán (payments)
- [x] Tạo trang quản lý tài khoản người dùng
- [x] Tạo trang quản lý đặt tour và thanh toán
- [x] Tạo trang admin để quản lý người dùng, tour, đặt tour và thanh toán
- [x] Thêm phân quyền người dùng (user, tour guide, admin)
- [x] Cấu hình môi trường production cho cơ sở dữ liệu PostgreSQL
- [x] Kết nối với Neon Postgres

## Công việc cần làm trong đợt này
- [in_progress] Cải thiện UI/UX cho các form đăng ký và đăng nhập
- [x] Thêm xác thực email khi đăng ký
- [in_progress] Bổ sung chức năng quên mật khẩu
- [ ] Cải thiện hồ sơ người dùng với nhiều thông tin hơn
- [ ] Tăng cường bảo mật cho tài khoản
- [ ] Tạo API thực sự cho đặt tour và lưu vào database
- [ ] Hoàn thiện luồng thanh toán và tích hợp cổng thanh toán thực
- [ ] Bổ sung trang xác nhận sau khi đặt tour và thanh toán thành công
- [ ] Thêm trang quản lý lịch sử đặt tour cho người dùng
- [ ] Phát triển admin dashboard toàn diện hơn

## Ý tưởng bổ sung
- [ ] Thêm tính năng đánh giá và bình luận
- [ ] Tạo trang Thư viện ảnh với hình ảnh chất lượng cao về các di tích
- [x] Tạo tính năng bản đồ tương tác cho các di tích
- [ ] Tạo tính năng Tour ảo 360° cho một số di tích quan trọng
- [ ] Phát triển ứng dụng di động đồng bộ với website
- [ ] Tích hợp hệ thống thông báo realtime cho người dùng về trạng thái đặt tour, thanh toán
- [ ] Thêm tính năng chat trực tuyến với hỗ trợ viên

# Danh sách công việc cần làm

## Yêu cầu từ người dùng:
1. ✅ Giải nén dự án
2. ✅ Làm cho hình ảnh hiện đủ (đã tải thêm hình ảnh)
3. ✅ Thay map hiện tại thành Google Maps và chỉ hiện ở thanh điều hướng (đã hoàn thành)
4. ✅ Cải thiện trang chủ (đã thêm video và gallery section)
5. ✅ Clone một số link YouTube và gắn vào cho sinh động (đã hoàn thành)

## Chi tiết các tác vụ:

### Hình ảnh:
- ✅ Kiểm tra tất cả trang để tìm hình ảnh bị thiếu
- ✅ Tìm và tải thêm hình ảnh cho các di tích (truong-bon-aerial.jpg, di-tich-nghe-an.jpg)
- ✅ Cập nhật đường dẫn hình ảnh trong code

### Google Maps:
- ✅ Thay thế Leaflet map bằng Google Maps (tạo component google-map.tsx)
- ✅ Bỏ map khỏi trang chủ (thay bằng section video)
- ✅ Chỉ giữ map ở trang /interactive-map

### Cải thiện trang chủ:
- ✅ Thêm section video YouTube (3 video về du lịch Nghệ An)
- ✅ Thêm section gallery với hình ảnh đẹp
- ✅ Cải thiện layout và animation

### Video YouTube:
- ✅ Tìm các video YouTube về du lịch Nghệ An
- ✅ Tích hợp video vào trang chủ (3 video embedded)
- ✅ Tạo grid layout cho video

## Hoàn thành:
- Đã bỏ map khỏi trang chủ và thay bằng section video YouTube sinh động
- Đã tạo component Google Maps thay thế hoàn toàn cho Leaflet
- Đã thêm section gallery với hình ảnh mới được tải về
- Đã tích hợp 3 video YouTube chất lượng về du lịch Nghệ An
- ✅ Đã sửa lỗi video YouTube bằng cách thay iframe bằng thumbnail + link
- Trang chủ giờ đây sinh động, tải nhanh và hấp dẫn hơn nhiều

## Cải tiến video section:
- Thay iframe embed bằng thumbnail image để tải nhanh hơn
- Thêm play button với animation hover đẹp mắt
- Click vào thumbnail sẽ mở video trên YouTube tab mới
- Gradient background khác nhau cho từng video
- Responsive design tốt trên mọi thiết bị

## ✅ Sửa lỗi hình ảnh:
- Đã thay thế kim-lien-1.jpg bằng hình ảnh chất lượng cao (301KB)
- Đã thêm kim-lien-aerial.jpg với toàn cảnh khu di tích (430KB)
- Đã thêm lang-sen.jpg - hình ảnh đẹp về làng Sen (274KB)
- Đã thêm que-huong-bac.jpg - ảnh aerial về quê hương Bác (384KB)
- Tất cả hình ảnh giờ đã có kích thước lớn và hiển thị đúng
- Không còn file corrupted hoặc kích thước nhỏ
