import type { Translations } from './types';

export const hr: Translations = {
  nav: {
    playground: 'Live Sandbox',
    n8n: 'n8n & IMAP',
    roi: 'ROI Kalkulator',
    analysis: 'Analiza',
    cta: 'Zatraži projekt',
  },
  hero: {
    kicker: 'Interaktivni B2B Sandbox · demo.vision-it-systems.de',
    headline: 'Testirajte AI automatizaciju i softverske sustave uživo.',
    subheadline:
      'Bez praznih prezentacija: isprobajte naše 24/7 AI agente za podršku, automatizirane n8n IMAP procese, Telegram poslovne botove i ROI kalkulator izravno u pregledniku.',
    primaryCta: 'Besplatna analiza',
    secondaryCta: 'Pokreni Sandbox',
    locationProof: 'Razvijeno i hostano u Njemačkoj prema GDPR-u (Docker & Hetzner)',
    metrics: [
      { value: '1,4 s', label: 'Prosječna obrada e-maila', context: 'n8n + LLM IMAP pipeline' },
      { value: '70 %', label: 'Manje rutinskog rada', context: 'Mjereno kroz 12 mjeseci' },
      { value: '24/7', label: 'Kvalifikacija upita', context: 'Chatbox, Vapi & LiveKit' },
      { value: '100 %', label: 'Njemački hosting', context: 'Docker kontejneri na Hetzneru' },
    ],
  },
  playground: {
    sectionTitle: 'Live Automation & AI Sandbox',
    sectionSubtitle:
      'Odaberite jedan od četiri produkcijska scenarija i izravno testirajte naše module automatizacije.',
    tabs: {
      chatbot: {
        label: '01. AI Chatbot & Voice',
        shortDesc: 'Chatbox, Vapi & LiveKit agent',
      },
      n8n: {
        label: '02. n8n & IMAP Engine',
        shortDesc: 'Obrada e-maila i CRM sinkronizacija',
      },
      telegram: {
        label: '03. Telegram Business Bot',
        shortDesc: 'Narudžbe, ponude i glasovne bilješke',
      },
      apps_roi: {
        label: '04. Aplikacije, Docker & ROI',
        shortDesc: 'FlutterFlow, Hetzner i kalkulator',
      },
    },
  },
  chatbot: {
    modeText: 'Tekstualni Chatbox',
    modeVoice: 'Glasovni agent (Vapi / LiveKit)',
    agentName: 'Vision AI Savjetnik',
    agentRole: 'Kvalifikacija leadova i rezervacija termina',
    welcomeMsg:
      'Dobar dan! Ja sam digitalni asistent tvrtke Vision IT Systems. Pitajte me o n8n automatizaciji, Telegram botovima, izradi aplikacija ili odmah rezervirajte uvodni razgovor.',
    inputPlaceholder: 'Upišite poruku, npr. "Kako automatizirati račune?"',
    send: 'Pošalji',
    reset: 'Poništi',
    quickPromptsLabel: 'Brzi testni upiti:',
    quickPrompts: [
      'Kako radi n8n?',
      'Koliko košta Telegram Bot?',
      'Zakaži termin',
      'Kako radi GDPR hosting?',
    ],
    crmPanelTitle: 'Prepoznati CRM podaci (uživo)',
    crmEmpty: 'Postavite pitanje ili kliknite brzi upit kako biste vidjeli automatsku kvalifikaciju leada.',
    crmFields: {
      intent: 'Prepoznata namjera',
      companySize: 'Fokus područje',
      recommendedStack: 'Preporučena tehnologija',
      qualification: 'Status leada',
    },
    bookSlotTitle: 'Slobodni termini za konzultacije (15 min video poziv)',
    slots: ['Sutra, 10:00 h', 'Sutra, 14:30 h', 'Četvrtak, 11:00 h'],
    bookSlotBtn: 'Rezerviraj termin',
    transferToForm: 'Dovrši upit s ovim terminom',
    voiceTitle: 'Simulacija glasovnog agenta u stvarnom vremenu (Vapi / LiveKit)',
    voiceSubtitle:
      'Poslušajte simulaciju dolaznog B2B poziva za automatsko zakazivanje termina s latencijom manjom od 600 ms.',
    voiceStart: 'Pokreni probni poziv',
    voiceStop: 'Završi poziv',
    voiceRunning: 'Aktivna transkripcija uživo',
  },
  n8n: {
    title: 'n8n & IMAP simulator automatizacije e-pošte',
    subtitle:
      'Odaberite predložak e-maila klijenta ili uredite tekst ručno. Pokrenite workflow kako biste vidjeli klasifikaciju, JSON izdvajanje i automatski odgovor.',
    presetsLabel: 'Odaberite predložak e-pošte:',
    senderLabel: 'Pošiljatelj (IMAP From)',
    subjectLabel: 'Predmet (Subject)',
    bodyLabel: 'Sadržaj e-maila',
    runButton: 'Pokreni workflow',
    runningButton: 'Izvršavanje...',
    resetButton: 'Poništi',
    executionTime: 'Vrijeme izvršavanja',
    nodes: [
      { id: 'imap', title: 'IMAP Trigger', subtitle: 'Nadzor ulazne pošte' },
      { id: 'ai', title: 'AI Classifier', subtitle: 'Prepoznavanje namjere' },
      { id: 'crm', title: 'CRM / Google Sheets', subtitle: 'Unos leada i tiketa' },
      { id: 'reply', title: 'Auto-Reply', subtitle: 'Generiranje odgovora' },
    ],
    jsonOutputTitle: 'Izdvojeni JSON podaci',
    autoReplyTitle: 'Generirani automatski odgovor',
    copyJson: 'Kopiraj JSON',
    copied: 'Kopirano',
    idleHint: 'Kliknite „Pokreni workflow“ za pokretanje procesa korak po korak.',
  },
  telegram: {
    title: 'Pregled Telegram poslovnog bota',
    subtitle:
      'Kliknite na gumbe unutar prikaza pametnog telefona kako biste testirali provjeru narudžbe, brzu ponudu ili pretvaranje glasovne bilješke u zadatak.',
    botHandle: '@VisionITsystems_bot',
    botStatus: 'Bot · Aktivan putem Webhooka',
    welcomeText:
      'Dobrodošli u Vision IT Business Bot. Odaberite automatizirani poslovni proces:',
    resetBtn: 'Ponovno pokreni chat',
    openInTelegram: 'Otvori u Telegramu',
    inspectorTitle: 'Webhook & Callback zapisnik',
    inspectorSubtitle: 'Svaki klik na pametnom telefonu šalje potpisani Telegram webhook vašem n8n/Docker servisu.',
    inspectorEmpty: 'Kliknite bilo koji gumb u Telegram prikazu za pregled webhook podataka.',
    architectureTitle: 'Produkcijska arhitektura',
    architectureSteps: [
      '1. Telegram Bot API šalje šifrirani zahtjev na Hetzner Docker kontejner.',
      '2. Node.js / n8n worker provjerava prava i dohvaća podatke iz ERP-a, CRM-a ili Whispera.',
      '3. Strukturirani odgovor ili PDF ponuda stiže za manje od 1 sekunde.',
    ],
    buttons: {
      orderStatus: 'Provjeri status narudžbe',
      instantQuote: 'Brza izrada ponude',
      voiceTask: 'Glasovna bilješka → Zadatak',
      backMenu: 'Glavni izbornik',
    },
  },
  appsRoi: {
    showcaseTitle: 'Web, Android & FlutterFlow aplikacije + GDPR Docker infrastruktura',
    showcaseSubtitle:
      'Poslovne aplikacije po mjeri s izoliranom kontejnerskom arhitekturom u njemačkim podatkovnim centrima.',
    cards: [
      {
        index: '01',
        title: 'Web portali i nadzorne ploče',
        stack: 'React · TypeScript · PocketBase',
        description:
          'Interni operativni alati, portali za klijente i nadzorne ploče u stvarnom vremenu povezane s vašim ERP sustavom.',
        deliverables: ['Uloge i prava pristupa', 'API i webhook sinkronizacija', 'Responzivno B2B sučelje'],
      },
      {
        index: '02',
        title: 'Android & iOS aplikacije putem FlutterFlowa',
        stack: 'FlutterFlow · Dart · Push obavijesti',
        description:
          'Brz razvoj mobilnih aplikacija za terenske timove, logistiku, evidenciju radnog vremena i klijente.',
        deliverables: ['Offline sinkronizacija', 'Skeniranje kamere, QR i PDF-a', 'Objava na Play Store i App Store'],
      },
      {
        index: '03',
        title: 'GDPR Docker hosting u Njemačkoj',
        stack: 'Docker Compose · Hetzner Cloud · Traefik SSL',
        description:
          'Potpuno izolirani kontejnerski sustavi u Nürnbergu i Falkensteinu za n8n, PocketBase, AI servise i web aplikacije.',
        deliverables: ['Lokacija servera u Njemačkoj', 'Automatske sigurnosne kopije', 'AVV ugovor i puno vlasništvo podataka'],
      },
    ],
    liveReference: {
      kicker: 'Live referenca · Produkcijska aplikacija klijenta',
      title: 'Natali Beauty App',
      description:
        'Interaktivna web aplikacija za usluge kozmetičkog salona, naručivanje termina i digitalni kontakt s klijentima.',
      url: 'https://lucent-kashata-59eb70.netlify.app/',
      cta: 'Otvori Natali Beauty App',
    },
    roiTitle: 'ROI & kalkulator uštede vremena',
    roiSubtitle:
      'Izračunajte koliko radnih sati i proračuna Vision IT Systems godišnje štedi vašem timu.',
    employeesLabel: 'Broj djelatnika s administrativnim zadacima',
    hoursLabel: 'Ručni rutinski rad po osobi / tjedno',
    hourlyRateLabel: 'Interna satnica troška rada',
    automationRateLabel: 'Realna razina automatizacije',
    hoursSavedLabel: 'Ušteđeni sati / godišnje',
    moneySavedLabel: 'Godišnja ušteda',
    paybackLabel: 'Procijenjeni povrat ulaganja',
    monthsUnit: 'mj.',
    hoursUnit: 'h',
    beforeLabel: 'Trenutni ručni rad / godišnje',
    afterLabel: 'Preostali rad nakon automatizacije',
    applyToAnalysis: 'Prenesi izračun u besplatnu analizu',
  },
  mobileShowcase: {
    kicker: 'Mobilni live test · 5 projekata u prikazu telefona',
    title: 'Testirajte aplikacije i botove izravno na mobilnom ekranu',
    subtitle:
      'Odaberite jedan od pet projekata kako biste odmah isprobali mobilno sučelje unutar ugrađenog zaslona pametnog telefona.',
    requestSimilarCta: 'Zatraži sličan projekt',
    openExternal: 'Otvori u punom zaslonu',
    openTelegram: 'Otvori u Telegramu',
    projects: [
      {
        id: 'hausmeister',
        name: 'HausmeisterPro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Dart · PocketBase · Offline Sync',
        shortDesc: 'Aplikacija za održavanje (hausmeister.pro.vision-it-systems.de) · Prijava: demo@vision-it.de / 12345678',
        fullDesc:
          'Mobilna aplikacija za domare i upravitelje nekretnina s izborom objekta, kontrolnim listama, očitanjem brojila i prijavom kvarova. Za prijavu i testiranje aplikacije unesite e-poštu "demo@vision-it.de" i lozinku "12345678".',
        highlights: [
          'Podaci za prijavu i testiranje: E-pošta demo@vision-it.de · Lozinka 12345678',
          'Offline zadaci pregleda za stambene i poslovne objekte',
          'Digitalni unos brojila struje, vode i plina',
          'Prijava kvarova s izravnom sinkronizacijom prema upravi',
        ],
      },
      {
        id: 'nataly_beauty',
        name: 'NatalyBeauty App',
        tag: 'Live Embed',
        stack: 'React · Responsive Web App · Netlify Edge',
        shortDesc: 'Ugrađena aplikacija za salon ljepote na lucent-kashata-59eb70.netlify.app.',
        fullDesc:
          'Produkcijska web aplikacija za kozmetički salon, pregled tretmana i rezervaciju termina — ugrađena uživo u mobilnom prikazu.',
        highlights: [
          'Uživo ugrađena produkcijska URL adresa',
          'Mobile-First sučelje za brzi odabir usluga i termina',
          'Dizajnirano za visoku konverziju klijenata salona',
        ],
      },
      {
        id: 'baumeister',
        name: 'Baumeister Pro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Android / iOS · Docker API',
        shortDesc: 'Građevinska aplikacija (bauapp.vision-it-systems.de) · Prijava: demo@vision-it.de / 12345678',
        fullDesc:
          'Mobilni softver za voditelje gradilišta i izvođače radova: građevinski dnevnik, praćenje napredovanja radova i završne primopredaje. Za prijavu i testiranje aplikacije unesite e-poštu "demo@vision-it.de" i lozinku "12345678".',
        highlights: [
          'Podaci za prijavu i testiranje: E-pošta demo@vision-it.de · Lozinka 12345678',
          'Dnevni građevinski dnevnik s brojem radnika i vremenom',
          'Postotno praćenje napretka po vrsti radova',
          'Strukturirane liste provjere i primopredaje objekta',
        ],
      },
      {
        id: 'vision_tg',
        name: 'Vision Ki Telegram Bot',
        tag: 'Live Bot',
        stack: 'Telegram Bot API · n8n · Whisper ASR · Hetzner DE',
        shortDesc: 'Live bot na t.me/VisionITsystems_bot za ponude, glasovne zadatke i CRM.',
        fullDesc:
          'Poslovna automatizacija izravno u Telegramu: generirajte AI ponude, pretvorite glasovne poruke u zadatke i povežite sve s CRM-om.',
        highlights: [
          'Interaktivni gumbi i AI odgovori na slobodan tekst',
          'Pretvaranje glasovnih bilješki u zadatke putem Whispera',
          'GDPR webhook rad na njemačkim Docker serverima',
        ],
      },
      {
        id: 'kraftbruder',
        name: 'Kraftbruder Hausmeister App',
        tag: 'Live Embed',
        stack: 'Web & Mobile App · PocketBase · Docker DE',
        shortDesc: 'Klijentska aplikacija (app.vision-it-systems.de) · Prijava: demo@vision-it.de / 12345678',
        fullDesc:
          'Prilagođena aplikacija za Kraftbruder domarske usluge: planiranje obilazaka, fotodokumentacija na terenu i brza obrada radnih naloga. Za prijavu i testiranje aplikacije unesite e-poštu "demo@vision-it.de" i lozinku "12345678".',
        highlights: [
          'Podaci za prijavu i testiranje: E-pošta demo@vision-it.de · Lozinka 12345678',
          'Uživo ugrađena produkcijska aplikacija app.vision-it-systems.de',
          'Upravljanje objektima, rutama i digitalnim radnim nalozima',
        ],
      },
    ],
  },
  feedback: {
    prompt: 'Koliko Vam je koristan ovaj demo modul?',
    placeholder: 'Neobavezan komentar (npr. Vaš poslovni slučaj ili željena integracija)...',
    submit: 'Pošalji ocjenu',
    submitting: 'Spremanje...',
    thanks: 'Hvala Vam na povratnoj informaciji!',
  },
  lead: {
    sectionTitle: 'Zatražite besplatnu početnu analizu',
    sectionSubtitle:
      'U roku od 24 sata dobit ćete konkretnu preporuku arhitekture, procjenu troškova i GDPR plan za Vašu tvrtku.',
    modalTitle: 'Rezerviraj besplatnu analizu',
    modalSubtitle: 'Ukratko opišite svoj proces — javljamo se unutar 24 radna sata.',
    nameLabel: 'Ime i prezime *',
    namePlaceholder: 'Ivan Horvat',
    emailLabel: 'Poslovni e-mail *',
    emailPlaceholder: 'i.horvat@tvrtka.hr',
    companyLabel: 'Tvrtka *',
    companyPlaceholder: 'Primjer d.o.o.',
    servicesLabel: 'Zanimljivi moduli *',
    notesLabel: 'Opis procesa / cilj projekta (neobavezno)',
    notesPlaceholder: 'npr. Automatsko prebacivanje upita iz e-maila u CRM i slanje obavijesti na Telegram...',
    submitBtn: 'Zatraži besplatnu analizu',
    submittingBtn: 'Slanje upita...',
    privacyNote: 'TLS šifrirani prijenos. Obrada podataka isključivo prema GDPR-u za Vaš upit.',
    validationError: 'Molimo ispunite ime, e-mail i naziv tvrtke.',
    emailError: 'Molimo unesite ispravnu poslovnu e-mail adresu.',
    servicesError: 'Molimo odaberite barem jedan modul usluge.',
    serviceOptions: {
      n8n_automation: 'n8n Automatizacija',
      telegram_bot: 'Telegram Bot',
      web_android_app: 'Web / Android App',
      ai_chatbot: 'AI Chatbot / Voice',
      docker_hosting: 'Docker Hosting (DE)',
    },
    successTitle: 'Upit je uspješno spremljen',
    successDesc: 'Hvala! Vaš upit je spremljen u PocketBase. Javit ćemo se u roku od 24 sata.',
    unreachableTitle: 'PocketBase poslužitelj trenutno nije dostupan',
    unreachableDesc:
      'Demo server na pb.demo.vision-it-systems.de trenutno ne odgovara. Upit možete poslati izravno e-mailom.',
    mailtoFallback: 'Otvori e-mail za kontakt@vision-it-systems.de',
  },
  footer: {
    tagline: 'IT arhitektura sustava, AI agenti i automatizacija poslovnih procesa za B2B tvrtke.',
    gdprBadge: '100% GDPR usklađen hosting u Njemačkoj (Docker & Hetzner)',
    contactLabel: 'Izravni kontakt',
    impressum: 'Impresum',
    privacy: 'Zaštita podataka (GDPR)',
    rights: 'Sva prava pridržana.',
  },
  toasts: {
    feedbackSuccessTitle: 'Ocjena spremljena',
    feedbackSuccessDesc: 'Vaša ocjena modula je poslana u PocketBase.',
    feedbackErrorTitle: 'Spremanje nije uspjelo',
    feedbackErrorDesc: 'PocketBase trenutno nije dostupan. Pokušajte ponovo kasnije.',
  },
};
