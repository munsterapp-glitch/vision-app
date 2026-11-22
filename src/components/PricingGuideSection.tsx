import {
  ArrowDownRight,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Server,
  Smartphone,
  Workflow,
} from 'lucide-react';
import type { Language, LeadPrefill, ServiceOptionId } from '../types';

interface PricingCardData {
  id: string;
  icon: typeof Workflow;
  title: string;
  investmentLabel: string;
  investmentRange: string;
  ongoingLabel: string;
  ongoingCost: string;
  driversLabel: string;
  drivers: string;
  idealForLabel: string;
  idealFor: string;
  cardCta: string;
  prefillServices: ServiceOptionId[];
}

interface PricingCopy {
  kicker: string;
  title: string;
  subtitle: string;
  hostingNote: string;
  primaryCta: string;
  secondaryCta: string;
  cards: PricingCardData[];
}

const PRICING_COPY_BY_LANG: Record<Language, PricingCopy> = {
  de: {
    kicker: 'Transparente Preisstruktur & Investitionsrahmen',
    title: 'Transparente Investition: Was kosten KI & Automation?',
    subtitle:
      'Keine versteckten Agentur-Preise. Orientieren Sie sich an unseren kalkulierbaren Projekt-Rahmen für den deutschen Mittelstand – 100 % DSGVO-konform auf deutschen Servern.',
    hostingNote:
      'Alle Lösungen werden auf Wunsch ohne laufende SaaS-Lizenzgebühren auf Ihrer eigenen Infrastruktur (Hetzner / Docker in Deutschland) betrieben. Sie behalten die volle Datenhoheit.',
    primaryCta: 'Kostenlose Erstanalyse anfragen',
    secondaryCta: 'Direkt zum Anfrage-Formular',
    cards: [
      {
        id: 'n8n_crm',
        icon: Workflow,
        title: 'n8n & E-Mail/CRM-Pipelines',
        investmentLabel: 'Investitionsrahmen',
        investmentRange: 'ab 850 € – 2.450 € (einmaliges Setup)',
        ongoingLabel: 'Laufende Kosten',
        ongoingCost: 'ca. 20 € – 65 € / Monat (Hetzner Docker-Hosting & Wartung)',
        driversLabel: 'Was den Preis beeinflusst',
        drivers:
          'Anzahl der angebundenen Systeme (z.B. HubSpot, Pipedrive, ERP, IMAP), Komplexität der Datenlogik und Fehlerbehandlung.',
        idealForLabel: 'Ideal für',
        idealFor:
          'Automatische Lead-Qualifizierung, Rechnungsverarbeitung und E-Mail-Triage.',
        cardCta: 'Setup anfragen',
        prefillServices: ['n8n_automation', 'docker_hosting'],
      },
      {
        id: 'telegram_chat',
        icon: MessageCircle,
        title: 'Telegram Business Bots & KI-Chat-Assistenten',
        investmentLabel: 'Investitionsrahmen',
        investmentRange: 'ab 1.050 € – 2.800 € (einmaliges Setup)',
        ongoingLabel: 'Laufende Kosten',
        ongoingCost: 'ca. 30 € – 85 € / Monat (Server + verbrauchsabhängige LLM-API-Kosten)',
        driversLabel: 'Was den Preis beeinflusst',
        drivers:
          'Anbindung an eigene Wissensdatenbanken (RAG), Sprachnachrichten-Transkription, Rechteverwaltung für Mitarbeiter und CRM-Sync.',
        idealForLabel: 'Ideal für',
        idealFor:
          'Außendienst-Teams, Baustellen-Dokumentation und 24/7 Kundensupport.',
        cardCta: 'Bot-Projekt anfragen',
        prefillServices: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
      },
      {
        id: 'voice_agents',
        icon: PhoneCall,
        title: 'KI-Voice-Agenten (Vapi / LiveKit)',
        investmentLabel: 'Investitionsrahmen',
        investmentRange: 'ab 1.750 € – 4.200 € (einmaliges Setup)',
        ongoingLabel: 'Laufende Kosten',
        ongoingCost: 'ca. 0,12 € – 0,25 € pro Gesprächsminute + Hosting',
        driversLabel: 'Was den Preis beeinflusst',
        drivers:
          'Integration in bestehende Telefonanlagen (SIP/Trunking), Echtzeit-Kalenderbuchung (Cal.com/CRM) und individuelle Stimmen-Anpassung.',
        idealForLabel: 'Ideal für',
        idealFor:
          'Automatische Terminvereinbarung, telefonische Erstqualifizierung und Notdienst-Annahme.',
        cardCta: 'Voice-Agent anfragen',
        prefillServices: ['ai_chatbot', 'n8n_automation', 'docker_hosting'],
      },
      {
        id: 'business_apps',
        icon: Smartphone,
        title: 'Individuelle Business-Apps (FlutterFlow & PocketBase)',
        investmentLabel: 'Investitionsrahmen',
        investmentRange: 'ab 3.150 € – 8.400 € (MVP bis Produktiv-System)',
        ongoingLabel: 'Laufende Kosten',
        ongoingCost: 'ab 35 € / Monat (Dediziertes Hetzner-Backend & Backups)',
        driversLabel: 'Was den Preis beeinflusst',
        drivers:
          'Offline-Fähigkeit (z.B. für Handwerk & Hausmeister), Rollen- und Rechtesysteme, PDF-Berichtsgenerierung und Schnittstellen zu Bestandssoftware.',
        idealForLabel: 'Ideal für',
        idealFor:
          'Mobile Einsatz-Apps, digitale Checklisten und Kundenportale.',
        cardCta: 'App-Projekt anfragen',
        prefillServices: ['web_android_app', 'docker_hosting'],
      },
    ],
  },
  en: {
    kicker: 'Transparent Pricing & Investment Guide',
    title: 'Transparent Investment: What Do AI & Automation Cost?',
    subtitle:
      'No hidden agency retainers. Plan with predictable project investment ranges built for German SMEs — 100% GDPR-compliant on German servers.',
    hostingNote:
      'On request, all solutions run without recurring SaaS license fees on your own infrastructure (Hetzner / Docker in Germany). You retain full data sovereignty.',
    primaryCta: 'Request Free Initial Analysis',
    secondaryCta: 'Go to Request Form',
    cards: [
      {
        id: 'n8n_crm',
        icon: Workflow,
        title: 'n8n & Email/CRM Pipelines',
        investmentLabel: 'Investment Range',
        investmentRange: 'from €850 – €2,450 (one-time setup)',
        ongoingLabel: 'Ongoing Costs',
        ongoingCost: 'approx. €20 – €65 / month (Hetzner Docker hosting & maintenance)',
        driversLabel: 'What Drives the Price',
        drivers:
          'Number of connected systems (e.g., HubSpot, Pipedrive, ERP, IMAP), data logic complexity, and error handling.',
        idealForLabel: 'Ideal For',
        idealFor: 'Automated lead qualification, invoice processing, and email triage.',
        cardCta: 'Request Setup',
        prefillServices: ['n8n_automation', 'docker_hosting'],
      },
      {
        id: 'telegram_chat',
        icon: MessageCircle,
        title: 'Telegram Business Bots & AI Chat Assistants',
        investmentLabel: 'Investment Range',
        investmentRange: 'from €1,050 – €2,800 (one-time setup)',
        ongoingLabel: 'Ongoing Costs',
        ongoingCost: 'approx. €30 – €85 / month (server + usage-based LLM API costs)',
        driversLabel: 'What Drives the Price',
        drivers:
          'Integration with internal knowledge bases (RAG), voice-note transcription, staff role permissions, and CRM sync.',
        idealForLabel: 'Ideal For',
        idealFor: 'Field teams, construction documentation, and 24/7 customer support.',
        cardCta: 'Request Bot Project',
        prefillServices: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
      },
      {
        id: 'voice_agents',
        icon: PhoneCall,
        title: 'AI Voice Agents (Vapi / LiveKit)',
        investmentLabel: 'Investment Range',
        investmentRange: 'from €1,750 – €4,200 (one-time setup)',
        ongoingLabel: 'Ongoing Costs',
        ongoingCost: 'approx. €0.12 – €0.25 per call minute + hosting',
        driversLabel: 'What Drives the Price',
        drivers:
          'Integration with existing phone systems (SIP/trunking), real-time calendar booking (Cal.com/CRM), and custom voice tuning.',
        idealForLabel: 'Ideal For',
        idealFor: 'Automated appointment scheduling, phone qualification, and emergency intake.',
        cardCta: 'Request Voice Agent',
        prefillServices: ['ai_chatbot', 'n8n_automation', 'docker_hosting'],
      },
      {
        id: 'business_apps',
        icon: Smartphone,
        title: 'Custom Business Apps (FlutterFlow & PocketBase)',
        investmentLabel: 'Investment Range',
        investmentRange: 'from €3,150 – €8,400 (MVP to production system)',
        ongoingLabel: 'Ongoing Costs',
        ongoingCost: 'from €35 / month (dedicated Hetzner backend & backups)',
        driversLabel: 'What Drives the Price',
        drivers:
          'Offline sync capability (e.g., trades & caretakers), role/permission systems, PDF report generation, and legacy software APIs.',
        idealForLabel: 'Ideal For',
        idealFor: 'Mobile field apps, digital checklists, and client portals.',
        cardCta: 'Request App Project',
        prefillServices: ['web_android_app', 'docker_hosting'],
      },
    ],
  },
  hr: {
    kicker: 'Transparentna struktura cijena i okvir ulaganja',
    title: 'Transparentno ulaganje: Koliko koštaju AI i automatizacija?',
    subtitle:
      'Bez skrivenih agencijskih naknada. Orijentirajte se prema predvidivim projektnim okvirima – 100 % usklađeno s GDPR-om na njemačkim serverima.',
    hostingNote:
      'Sva rješenja po želji rade bez stalnih SaaS licenci na vašoj vlastitoj infrastrukturi (Hetzner / Docker u Njemačkoj). Zadržavate potpuni suverenitet nad podacima.',
    primaryCta: 'Zatražite besplatnu početnu analizu',
    secondaryCta: 'Idi na obrazac za upit',
    cards: [
      {
        id: 'n8n_crm',
        icon: Workflow,
        title: 'n8n i E-mail/CRM procesi',
        investmentLabel: 'Okvir ulaganja',
        investmentRange: 'od 850 € – 2.450 € (jednokratna postava)',
        ongoingLabel: 'Tekući troškovi',
        ongoingCost: 'cca 20 € – 65 € / mj. (Hetzner Docker hosting i održavanje)',
        driversLabel: 'Što utječe na cijenu',
        drivers:
          'Broj povezanih sustava (npr. HubSpot, Pipedrive, ERP, IMAP), složenost logike podataka i obrada pogrešaka.',
        idealForLabel: 'Idealno za',
        idealFor: 'Automatsku kvalifikaciju upita, obradu računa i trijažu e-pošte.',
        cardCta: 'Zatraži postavu',
        prefillServices: ['n8n_automation', 'docker_hosting'],
      },
      {
        id: 'telegram_chat',
        icon: MessageCircle,
        title: 'Telegram poslovni botovi i AI chat asistenti',
        investmentLabel: 'Okvir ulaganja',
        investmentRange: 'od 1.050 € – 2.800 € (jednokratna postava)',
        ongoingLabel: 'Tekući troškovi',
        ongoingCost: 'cca 30 € – 85 € / mj. (server + LLM API potrošnja)',
        driversLabel: 'Što utječe na cijenu',
        drivers:
          'Povezivanje s vlastitim bazama znanja (RAG), transkripcija glasovnih poruka, prava korisnika i CRM sinkronizacija.',
        idealForLabel: 'Idealno za',
        idealFor: 'Terenske timove, dokumentaciju gradilišta i 24/7 korisničku podršku.',
        cardCta: 'Zatraži bot projekt',
        prefillServices: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
      },
      {
        id: 'voice_agents',
        icon: PhoneCall,
        title: 'AI glasovni agenti (Vapi / LiveKit)',
        investmentLabel: 'Okvir ulaganja',
        investmentRange: 'od 1.750 € – 4.200 € (jednokratna postava)',
        ongoingLabel: 'Tekući troškovi',
        ongoingCost: 'cca 0,12 € – 0,25 € po minuti razgovora + hosting',
        driversLabel: 'Što utječe na cijenu',
        drivers:
          'Integracija u telefonske centrale (SIP/Trunking), rezervacija termina u stvarnom vremenu (Cal.com/CRM) i prilagodba glasa.',
        idealForLabel: 'Idealno za',
        idealFor: 'Automatsko zakazivanje termina, prvu telefonsku kvalifikaciju i hitne prijave.',
        cardCta: 'Zatraži glasovnog agenta',
        prefillServices: ['ai_chatbot', 'n8n_automation', 'docker_hosting'],
      },
      {
        id: 'business_apps',
        icon: Smartphone,
        title: 'Prilagođene poslovne aplikacije (FlutterFlow & PocketBase)',
        investmentLabel: 'Okvir ulaganja',
        investmentRange: 'od 3.150 € – 8.400 € (od MVP-a do produkcije)',
        ongoingLabel: 'Tekući troškovi',
        ongoingCost: 'od 35 € / mj. (namjenski Hetzner backend i sigurnosne kopije)',
        driversLabel: 'Što utječe na cijenu',
        drivers:
          'Offline rad (npr. za obrtnike i domare), sustav uloga i prava, generiranje PDF izvještaja i sučelja prema postojećem softveru.',
        idealForLabel: 'Idealno za',
        idealFor: 'Mobilne terenske aplikacije, digitalne kontrolne liste i portale za klijente.',
        cardCta: 'Zatraži aplikaciju',
        prefillServices: ['web_android_app', 'docker_hosting'],
      },
    ],
  },
  ru: {
    kicker: 'Прозрачная структура цен и бюджет проектов',
    title: 'Прозрачные инвестиции: сколько стоят ИИ и автоматизация?',
    subtitle:
      'Никаких скрытых агентских наценок. Ориентируйтесь на понятные проектные рамки — 100 % соответствие GDPR на серверах в Германии.',
    hostingNote:
      'По желанию все решения работают без ежемесячных SaaS-лицензий на вашей собственной инфраструктуре (Hetzner / Docker в Германии). Полный контроль над данными остаётся у вас.',
    primaryCta: 'Запросить бесплатный первичный анализ',
    secondaryCta: 'Перейти к форме заявки',
    cards: [
      {
        id: 'n8n_crm',
        icon: Workflow,
        title: 'n8n и E-mail/CRM-пайплайны',
        investmentLabel: 'Рамки инвестиций',
        investmentRange: 'от 850 € – 2 450 € (разовая настройка)',
        ongoingLabel: 'Текущие расходы',
        ongoingCost: 'ок. 20 € – 65 € / мес. (Hetzner Docker-хостинг и поддержка)',
        driversLabel: 'Что влияет на цену',
        drivers:
          'Количество подключённых систем (HubSpot, Pipedrive, ERP, IMAP), сложность логики данных и обработка ошибок.',
        idealForLabel: 'Идеально для',
        idealFor: 'Автоматической квалификации лидов, обработки счетов и сортировки почты.',
        cardCta: 'Запросить настройку',
        prefillServices: ['n8n_automation', 'docker_hosting'],
      },
      {
        id: 'telegram_chat',
        icon: MessageCircle,
        title: 'Telegram-боты и ИИ-чат-ассистенты',
        investmentLabel: 'Рамки инвестиций',
        investmentRange: 'от 1 050 € – 2 800 € (разовая настройка)',
        ongoingLabel: 'Текущие расходы',
        ongoingCost: 'ок. 30 € – 85 € / мес. (сервер + оплата API по факту)',
        driversLabel: 'Что влияет на цену',
        drivers:
          'Подключение к базам знаний (RAG), расшифровка голосовых сообщений, права доступа сотрудников и синхронизация с CRM.',
        idealForLabel: 'Идеально для',
        idealFor: 'Выездных команд, фотофиксации на стройке и поддержки клиентов 24/7.',
        cardCta: 'Запросить бота',
        prefillServices: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
      },
      {
        id: 'voice_agents',
        icon: PhoneCall,
        title: 'Голосовые ИИ-агенты (Vapi / LiveKit)',
        investmentLabel: 'Рамки инвестиций',
        investmentRange: 'от 1 750 € – 4 200 € (разовая настройка)',
        ongoingLabel: 'Текущие расходы',
        ongoingCost: 'ок. 0,12 € – 0,25 € за минуту разговора + хостинг',
        driversLabel: 'Что влияет на цену',
        drivers:
          'Интеграция с АТС (SIP/Trunking), запись в календарь в реальном времени (Cal.com/CRM) и настройка голоса.',
        idealForLabel: 'Идеально для',
        idealFor: 'Автоматической записи на встречи, первичного обзвона и приёма аварийных заявок.',
        cardCta: 'Запросить Voice-агента',
        prefillServices: ['ai_chatbot', 'n8n_automation', 'docker_hosting'],
      },
      {
        id: 'business_apps',
        icon: Smartphone,
        title: 'Индивидуальные бизнес-приложения (FlutterFlow & PocketBase)',
        investmentLabel: 'Рамки инвестиций',
        investmentRange: 'от 3 150 € – 8 400 € (от MVP до продакшн-системы)',
        ongoingLabel: 'Текущие расходы',
        ongoingCost: 'от 35 € / мес. (выделенный бэкенд на Hetzner и бэкапы)',
        driversLabel: 'Что влияет на цену',
        drivers:
          'Работа офлайн (для мастеров и сервисных служб), роли доступа, генерация PDF-отчётов и интеграция с вашим ПО.',
        idealForLabel: 'Идеально для',
        idealFor: 'Мобильных выездных приложений, цифровых чек-листов и клиентских порталов.',
        cardCta: 'Запросить приложение',
        prefillServices: ['web_android_app', 'docker_hosting'],
      },
    ],
  },
  tr: {
    kicker: 'Şeffaf Fiyatlandırma & Yatırım Çerçevesi',
    title: 'Şeffaf Yatırım: Yapay Zeka ve Otomasyonun Maliyeti Nedir?',
    subtitle:
      'Gizli ajans ücretleri yok. KOBİ’ler için öngörülebilir proje bütçe aralıklarını inceleyin – Alman sunucularında %100 GDPR uyumlu.',
    hostingNote:
      'Tüm çözümler isteğe bağlı olarak tekrarlayan SaaS lisans ücreti olmadan kendi altyapınızda (Almanya’da Hetzner / Docker) çalıştırılır. Veri hakimiyeti tamamen sizde kalır.',
    primaryCta: 'Ücretsiz İlk Analiz Talep Et',
    secondaryCta: 'Talep Formuna Git',
    cards: [
      {
        id: 'n8n_crm',
        icon: Workflow,
        title: 'n8n & E-posta/CRM Akışları',
        investmentLabel: 'Yatırım Aralığı',
        investmentRange: '850 € – 2.450 €’dan başlayan (tek seferlik kurulum)',
        ongoingLabel: 'Sürekli Giderler',
        ongoingCost: 'yaklaşık 20 € – 65 € / ay (Hetzner Docker barındırma & bakım)',
        driversLabel: 'Fiyatı Ne Belirler?',
        drivers:
          'Bağlanan sistem sayısı (HubSpot, Pipedrive, ERP, IMAP vb.), veri mantığı karmaşıklığı ve hata yönetimi.',
        idealForLabel: 'İdeal Kullanım',
        idealFor: 'Otomatik müşteri adayı eleme, fatura işleme ve e-posta yönlendirme.',
        cardCta: 'Kurulum Talep Et',
        prefillServices: ['n8n_automation', 'docker_hosting'],
      },
      {
        id: 'telegram_chat',
        icon: MessageCircle,
        title: 'Telegram İş Botları & AI Sohbet Asistanları',
        investmentLabel: 'Yatırım Aralığı',
        investmentRange: '1.050 € – 2.800 €’dan başlayan (tek seferlik kurulum)',
        ongoingLabel: 'Sürekli Giderler',
        ongoingCost: 'yaklaşık 30 € – 85 € / ay (sunucu + kullanım bazlı LLM API)',
        driversLabel: 'Fiyatı Ne Belirler?',
        drivers:
          'Şirket bilgi bankalarına (RAG) bağlantı, sesli mesaj dökümü, personel yetki yönetimi ve CRM senkronizasyonu.',
        idealForLabel: 'İdeal Kullanım',
        idealFor: 'Saha ekipleri, şantiye dokümantasyonu ve 7/24 müşteri desteği.',
        cardCta: 'Bot Projesi Talep Et',
        prefillServices: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
      },
      {
        id: 'voice_agents',
        icon: PhoneCall,
        title: 'AI Sesli Ajanlar (Vapi / LiveKit)',
        investmentLabel: 'Yatırım Aralığı',
        investmentRange: '1.750 € – 4.200 €’dan başlayan (tek seferlik kurulum)',
        ongoingLabel: 'Sürekli Giderler',
        ongoingCost: 'görüşme dakikası başına ~0,12 € – 0,25 € + barındırma',
        driversLabel: 'Fiyatı Ne Belirler?',
        drivers:
          'Mevcut santrallere entegrasyon (SIP/Trunking), gerçek zamanlı takvim randevusu (Cal.com/CRM) ve özel ses ayarı.',
        idealForLabel: 'İdeal Kullanım',
        idealFor: 'Otomatik randevu planlama, telefonla ön eleme ve acil durum kaydı.',
        cardCta: 'Sesli Ajan Talep Et',
        prefillServices: ['ai_chatbot', 'n8n_automation', 'docker_hosting'],
      },
      {
        id: 'business_apps',
        icon: Smartphone,
        title: 'Özel İş Uygulamaları (FlutterFlow & PocketBase)',
        investmentLabel: 'Yatırım Aralığı',
        investmentRange: '3.150 € – 8.400 €’dan başlayan (MVP’den canlı sisteme)',
        ongoingLabel: 'Sürekli Giderler',
        ongoingCost: '35 € / ay’dan başlayan (özel Hetzner backend & yedekleme)',
        driversLabel: 'Fiyatı Ne Belirler?',
        drivers:
          'Çevrimdışı çalışma (saha ve teknik bakım için), rol/yetki sistemleri, PDF raporlama ve mevcut yazılım entegrasyonu.',
        idealForLabel: 'İdeal Kullanım',
        idealFor: 'Mobil saha uygulamaları, dijital kontrol listeleri ve müşteri portalları.',
        cardCta: 'Uygulama Talep Et',
        prefillServices: ['web_android_app', 'docker_hosting'],
      },
    ],
  },
  pl: {
    kicker: 'Przejrzysta struktura cen i budżet inwestycji',
    title: 'Przejrzysta inwestycja: ile kosztują AI i automatyzacja?',
    subtitle:
      'Bez ukrytych kosztów agencyjnych. Zapoznaj się z przewidywalnymi widełkami projektowymi – w 100% zgodnie z RODO na niemieckich serwerach.',
    hostingNote:
      'Na życzenie wszystkie rozwiązania działają bez stałych opłat licencyjnych SaaS na Państwa własnej infrastrukturze (Hetzner / Docker w Niemczech). Zachowują Państwo pełną suwerenność danych.',
    primaryCta: 'Zamów bezpłatną analizę wstępną',
    secondaryCta: 'Przejdź do formularza',
    cards: [
      {
        id: 'n8n_crm',
        icon: Workflow,
        title: 'n8n i pipeline’y E-mail/CRM',
        investmentLabel: 'Zakres inwestycji',
        investmentRange: 'od 850 € – 2 450 € (jednorazowe wdrożenie)',
        ongoingLabel: 'Koszty bieżące',
        ongoingCost: 'ok. 20 € – 65 € / mies. (hosting Hetzner Docker i utrzymanie)',
        driversLabel: 'Co wpływa na cenę',
        drivers:
          'Liczba integrowanych systemów (np. HubSpot, Pipedrive, ERP, IMAP), złożoność logiki danych i obsługa błędów.',
        idealForLabel: 'Idealne do',
        idealFor: 'Automatycznej kwalifikacji leadów, obiegu faktur i segregacji poczty.',
        cardCta: 'Zapytaj o wdrożenie',
        prefillServices: ['n8n_automation', 'docker_hosting'],
      },
      {
        id: 'telegram_chat',
        icon: MessageCircle,
        title: 'Boty biznesowe Telegram i asystenci czatu AI',
        investmentLabel: 'Zakres inwestycji',
        investmentRange: 'od 1 050 € – 2 800 € (jednorazowe wdrożenie)',
        ongoingLabel: 'Koszty bieżące',
        ongoingCost: 'ok. 30 € – 85 € / mies. (serwer + zużycie API LLM)',
        driversLabel: 'Co wpływa na cenę',
        drivers:
          'Integracja z własną bazą wiedzy (RAG), transkrypcja notatek głosowych, uprawnienia pracowników i synchronizacja CRM.',
        idealForLabel: 'Idealne do',
        idealFor: 'Zespołów terenowych, dokumentacji budowy i całodobowego wsparcia.',
        cardCta: 'Zapytaj o bota',
        prefillServices: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
      },
      {
        id: 'voice_agents',
        icon: PhoneCall,
        title: 'Agenci głosowi AI (Vapi / LiveKit)',
        investmentLabel: 'Zakres inwestycji',
        investmentRange: 'od 1 750 € – 4 200 € (jednorazowe wdrożenie)',
        ongoingLabel: 'Koszty bieżące',
        ongoingCost: 'ok. 0,12 € – 0,25 € za minutę rozmowy + hosting',
        driversLabel: 'Co wpływa na cenę',
        drivers:
          'Integracja z centralą telefoniczną (SIP/Trunking), rezerwacja terminów w czasie rzeczywistym (Cal.com/CRM) i dopasowanie głosu.',
        idealForLabel: 'Idealne do',
        idealFor: 'Automatycznego umawiania spotkań, wstępnej kwalifikacji i zgłoszeń awaryjnych.',
        cardCta: 'Zapytaj o Voice AI',
        prefillServices: ['ai_chatbot', 'n8n_automation', 'docker_hosting'],
      },
      {
        id: 'business_apps',
        icon: Smartphone,
        title: 'Dedykowane aplikacje biznesowe (FlutterFlow & PocketBase)',
        investmentLabel: 'Zakres inwestycji',
        investmentRange: 'od 3 150 € – 8 400 € (od MVP do systemu produkcyjnego)',
        ongoingLabel: 'Koszty bieżące',
        ongoingCost: 'od 35 € / mies. (dedykowany backend Hetzner i kopie zapasowe)',
        driversLabel: 'Co wpływa na cenę',
        drivers:
          'Praca offline (dla ekip terenowych i serwisu), system ról i uprawnień, generowanie raportów PDF i integracja API.',
        idealForLabel: 'Idealne do',
        idealFor: 'Mobilnych aplikacji terenowych, cyfrowych list kontrolnych i portali klienta.',
        cardCta: 'Zapytaj o aplikację',
        prefillServices: ['web_android_app', 'docker_hosting'],
      },
    ],
  },
  sq: {
    kicker: 'Strukturë transparente çmimesh & kornizë investimi',
    title: 'Investim transparent: Sa kushtojnë AI dhe automatizimi?',
    subtitle:
      'Pa tarifa të fshehta agjencie. Orientohuni sipas kornizave tona të parashikueshme të projekteve – 100 % në përputhje me GDPR në serverë gjermanë.',
    hostingNote:
      'Sipërmarrja juaj mund t’i operojë të gjitha zgjidhjet pa tarifa mujore licencash SaaS në infrastrukturën tuaj (Hetzner / Docker në Gjermani). Ju mbani sovranitetin e plotë të të dhënave.',
    primaryCta: 'Kërkoni analizën fillestare falas',
    secondaryCta: 'Shko te formulari i kërkesës',
    cards: [
      {
        id: 'n8n_crm',
        icon: Workflow,
        title: 'n8n & Procese E-mail/CRM',
        investmentLabel: 'Korniza e investimit',
        investmentRange: 'nga 850 € – 2.450 € (konfigurim njëherësh)',
        ongoingLabel: 'Kostot mujore',
        ongoingCost: 'rreth 20 € – 65 € / muaj (Hetzner Docker hosting & mirëmbajtje)',
        driversLabel: 'Çfarë ndikon në çmim',
        drivers:
          'Numri i sistemeve të lidhura (p.sh. HubSpot, Pipedrive, ERP, IMAP), kompleksiteti i logjikës dhe trajtimi i gabimeve.',
        idealForLabel: 'Ideale për',
        idealFor: 'Kualifikim automatik të lead-eve, përpunim faturash dhe kategorizim e-mailesh.',
        cardCta: 'Kërko konfigurimin',
        prefillServices: ['n8n_automation', 'docker_hosting'],
      },
      {
        id: 'telegram_chat',
        icon: MessageCircle,
        title: 'Botë biznesi Telegram & Asistentë Chat AI',
        investmentLabel: 'Korniza e investimit',
        investmentRange: 'nga 1.050 € – 2.800 € (konfigurim njëherësh)',
        ongoingLabel: 'Kostot mujore',
        ongoingCost: 'rreth 30 € – 85 € / muaj (server + kosto API sipas përdorimit)',
        driversLabel: 'Çfarë ndikon në çmim',
        drivers:
          'Lidhja me baza të brendshme njohurish (RAG), transkriptimi i mesazheve zanore, lejet e stafit dhe sinkronizimi me CRM.',
        idealForLabel: 'Ideale për',
        idealFor: 'Ekipet në terren, dokumentimin e kantierit dhe mbështetjen 24/7.',
        cardCta: 'Kërko projektin Bot',
        prefillServices: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
      },
      {
        id: 'voice_agents',
        icon: PhoneCall,
        title: 'Agjentë zanorë AI (Vapi / LiveKit)',
        investmentLabel: 'Korniza e investimit',
        investmentRange: 'nga 1.750 € – 4.200 € (konfigurim njëherësh)',
        ongoingLabel: 'Kostot mujore',
        ongoingCost: 'rreth 0,12 € – 0,25 € për minutë bisede + hosting',
        driversLabel: 'Çfarë ndikon në çmim',
        drivers:
          'Integrimi me centralet telefonike (SIP/Trunking), rezervimi në kohë reale (Cal.com/CRM) dhe përshtatja e zërit.',
        idealForLabel: 'Ideale për',
        idealFor: 'Planifikim automatik takimesh, kualifikim telefonik dhe pranim urgjencash.',
        cardCta: 'Kërko Agjent Zanor',
        prefillServices: ['ai_chatbot', 'n8n_automation', 'docker_hosting'],
      },
      {
        id: 'business_apps',
        icon: Smartphone,
        title: 'Aplikacione biznesi të personalizuara (FlutterFlow & PocketBase)',
        investmentLabel: 'Korniza e investimit',
        investmentRange: 'nga 3.150 € – 8.400 € (nga MVP në sistem produktiv)',
        ongoingLabel: 'Kostot mujore',
        ongoingCost: 'nga 35 € / muaj (backend i dedikuar Hetzner & backup)',
        driversLabel: 'Çfarë ndikon në çmim',
        drivers:
          'Puna offline (për mjeshtrit & mirëmbajtjen), sistemet e roleve/lejeve, gjenerimi i raporteve PDF dhe lidhja me softuerët ekzistues.',
        idealForLabel: 'Ideale për',
        idealFor: 'Aplikacione mobile në terren, lista digjitale kontrolli dhe portale klientësh.',
        cardCta: 'Kërko aplikacion',
        prefillServices: ['web_android_app', 'docker_hosting'],
      },
    ],
  },
};

interface PricingGuideSectionProps {
  lang: Language;
  onOpenLeadModal: (prefill?: LeadPrefill) => void;
}

export function PricingGuideSection({
  lang,
  onOpenLeadModal,
}: PricingGuideSectionProps) {
  const copy = PRICING_COPY_BY_LANG[lang];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-t border-white/[0.06] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-cyan-300">
            {copy.kicker}
          </p>
          <h2
            id="pricing-heading"
            className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            {copy.title}
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {copy.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.09] bg-[#0f1623] p-6 sm:p-7 transition-colors hover:border-cyan-400/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#090d16] p-4 space-y-2.5">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                        {card.investmentLabel}
                      </p>
                      <p className="mt-0.5 font-display text-base font-bold text-cyan-300 tabular-nums">
                        {card.investmentRange}
                      </p>
                    </div>
                    <div className="border-t border-white/[0.06] pt-2.5">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                        {card.ongoingLabel}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-slate-200 tabular-nums">
                        {card.ongoingCost}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3 text-sm leading-relaxed">
                    <div>
                      <p className="text-xs font-semibold text-slate-200">
                        {card.driversLabel}:
                      </p>
                      <p className="mt-0.5 text-slate-300">{card.drivers}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-200">
                        {card.idealForLabel}:
                      </p>
                      <p className="mt-0.5 text-slate-300">{card.idealFor}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/[0.07] pt-4">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLeadModal({
                        services: card.prefillServices,
                        notes: `${card.title} (${card.investmentRange})`,
                        sourceModule: 'section',
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 transition-colors hover:text-cyan-200 cursor-pointer"
                  >
                    <span>{card.cardCta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sovereignty & Infrastructure Note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-cyan-400/25 bg-[#0f1623]/90 p-5">
          <Server className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
          <p className="text-sm leading-relaxed text-slate-200">
            {copy.hostingNote}
          </p>
        </div>

        {/* Clear Section CTA */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() =>
              onOpenLeadModal({
                sourceModule: 'section',
                notes: copy.title,
              })
            }
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{copy.primaryCta}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="#analysis"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-[#0f1623] px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white whitespace-nowrap shrink-0"
          >
            <span>{copy.secondaryCta}</span>
            <ArrowDownRight className="h-4 w-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
