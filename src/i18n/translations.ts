import type { DemoModuleId, Language, ServiceOptionId } from '../types';

export interface Translations {
  nav: {
    playground: string;
    n8n: string;
    roi: string;
    analysis: string;
    cta: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    locationProof: string;
    metrics: Array<{ value: string; label: string; context: string }>;
  };
  playground: {
    sectionTitle: string;
    sectionSubtitle: string;
    tabs: Record<DemoModuleId, { label: string; shortDesc: string }>;
  };
  chatbot: {
    modeText: string;
    modeVoice: string;
    agentName: string;
    agentRole: string;
    welcomeMsg: string;
    inputPlaceholder: string;
    send: string;
    reset: string;
    quickPromptsLabel: string;
    quickPrompts: string[];
    crmPanelTitle: string;
    crmEmpty: string;
    crmFields: {
      intent: string;
      companySize: string;
      recommendedStack: string;
      qualification: string;
    };
    bookSlotTitle: string;
    slots: string[];
    bookSlotBtn: string;
    transferToForm: string;
    voiceTitle: string;
    voiceSubtitle: string;
    voiceStart: string;
    voiceStop: string;
    voiceRunning: string;
  };
  n8n: {
    title: string;
    subtitle: string;
    presetsLabel: string;
    senderLabel: string;
    subjectLabel: string;
    bodyLabel: string;
    runButton: string;
    runningButton: string;
    resetButton: string;
    executionTime: string;
    nodes: Array<{ id: string; title: string; subtitle: string }>;
    jsonOutputTitle: string;
    autoReplyTitle: string;
    copyJson: string;
    copied: string;
    idleHint: string;
  };
  telegram: {
    title: string;
    subtitle: string;
    botHandle: string;
    botStatus: string;
    welcomeText: string;
    resetBtn: string;
    inspectorTitle: string;
    inspectorSubtitle: string;
    inspectorEmpty: string;
    architectureTitle: string;
    architectureSteps: string[];
    buttons: {
      orderStatus: string;
      instantQuote: string;
      voiceTask: string;
      backMenu: string;
    };
  };
  appsRoi: {
    showcaseTitle: string;
    showcaseSubtitle: string;
    cards: Array<{
      index: string;
      title: string;
      stack: string;
      description: string;
      deliverables: string[];
    }>;
    liveReference: {
      kicker: string;
      title: string;
      description: string;
      url: string;
      cta: string;
    };
    roiTitle: string;
    roiSubtitle: string;
    employeesLabel: string;
    hoursLabel: string;
    hourlyRateLabel: string;
    automationRateLabel: string;
    hoursSavedLabel: string;
    moneySavedLabel: string;
    paybackLabel: string;
    monthsUnit: string;
    hoursUnit: string;
    beforeLabel: string;
    afterLabel: string;
    applyToAnalysis: string;
  };
  mobileShowcase: {
    kicker: string;
    title: string;
    subtitle: string;
    requestSimilarCta: string;
    openExternal: string;
    projects: Array<{
      id: 'hausmeister' | 'nataly_beauty' | 'baumeister' | 'vision_tg';
      name: string;
      tag: string;
      stack: string;
      shortDesc: string;
      fullDesc: string;
      highlights: string[];
    }>;
  };
  feedback: {
    prompt: string;
    placeholder: string;
    submit: string;
    submitting: string;
    thanks: string;
  };
  lead: {
    sectionTitle: string;
    sectionSubtitle: string;
    modalTitle: string;
    modalSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    servicesLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    privacyNote: string;
    validationError: string;
    emailError: string;
    servicesError: string;
    serviceOptions: Record<ServiceOptionId, string>;
    successTitle: string;
    successDesc: string;
    unreachableTitle: string;
    unreachableDesc: string;
    mailtoFallback: string;
  };
  footer: {
    tagline: string;
    gdprBadge: string;
    contactLabel: string;
    impressum: string;
    privacy: string;
    rights: string;
  };
  toasts: {
    feedbackSuccessTitle: string;
    feedbackSuccessDesc: string;
    feedbackErrorTitle: string;
    feedbackErrorDesc: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
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
      kicker: 'Mobile Live-Test · 4 Kundenprojekte im Smartphone-Display',
      title: 'Ausgewählte Apps & Bots direkt mobil testen',
      subtitle:
        'Wählen Sie eines der vier Projekte aus, um die Oberfläche direkt im eingebetteten Smartphone-Display interaktiv zu bedienen.',
      requestSimilarCta: 'Ähnliches Projekt anfragen',
      openExternal: 'Im Vollbild öffnen',
      projects: [
        {
          id: 'hausmeister',
          name: 'HausmeisterPro App',
          tag: 'Live Embed',
          stack: 'FlutterFlow · Dart · PocketBase · Offline-Sync',
          shortDesc: 'Live eingebettete Facility-App unter hausmeister.pro.vision-it-systems.de.',
          fullDesc:
            'Mobile Einsatz-App für Hausmeisterdienste und Immobilienverwaltungen mit Objekt-Auswahl, Checklisten, Zählerstandserfassung und direkter Ticket-Weiterleitung.',
          highlights: [
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
          shortDesc: 'Live eingebettete Bau-App unter bauapp.vision-it-systems.de.',
          fullDesc:
            'Mobile Baustellen-Software für Bauleiter und Handwerksbetriebe: Personalstärke dokumentieren, Gewerke-Fortschritt aktualisieren und Abnahmen vor Ort protokollieren.',
          highlights: [
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
  },
  en: {
    nav: {
      playground: 'Live Sandbox',
      n8n: 'n8n & IMAP',
      roi: 'ROI Calculator',
      analysis: 'Free Analysis',
      cta: 'Book Free Analysis',
    },
    hero: {
      kicker: 'Interactive B2B Sandbox · demo.vision-it-systems.de',
      headline: 'Test AI Automation & Custom Software Live in Your Browser.',
      subheadline:
        'Skip the static pitch deck: interact directly with our 24/7 AI support agents, automated n8n IMAP email pipelines, Telegram business bots, and annual ROI calculator.',
      primaryCta: 'Book Free Analysis',
      secondaryCta: 'Launch Sandbox',
      locationProof: 'GDPR-compliant engineering & hosting in Germany (Docker & Hetzner)',
      metrics: [
        { value: '1.4 s', label: 'Avg. Email Triage', context: 'n8n + LLM IMAP pipeline' },
        { value: '70 %', label: 'Less Manual Admin', context: 'Measured across 12 months' },
        { value: '24/7', label: 'Lead Qualification', context: 'Chatbox, Vapi & LiveKit' },
        { value: '100 %', label: 'German Infrastructure', context: 'Docker containers on Hetzner' },
      ],
    },
    playground: {
      sectionTitle: 'Live Automation & AI Sandbox',
      sectionSubtitle:
        'Select any of the four production scenarios below to interact directly with our automation architecture.',
      tabs: {
        chatbot: {
          label: '01. AI Chatbot & Voice',
          shortDesc: 'Chatbox, Vapi & LiveKit Agent',
        },
        n8n: {
          label: '02. n8n & IMAP Engine',
          shortDesc: 'Email Triage & CRM Sync',
        },
        telegram: {
          label: '03. Telegram Business Bot',
          shortDesc: 'Orders, Quotes & Voice-to-Task',
        },
        apps_roi: {
          label: '04. Apps, Docker & ROI',
          shortDesc: 'FlutterFlow, Hetzner & Calculator',
        },
      },
    },
    chatbot: {
      modeText: 'Text Chatbox',
      modeVoice: 'Voice Agent (Vapi / LiveKit)',
      agentName: 'Vision AI Consultant',
      agentRole: 'Lead Qualification & Scheduling',
      welcomeMsg:
        'Hello! I am the Vision IT Systems digital consultant. Ask me about n8n workflows, Telegram business bots, custom apps, or schedule a discovery call directly here.',
      inputPlaceholder: 'Type a message, e.g. "How do you automate incoming invoices?"',
      send: 'Send',
      reset: 'Reset',
      quickPromptsLabel: 'Quick test prompts:',
      quickPrompts: [
        'How does n8n work?',
        'Telegram Bot pricing?',
        'Book an appointment',
        'How does GDPR hosting work?',
      ],
      crmPanelTitle: 'Detected CRM Lead Context (Live Extraction)',
      crmEmpty: 'Ask a question or click a prompt to watch real-time lead qualification and CRM mapping.',
      crmFields: {
        intent: 'Detected Intent',
        companySize: 'Focus Area',
        recommendedStack: 'Recommended Stack',
        qualification: 'Lead Status',
      },
      bookSlotTitle: 'Available Consultation Slots (15-min Call)',
      slots: ['Tomorrow, 10:00 CET', 'Tomorrow, 14:30 CET', 'Thursday, 11:00 CET'],
      bookSlotBtn: 'Hold Slot',
      transferToForm: 'Complete booking with this slot',
      voiceTitle: 'Real-Time Voice Agent Simulation (Vapi / LiveKit)',
      voiceSubtitle:
        'Preview an inbound B2B voice qualification call running at sub-600ms conversational latency.',
      voiceStart: 'Play Sample Call',
      voiceStop: 'Stop Call',
      voiceRunning: 'Live audio transcript active',
    },
    n8n: {
      title: 'n8n & IMAP Email Automation Simulator',
      subtitle:
        'Pick a realistic customer inquiry preset or edit the email body yourself. Run the workflow to watch step-by-step classification, JSON extraction, and auto-reply generation.',
      presetsLabel: 'Choose Email Preset:',
      senderLabel: 'Sender (IMAP From)',
      subjectLabel: 'Subject',
      bodyLabel: 'Email Body',
      runButton: 'Run Workflow',
      runningButton: 'Executing...',
      resetButton: 'Reset',
      executionTime: 'Execution Time',
      nodes: [
        { id: 'imap', title: 'IMAP Trigger', subtitle: 'Watch incoming mailbox' },
        { id: 'ai', title: 'AI Classifier', subtitle: 'Extract intent & fields' },
        { id: 'crm', title: 'CRM / Google Sheets', subtitle: 'Upsert structured row' },
        { id: 'reply', title: 'Auto-Reply', subtitle: 'Draft or send response' },
      ],
      jsonOutputTitle: 'Extracted JSON Payload',
      autoReplyTitle: 'Generated Auto-Reply Email',
      copyJson: 'Copy JSON',
      copied: 'Copied',
      idleHint: 'Click "Run Workflow" to execute the 4-step automation pipeline.',
    },
    telegram: {
      title: 'Telegram Business Bot Preview',
      subtitle:
        'Click the inline keyboard buttons inside the smartphone mockup to test live order lookups, instant quote generation, and voice-to-task creation.',
      botHandle: '@VisionITsystems_bot',
      botStatus: 'Bot · Active Webhook',
      welcomeText:
        'Welcome to Vision IT Business Bot. Select an automated business workflow below:',
      resetBtn: 'Restart Chat',
      inspectorTitle: 'Webhook & Callback Inspector',
      inspectorSubtitle: 'Every inline button tap dispatches a signed Telegram webhook to your n8n/Docker worker.',
      inspectorEmpty: 'Tap any button inside the Telegram mockup to inspect the live webhook payload.',
      architectureTitle: 'Production Architecture',
      architectureSteps: [
        '1. Telegram Bot API pushes encrypted webhook event to our Hetzner Docker container.',
        '2. Node.js / n8n worker verifies permissions and queries your ERP, CRM, or Whisper ASR.',
        '3. Structured inline card or generated PDF quote returns in under 1 second.',
      ],
      buttons: {
        orderStatus: 'Check Order Status',
        instantQuote: 'Instant Quote Generator',
        voiceTask: 'Voice Note → Task',
        backMenu: 'Main Menu',
      },
    },
    appsRoi: {
      showcaseTitle: 'Custom Web, Android & FlutterFlow Apps + GDPR Docker Infrastructure',
      showcaseSubtitle:
        'Tailored business applications running on isolated container stacks inside German data centers.',
      cards: [
        {
          index: '01',
          title: 'Web Portals & Operations Dashboards',
          stack: 'React · TypeScript · PocketBase',
          description:
            'Internal operations consoles, B2B client portals, and real-time dashboards wired cleanly into your ERP and accounting systems.',
          deliverables: ['Role-based access control', 'API & webhook sync', 'Responsive B2B UX'],
        },
        {
          index: '02',
          title: 'Android & iOS Apps via FlutterFlow',
          stack: 'FlutterFlow · Dart · Push Notifications',
          description:
            'Rapid cross-platform delivery for field service teams, logistics tracking, time sheets, and client self-service apps.',
          deliverables: ['Offline-first sync', 'Camera, QR & PDF capture', 'Store release pipeline'],
        },
        {
          index: '03',
          title: 'GDPR Docker Hosting in Germany',
          stack: 'Docker Compose · Hetzner Cloud · Traefik SSL',
          description:
            'Dedicated container infrastructure in Nuremberg and Falkenstein for n8n, PocketBase, LLM proxies, and custom services.',
          deliverables: ['Hosted 100% in Germany', 'Automated off-site backups', 'DPA / AVV & full data ownership'],
        },
      ],
      liveReference: {
        kicker: 'Live Reference · Deployed Client App',
        title: 'Natali Beauty App',
        description:
          'Interactive web application for beauty studio services, appointment booking, and digital client engagement — running live in production.',
        url: 'https://lucent-kashata-59eb70.netlify.app/',
        cta: 'Open Natali Beauty App',
      },
      roiTitle: 'ROI & Time-Savings Calculator',
      roiSubtitle:
        'Adjust your team size and weekly manual workload to estimate annual hours and budget saved with Vision IT Systems.',
      employeesLabel: 'Team members handling manual admin',
      hoursLabel: 'Manual repetitive hours / person / week',
      hourlyRateLabel: 'Blended internal hourly cost',
      automationRateLabel: 'Expected automation coverage',
      hoursSavedLabel: 'Hours Saved / Year',
      moneySavedLabel: 'Annual Cost Savings',
      paybackLabel: 'Estimated Payback',
      monthsUnit: 'months',
      hoursUnit: 'hrs',
      beforeLabel: 'Current manual workload / year',
      afterLabel: 'Remaining workload after automation',
      applyToAnalysis: 'Carry calculation into Free Analysis',
    },
    mobileShowcase: {
      kicker: 'Mobile Live Test · 4 Client Projects in Smartphone Display',
      title: 'Test Deployed Apps & Bots Inside the Mobile Display',
      subtitle:
        'Select any of the four projects on the left to interact directly with its mobile interface inside the embedded smartphone frame.',
      requestSimilarCta: 'Request similar project',
      openExternal: 'Open full screen',
      projects: [
        {
          id: 'hausmeister',
          name: 'HausmeisterPro App',
          tag: 'Live Embed',
          stack: 'FlutterFlow · Dart · PocketBase · Offline Sync',
          shortDesc: 'Live embedded facility app from hausmeister.pro.vision-it-systems.de.',
          fullDesc:
            'Field-ready mobile app for facility managers and property caretakers featuring multi-property checklists, meter logging, and instant defect ticket routing.',
          highlights: [
            'Offline-ready inspection tasks per residential/commercial site',
            'Digital electricity, water & gas meter capture',
            'Instant defect tickets synced to property management',
          ],
        },
        {
          id: 'nataly_beauty',
          name: 'NatalyBeauty App',
          tag: 'Live Embed',
          stack: 'React · Responsive Web App · Netlify Edge',
          shortDesc: 'Live embedded beauty studio app from lucent-kashata-59eb70.netlify.app.',
          fullDesc:
            'Production beauty & booking web application showcasing treatments, service pricing, and mobile client booking — embedded live inside the phone viewport.',
          highlights: [
            'Live production embed running inside the mobile frame',
            'Mobile-first UX for treatment discovery & booking',
            'Designed for fast studio customer conversion',
          ],
        },
        {
          id: 'baumeister',
          name: 'Baumeister Pro App',
          tag: 'Live Embed',
          stack: 'FlutterFlow · Android / iOS · Docker API',
          shortDesc: 'Live embedded construction app from bauapp.vision-it-systems.de.',
          fullDesc:
            'Mobile construction site software for site managers and contractors to log daily crew counts, update trade completion, and run handover inspections.',
          highlights: [
            'Daily site diary with crew count & weather log',
            'Real-time completion tracking per construction trade',
            'Structured site handover & snagging checklists',
          ],
        },
        {
          id: 'vision_tg',
          name: 'Vision Ki Telegram Bot',
          tag: 'Live Bot',
          stack: 'Telegram Bot API · n8n · Whisper ASR · Hetzner DE',
          shortDesc: 'Live bot at t.me/VisionITsystems_bot for quotes, voice-to-task & CRM sync.',
          fullDesc:
            'Direct business automation inside Telegram: generate instant AI quotes, transcribe voice memos into tasks, and sync requests via webhook to your CRM.',
          highlights: [
            'Interactive inline keyboards & free-text AI replies',
            'Voice-note-to-task transcription via Whisper',
            'GDPR-compliant webhook execution on German Docker nodes',
          ],
        },
      ],
    },
    feedback: {
      prompt: 'How useful was this live demo module?',
      placeholder: 'Optional comment (e.g. your use case or desired integration)...',
      submit: 'Submit Rating',
      submitting: 'Saving...',
      thanks: 'Thank you for your feedback!',
    },
    lead: {
      sectionTitle: 'Request Your Free Initial Analysis',
      sectionSubtitle:
        'Within 24 hours you will receive a concrete architecture recommendation, effort estimate, and GDPR compliance plan.',
      modalTitle: 'Book Free Initial Analysis',
      modalSubtitle: 'Tell us briefly about your workflow — we respond within 24 business hours.',
      nameLabel: 'Full Name *',
      namePlaceholder: 'Alex Weber',
      emailLabel: 'Business Email *',
      emailPlaceholder: 'a.weber@company.de',
      companyLabel: 'Company *',
      companyPlaceholder: 'Acme Logistics GmbH',
      servicesLabel: 'Modules of Interest *',
      notesLabel: 'Process Notes / Goals (optional)',
      notesPlaceholder: 'e.g. Automatically parse daily RFQ emails into our CRM and notify sales via Telegram...',
      submitBtn: 'Request Free Analysis',
      submittingBtn: 'Submitting request...',
      privacyNote: 'TLS-encrypted transmission. Processed strictly under GDPR for your project inquiry.',
      validationError: 'Please fill in your name, email, and company.',
      emailError: 'Please enter a valid business email address.',
      servicesError: 'Please select at least one service module.',
      serviceOptions: {
        n8n_automation: 'n8n Automation',
        telegram_bot: 'Telegram Bot',
        web_android_app: 'Web / Android App',
        ai_chatbot: 'AI Chatbot / Voice',
        docker_hosting: 'Docker Hosting (DE)',
      },
      successTitle: 'Request saved successfully',
      successDesc: 'Thank you! Your inquiry has been stored in PocketBase. We will get back to you within 24 hours.',
      unreachableTitle: 'PocketBase backend temporarily unreachable',
      unreachableDesc:
        'The demo server at pb.demo.vision-it-systems.de did not respond. You can send your pre-filled inquiry directly via email.',
      mailtoFallback: 'Open email to kontakt@vision-it-systems.de',
    },
    footer: {
      tagline: 'IT systems architecture, AI agents & workflow automation for B2B companies.',
      gdprBadge: '100% GDPR-compliant hosted in Germany (Docker & Hetzner)',
      contactLabel: 'Direct Contact',
      impressum: 'Imprint (Impressum)',
      privacy: 'Privacy Policy (GDPR)',
      rights: 'All rights reserved.',
    },
    toasts: {
      feedbackSuccessTitle: 'Feedback saved',
      feedbackSuccessDesc: 'Your demo rating was submitted to PocketBase.',
      feedbackErrorTitle: 'Could not save feedback',
      feedbackErrorDesc: 'PocketBase server is currently unreachable. Please try again later.',
    },
  },
};
