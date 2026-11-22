import { ArrowDownRight, ArrowRight, BookOpen } from 'lucide-react';
import type { Language, LeadPrefill } from '../types';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqCopy {
  kicker: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  items: FaqItem[];
}

const FAQ_COPY_BY_LANG: Record<Language, FaqCopy> = {
  de: {
    kicker: 'Praxis-Wissen & Technische Architektur',
    title: 'Häufige Fragen aus der Praxis (KI- & Automations-Wissen)',
    subtitle:
      'Klare Antworten zu DSGVO-Compliance, n8n vs. Zapier, Offline-Apps auf Baustellen, Cal.com-Terminbuchung und Projektlaufzeiten.',
    primaryCta: 'Kostenlose Erstanalyse starten',
    secondaryCta: 'Projekt direkt anfragen',
    items: [
      {
        id: 'gdpr-llm',
        question:
          'Wie bleibt unsere KI-Automatisierung mit ChatGPT/LLMs in Deutschland DSGVO-konform?',
        answer:
          'Wir hosten die gesamte Orchestrierung (n8n), Datenbanken (PocketBase) und Schnittstellen isoliert per Docker auf deutschen Hetzner-Servern. Personenbezogene Daten werden vor der Verarbeitung anonymisiert oder über datenschutzkonforme EU-Endpunkte (z.B. Azure OpenAI EU oder lokal gehostete Open-Source-Modelle) verarbeitet.',
      },
      {
        id: 'n8n-vs-zapier',
        question: 'Warum nutzen wir n8n statt Zapier oder Make?',
        answer:
          'Bei hohen Datenvolumen werden SaaS-Tools wie Zapier schnell teuer und speichern Daten oft außerhalb der EU. Mit selbst gehostetem n8n zahlen Sie keine Gebühren pro einzelnem Workflow-Schritt, haben unbegrenzte Ausführungskapazität und 100 % Kontrolle über Ihre Geschäftsdaten.',
      },
      {
        id: 'offline-sync',
        question:
          'Wie funktioniert eine mobile App für Handwerker oder Hausmeister ohne Internetempfang (Offline-Sync)?',
        answer:
          'Unsere FlutterFlow-Apps (wie HausmeisterPro oder Baumeister Pro) speichern Zählerstände, Fotos und Checklisten lokal auf dem Smartphone. Sobald wieder eine Mobilfunk- oder WLAN-Verbindung besteht, synchronisiert sich die App automatisch über PocketBase mit dem Büro.',
      },
      {
        id: 'calendar-booking',
        question:
          'Kann ein KI-Agent direkt Termine in unseren bestehenden Kalender buchen?',
        answer:
          'Ja. Über offene Schnittstellen wie Cal.com (ebenfalls self-hosted auf Hetzner möglich) oder direkte Webhooks prüft unser KI-Berater oder Voice-Agent freie Zeitfenster in Echtzeit und trägt qualifizierte Termine direkt in Google Calendar, Outlook oder Ihr CRM ein.',
      },
      {
        id: 'timeline',
        question: 'Wie schnell ist ein erstes Automatisierungs-Projekt einsatzbereit?',
        answer:
          'Einfache n8n-Pipelines oder Telegram-Bots sind oft innerhalb von 5 bis 10 Werktagen produktiv. Individuelle Apps inkl. Backend dauern je nach Funktionsumfang zwischen 3 und 6 Wochen.',
      },
    ],
  },
  en: {
    kicker: 'Practical Knowledge Base & Technical Architecture',
    title: 'Frequently Asked Questions from Practice (AI & Automation Knowledge)',
    subtitle:
      'Clear engineering answers on GDPR compliance, n8n vs. Zapier, offline-ready field apps, real-time Cal.com scheduling, and delivery timelines.',
    primaryCta: 'Start Free Initial Analysis',
    secondaryCta: 'Request a Project',
    items: [
      {
        id: 'gdpr-llm',
        question:
          'How does AI automation with ChatGPT/LLMs remain GDPR-compliant in Germany?',
        answer:
          'We host the entire orchestration layer (n8n), databases (PocketBase), and APIs isolated via Docker on German Hetzner servers. Personal data is anonymized prior to processing or routed through GDPR-compliant EU endpoints (such as Azure OpenAI EU or locally hosted open-source models).',
      },
      {
        id: 'n8n-vs-zapier',
        question: 'Why use n8n instead of Zapier or Make?',
        answer:
          'At higher execution volumes, SaaS tools like Zapier become expensive quickly and often process data outside the EU. With self-hosted n8n, you pay zero per-step task fees, gain unlimited execution capacity, and retain 100% control over your business data.',
      },
      {
        id: 'offline-sync',
        question:
          'How does a mobile app for tradespeople or caretakers work without cell reception (Offline Sync)?',
        answer:
          'Our FlutterFlow apps (such as HausmeisterPro or Baumeister Pro) store meter readings, photos, and checklists locally on the smartphone. As soon as cellular or Wi-Fi connectivity returns, the app automatically syncs with the office via PocketBase.',
      },
      {
        id: 'calendar-booking',
        question:
          'Can an AI agent book appointments directly into our existing calendar?',
        answer:
          'Yes. Through open interfaces like Cal.com (which can also be self-hosted on Hetzner) or direct webhooks, our AI advisor or voice agent checks open time slots in real time and books qualified appointments directly into Google Calendar, Outlook, or your CRM.',
      },
      {
        id: 'timeline',
        question: 'How quickly is a first automation project ready for production?',
        answer:
          'Focused n8n pipelines or Telegram bots are often live within 5 to 10 business days. Custom business apps including backend infrastructure take between 3 and 6 weeks depending on scope.',
      },
    ],
  },
  hr: {
    kicker: 'Baza znanja iz prakse i tehnička arhitektura',
    title: 'Česta pitanja iz prakse (Znanje o AI-ju i automatizaciji)',
    subtitle:
      'Jasni odgovori o GDPR usklađenosti, prednostima n8n-a nad Zapierom, offline mobilnim aplikacijama, Cal.com rezervacijama i rokovima isporuke.',
    primaryCta: 'Zatražite besplatnu početnu analizu',
    secondaryCta: 'Pošalji upit za projekt',
    items: [
      {
        id: 'gdpr-llm',
        question:
          'Kako naša AI automatizacija s ChatGPT/LLM modelima ostaje usklađena s GDPR-om u Njemačkoj?',
        answer:
          'Cjelokupnu orkestraciju (n8n), baze podataka (PocketBase) i sučelja hostamo izolirano putem Dockera na njemačkim Hetzner serverima. Osobni podaci se anonimiziraju prije obrade ili se šalju na GDPR usklađene EU krajnje točke (npr. Azure OpenAI EU ili lokalne open-source modele).',
      },
      {
        id: 'n8n-vs-zapier',
        question: 'Zašto koristimo n8n umjesto Zapiera ili Makea?',
        answer:
          'Kod većeg obujma podataka SaaS alati poput Zapiera brzo postaju skupi i često pohranjuju podatke izvan EU-a. Uz vlastiti n8n ne plaćate po pojedinom koraku procesa, imate neograničen kapacitet izvršavanja i 100 % kontrole nad poslovnim podacima.',
      },
      {
        id: 'offline-sync',
        question:
          'Kako mobilna aplikacija za majstore ili domare radi bez internetske veze (Offline-Sync)?',
        answer:
          'Naše FlutterFlow aplikacije (poput HausmeisterPro ili Baumeister Pro) spremaju očitanja brojila, fotografije i kontrolne liste lokalno na pametni telefon. Čim se ponovno uspostavi mobilni ili Wi-Fi signal, aplikacija se automatski sinkronizira s uredom putem PocketBasea.',
      },
      {
        id: 'calendar-booking',
        question: 'Može li AI agent izravno upisivati termine u naš postojeći kalendar?',
        answer:
          'Da. Putem otvorenih sučelja poput Cal.com (koji također može biti self-hosted na Hetzneru) ili izravnih webhookova, naš AI savjetnik ili glasovni agent provjerava slobodne termine u stvarnom vremenu i upisuje ih u Google Calendar, Outlook ili vaš CRM.',
      },
      {
        id: 'timeline',
        question: 'Koliko brzo je prvi projekt automatizacije spreman za rad?',
        answer:
          'Jednostavniji n8n procesi ili Telegram botovi često su produkcijski spremni unutar 5 do 10 radnih dana. Prilagođene aplikacije s backendom traju između 3 i 6 tjedana, ovisno o opsegu.',
      },
    ],
  },
  ru: {
    kicker: 'База знаний и техническая архитектура',
    title: 'Частые вопросы из практики (Знания об ИИ и автоматизации)',
    subtitle:
      'Чёткие ответы о соответствии GDPR, сравнении n8n и Zapier, офлайн-синхронизации приложений, бронировании через Cal.com и сроках запуска.',
    primaryCta: 'Начать бесплатный первичный анализ',
    secondaryCta: 'Запросить проект',
    items: [
      {
        id: 'gdpr-llm',
        question:
          'Как ИИ-автоматизация с ChatGPT/LLM остаётся полностью совместимой с GDPR в Германии?',
        answer:
          'Мы размещаем всю оркестрацию (n8n), базы данных (PocketBase) и API изолированно в Docker на немецких серверах Hetzner. Персональные данные анонимизируются перед обработкой или передаются через защищённые EU-эндпоинты (например, Azure OpenAI EU или локальные open-source модели).',
      },
      {
        id: 'n8n-vs-zapier',
        question: 'Почему мы используем n8n вместо Zapier или Make?',
        answer:
          'При больших объёмах данных SaaS-сервисы вроде Zapier быстро дорожают и часто хранят данные за пределами ЕС. С собственным n8n вы не платите за каждый шаг сценария, получаете неограниченную мощность выполнения и 100 % контроля над корпоративными данными.',
      },
      {
        id: 'offline-sync',
        question:
          'Как мобильное приложение для мастеров или сервисных служб работает без интернета (Offline-Sync)?',
        answer:
          'Наши приложения на FlutterFlow (например, HausmeisterPro или Baumeister Pro) сохраняют показания счётчиков, фото и чек-листы локально на смартфоне. Как только появляется сотовая связь или Wi-Fi, данные автоматически синхронизируются с офисом через PocketBase.',
      },
      {
        id: 'calendar-booking',
        question: 'Может ли ИИ-агент бронировать встречи напрямую в наш календарь?',
        answer:
          'Да. Через открытые интерфейсы вроде Cal.com (который тоже можно развернуть на Hetzner) или прямые вебхуки наш ИИ-консультант или голосовой агент проверяет свободные слоты в реальном времени и записывает встречи в Google Calendar, Outlook или CRM.',
      },
      {
        id: 'timeline',
        question: 'Как быстро готов к работе первый проект автоматизации?',
        answer:
          'Базовые пайплайны n8n или Telegram-боты обычно выходят в продакшн за 5–10 рабочих дней. Индивидуальные приложения с бэкендом занимают от 3 до 6 недель в зависимости от функционала.',
      },
    ],
  },
  tr: {
    kicker: 'Uygulamalı Bilgi Bankası & Teknik Mimari',
    title: 'Uygulamadan Sık Sorulan Sorular (AI ve Otomasyon Bilgisi)',
    subtitle:
      'GDPR uyumu, n8n ile Zapier farkı, çevrimdışı saha uygulamaları, Cal.com randevu entegrasyonu ve teslim süreleri hakkında net yanıtlar.',
    primaryCta: 'Ücretsiz İlk Analizi Başlat',
    secondaryCta: 'Proje Talebi Oluştur',
    items: [
      {
        id: 'gdpr-llm',
        question:
          'Almanya’da ChatGPT/LLM ile yapay zeka otomasyonumuz nasıl GDPR uyumlu kalır?',
        answer:
          'Tüm orkestrasyonu (n8n), veritabanlarını (PocketBase) ve API’leri Alman Hetzner sunucularında Docker ile izole şekilde barındırıyoruz. Kişisel veriler işlenmeden önce anonimleştirilir veya GDPR uyumlu AB uç noktaları (örn. Azure OpenAI EU veya yerel açık kaynak modeller) üzerinden işlenir.',
      },
      {
        id: 'n8n-vs-zapier',
        question: 'Neden Zapier veya Make yerine n8n kullanıyoruz?',
        answer:
          'Yüksek veri hacimlerinde Zapier gibi SaaS araçları hızla pahalılaşır ve verileri sıklıkla AB dışında saklar. Kendi sunucunuzda çalışan n8n ile iş akışı adımı başına ücret ödemez, sınırsız çalıştırma kapasitesi ve şirket verileriniz üzerinde %100 kontrol elde edersiniz.',
      },
      {
        id: 'offline-sync',
        question:
          'İnternet çekmeyen yerlerde ustalar veya bina görevlileri için mobil uygulama nasıl çalışır (Offline-Sync)?',
        answer:
          'FlutterFlow uygulamalarımız (HausmeisterPro veya Baumeister Pro gibi) sayaç okumalarını, fotoğrafları ve kontrol listelerini telefonda yerel olarak kaydeder. Mobil veri veya Wi-Fi bağlantısı geri geldiğinde uygulama PocketBase üzerinden ofisle otomatik senkronize olur.',
      },
      {
        id: 'calendar-booking',
        question: 'Bir AI ajanı doğrudan mevcut takvimimize randevu alabilir mi?',
        answer:
          'Evet. Cal.com (Hetzner’de kendi sunucunuzda da barındırılabilir) gibi açık arayüzler veya doğrudan webhook’lar sayesinde AI danışmanımız ya da sesli ajanımız müsait saatleri anlık kontrol eder ve uygun randevuları doğrudan Google Calendar, Outlook veya CRM’inize işler.',
      },
      {
        id: 'timeline',
        question: 'İlk otomasyon projesi ne kadar sürede kullanıma hazır olur?',
        answer:
          'Basit n8n akışları veya Telegram botları genellikle 5 ila 10 iş günü içinde canlıya alınır. Backend dahil özel iş uygulamaları kapsama bağlı olarak 3 ila 6 hafta sürer.',
      },
    ],
  },
  pl: {
    kicker: 'Baza wiedzy praktycznej i architektura techniczna',
    title: 'Częste pytania z praktyki (Wiedza o AI i automatyzacji)',
    subtitle:
      'Konkretne odpowiedzi na temat zgodności z RODO, przewagi n8n nad Zapierem, aplikacji offline w terenie, rezerwacji Cal.com oraz czasu wdrożenia.',
    primaryCta: 'Rozpocznij bezpłatną analizę wstępną',
    secondaryCta: 'Zapytaj o projekt',
    items: [
      {
        id: 'gdpr-llm',
        question:
          'W jaki sposób automatyzacja AI z ChatGPT/LLM pozostaje zgodna z RODO w Niemczech?',
        answer:
          'Całą orkiestrację (n8n), bazy danych (PocketBase) oraz interfejsy API hostujemy w odizolowanych kontenerach Docker na niemieckich serwerach Hetzner. Dane osobowe są anonimizowane przed przetworzeniem lub kierowane przez zgodne z RODO punkty końcowe w UE (np. Azure OpenAI EU lub lokalne modele open-source).',
      },
      {
        id: 'n8n-vs-zapier',
        question: 'Dlaczego używamy n8n zamiast Zapier lub Make?',
        answer:
          'Przy dużych wolumenach danych narzędzia SaaS takie jak Zapier szybko stają się kosztowne i często przechowują dane poza UE. Dzięki własnemu n8n nie płacą Państwo za pojedyncze kroki workflow, zyskują nielimitowaną moc wykonawczą i 100% kontroli nad danymi firmowymi.',
      },
      {
        id: 'offline-sync',
        question:
          'Jak działa aplikacja mobilna dla fachowców lub konserwatorów bez zasięgu internetu (Offline-Sync)?',
        answer:
          'Nasze aplikacje FlutterFlow (np. HausmeisterPro lub Baumeister Pro) zapisują odczyty liczników, zdjęcia i listy kontrolne lokalnie w telefonie. Gdy tylko wróci zasięg sieci komórkowej lub Wi-Fi, aplikacja automatycznie synchronizuje dane z biurem przez PocketBase.',
      },
      {
        id: 'calendar-booking',
        question:
          'Czy agent AI może bezpośrednio rezerwować terminy w naszym obecnym kalendarzu?',
        answer:
          'Tak. Poprzez otwarte interfejsy takie jak Cal.com (możliwe także do samodzielnego hostingu na Hetzner) lub bezpośrednie webhooki nasz doradca AI lub agent głosowy sprawdza wolne okna w czasie rzeczywistym i wpisuje spotkania bezpośrednio do Google Calendar, Outlooka lub CRM.',
      },
      {
        id: 'timeline',
        question: 'Jak szybko pierwszy projekt automatyzacji jest gotowy do pracy?',
        answer:
          'Prostsze pipeline’y n8n lub boty Telegram są często gotowe produkcyjnie w 5 do 10 dni roboczych. Dedykowane aplikacje wraz z backendem trwają od 3 do 6 tygodni w zależności od zakresu.',
      },
    ],
  },
  sq: {
    kicker: 'Bazë njohurish praktike & Arkitekturë teknike',
    title: 'Pyetje të shpeshta nga praktika (Njohuri mbi AI & Automatizimin)',
    subtitle:
      'Përgjigje të qarta mbi përputhshmërinë me GDPR, n8n kundrejt Zapier, aplikacionet offline në terren, rezervimet në Cal.com dhe afatet e dorëzimit.',
    primaryCta: 'Fillo analizën fillestare falas',
    secondaryCta: 'Kërko projekt direkt',
    items: [
      {
        id: 'gdpr-llm',
        question:
          'Si mbetet automatizimi ynë AI me ChatGPT/LLM në përputhje me GDPR në Gjermani?',
        answer:
          'Ne hostojmë të gjithë orkestrimin (n8n), bazat e të dhënave (PocketBase) dhe ndërfaqet të izoluara përmes Docker në serverë gjermanë Hetzner. Të dhënat personale anonimizohen para përpunimit ose dërgohen përmes pikave fundore të BE-së në përputhje me GDPR (p.sh. Azure OpenAI EU ose modele open-source të hostuara lokalisht).',
      },
      {
        id: 'n8n-vs-zapier',
        question: 'Pse përdorim n8n në vend të Zapier ose Make?',
        answer:
          'Me vëllime të larta të dhënash, mjetet SaaS si Zapier bëhen shpejt të shtrenjta dhe shpesh i ruajnë të dhënat jashtë BE-së. Me n8n të vetë-hostuar nuk paguani tarifa për çdo hap të procesit, keni kapacitet të pakufizuar ekzekutimi dhe 100 % kontroll mbi të dhënat e biznesit tuaj.',
      },
      {
        id: 'offline-sync',
        question:
          'Si funksionon një aplikacion mobil për mjeshtrit ose kujdestarët pa mbulim interneti (Offline-Sync)?',
        answer:
          'Aplikacionet tona FlutterFlow (si HausmeisterPro ose Baumeister Pro) ruajnë leximet e matësve, fotot dhe listat e kontrollit lokalisht në telefon. Sapo të kthehet sinjali celular ose Wi-Fi, aplikacioni sinkronizohet automatikisht me zyrën përmes PocketBase.',
      },
      {
        id: 'calendar-booking',
        question:
          'A mundet një agjent AI të rezervojë takime direkt në kalendarin tonë ekzistues?',
        answer:
          'Po. Përmes ndërfaqeve të hapura si Cal.com (gjithashtu e mundur të vetë-hostohet në Hetzner) ose webhook-ve direkte, këshilltari ynë AI ose agjenti zanor kontrollon oraret e lira në kohë reale dhe i regjistron takimet direkt në Google Calendar, Outlook ose CRM-në tuaj.',
      },
      {
        id: 'timeline',
        question: 'Sa shpejt është gati për punë projekti i parë i automatizimit?',
        answer:
          'Proceset e thjeshta n8n ose botët Telegram shpesh janë aktivë brenda 5 deri në 10 ditë pune. Aplikacionet e personalizuara përfshirë backend-in zgjasin nga 3 deri në 6 javë në varësi të funksionaliteteve.',
      },
    ],
  },
};

interface FaqKnowledgeSectionProps {
  lang: Language;
  onOpenLeadModal: (prefill?: LeadPrefill) => void;
}

export function FaqKnowledgeSection({
  lang,
  onOpenLeadModal,
}: FaqKnowledgeSectionProps) {
  const copy = FAQ_COPY_BY_LANG[lang];

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-white/[0.06] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-cyan-300">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{copy.kicker}</span>
          </p>
          <h2
            id="faq-heading"
            className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            {copy.title}
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {copy.items.map((item, index) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/[0.09] bg-[#0f1623] p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-cyan-400/30 bg-cyan-500/10 font-mono text-xs font-semibold text-cyan-300">
                  0{index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-semibold leading-snug text-white sm:text-lg">
                    {item.question}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Clear Section CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
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
