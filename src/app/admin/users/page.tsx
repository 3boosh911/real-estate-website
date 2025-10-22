'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Users, 
  Plus, 
  Search, 
  Edit, 
  Trash2,
  Shield,
  UserCheck,
  Mail,
  Calendar
} from 'lucide-react'

interface User {
  id: string
  email: string
  name: string
  role: 'owner' | 'agent'
  createdAt: string
  _count: {
    properties: number
  }
}

export default function UsersManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setUsers(data.users)
      }
    } catch (error) {
      console.error('Error loading users:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (userId: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا المستخدم؟')) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setUsers(users.filter(u => u.id !== userId))
      } else {
        alert('حدث خطأ في حذف المستخدم')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      alert('حدث خطأ في حذف المستخدم')
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === 'all' || user.role === filterRole
    return matchesSearch && matchesRole
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
              <Users className="h-8 w-8 text-primary-600 ml-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                إدارة المستخدمين
              </h1>
            </div>
            <Link
              href="/admin/users/new"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center"
            >
              <Plus className="h-5 w-5 ml-2" />
              إضافة مستخدم جديد
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="البحث في المستخدمين..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">جميع الأدوار</option>
              <option value="owner">مدير</option>
              <option value="agent">وكيل</option>
            </select>
          </div>
        </div>

        {/* Users List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              المستخدمين ({filteredUsers.length})
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <div key={user.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                        {user.role === 'owner' ? (
                          <Shield className="h-6 w-6 text-primary-600" />
                        ) : (
                          <UserCheck className="h-6 w-6 text-primary-600" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-medium text-gray-900">
                        {user.name || 'بدون اسم'}
                      </h4>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <Mail className="h-4 w-4 ml-1" />
                        <span>{user.email}</span>
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 ml-1" />
                        <span>انضم في {new Date(user.createdAt).toLocaleDateString('ar-SA')}</span>
                      </div>
                      <div className="mt-2 flex items-center space-x-4 space-x-reverse">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.role === 'owner' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {user.role === 'owner' ? 'مدير' : 'وكيل'}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                          {user._count.properties} عقار
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Link
                      href={`/admin/users/${user.id}/edit`}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      title="تعديل المستخدم"
                    >
                      <Edit className="h-5 w-5" />
                    </Link>
                    
                    {user.role !== 'owner' && (
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        title="حذف المستخدم"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">لا يوجد مستخدمين</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || filterRole !== 'all'
                  ? 'لا يوجد مستخدمين يطابقون معايير البحث'
                  : 'ابدأ بإضافة مستخدم جديد'
                }
              </p>
              {(!searchTerm && filterRole === 'all') && (
                <div className="mt-6">
                  <Link
                    href="/admin/users/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                  >
                    <Plus className="h-5 w-5 ml-2" />
                    إضافة مستخدم جديد
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

