import type { DemoModuleId, Language, ServiceOptionId } from '../types';

export interface LanguageOption {
  code: Language;
  short: string;
  nativeName: string;
  intlLocale: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'de', short: 'DE', nativeName: 'Deutsch', intlLocale: 'de-DE' },
  { code: 'en', short: 'EN', nativeName: 'English', intlLocale: 'en-US' },
  { code: 'hr', short: 'HR', nativeName: 'Hrvatski', intlLocale: 'hr-HR' },
  { code: 'ru', short: 'RU', nativeName: 'Русский', intlLocale: 'ru-RU' },
  { code: 'tr', short: 'TR', nativeName: 'Türkçe', intlLocale: 'tr-TR' },
  { code: 'pl', short: 'PL', nativeName: 'Polski', intlLocale: 'pl-PL' },
  { code: 'sq', short: 'SQ', nativeName: 'Shqip', intlLocale: 'sq-AL' },
];

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
    openInTelegram: string;
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
    openTelegram: string;
    projects: Array<{
      id: 'hausmeister' | 'nataly_beauty' | 'baumeister' | 'vision_tg' | 'kraftbruder';
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
