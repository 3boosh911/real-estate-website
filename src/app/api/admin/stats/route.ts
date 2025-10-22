import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json(
        { error: 'مطلوب تسجيل الدخول' },
        { status: 401 }
      )
    }

    const token = authHeader.replace('Bearer ', '')
    const decoded = verifyToken(token)
    
    if (!decoded) {
      return NextResponse.json(
        { error: 'رمز الدخول غير صحيح' },
        { status: 401 }
      )
    }

    // التحقق من صلاحيات المدير
    if (decoded.role !== 'owner') {
      return NextResponse.json(
        { error: 'ليس لديك صلاحية للوصول لهذه البيانات' },
        { status: 403 }
      )
    }

    // جلب الإحصائيات
    const [
      totalProperties,
      publishedProperties,
      totalUsers,
      totalMessages,
      propertiesValue
    ] = await Promise.all([
      prisma.property.count(),
      prisma.property.count({ where: { published: true } }),
      prisma.user.count(),
      prisma.contactMessage.count(),
      prisma.property.aggregate({
        where: { published: true },
        _sum: { price: true }
      })
    ])

    const stats = {
      totalProperties,
      publishedProperties,
      totalUsers,
      totalMessages,
      totalValue: propertiesValue._sum.price || 0
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

