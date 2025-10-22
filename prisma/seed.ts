import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 بدء إدراج البيانات التجريبية...')

  // إنشاء المستخدم الرئيسي
  const ownerPassword = await bcrypt.hash('admin123', 10)
  const owner = await prisma.user.upsert({
    where: { email: 'admin@realstate.com' },
    update: {},
    create: {
      email: 'admin@realstate.com',
      name: 'مدير المكتب',
      role: 'owner',
      password: ownerPassword,
    },
  })

  // إنشاء وكيل
  const agentPassword = await bcrypt.hash('agent123', 10)
  const agent = await prisma.user.upsert({
    where: { email: 'agent@realestate-sa.com' },
    update: {},
    create: {
      email: 'agent@realestate-sa.com',
      name: 'أحمد محمد',
      role: 'agent',
      password: agentPassword,
    },
  })

  console.log('✅ تم إنشاء المستخدمين:', { owner: owner.email, agent: agent.email })

  // إنشاء العقارات التجريبية
  const properties = [
    {
      title: 'فيلا فاخرة للبيع بحي النخيل - الرياض',
      slug: 'villa-nakheel-riyadh',
      description: 'فيلا مساحتها 450 م2، 5 غرف نوم، 4 حمامات، مسبح خاص، موقف سيارات، حديقة واسعة، تصميم حديث ومتطور، قريبة من الخدمات والمرافق.',
      price: 2500000,
      currency: 'SAR',
      type: 'villa',
      status: 'sale',
      city: 'الرياض',
      district: 'النخيل',
      address: 'حي النخيل، شارع الملك فهد',
      areaSqm: 450,
      bedrooms: 5,
      bathrooms: 4,
      features: JSON.stringify(['مسبح', 'موقف', 'حديقة', 'مصعد', 'نظام أمني']),
      published: true,
      agentId: agent.id,
      latitude: 24.7136,
      longitude: 46.6753,
    },
    {
      title: 'شقة مفروشة للإيجار في حي العليا - الرياض',
      slug: 'apartment-alia-riyadh',
      description: 'شقة مفروشة بالكامل، 3 غرف نوم، 2 حمام، صالة واسعة، مطبخ مجهز، موقف سيارات، مصعد، قريبة من المولات والمستشفيات.',
      price: 8000,
      currency: 'SAR',
      type: 'apartment',
      status: 'rent',
      city: 'الرياض',
      district: 'العليا',
      address: 'حي العليا، شارع التحلية',
      areaSqm: 120,
      bedrooms: 3,
      bathrooms: 2,
      features: JSON.stringify(['مفروشة', 'موقف', 'مصعد', 'مكيفات']),
      published: true,
      agentId: agent.id,
      latitude: 24.6877,
      longitude: 46.7219,
    },
    {
      title: 'أرض سكنية للبيع في حي الروضة - جدة',
      slug: 'land-rawda-jeddah',
      description: 'أرض سكنية مساحتها 600 م2، في موقع مميز، قريبة من البحر، خدمات متوفرة، مناسبة للبناء السكني أو الاستثماري.',
      price: 1800000,
      currency: 'SAR',
      type: 'land',
      status: 'sale',
      city: 'جدة',
      district: 'الروضة',
      address: 'حي الروضة، شارع الملك عبدالعزيز',
      areaSqm: 600,
      bedrooms: null,
      bathrooms: null,
      features: JSON.stringify(['خدمات متوفرة', 'قريبة من البحر']),
      published: true,
      agentId: agent.id,
      latitude: 21.4858,
      longitude: 39.1925,
    },
    {
      title: 'محل تجاري للإيجار في حي الفيصلية - الدمام',
      slug: 'shop-faisaliya-dammam',
      description: 'محل تجاري في موقع مميز، مساحة 80 م2، واجهة زجاجية، موقف سيارات، مناسبة للمطاعم أو المحلات التجارية.',
      price: 12000,
      currency: 'SAR',
      type: 'shop',
      status: 'rent',
      city: 'الدمام',
      district: 'الفيصلية',
      address: 'حي الفيصلية، شارع الملك سعود',
      areaSqm: 80,
      bedrooms: null,
      bathrooms: 1,
      features: JSON.stringify(['واجهة زجاجية', 'موقف', 'موقع مميز']),
      published: true,
      agentId: agent.id,
      latitude: 26.4207,
      longitude: 50.0888,
    },
    {
      title: 'فيلا راقية للبيع في حي الياسمين - الرياض',
      slug: 'villa-yasmin-riyadh',
      description: 'فيلا راقية مساحتها 380 م2، 4 غرف نوم، 3 حمامات، مسبح، حديقة، موقف سيارات، نظام أمني متطور، قريبة من المدارس والجامعات.',
      price: 2200000,
      currency: 'SAR',
      type: 'villa',
      status: 'sale',
      city: 'الرياض',
      district: 'الياسمين',
      address: 'حي الياسمين، شارع الأمير محمد بن عبدالعزيز',
      areaSqm: 380,
      bedrooms: 4,
      bathrooms: 3,
      features: JSON.stringify(['مسبح', 'حديقة', 'موقف', 'نظام أمني']),
      published: true,
      agentId: agent.id,
      latitude: 24.6408,
      longitude: 46.7728,
    },
    {
      title: 'شقة عائلية للإيجار في حي السلامة - جدة',
      slug: 'apartment-salamah-jeddah',
      description: 'شقة عائلية واسعة، 4 غرف نوم، 3 حمامات، صالة كبيرة، مطبخ مجهز، شرفة واسعة، موقف سيارات، مصعد، قريبة من البحر.',
      price: 10000,
      currency: 'SAR',
      type: 'apartment',
      status: 'rent',
      city: 'جدة',
      district: 'السلامة',
      address: 'حي السلامة، شارع الملك عبدالله',
      areaSqm: 150,
      bedrooms: 4,
      bathrooms: 3,
      features: JSON.stringify(['شرفة', 'موقف', 'مصعد', 'قريبة من البحر']),
      published: true,
      agentId: agent.id,
      latitude: 21.5169,
      longitude: 39.2192,
    },
  ]

  for (const propertyData of properties) {
    const property = await prisma.property.upsert({
      where: { slug: propertyData.slug },
      update: {},
      create: propertyData,
    })

    const imageUrls = [
      '/images/sample-property-1.jpg',
      '/images/sample-property-2.jpg',
      '/images/sample-property-3.jpg',
    ]

    for (let i = 0; i < imageUrls.length; i++) {
      await prisma.image.upsert({
        where: {
          id: `${property.id}-img-${i}`,
        },
        update: {},
        create: {
          id: `${property.id}-img-${i}`,
          url: imageUrls[i],
          alt: `${property.title} - صورة ${i + 1}`,
          propertyId: property.id,
          order: i,
        },
      })
    }

    console.log(`✅ تم إنشاء العقار: ${property.title}`)
  }

  console.log('🎉 تم إدراج جميع البيانات التجريبية بنجاح!')
}

main()
  .catch((e) => {
    console.error('❌ خطأ في إدراج البيانات:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })