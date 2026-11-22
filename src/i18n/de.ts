import type { Translations } from './types';

export const de: Translations = {
  nav: {
    playground: 'Live Sandbox',
    n8n: 'n8n & IMAP',
    roi: 'ROI-Rechner',
    analysis: 'Erstanalyse',
    cta: 'Projekt anfragen',
  },
  hero: {
    kicker: 'Interaktive B2B-Sandbox · demo.vision-it-systems.de',
    headline: 'KI-Automation & Software-Systeme in Echtzeit testen.',
    subheadline:
      'Keine PowerPoint-Versprechen: Testen Sie unsere 24/7 KI-Support-Agenten, automatisierte n8n-IMAP-Pipelines, Telegram Business Bots und unseren ROI-Rechner direkt im Browser.',
    primaryCta: 'Kostenlose Erstanalyse',
    secondaryCta: 'Live Sandbox starten',
    locationProof: 'DSGVO-konform entwickelt & gehostet in Deutschland (Docker & Hetzner)',
    metrics: [
      { value: '1,4 s', label: 'Ø E-Mail-Klassifizierung', context: 'n8n + LLM IMAP-Pipeline' },
      { value: '70 %', label: 'Weniger Routinearbeit', context: 'Gemessen über 12 Monate' },
      { value: '24/7', label: 'Lead-Qualifizierung', context: 'Chatbox, Vapi & LiveKit' },
      { value: '100 %', label: 'Deutsches Hosting', context: 'Docker-Container auf Hetzner' },
    ],
  },
  playground: {
    sectionTitle: 'Live Automation & AI Sandbox',
    sectionSubtitle:
      'Wählen Sie eines der vier Produktiv-Szenarien und interagieren Sie direkt mit unseren Automatisierungsbausteinen.',
    tabs: {
      chatbot: {
        label: '01. KI-Chatbot & Voice',
        shortDesc: 'Chatbox, Vapi & LiveKit Agent',
      },
      n8n: {
        label: '02. n8n & IMAP Engine',
        shortDesc: 'E-Mail-Triage & CRM-Sync',
      },
      telegram: {
        label: '03. Telegram Business Bot',
        shortDesc: 'Aufträge, Angebote & Sprache',
      },
      apps_roi: {
        label: '04. Apps, Docker & ROI',
        shortDesc: 'FlutterFlow, Hetzner & Rechner',
      },
    },
  },
  chatbot: {
    modeText: 'Text Chatbox',
    modeVoice: 'Voice Agent (Vapi / LiveKit)',
    agentName: 'Vision KI-Berater',
    agentRole: 'Lead-Qualifizierung & Terminbuchung',
    welcomeMsg:
      'Guten Tag! Ich bin der digitale Assistent von Vision IT Systems. Stellen Sie mir eine Frage zu n8n-Automatisierung, Telegram Bots, individuellen Apps oder buchen Sie direkt ein Erstgespräch.',
    inputPlaceholder: 'Nachricht eingeben, z.B. "Wie automatisieren wir Rechnungen?"',
    send: 'Senden',
    reset: 'Zurücksetzen',
    quickPromptsLabel: 'Schnell-Prompts zum Testen:',
    quickPrompts: [
      'Wie funktioniert n8n?',
      'Was kostet ein Telegram Bot?',
      'Termin vereinbaren',
      'Wie läuft DSGVO-Hosting ab?',
    ],
    crmPanelTitle: 'Erkannte CRM-Lead-Daten (Live-Extraktion)',
    crmEmpty: 'Stellen Sie eine Frage oder wählen Sie einen Prompt, um die automatische Lead-Qualifizierung zu sehen.',
    crmFields: {
      intent: 'Erkannter Intent',
      companySize: 'Fokusbereich',
      recommendedStack: 'Empfohlener Stack',
      qualification: 'Lead-Status',
    },
    bookSlotTitle: 'Freie Beratungsslots (15 Min. Video-Call)',
    slots: ['Morgen, 10:00 Uhr', 'Morgen, 14:30 Uhr', 'Donnerstag, 11:00 Uhr'],
    bookSlotBtn: 'Slot vormerken',
    transferToForm: 'Mit diesem Slot Anfrage abschließen',
    voiceTitle: 'Echtzeit-Sprachagent Simulation (Vapi / LiveKit)',
    voiceSubtitle:
      'Testen Sie einen eingehenden B2B-Anruf zur automatischen Terminqualifizierung mit unter 600 ms Latenz.',
    voiceStart: 'Testanruf abspielen',
    voiceStop: 'Anruf beenden',
    voiceRunning: 'Live-Audio-Transkription aktiv',
  },
  n8n: {
    title: 'n8n & IMAP E-Mail-Automatisierung',
    subtitle:
      'Wählen Sie eine typische Kunden-E-Mail oder bearbeiten Sie den Text frei. Starten Sie den Workflow, um Klassifizierung, JSON-Extraktion und Auto-Reply zu erleben.',
    presetsLabel: 'E-Mail-Vorlage wählen:',
    senderLabel: 'Absender (IMAP From)',
    subjectLabel: 'Betreff (Subject)',
    bodyLabel: 'E-Mail-Inhalt',
    runButton: 'Workflow starten',
    runningButton: 'Workflow läuft...',
    resetButton: 'Zurücksetzen',
    executionTime: 'Ausführungszeit',
    nodes: [
      { id: 'imap', title: 'IMAP Trigger', subtitle: 'Posteingang überwachen' },
      { id: 'ai', title: 'AI Classifier', subtitle: 'Intent & Felder extrahieren' },
      { id: 'crm', title: 'CRM / Google Sheets', subtitle: 'Lead & Ticket anlegen' },
      { id: 'reply', title: 'Auto-Reply', subtitle: 'Antwortentwurf / Versand' },
    ],
    jsonOutputTitle: 'Extrahierte JSON-Nutzdaten',
    autoReplyTitle: 'Generierte Auto-Reply E-Mail',
    copyJson: 'JSON kopieren',
    copied: 'Kopiert',
    idleHint: 'Klicken Sie auf „Workflow starten“, um die Pipeline Schritt für Schritt auszuführen.',
  },
  telegram: {
    title: 'Telegram Business Bot Vorschau',
    subtitle:
      'Klicken Sie auf die Inline-Buttons direkt im Smartphone-Mockup, um Live-Antworten für Bestellstatus, Sofort-Angebote oder Sprachnotiz-zu-Aufgabe zu testen.',
    botHandle: '@VisionITsystems_bot',
    botStatus: 'Bot · Aktiv über Webhook',
    welcomeText:
      'Willkommen im Vision IT Business Bot. Wählen Sie einen automatisierten Geschäftsprozess:',
    resetBtn: 'Chat neu starten',
    openInTelegram: 'In Telegram öffnen',
    inspectorTitle: 'Webhook & Callback-Protokoll',
    inspectorSubtitle: 'Jeder Klick im Smartphone löst einen signierten Telegram-Webhook an Ihren n8n/Docker-Worker aus.',
    inspectorEmpty: 'Klicken Sie auf einen Button im Telegram-Mockup, um den Payload zu sehen.',
    architectureTitle: 'Produktions-Architektur',
    architectureSteps: [
      '1. Telegram Bot API sendet verschlüsseltes Update an Hetzner Docker-Container.',
      '2. Node.js / n8n Worker prüft Berechtigung und fragt ERP, CRM oder OpenAI Whisper ab.',
      '3. Strukturierte Inline-Antwort oder PDF-Angebot erscheint in unter 1 Sekunde.',
    ],
    buttons: {
      orderStatus: 'Bestellstatus prüfen',
      instantQuote: 'Sofort-Angebot erstellen',
      voiceTask: 'Sprachnotiz → Aufgabe',
      backMenu: 'Hauptmenü',
    },
  },
  appsRoi: {
    showcaseTitle: 'Web, Android & FlutterFlow Apps + DSGVO Docker-Infrastruktur',
    showcaseSubtitle:
      'Maßgeschneiderte Geschäftsanwendungen mit sauberer Container-Architektur auf deutschen Rechenzentren.',
    cards: [
      {
        index: '01',
        title: 'Web-Portale & Kunden-Dashboards',
        stack: 'React · TypeScript · PocketBase',
        description:
          'Interne Operations-Tools, Kundenportale und Echtzeit-Dashboards mit schlanker API-Anbindung an bestehende ERP-Systeme.',
        deliverables: ['Rollen- & Rechtekonzept', 'API- & Webhook-Sync', 'Responsive B2B-Oberfläche'],
      },
      {
        index: '02',
        title: 'Android & iOS Apps via FlutterFlow',
        stack: 'FlutterFlow · Dart · Push-Notifications',
        description:
          'Schnelle Cross-Platform-Entwicklung für Außendienst, Logistik, Zeiterfassung und Kundenbindung mit nativer Performance.',
        deliverables: ['Offline-Synchronisation', 'Kamera-, QR- & PDF-Scan', 'Play Store & App Store Release'],
      },
      {
        index: '03',
        title: 'DSGVO Docker-Hosting in Deutschland',
        stack: 'Docker Compose · Hetzner Cloud · Traefik SSL',
        description:
          'Vollständig isolierte Container-Stacks in Nürnberg und Falkenstein für n8n, PocketBase, KI-Proxies und eigene Web-Apps.',
        deliverables: ['Serverstandort Deutschland', 'Automatisierte Backups', 'AVV & Zero-US-Cloud-Lock-in'],
      },
    ],
    liveReference: {
      kicker: 'Live-Referenz · Produktive Kunden-App',
      title: 'Natali Beauty App',
      description:
        'Interaktive Web-Applikation für Beauty-Studio-Services, Terminverwaltung und digitale Kundenbindung — live im Einsatz.',
      url: 'https://lucent-kashata-59eb70.netlify.app/',
      cta: 'Natali Beauty App öffnen',
    },
    roiTitle: 'ROI & Zeitersparnis Rechner',
    roiSubtitle:
      'Berechnen Sie auf Basis Ihrer Teamgröße, wie viel Arbeitszeit und Budget Vision IT Systems jährlich einspart.',
    employeesLabel: 'Anzahl Mitarbeitende mit Admin-Aufgaben',
    hoursLabel: 'Manuelle Routinearbeit pro Person / Woche',
    hourlyRateLabel: 'Interner Vollkosten-Stundensatz',
    automationRateLabel: 'Realistischer Automatisierungsgrad',
    hoursSavedLabel: 'Gesparte Stunden / Jahr',
    moneySavedLabel: 'Jährliche Ersparnis',
    paybackLabel: 'Geschätzte Amortisation',
    monthsUnit: 'Monate',
    hoursUnit: 'Std.',
    beforeLabel: 'Aktueller manueller Aufwand / Jahr',
    afterLabel: 'Verbleibender Aufwand nach Automation',
    applyToAnalysis: 'Ergebnis in kostenlose Erstanalyse übernehmen',
  },
  mobileShowcase: {
    kicker: 'Mobile Live-Test · 5 Kundenprojekte im Smartphone-Display',
    title: 'Ausgewählte Apps & Bots direkt mobil testen',
    subtitle:
      'Wählen Sie eines der fünf Projekte aus, um die Oberfläche direkt im eingebetteten Smartphone-Display interaktiv zu bedienen.',
    requestSimilarCta: 'Ähnliches Projekt anfragen',
    openExternal: 'Im Vollbild öffnen',
    openTelegram: 'In Telegram öffnen',
    projects: [
      {
        id: 'hausmeister',
        name: 'HausmeisterPro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Dart · PocketBase · Offline-Sync',
        shortDesc: 'Facility-App (hausmeister.pro.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Mobile Einsatz-App für Hausmeisterdienste und Immobilienverwaltungen mit Objekt-Auswahl, Checklisten, Zählerstandserfassung und direkter Ticket-Weiterleitung. Zum Einloggen und Testen der App geben Sie bitte E-Mail „demo@vision-it.de“ und Passwort „12345678“ ein.',
        highlights: [
          'Demo-Zugang zum Testen: E-Mail demo@vision-it.de · Passwort 12345678',
          'Offline-fähige Aufgabenlisten je Wohn- & Gewerbeobjekt',
          'Digitale Strom-, Wasser- & Gaszähler-Erfassung',
          'Mängeltickets mit direkter Verwaltungs-Synchronisation',
        ],
      },
      {
        id: 'nataly_beauty',
        name: 'NatalyBeauty App',
        tag: 'Live Embed',
        stack: 'React · Responsive Web App · Netlify Edge',
        shortDesc: 'Live eingebettete Beauty-Studio-App unter lucent-kashata-59eb70.netlify.app.',
        fullDesc:
          'Produktive Beauty- & Terminbuchungs-Applikation für Behandlungen, Preisübersicht und mobile Kundenansprache — hier direkt als Live-Embed im Smartphone-Frame.',
        highlights: [
          'Echtzeit-Einbettung der produktiven App-URL',
          'Mobile-First Oberfläche für schnelle Termin- & Servicewahl',
          'Nahtlose Integration in bestehende Studio-Workflows',
        ],
      },
      {
        id: 'baumeister',
        name: 'Baumeister Pro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Android / iOS · Docker API',
        shortDesc: 'Bau-App (bauapp.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Mobile Baustellen-Software für Bauleiter und Handwerksbetriebe: Personalstärke dokumentieren, Gewerke-Fortschritt aktualisieren und Abnahmen vor Ort protokollieren. Zum Einloggen und Testen der App geben Sie bitte E-Mail „demo@vision-it.de“ und Passwort „12345678“ ein.',
        highlights: [
          'Demo-Zugang zum Testen: E-Mail demo@vision-it.de · Passwort 12345678',
          'Tagesaktuelles Bautagebuch mit Personal- & Wetterprotokoll',
          'Prozentuale Fortschrittskontrolle je Gewerk',
          'Strukturierte Abnahme- & Mängel-Checklisten',
        ],
      },
      {
        id: 'vision_tg',
        name: 'Vision Ki Telegram Bot',
        tag: 'Live Bot',
        stack: 'Telegram Bot API · n8n · Whisper ASR · Hetzner DE',
        shortDesc: 'Live-Bot unter t.me/VisionITsystems_bot für Angebote, Sprachnotizen & CRM-Sync.',
        fullDesc:
          'Direkte Geschäftsautomatisierung im Telegram-Messenger: KI-Angebote generieren, Sprachnachrichten transkribieren und Vorgänge per Webhook ans CRM übergeben.',
        highlights: [
          'Interaktive Inline-Buttons & Freitext-KI-Verarbeitung',
          'Sprachnotiz-zu-Aufgabe per OpenAI Whisper',
          'DSGVO-konformer Webhook-Betrieb auf deutschen Docker-Nodes',
        ],
      },
      {
        id: 'kraftbruder',
        name: 'Kraftbruder Hausmeister App',
        tag: 'Live Embed',
        stack: 'Web & Mobile App · PocketBase · Docker DE',
        shortDesc: 'Kunden-App (app.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Maßgeschneiderte Kunden-Applikation für Kraftbruder Hausmeisterservice: Tourenplanung, Fotodokumentation vor Ort und direkte Auftragsabwicklung. Zum Einloggen und Testen der App geben Sie bitte E-Mail „demo@vision-it.de“ und Passwort „12345678“ ein.',
        highlights: [
          'Demo-Zugang zum Testen: E-Mail demo@vision-it.de · Passwort 12345678',
          'Live-Einbettung der produktiven Kunden-URL app.vision-it-systems.de',
          'Objektverwaltung, Einsatztouren & digitale Arbeitsnachweise',
        ],
      },
    ],
  },
  feedback: {
    prompt: 'Wie hilfreich war dieses Demo-Modul?',
    placeholder: 'Optionales Feedback (z.B. Anwendungsfall oder Wunsch-Integration)...',
    submit: 'Bewertung senden',
    submitting: 'Wird gespeichert...',
    thanks: 'Vielen Dank für Ihr Feedback!',
  },
  lead: {
    sectionTitle: 'Kostenlose Erstanalyse anfragen',
    sectionSubtitle:
      'Sie erhalten innerhalb von 24 Stunden eine konkrete Architekturempfehlung, Aufwandschätzung und ein DSGVO-Konzept für Ihr Unternehmen.',
    modalTitle: 'Kostenlose Erstanalyse buchen',
    modalSubtitle: 'Beschreiben Sie kurz Ihren Prozess — wir melden uns werktags innerhalb von 24 Stunden.',
    nameLabel: 'Vor- und Nachname *',
    namePlaceholder: 'Max Mustermann',
    emailLabel: 'Geschäftliche E-Mail *',
    emailPlaceholder: 'm.mustermann@unternehmen.de',
    companyLabel: 'Unternehmen *',
    companyPlaceholder: 'Musterbetrieb GmbH',
    servicesLabel: 'Interessante Bausteine *',
    notesLabel: 'Prozessbeschreibung / Projektziel (optional)',
    notesPlaceholder: 'z.B. Tägliche Angebots-E-Mails automatisch ins CRM übertragen und Telegram-Benachrichtigung senden...',
    submitBtn: 'Kostenlose Analyse anfordern',
    submittingBtn: 'Anfrage wird übermittelt...',
    privacyNote: 'Übertragung TLS-verschlüsselt. Verarbeitung gemäß DSGVO ausschließlich zur Projektanfrage.',
    validationError: 'Bitte füllen Sie Name, E-Mail und Unternehmen vollständig aus.',
    emailError: 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.',
    servicesError: 'Bitte wählen Sie mindestens einen Leistungsbaustein aus.',
    serviceOptions: {
      n8n_automation: 'n8n Automation',
      telegram_bot: 'Telegram Bot',
      web_android_app: 'Web / Android App',
      ai_chatbot: 'KI-Chatbot / Voice',
      docker_hosting: 'Docker Hosting (DE)',
    },
    successTitle: 'Anfrage erfolgreich gespeichert',
    successDesc: 'Vielen Dank! Ihre Anfrage wurde in PocketBase erfasst. Wir melden uns innerhalb von 24 Stunden.',
    unreachableTitle: 'PocketBase-Backend momentan nicht erreichbar',
    unreachableDesc:
      'Der Demo-Server unter pb.demo.vision-it-systems.de antwortet aktuell nicht. Sie können die Anfrage direkt per E-Mail senden.',
    mailtoFallback: 'Per E-Mail an kontakt@vision-it-systems.de öffnen',
  },
  footer: {
    tagline: 'IT-Systemarchitektur, KI-Agenten & Prozessautomatisierung für den B2B-Mittelstand.',
    gdprBadge: '100% DSGVO-konform gehostet in Deutschland (Docker & Hetzner)',
    contactLabel: 'Direktkontakt',
    impressum: 'Impressum',
    privacy: 'Datenschutz (DSGVO)',
    rights: 'Alle Rechte vorbehalten.',
  },
  toasts: {
    feedbackSuccessTitle: 'Feedback gespeichert',
    feedbackSuccessDesc: 'Ihre Bewertung wurde an PocketBase übermittelt.',
    feedbackErrorTitle: 'Speichern fehlgeschlagen',
    feedbackErrorDesc: 'PocketBase-Endpunkt aktuell nicht erreichbar. Bitte versuchen Sie es später erneut.',
  },
};
