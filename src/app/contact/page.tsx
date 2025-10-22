'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreeToPrivacy: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          agreeToPrivacy: false
        })
      } else {
        const error = await response.json()
        alert(error.error || 'حدث خطأ في إرسال الرسالة')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('حدث خطأ في إرسال الرسالة')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">تم إرسال رسالتك بنجاح!</h1>
          <p className="text-gray-600 mb-8">
            شكراً لك على تواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
          </p>
          <div className="space-x-4 space-x-reverse">
            <Link
              href="/"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              العودة للرئيسية
            </Link>
            <Link
              href="/properties"
              className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              تصفح العقارات
            </Link>
          </div>
        </div>
      </div>
    )
  }

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
              <Link href="/contact" className="text-primary-600 font-medium">
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
            اتصل بنا
          </h1>
          <p className="text-xl text-primary-100">
            نحن هنا لمساعدتك في العثور على العقار المناسب
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              أرسل لنا رسالة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+966501234567"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  موضوع الرسالة *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">اختر موضوع الرسالة</option>
                  <option value="inquiry">استفسار عن عقار</option>
                  <option value="appointment">حجز موعد</option>
                  <option value="valuation">طلب تقييم عقار</option>
                  <option value="investment">استشارة استثمارية</option>
                  <option value="complaint">شكوى</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  الرسالة *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  name="agreeToPrivacy"
                  required
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeToPrivacy" className="text-sm text-gray-600">
                  أوافق على <Link href="/privacy" className="text-primary-600 hover:underline">سياسة الخصوصية</Link> 
                  وأوافق على معالجة بياناتي الشخصية لأغراض التواصل معي.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>جاري الإرسال...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>إرسال الرسالة</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                معلومات التواصل
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <Phone className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">الهاتف</h3>
                    <p className="text-gray-600">{process.env.NEXT_PUBLIC_COMPANY_PHONE || '+966501234567'}</p>
                    <p className="text-sm text-gray-500">متاح من السبت إلى الخميس</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <Mail className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">{process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@realestate-sa.com'}</p>
                    <p className="text-sm text-gray-500">سنرد عليك خلال 24 ساعة</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">العنوان</h3>
                    <p className="text-gray-600">{process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'الرياض، المملكة العربية السعودية'}</p>
                    <p className="text-sm text-gray-500">يمكنك زيارتنا في المكتب</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <Clock className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">ساعات العمل</h3>
                    <p className="text-gray-600">السبت - الخميس: 8:00 ص - 6:00 م</p>
                    <p className="text-gray-600">الجمعة: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-green-600 text-white rounded-lg p-8 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">تواصل عبر الواتساب</h3>
              <p className="mb-4">للحصول على رد سريع، تواصل معنا عبر الواتساب</p>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || '966501234567'}`}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 space-x-reverse"
              >
                <MessageCircle className="w-5 h-5" />
                <span>فتح الواتساب</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">موقع المكتب</h3>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">خريطة موقع المكتب</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY 
                      ? 'سيتم عرض الخريطة هنا' 
                      : 'يرجى إضافة مفتاح Google Maps API لعرض الخريطة'
                    }
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

