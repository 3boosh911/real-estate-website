import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">
                مكتب العقارات السعودي
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                الرئيسية
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-primary-600 font-medium">
                العقارات
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                من نحن
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                اتصل بنا
              </Link>
            </nav>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link
                href="/login"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                تسجيل الدخول
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP}`}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 space-x-reverse hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ابحث عن العقار المثالي
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            نقدم لك أفضل العقارات للبيع والإيجار في جميع أنحاء المملكة العربية السعودية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              تصفح العقارات
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              ابحث عن العقار المناسب
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">اختر المدينة</option>
                <option value="riyadh">الرياض</option>
                <option value="jeddah">جدة</option>
                <option value="dammam">الدمام</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">نوع العقار</option>
                <option value="apartment">شقة</option>
                <option value="villa">فيلا</option>
                <option value="land">أرض</option>
                <option value="shop">محل</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">الحالة</option>
                <option value="sale">للبيع</option>
                <option value="rent">للإيجار</option>
              </select>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                بحث
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أحدث العقارات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">صورة العقار</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">فيلا فاخرة للبيع</h3>
                <p className="text-gray-600 mb-4">حي النخيل - الرياض</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">2,500,000 ريال</span>
                  <span className="text-sm text-gray-500">450 م²</span>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">صورة العقار</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">شقة مفروشة للإيجار</h3>
                <p className="text-gray-600 mb-4">حي العليا - الرياض</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">8,000 ريال</span>
                  <span className="text-sm text-gray-500">120 م²</span>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">صورة العقار</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">أرض سكنية للبيع</h3>
                <p className="text-gray-600 mb-4">حي الروضة - جدة</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">1,800,000 ريال</span>
                  <span className="text-sm text-gray-500">600 م²</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/properties"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              عرض جميع العقارات
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                من نحن
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                مكتب العقارات السعودي هو مكتب عقاري مرخص ومعتمد من الهيئة العامة للعقار، 
                نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية منذ أكثر من 10 سنوات.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                نتميز بخبرتنا الواسعة في السوق العقاري السعودي وعلاقاتنا القوية مع المطورين 
                والملاك، مما يمكننا من تقديم أفضل العقارات بأفضل الأسعار.
              </p>
              <Link
                href="/about"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                تعرف علينا أكثر
              </Link>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">صورة المكتب</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            تواصل معنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h3 className="text-xl font-semibold mb-2">اتصل بنا</h3>
              <p className="text-primary-100">{process.env.NEXT_PUBLIC_COMPANY_PHONE || '+966501234567'}</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h3 className="text-xl font-semibold mb-2">راسلنا</h3>
              <p className="text-primary-100">{process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@realestate-sa.com'}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h3 className="text-xl font-semibold mb-2">زورنا</h3>
              <p className="text-primary-100">{process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'الرياض، المملكة العربية السعودية'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">مكتب العقارات السعودي</h3>
              <p className="text-gray-300 mb-4">
                مكتب عقاري مرخص ومعتمد من الهيئة العامة للعقار
              </p>
              <p className="text-sm text-gray-400">
                رقم الترخيص: {process.env.NEXT_PUBLIC_COMPANY_LICENSE || '123456789'}
              </p>
              <p className="text-sm text-gray-400">
                السجل التجاري: {process.env.NEXT_PUBLIC_COMPANY_REGISTRATION || '987654321'}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link href="/properties" className="text-gray-300 hover:text-white">العقارات</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">من نحن</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">عقارات للبيع</li>
                <li className="text-gray-300">عقارات للإيجار</li>
                <li className="text-gray-300">استشارات عقارية</li>
                <li className="text-gray-300">تقييم العقارات</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-2">
                <p className="text-gray-300">{process.env.NEXT_PUBLIC_COMPANY_PHONE || '+966501234567'}</p>
                <p className="text-gray-300">{process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@realestate-sa.com'}</p>
                <p className="text-gray-300">{process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'الرياض، المملكة العربية السعودية'}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 مكتب العقارات السعودي. جميع الحقوق محفوظة.
            </p>
            <div className="mt-4 space-x-4 space-x-reverse">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">سياسة الخصوصية</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">شروط الاستخدام</Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm">إخلاء المسؤولية</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
