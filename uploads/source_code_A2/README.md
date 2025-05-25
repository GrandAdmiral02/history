# Du Lịch Lịch Sử Nghệ An

Ứng dụng web giới thiệu và quản lý tour du lịch khám phá các di tích lịch sử tại Nghệ An.

## Giới thiệu

Dự án này là một ứng dụng web được xây dựng bằng Next.js để quảng bá du lịch lịch sử tại Nghệ An - "vùng đất địa linh nhân kiệt" với hơn 1.400 di tích lịch sử văn hóa.

## Tính năng chính

- **Khám phá di tích**: Thông tin chi tiết về các di tích lịch sử quan trọng
- **Bản đồ tương tác**: Hiển thị vị trí các điểm di tích trên bản đồ
- **Đặt tour**: Hệ thống đặt tour du lịch trực tuyến
- **Quản lý người dùng**: Đăng ký, đăng nhập, quản lý hồ sơ
- **Thanh toán**: Tích hợp hệ thống thanh toán trực tuyến
- **Admin dashboard**: Quản lý người dùng, booking và thanh toán

## Công nghệ sử dụng

- **Framework**: Next.js 15 (App Router)
- **Database**: PostgreSQL với Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI + Tailwind CSS
- **Maps**: Leaflet + React Leaflet
- **Payment**: Stripe integration
- **Deployment**: Netlify

## Cài đặt và chạy

1. Clone repository:
```bash
git clone https://github.com/GrandAdmiral02/source_code_A2.git
cd source_code_A2
```

2. Cài đặt dependencies:
```bash
bun install
```

3. Cấu hình environment variables:
```bash
# Copy từ .env và cập nhật các giá trị cần thiết
cp .env .env.local
```

4. Generate Prisma client:
```bash
bunx prisma generate
```

5. Chạy development server:
```bash
bun run dev
```

6. Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## Scripts có sẵn

- `bun run dev` - Chạy development server
- `bun run build` - Build ứng dụng production
- `bun run start` - Chạy production server
- `bun run lint` - Chạy linter và type check
- `bun run format` - Format code
- `bunx prisma studio` - Mở Prisma Studio
- `bunx prisma generate` - Generate Prisma client
- `bunx prisma migrate dev` - Chạy database migrations
- `bunx prisma db seed` - Seed database với dữ liệu mẫu

## Cấu trúc project

```
src/
├── app/                 # App Router pages
├── components/          # React components
├── lib/                # Utilities và configurations
├── styles/             # CSS files
prisma/                 # Database schema và migrations
public/                 # Static assets
```

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## License

Dự án này được phát triển cho mục đích giáo dục và quảng bá du lịch Nghệ An.
