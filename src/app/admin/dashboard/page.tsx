'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Home, 
  Building2, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut,
  Plus,
  Eye,
  Edit,
  Trash2,
  BarChart3,
  TrendingUp,
  DollarSign
} from 'lucide-react'

interface User {
  id: string
  email: string
  name: string
  role: 'owner' | 'agent'
}

interface Stats {
  totalProperties: number
  publishedProperties: number
  totalUsers: number
  totalMessages: number
  totalValue: number
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<Stats>({
    totalProperties: 0,
    publishedProperties: 0,
    totalUsers: 0,
    totalMessages: 0,
    totalValue: 0
  })
  const [recentProperties, setRecentProperties] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // تحميل بيانات المستخدم من localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // تحميل الإحصائيات
    loadStats()
    loadRecentProperties()
  }, [])

  const loadStats = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error loading stats:', error)
    }
  }

  const loadRecentProperties = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/properties/recent', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setRecentProperties(data.properties)
      }
    } catch (error) {
      console.error('Error loading recent properties:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = '/login'
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
              <Building2 className="h-8 w-8 text-primary-600 ml-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                لوحة التحكم
              </h1>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-sm text-gray-600">
                مرحباً، {user?.name || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="h-4 w-4 ml-1" />
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              <Link
                href="/admin/dashboard"
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md"
              >
                <BarChart3 className="h-5 w-5 ml-3" />
                لوحة التحكم
              </Link>
              <Link
                href="/admin/properties"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Building2 className="h-5 w-5 ml-3" />
                إدارة العقارات
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Users className="h-5 w-5 ml-3" />
                إدارة المستخدمين
              </Link>
              <Link
                href="/admin/messages"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <MessageSquare className="h-5 w-5 ml-3" />
                رسائل التواصل
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Settings className="h-5 w-5 ml-3" />
                إعدادات الموقع
              </Link>
              <Link
                href="/"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Home className="h-5 w-5 ml-3" />
                الموقع الرئيسي
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                مرحباً بك في لوحة التحكم
              </h2>
              <p className="text-gray-600">
                إدارة شاملة لموقع مكتب العقارات السعودي
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <div className="mr-4">
                    <p className="text-sm font-medium text-gray-600">إجمالي العقارات</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalProperties}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <div className="mr-4">
                    <p className="text-sm font-medium text-gray-600">العقارات المنشورة</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.publishedProperties}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div className="mr-4">
                    <p className="text-sm font-medium text-gray-600">إجمالي المستخدمين</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-orange-600" />
                  <div className="mr-4">
                    <p className="text-sm font-medium text-gray-600">رسائل التواصل</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalMessages}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">إجراءات سريعة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/admin/properties/new"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Plus className="h-5 w-5 ml-2" />
                  إضافة عقار جديد
                </Link>
                <Link
                  href="/admin/users/new"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Users className="h-5 w-5 ml-2" />
                  إضافة وكيل جديد
                </Link>
                <Link
                  href="/admin/messages"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <MessageSquare className="h-5 w-5 ml-2" />
                  عرض الرسائل
                </Link>
              </div>
            </div>

            {/* Recent Properties */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">أحدث العقارات</h3>
              </div>
              <div className="p-6">
                {recentProperties.length > 0 ? (
                  <div className="space-y-4">
                    {recentProperties.map((property: any) => (
                      <div key={property.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{property.title}</h4>
                          <p className="text-sm text-gray-600">{property.city} - {property.district}</p>
                          <p className="text-sm text-gray-500">{property.price.toLocaleString()} ريال</p>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            property.published 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {property.published ? 'منشور' : 'مسودة'}
                          </span>
                          <div className="flex space-x-1 space-x-reverse">
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-blue-600">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">لا توجد عقارات حديثة</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

