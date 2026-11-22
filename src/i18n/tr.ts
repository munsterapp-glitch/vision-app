import type { Translations } from './types';

export const tr: Translations = {
  nav: {
    playground: 'Canlı Sandbox',
    n8n: 'n8n & IMAP',
    roi: 'ROI Hesaplayıcı',
    analysis: 'Ön Analiz',
    cta: 'Proje Talebi',
  },
  hero: {
    kicker: 'İnteraktif B2B Sandbox · demo.vision-it-systems.de',
    headline: 'Yapay Zeka Otomasyonu ve Yazılım Sistemlerini Canlı Test Edin.',
    subheadline:
      'Sadece sunum değil, gerçek deneyim: 7/24 AI destek ajanlarımızı, otomatik n8n IMAP e-posta akışlarını, Telegram iş botlarını ve ROI hesaplayıcımızı tarayıcıda canlı deneyin.',
    primaryCta: 'Ücretsiz Ön Analiz',
    secondaryCta: 'Sandbox’ı Başlat',
    locationProof: 'Almanya’da KVKK/GDPR uyumlu geliştirme ve barındırma (Docker & Hetzner)',
    metrics: [
      { value: '1,4 sn', label: 'Ort. E-posta Sınıflandırma', context: 'n8n + LLM IMAP hattı' },
      { value: '%70', label: 'Daha Az Rutin İş', context: '12 aylık gerçek ölçüm' },
      { value: '7/24', label: 'Lead Kalifikasyonu', context: 'Chatbox, Vapi & LiveKit' },
      { value: '%100', label: 'Almanya Sunucuları', context: 'Hetzner üzerinde Docker' },
    ],
  },
  playground: {
    sectionTitle: 'Live Automation & AI Sandbox',
    sectionSubtitle:
      'Dört üretim senaryosundan birini seçin ve otomasyon modüllerimizi doğrudan canlı olarak test edin.',
    tabs: {
      chatbot: {
        label: '01. AI Chatbot & Ses',
        shortDesc: 'Chatbox, Vapi & LiveKit Ajanı',
      },
      n8n: {
        label: '02. n8n & IMAP Motoru',
        shortDesc: 'E-posta Ayrıştırma & CRM',
      },
      telegram: {
        label: '03. Telegram İş Botu',
        shortDesc: 'Sipariş, Teklif & Ses-Görev',
      },
      apps_roi: {
        label: '04. Uygulamalar, Docker & ROI',
        shortDesc: 'FlutterFlow, Hetzner & Hesaplama',
      },
    },
  },
  chatbot: {
    modeText: 'Metin Sohbeti',
    modeVoice: 'Sesli Ajan (Vapi / LiveKit)',
    agentName: 'Vision AI Danışmanı',
    agentRole: 'Müşteri Adayı & Randevu Planlama',
    welcomeMsg:
      'Merhaba! Ben Vision IT Systems dijital asistanıyım. n8n otomasyonu, Telegram botları, özel uygulamalar hakkında soru sorabilir veya hemen bir görüşme planlayabilirsiniz.',
    inputPlaceholder: 'Mesajınızı yazın, örn: "Faturaları nasıl otomatikleştiriyorsunuz?"',
    send: 'Gönder',
    reset: 'Sıfırla',
    quickPromptsLabel: 'Hızlı test soruları:',
    quickPrompts: [
      'n8n nasıl çalışır?',
      'Telegram Bot maliyeti nedir?',
      'Randevu al',
      'GDPR barındırma nasıl işler?',
    ],
    crmPanelTitle: 'Algılanan CRM Verileri (Canlı)',
    crmEmpty: 'Otomatik müşteri adayı analizini görmek için bir soru sorun veya hızlı butonlara tıklayın.',
    crmFields: {
      intent: 'Algılanan Amaç',
      companySize: 'Odak Alanı',
      recommendedStack: 'Önerilen Altyapı',
      qualification: 'Lead Durumu',
    },
    bookSlotTitle: 'Uygun Görüşme Saatleri (15 dk Video Görüşme)',
    slots: ['Yarın, 10:00 CET', 'Yarın, 14:30 CET', 'Perşembe, 11:00 CET'],
    bookSlotBtn: 'Saati Seç',
    transferToForm: 'Bu saat ile talebi tamamla',
    voiceTitle: 'Gerçek Zamanlı Sesli Ajan Simülasyonu (Vapi / LiveKit)',
    voiceSubtitle:
      '600 ms altı gecikme ile çalışan gelen B2B sesli randevu görüşmesini dinleyin.',
    voiceStart: 'Örnek Çağrıyı Oynat',
    voiceStop: 'Çağrıyı Durdur',
    voiceRunning: 'Canlı ses deşifresi aktif',
  },
  n8n: {
    title: 'n8n & IMAP E-posta Otomasyon Simülatörü',
    subtitle:
      'Örnek bir müşteri e-postası seçin veya metni düzenleyin. Sınıflandırma, JSON çıkarma ve otomatik yanıtı görmek için iş akışını başlatın.',
    presetsLabel: 'E-posta Şablonu Seçin:',
    senderLabel: 'Gönderen (IMAP From)',
    subjectLabel: 'Konu (Subject)',
    bodyLabel: 'E-posta İçeriği',
    runButton: 'İş Akışını Başlat',
    runningButton: 'Çalışıyor...',
    resetButton: 'Sıfırla',
    executionTime: 'Çalışma Süresi',
    nodes: [
      { id: 'imap', title: 'IMAP Trigger', subtitle: 'Gelen kutusunu izle' },
      { id: 'ai', title: 'AI Classifier', subtitle: 'Amaç & veri çıkarımı' },
      { id: 'crm', title: 'CRM / Google Sheets', subtitle: 'Lead & kayıt oluştur' },
      { id: 'reply', title: 'Auto-Reply', subtitle: 'Otomatik yanıt taslağı' },
    ],
    jsonOutputTitle: 'Çıkarılan JSON Verisi',
    autoReplyTitle: 'Oluşturulan Otomatik Yanıt',
    copyJson: 'JSON Kopyala',
    copied: 'Kopyalandı',
    idleHint: '4 adımlı otomasyonu çalıştırmak için “İş Akışını Başlat”a tıklayın.',
  },
  telegram: {
    title: 'Telegram İş Botu Önizlemesi',
    subtitle:
      'Sipariş durumu, anlık teklif veya sesli nottan görev oluşturmayı test etmek için telefon ekranındaki butonlara tıklayın.',
    botHandle: '@VisionITsystems_bot',
    botStatus: 'Bot · Webhook ile Aktif',
    welcomeText:
      'Vision IT Business Bot’a hoş geldiniz. Otomatik bir iş süreci seçin:',
    resetBtn: 'Sohbeti Sıfırla',
    openInTelegram: 'Telegram’da Aç',
    inspectorTitle: 'Webhook & Callback Günlüğü',
    inspectorSubtitle: 'Telefondaki her tıklama n8n/Docker sunucunuza imzalı bir Telegram webhook gönderir.',
    inspectorEmpty: 'Canlı webhook verisini görmek için Telegram ekranındaki butonlara tıklayın.',
    architectureTitle: 'Üretim Mimarisi',
    architectureSteps: [
      '1. Telegram Bot API şifreli güncellemeyi Hetzner Docker konteynerine iletir.',
      '2. Node.js / n8n worker yetki kontrolü yapar ve ERP, CRM veya Whisper’ı sorgular.',
      '3. Yapılandırılmış yanıt veya PDF teklif 1 saniyeden kısa sürede döner.',
    ],
    buttons: {
      orderStatus: 'Sipariş Durumu Sorgula',
      instantQuote: 'Anlık Teklif Oluştur',
      voiceTask: 'Sesli Not → Görev',
      backMenu: 'Ana Menü',
    },
  },
  appsRoi: {
    showcaseTitle: 'Web, Android & FlutterFlow Uygulamaları + GDPR Docker Altyapısı',
    showcaseSubtitle:
      'Almanya veri merkezlerinde izole konteyner mimarisiyle çalışan özel iş uygulamaları.',
    cards: [
      {
        index: '01',
        title: 'Web Portalları & Yönetim Panelleri',
        stack: 'React · TypeScript · PocketBase',
        description:
          'Mevcut ERP sistemlerinize bağlı dahili operasyon araçları, müşteri portalları ve gerçek zamanlı paneller.',
        deliverables: ['Rol ve yetki yönetimi', 'API & Webhook senkronizasyonu', 'Duyarlı B2B arayüz'],
      },
      {
        index: '02',
        title: 'FlutterFlow ile Android & iOS',
        stack: 'FlutterFlow · Dart · Anlık Bildirimler',
        description:
          'Saha ekipleri, lojistik takibi, zaman yönetimi ve müşteri uygulamaları için hızlı çapraz platform geliştirme.',
        deliverables: ['Çevrimdışı senkronizasyon', 'Kamera, QR & PDF tarama', 'Play Store & App Store yayını'],
      },
      {
        index: '03',
        title: 'Almanya’da GDPR Docker Barındırma',
        stack: 'Docker Compose · Hetzner Cloud · Traefik SSL',
        description:
          'n8n, PocketBase, yapay zeka servisleri ve web uygulamaları için Nürnberg ve Falkenstein’da izole sunucular.',
        deliverables: ['%100 Almanya lokasyonu', 'Otomatik yedekleme', 'Veri işleme sözleşmesi (AVV)'],
      },
    ],
    liveReference: {
      kicker: 'Canlı Referans · Yayındaki Müşteri Uygulaması',
      title: 'Natali Beauty App',
      description:
        'Güzellik stüdyosu hizmetleri, randevu yönetimi ve dijital müşteri iletişimi için canlı web uygulaması.',
      url: 'https://lucent-kashata-59eb70.netlify.app/',
      cta: 'Natali Beauty App’i Aç',
    },
    roiTitle: 'ROI & Zaman Tasarrufu Hesaplayıcı',
    roiSubtitle:
      'Ekip büyüklüğünüze göre Vision IT Systems’in yıllık ne kadar zaman ve bütçe tasarrufu sağladığını hesaplayın.',
    employeesLabel: 'İdari iş yapan çalışan sayısı',
    hoursLabel: 'Kişi başı haftalık manuel rutin iş',
    hourlyRateLabel: 'Ortalama saatlik iş gücü maliyeti',
    automationRateLabel: 'Hedeflenen otomasyon oranı',
    hoursSavedLabel: 'Yıllık Kazanılan Saat',
    moneySavedLabel: 'Yıllık Maliyet Tasarrufu',
    paybackLabel: 'Tahmini Geri Dönüş',
    monthsUnit: 'ay',
    hoursUnit: 'sa',
    beforeLabel: 'Mevcut yıllık manuel iş yükü',
    afterLabel: 'Otomasyon sonrası kalan yük',
    applyToAnalysis: 'Hesaplamayı ücretsiz analize aktar',
  },
  mobileShowcase: {
    kicker: 'Mobil Canlı Test · Telefon Ekranında 5 Müşteri Projesi',
    title: 'Uygulamaları ve Botları Doğrudan Mobil Ekranda Test Edin',
    subtitle:
      'Sol taraftan beş projeden birini seçerek gömülü akıllı telefon ekranında doğrudan etkileşime geçin.',
    requestSimilarCta: 'Benzer proje talep et',
    openExternal: 'Tam ekranda aç',
    openTelegram: 'Telegram’da aç',
    projects: [
      {
        id: 'hausmeister',
        name: 'HausmeisterPro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Dart · PocketBase · Offline Sync',
        shortDesc: 'Tesis uygulaması (hausmeister.pro.vision-it-systems.de) · Giriş: demo@vision-it.de / 12345678',
        fullDesc:
          'Bina yöneticileri ve teknik ekipler için kontrol listeleri, sayaç okuma ve arıza bildirimi sunan mobil uygulama. Uygulamaya giriş yapıp test etmek için e-posta olarak "demo@vision-it.de" ve şifre olarak "12345678" girin.',
        highlights: [
          'Test giriş bilgileri: E-posta demo@vision-it.de · Şifre 12345678',
          'Konut ve ticari binalar için çevrimdışı görev listeleri',
          'Elektrik, su ve doğalgaz sayaç kaydı',
          'Yönetim paneline anlık arıza bileti aktarımı',
        ],
      },
      {
        id: 'nataly_beauty',
        name: 'NatalyBeauty App',
        tag: 'Live Embed',
        stack: 'React · Responsive Web App · Netlify Edge',
        shortDesc: 'lucent-kashata-59eb70.netlify.app adresindeki canlı güzellik stüdyosu uygulaması.',
        fullDesc:
          'Bakım hizmetleri, fiyat listesi ve mobil randevu deneyimi sunan canlı güzellik stüdyosu uygulaması — telefon ekranında doğrudan çalışır.',
        highlights: [
          'Gerçek canlı uygulama bağlantısının anlık gömülmesi',
          'Hızlı randevu ve hizmet seçimi için mobil öncelikli tasarım',
          'Stüdyo müşteri dönüşümü için optimize edilmiş akış',
        ],
      },
      {
        id: 'baumeister',
        name: 'Baumeister Pro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Android / iOS · Docker API',
        shortDesc: 'Şantiye uygulaması (bauapp.vision-it-systems.de) · Giriş: demo@vision-it.de / 12345678',
        fullDesc:
          'Şantiye şefleri ve müteahhitler için günlük şantiye defteri, ekip takibi, iş kalemi ilerlemesi ve teslim kontrol listeleri. Uygulamaya giriş yapıp test etmek için e-posta olarak "demo@vision-it.de" ve şifre olarak "12345678" girin.',
        highlights: [
          'Test giriş bilgileri: E-posta demo@vision-it.de · Şifre 12345678',
          'Ekip sayısı ve hava durumu ile günlük şantiye kaydı',
          'İş kalemlerine göre yüzdesel ilerleme takibi',
          'Yapılandırılmış teslim ve kusur kontrol listeleri',
        ],
      },
      {
        id: 'vision_tg',
        name: 'Vision Ki Telegram Bot',
        tag: 'Live Bot',
        stack: 'Telegram Bot API · n8n · Whisper ASR · Hetzner DE',
        shortDesc: 'Teklif, sesli görev ve CRM senkronizasyonu için t.me/VisionITsystems_bot.',
        fullDesc:
          'Telegram içinde doğrudan iş otomasyonu: yapay zeka ile anlık teklif oluşturun, sesli notları göreve dönüştürün ve CRM’e aktarın.',
        highlights: [
          'Etkileşimli satır içi butonlar ve serbest metin AI yanıtları',
          'OpenAI Whisper ile sesli nottan göreve dönüştürme',
          'Alman Docker sunucularında GDPR uyumlu webhook çalışması',
        ],
      },
      {
        id: 'kraftbruder',
        name: 'Kraftbruder Hausmeister App',
        tag: 'Live Embed',
        stack: 'Web & Mobile App · PocketBase · Docker DE',
        shortDesc: 'Müşteri uygulaması (app.vision-it-systems.de) · Giriş: demo@vision-it.de / 12345678',
        fullDesc:
          'Kraftbruder bina bakım hizmetleri için özel geliştirilen uygulama: saha rota planlaması, fotoğraf dokümantasyonu ve mobil iş emri takibi. Uygulamaya giriş yapıp test etmek için e-posta olarak "demo@vision-it.de" ve şifre olarak "12345678" girin.',
        highlights: [
          'Test giriş bilgileri: E-posta demo@vision-it.de · Şifre 12345678',
          'app.vision-it-systems.de canlı müşteri uygulamasının doğrudan gömülmesi',
          'Tesis yönetimi, günlük turlar ve dijital iş kayıtları',
        ],
      },
    ],
  },
  feedback: {
    prompt: 'Bu demo modülünü ne kadar faydalı buldunuz?',
    placeholder: 'İsteğe bağlı yorum (örn. kullanım senaryonuz veya entegrasyon talebiniz)...',
    submit: 'Değerlendirmeyi Gönder',
    submitting: 'Kaydediliyor...',
    thanks: 'Geri bildiriminiz için teşekkürler!',
  },
  lead: {
    sectionTitle: 'Ücretsiz İlk Analiz Talebi',
    sectionSubtitle:
      '24 saat içinde şirketiniz için somut bir mimari önerisi, maliyet tahmini ve GDPR planı alın.',
    modalTitle: 'Ücretsiz Ön Analiz Planla',
    modalSubtitle: 'Sürecinizi kısaca anlatın — 24 iş saati içinde dönüş yapalım.',
    nameLabel: 'Ad Soyad *',
    namePlaceholder: 'Ahmet Yılmaz',
    emailLabel: 'Kurumsal E-posta *',
    emailPlaceholder: 'a.yilmaz@sirket.de',
    companyLabel: 'Şirket *',
    companyPlaceholder: 'Örnek Lojistik GmbH',
    servicesLabel: 'İlgilendiğiniz Modüller *',
    notesLabel: 'Süreç Notları / Hedefler (isteğe bağlı)',
    notesPlaceholder: 'Örn: Günlük teklif e-postalarını otomatik CRM’e aktarıp Telegram bildirimi göndermek...',
    submitBtn: 'Ücretsiz Analiz Talep Et',
    submittingBtn: 'Talep gönderiliyor...',
    privacyNote: 'TLS şifreli aktarım. Yalnızca proje talebiniz için GDPR kapsamında işlenir.',
    validationError: 'Lütfen ad, e-posta ve şirket bilgilerini doldurun.',
    emailError: 'Lütfen geçerli bir kurumsal e-posta adresi girin.',
    servicesError: 'Lütfen en az bir hizmet modülü seçin.',
    serviceOptions: {
      n8n_automation: 'n8n Otomasyonu',
      telegram_bot: 'Telegram Bot',
      web_android_app: 'Web / Android App',
      ai_chatbot: 'AI Chatbot / Ses',
      docker_hosting: 'Docker Barındırma (DE)',
    },
    successTitle: 'Talebiniz başarıyla kaydedildi',
    successDesc: 'Teşekkürler! Talebiniz PocketBase’e kaydedildi. 24 saat içinde size dönüş yapacağız.',
    unreachableTitle: 'PocketBase sunucusuna şu anda ulaşılamıyor',
    unreachableDesc:
      'pb.demo.vision-it-systems.de demo sunucusu yanıt vermiyor. Talebinizi doğrudan e-posta ile gönderebilirsiniz.',
    mailtoFallback: 'kontakt@vision-it-systems.de adresine e-posta aç',
  },
  footer: {
    tagline: 'B2B şirketler için BT sistem mimarisi, yapay zeka ajanları ve süreç otomasyonu.',
    gdprBadge: 'Almanya’da %100 GDPR uyumlu barındırma (Docker & Hetzner)',
    contactLabel: 'Doğrudan İletişim',
    impressum: 'Künye (Impressum)',
    privacy: 'Gizlilik Politikası (GDPR)',
    rights: 'Tüm hakları saklıdır.',
  },
  toasts: {
    feedbackSuccessTitle: 'Geri bildirim kaydedildi',
    feedbackSuccessDesc: 'Demo değerlendirmeniz PocketBase’e iletildi.',
    feedbackErrorTitle: 'Kaydedilemedi',
    feedbackErrorDesc: 'PocketBase sunucusuna şu an ulaşılamıyor. Lütfen daha sonra tekrar deneyin.',
  },
};
