'use client'

import { useState, useEffect } from 'react'
import { 
  Settings, 
  Save, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  FileText,
  Globe,
  MessageCircle
} from 'lucide-react'

interface SiteSettings {
  companyName: string
  companyLicense: string
  companyRegistration: string
  companyAddress: string
  companyPhone: string
  companyEmail: string
  companyWhatsapp: string
  siteUrl: string
  googleMapsApiKey: string
}

export default function SiteSettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [settings, setSettings] = useState<SiteSettings>({
    companyName: '',
    companyLicense: '',
    companyRegistration: '',
    companyAddress: '',
    companyPhone: '',
    companyEmail: '',
    companyWhatsapp: '',
    siteUrl: '',
    googleMapsApiKey: ''
  })

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/settings', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setSettings(data.settings)
      }
    } catch (error) {
      console.error('Error loading settings:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      })

      const data = await response.json()

      if (response.ok) {
        alert('تم حفظ الإعدادات بنجاح')
      } else {
        alert(data.error || 'حدث خطأ في حفظ الإعدادات')
      }
    } catch (error) {
      console.error('Error saving settings:', error)
      alert('حدث خطأ في حفظ الإعدادات')
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-primary-600 ml-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                إعدادات الموقع
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Building2 className="h-5 w-5 ml-2" />
              معلومات المكتب
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  اسم المكتب *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={settings.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="مكتب العقارات السعودي"
                />
              </div>

              <div>
                <label htmlFor="companyLicense" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الترخيص العقاري *
                </label>
                <input
                  type="text"
                  id="companyLicense"
                  name="companyLicense"
                  required
                  value={settings.companyLicense}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="123456789"
                />
              </div>

              <div>
                <label htmlFor="companyRegistration" className="block text-sm font-medium text-gray-700 mb-2">
                  السجل التجاري *
                </label>
                <input
                  type="text"
                  id="companyRegistration"
                  name="companyRegistration"
                  required
                  value={settings.companyRegistration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="987654321"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  عنوان المكتب *
                </label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    required
                    value={settings.companyAddress}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="الرياض، المملكة العربية السعودية"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Phone className="h-5 w-5 ml-2" />
              معلومات التواصل
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف *
                </label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="companyPhone"
                    name="companyPhone"
                    required
                    value={settings.companyPhone}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+966501234567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني *
                </label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    required
                    value={settings.companyEmail}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="info@realestate-sa.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="companyWhatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الواتساب *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="companyWhatsapp"
                    name="companyWhatsapp"
                    required
                    value={settings.companyWhatsapp}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+966501234567"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Technical Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Globe className="h-5 w-5 ml-2" />
              الإعدادات التقنية
            </h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="siteUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  رابط الموقع *
                </label>
                <div className="relative">
                  <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="url"
                    id="siteUrl"
                    name="siteUrl"
                    required
                    value={settings.siteUrl}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://your-domain.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="googleMapsApiKey" className="block text-sm font-medium text-gray-700 mb-2">
                  مفتاح Google Maps API
                </label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="googleMapsApiKey"
                    name="googleMapsApiKey"
                    value={settings.googleMapsApiKey}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="AIzaSyB..."
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  للحصول على مفتاح API، اذهب إلى <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Cloud Console</a>
                </p>
              </div>
            </div>
          </div>

          {/* Legal Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <FileText className="h-5 w-5 ml-2" />
              المعلومات القانونية
            </h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-800 mb-2">ملاحظة مهمة:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• تأكد من صحة جميع المعلومات قبل الحفظ</li>
                <li>• رقم الترخيص والسجل التجاري يجب أن يكونا صحيحين</li>
                <li>• هذه المعلومات ستظهر في جميع أنحاء الموقع</li>
                <li>• تأكد من تحديث رابط الموقع عند النشر</li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isSaving ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                  جاري الحفظ...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5 ml-2" />
                  حفظ الإعدادات
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

