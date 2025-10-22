# دليل التخصيص

## تخصيص بيانات المكتب

### 1. تحديث متغيرات البيئة
في ملف `.env.local`، غيّر القيم التالية:

```env
# معلومات المكتب الأساسية
NEXT_PUBLIC_COMPANY_NAME="اسم مكتبك العقاري"
NEXT_PUBLIC_COMPANY_LICENSE="رقم الترخيص العقاري الفعلي"
NEXT_PUBLIC_COMPANY_REGISTRATION="السجل التجاري الفعلي"
NEXT_PUBLIC_COMPANY_ADDRESS="عنوان المكتب الفعلي"
NEXT_PUBLIC_COMPANY_PHONE="رقم الهاتف الفعلي"
NEXT_PUBLIC_COMPANY_EMAIL="البريد الإلكتروني الفعلي"
NEXT_PUBLIC_COMPANY_WHATSAPP="رقم الواتساب الفعلي"

# إعدادات الموقع
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

### 2. تحديث الشعار والألوان
في ملف `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // غيّر هذه الألوان لتتناسب مع هوية مكتبك
          50: '#eff6ff',
          100: '#dbeafe',
          // ... باقي الألوان
        }
      }
    }
  }
}
```

### 3. تحديث الخطوط
في ملف `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@200;300;400;500;600;700;800;900&display=swap');

html {
  font-family: 'YourFont', 'Cairo', 'Tajawal', system-ui, sans-serif;
}
```

## تخصيص المحتوى

### 1. تحديث النصوص
- **الصفحة الرئيسية**: عدّل النصوص في `src/app/page.tsx`
- **صفحة من نحن**: عدّل المحتوى في `src/app/about/page.tsx`
- **صفحة اتصل بنا**: عدّل المعلومات في `src/app/contact/page.tsx`

### 2. تحديث الصفحات القانونية
- **سياسة الخصوصية**: `src/app/privacy/page.tsx`
- **شروط الاستخدام**: `src/app/terms/page.tsx`
- **إخلاء المسؤولية**: `src/app/disclaimer/page.tsx`

### 3. إضافة صفحات جديدة
```bash
# إنشاء صفحة جديدة
mkdir src/app/new-page
echo 'export default function NewPage() { return <div>صفحة جديدة</div> }' > src/app/new-page/page.tsx
```

## تخصيص العقارات

### 1. إضافة أنواع عقارات جديدة
في ملف `src/types/index.ts`:

```typescript
export interface Property {
  type: 'apartment' | 'villa' | 'land' | 'shop' | 'office' | 'warehouse';
  // أضف الأنواع الجديدة هنا
}
```

### 2. تحديث الفلاتر
في ملف `src/app/properties/page.tsx`، أضف الخيارات الجديدة:

```jsx
<select>
  <option value="">جميع الأنواع</option>
  <option value="apartment">شقة</option>
  <option value="villa">فيلا</option>
  <option value="land">أرض</option>
  <option value="shop">محل</option>
  <option value="office">مكتب</option>  {/* جديد */}
  <option value="warehouse">مستودع</option>  {/* جديد */}
</select>
```

### 3. إضافة ميزات جديدة
في ملف `prisma/schema.prisma`:

```prisma
model Property {
  features String  // JSON string for features array
  // يمكنك إضافة حقول جديدة هنا
  parkingSpaces Int?
  floorNumber   Int?
  buildingAge   Int?
}
```

## تخصيص التصميم

### 1. إضافة مكونات جديدة
```bash
mkdir src/components/ui
echo 'export function Button({ children, ...props }) { return <button {...props}>{children}</button> }' > src/components/ui/Button.tsx
```

### 2. تخصيص الألوان
في ملف `src/app/globals.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

### 3. إضافة أنماط مخصصة
```css
.custom-gradient {
  background: linear-gradient(135deg, #your-color1, #your-color2);
}
```

## تخصيص الوظائف

### 1. إضافة API endpoints جديدة
```bash
mkdir src/app/api/new-endpoint
echo 'export async function GET() { return Response.json({ message: "Hello" }) }' > src/app/api/new-endpoint/route.ts
```

### 2. إضافة قاعدة بيانات جديدة
في ملف `prisma/schema.prisma`:

```prisma
model NewModel {
  id        String   @id @default(cuid())
  name      String
  createdAt DateTime @default(now())
}
```

### 3. إضافة وظائف مساعدة
في ملف `src/lib/utils.ts`:

```typescript
export function newUtilityFunction() {
  // وظيفة جديدة
}
```

## تخصيص SEO

### 1. تحديث Meta Tags
في ملف `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'اسم مكتبك - عقارات للبيع والإيجار',
  description: 'وصف موقعك المخصص',
  keywords: 'كلمات مفتاحية مخصصة',
}
```

### 2. إضافة Schema.org
في ملف `src/app/page.tsx`:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "اسم مكتبك",
      "url": "https://your-domain.com",
      // ... باقي البيانات
    })
  }}
/>
```

## نصائح للتخصيص

### 1. النسخ الاحتياطي
- احتفظ بنسخة من الملفات الأصلية
- استخدم Git لحفظ التغييرات
- اختبر التغييرات في بيئة التطوير أولاً

### 2. الأداء
- استخدم صور محسّنة
- فعّل ضغط الملفات
- راجع سرعة الموقع بانتظام

### 3. الأمان
- لا تضع معلومات حساسة في الكود
- استخدم متغيرات البيئة للمعلومات السرية
- راجع إعدادات الأمان بانتظام

### 4. الاختبار
- اختبر جميع الوظائف بعد التغييرات
- تأكد من عمل الموقع على جميع الأجهزة
- راجع تجربة المستخدم

## الحصول على المساعدة

إذا واجهت مشاكل في التخصيص:
1. راجع الوثائق الرسمية للتقنيات المستخدمة
2. ابحث في مجتمعات المطورين
3. استخدم أدوات التطوير في المتصفح
4. راجع ملفات README.md و DEPLOYMENT.md

