import type { Translations } from './types';

export const pl: Translations = {
  nav: {
    playground: 'Live Sandbox',
    n8n: 'n8n & IMAP',
    roi: 'Kalkulator ROI',
    analysis: 'Analiza',
    cta: 'Zapytaj o projekt',
  },
  hero: {
    kicker: 'Interaktywna piaskownica B2B · demo.vision-it-systems.de',
    headline: 'Testuj automatyzację AI i systemy IT na żywo w przeglądarce.',
    subheadline:
      'Bez pustych obietnic: wypróbuj naszych agentów AI 24/7, zautomatyzowane przepływy n8n IMAP, boty biznesowe Telegram oraz kalkulator ROI bezpośrednio online.',
    primaryCta: 'Bezpłatna analiza',
    secondaryCta: 'Uruchom Sandbox',
    locationProof: 'Projektowanie i hosting w Niemczech zgodny z RODO/GDPR (Docker & Hetzner)',
    metrics: [
      { value: '1,4 s', label: 'Śr. klasyfikacja e-mail', context: 'Pipeline n8n + LLM IMAP' },
      { value: '70 %', label: 'Mniej pracy ręcznej', context: 'Pomiar w skali 12 miesięcy' },
      { value: '24/7', label: 'Kwalifikacja leadów', context: 'Chatbox, Vapi & LiveKit' },
      { value: '100 %', label: 'Niemiecki hosting', context: 'Kontenery Docker na Hetzner' },
    ],
  },
  playground: {
    sectionTitle: 'Live Automation & AI Sandbox',
    sectionSubtitle:
      'Wybierz jeden z czterech scenariuszy produkcyjnych i przetestuj nasze moduły automatyzacji bezpośrednio.',
    tabs: {
      chatbot: {
        label: '01. Chatbot AI & Głos',
        shortDesc: 'Agent Chatbox, Vapi & LiveKit',
      },
      n8n: {
        label: '02. Silnik n8n & IMAP',
        shortDesc: 'Segregacja poczty & CRM',
      },
      telegram: {
        label: '03. Bot Biznesowy Telegram',
        shortDesc: 'Zamówienia, wyceny & głos',
      },
      apps_roi: {
        label: '04. Aplikacje, Docker & ROI',
        shortDesc: 'FlutterFlow, Hetzner & kalkulator',
      },
    },
  },
  chatbot: {
    modeText: 'Czat tekstowy',
    modeVoice: 'Agent głosowy (Vapi / LiveKit)',
    agentName: 'Doradca AI Vision',
    agentRole: 'Kwalifikacja leadów i rezerwacja',
    welcomeMsg:
      'Dzień dobry! Jestem cyfrowym asystentem Vision IT Systems. Zapytaj mnie o automatyzację n8n, boty Telegram, aplikacje dedykowane lub zarezerwuj krótką rozmowę.',
    inputPlaceholder: 'Wpisz wiadomość, np. „Jak zautomatyzować faktury?”',
    send: 'Wyślij',
    reset: 'Resetuj',
    quickPromptsLabel: 'Szybkie zapytania testowe:',
    quickPrompts: [
      'Jak działa n8n?',
      'Ile kosztuje bot Telegram?',
      'Umów spotkanie',
      'Jak działa hosting RODO?',
    ],
    crmPanelTitle: 'Wykryte dane CRM (na żywo)',
    crmEmpty: 'Zadaj pytanie lub kliknij podpowiedź, aby zobaczyć automatyczną kwalifikację leada.',
    crmFields: {
      intent: 'Wykryty cel',
      companySize: 'Obszar zainteresowania',
      recommendedStack: 'Rekomendowany stos',
      qualification: 'Status leada',
    },
    bookSlotTitle: 'Dostępne terminy konsultacji (15 min wideo)',
    slots: ['Jutro, 10:00 CET', 'Jutro, 14:30 CET', 'Czwartek, 11:00 CET'],
    bookSlotBtn: 'Zarezerwuj termin',
    transferToForm: 'Dokończ zapytanie z tym terminem',
    voiceTitle: 'Symulacja agenta głosowego (Vapi / LiveKit)',
    voiceSubtitle:
      'Przetestuj przychodzącą rozmowę B2B z automatyczną kwalifikacją terminu i opóźnieniem poniżej 600 ms.',
    voiceStart: 'Odtwórz rozmowę testową',
    voiceStop: 'Zakończ rozmowę',
    voiceRunning: 'Aktywna transkrypcja na żywo',
  },
  n8n: {
    title: 'Symulator automatyzacji poczty n8n & IMAP',
    subtitle:
      'Wybierz szablon wiadomości klienta lub edytuj treść ręcznie. Uruchom przepływ, aby zobaczyć klasyfikację, ekstrakcję JSON i automatyczną odpowiedź.',
    presetsLabel: 'Wybierz szablon e-mail:',
    senderLabel: 'Nadawca (IMAP From)',
    subjectLabel: 'Temat (Subject)',
    bodyLabel: 'Treść wiadomości',
    runButton: 'Uruchom workflow',
    runningButton: 'Przetwarzanie...',
    resetButton: 'Resetuj',
    executionTime: 'Czas wykonania',
    nodes: [
      { id: 'imap', title: 'IMAP Trigger', subtitle: 'Monitorowanie skrzynki' },
      { id: 'ai', title: 'AI Classifier', subtitle: 'Analiza intencji i pól' },
      { id: 'crm', title: 'CRM / Google Sheets', subtitle: 'Zapis leada i zgłoszenia' },
      { id: 'reply', title: 'Auto-Reply', subtitle: 'Szkic / wysyłka odpowiedzi' },
    ],
    jsonOutputTitle: 'Wyodrębnione dane JSON',
    autoReplyTitle: 'Wygenerowana odpowiedź e-mail',
    copyJson: 'Kopiuj JSON',
    copied: 'Skopiowano',
    idleHint: 'Kliknij „Uruchom workflow”, aby wykonać proces krok po kroku.',
  },
  telegram: {
    title: 'Podgląd bota biznesowego Telegram',
    subtitle:
      'Klikaj przyciski na ekranie smartfona, aby przetestować sprawdzanie statusu zamówienia, szybką wycenę lub zamianę notatki głosowej w zadanie.',
    botHandle: '@VisionITsystems_bot',
    botStatus: 'Bot · Aktywny przez Webhook',
    welcomeText:
      'Witamy w Vision IT Business Bot. Wybierz zautomatyzowany proces:',
    resetBtn: 'Restartuj czat',
    openInTelegram: 'Otwórz w Telegramie',
    inspectorTitle: 'Dziennik Webhook i Callback',
    inspectorSubtitle: 'Każde kliknięcie wysyła podpisany webhook Telegrama do Twojego workera n8n/Docker.',
    inspectorEmpty: 'Kliknij dowolny przycisk w widoku Telegrama, aby zobaczyć payload.',
    architectureTitle: 'Architektura produkcyjna',
    architectureSteps: [
      '1. Telegram Bot API przesyła zaszyfrowane zdarzenie do kontenera Docker na Hetzner.',
      '2. Worker Node.js / n8n sprawdza uprawnienia i odpytuje ERP, CRM lub Whisper.',
      '3. Ustrukturyzowana odpowiedź lub oferta PDF wraca w mniej niż 1 sekundę.',
    ],
    buttons: {
      orderStatus: 'Sprawdź status zamówienia',
      instantQuote: 'Szybka wycena',
      voiceTask: 'Notatka głosowa → Zadanie',
      backMenu: 'Menu główne',
    },
  },
  appsRoi: {
    showcaseTitle: 'Aplikacje Web, Android & FlutterFlow + Infrastruktura Docker RODO',
    showcaseSubtitle:
      'Dedykowane aplikacje biznesowe w izolowanych kontenerach w niemieckich centrach danych.',
    cards: [
      {
        index: '01',
        title: 'Portale WWW i panele operacyjne',
        stack: 'React · TypeScript · PocketBase',
        description:
          'Wewnętrzne narzędzia operacyjne, portale B2B i dashboardy czasu rzeczywistego połączone z ERP.',
        deliverables: ['Role i uprawnienia', 'Synchronizacja API i webhooków', 'Responsywny interfejs B2B'],
      },
      {
        index: '02',
        title: 'Aplikacje Android & iOS (FlutterFlow)',
        stack: 'FlutterFlow · Dart · Powiadomienia Push',
        description:
          'Szybkie wdrażanie aplikacji mobilnych dla serwisu terenowego, logistyki, ewidencji czasu i klientów.',
        deliverables: ['Synchronizacja offline', 'Aparat, kody QR i skan PDF', 'Publikacja w Play Store i App Store'],
      },
      {
        index: '03',
        title: 'Hosting Docker RODO w Niemczech',
        stack: 'Docker Compose · Hetzner Cloud · Traefik SSL',
        description:
          'Izolowane środowiska serwerowe w Norymberdze i Falkenstein dla n8n, PocketBase i usług AI.',
        deliverables: ['Lokalizacja w Niemczech', 'Automatyczne kopie zapasowe', 'Umowa powierzenia AVV i pełna kontrola'],
      },
    ],
    liveReference: {
      kicker: 'Referencja na żywo · Wdrożona aplikacja klienta',
      title: 'Natali Beauty App',
      description:
        'Interaktywna aplikacja webowa dla salonu kosmetycznego do prezentacji usług, rezerwacji i obsługi klientek.',
      url: 'https://lucent-kashata-59eb70.netlify.app/',
      cta: 'Otwórz Natali Beauty App',
    },
    roiTitle: 'Kalkulator ROI i oszczędności czasu',
    roiSubtitle:
      'Oblicz na podstawie wielkości zespołu, ile godzin i budżetu rocznie zaoszczędzi Vision IT Systems.',
    employeesLabel: 'Liczba pracowników z zadaniami admin.',
    hoursLabel: 'Ręczna praca rutynowa / osoba / tydzień',
    hourlyRateLabel: 'Wewnętrzny koszt roboczogodziny',
    automationRateLabel: 'Przewidywany stopień automatyzacji',
    hoursSavedLabel: 'Zaoszczędzone godziny / rok',
    moneySavedLabel: 'Roczna oszczędność',
    paybackLabel: 'Szacowany zwrot (ROI)',
    monthsUnit: 'mies.',
    hoursUnit: 'godz.',
    beforeLabel: 'Obecny nakład pracy ręcznej / rok',
    afterLabel: 'Nakład po automatyzacji',
    applyToAnalysis: 'Przenieś wynik do bezpłatnej analizy',
  },
  mobileShowcase: {
    kicker: 'Test mobilny na żywo · 5 projektów na ekranie smartfona',
    title: 'Przetestuj aplikacje i boty bezpośrednio na ekranie telefonu',
    subtitle:
      'Wybierz jeden z pięciu projektów po lewej stronie, aby przetestować jego interfejs mobilny bezpośrednio w ramce smartfona.',
    requestSimilarCta: 'Zapytaj o podobny projekt',
    openExternal: 'Otwórz na pełnym ekranie',
    openTelegram: 'Otwórz w Telegramie',
    projects: [
      {
        id: 'hausmeister',
        name: 'HausmeisterPro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Dart · PocketBase · Offline Sync',
        shortDesc: 'Aplikacja obiektowa (hausmeister.pro.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Mobilna aplikacja dla zarządców nieruchomości i konserwatorów z wyborem obiektów, listami kontrolnymi, odczytem liczników i zgłoszeniami usterek. Aby się zalogować i przetestować aplikację, wpisz e-mail „demo@vision-it.de” oraz hasło „12345678”.',
        highlights: [
          'Dane logowania do testów: E-mail demo@vision-it.de · Hasło 12345678',
          'Listy zadań offline dla obiektów mieszkalnych i komercyjnych',
          'Cyfrowy odczyt liczników prądu, wody i gazu',
          'Natychmiastowe zgłoszenia usterek do administracji',
        ],
      },
      {
        id: 'nataly_beauty',
        name: 'NatalyBeauty App',
        tag: 'Live Embed',
        stack: 'React · Responsive Web App · Netlify Edge',
        shortDesc: 'Osadzona aplikacja salonu urody z lucent-kashata-59eb70.netlify.app.',
        fullDesc:
          'Produkcyjna aplikacja dla salonu beauty z ofertą zabiegów, cennikiem i mobilną rezerwacją — osadzona na żywo w widoku telefonu.',
        highlights: [
          'Podgląd na żywo działającej aplikacji produkcyjnej',
          'Interfejs Mobile-First do szybkiego wyboru usług i terminu',
          'Zaprojektowana pod wysoką konwersję klientów',
        ],
      },
      {
        id: 'baumeister',
        name: 'Baumeister Pro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Android / iOS · Docker API',
        shortDesc: 'Aplikacja budowlana (bauapp.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Mobilne oprogramowanie dla kierowników budów i wykonawców: dziennik budowy, ewidencja brygad, postęp robót i odbiory. Aby się zalogować i przetestować aplikację, wpisz e-mail „demo@vision-it.de” oraz hasło „12345678”.',
        highlights: [
          'Dane logowania do testów: E-mail demo@vision-it.de · Hasło 12345678',
          'Codzienny dziennik budowy z liczbą pracowników i pogodą',
          'Procentowa kontrola postępu prac dla każdego etapu',
          'Listy odbiorowe i dokumentacja usterek na budowie',
        ],
      },
      {
        id: 'vision_tg',
        name: 'Vision Ki Telegram Bot',
        tag: 'Live Bot',
        stack: 'Telegram Bot API · n8n · Whisper ASR · Hetzner DE',
        shortDesc: 'Działający bot pod t.me/VisionITsystems_bot do wycen, zadań głosowych i CRM.',
        fullDesc:
          'Bezpośrednia automatyzacja biznesu w komunikatorze Telegram: wyceny AI, zamiana notatek głosowych w zadania i synchronizacja z CRM.',
        highlights: [
          'Interaktywne przyciski oraz odpowiedzi AI na dowolny tekst',
          'Transkrypcja notatek głosowych do zadań przez Whisper',
          'Bezpieczna obsługa webhooków na niemieckich serwerach Docker',
        ],
      },
      {
        id: 'kraftbruder',
        name: 'Kraftbruder Hausmeister App',
        tag: 'Live Embed',
        stack: 'Web & Mobile App · PocketBase · Docker DE',
        shortDesc: 'Aplikacja klienta (app.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Dedykowana aplikacja dla serwisu technicznego Kraftbruder: planowanie objazdów, dokumentacja zdjęciowa w terenie i mobilna obsługa zleceń. Aby się zalogować i przetestować aplikację, wpisz e-mail „demo@vision-it.de” oraz hasło „12345678”.',
        highlights: [
          'Dane logowania do testów: E-mail demo@vision-it.de · Hasło 12345678',
          'Osadzenie na żywo produkcyjnej aplikacji app.vision-it-systems.de',
          'Zarządzanie obiektami, trasami i cyfrowymi protokołami prac',
        ],
      },
    ],
  },
  feedback: {
    prompt: 'Jak oceniasz przydatność tego modułu demo?',
    placeholder: 'Opcjonalny komentarz (np. Twój przypadek użycia lub integracja)...',
    submit: 'Wyślij ocenę',
    submitting: 'Zapisywanie...',
    thanks: 'Dziękujemy za opinię!',
  },
  lead: {
    sectionTitle: 'Zamów bezpłatną analizę wstępną',
    sectionSubtitle:
      'W ciągu 24 godzin otrzymasz konkretną rekomendację architektury, wycenę prac oraz plan zgodności z RODO.',
    modalTitle: 'Zarezerwuj bezpłatną analizę',
    modalSubtitle: 'Opisz krótko swój proces — odpowiemy w ciągu 24 godzin roboczych.',
    nameLabel: 'Imię i nazwisko *',
    namePlaceholder: 'Jan Kowalski',
    emailLabel: 'Służbowy e-mail *',
    emailPlaceholder: 'j.kowalski@firma.pl',
    companyLabel: 'Firma *',
    companyPlaceholder: 'Przykładowa Sp. z o.o.',
    servicesLabel: 'Interesujące moduły *',
    notesLabel: 'Opis procesu / cel projektu (opcjonalnie)',
    notesPlaceholder: 'np. Automatyczne przenoszenie zapytań ofertowych z e-maila do CRM i powiadomienia Telegram...',
    submitBtn: 'Zamów bezpłatną analizę',
    submittingBtn: 'Wysyłanie zgłoszenia...',
    privacyNote: 'Połączenie szyfrowane TLS. Przetwarzanie wyłącznie zgodnie z RODO dla Twojego zapytania.',
    validationError: 'Proszę wypełnić imię i nazwisko, e-mail oraz firmę.',
    emailError: 'Proszę podać poprawny służbowy adres e-mail.',
    servicesError: 'Proszę wybrać co najmniej jeden moduł usługi.',
    serviceOptions: {
      n8n_automation: 'Automatyzacja n8n',
      telegram_bot: 'Bot Telegram',
      web_android_app: 'Aplikacja Web / Android',
      ai_chatbot: 'Chatbot AI / Głos',
      docker_hosting: 'Hosting Docker (DE)',
    },
    successTitle: 'Zapytanie zostało zapisane',
    successDesc: 'Dziękujemy! Twoje zgłoszenie zapisano w PocketBase. Skontaktujemy się w ciągu 24 godzin.',
    unreachableTitle: 'Serwer PocketBase jest tymczasowo niedostępny',
    unreachableDesc:
      'Serwer demo pb.demo.vision-it-systems.de nie odpowiada. Możesz wysłać zgłoszenie bezpośrednio e-mailem.',
    mailtoFallback: 'Otwórz e-mail na kontakt@vision-it-systems.de',
  },
  footer: {
    tagline: 'Architektura systemów IT, agenci AI i automatyzacja procesów dla firm B2B.',
    gdprBadge: '100% zgodności z RODO · Hosting w Niemczech (Docker & Hetzner)',
    contactLabel: 'Kontakt bezpośredni',
    impressum: 'Nota prawna (Impressum)',
    privacy: 'Polityka prywatności (RODO)',
    rights: 'Wszelkie prawa zastrzeżone.',
  },
  toasts: {
    feedbackSuccessTitle: 'Opinia zapisana',
    feedbackSuccessDesc: 'Twoja ocena została zapisana w PocketBase.',
    feedbackErrorTitle: 'Błąd zapisu',
    feedbackErrorDesc: 'Serwer PocketBase jest chwilowo niedostępny. Spróbuj ponownie później.',
  },
};
