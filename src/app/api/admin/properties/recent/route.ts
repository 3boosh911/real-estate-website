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

    // جلب أحدث العقارات
    const properties = await prisma.property.findMany({
      take: 5,
      orderBy: { listedAt: 'desc' },
      include: {
        images: {
          take: 1,
          orderBy: { order: 'asc' }
        },
        agent: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })

    return NextResponse.json({ properties })
  } catch (error) {
    console.error('Recent properties error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

