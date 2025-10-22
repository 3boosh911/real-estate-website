'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  MessageSquare, 
  Search, 
  Mail,
  Phone,
  Calendar,
  Eye,
  Trash2,
  CheckCircle,
  XCircle,
  Filter
} from 'lucide-react'

interface Message {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  propertyId?: string
  createdAt: string
  read: boolean
}

export default function MessagesManagement() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRead, setFilterRead] = useState('all')
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  useEffect(() => {
    loadMessages()
  }, [])

  const loadMessages = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/admin/messages', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages)
      }
    } catch (error) {
      console.error('Error loading messages:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMarkAsRead = async (messageId: string) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/messages/${messageId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ read: true })
      })

      if (response.ok) {
        setMessages(messages.map(m => 
          m.id === messageId ? { ...m, read: true } : m
        ))
        if (selectedMessage?.id === messageId) {
          setSelectedMessage({ ...selectedMessage, read: true })
        }
      }
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  const handleDelete = async (messageId: string) => {
    if (!confirm('هل أنت متأكد من حذف هذه الرسالة؟')) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setMessages(messages.filter(m => m.id !== messageId))
        if (selectedMessage?.id === messageId) {
          setSelectedMessage(null)
        }
      } else {
        alert('حدث خطأ في حذف الرسالة')
      }
    } catch (error) {
      console.error('Error deleting message:', error)
      alert('حدث خطأ في حذف الرسالة')
    }
  }

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesRead = filterRead === 'all' || 
                       (filterRead === 'read' && message.read) ||
                       (filterRead === 'unread' && !message.read)

    return matchesSearch && matchesRead
  })

  const unreadCount = messages.filter(m => !m.read).length

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
              <MessageSquare className="h-8 w-8 text-primary-600 ml-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                إدارة الرسائل
              </h1>
              {unreadCount > 0 && (
                <span className="mr-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {unreadCount} غير مقروء
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-1">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="البحث في الرسائل..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <select
                  value={filterRead}
                  onChange={(e) => setFilterRead(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">جميع الرسائل</option>
                  <option value="unread">غير مقروء</option>
                  <option value="read">مقروء</option>
                </select>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">
                  الرسائل ({filteredMessages.length})
                </h3>
              </div>
              
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => setSelectedMessage(message)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 ${
                      selectedMessage?.id === message.id ? 'bg-primary-50 border-r-4 border-primary-500' : ''
                    } ${!message.read ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-medium truncate ${
                          !message.read ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                          {message.name}
                        </h4>
                        <p className="text-xs text-gray-500 truncate">
                          {message.subject}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(message.createdAt).toLocaleDateString('ar-SA')}
                        </p>
                      </div>
                      {!message.read && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filteredMessages.length === 0 && (
                <div className="text-center py-8">
                  <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">لا توجد رسائل</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {searchTerm || filterRead !== 'all'
                      ? 'لا توجد رسائل تطابق معايير البحث'
                      : 'لم يتم استلام أي رسائل بعد'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Message Details */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {selectedMessage.subject}
                    </h3>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      {!selectedMessage.read && (
                        <button
                          onClick={() => handleMarkAsRead(selectedMessage.id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="وضع علامة كمقروء"
                        >
                          <CheckCircle className="h-5 w-5" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(selectedMessage.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        title="حذف الرسالة"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 ml-2" />
                        <span>{selectedMessage.email}</span>
                      </div>
                      {selectedMessage.phone && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 ml-2" />
                          <span>{selectedMessage.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>{new Date(selectedMessage.createdAt).toLocaleString('ar-SA')}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">المرسل:</span>
                        <span className="font-medium">{selectedMessage.name}</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">محتوى الرسالة:</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">
                          {selectedMessage.message}
                        </p>
                      </div>
                    </div>

                    {selectedMessage.propertyId && (
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">متعلق بالعقار:</h4>
                        <Link
                          href={`/properties/${selectedMessage.propertyId}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-500 text-sm"
                        >
                          <Eye className="h-4 w-4 ml-1" />
                          عرض العقار
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">اختر رسالة للعرض</h3>
                <p className="mt-1 text-sm text-gray-500">
                  اضغط على أي رسالة من القائمة لعرض تفاصيلها
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

