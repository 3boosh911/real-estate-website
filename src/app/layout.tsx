import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'مكتب العقارات السعودي - عقارات للبيع والإيجار',
  description: 'موقع مكتب العقارات السعودي الرسمي لعرض العقارات للبيع والإيجار في جميع أنحاء المملكة العربية السعودية',
  keywords: 'عقارات، بيع، إيجار، الرياض، جدة، الدمام، السعودية',
  authors: [{ name: 'مكتب العقارات السعودي' }],
  openGraph: {
    title: 'مكتب العقارات السعودي',
    description: 'عقارات للبيع والإيجار في المملكة العربية السعودية',
    type: 'website',
    locale: 'ar_SA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

