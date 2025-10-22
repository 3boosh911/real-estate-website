'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Building2, 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2,
  MoreVertical,
  CheckCircle,
  XCircle,
  Calendar,
  MapPin,
  DollarSign
} from 'lucide-react'

interface Property {
  id: string
  title: string
  slug: string
  price: number
  city: string
  district: string
  type: string
  status: string
  published: boolean
  listedAt: string
  images: Array<{ url: string }>
  agent: {
    name: string
  }
}

export default function PropertiesManagement() {
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const [filterPublished, setFilterPublished] = useState('all')

  useEffect(() => {
    loadProperties()
  }, [])

  const loadProperties = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/properties', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setProperties(data.properties)
      }
    } catch (error) {
      console.error('Error loading properties:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (propertyId: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا العقار؟')) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/properties/${propertyId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setProperties(properties.filter(p => p.id !== propertyId))
      } else {
        alert('حدث خطأ في حذف العقار')
      }
    } catch (error) {
      console.error('Error deleting property:', error)
      alert('حدث خطأ في حذف العقار')
    }
  }

  const handleTogglePublished = async (propertyId: string, currentStatus: boolean) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/properties/${propertyId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ published: !currentStatus })
      })

      if (response.ok) {
        setProperties(properties.map(p => 
          p.id === propertyId ? { ...p, published: !currentStatus } : p
        ))
      } else {
        alert('حدث خطأ في تحديث حالة العقار')
      }
    } catch (error) {
      console.error('Error updating property:', error)
      alert('حدث خطأ في تحديث حالة العقار')
    }
  }

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.district.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || property.status === filterStatus
    const matchesType = filterType === 'all' || property.type === filterType
    const matchesPublished = filterPublished === 'all' || 
                            (filterPublished === 'published' && property.published) ||
                            (filterPublished === 'draft' && !property.published)

    return matchesSearch && matchesStatus && matchesType && matchesPublished
  })

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
                إدارة العقارات
              </h1>
            </div>
            <Link
              href="/admin/properties/new"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center"
            >
              <Plus className="h-5 w-5 ml-2" />
              إضافة عقار جديد
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="البحث في العقارات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">جميع الحالات</option>
              <option value="sale">للبيع</option>
              <option value="rent">للإيجار</option>
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">جميع الأنواع</option>
              <option value="apartment">شقة</option>
              <option value="villa">فيلا</option>
              <option value="land">أرض</option>
              <option value="shop">محل</option>
            </select>

            <select
              value={filterPublished}
              onChange={(e) => setFilterPublished(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">جميع الحالات</option>
              <option value="published">منشور</option>
              <option value="draft">مسودة</option>
            </select>
          </div>
        </div>

        {/* Properties List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              العقارات ({filteredProperties.length})
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredProperties.map((property) => (
              <div key={property.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      {property.images.length > 0 ? (
                        <img
                          src={property.images[0].url}
                          alt={property.title}
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="h-20 w-20 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Building2 className="h-8 w-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-medium text-gray-900 truncate">
                        {property.title}
                      </h4>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span>{property.city} - {property.district}</span>
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <DollarSign className="h-4 w-4 ml-1" />
                        <span>{property.price.toLocaleString()} ريال</span>
                      </div>
                      <div className="mt-2 flex items-center space-x-4 space-x-reverse">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          property.status === 'sale' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {property.status === 'sale' ? 'للبيع' : 'للإيجار'}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                          {property.type === 'apartment' ? 'شقة' :
                           property.type === 'villa' ? 'فيلا' :
                           property.type === 'land' ? 'أرض' : 'محل'}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          property.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {property.published ? 'منشور' : 'مسودة'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <button
                      onClick={() => handleTogglePublished(property.id, property.published)}
                      className={`p-2 rounded-lg ${
                        property.published 
                          ? 'text-green-600 hover:bg-green-50' 
                          : 'text-yellow-600 hover:bg-yellow-50'
                      }`}
                      title={property.published ? 'إلغاء النشر' : 'نشر العقار'}
                    >
                      {property.published ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <XCircle className="h-5 w-5" />
                      )}
                    </button>
                    
                    <Link
                      href={`/properties/${property.slug}`}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      title="عرض العقار"
                    >
                      <Eye className="h-5 w-5" />
                    </Link>
                    
                    <Link
                      href={`/admin/properties/${property.id}/edit`}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      title="تعديل العقار"
                    >
                      <Edit className="h-5 w-5" />
                    </Link>
                    
                    <button
                      onClick={() => handleDelete(property.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      title="حذف العقار"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">لا توجد عقارات</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || filterStatus !== 'all' || filterType !== 'all' || filterPublished !== 'all'
                  ? 'لا توجد عقارات تطابق معايير البحث'
                  : 'ابدأ بإضافة عقار جديد'
                }
              </p>
              {(!searchTerm && filterStatus === 'all' && filterType === 'all' && filterPublished === 'all') && (
                <div className="mt-6">
                  <Link
                    href="/admin/properties/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                  >
                    <Plus className="h-5 w-5 ml-2" />
                    إضافة عقار جديد
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

