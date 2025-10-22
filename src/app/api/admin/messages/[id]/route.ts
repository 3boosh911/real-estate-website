import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const { read } = await request.json()

    const message = await prisma.contactMessage.update({
      where: { id: params.id },
      data: { read }
    })

    return NextResponse.json({ message })
  } catch (error) {
    console.error('Message update error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    await prisma.contactMessage.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'تم حذف الرسالة بنجاح' })
  } catch (error) {
    console.error('Message delete error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

