import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Kiểm tra kết nối bằng cách đếm số lượng user
    const userCount = await prisma.user.count()

    return NextResponse.json({
      success: true,
      message: 'Kết nối đến cơ sở dữ liệu thành công!',
      data: { userCount }
    })
  } catch (error) {
    console.error('Lỗi kết nối đến cơ sở dữ liệu:', error)
    return NextResponse.json({
      success: false,
      message: 'Lỗi kết nối đến cơ sở dữ liệu',
      error: (error as Error).message
    }, { status: 500 })
  }
}
