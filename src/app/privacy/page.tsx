import Link from 'next/link'
import { Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
            سياسة الخصوصية
          </h1>
          <p className="text-xl text-primary-100">
            نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية
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

            <h2 className="text-2xl font-bold text-gray-800 mb-6">مقدمة</h2>
            <p className="text-gray-600 mb-6">
              نحن في مكتب العقارات السعودي نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. 
              هذه السياسة توضح كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام موقعنا الإلكتروني.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">المعلومات التي نجمعها</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 space-x-reverse">
                <UserCheck className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">المعلومات الشخصية</h3>
                  <p className="text-gray-600">
                    الاسم، البريد الإلكتروني، رقم الهاتف، العنوان، وأي معلومات أخرى تقدمها لنا طوعاً.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <Database className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">معلومات الاستخدام</h3>
                  <p className="text-gray-600">
                    معلومات حول كيفية استخدامك لموقعنا، بما في ذلك الصفحات التي تزورها والوقت الذي تقضيه على الموقع.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <Eye className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">معلومات التقنية</h3>
                  <p className="text-gray-600">
                    عنوان IP، نوع المتصفح، نظام التشغيل، ومعلومات أخرى عن جهازك.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">كيف نستخدم معلوماتك</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>تقديم الخدمات العقارية المطلوبة</li>
              <li>الرد على استفساراتك وطلباتك</li>
              <li>تحسين موقعنا وخدماتنا</li>
              <li>إرسال تحديثات حول العقارات الجديدة</li>
              <li>الامتثال للقوانين واللوائح المعمول بها</li>
              <li>حماية حقوقنا ومصالحنا المشروعة</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">حماية البيانات</h2>
            <div className="flex items-start space-x-3 space-x-reverse mb-6">
              <Lock className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <p className="text-gray-600">
                  نستخدم تقنيات أمنية متقدمة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف. 
                  جميع البيانات المنقولة بين موقعنا ومتصفحك مشفرة باستخدام تقنية SSL.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">مشاركة المعلومات</h2>
            <p className="text-gray-600 mb-6">
              نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>بموافقتك الصريحة</li>
              <li>عندما يكون ذلك مطلوباً بموجب القانون</li>
              <li>لحماية حقوقنا أو حقوق الآخرين</li>
              <li>مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل موقعنا</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-gray-600 mb-6">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك تعطيل ملفات تعريف الارتباط 
              من خلال إعدادات متصفحك، ولكن قد يؤثر ذلك على وظائف معينة في الموقع.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">حقوقك</h2>
            <p className="text-gray-600 mb-4">
              لديك الحق في:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>الوصول إلى بياناتك الشخصية</li>
              <li>تصحيح أو تحديث بياناتك</li>
              <li>حذف بياناتك الشخصية</li>
              <li>الاعتراض على معالجة بياناتك</li>
              <li>سحب موافقتك في أي وقت</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">التحديثات على هذه السياسة</h2>
            <p className="text-gray-600 mb-6">
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة من خلال 
              نشر السياسة المحدثة على موقعنا أو إرسال إشعار لك عبر البريد الإلكتروني.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">تواصل معنا</h2>
            <p className="text-gray-600 mb-6">
              إذا كان لديك أي أسئلة حول هذه السياسة أو كيفية استخدامنا لبياناتك، 
              يرجى التواصل معنا عبر:
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

