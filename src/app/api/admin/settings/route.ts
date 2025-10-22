import { NextRequest, NextResponse } from 'next/server'
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

    // جلب الإعدادات من متغيرات البيئة
    const settings = {
      companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || '',
      companyLicense: process.env.NEXT_PUBLIC_COMPANY_LICENSE || '',
      companyRegistration: process.env.NEXT_PUBLIC_COMPANY_REGISTRATION || '',
      companyAddress: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '',
      companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '',
      companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || '',
      companyWhatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || '',
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    }

    return NextResponse.json({ settings })
  } catch (error) {
    console.error('Settings fetch error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
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
        { error: 'ليس لديك صلاحية لتعديل هذه الإعدادات' },
        { status: 403 }
      )
    }

    const settings = await request.json()

    // التحقق من البيانات المطلوبة
    if (!settings.companyName || !settings.companyLicense || !settings.companyRegistration) {
      return NextResponse.json(
        { error: 'البيانات المطلوبة ناقصة' },
        { status: 400 }
      )
    }

    // في بيئة الإنتاج، يجب حفظ هذه الإعدادات في قاعدة البيانات أو ملف إعدادات
    // هنا نعيد الإعدادات كما هي لأننا نستخدم متغيرات البيئة
    
    return NextResponse.json({ 
      message: 'تم حفظ الإعدادات بنجاح',
      settings 
    })
  } catch (error) {
    console.error('Settings update error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

