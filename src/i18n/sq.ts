import type { Translations } from './types';

export const sq: Translations = {
  nav: {
    playground: 'Sandbox Live',
    n8n: 'n8n & IMAP',
    roi: 'Llogaritësi ROI',
    analysis: 'Analiza Falas',
    cta: 'Kërko Projekt',
  },
  hero: {
    kicker: 'Sandbox Interaktiv B2B · demo.vision-it-systems.de',
    headline: 'Testoni Automatizimin AI & Sistemet Softuerike në Kohë Reale.',
    subheadline:
      'Asnjë premtim statik: testoni drejtpërdrejt në shfletues agjentët tanë AI 24/7, rrjedhat e automatizuara n8n IMAP, botët e biznesit në Telegram dhe llogaritësin e kursimit ROI.',
    primaryCta: 'Analizë Fillestare Falas',
    secondaryCta: 'Nis Sandbox Live',
    locationProof: 'Zhvilluar & hostuar në Gjermani sipas GDPR (Docker & Hetzner)',
    metrics: [
      { value: '1,4 s', label: 'Klasifikim mesatar emaili', context: 'Tubacioni n8n + LLM IMAP' },
      { value: '70 %', label: 'Më pak punë manuale', context: 'Matur përgjatë 12 muajve' },
      { value: '24/7', label: 'Kualifikim i Lead-eve', context: 'Chatbox, Vapi & LiveKit' },
      { value: '100 %', label: 'Hosting Gjerman', context: 'Kontejnerë Docker në Hetzner' },
    ],
  },
  playground: {
    sectionTitle: 'Live Automation & AI Sandbox',
    sectionSubtitle:
      'Zgjidhni një nga katër skenarët produktivë më poshtë dhe ndërveproni drejtpërdrejt me modulet tona të automatizimit.',
    tabs: {
      chatbot: {
        label: '01. Chatbot AI & Zëri',
        shortDesc: 'Chatbox, Vapi & Agjent LiveKit',
      },
      n8n: {
        label: '02. Motori n8n & IMAP',
        shortDesc: 'Renditje Email & CRM Sync',
      },
      telegram: {
        label: '03. Telegram Business Bot',
        shortDesc: 'Porosi, Oferta & Zë në Detyrë',
      },
      apps_roi: {
        label: '04. Aplikacione, Docker & ROI',
        shortDesc: 'FlutterFlow, Hetzner & Llogaritës',
      },
    },
  },
  chatbot: {
    modeText: 'Chatbox me Tekst',
    modeVoice: 'Agjent Zëri (Vapi / LiveKit)',
    agentName: 'Këshilltari AI Vision',
    agentRole: 'Kualifikim Lead-esh & Rezervim Takimi',
    welcomeMsg:
      'Përshëndetje! Unë jam asistenti digjital i Vision IT Systems. Më pyesni për automatizimin n8n, botët Telegram, aplikacionet e personalizuara ose rezervoni menjëherë një takim konsultimi.',
    inputPlaceholder: 'Shkruani mesazhin, p.sh. "Si i automatizojmë faturat?"',
    send: 'Dërgo',
    reset: 'Rivendos',
    quickPromptsLabel: 'Pyetje të shpejta për testim:',
    quickPrompts: [
      'Si funksionon n8n?',
      'Sa kushton një Telegram Bot?',
      'Cakto një takim',
      'Si funksionon hostimi GDPR?',
    ],
    crmPanelTitle: 'Të dhënat CRM të zbuluara (Ekstraktim Live)',
    crmEmpty: 'Bëni një pyetje ose zgjidhni një shembull për të parë kualifikimin automatik të klientit.',
    crmFields: {
      intent: 'Qëllimi i Zbuluar',
      companySize: 'Fusha e Fokusit',
      recommendedStack: 'Teknologjia e Rekomanduar',
      qualification: 'Statusi i Lead-it',
    },
    bookSlotTitle: 'Oraret e Lira të Konsultimit (Video-thirrje 15 min)',
    slots: ['Nesër, 10:00 CET', 'Nesër, 14:30 CET', 'E enjte, 11:00 CET'],
    bookSlotBtn: 'Rezervo orarin',
    transferToForm: 'Përfundo kërkesën me këtë orar',
    voiceTitle: 'Simulimi i Agjentit të Zërit në Kohë Reale (Vapi / LiveKit)',
    voiceSubtitle:
      'Testoni një telefonatë hyrëse B2B për kualifikim automatik të takimeve me vonesë nën 600 ms.',
    voiceStart: 'Luaj thirrjen test',
    voiceStop: 'Ndalo thirrjen',
    voiceRunning: 'Transkriptimi i zërit live aktiv',
  },
  n8n: {
    title: 'Simuluesi i Automatizimit të Emaileve n8n & IMAP',
    subtitle:
      'Zgjidhni një shabllon tipik emaili nga klientët ose redaktoni tekstin lirshëm. Nisni rrjedhën për të parë klasifikimin, nxjerrjen e JSON dhe përgjigjen automatike.',
    presetsLabel: 'Zgjidhni një shabllon emaili:',
    senderLabel: 'Dërguesi (IMAP From)',
    subjectLabel: 'Subjekti (Subject)',
    bodyLabel: 'Përmbajtja e Emailit',
    runButton: 'Nis Rrjedhën',
    runningButton: 'Duke u ekzekutuar...',
    resetButton: 'Rivendos',
    executionTime: 'Koha e ekzekutimit',
    nodes: [
      { id: 'imap', title: 'IMAP Trigger', subtitle: 'Monitoron kutinë hyrëse' },
      { id: 'ai', title: 'AI Classifier', subtitle: 'Nxjerr qëllimin & fushat' },
      { id: 'crm', title: 'CRM / Google Sheets', subtitle: 'Krijon lead & tiket' },
      { id: 'reply', title: 'Auto-Reply', subtitle: 'Përgjigje automatike' },
    ],
    jsonOutputTitle: 'Të dhënat e ekstraktuara JSON',
    autoReplyTitle: 'Emaili i gjeneruar Auto-Reply',
    copyJson: 'Kopjo JSON',
    copied: 'U kopjua',
    idleHint: 'Klikoni „Nis Rrjedhën“ për të ekzekutuar tubacionin hap pas hapi.',
  },
  telegram: {
    title: 'Parapamja e Telegram Business Bot',
    subtitle:
      'Klikoni butonat direkt në modelin e telefonit për të testuar statusin e porosive, ofertat e shpejta ose kthimin e mesazheve zanore në detyra.',
    botHandle: '@VisionITsystems_bot',
    botStatus: 'Bot · Aktiv përmes Webhook',
    welcomeText:
      'Mirë se vini në Vision IT Business Bot. Zgjidhni një proces biznesi të automatizuar:',
    resetBtn: 'Rinis bisedën',
    openInTelegram: 'Hap në Telegram',
    inspectorTitle: 'Inspektori i Webhook & Callback',
    inspectorSubtitle: 'Çdo klikim në telefon dërgon një webhook të nënshkruar Telegram te punëtori juaj n8n/Docker.',
    inspectorEmpty: 'Klikoni një buton në Telegram për të parë ngarkesën JSON në kohë reale.',
    architectureTitle: 'Arkitektura e Prodhimit',
    architectureSteps: [
      '1. Telegram Bot API dërgon përditësimin e enkriptuar në kontejnerin Hetzner Docker.',
      '2. Punëtori Node.js / n8n kontrollon autorizimin dhe pyet ERP, CRM ose OpenAI Whisper.',
      '3. Përgjigjja e strukturuar ose oferta PDF kthehet nën 1 sekondë.',
    ],
    buttons: {
      orderStatus: 'Kontrollo statusin e porosisë',
      instantQuote: 'Krijo ofertë të menjëhershme',
      voiceTask: 'Shënim zanor → Detyrë',
      backMenu: 'Menuja kryesore',
    },
  },
  appsRoi: {
    showcaseTitle: 'Aplikacione Web, Android & FlutterFlow + Infrastrukturë Docker GDPR',
    showcaseSubtitle:
      'Aplikacione biznesi të përshtatura me arkitekturë të pastër kontejnerësh në qendrat gjermane të të dhënave.',
    cards: [
      {
        index: '01',
        title: 'Portale Web & Panele Klientësh',
        stack: 'React · TypeScript · PocketBase',
        description:
          'Mjete të brendshme operative, portale klientësh B2B dhe panele në kohë reale të lidhura pastër me sistemet ERP.',
        deliverables: ['Kontrolli i roleve & të drejtave', 'Sinkronizim API & Webhook', 'Ndërfaqe B2B responsive'],
      },
      {
        index: '02',
        title: 'Aplikacione Android & iOS me FlutterFlow',
        stack: 'FlutterFlow · Dart · Njoftime Push',
        description:
          'Zhvillim i shpejtë ndër-platformë për ekipet në terren, logjistikë, regjistrim orësh dhe shërbim klienti.',
        deliverables: ['Sinkronizim Offline', 'Skanim Kamera, QR & PDF', 'Publikim Play Store & App Store'],
      },
      {
        index: '03',
        title: 'Hosting Docker GDPR në Gjermani',
        stack: 'Docker Compose · Hetzner Cloud · Traefik SSL',
        description:
          'Kontejnerë plotësisht të izoluar në Nürnberg dhe Falkenstein për n8n, PocketBase, proxy AI dhe aplikacione web.',
        deliverables: ['Serverë 100% në Gjermani', 'Rezervime automatike', 'Kontratë AVV & kontroll i plotë i të dhënave'],
      },
    ],
    liveReference: {
      kicker: 'Referencë Live · Aplikacion Aktiv Klienti',
      title: 'Natali Beauty App',
      description:
        'Aplikacion interaktiv web për shërbimet e studios së bukurisë, rezervimin e takimeve dhe lidhjen digjitale me klientët — aktiv në prodhim.',
      url: 'https://lucent-kashata-59eb70.netlify.app/',
      cta: 'Hap Natali Beauty App',
    },
    roiTitle: 'Llogaritësi i ROI & Kursimit të Kohës',
    roiSubtitle:
      'Llogaritni në bazë të madhësisë së ekipit tuaj sa orë pune dhe buxhet kursen Vision IT Systems çdo vit.',
    employeesLabel: 'Numri i punonjësve me detyra administrative',
    hoursLabel: 'Orë pune manuale përsëritëse / person / javë',
    hourlyRateLabel: 'Kostoja e plotë e brendshme për orë',
    automationRateLabel: 'Shkalla realiste e automatizimit',
    hoursSavedLabel: 'Orë të kursyera / vit',
    moneySavedLabel: 'Kursimi vjetor',
    paybackLabel: 'Rikthimi i vlerësuar i investimit',
    monthsUnit: 'muaj',
    hoursUnit: 'orë',
    beforeLabel: 'Puna aktuale manuale / vit',
    afterLabel: 'Ngarkesa e mbetur pas automatizimit',
    applyToAnalysis: 'Transfero rezultatin në analizën falas',
  },
  mobileShowcase: {
    kicker: 'Test Mobile Live · 5 Projekte Klientësh në Ekranin e Telefonit',
    title: 'Testoni Aplikacionet & Botët Direkt në Ekranin Mobile',
    subtitle:
      'Zgjidhni një nga pesë projektet në të majtë për të përdorur ndërfaqen mobile drejtpërdrejt brenda kornizës së telefonit.',
    requestSimilarCta: 'Kërko projekt të ngjashëm',
    openExternal: 'Hap në ekran të plotë',
    openTelegram: 'Hap në Telegram',
    projects: [
      {
        id: 'hausmeister',
        name: 'HausmeisterPro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Dart · PocketBase · Offline Sync',
        shortDesc: 'Aplikacioni i mirëmbajtjes (hausmeister.pro.vision-it-systems.de) · Hyrja: demo@vision-it.de / 12345678',
        fullDesc:
          'Aplikacion mobil në terren për kujdestarët e objekteve dhe menaxhimin e pronave me lista kontrolli, regjistrim matësish dhe raportim defektesh. Për t’u kyçur dhe testuar aplikacionin, shkruani email-in "demo@vision-it.de" dhe fjalëkalimin "12345678".',
        highlights: [
          'Të dhënat e hyrjes për testim: Email demo@vision-it.de · Fjalëkalimi 12345678',
          'Lista detyrash offline për çdo objekt banimi dhe biznesi',
          'Regjistrim digjital i matësve të rrymës, ujit dhe gazit',
          'Tiketa defektesh me sinkronizim direkt te administrata',
        ],
      },
      {
        id: 'nataly_beauty',
        name: 'NatalyBeauty App',
        tag: 'Live Embed',
        stack: 'React · Responsive Web App · Netlify Edge',
        shortDesc: 'Aplikacion live për studio bukurie në lucent-kashata-59eb70.netlify.app.',
        fullDesc:
          'Aplikacion produktiv për studio bukurie dhe rezervime me listën e trajtimeve, çmimet dhe komunikim mobil me klientët — i integruar live në ekran.',
        highlights: [
          'Integrim në kohë reale i URL-së së aplikacionit në prodhim',
          'Ndërfaqe Mobile-First për zgjedhje të shpejtë të shërbimeve',
          'I optimizuar për konvertim të lartë të klientëve',
        ],
      },
      {
        id: 'baumeister',
        name: 'Baumeister Pro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Android / iOS · Docker API',
        shortDesc: 'Aplikacioni i ndërtimit (bauapp.vision-it-systems.de) · Hyrja: demo@vision-it.de / 12345678',
        fullDesc:
          'Softuer mobil për kantieret e ndërtimit dhe mjeshtrit: dokumentimi i stafit, progresi i punimeve dhe listat e dorëzimit në terren. Për t’u kyçur dhe testuar aplikacionin, shkruani email-in "demo@vision-it.de" dhe fjalëkalimin "12345678".',
        highlights: [
          'Të dhënat e hyrjes për testim: Email demo@vision-it.de · Fjalëkalimi 12345678',
          'Ditari ditor i kantierit me numrin e punëtorëve & motin',
          'Kontrolli i progresit në përqindje për çdo fazë punimesh',
          'Lista të strukturuara të pranimit teknik dhe defekteve',
        ],
      },
      {
        id: 'vision_tg',
        name: 'Vision Ki Telegram Bot',
        tag: 'Live Bot',
        stack: 'Telegram Bot API · n8n · Whisper ASR · Hetzner DE',
        shortDesc: 'Bot aktiv në t.me/VisionITsystems_bot për oferta, shënime zanore & CRM.',
        fullDesc:
          'Automatizim i drejtpërdrejtë biznesi në Telegram: gjeneroni oferta AI, transkriptoni mesazhet zanore në detyra dhe sinkronizoni me CRM.',
        highlights: [
          'Butona interaktivë dhe përgjigje AI për tekst të lirë',
          'Kthim i shënimit zanor në detyrë përmes OpenAI Whisper',
          'Funksionim webhook sipas GDPR në serverë Docker gjermanë',
        ],
      },
      {
        id: 'kraftbruder',
        name: 'Kraftbruder Hausmeister App',
        tag: 'Live Embed',
        stack: 'Web & Mobile App · PocketBase · Docker DE',
        shortDesc: 'Aplikacion klienti (app.vision-it-systems.de) · Hyrja: demo@vision-it.de / 12345678',
        fullDesc:
          'Aplikacion i personalizuar për shërbimet e mirëmbajtjes Kraftbruder: planifikimi i turneve, dokumentimi me foto dhe menaxhimi i porosive. Për t’u kyçur dhe testuar aplikacionin, shkruani email-in "demo@vision-it.de" dhe fjalëkalimin "12345678".',
        highlights: [
          'Të dhënat e hyrjes për testim: Email demo@vision-it.de · Fjalëkalimi 12345678',
          'Integrim i drejtpërdrejtë i aplikacionit live app.vision-it-systems.de',
          'Menaxhimi i objekteve, turneve dhe porosive të klientëve',
        ],
      },
    ],
  },
  feedback: {
    prompt: 'Sa i dobishëm ishte ky modul demo?',
    placeholder: 'Koment opsional (p.sh. rasti juaj i përdorimit ose integrimi i dëshiruar)...',
    submit: 'Dërgo vlerësimin',
    submitting: 'Duke u ruajtur...',
    thanks: 'Faleminderit për komentin tuaj!',
  },
  lead: {
    sectionTitle: 'Kërkoni Analizën Tuaj Fillestare Falas',
    sectionSubtitle:
      'Brenda 24 orëve do të merrni një rekomandim konkret arkitekture, vlerësim të kostos dhe plan përputhshmërie GDPR për kompaninë tuaj.',
    modalTitle: 'Rezervoni Analizën Fillestare Falas',
    modalSubtitle: 'Përshkruani shkurt procesin tuaj — ne përgjigjemi brenda 24 orëve të punës.',
    nameLabel: 'Emri dhe Mbiemri *',
    namePlaceholder: 'Arben Krasniqi',
    emailLabel: 'Emaili i Biznesit *',
    emailPlaceholder: 'a.krasniqi@kompania.de',
    companyLabel: 'Kompania *',
    companyPlaceholder: 'Shembull Bau GmbH',
    servicesLabel: 'Modulet me interes *',
    notesLabel: 'Përshkrimi i procesit / Qëllimi (opsionale)',
    notesPlaceholder: 'p.sh. Transferimi automatik i emaileve të ofertave në CRM dhe njoftim në Telegram...',
    submitBtn: 'Kërko Analizën Falas',
    submittingBtn: 'Duke dërguar kërkesën...',
    privacyNote: 'Transmetim i enkriptuar me TLS. Përpunohet sipas GDPR vetëm për kërkesën tuaj.',
    validationError: 'Ju lutemi plotësoni emrin, emailin dhe kompaninë.',
    emailError: 'Ju lutemi vendosni një adresë të vlefshme emaili.',
    servicesError: 'Ju lutemi zgjidhni të paktën një modul shërbimi.',
    serviceOptions: {
      n8n_automation: 'Automatizim n8n',
      telegram_bot: 'Telegram Bot',
      web_android_app: 'Web / Android App',
      ai_chatbot: 'AI Chatbot / Zëri',
      docker_hosting: 'Docker Hosting (DE)',
    },
    successTitle: 'Kërkesa u ruajt me sukses',
    successDesc: 'Faleminderit! Kërkesa juaj u regjistrua në PocketBase. Do t’ju kontaktojmë brenda 24 orëve.',
    unreachableTitle: 'Serveri PocketBase nuk është i arritshëm momentalisht',
    unreachableDesc:
      'Serveri demo në pb.demo.vision-it-systems.de nuk po përgjigjet. Mund ta dërgoni kërkesën direkt me email.',
    mailtoFallback: 'Hap emailin drejt kontakt@vision-it-systems.de',
  },
  footer: {
    tagline: 'Arkitekturë sistemesh IT, agjentë AI & automatizim procesesh për bizneset B2B.',
    gdprBadge: '100% sipas GDPR, hostuar në Gjermani (Docker & Hetzner)',
    contactLabel: 'Kontakt Direkt',
    impressum: 'Impressum',
    privacy: 'Privatësia (GDPR)',
    rights: 'Të gjitha të drejtat e rezervuara.',
  },
  toasts: {
    feedbackSuccessTitle: 'Vlerësimi u ruajt',
    feedbackSuccessDesc: 'Vlerësimi juaj u dërgua në PocketBase.',
    feedbackErrorTitle: 'Ruajtja dështoi',
    feedbackErrorDesc: 'Serveri PocketBase nuk është i arritshëm tani. Ju lutemi provoni më vonë.',
  },
};
