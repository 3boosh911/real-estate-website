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

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit

    // بناء شروط البحث
    const where: any = {}
    
    // إذا كان وكيل، يعرض فقط عقاراته
    if (decoded.role === 'agent') {
      where.agentId = decoded.id
    }

    const [properties, total] = await Promise.all([
      prisma.property.findMany({
        where,
        include: {
          images: {
            orderBy: { order: 'asc' }
          },
          agent: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        },
        orderBy: { listedAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.property.count({ where })
    ])

    return NextResponse.json({
      properties,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    })
  } catch (error) {
    console.error('Properties fetch error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
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

    const {
      title,
      description,
      price,
      currency,
      type,
      status,
      city,
      district,
      address,
      areaSqm,
      bedrooms,
      bathrooms,
      features,
      latitude,
      longitude,
      images,
      published
    } = await request.json()

    if (!title || !description || !price || !type || !status || !city) {
      return NextResponse.json(
        { error: 'البيانات المطلوبة ناقصة' },
        { status: 400 }
      )
    }

    // إنشاء slug من العنوان
    const slug = title
      .toLowerCase()
      .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    const property = await prisma.property.create({
      data: {
        title,
        slug,
        description,
        price: parseFloat(price),
        currency: currency || 'SAR',
        type,
        status,
        city,
        district,
        address,
        areaSqm: areaSqm ? parseFloat(areaSqm) : null,
        bedrooms: bedrooms ? parseInt(bedrooms) : null,
        bathrooms: bathrooms ? parseInt(bathrooms) : null,
        features: JSON.stringify(features || []),
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
        agentId: decoded.id,
        published: published || false,
      }
    })

    // إضافة الصور إذا كانت موجودة
    if (images && images.length > 0) {
      await Promise.all(
        images.map((imageUrl: string, index: number) =>
          prisma.image.create({
            data: {
              url: imageUrl,
              propertyId: property.id,
              order: index,
            }
          })
        )
      )
    }

    return NextResponse.json({
      property,
      message: 'تم إنشاء العقار بنجاح'
    })
  } catch (error) {
    console.error('Property creation error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

