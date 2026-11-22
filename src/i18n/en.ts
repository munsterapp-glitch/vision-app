import type { Translations } from './types';

export const en: Translations = {
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
    openInTelegram: 'Open in Telegram',
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
    kicker: 'Mobile Live Test · 5 Client Projects in Smartphone Display',
    title: 'Test Deployed Apps & Bots Inside the Mobile Display',
    subtitle:
      'Select any of the five projects on the left to interact directly with its mobile interface inside the embedded smartphone frame.',
    requestSimilarCta: 'Request similar project',
    openExternal: 'Open full screen',
    openTelegram: 'Open in Telegram',
    projects: [
      {
        id: 'hausmeister',
        name: 'HausmeisterPro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Dart · PocketBase · Offline Sync',
        shortDesc: 'Facility app (hausmeister.pro.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Field-ready mobile app for facility managers and property caretakers featuring multi-property checklists, meter logging, and instant defect ticket routing. To sign in and test the live app, please enter email "demo@vision-it.de" and password "12345678".',
        highlights: [
          'Test login credentials: Email demo@vision-it.de · Password 12345678',
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
        shortDesc: 'Construction app (bauapp.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Mobile construction site software for site managers and contractors to log daily crew counts, update trade completion, and run handover inspections. To sign in and test the live app, please enter email "demo@vision-it.de" and password "12345678".',
        highlights: [
          'Test login credentials: Email demo@vision-it.de · Password 12345678',
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
      {
        id: 'kraftbruder',
        name: 'Kraftbruder Hausmeister App',
        tag: 'Live Embed',
        stack: 'Web & Mobile App · PocketBase · Docker DE',
        shortDesc: 'Client app (app.vision-it-systems.de) · Login: demo@vision-it.de / 12345678',
        fullDesc:
          'Custom-built operations application for Kraftbruder property & caretaker services: route scheduling, photo documentation on site, and mobile work-order tracking. To sign in and test the live app, please enter email "demo@vision-it.de" and password "12345678".',
        highlights: [
          'Test login credentials: Email demo@vision-it.de · Password 12345678',
          'Live production embed of app.vision-it-systems.de',
          'Property management, daily service routes & digital work logs',
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
};
