# موقع مكتب العقارات السعودي

موقع إلكتروني رسمي لمكتب عقاري سعودي لعرض العقارات (بيع/إيجار) وكونه واجهة رقمية رسمية للمكتب.

## المميزات

- 🌐 واجهة باللغة العربية مع دعم RTL كامل
- 🏠 عرض العقارات مع فلترة وبحث متقدم
- 📱 تصميم متجاوب لجميع الأجهزة
- 🔐 نظام مصادقة آمن للمشرفين والوكلاء
- 📊 لوحة إدارة شاملة لإدارة العقارات والمستخدمين
- 🗺️ دعم خرائط Google Maps
- 📧 نظام تواصل متكامل
- 🔍 تحسين محركات البحث (SEO)
- 📄 صفحات قانونية مطلوبة

## 🎛️ لوحة التحكم

تم بناء لوحة تحكم كاملة ومتطورة تتضمن:

### 🔐 نظام المصادقة
- تسجيل دخول آمن للمشرفين والوكلاء
- نظام صلاحيات متقدم (مدير/وكيل)
- حماية جميع الصفحات الإدارية

### 📊 لوحة التحكم الرئيسية
- إحصائيات شاملة (العقارات، المستخدمين، الرسائل)
- إجراءات سريعة للوصول للميزات المهمة
- عرض أحدث العقارات مع إمكانية التعديل السريع

### 🏠 إدارة العقارات
- عرض جميع العقارات مع فلترة متقدمة
- إضافة عقارات جديدة مع جميع التفاصيل
- تعديل وحذف العقارات
- نشر/إلغاء نشر العقارات
- إدارة صور العقارات

### 👥 إدارة المستخدمين
- إضافة وكلاء جدد
- إدارة صلاحيات المستخدمين
- عرض إحصائيات كل مستخدم

### 💬 إدارة الرسائل
- عرض جميع رسائل التواصل
- فلترة الرسائل المقروءة/غير المقروءة
- وضع علامة كمقروء أو حذف الرسائل

### ⚙️ إعدادات الموقع
- تحديث معلومات المكتب
- إعدادات التواصل
- الإعدادات التقنية

### 🔗 الوصول للوحة التحكم
- **تسجيل الدخول**: http://localhost:3000/login
- **لوحة التحكم**: http://localhost:3000/admin/dashboard

### 👤 الحسابات التجريبية
- **مدير المكتب**: `admin@realestate-sa.com` / `admin123`
- **وكيل عقارات**: `agent@realestate-sa.com` / `agent123`

📖 **دليل مفصل**: راجع ملف `ADMIN_PANEL_GUIDE.md` للتفاصيل الكاملة

## التقنيات المستخدمة

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite (للتنمية) / PostgreSQL (للإنتاج)
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **Styling**: Tailwind CSS مع دعم RTL
- **Deployment**: Vercel

## التثبيت والتشغيل

### المتطلبات

- Node.js 18+ 
- npm أو pnpm

### خطوات التثبيت

1. **استنساخ المشروع**
   ```bash
   git clone <repository-url>
   cd real-estate-website
   ```

2. **تثبيت التبعيات**
   ```bash
   npm install
   # أو
   pnpm install
   ```

3. **إعداد متغيرات البيئة**
   ```bash
   cp env.example .env.local
   ```
   
   قم بتعديل ملف `.env.local` وإضافة القيم المطلوبة:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key-here"
   JWT_SECRET="your-jwt-secret-here"
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
   NEXT_PUBLIC_COMPANY_NAME="مكتب العقارات السعودي"
   NEXT_PUBLIC_COMPANY_LICENSE="123456789"
   NEXT_PUBLIC_COMPANY_REGISTRATION="987654321"
   NEXT_PUBLIC_COMPANY_ADDRESS="الرياض، المملكة العربية السعودية"
   NEXT_PUBLIC_COMPANY_PHONE="+966501234567"
   NEXT_PUBLIC_COMPANY_EMAIL="info@realestate-sa.com"
   NEXT_PUBLIC_COMPANY_WHATSAPP="+966501234567"
   ```

4. **إعداد قاعدة البيانات**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **تشغيل المشروع**
   ```bash
   npm run dev
   # أو
   pnpm dev
   ```

6. **فتح الموقع**
   افتح [http://localhost:3000](http://localhost:3000) في المتصفح

## الحسابات التجريبية

### مدير المكتب (Owner)
- **البريد الإلكتروني**: admin@realestate-sa.com
- **كلمة المرور**: admin123

### وكيل عقارات (Agent)
- **البريد الإلكتروني**: agent@realestate-sa.com
- **كلمة المرور**: agent123

## هيكل المشروع

```
real-estate-website/
├── src/
│   ├── app/                 # صفحات Next.js App Router
│   │   ├── (auth)/          # صفحات المصادقة
│   │   ├── admin/           # لوحة الإدارة
│   │   ├── api/             # API Routes
│   │   ├── properties/      # صفحات العقارات
│   │   └── globals.css      # الأنماط العامة
│   ├── components/          # مكونات React
│   ├── lib/                 # مكتبات مساعدة
│   └── types/               # تعريفات TypeScript
├── prisma/
│   ├── schema.prisma        # مخطط قاعدة البيانات
│   └── seed.ts              # البيانات التجريبية
└── public/                  # الملفات الثابتة
```

## الأوامر المتاحة

```bash
# التطوير
npm run dev

# البناء للإنتاج
npm run build

# تشغيل الإنتاج محلياً
npm run start

# فحص الكود
npm run lint

# إدارة قاعدة البيانات
npm run db:push      # تطبيق التغييرات على قاعدة البيانات
npm run db:generate  # توليد Prisma Client
npm run db:seed      # إدراج البيانات التجريبية
```

## النشر على Vercel

1. **ربط المشروع بـ Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخولك أو أنشئ حساب جديد
   - اضغط "New Project"
   - استورد المشروع من GitHub

2. **إعداد متغيرات البيئة**
   - في لوحة تحكم Vercel، اذهب إلى Settings > Environment Variables
   - أضف جميع المتغيرات من ملف `.env.local`

3. **إعداد قاعدة البيانات**
   - استخدم قاعدة بيانات PostgreSQL من Vercel أو خدمة خارجية
   - حدث `DATABASE_URL` في متغيرات البيئة

4. **النشر**
   - اضغط "Deploy" وسيتم النشر تلقائياً

## تخصيص بيانات المكتب

لتخصيص بيانات مكتبك العقاري، قم بتعديل المتغيرات التالية في ملف `.env.local`:

```env
NEXT_PUBLIC_COMPANY_NAME="اسم مكتبك العقاري"
NEXT_PUBLIC_COMPANY_LICENSE="رقم الترخيص العقاري"
NEXT_PUBLIC_COMPANY_REGISTRATION="السجل التجاري"
NEXT_PUBLIC_COMPANY_ADDRESS="عنوان المكتب"
NEXT_PUBLIC_COMPANY_PHONE="رقم الهاتف"
NEXT_PUBLIC_COMPANY_EMAIL="البريد الإلكتروني"
NEXT_PUBLIC_COMPANY_WHATSAPP="رقم الواتساب"
```

## الميزات القانونية

الموقع يتضمن جميع المتطلبات القانونية المطلوبة في السعودية:

- ✅ عرض رقم الترخيص العقاري
- ✅ عرض السجل التجاري
- ✅ صفحة سياسة الخصوصية
- ✅ صفحة شروط الاستخدام
- ✅ صفحة إخلاء المسؤولية
- ✅ نموذج موافقة المستخدم على سياسة الخصوصية

## الدعم والمساعدة

إذا واجهت أي مشاكل أو لديك استفسارات:

1. تحقق من ملف `README.md`
2. راجع ملفات التوثيق في مجلد `docs/`
3. افتح issue في GitHub

## الترخيص

هذا المشروع مرخص تحت رخصة MIT. راجع ملف `LICENSE` للتفاصيل.

---

**ملاحظة**: تأكد من تحديث جميع البيانات التجريبية ببياناتك الفعلية قبل النشر على الإنترنت.
