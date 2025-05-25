import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Bắt đầu seeding dữ liệu...')

  // Xóa dữ liệu cũ để tránh trùng lặp
  await prisma.payment.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.tour.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()

  // Tạo người dùng admin mặc định
  const hashedPassword = await bcrypt.hash('Admin@123', 10)
  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@nghean-historical.vn',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })
  console.log('Đã tạo admin:', admin.email)

  // Tạo một số người dùng thông thường
  const password = await bcrypt.hash('Pass@123', 10)
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        password,
        phone: '0901234567',
        address: 'Hà Nội, Việt Nam',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Trần Thị B',
        email: 'tranthib@example.com',
        password,
        phone: '0912345678',
        address: 'Tp. Hồ Chí Minh, Việt Nam',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Lê Văn C',
        email: 'levanc@example.com',
        password,
        phone: '0987654321',
        address: 'Nghệ An, Việt Nam',
      },
    }),
  ])
  console.log(`Đã tạo ${users.length} người dùng`)

  // Tạo các tour du lịch
  const tours = await Promise.all([
    prisma.tour.create({
      data: {
        name: 'Hành trình về nguồn',
        description: 'Khám phá quê hương Bác Hồ qua các di tích Kim Liên, làng Sen, mộ bà Hoàng Thị Loan.',
        price: 990000,
        duration: '3 ngày 2 đêm',
        location: 'Nam Đàn, Nghệ An',
        image: 'https://ext.same-assets.com/4052699563/777305328.jpeg',
        maxPeople: 20,
      },
    }),
    prisma.tour.create({
      data: {
        name: 'Con đường huyền thoại',
        description: 'Tham quan các điểm di tích cách mạng như Truông Bồn, Cột mốc số 0 đường Hồ Chí Minh.',
        price: 750000,
        duration: '2 ngày 1 đêm',
        location: 'Đô Lương, Nghệ An',
        image: 'https://ext.same-assets.com/3334769225/3220782747.jpeg',
        maxPeople: 15,
      },
    }),
    prisma.tour.create({
      data: {
        name: 'Di sản văn hóa tâm linh',
        description: 'Thăm viếng các đền chùa nổi tiếng như Đền Cuông, Đền Quả Sơn, và các di tích tâm linh khác.',
        price: 1200000,
        duration: '4 ngày 3 đêm',
        location: 'Đô Lương, Nam Đàn, Nghệ An',
        image: 'https://ext.same-assets.com/3334769225/3110326546.jpeg',
        maxPeople: 25,
      },
    }),
  ])
  console.log(`Đã tạo ${tours.length} tour du lịch`)

  // Tạo một số đơn đặt tour
  const bookings = await Promise.all([
    prisma.booking.create({
      data: {
        userId: users[0].id,
        tourId: tours[0].id,
        departureDate: new Date('2025-06-15'),
        participants: 2,
        totalPrice: tours[0].price * 2,
        notes: 'Cần hỗ trợ đưa đón tại sân bay Vinh',
        status: 'CONFIRMED',
      },
    }),
    prisma.booking.create({
      data: {
        userId: users[1].id,
        tourId: tours[1].id,
        departureDate: new Date('2025-07-20'),
        participants: 4,
        totalPrice: tours[1].price * 4,
        notes: 'Cần phòng gia đình',
        status: 'PENDING',
      },
    }),
    prisma.booking.create({
      data: {
        userId: users[2].id,
        tourId: tours[2].id,
        departureDate: new Date('2025-08-10'),
        participants: 1,
        totalPrice: tours[2].price,
        status: 'CONFIRMED',
      },
    }),
  ])
  console.log(`Đã tạo ${bookings.length} đơn đặt tour`)

  // Tạo một số thanh toán
  const payments = await Promise.all([
    prisma.payment.create({
      data: {
        bookingId: bookings[0].id,
        amount: bookings[0].totalPrice,
        paymentMethod: 'CREDIT_CARD',
        paymentStatus: 'PAID',
        transactionId: 'TXN' + Math.floor(Math.random() * 10000000),
        paymentDetails: {
          cardType: 'Visa',
          lastFourDigits: '4242',
        },
      },
    }),
    prisma.payment.create({
      data: {
        bookingId: bookings[2].id,
        amount: bookings[2].totalPrice * 0.5, // Đặt cọc 50%
        paymentMethod: 'BANK_TRANSFER',
        paymentStatus: 'PAID',
        transactionId: 'TXN' + Math.floor(Math.random() * 10000000),
        paymentDetails: {
          bankName: 'VietcomBank',
          accountNumber: 'XXXXXX1234',
        },
      },
    }),
  ])
  console.log(`Đã tạo ${payments.length} giao dịch thanh toán`)

  console.log('Seeding hoàn tất!')
}

main()
  .catch((e) => {
    console.error('Lỗi trong quá trình seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
