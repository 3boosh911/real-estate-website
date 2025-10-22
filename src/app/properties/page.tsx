import Link from 'next/link'
import { Search, Filter, MapPin, Bed, Bath, Square } from 'lucide-react'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                مكتب العقارات السعودي
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                الرئيسية
              </Link>
              <Link href="/properties" className="text-primary-600 font-medium">
                العقارات
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                من نحن
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                اتصل بنا
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            العقارات المتاحة
          </h1>
          <p className="text-xl text-primary-100">
            ابحث عن العقار المناسب لك من بين مجموعة واسعة من العقارات
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث بالعنوان أو المدينة..."
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">جميع المدن</option>
              <option value="riyadh">الرياض</option>
              <option value="jeddah">جدة</option>
              <option value="dammam">الدمام</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">جميع الأنواع</option>
              <option value="apartment">شقة</option>
              <option value="villa">فيلا</option>
              <option value="land">أرض</option>
              <option value="shop">محل</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">جميع الحالات</option>
              <option value="sale">للبيع</option>
              <option value="rent">للإيجار</option>
            </select>
          </div>
          
          {/* Advanced Filters */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">فلترة متقدمة:</span>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">السعر</option>
              <option value="0-500000">أقل من 500,000 ريال</option>
              <option value="500000-1000000">500,000 - 1,000,000 ريال</option>
              <option value="1000000-2000000">1,000,000 - 2,000,000 ريال</option>
              <option value="2000000+">أكثر من 2,000,000 ريال</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">المساحة</option>
              <option value="0-100">أقل من 100 م²</option>
              <option value="100-200">100 - 200 م²</option>
              <option value="200-300">200 - 300 م²</option>
              <option value="300+">أكثر من 300 م²</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">الغرف</option>
              <option value="1">1 غرفة</option>
              <option value="2">2 غرف</option>
              <option value="3">3 غرف</option>
              <option value="4">4 غرف</option>
              <option value="5+">5 غرف أو أكثر</option>
            </select>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            العقارات المتاحة (24 عقار)
          </h2>
          <div className="flex items-center space-x-4 space-x-reverse">
            <span className="text-gray-600">ترتيب حسب:</span>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="newest">الأحدث</option>
              <option value="price-low">السعر: من الأقل للأعلى</option>
              <option value="price-high">السعر: من الأعلى للأقل</option>
              <option value="area">المساحة</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <span className="text-gray-500">صورة العقار</span>
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                للبيع
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">فيلا فاخرة للبيع</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 ml-1" />
                <span>حي النخيل - الرياض</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary-600">2,500,000 ريال</span>
                <span className="text-sm text-gray-500">450 م²</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse text-gray-600 mb-4">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 ml-1" />
                  <span>5 غرف</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 ml-1" />
                  <span>4 حمامات</span>
                </div>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">مسبح</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">موقف</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">حديقة</span>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <span className="text-gray-500">صورة العقار</span>
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                للإيجار
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">شقة مفروشة للإيجار</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 ml-1" />
                <span>حي العليا - الرياض</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary-600">8,000 ريال</span>
                <span className="text-sm text-gray-500">120 م²</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse text-gray-600 mb-4">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 ml-1" />
                  <span>3 غرف</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 ml-1" />
                  <span>2 حمامات</span>
                </div>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">مفروشة</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">موقف</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">مصعد</span>
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <span className="text-gray-500">صورة العقار</span>
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                للبيع
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">أرض سكنية للبيع</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 ml-1" />
                <span>حي الروضة - جدة</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary-600">1,800,000 ريال</span>
                <span className="text-sm text-gray-500">600 م²</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse text-gray-600 mb-4">
                <div className="flex items-center">
                  <Square className="w-4 h-4 ml-1" />
                  <span>أرض سكنية</span>
                </div>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">خدمات متوفرة</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">قريبة من البحر</span>
              </div>
            </div>
          </div>

          {/* Property Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <span className="text-gray-500">صورة العقار</span>
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                للإيجار
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">محل تجاري للإيجار</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 ml-1" />
                <span>حي الفيصلية - الدمام</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary-600">12,000 ريال</span>
                <span className="text-sm text-gray-500">80 م²</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse text-gray-600 mb-4">
                <div className="flex items-center">
                  <Square className="w-4 h-4 ml-1" />
                  <span>محل تجاري</span>
                </div>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">واجهة زجاجية</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">موقف</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">موقع مميز</span>
              </div>
            </div>
          </div>

          {/* Property Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <span className="text-gray-500">صورة العقار</span>
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                للبيع
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">فيلا راقية للبيع</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 ml-1" />
                <span>حي الياسمين - الرياض</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary-600">2,200,000 ريال</span>
                <span className="text-sm text-gray-500">380 م²</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse text-gray-600 mb-4">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 ml-1" />
                  <span>4 غرف</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 ml-1" />
                  <span>3 حمامات</span>
                </div>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">مسبح</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">حديقة</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">نظام أمني</span>
              </div>
            </div>
          </div>

          {/* Property Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <span className="text-gray-500">صورة العقار</span>
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                للإيجار
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">شقة عائلية للإيجار</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 ml-1" />
                <span>حي السلامة - جدة</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary-600">10,000 ريال</span>
                <span className="text-sm text-gray-500">150 م²</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse text-gray-600 mb-4">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 ml-1" />
                  <span>4 غرف</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 ml-1" />
                  <span>3 حمامات</span>
                </div>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">شرفة</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">موقف</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">قريبة من البحر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2 space-x-reverse">
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50" disabled>
              السابق
            </button>
            <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
            <button className="px-3 py-2 text-gray-700 hover:text-gray-900">التالي</button>
          </nav>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
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
          </div>
        </div>
      </footer>
    </div>
  )
}

