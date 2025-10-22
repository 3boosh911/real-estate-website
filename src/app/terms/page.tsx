import Link from 'next/link'
import { FileText, Scale, AlertTriangle } from 'lucide-react'

export default function TermsPage() {
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
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            شروط الاستخدام
          </h1>
          <p className="text-xl text-primary-100">
            الشروط والأحكام المنظمة لاستخدام موقعنا الإلكتروني
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              آخر تحديث: ديسمبر 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">القبول والشروط</h2>
            <p className="text-gray-600 mb-6">
              بوصولك واستخدامك لموقع مكتب العقارات السعودي، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
              إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام موقعنا.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">استخدام الموقع</h2>
            <p className="text-gray-600 mb-4">
              يمكنك استخدام موقعنا للأغراض التالية فقط:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>البحث عن العقارات المتاحة للبيع أو الإيجار</li>
              <li>التواصل معنا بخصوص العقارات أو الخدمات</li>
              <li>الحصول على معلومات حول خدماتنا العقارية</li>
              <li>الاستفادة من الاستشارات العقارية</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">القيود والمنع</h2>
            <p className="text-gray-600 mb-4">
              لا يجوز لك استخدام موقعنا لأي من الأغراض التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>أي نشاط غير قانوني أو مخالف للقوانين السعودية</li>
              <li>إرسال أو نشر محتوى ضار أو مسيء</li>
              <li>محاولة اختراق أو تعطيل أمان الموقع</li>
              <li>استخدام الموقع لأغراض تجارية غير مصرح بها</li>
              <li>انتحال شخصية أخرى أو تقديم معلومات كاذبة</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">الملكية الفكرية</h2>
            <p className="text-gray-600 mb-6">
              جميع المحتويات الموجودة على موقعنا، بما في ذلك النصوص والصور والتصاميم والشعارات، 
              محمية بحقوق الطبع والنشر وهي ملكية حصرية لمكتب العقارات السعودي أو شركائنا.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">معلومات العقارات</h2>
            <div className="flex items-start space-x-3 space-x-reverse mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <p className="text-gray-600">
                  نحن نبذل قصارى جهدنا لضمان دقة المعلومات المعروضة حول العقارات، 
                  ولكن لا يمكننا ضمان دقة جميع المعلومات. يتحمل المعلنون مسؤولية دقة المعلومات المقدمة.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">إخلاء المسؤولية</h2>
            <p className="text-gray-600 mb-6">
              نحن لا نتحمل أي مسؤولية عن:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام الموقع</li>
              <li>أي خسائر مالية أو تجارية ناتجة عن استخدام الموقع</li>
              <li>أي معلومات غير دقيقة أو مضللة حول العقارات</li>
              <li>أي قرارات تتخذها بناءً على المعلومات المعروضة على الموقع</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">تعديل الشروط</h2>
            <p className="text-gray-600 mb-6">
              نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. 
              استمرارك في استخدام الموقع بعد التعديلات يعتبر موافقة على الشروط الجديدة.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">القانون المطبق</h2>
            <div className="flex items-start space-x-3 space-x-reverse mb-6">
              <Scale className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <p className="text-gray-600">
                  تخضع هذه الشروط والأحكام للقوانين السعودية. أي نزاعات تنشأ من استخدام هذا الموقع 
                  ستخضع للاختصاص الحصري للمحاكم السعودية.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">تواصل معنا</h2>
            <p className="text-gray-600 mb-6">
              إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا عبر:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>البريد الإلكتروني:</strong> {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@realestate-sa.com'}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>الهاتف:</strong> {process.env.NEXT_PUBLIC_COMPANY_PHONE || '+966501234567'}
              </p>
              <p className="text-gray-700">
                <strong>العنوان:</strong> {process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'الرياض، المملكة العربية السعودية'}
              </p>
            </div>
          </div>
        </div>
      </div>

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

