# تعليمات النشر على Vercel

## خطوات النشر

### 1. إعداد المستودع على GitHub
```bash
# إنشاء مستودع جديد على GitHub
# ثم ربط المشروع المحلي بالمستودع
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/real-estate-website.git
git push -u origin main
```

### 2. النشر على Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخولك أو أنشئ حساب جديد
3. اضغط "New Project"
4. استورد المشروع من GitHub
5. اختر المستودع الذي أنشأته

### 3. إعداد متغيرات البيئة في Vercel
في لوحة تحكم Vercel، اذهب إلى Settings > Environment Variables وأضف:

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
NEXT_PUBLIC_SITE_URL="https://your-domain.vercel.app"
```

### 4. إعداد قاعدة البيانات للإنتاج
للإنتاج، استخدم قاعدة بيانات PostgreSQL:

1. **استخدم Vercel Postgres** (مجاني):
   - في لوحة تحكم Vercel، اذهب إلى Storage
   - اضغط "Create Database" واختر Postgres
   - انسخ رابط الاتصال وأضفه كـ `DATABASE_URL`

2. **أو استخدم خدمة خارجية** مثل:
   - Supabase (مجاني)
   - PlanetScale (مجاني)
   - Railway (مجاني)

### 5. تحديث إعدادات Prisma للإنتاج
```bash
# في ملف prisma/schema.prisma، غيّر:
datasource db {
  provider = "postgresql"  # بدلاً من "sqlite"
  url      = env("DATABASE_URL")
}
```

### 6. نشر التحديثات
```bash
# بعد إجراء أي تغييرات
git add .
git commit -m "Update for production"
git push origin main
# سيتم النشر تلقائياً على Vercel
```

## إعداد النطاق المخصص

### 1. شراء نطاق
- استخدم أي مزود نطاقات (GoDaddy, Namecheap, etc.)

### 2. ربط النطاق بـ Vercel
1. في لوحة تحكم Vercel، اذهب إلى Domains
2. اضغط "Add Domain"
3. أدخل نطاقك
4. اتبع التعليمات لإعداد DNS

### 3. إعداد DNS
أضف هذه السجلات في إعدادات DNS لنطاقك:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

## نصائح مهمة

### الأمان
- استخدم كلمات مرور قوية لـ JWT_SECRET و NEXTAUTH_SECRET
- فعّل HTTPS (مفعل تلقائياً في Vercel)
- راجع إعدادات الأمان بانتظام

### الأداء
- استخدم صور محسّنة (WebP)
- فعّل ضغط الصور
- استخدم CDN (مفعل تلقائياً في Vercel)

### النسخ الاحتياطي
- فعّل النسخ الاحتياطي لقاعدة البيانات
- احتفظ بنسخة من ملف .env.local
- راجع البيانات بانتظام

## استكشاف الأخطاء

### مشاكل شائعة
1. **خطأ في قاعدة البيانات**: تأكد من صحة DATABASE_URL
2. **خطأ في البناء**: تحقق من الأخطاء في Terminal
3. **مشاكل في الصور**: تأكد من وجود الصور في مجلد public

### الحصول على المساعدة
- راجع [وثائق Vercel](https://vercel.com/docs)
- راجع [وثائق Next.js](https://nextjs.org/docs)
- راجع [وثائق Prisma](https://www.prisma.io/docs)

