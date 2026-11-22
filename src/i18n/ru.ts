import type { Translations } from './types';

export const ru: Translations = {
  nav: {
    playground: 'Live Sandbox',
    n8n: 'n8n & IMAP',
    roi: 'ROI Калькулятор',
    analysis: 'Анализ',
    cta: 'Запросить проект',
  },
  hero: {
    kicker: 'Интерактивная B2B-песочница · demo.vision-it-systems.de',
    headline: 'Тестируйте ИИ-автоматизацию и ПО в реальном времени.',
    subheadline:
      'Никаких пустых презентаций: протестируйте наших 24/7 ИИ-агентов поддержки, автоматизированные n8n IMAP-цепочки, бизнес-ботов в Telegram и ROI-калькулятор прямо в браузере.',
    primaryCta: 'Бесплатный анализ',
    secondaryCta: 'Запустить Sandbox',
    locationProof: 'Разработка и хостинг в Германии по стандартам GDPR (Docker & Hetzner)',
    metrics: [
      { value: '1,4 с', label: 'Обработка писем', context: 'n8n + LLM IMAP-конвейер' },
      { value: '70 %', label: 'Меньше рутины', context: 'Замеры за 12 месяцев' },
      { value: '24/7', label: 'Квалификация лидов', context: 'Chatbox, Vapi & LiveKit' },
      { value: '100 %', label: 'Немецкий хостинг', context: 'Docker-контейнеры на Hetzner' },
    ],
  },
  playground: {
    sectionTitle: 'Live Automation & AI Sandbox',
    sectionSubtitle:
      'Выберите один из четырех рабочих сценариев и протестируйте наши модули автоматизации напрямую.',
    tabs: {
      chatbot: {
        label: '01. ИИ-чатбот и голос',
        shortDesc: 'Chatbox, Vapi & LiveKit агент',
      },
      n8n: {
        label: '02. n8n & IMAP движок',
        shortDesc: 'Сортировка писем и CRM-синк',
      },
      telegram: {
        label: '03. Telegram Бизнес-бот',
        shortDesc: 'Заказы, сметы и голос в задачу',
      },
      apps_roi: {
        label: '04. Приложения, Docker и ROI',
        shortDesc: 'FlutterFlow, Hetzner и расчёт',
      },
    },
  },
  chatbot: {
    modeText: 'Текстовый чат',
    modeVoice: 'Голосовой агент (Vapi / LiveKit)',
    agentName: 'ИИ-консультант Vision',
    agentRole: 'Квалификация лидов и запись',
    welcomeMsg:
      'Здравствуйте! Я цифровой ассистент Vision IT Systems. Задайте вопрос об автоматизации n8n, Telegram-ботах, разработке приложений или выберите слот для консультации.',
    inputPlaceholder: 'Введите сообщение, напр.: "Как автоматизировать счета?"',
    send: 'Отправить',
    reset: 'Сброс',
    quickPromptsLabel: 'Быстрые тестовые запросы:',
    quickPrompts: [
      'Как работает n8n?',
      'Сколько стоит Telegram-бот?',
      'Назначить встречу',
      'Как устроен GDPR-хостинг?',
    ],
    crmPanelTitle: 'Извлеченные CRM-данные (Live)',
    crmEmpty: 'Задайте вопрос или выберите подсказку, чтобы увидеть автоматическую квалификацию лида.',
    crmFields: {
      intent: 'Определенная цель',
      companySize: 'Область фокуса',
      recommendedStack: 'Рекомендуемый стек',
      qualification: 'Статус лида',
    },
    bookSlotTitle: 'Свободные слоты (15 мин. видеозвонок)',
    slots: ['Завтра, 10:00 CET', 'Завтра, 14:30 CET', 'Четверг, 11:00 CET'],
    bookSlotBtn: 'Выбрать слот',
    transferToForm: 'Завершить заявку с этим слотом',
    voiceTitle: 'Симуляция голосового агента (Vapi / LiveKit)',
    voiceSubtitle:
      'Прослушайте пример входящего B2B-звонка с автоматической записью на встречу и задержкой менее 600 мс.',
    voiceStart: 'Запустить звонок',
    voiceStop: 'Завершить звонок',
    voiceRunning: 'Активна транскрибация речи',
  },
  n8n: {
    title: 'Симулятор автоматизации почты n8n & IMAP',
    subtitle:
      'Выберите шаблон входящего письма клиента или отредактируйте текст. Запустите процесс для классификации, извлечения JSON и автоответа.',
    presetsLabel: 'Выбрать шаблон письма:',
    senderLabel: 'Отправитель (IMAP From)',
    subjectLabel: 'Тема (Subject)',
    bodyLabel: 'Текст письма',
    runButton: 'Запустить процесс',
    runningButton: 'Выполняется...',
    resetButton: 'Сбросить',
    executionTime: 'Время выполнения',
    nodes: [
      { id: 'imap', title: 'IMAP Trigger', subtitle: 'Мониторинг входящих' },
      { id: 'ai', title: 'AI Classifier', subtitle: 'Извлечение данных' },
      { id: 'crm', title: 'CRM / Google Sheets', subtitle: 'Запись лида и тикета' },
      { id: 'reply', title: 'Auto-Reply', subtitle: 'Черновик / отправка' },
    ],
    jsonOutputTitle: 'Извлеченные JSON-данные',
    autoReplyTitle: 'Сгенерированный автоответ',
    copyJson: 'Копировать JSON',
    copied: 'Скопировано',
    idleHint: 'Нажмите «Запустить процесс», чтобы выполнить цепочку шаг за шагом.',
  },
  telegram: {
    title: 'Превью Telegram Бизнес-бота',
    subtitle:
      'Нажимайте кнопки внутри макета смартфона, чтобы протестировать статус заказа, мгновенный расчет цены или преобразование голоса в задачу.',
    botHandle: '@VisionITsystems_bot',
    botStatus: 'Бот · Активен через Webhook',
    welcomeText:
      'Добро пожаловать в Vision IT Business Bot. Выберите автоматизированный процесс:',
    resetBtn: 'Перезапустить чат',
    openInTelegram: 'Открыть в Telegram',
    inspectorTitle: 'Журнал Webhook и Callback',
    inspectorSubtitle: 'Каждое нажатие в смартфоне отправляет подписанный Telegram webhook вашему n8n/Docker-сервису.',
    inspectorEmpty: 'Нажмите на любую кнопку в макете Telegram, чтобы увидеть payload.',
    architectureTitle: 'Продакшн-архитектура',
    architectureSteps: [
      '1. Telegram Bot API передает зашифрованное событие в Docker-контейнер на Hetzner.',
      '2. Воркер Node.js / n8n проверяет доступ и запрашивает ERP, CRM или Whisper.',
      '3. Структурированный ответ или PDF-смета возвращается быстрее 1 секунды.',
    ],
    buttons: {
      orderStatus: 'Проверить статус заказа',
      instantQuote: 'Быстрый расчет сметы',
      voiceTask: 'Голосовое → Задача',
      backMenu: 'Главное меню',
    },
  },
  appsRoi: {
    showcaseTitle: 'Web, Android и FlutterFlow приложения + GDPR Docker-инфраструктура',
    showcaseSubtitle:
      'Корпоративные приложения на изолированных контейнерах в дата-центрах Германии.',
    cards: [
      {
        index: '01',
        title: 'Веб-порталы и дашборды',
        stack: 'React · TypeScript · PocketBase',
        description:
          'Внутренние операционные системы, клиентские порталы и аналитика в реальном времени с интеграцией в ERP.',
        deliverables: ['Ролевой доступ', 'API и Webhook-синхронизация', 'Адаптивный B2B-интерфейс'],
      },
      {
        index: '02',
        title: 'Android и iOS через FlutterFlow',
        stack: 'FlutterFlow · Dart · Push-уведомления',
        description:
          'Быстрая кроссплатформенная разработка для выездных бригад, логистики, учета времени и клиентов.',
        deliverables: ['Офлайн-синхронизация', 'Камера, QR и PDF-сканер', 'Публикация в Play Store и App Store'],
      },
      {
        index: '03',
        title: 'GDPR Docker-хостинг в Германии',
        stack: 'Docker Compose · Hetzner Cloud · Traefik SSL',
        description:
          'Изолированные серверы в Нюрнберге и Фалькенштайне для n8n, PocketBase, ИИ-прокси и веб-сервисов.',
        deliverables: ['Серверы в Германии', 'Автоматические бэкапы', 'AVV/DPA и полный контроль данных'],
      },
    ],
    liveReference: {
      kicker: 'Живой пример · Работающее приложение клиента',
      title: 'Natali Beauty App',
      description:
        'Интерактивное веб-приложение для салона красоты, записи на процедуры и работы с клиентами.',
      url: 'https://lucent-kashata-59eb70.netlify.app/',
      cta: 'Открыть Natali Beauty App',
    },
    roiTitle: 'Калькулятор ROI и экономии времени',
    roiSubtitle:
      'Рассчитайте на основе размера команды, сколько часов и бюджета в год сэкономит Vision IT Systems.',
    employeesLabel: 'Сотрудников с рутинными задачами',
    hoursLabel: 'Ручной рутины на человека / неделю',
    hourlyRateLabel: 'Внутренняя стоимость часа работы',
    automationRateLabel: 'Степень автоматизации',
    hoursSavedLabel: 'Экономия часов / год',
    moneySavedLabel: 'Годовая экономия',
    paybackLabel: 'Срок окупаемости',
    monthsUnit: 'мес.',
    hoursUnit: 'ч',
    beforeLabel: 'Текущие ручные затраты / год',
    afterLabel: 'Нагрузка после автоматизации',
    applyToAnalysis: 'Перенести расчет в бесплатный анализ',
  },
  mobileShowcase: {
    kicker: 'Мобильный тест · 5 проектов на экране смартфона',
    title: 'Протестируйте приложения и ботов прямо в мобильном экране',
    subtitle:
      'Выберите один из пяти проектов слева, чтобы сразу взаимодействовать с его мобильным интерфейсом внутри смартфона.',
    requestSimilarCta: 'Запросить похожий проект',
    openExternal: 'Открыть на весь экран',
    openTelegram: 'Открыть в Telegram',
    projects: [
      {
        id: 'hausmeister',
        name: 'HausmeisterPro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Dart · PocketBase · Offline Sync',
        shortDesc: 'Приложение эксплуатации (hausmeister.pro.vision-it-systems.de) · Вход: demo@vision-it.de / 12345678',
        fullDesc:
          'Мобильное приложение для управляющих компаний и технических служб: чек-листы обходов, показания счетчиков и заявки на ремонт. Чтобы войти и протестировать приложение, введите e-mail «demo@vision-it.de» и пароль «12345678».',
        highlights: [
          'Данные для входа и теста: E-mail demo@vision-it.de · Пароль 12345678',
          'Офлайн-списки задач по жилым и коммерческим объектам',
          'Цифровой учет счетчиков электричества, воды и газа',
          'Мгновенная передача дефектов в управляющую систему',
        ],
      },
      {
        id: 'nataly_beauty',
        name: 'NatalyBeauty App',
        tag: 'Live Embed',
        stack: 'React · Responsive Web App · Netlify Edge',
        shortDesc: 'Встроенное приложение салона красоты: lucent-kashata-59eb70.netlify.app.',
        fullDesc:
          'Работающее веб-приложение салона красоты с каталогом услуг, прайсом и мобильной записью — встроено прямо в экран смартфона.',
        highlights: [
          'Прямая трансляция реального продакшн-сайта',
          'Mobile-First интерфейс для быстрого выбора услуг',
          'Высокая конверсия клиентов с мобильных устройств',
        ],
      },
      {
        id: 'baumeister',
        name: 'Baumeister Pro App',
        tag: 'Live Embed',
        stack: 'FlutterFlow · Android / iOS · Docker API',
        shortDesc: 'Строительное приложение (bauapp.vision-it-systems.de) · Вход: demo@vision-it.de / 12345678',
        fullDesc:
          'Мобильный софт для прорабов и строительных компаний: журнал работ, учет бригад, прогресс по этапам и приемка. Чтобы войти и протестировать приложение, введите e-mail «demo@vision-it.de» и пароль «12345678».',
        highlights: [
          'Данные для входа и теста: E-mail demo@vision-it.de · Пароль 12345678',
          'Ежедневный журнал стройки с учетом персонала и погоды',
          'Контроль готовности каждого этапа работ в процентах',
          'Чек-листы приемки и фиксации замечаний',
        ],
      },
      {
        id: 'vision_tg',
        name: 'Vision Ki Telegram Bot',
        tag: 'Live Bot',
        stack: 'Telegram Bot API · n8n · Whisper ASR · Hetzner DE',
        shortDesc: 'Живой бот t.me/VisionITsystems_bot для смет, голосовых задач и CRM.',
        fullDesc:
          'Автоматизация бизнеса прямо в Telegram: расчет смет с ИИ, расшифровка голосовых заметок в задачи и синхронизация с CRM.',
        highlights: [
          'Интерактивные кнопки и ИИ-ответы на свободный текст',
          'Преобразование голоса в задачи через OpenAI Whisper',
          'Безопасный Webhook-хостинг в Германии (Docker / Hetzner)',
        ],
      },
      {
        id: 'kraftbruder',
        name: 'Kraftbruder Hausmeister App',
        tag: 'Live Embed',
        stack: 'Web & Mobile App · PocketBase · Docker DE',
        shortDesc: 'Клиентское приложение (app.vision-it-systems.de) · Вход: demo@vision-it.de / 12345678',
        fullDesc:
          'Индивидуальное приложение для службы эксплуатации Kraftbruder: планирование выездов, фотофиксация работ и мобильный учёт заявок. Чтобы войти и протестировать приложение, введите e-mail «demo@vision-it.de» и пароль «12345678».',
        highlights: [
          'Данные для входа и теста: E-mail demo@vision-it.de · Пароль 12345678',
          'Прямое встраивание рабочего URL app.vision-it-systems.de',
          'Учёт объектов, маршрутов обхода и цифровых актов работ',
        ],
      },
    ],
  },
  feedback: {
    prompt: 'Насколько полезен этот демо-модуль?',
    placeholder: 'Необязательный комментарий (например, ваш кейс или интеграция)...',
    submit: 'Отправить оценку',
    submitting: 'Сохранение...',
    thanks: 'Спасибо за ваш отзыв!',
  },
  lead: {
    sectionTitle: 'Запросить бесплатный первичный анализ',
    sectionSubtitle:
      'В течение 24 часов вы получите конкретную рекомендацию по архитектуре, оценку сроков и план соответствия GDPR.',
    modalTitle: 'Заказать бесплатный анализ',
    modalSubtitle: 'Кратко опишите вашу задачу — мы ответим в течение 24 рабочих часов.',
    nameLabel: 'Имя и фамилия *',
    namePlaceholder: 'Алексей Вебер',
    emailLabel: 'Рабочий E-mail *',
    emailPlaceholder: 'a.weber@company.de',
    companyLabel: 'Компания *',
    companyPlaceholder: 'Example GmbH',
    servicesLabel: 'Интересующие модули *',
    notesLabel: 'Описание процесса / цели (необязательно)',
    notesPlaceholder: 'Например: автоматический разбор входящих заявок с почты в CRM и уведомление в Telegram...',
    submitBtn: 'Запросить анализ',
    submittingBtn: 'Отправка заявки...',
    privacyNote: 'Передача шифруется по TLS. Данные обрабатываются строго по GDPR.',
    validationError: 'Пожалуйста, заполните имя, e-mail и название компании.',
    emailError: 'Пожалуйста, введите корректный рабочий e-mail.',
    servicesError: 'Пожалуйста, выберите хотя бы один модуль.',
    serviceOptions: {
      n8n_automation: 'n8n Автоматизация',
      telegram_bot: 'Telegram Бот',
      web_android_app: 'Web / Android App',
      ai_chatbot: 'ИИ-Чатбот / Голос',
      docker_hosting: 'Docker Хостинг (DE)',
    },
    successTitle: 'Заявка успешно сохранена',
    successDesc: 'Спасибо! Ваша заявка сохранена в PocketBase. Мы свяжемся с вами в течение 24 часов.',
    unreachableTitle: 'Сервер PocketBase временно недоступен',
    unreachableDesc:
      'Демо-сервер pb.demo.vision-it-systems.de сейчас не отвечает. Вы можете отправить заявку напрямую по электронной почте.',
    mailtoFallback: 'Открыть письмо на kontakt@vision-it-systems.de',
  },
  footer: {
    tagline: 'ИТ-архитектура, ИИ-агенты и автоматизация процессов для B2B-компаний.',
    gdprBadge: '100% соответствие GDPR · Хостинг в Германии (Docker & Hetzner)',
    contactLabel: 'Прямой контакт',
    impressum: 'Выходные данные (Impressum)',
    privacy: 'Политика конфиденциальности (GDPR)',
    rights: 'Все права защищены.',
  },
  toasts: {
    feedbackSuccessTitle: 'Отзыв сохранен',
    feedbackSuccessDesc: 'Ваша оценка отправлена в PocketBase.',
    feedbackErrorTitle: 'Ошибка сохранения',
    feedbackErrorDesc: 'Сервер PocketBase сейчас недоступен. Попробуйте позже.',
  },
};
