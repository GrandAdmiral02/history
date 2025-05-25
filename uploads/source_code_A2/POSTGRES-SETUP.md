# Hướng dẫn thiết lập PostgreSQL cho Dự án Nghệ An Historical

Đây là hướng dẫn để thiết lập PostgreSQL và kết nối với ứng dụng Nghệ An Historical.

## 1. Cài đặt PostgreSQL

### Trên Windows:
1. Tải PostgreSQL từ [trang chủ PostgreSQL](https://www.postgresql.org/download/windows/)
2. Cài đặt theo hướng dẫn và ghi nhớ mật khẩu cho tài khoản postgres
3. Trong quá trình cài đặt, đảm bảo chọn cài pgAdmin (công cụ quản lý giao diện đồ họa)

### Trên macOS:
```bash
brew install postgresql
brew services start postgresql
```

### Trên Linux (Ubuntu):
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## 2. Tạo cơ sở dữ liệu

### Sử dụng giao diện dòng lệnh:

1. Truy cập PostgreSQL:
```bash
# Windows (trong Command Prompt sau khi thêm PostgreSQL vào PATH)
psql -U postgres

# Linux
sudo -u postgres psql
```

2. Tạo cơ sở dữ liệu:
```sql
CREATE DATABASE nghe_an_historical;
```

### Sử dụng pgAdmin:
1. Mở pgAdmin
2. Kết nối đến máy chủ PostgreSQL
3. Nhấp chuột phải vào "Databases" và chọn "Create" > "Database..."
4. Nhập tên cơ sở dữ liệu "nghe_an_historical" và lưu

## 3. Cấu hình kết nối trong ứng dụng

1. Tạo hoặc chỉnh sửa file `.env` tại thư mục gốc của dự án:
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/nghe_an_historical?schema=public"
```

2. Thay thế `password` bằng mật khẩu của tài khoản postgres của bạn

## 4. Chạy Migration và Seeding

1. Generate Prisma Client:
```bash
bun prisma:generate
```

2. Chạy migration để tạo các bảng trong database:
```bash
bun prisma:migrate:dev
```

3. Chạy seed để thêm dữ liệu mẫu:
```bash
bun prisma:db:seed
```

## 5. Kiểm tra kết nối

1. Khởi động ứng dụng:
```bash
bun dev
```

2. Truy cập API endpoint kiểm tra kết nối:
```
http://localhost:3000/api/db-test
```

3. Mở Prisma Studio để xem và quản lý dữ liệu:
```bash
bun prisma:studio
```
Prisma Studio sẽ chạy trên: http://localhost:5555

## 6. Tài khoản mặc định sau khi seeding

### Tài khoản Admin:
- Email: admin@nghean-historical.vn
- Password: Admin@123

### Tài khoản người dùng:
- Email: nguyenvana@example.com
- Password: Pass@123

## 7. Khắc phục sự cố

### Không thể kết nối đến PostgreSQL:
- Kiểm tra PostgreSQL đang chạy
- Kiểm tra chuỗi kết nối trong `.env`
- Kiểm tra tường lửa và quyền truy cập

### Lỗi migration:
```bash
# Reset database và chạy lại migration
bun prisma:migrate:reset
```

### Xóa dữ liệu hiện tại và seeding lại:
```bash
bun prisma:db:seed
```
