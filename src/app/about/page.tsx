import Link from 'next/link'
import { Award, Users, Shield, Clock, MapPin, Phone, Mail, FileText } from 'lucide-react'

export default function AboutPage() {
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
              <Link href="/about" className="text-primary-600 font-medium">
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
            من نحن
          </h1>
          <p className="text-xl text-primary-100">
            مكتب عقاري مرخص ومعتمد من الهيئة العامة للعقار
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              رؤيتنا ورسالتنا
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              نحن في مكتب العقارات السعودي نؤمن بأن كل شخص يستحق العثور على العقار المثالي 
              الذي يحقق أحلامه ويوفر له الراحة والأمان. نسعى لأن نكون الجسر الموثوق بين 
              العملاء والعقارات المناسبة لهم.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              رسالتنا هي تقديم خدمات عقارية متميزة ومهنية، مع التركيز على الشفافية والصدق 
              في التعامل، وضمان رضا عملائنا من خلال فهم احتياجاتهم وتقديم الحلول المناسبة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link
                href="/properties"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                تصفح العقارات
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">صورة المكتب</span>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
            معلومات المكتب الرسمية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 space-x-reverse">
                <Award className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">رقم الترخيص العقاري</h3>
                  <p className="text-gray-600">{process.env.NEXT_PUBLIC_COMPANY_LICENSE || '123456789'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <FileText className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">السجل التجاري</h3>
                  <p className="text-gray-600">{process.env.NEXT_PUBLIC_COMPANY_REGISTRATION || '987654321'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <MapPin className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">عنوان المكتب</h3>
                  <p className="text-gray-600">{process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'الرياض، المملكة العربية السعودية'}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 space-x-reverse">
                <Phone className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">رقم الهاتف</h3>
                  <p className="text-gray-600">{process.env.NEXT_PUBLIC_COMPANY_PHONE || '+966501234567'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <Mail className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">البريد الإلكتروني</h3>
                  <p className="text-gray-600">{process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@realestate-sa.com'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <Clock className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">ساعات العمل</h3>
                  <p className="text-gray-600">السبت - الخميس: 8:00 ص - 6:00 م</p>
                  <p className="text-gray-600">الجمعة: مغلق</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            قيمنا ومبادئنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Shield className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">الثقة والأمان</h3>
              <p className="text-gray-600">
                نضمن لجميع عملائنا التعامل الآمن والموثوق، مع الحفاظ على سرية معلوماتهم 
                وضمان حقوقهم في جميع المعاملات العقارية.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Users className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">خدمة العملاء</h3>
              <p className="text-gray-600">
                نقدم خدمة عملاء متميزة على مدار الساعة، مع فريق متخصص ومؤهل لمساعدتك 
                في العثور على العقار المناسب وإتمام جميع الإجراءات القانونية.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Award className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">التميز المهني</h3>
              <p className="text-gray-600">
                نلتزم بأعلى معايير المهنية والجودة في جميع خدماتنا، مع مواكبة أحدث 
                التطورات في السوق العقاري السعودي والقوانين المنظمة له.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            خدماتنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">عقارات للبيع</h3>
              <p className="text-gray-600 text-sm">
                مجموعة واسعة من العقارات السكنية والتجارية للبيع
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">🔑</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">عقارات للإيجار</h3>
              <p className="text-gray-600 text-sm">
                عقارات مفروشة وغير مفروشة للإيجار قصير وطويل المدى
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">تقييم العقارات</h3>
              <p className="text-gray-600 text-sm">
                خدمات تقييم مهنية لتحديد القيمة السوقية للعقارات
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">💼</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">استشارات عقارية</h3>
              <p className="text-gray-600 text-sm">
                استشارات متخصصة في الاستثمار العقاري والتطوير
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            فريقنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">صورة المدير</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">أحمد محمد</h3>
                <p className="text-primary-600 font-medium mb-2">مدير المكتب</p>
                <p className="text-gray-600 text-sm">
                  خبرة أكثر من 15 عاماً في السوق العقاري السعودي، حاصل على شهادات متخصصة في التقييم العقاري.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">صورة الوكيل</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">سارة أحمد</h3>
                <p className="text-primary-600 font-medium mb-2">وكيلة عقارية</p>
                <p className="text-gray-600 text-sm">
                  متخصصة في العقارات السكنية، لديها خبرة واسعة في مساعدة العملاء في العثور على العقار المناسب.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">صورة المستشار</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">محمد علي</h3>
                <p className="text-primary-600 font-medium mb-2">مستشار عقاري</p>
                <p className="text-gray-600 text-sm">
                  خبير في الاستثمار العقاري والتطوير، يقدم استشارات متخصصة للعملاء والمستثمرين.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            هل تبحث عن عقار معين؟
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            تواصل معنا وسنساعدك في العثور على العقار المناسب لك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              تواصل معنا
            </Link>
            <Link
              href="/properties"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              تصفح العقارات
            </Link>
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

