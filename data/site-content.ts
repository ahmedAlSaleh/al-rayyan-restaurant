export type MenuItem = {
  name: string;
  image: string;
  price: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export type OfferItem = {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  oldPrice: string;
  newPrice: string;
};

export type QAItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
};

export type QuickLink = {
  label: string;
  href: string;
};

export const siteContent = {
  brand: {
    name: "مطعم الريان",
    shortTagline: "من المطبخ مباشرة إلى بابك",
    heroCopy: "نقدم مشويات فاخرة، أطباق عربية طازجة، وسندويشات سريعة بنكهة بيتية أصلية.",
  },
  actions: {
    whatsappHref:
      "https://wa.me/963951407689?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8.",
    whatsappLabel: "اطلب عبر واتساب",
    orderNowLabel: "اطلب الآن",
    startOrderLabel: "ابدأ الطلب",
    menuHref: "#menu",
    orderFormHref: "#order-form",
  },
  menu: {
    eyebrow: "المنيو",
    title: "اختر من منتجاتنا الأكثر طلبًا",
    description: "كل العناصر ثابتة في هذه المرحلة، لكنها جاهزة للعرض المباشر بنفس شكل تجربة المطعم.",
    pricingNote: "الأسعار بالليرة السورية وتشمل التغليف. قد تختلف رسوم التوصيل حسب المنطقة.",
    categories: [
      {
        id: "burgers",
        title: "برغر",
        subtitle: "سندويشات البرغر",
        items: [
          {
            name: "برغر الريان الكلاسيكي",
            image: "/menu/burger-classic.jpg",
            price: "38,000 ل.س",
            description: "لحم بقري مشوي، خس طازج، صوص خاص، وخبز محمص.",
          },
          {
            name: "دبل تشيز برغر",
            image: "/menu/burger-double.jpg",
            price: "46,000 ل.س",
            description: "قطعتان لحم مع جبنة شيدر وصوص باربكيو مدخن.",
          },
          {
            name: "برغر الدجاج المقرمش",
            image: "/menu/burger-chicken.jpg",
            price: "34,000 ل.س",
            description: "صدر دجاج مقرمش، مايونيز حار، ومخلل خفيف.",
          },
          {
            name: "برغر مشروم وصوص كريمي",
            image: "/menu/burger-classic.jpg",
            price: "43,000 ل.س",
            description: "لحم بقري مع مشروم مقلي وصوص كريمي وجبنة ذائبة.",
          },
        ],
      },
      {
        id: "pizza",
        title: "بيتزا",
        subtitle: "بيتزا طازجة",
        items: [
          {
            name: "بيتزا مارجريتا",
            image: "/menu/pizza-margherita.jpg",
            price: "42,000 ل.س",
            description: "صلصة طماطم إيطالية، موزاريلا طازجة، وريحان.",
          },
          {
            name: "بيتزا ببروني",
            image: "/menu/pizza-pepperoni.jpg",
            price: "49,000 ل.س",
            description: "شرائح ببروني، جبنة مزدوجة، وطبقة مقرمشة.",
          },
          {
            name: "بيتزا خضار مشوية",
            image: "/menu/pizza-veggie.jpg",
            price: "44,000 ل.س",
            description: "فلفل، فطر، زيتون، وبصل أحمر مع أعشاب عطرية.",
          },
          {
            name: "بيتزا دجاج باربكيو",
            image: "/menu/pizza-margherita.jpg",
            price: "51,000 ل.س",
            description: "قطع دجاج مشوية، بصل مكرمل، وصوص باربكيو خفيف.",
          },
        ],
      },
      {
        id: "drinks",
        title: "مشروبات",
        subtitle: "مشروبات باردة",
        items: [
          {
            name: "عصير برتقال طبيعي",
            image: "/menu/drink-orange.jpg",
            price: "12,000 ل.س",
            description: "عصير طازج 100% بدون إضافات صناعية.",
          },
          {
            name: "موهيتو ليمون ونعناع",
            image: "/menu/drink-mojito.jpg",
            price: "14,000 ل.س",
            description: "انتعاش قوي مع ثلج مجروش ولمسة سكر خفيفة.",
          },
          {
            name: "مشروب غازي بارد",
            image: "/menu/drink-cola.jpg",
            price: "8,000 ل.س",
            description: "اختيارك المفضل مع الوجبات السريعة.",
          },
          {
            name: "ليموناضة الريان",
            image: "/menu/drink-orange.jpg",
            price: "11,000 ل.س",
            description: "ليمون طازج ونعناع مع لمسة سكر متوازنة.",
          },
        ],
      },
      {
        id: "meals",
        title: "وجبات",
        subtitle: "وجبات كاملة",
        items: [
          {
            name: "وجبة مشاوي الريان",
            image: "/menu/meal-grill.jpg",
            price: "58,000 ل.س",
            description: "كباب ودجاج مشوي مع بطاطا وسلطة موسمية.",
          },
          {
            name: "وجبة دجاج مشوي",
            image: "/menu/meal-chicken.jpg",
            price: "52,000 ل.س",
            description: "نصف دجاجة متبلة مع أرز وخضار مشوية.",
          },
          {
            name: "وجبة أرز ولحم",
            image: "/menu/meal-rice.jpg",
            price: "55,000 ل.س",
            description: "أرز مبهر مع شرائح لحم طرية وصوص جانبي.",
          },
          {
            name: "وجبة عائلية اقتصادية",
            image: "/menu/meal-grill.jpg",
            price: "125,000 ل.س",
            description: "تشكيلة متنوعة تكفي 3-4 أشخاص مع مقبلات.",
          },
        ],
      },
    ] as MenuCategory[],
  },
  offers: {
    eyebrow: "العروض",
    title: "عروض اليوم التي تدفع للشراء الآن",
    description: "عروض محدودة بزمن واضح وقيمة أعلى، لتشجيع العميل على اتخاذ قرار الشراء مباشرة.",
    items: [
      {
        id: "today-special",
        title: "عرض اليوم",
        badge: "عرض اليوم",
        image: "/offers/today-special.jpg",
        description: "طبق رئيسي + مقبلات + مشروب بسعر خاص حتى نهاية اليوم.",
        oldPrice: "69,000 ل.س",
        newPrice: "52,000 ل.س",
      },
      {
        id: "special-meals",
        title: "وجبات مميزة",
        badge: "وجبات خاصة",
        image: "/offers/family-combo.jpg",
        description: "وجبات كاملة بتشكيلة متنوعة لعشاق المشاوي والطعم الأصيل.",
        oldPrice: "75,000 ل.س",
        newPrice: "59,000 ل.س",
      },
      {
        id: "combos",
        title: "كومبو الأصدقاء",
        badge: "كومبو",
        image: "/offers/combo-party.jpg",
        description: "بيتزا كبيرة + برغر + مشروبان، مثالي للمشاركة السريعة.",
        oldPrice: "96,000 ل.س",
        newPrice: "72,000 ل.س",
      },
      {
        id: "sales",
        title: "تخفيضات سريعة",
        badge: "تخفيضات",
        image: "/offers/flash-sale.jpg",
        description: "خصم فوري على الطلبات عبر الموقع لفترة محدودة يوميًا.",
        oldPrice: "خصم 10%",
        newPrice: "خصم 25%",
      },
    ] as OfferItem[],
  },
  gallery: {
    eyebrow: "معرض الأطباق",
    title: "صور حقيقية تحفّز الطلب فورًا",
    description: "اضغط على أي صورة لفتح عرض منبثق أكبر. هذا القسم مخصص لجذب الانتباه بصريًا.",
    items: [
      {
        id: "gallery-1",
        src: "/menu/burger-classic.jpg",
        title: "برغر كلاسيكي",
        category: "برغر",
        description: "لحم مشوي وخبز محمص مع صوص الريان.",
      },
      {
        id: "gallery-2",
        src: "/menu/pizza-pepperoni.jpg",
        title: "بيتزا ببروني",
        category: "بيتزا",
        description: "طبقة جبنة غنية وحواف مقرمشة.",
      },
      {
        id: "gallery-3",
        src: "/menu/meal-grill.jpg",
        title: "وجبة مشاوي",
        category: "وجبات",
        description: "تشكيلة مشاوي مشهية مناسبة للمشاركة.",
      },
      {
        id: "gallery-4",
        src: "/offers/today-special.jpg",
        title: "عرض اليوم",
        category: "عروض",
        description: "طبق رئيسي + مقبلات + مشروب بسعر مخفض.",
      },
      {
        id: "gallery-5",
        src: "/restaurant-hero.jpg",
        title: "أجواء المطعم",
        category: "الأجواء",
        description: "جلسة دافئة ومريحة للعائلة والأصدقاء.",
      },
      {
        id: "gallery-6",
        src: "/menu/drink-mojito.jpg",
        title: "موهيتو منعش",
        category: "مشروبات",
        description: "انتعاش قوي بلمسة ليمون ونعناع.",
      },
      {
        id: "gallery-7",
        src: "/offers/combo-party.jpg",
        title: "كومبو الأصدقاء",
        category: "عروض",
        description: "وجبة جماعية اقتصادية بطابع عصري.",
      },
      {
        id: "gallery-8",
        src: "/menu/meal-rice.jpg",
        title: "وجبة الأرز واللحم",
        category: "وجبات",
        description: "أرز مبهر مع شرائح لحم طرية.",
      },
    ] as GalleryItem[],
  },
  delivery: {
    eyebrow: "معلومات التوصيل",
    title: "كل ما يخص التوصيل قبل الطلب",
    description: "تفاصيل واضحة وسريعة تساعد العميل على اتخاذ قرار الشراء مباشرة بدون تردد.",
    details: [
      {
        question: "هل التوصيل متاح؟",
        answer: "نعم، خدمة التوصيل متاحة يوميًا طوال ساعات العمل.",
      },
      {
        question: "ما المناطق التي يتم التوصيل إليها؟",
        answer: "التوصيل متاح لمعظم أحياء المدينة القريبة والوسطية. يمكن تأكيد الحي قبل تثبيت الطلب.",
      },
      {
        question: "ما هو وقت التوصيل التقريبي؟",
        answer: "من 30 إلى 55 دقيقة حسب المنطقة وكثافة الطلبات.",
      },
      {
        question: "هل يوجد حد أدنى للطلب؟",
        answer: "نعم، الحد الأدنى للطلب هو 35,000 ل.س للتوصيل.",
      },
    ] as QAItem[],
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "إجابات سريعة قبل إتمام الطلب",
    description: "الرد على الأسئلة المتكررة يزيد الثقة ويقلل التردد عند العميل.",
    items: [
      {
        question: "هل توجد رسوم توصيل؟",
        answer: "تختلف رسوم التوصيل حسب المنطقة، وتظهر لك قبل تأكيد الطلب النهائي.",
      },
      {
        question: "ما طرق الدفع المتاحة؟",
        answer: "الدفع عند الاستلام متاح دائمًا، ويمكن إضافة الدفع الإلكتروني لاحقًا عند الحاجة.",
      },
      {
        question: "هل يمكن تعديل الطلب بعد الإرسال؟",
        answer: "نعم، يمكن التعديل خلال أول 5 دقائق عبر الاتصال أو واتساب قبل بدء التحضير.",
      },
      {
        question: "ماذا يحدث إذا تأخر التوصيل؟",
        answer: "فريق الدعم يتواصل معك مباشرة ويعطيك تحديثًا فوريًا بحالة الطلب ووقت الوصول.",
      },
    ] as QAItem[],
  },
  orderForm: {
    eyebrow: "نموذج الطلب",
    title: "اطلب مباشرة من الموقع بخطوات بسيطة",
    description:
      "إذا لم يكن الطلب عبر واتساب فقط، يمكنك تعبئة النموذج التالي وسيتواصل معك فريق المطعم للتأكيد.",
    placeholders: {
      name: "اكتب الاسم الكامل",
      phone: "09XXXXXXXX",
      address: "الحي - الشارع - رقم البناء",
      order: "مثال: 2 برغر دبل + بيتزا مارجريتا + 2 مشروب",
      notes: "أي تفاصيل إضافية: درجة الاستواء، وقت التوصيل...",
    },
  },
  contact: {
    eyebrow: "معلومات التواصل",
    title: "تواصل معنا بسهولة",
    description: "جميع قنوات التواصل الأساسية متاحة للاتصال السريع أو طلب الموقع أو الاستفسار.",
    phoneLabel: "رقم واتساب (دمشق - سوريا)",
    phoneHref:
      "https://wa.me/963951407689?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D9%85%D8%B7%D8%B9%D9%85%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D9%86.",
    phoneDisplay: "+963 951 407 689",
    whatsappLabel: "واتساب",
    whatsappHref:
      "https://wa.me/963951407689?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D9%85%D8%B7%D8%B9%D9%85%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D9%86.",
    whatsappDisplay: "+963 951 407 689 (0951407689)",
    addressLabel: "العنوان",
    address: "دمشق - المزة - الشارع الرئيسي - قرب الساحة.",
    locationLabel: "الموقع",
    locationHref: "https://maps.google.com/?q=Damascus+Al+Mazza",
    locationText: "افتح الموقع على خرائط Google",
    openingHoursLabel: "أوقات العمل",
    openingHours: [
      "السبت - الخميس: 11:00 صباحًا - 12:30 منتصف الليل",
      "الجمعة: 1:30 ظهرًا - 1:00 بعد منتصف الليل",
    ],
  },
  qr: {
    eyebrow: "QR Code",
    title: "كود جاهز للطلب السريع",
    description:
      "العميل يفتح الكاميرا ويمسح الكود لينتقل مباشرة إلى واتساب الطلب. مناسب للطباعة والاستخدام في كل نقاط البيع.",
    image: "/qr/al-rayyan-order-qr.png",
    downloadLabel: "تحميل QR للطباعة",
    caption: "امسح الكود للانتقال مباشرة إلى واتساب الطلب في مطعم الريان.",
    usageItems: [
      "على الطاولات داخل المطعم",
      "على الكاشير ونقطة الدفع",
      "على أكياس التغليف والتوصيل",
      "على صفحات التواصل الاجتماعي",
    ],
  },
  footer: {
    about:
      "نسخة عرض ثابتة توضح تجربة موقع مطعم الريان: من التصفح إلى الطلب والتواصل بشكل واضح وسريع.",
    quickLinks: [
      { label: "الرئيسية", href: "#" },
      { label: "المنيو", href: "#menu" },
      { label: "المعرض", href: "#gallery" },
      { label: "العروض", href: "#offers" },
      { label: "نموذج الطلب", href: "#order-form" },
      { label: "التوصيل", href: "#delivery-info" },
      { label: "الأسئلة الشائعة", href: "#faq" },
      { label: "التواصل", href: "#contact-info" },
      { label: "QR Code", href: "#qr-code" },
    ] as QuickLink[],
    copyright: "© 2026 مطعم الريان. جميع الحقوق محفوظة.",
    builtByLabel: "Created by Programmik",
    builtByUrl: "https://ahmedalsaleh.github.io/programmik/",
  },
} as const;
