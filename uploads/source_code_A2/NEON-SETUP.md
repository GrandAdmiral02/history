# Kết nối Neon Postgres cho Dự án Du lịch Lịch sử Nghệ An

## Giới thiệu về Neon Postgres

Neon là một dịch vụ PostgreSQL serverless được quản lý hoàn toàn trên đám mây, cung cấp các tính năng:
- Tách biệt lưu trữ và tính toán
- Khả năng mở rộng tự động
- Phân tách tính toán
- Branching cơ sở dữ liệu

## Thông tin về Dự án Neon đã Cấu hình

Dự án Neon đã được tạo với các thông tin sau:

- **Tên dự án**: nghe-an-historical-tourism
- **ID dự án**: young-shape-97231753
- **Nhánh mặc định**: main (ID: br-divine-base-a5oase8i)
- **Cơ sở dữ liệu mặc định**: neondb
- **Vai trò (Role)**: neondb_owner

## Chuỗi Kết nối (Connection String)

Chuỗi kết nối được cấu hình trong file `.env` của dự án như sau:

```
DATABASE_URL="postgresql://neondb_owner:npg_e4dj8rzqsFGS@ep-wild-snowflake-a55aoszn-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

## Cách Thiết lập Kết nối Neon Postgres cho Dự án

### 1. Đăng ký và Tạo Dự án Neon (Đã hoàn thành)

1. Đăng ký tài khoản tại [Neon](https://console.neon.tech)
2. Tạo dự án mới "nghe-an-historical-tourism"
3. Lấy chuỗi kết nối từ Neon Console

### 2. Cấu hình Prisma với Neon

1. Đảm bảo file `prisma/schema.prisma` có cấu hình provider là PostgreSQL:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. Cập nhật file `.env` với chuỗi kết nối Neon (Đã hoàn thành)

### 3. Khởi tạo Prisma Client

Không cần thay đổi file `src/lib/prisma.ts` vì nó đã được cấu hình đúng để sử dụng biến môi trường `DATABASE_URL`.

### 4. Áp dụng Schema và Khởi tạo Dữ liệu

Để áp dụng schema Prisma và khởi tạo dữ liệu mẫu, chạy các lệnh sau:

```bash
# Đồng bộ schema với cơ sở dữ liệu
npx prisma db push

# Khởi tạo dữ liệu mẫu (nếu cần)
npx prisma db seed
```

## Kiểm tra Kết nối

Để kiểm tra kết nối đến Neon Postgres, có thể sử dụng API endpoint `/api/db-test` đã được cấu hình trong dự án.

## Quản lý Cơ sở dữ liệu Neon

Để quản lý cơ sở dữ liệu Neon:

1. Truy cập [Neon Console](https://console.neon.tech)
2. Chọn dự án "nghe-an-historical-tourism"
3. Sử dụng SQL Editor để thực hiện các truy vấn SQL trực tiếp
4. Xem và quản lý chi tiết kết nối, nhánh, và cấu hình

## Lưu ý Quan trọng

1. **Bảo mật**: Không công khai chuỗi kết nối Neon trong mã nguồn hoặc push lên repository công khai.
2. **Pooling kết nối**: Neon sử dụng pooling kết nối mặc định. Trong môi trường production, có thể cần điều chỉnh cấu hình pooling để tối ưu hiệu suất.
3. **Chuyển đổi từ cơ sở dữ liệu local**: Khi chuyển từ cơ sở dữ liệu PostgreSQL local sang Neon, cần lưu ý về sự khác biệt trong tên cơ sở dữ liệu và cấu trúc:
   - Local: `nghe_an_historical`
   - Neon: `neondb`

## Tài liệu Tham khảo

- [Tài liệu chính thức của Neon](https://neon.tech/docs)
- [Tài liệu Prisma với Neon](https://neon.tech/docs/guides/prisma)
- [Quản lý kết nối trong Neon](https://neon.tech/docs/connect/connection-pooling)