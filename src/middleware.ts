import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '')

  // الصفحات التي تحتاج مصادقة
  const protectedPaths = ['/admin']
  
  // التحقق من المسار المحمي
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // إضافة معلومات المستخدم للطلب
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('user-id', decoded.id)
    requestHeaders.set('user-role', decoded.role)
    requestHeaders.set('user-email', decoded.email)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/login'
  ]
}

