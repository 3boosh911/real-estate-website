import Link from 'next/link'
import { AlertTriangle, Shield, Info } from 'lucide-react'

export default function DisclaimerPage() {
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
            إخلاء المسؤولية
          </h1>
          <p className="text-xl text-primary-100">
            إخلاء المسؤولية القانوني لمكتب العقارات السعودي
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

            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 ml-3" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">تنبيه مهم</h3>
                  <p className="text-yellow-700">
                    يرجى قراءة هذا الإخلاء بعناية قبل استخدام موقعنا أو الاعتماد على أي معلومات معروضة عليه.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">طبيعة الخدمة</h2>
            <p className="text-gray-600 mb-6">
              مكتب العقارات السعودي هو وسيط عقاري مرخص من الهيئة العامة للعقار. نحن نقدم خدمات الوساطة 
              العقارية وليس مالكين للعقارات المعروضة على موقعنا. جميع العقارات المعروضة هي ملكية أطراف ثالثة 
              (الملاك أو المطورين) ونحن نعمل كوسيط بينهم وبين العملاء المحتملين.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">دقة المعلومات</h2>
            <div className="flex items-start space-x-3 space-x-reverse mb-6">
              <Info className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="text-gray-600">
                  نحن نبذل قصارى جهدنا لضمان دقة المعلومات المعروضة حول العقارات، بما في ذلك الأسعار والمواصفات 
                  والصور. ومع ذلك، لا يمكننا ضمان دقة جميع المعلومات المقدمة من الملاك أو المطورين. 
                  يتحمل المعلنون مسؤولية دقة المعلومات المقدمة.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">إخلاء المسؤولية العام</h2>
            <p className="text-gray-600 mb-4">
              نحن لا نتحمل أي مسؤولية عن:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام موقعنا</li>
              <li>أي خسائر مالية أو تجارية ناتجة عن الاعتماد على المعلومات المعروضة</li>
              <li>أي تأخير أو انقطاع في الخدمة</li>
              <li>أي أخطاء أو إغفالات في المعلومات المعروضة</li>
              <li>أي قرارات تتخذها بناءً على المعلومات المعروضة على الموقع</li>
              <li>أي مشاكل قانونية أو مالية تنشأ من المعاملات العقارية</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">المعاملات العقارية</h2>
            <p className="text-gray-600 mb-6">
              جميع المعاملات العقارية تتم بين العملاء والملاك مباشرة. نحن نعمل كوسيط فقط ولا نتحمل أي مسؤولية 
              عن:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>صحة المستندات القانونية للعقارات</li>
              <li>وجود أي التزامات أو قيود على العقارات</li>
              <li>جودة أو حالة العقارات الفعلية</li>
              <li>أي نزاعات تنشأ بين العملاء والملاك</li>
              <li>أي خسائر مالية ناتجة عن المعاملات</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">الاستشارات العقارية</h2>
            <p className="text-gray-600 mb-6">
              الاستشارات العقارية التي نقدمها هي لأغراض إعلامية فقط ولا تشكل نصيحة استثمارية أو قانونية. 
              يجب على العملاء استشارة المتخصصين المناسبين قبل اتخاذ أي قرارات استثمارية أو قانونية.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">الروابط الخارجية</h2>
            <p className="text-gray-600 mb-6">
              قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لا نتحمل أي مسؤولية عن محتوى أو سياسات 
              الخصوصية أو ممارسات هذه المواقع الخارجية.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">التحديثات والتغييرات</h2>
            <p className="text-gray-600 mb-6">
              نحتفظ بالحق في تحديث أو تعديل هذا الإخلاء في أي وقت دون إشعار مسبق. 
              استمرارك في استخدام الموقع بعد التحديثات يعتبر موافقة على الإخلاء المحدث.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">القانون المطبق</h2>
            <div className="flex items-start space-x-3 space-x-reverse mb-6">
              <Shield className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <p className="text-gray-600">
                  هذا الإخلاء يخضع للقوانين السعودية. أي نزاعات تنشأ من استخدام هذا الموقع 
                  ستخضع للاختصاص الحصري للمحاكم السعودية.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">التواصل</h2>
            <p className="text-gray-600 mb-6">
              إذا كان لديك أي أسئلة حول هذا الإخلاء، يرجى التواصل معنا عبر:
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

            <div className="bg-blue-50 border-r-4 border-blue-400 p-6 mt-8">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-blue-600 mt-1 ml-3" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">ملاحظة مهمة</h3>
                  <p className="text-blue-700">
                    نحن ملتزمون بتقديم أفضل الخدمات العقارية لعملائنا. إذا كان لديك أي مخاوف أو استفسارات، 
                    لا تتردد في التواصل معنا وسنكون سعداء لمساعدتك.
                  </p>
                </div>
              </div>
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

