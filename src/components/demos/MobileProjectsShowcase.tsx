import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  CheckCheck,
  ClipboardCheck,
  Copy,
  ExternalLink,
  Gauge,
  Hammer,
  HardHat,
  KeyRound,
  MessageCircle,
  Mic,
  Plus,
  RefreshCw,
  Send,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { useState } from 'react';
import type { Translations } from '../../i18n/translations';
import type { Language, LeadPrefill, ServiceOptionId } from '../../types';

export type MobileProjectId =
  | 'hausmeister'
  | 'nataly_beauty'
  | 'baumeister'
  | 'vision_tg'
  | 'kraftbruder';

interface MobileProjectsShowcaseProps {
  lang: Language;
  t: Translations['mobileShowcase'];
  onApplyToLeadModal: (prefill: LeadPrefill) => void;
}

const PROJECT_SERVICES: Record<MobileProjectId, ServiceOptionId[]> = {
  hausmeister: ['web_android_app', 'docker_hosting'],
  nataly_beauty: ['web_android_app', 'ai_chatbot'],
  baumeister: ['web_android_app', 'n8n_automation', 'docker_hosting'],
  vision_tg: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
  kraftbruder: ['web_android_app', 'n8n_automation', 'docker_hosting'],
};

interface ShowcaseUiCopy {
  interestedNote: string;
  tgInit: string;
  tgCustomReply: (text: string) => string;
  hmTasks: [string, string, string];
  hmTodayTasks: string;
  hmLogMeter: string;
  hmSaveReading: string;
  hmReportDefect: string;
  hmDescPlaceholder: string;
  hmSubmitTicket: string;
  hmStatusNew: string;
  hmStatusOpen: string;
  hmNavTasks: string;
  hmNavMeters: string;
  hmNavDefects: string;
  bmLogs: [string, string];
  bmTrades: [string, string, string, string];
  bmChecks: [string, string, string];
  bmSiteLine: string;
  bmCrewLabel: string;
  bmNotePlaceholder: string;
  bmWorkersUnit: string;
  bmProgressLabel: string;
  bmInspectLabel: string;
  bmPassed: string;
  bmPending: string;
  bmNavDiary: string;
  bmNavTrades: string;
  bmNavInspect: string;
  tgQuoteBtn: string;
  tgQuoteReply: string;
  tgVoiceBtn: string;
  tgVoiceReply: string;
  tgMsgPlaceholder: string;
}

const SHOWCASE_UI: Record<Language, ShowcaseUiCopy> = {
  de: {
    interestedNote: 'Interesse an Projekt-Referenz',
    tgInit:
      'Hallo! Ich bin der Vision KI Telegram Bot. Tippen Sie auf eine Schnellaktion oder schreiben Sie mir direkt.',
    tgCustomReply: (text) =>
      `KI-Analyse abgeschlossen:\n"${text}" wurde klassifiziert und als Workflow-Vorgang #VIS-209 im CRM vorgemerkt.`,
    hmTasks: [
      'Heizungsdruck Keller B prüfen',
      'LED-Strahler Treppenhaus EG',
      'Rauchwarnmelder Wartung OG 3',
    ],
    hmTodayTasks: 'Heutige Rundgang-Aufgaben',
    hmLogMeter: 'Zählerstand erfassen',
    hmSaveReading: 'Zählerstand speichern',
    hmReportDefect: 'Mängelmeldung erfassen',
    hmDescPlaceholder: 'Kurzbeschreibung...',
    hmSubmitTicket: 'Ticket an Verwaltung senden',
    hmStatusNew: 'Neu',
    hmStatusOpen: 'Offen',
    hmNavTasks: 'Aufträge',
    hmNavMeters: 'Zähler',
    hmNavDefects: 'Mängel',
    bmLogs: [
      'Rohbau OG 2: Deckenbewehrung abgenommen',
      'TGA: Steigleitungen Schacht West verlegt',
    ],
    bmTrades: [
      'Erdarbeiten & Fundament',
      'Rohbau & Mauerwerk',
      'Fenster & Fassade',
      'Heizung / Lüftung / Elektro',
    ],
    bmChecks: [
      'Brandschutztüren T30 EG',
      'Estrich Restfeuchte < 2,0 %',
      'Absturzsicherung Balkon OG 2',
    ],
    bmSiteLine: 'Baustelle: Quartier Nord · KW 47',
    bmCrewLabel: 'Fachkräfte vor Ort:',
    bmNotePlaceholder: 'Bautagebuch-Eintrag...',
    bmWorkersUnit: 'Personen',
    bmProgressLabel: 'Baufortschritt nach Gewerk',
    bmInspectLabel: 'Abnahme-Checkliste',
    bmPassed: 'Freigegeben',
    bmPending: 'Prüfen',
    bmNavDiary: 'Bautagebuch',
    bmNavTrades: 'Gewerke',
    bmNavInspect: 'Abnahme',
    tgQuoteBtn: 'KI-Angebot generieren',
    tgQuoteReply:
      'Sofort-Kalkulation #ANG-741 erstellt:\n· Paket: n8n + Telegram Bot\n· Lieferzeit: 10 Werktage\n· Hosting: Hetzner DE (DSGVO)',
    tgVoiceBtn: 'Sprachnotiz → Aufgabe',
    tgVoiceReply:
      'Whisper Transkription (0:05):\n"Rechnung 842 für Nordmetall freigeben."\n→ Aufgabe in PocketBase & Jira angelegt.',
    tgMsgPlaceholder: 'Nachricht an Bot...',
  },
  en: {
    interestedNote: 'Interested in reference app',
    tgInit:
      'Hello! I am the Vision AI Telegram Bot. Tap a quick action below or send me a message.',
    tgCustomReply: (text) =>
      `AI analysis completed:\n"${text}" was classified and logged as workflow item #VIS-209 in CRM.`,
    hmTasks: [
      'Check boiler pressure Basement B',
      'Replace hallway LED ground floor',
      'Smoke detector check 3rd floor',
    ],
    hmTodayTasks: 'Today’s Facility Tasks',
    hmLogMeter: 'Log Meter Reading',
    hmSaveReading: 'Save Reading',
    hmReportDefect: 'Report Property Defect',
    hmDescPlaceholder: 'Short description...',
    hmSubmitTicket: 'Submit Ticket',
    hmStatusNew: 'New',
    hmStatusOpen: 'Open',
    hmNavTasks: 'Tasks',
    hmNavMeters: 'Meters',
    hmNavDefects: 'Defects',
    bmLogs: [
      '2nd floor shell: slab rebar approved',
      'MEP: West shaft risers installed',
    ],
    bmTrades: [
      'Earthworks & Foundation',
      'Structural Shell',
      'Windows & Facade',
      'HVAC & Electrical',
    ],
    bmChecks: [
      'Fire doors T30 ground floor',
      'Screed moisture < 2.0%',
      'Balcony safety rail 2nd floor',
    ],
    bmSiteLine: 'Site: North Quarter · W47',
    bmCrewLabel: 'Crew on site:',
    bmNotePlaceholder: 'Daily site note...',
    bmWorkersUnit: 'workers',
    bmProgressLabel: 'Progress by Trade',
    bmInspectLabel: 'Site Inspection Checklist',
    bmPassed: 'Passed',
    bmPending: 'Pending',
    bmNavDiary: 'Site Diary',
    bmNavTrades: 'Trades',
    bmNavInspect: 'Inspect',
    tgQuoteBtn: 'Generate AI Quote',
    tgQuoteReply:
      'Instant Quote #ANG-741 created:\n· Package: n8n + Telegram Bot\n· Delivery: 10 business days\n· Hosting: Hetzner DE (GDPR)',
    tgVoiceBtn: 'Voice Note → Task',
    tgVoiceReply:
      'Whisper Transcript (0:05):\n"Approve invoice 842 for Nordmetall."\n→ Task created in PocketBase & Jira.',
    tgMsgPlaceholder: 'Message bot...',
  },
  hr: {
    interestedNote: 'Interes za referentnu aplikaciju',
    tgInit:
      'Pozdrav! Ja sam Vision AI Telegram Bot. Dodirnite brzu radnju ili mi pošaljite poruku.',
    tgCustomReply: (text) =>
      `AI analiza dovršena:\n"${text}" je klasificirano i zabilježeno kao stavka #VIS-209 u CRM-u.`,
    hmTasks: [
      'Provjeri tlak kotlovnice Podrum B',
      'Zamijeni LED svjetlo stubište prizemlje',
      'Servis detektora dima 3. kat',
    ],
    hmTodayTasks: 'Današnji zadaci obilaska',
    hmLogMeter: 'Unesi očitanje brojila',
    hmSaveReading: 'Spremi očitanje',
    hmReportDefect: 'Prijavi kvar na objektu',
    hmDescPlaceholder: 'Kratki opis...',
    hmSubmitTicket: 'Pošalji prijavu upravi',
    hmStatusNew: 'Novo',
    hmStatusOpen: 'Otvoreno',
    hmNavTasks: 'Zadaci',
    hmNavMeters: 'Brojila',
    hmNavDefects: 'Kvarovi',
    bmLogs: [
      'Roh-bau 2. kat: armatura ploče odobrena',
      'Instalacije: usponi zapadnog okna postavljeni',
    ],
    bmTrades: [
      'Zemljani radovi i temelji',
      'Konstrukcija i zidanje',
      'Prozori i fasada',
      'Grijanje / Ventilacija / Struja',
    ],
    bmChecks: [
      'Protupožarna vrata T30 prizemlje',
      'Vlaga estriha < 2,0 %',
      'Zaštitna ograda balkona 2. kat',
    ],
    bmSiteLine: 'Gradilište: Kvart Sjever · Tj. 47',
    bmCrewLabel: 'Radnici na gradilištu:',
    bmNotePlaceholder: 'Unos u građevinski dnevnik...',
    bmWorkersUnit: 'radnika',
    bmProgressLabel: 'Napredak po strukama',
    bmInspectLabel: 'Kontrolna lista preuzimanja',
    bmPassed: 'Odobreno',
    bmPending: 'Provjeriti',
    bmNavDiary: 'Dnevnik',
    bmNavTrades: 'Radovi',
    bmNavInspect: 'Nadzor',
    tgQuoteBtn: 'Generiraj AI ponudu',
    tgQuoteReply:
      'Brza ponuda #ANG-741 izrađena:\n· Paket: n8n + Telegram Bot\n· Isporuka: 10 radnih dana\n· Hosting: Hetzner DE (GDPR)',
    tgVoiceBtn: 'Glasovna bilješka → Zadatak',
    tgVoiceReply:
      'Whisper transkripcija (0:05):\n"Odobriti račun 842 za Nordmetall."\n→ Zadatak kreiran u PocketBase i Jira.',
    tgMsgPlaceholder: 'Poruka botu...',
  },
  ru: {
    interestedNote: 'Интерес к референсному приложению',
    tgInit:
      'Здравствуйте! Я Vision AI Telegram Bot. Нажмите на быстрое действие или напишите мне сообщение.',
    tgCustomReply: (text) =>
      `ИИ-анализ завершён:\n"${text}" классифицировано и сохранено как процесс #VIS-209 в CRM.`,
    hmTasks: [
      'Проверить давление котла (Подвал B)',
      'Заменить LED-светильник на 1 этаже',
      'Проверка датчиков дыма (3 этаж)',
    ],
    hmTodayTasks: 'Задачи обхода на сегодня',
    hmLogMeter: 'Внести показания счётчика',
    hmSaveReading: 'Сохранить показания',
    hmReportDefect: 'Зарегистрировать дефект',
    hmDescPlaceholder: 'Краткое описание...',
    hmSubmitTicket: 'Отправить заявку в УК',
    hmStatusNew: 'Новая',
    hmStatusOpen: 'Открыто',
    hmNavTasks: 'Задачи',
    hmNavMeters: 'Счётчики',
    hmNavDefects: 'Дефекты',
    bmLogs: [
      'Монолит 2 этажа: армирование плиты принято',
      'ОВиК: стояки западной шахты смонтированы',
    ],
    bmTrades: [
      'Земляные работы и фундамент',
      'Монолит и кладка',
      'Окна и фасад',
      'ОВиК и электрика',
    ],
    bmChecks: [
      'Противопожарные двери T30 (1 эт.)',
      'Влажность стяжки < 2,0 %',
      'Ограждение балкона 2 этажа',
    ],
    bmSiteLine: 'Объект: Квартал Север · Нед. 47',
    bmCrewLabel: 'Специалистов на объекте:',
    bmNotePlaceholder: 'Запись в журнал работ...',
    bmWorkersUnit: 'чел.',
    bmProgressLabel: 'Прогресс по этапам',
    bmInspectLabel: 'Чек-лист приёмки',
    bmPassed: 'Принято',
    bmPending: 'Проверить',
    bmNavDiary: 'Журнал',
    bmNavTrades: 'Этапы',
    bmNavInspect: 'Приёмка',
    tgQuoteBtn: 'Сформировать AI-КП',
    tgQuoteReply:
      'Мгновенный расчёт #ANG-741 готов:\n· Пакет: n8n + Telegram Bot\n· Срок: 10 рабочих дней\n· Хостинг: Hetzner DE (GDPR)',
    tgVoiceBtn: 'Голосовая → Задача',
    tgVoiceReply:
      'Расшифровка Whisper (0:05):\n"Согласовать счёт 842 для Nordmetall."\n→ Задача создана в PocketBase и Jira.',
    tgMsgPlaceholder: 'Написать боту...',
  },
  tr: {
    interestedNote: 'Referans uygulamaya ilgi',
    tgInit:
      'Merhaba! Ben Vision AI Telegram Botu. Aşağıdaki hızlı eyleme dokunun veya doğrudan mesaj yazın.',
    tgCustomReply: (text) =>
      `Yapay zeka analizi tamamlandı:\n"${text}" sınıflandırıldı ve CRM’de #VIS-209 iş akışı kaydı olarak açıldı.`,
    hmTasks: [
      'Bodrum B kazan basıncını kontrol et',
      'Zemin kat merdiven LED değişimi',
      '3. kat duman dedektörü bakımı',
    ],
    hmTodayTasks: 'Bugünkü Tesis Görevleri',
    hmLogMeter: 'Sayaç Okuması Gir',
    hmSaveReading: 'Okumayı Kaydet',
    hmReportDefect: 'Arıza Bildirimi Oluştur',
    hmDescPlaceholder: 'Kısa açıklama...',
    hmSubmitTicket: 'Yönetime Bildir',
    hmStatusNew: 'Yeni',
    hmStatusOpen: 'Açık',
    hmNavTasks: 'Görevler',
    hmNavMeters: 'Sayaçlar',
    hmNavDefects: 'Arızalar',
    bmLogs: [
      '2. kat kaba inşaat: döşeme donatısı onaylandı',
      'Mekanik: Batı şaft dikey hatları döşendi',
    ],
    bmTrades: [
      'Hafriyat ve Temel',
      'Kaba Yapı ve Duvar',
      'Pencere ve Cephe',
      'HVAC ve Elektrik',
    ],
    bmChecks: [
      'T30 yangın kapıları zemin kat',
      'Şap nem oranı < %2,0',
      '2. kat balkon korkuluk güvenliği',
    ],
    bmSiteLine: 'Şantiye: Kuzey Bölgesi · H47',
    bmCrewLabel: 'Sahadaki ekip:',
    bmNotePlaceholder: 'Günlük şantiye notu...',
    bmWorkersUnit: 'kişi',
    bmProgressLabel: 'İş Kalemine Göre İlerleme',
    bmInspectLabel: 'Teslim Kontrol Listesi',
    bmPassed: 'Onaylandı',
    bmPending: 'Kontrol Et',
    bmNavDiary: 'Günlük',
    bmNavTrades: 'İşler',
    bmNavInspect: 'Denetim',
    tgQuoteBtn: 'AI Teklifi Oluştur',
    tgQuoteReply:
      'Anlık Teklif #ANG-741 oluşturuldu:\n· Paket: n8n + Telegram Bot\n· Teslimat: 10 iş günü\n· Barındırma: Hetzner DE (GDPR)',
    tgVoiceBtn: 'Sesli Not → Görev',
    tgVoiceReply:
      'Whisper Dökümü (0:05):\n"Nordmetall için 842 numaralı faturayı onayla."\n→ PocketBase ve Jira’da görev açıldı.',
    tgMsgPlaceholder: 'Bota mesaj yaz...',
  },
  pl: {
    interestedNote: 'Zainteresowanie aplikacją referencyjną',
    tgInit:
      'Cześć! Jestem Vision AI Telegram Bot. Wybierz szybką akcję poniżej lub napisz bezpośrednio.',
    tgCustomReply: (text) =>
      `Analiza AI zakończona:\n"${text}" zostało sklasyfikowane i zapisane jako proces #VIS-209 w CRM.`,
    hmTasks: [
      'Sprawdź ciśnienie kotła Piwnica B',
      'Wymień lampę LED na parterze',
      'Przegląd czujników dymu 3. piętro',
    ],
    hmTodayTasks: 'Dzisiejsze zadania obchodu',
    hmLogMeter: 'Zapisz stan licznika',
    hmSaveReading: 'Zapisz odczyt',
    hmReportDefect: 'Zgłoś usterkę obiektu',
    hmDescPlaceholder: 'Krótki opis...',
    hmSubmitTicket: 'Wyślij zgłoszenie',
    hmStatusNew: 'Nowe',
    hmStatusOpen: 'Otwarte',
    hmNavTasks: 'Zadania',
    hmNavMeters: 'Liczniki',
    hmNavDefects: 'Usterki',
    bmLogs: [
      'Stan surowy 2. piętro: zbrojenie stropu odebrane',
      'Instalacje: piony szybu zachodniego ułożone',
    ],
    bmTrades: [
      'Roboty ziemne i fundamenty',
      'Konstrukcja i mury',
      'Okna i elewacja',
      'HVAC i elektryka',
    ],
    bmChecks: [
      'Drzwi przeciwpożarowe T30 parter',
      'Wilgotność jastrychu < 2,0%',
      'Balustrady balkonowe 2. piętro',
    ],
    bmSiteLine: 'Budowa: Kwartał Północ · Tydz. 47',
    bmCrewLabel: 'Ekipa na budowie:',
    bmNotePlaceholder: 'Wpis do dziennika budowy...',
    bmWorkersUnit: 'osób',
    bmProgressLabel: 'Postęp według branż',
    bmInspectLabel: 'Lista odbiorowa',
    bmPassed: 'Zatwierdzone',
    bmPending: 'Sprawdź',
    bmNavDiary: 'Dziennik',
    bmNavTrades: 'Branże',
    bmNavInspect: 'Odbiór',
    tgQuoteBtn: 'Generuj wycenę AI',
    tgQuoteReply:
      'Szybka wycena #ANG-741 gotowa:\n· Pakiet: n8n + Telegram Bot\n· Realizacja: 10 dni roboczych\n· Hosting: Hetzner DE (RODO)',
    tgVoiceBtn: 'Notatka głosowa → Zadanie',
    tgVoiceReply:
      'Transkrypcja Whisper (0:05):\n"Zatwierdzić fakturę 842 dla Nordmetall."\n→ Zadanie utworzone w PocketBase i Jira.',
    tgMsgPlaceholder: 'Napisz do bota...',
  },
  sq: {
    interestedNote: 'Interes për aplikacionin referues',
    tgInit:
      'Përshëndetje! Unë jam Vision AI Telegram Bot. Klikoni një veprim të shpejtë ose më shkruani direkt.',
    tgCustomReply: (text) =>
      `Analiza AI përfundoi:\n"${text}" u klasifikua dhe u ruajt si proces #VIS-209 në CRM.`,
    hmTasks: [
      'Kontrollo presionin e kaldajës Bodrumi B',
      'Zëvendëso ndriçimin LED në katin përdhes',
      'Mirëmbajtja e detektorit të tymit Kati 3',
    ],
    hmTodayTasks: 'Detyrat e sotme të inspektimit',
    hmLogMeter: 'Regjistro matësin',
    hmSaveReading: 'Ruaj leximin',
    hmReportDefect: 'Raporto defektin e objektit',
    hmDescPlaceholder: 'Përshkrim i shkurtër...',
    hmSubmitTicket: 'Dërgo te administrata',
    hmStatusNew: 'E re',
    hmStatusOpen: 'Hapur',
    hmNavTasks: 'Detyrat',
    hmNavMeters: 'Matësit',
    hmNavDefects: 'Defektet',
    bmLogs: [
      'Karabina Kati 2: armatura e pllakës u miratua',
      'Instalimet: kolonat e pusit perëndimor u vendosën',
    ],
    bmTrades: [
      'Punime dheu & Themele',
      'Struktura & Muratura',
      'Dritare & Fasadë',
      'Ngrohje / Ventilim / Elektrike',
    ],
    bmChecks: [
      'Dyer kundër zjarrit T30 kati përdhes',
      'Lagështia e shatrit < 2,0 %',
      'Kangjellat e sigurisë ballkoni kati 2',
    ],
    bmSiteLine: 'Kantieri: Kvartieri Veri · Java 47',
    bmCrewLabel: 'Ekipi në terren:',
    bmNotePlaceholder: 'Shënim në ditarin e kantierit...',
    bmWorkersUnit: 'punëtorë',
    bmProgressLabel: 'Ecuria sipas fazave',
    bmInspectLabel: 'Lista e pranimit teknik',
    bmPassed: 'Miratuar',
    bmPending: 'Kontrollo',
    bmNavDiary: 'Ditari',
    bmNavTrades: 'Punimet',
    bmNavInspect: 'Inspektimi',
    tgQuoteBtn: 'Gjenero Ofertë AI',
    tgQuoteReply:
      'Oferta e shpejtë #ANG-741 u krijua:\n· Paketa: n8n + Telegram Bot\n· Dorëzimi: 10 ditë pune\n· Hostimi: Hetzner DE (GDPR)',
    tgVoiceBtn: 'Shënim zanor → Detyrë',
    tgVoiceReply:
      'Transkriptimi Whisper (0:05):\n"Mirato faturën 842 për Nordmetall."\n→ Detyra u krijua në PocketBase & Jira.',
    tgMsgPlaceholder: 'Shkruaj botit...',
  },
};

const KRAFTBRUDER_LOGIN_COPY: Record<
  Language,
  {
    title: string;
    emailLabel: string;
    passwordLabel: string;
    copied: string;
    hintPrefix: string;
  }
> = {
  de: {
    title: 'Demo-Zugangsdaten zum Einloggen & Testen',
    emailLabel: 'E-Mail',
    passwordLabel: 'Passwort',
    copied: 'Kopiert',
    hintPrefix: 'Test-Login',
  },
  en: {
    title: 'Demo Login Credentials to Sign In & Test',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    copied: 'Copied',
    hintPrefix: 'Test login',
  },
  hr: {
    title: 'Demo podaci za prijavu i testiranje',
    emailLabel: 'E-pošta',
    passwordLabel: 'Lozinka',
    copied: 'Kopirano',
    hintPrefix: 'Test prijava',
  },
  ru: {
    title: 'Демо-данные для входа и тестирования',
    emailLabel: 'E-mail',
    passwordLabel: 'Пароль',
    copied: 'Скопировано',
    hintPrefix: 'Тест-вход',
  },
  tr: {
    title: 'Giriş Yapmak ve Test Etmek için Demo Bilgileri',
    emailLabel: 'E-posta',
    passwordLabel: 'Şifre',
    copied: 'Kopyalandı',
    hintPrefix: 'Test girişi',
  },
  pl: {
    title: 'Dane logowania demo do testowania aplikacji',
    emailLabel: 'E-mail',
    passwordLabel: 'Hasło',
    copied: 'Skopiowano',
    hintPrefix: 'Login testowy',
  },
  sq: {
    title: 'Të dhënat demo për hyrje dhe testim',
    emailLabel: 'Email',
    passwordLabel: 'Fjalëkalimi',
    copied: 'U kopjua',
    hintPrefix: 'Hyrje test',
  },
};

export function MobileProjectsShowcase({
  lang,
  t,
  onApplyToLeadModal,
}: MobileProjectsShowcaseProps) {
  const ui = SHOWCASE_UI[lang];
  const [selectedProject, setSelectedProject] =
    useState<MobileProjectId>('hausmeister');

  // 1. HausmeisterPro App state
  const [hmTab, setHmTab] = useState<'tasks' | 'meters' | 'defects'>('tasks');
  const [hmProperty, setHmProperty] = useState<'Wohnpark Mitte' | 'Gewerbepark Süd'>(
    'Wohnpark Mitte'
  );
  const [hmTaskDone, setHmTaskDone] = useState<Record<string, boolean>>({
    t1: true,
    t2: false,
    t3: false,
  });
  const hmTasks = [
    { id: 't1', title: ui.hmTasks[0], unit: 'Haus 2', done: !!hmTaskDone.t1 },
    { id: 't2', title: ui.hmTasks[1], unit: 'Haus 1', done: !!hmTaskDone.t2 },
    { id: 't3', title: ui.hmTasks[2], unit: 'Haus 2', done: !!hmTaskDone.t3 },
  ];
  const [meterType, setMeterType] = useState<'Strom' | 'Wasser' | 'Gas'>('Strom');
  const [meterValue, setMeterValue] = useState('48219');
  const [meterLogs, setMeterLogs] = useState([
    { type: 'Strom', value: '48190 kWh', time: '08:15' },
  ]);
  const [defectCategory, setDefectCategory] = useState('Sanitär');
  const [defectNote, setDefectNote] = useState('');
  const [defectList, setDefectList] = useState([
    { id: 'd1', category: 'Schloss', note: 'Hoftor Zylinder klemmt', status: ui.hmStatusOpen },
  ]);

  // 1b. HausmeisterPro live embed mode & refresh key
  const [hmMode, setHmMode] = useState<'live' | 'interactive'>('live');
  const [hmIframeKey, setHmIframeKey] = useState(0);

  // 2. NatalyBeauty App iframe refresh key
  const [iframeKey, setIframeKey] = useState(0);

  // 3. Baumeister Pro App state
  const [bmMode, setBmMode] = useState<'live' | 'interactive'>('live');
  const [bmIframeKey, setBmIframeKey] = useState(0);
  const [bmTab, setBmTab] = useState<'diary' | 'trades' | 'inspect'>('diary');
  const [bmCrewCount, setBmCrewCount] = useState(9);
  const [bmNoteInput, setBmNoteInput] = useState('');
  const [bmCustomLogs, setBmCustomLogs] = useState<
    Array<{ id: string; time: string; crew: number; text: string }>
  >([]);
  const bmLogs = [
    ...bmCustomLogs,
    { id: 'l1', time: '09:30', crew: 6, text: ui.bmLogs[0] },
    { id: 'l2', time: '11:15', crew: 3, text: ui.bmLogs[1] },
  ];
  const [bmTradePct, setBmTradePct] = useState<Record<string, number>>({
    tr1: 100,
    tr2: 80,
    tr3: 45,
    tr4: 30,
  });
  const bmTrades = [
    { id: 'tr1', name: ui.bmTrades[0], pct: bmTradePct.tr1 },
    { id: 'tr2', name: ui.bmTrades[1], pct: bmTradePct.tr2 },
    { id: 'tr3', name: ui.bmTrades[2], pct: bmTradePct.tr3 },
    { id: 'tr4', name: ui.bmTrades[3], pct: bmTradePct.tr4 },
  ];
  const [bmCheckOk, setBmCheckOk] = useState<Record<string, boolean>>({
    c1: true,
    c2: false,
    c3: true,
  });
  const bmChecks = [
    { id: 'c1', label: ui.bmChecks[0], ok: bmCheckOk.c1 },
    { id: 'c2', label: ui.bmChecks[1], ok: bmCheckOk.c2 },
    { id: 'c3', label: ui.bmChecks[2], ok: bmCheckOk.c3 },
  ];

  // 4. Vision Ki Telegram Bot state
  const [tgInput, setTgInput] = useState('');
  const [tgMessages, setTgMessages] = useState<
    Array<{ id: string; sender: 'bot' | 'user'; text: string; time: string }>
  >([]);

  // 5. Kraftbruder Hausmeister App iframe refresh key & credential copy state
  const [kbIframeKey, setKbIframeKey] = useState(0);
  const [copiedField, setCopiedField] = useState<'email' | 'password' | null>(null);
  const kbLoginCopy = KRAFTBRUDER_LOGIN_COPY[lang];

  const handleCopyCredential = (field: 'email' | 'password', value: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      void navigator.clipboard.writeText(value);
    }
    setCopiedField(field);
    window.setTimeout(() => {
      setCopiedField((prev) => (prev === field ? null : prev));
    }, 1800);
  };

  const renderedTgMessages = [
    { id: 'tg-0', sender: 'bot' as const, time: '10:02', text: ui.tgInit },
    ...tgMessages,
  ];

  const activeProjectMeta = t.projects.find((p) => p.id === selectedProject)!;

  const projectIcons: Record<MobileProjectId, typeof Wrench> = {
    hausmeister: Wrench,
    nataly_beauty: Sparkles,
    baumeister: HardHat,
    vision_tg: Bot,
    kraftbruder: Building2,
  };

  const handleTgAction = (label: string, replyText: string) => {
    const time = new Date().toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setTgMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, sender: 'user', text: label, time },
      {
        id: `b-${Date.now() + 1}`,
        sender: 'bot',
        text: replyText,
        time,
      },
    ]);
  };

  const handleTgSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = tgInput.trim();
    if (!text) return;
    setTgInput('');
    handleTgAction(text, ui.tgCustomReply(text));
  };

  const completedTasks = hmTasks.filter((item) => item.done).length;

  return (
    <div className="mt-10 border-t border-white/[0.08] pt-10">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium text-cyan-300">{t.kicker}</p>
          <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
            {t.title}
          </h3>
          <p className="mt-1.5 max-w-2xl text-sm text-slate-300">{t.subtitle}</p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Left Column: 4 Project Selector + Active Project Spec */}
        <div className="lg:col-span-6 space-y-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {t.projects.map((project, index) => {
              const Icon = projectIcons[project.id];
              const isActive = selectedProject === project.id;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project.id)}
                  className={`flex items-start gap-3.5 rounded-xl border p-4 text-left transition-all cursor-pointer ${
                    isActive
                      ? 'border-cyan-400/60 bg-[#131d2f] shadow-[0_0_24px_rgba(6,182,212,0.12)]'
                      : 'border-white/[0.08] bg-[#0f1623] hover:border-white/20'
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                      isActive
                        ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-300'
                        : 'border-white/[0.08] bg-[#090d16] text-slate-400'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-semibold text-white">
                        0{index + 1}. {project.name}
                      </span>
                      <span className="font-mono text-[11px] text-cyan-300 shrink-0">
                        {project.tag}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {project.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Project Architecture & CTA */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0f1623] p-5">
            <div className="text-xs font-mono text-cyan-300">
              {activeProjectMeta.stack}
            </div>
            <h4 className="mt-1.5 font-display text-base font-semibold text-white">
              {activeProjectMeta.name}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              {activeProjectMeta.fullDesc}
            </p>

            {(selectedProject === 'hausmeister' ||
              selectedProject === 'baumeister' ||
              selectedProject === 'kraftbruder') && (
              <div className="mt-4 rounded-lg border border-cyan-400/30 bg-[#090d16] p-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  <KeyRound className="h-3.5 w-3.5 shrink-0" />
                  <span>{kbLoginCopy.title}</span>
                </div>
                <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="flex items-center justify-between gap-2 rounded-md border border-white/[0.08] bg-[#111827] px-2.5 py-1.5">
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">
                        {kbLoginCopy.emailLabel}
                      </div>
                      <div className="truncate font-mono text-xs font-medium text-white">
                        demo@vision-it.de
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyCredential('email', 'demo@vision-it.de')}
                      aria-label={kbLoginCopy.emailLabel}
                      className="inline-flex shrink-0 items-center gap-1 rounded border border-white/[0.1] bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 cursor-pointer"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-300">{kbLoginCopy.copied}</span>
                        </>
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-2 rounded-md border border-white/[0.08] bg-[#111827] px-2.5 py-1.5">
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">
                        {kbLoginCopy.passwordLabel}
                      </div>
                      <div className="truncate font-mono text-xs font-medium text-white">
                        12345678
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyCredential('password', '12345678')}
                      aria-label={kbLoginCopy.passwordLabel}
                      className="inline-flex shrink-0 items-center gap-1 rounded border border-white/[0.1] bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 cursor-pointer"
                    >
                      {copiedField === 'password' ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-300">{kbLoginCopy.copied}</span>
                        </>
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-xs text-slate-300">
              {activeProjectMeta.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onApplyToLeadModal({
                    services: PROJECT_SERVICES[selectedProject],
                    notes: `${ui.interestedNote}: ${activeProjectMeta.name}`,
                    sourceModule: 'apps_roi',
                  })
                }
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 cursor-pointer"
              >
                <span>{t.requestSimilarCta}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <a
                href={
                  selectedProject === 'hausmeister'
                    ? 'https://hausmeister.pro.vision-it-systems.de/'
                    : selectedProject === 'nataly_beauty'
                    ? 'https://lucent-kashata-59eb70.netlify.app/'
                    : selectedProject === 'baumeister'
                    ? 'https://bauapp.vision-it-systems.de'
                    : selectedProject === 'kraftbruder'
                    ? 'https://app.vision-it-systems.de'
                    : 'https://t.me/VisionITsystems_bot'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.12] px-3.5 py-2 text-xs font-medium text-slate-200 hover:border-cyan-400/50 hover:text-white"
              >
                <span>
                  {selectedProject === 'vision_tg'
                    ? t.openTelegram
                    : t.openExternal}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Mobile Display Bezel */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-[372px] rounded-[2.4rem] border-[4px] border-slate-700/90 bg-[#05080f] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
            {/* Mobile Inner Screen */}
            <div className="flex h-[610px] flex-col overflow-hidden rounded-[1.85rem] border border-white/[0.08] bg-[#0b111d]">
              {/* Mobile Top Status Bar + Dynamic Notch */}
              <div className="flex items-center justify-between bg-[#090d16] px-5 pt-2.5 pb-2 text-[11px] font-medium text-slate-300 select-none">
                <span className="font-mono tabular-nums">09:41</span>
                <div className="h-4 w-20 rounded-full bg-black border border-white/[0.06]" />
                <span className="font-mono text-[10px] text-cyan-300">5G · 98%</span>
              </div>

              {/* 1. HAUSMEISTERPRO APP */}
              {selectedProject === 'hausmeister' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1524]">
                  {/* Mobile Browser / Mode Bar */}
                  <div className="flex items-center justify-between gap-1.5 border-b border-white/[0.08] bg-[#131d31] px-2.5 py-2">
                    <div className="flex-1 truncate rounded-md border border-white/[0.08] bg-[#090d16] px-2 py-1 font-mono text-[10px] text-cyan-300">
                      hausmeister.pro.vision-it-systems.de
                    </div>
                    <div className="flex items-center rounded-md border border-white/[0.08] bg-[#090d16] p-0.5 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setHmMode('live')}
                        className={`rounded px-1.5 py-0.5 font-medium cursor-pointer ${
                          hmMode === 'live' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400'
                        }`}
                      >
                        Live
                      </button>
                      <button
                        type="button"
                        onClick={() => setHmMode('interactive')}
                        className={`rounded px-1.5 py-0.5 font-medium cursor-pointer ${
                          hmMode === 'interactive'
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'text-slate-400'
                        }`}
                      >
                        Demo
                      </button>
                    </div>
                    {hmMode === 'live' && (
                      <button
                        type="button"
                        onClick={() => setHmIframeKey((k) => k + 1)}
                        aria-label="Reload HausmeisterPro App"
                        className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                      </button>
                    )}
                    <a
                      href="https://hausmeister.pro.vision-it-systems.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open HausmeisterPro App in new tab"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {hmMode === 'live' ? (
                    <>
                      {/* Compact Demo Credential Hint Strip */}
                      <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] bg-[#090d16] px-3 py-1.5 text-[10px]">
                        <span className="truncate font-mono text-slate-300">
                          <span className="text-cyan-300">{kbLoginCopy.hintPrefix}:</span>{' '}
                          demo@vision-it.de / 12345678
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyCredential('email', 'demo@vision-it.de')}
                          className="shrink-0 font-medium text-cyan-300 hover:text-cyan-200 cursor-pointer"
                        >
                          {copiedField === 'email' ? kbLoginCopy.copied : 'Copy'}
                        </button>
                      </div>

                      <div className="relative flex-1 bg-white">
                        <iframe
                          key={hmIframeKey}
                          src="https://hausmeister.pro.vision-it-systems.de/"
                          title="HausmeisterPro App Live Mobile Preview"
                          className="h-full w-full border-0"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                  {/* App Top Bar */}
                  <div className="border-b border-white/[0.08] bg-[#131d31] px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-cyan-400" />
                        <span className="font-display text-sm font-bold text-white">
                          HausmeisterPro
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-cyan-300 tabular-nums">
                        {completedTasks}/{hmTasks.length}
                      </span>
                    </div>
                    <select
                      aria-label="Property selector"
                      value={hmProperty}
                      onChange={(e) =>
                        setHmProperty(e.target.value as 'Wohnpark Mitte' | 'Gewerbepark Süd')
                      }
                      className="mt-2 w-full rounded-lg border border-white/[0.1] bg-[#090d16] px-2.5 py-1.5 text-xs text-slate-200 focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="Wohnpark Mitte">Objekt: Wohnpark Mitte (24 WE)</option>
                      <option value="Gewerbepark Süd">Objekt: Gewerbepark Süd (12 Einheiten)</option>
                    </select>
                  </div>

                  {/* App Body */}
                  <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                    {hmTab === 'tasks' && (
                      <>
                        <div className="text-[11px] font-medium text-slate-400">
                          {ui.hmTodayTasks} · {hmProperty}
                        </div>
                        {hmTasks.map((task) => (
                          <button
                            key={task.id}
                            type="button"
                            onClick={() =>
                              setHmTaskDone((prev) => ({
                                ...prev,
                                [task.id]: !prev[task.id],
                              }))
                            }
                            className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-colors cursor-pointer ${
                              task.done
                                ? 'border-emerald-500/30 bg-emerald-500/10'
                                : 'border-white/[0.08] bg-[#141e33] hover:border-cyan-400/40'
                            }`}
                          >
                            <div
                              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                task.done
                                  ? 'border-emerald-400 bg-emerald-400 text-slate-950'
                                  : 'border-slate-500'
                              }`}
                            >
                              {task.done && <Check className="h-3 w-3" />}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div
                                className={`text-xs font-medium ${
                                  task.done ? 'line-through text-slate-400' : 'text-white'
                                }`}
                              >
                                {task.title}
                              </div>
                              <div className="mt-0.5 text-[11px] text-slate-400">
                                {task.unit}
                              </div>
                            </div>
                          </button>
                        ))}
                      </>
                    )}

                    {hmTab === 'meters' && (
                      <div className="space-y-3">
                        <div className="text-[11px] font-medium text-slate-400">
                          {ui.hmLogMeter}
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-[#141e33] p-3 space-y-2.5">
                          <div className="flex gap-1.5">
                            {(['Strom', 'Wasser', 'Gas'] as const).map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setMeterType(type)}
                                className={`flex-1 rounded-md py-1.5 text-xs font-medium cursor-pointer ${
                                  meterType === type
                                    ? 'bg-cyan-500 text-slate-950'
                                    : 'bg-[#090d16] text-slate-300'
                                }`}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                          <input
                            type="number"
                            value={meterValue}
                            onChange={(e) => setMeterValue(e.target.value)}
                            className="w-full rounded-lg border border-white/[0.1] bg-[#090d16] px-3 py-2 font-mono text-sm text-white focus:border-cyan-400 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (!meterValue.trim()) return;
                              const unit =
                                meterType === 'Strom' ? 'kWh' : 'm³';
                              setMeterLogs((prev) => [
                                {
                                  type: meterType,
                                  value: `${meterValue} ${unit}`,
                                  time: new Date().toLocaleTimeString('de-DE', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  }),
                                },
                                ...prev,
                              ]);
                            }}
                            className="w-full rounded-lg bg-cyan-500 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 cursor-pointer"
                          >
                            {ui.hmSaveReading}
                          </button>
                        </div>

                        <div className="space-y-2">
                          {meterLogs.map((log, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-[#090d16] px-3 py-2 text-xs"
                            >
                              <span className="text-slate-300">{log.type}</span>
                              <span className="font-mono text-cyan-300">{log.value}</span>
                              <span className="text-[10px] text-slate-500">{log.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {hmTab === 'defects' && (
                      <div className="space-y-3">
                        <div className="text-[11px] font-medium text-slate-400">
                          {ui.hmReportDefect}
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-[#141e33] p-3 space-y-2.5">
                          <select
                            value={defectCategory}
                            onChange={(e) => setDefectCategory(e.target.value)}
                            className="w-full rounded-lg border border-white/[0.1] bg-[#090d16] px-2.5 py-2 text-xs text-white focus:outline-none"
                          >
                            <option value="Sanitär">Sanitär / Heizung</option>
                            <option value="Elektrik">Elektrik / Licht</option>
                            <option value="Schloss">Türen / Schließanlage</option>
                          </select>
                          <input
                            type="text"
                            value={defectNote}
                            onChange={(e) => setDefectNote(e.target.value)}
                            placeholder={ui.hmDescPlaceholder}
                            className="w-full rounded-lg border border-white/[0.1] bg-[#090d16] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (!defectNote.trim()) return;
                              setDefectList((prev) => [
                                {
                                  id: `d-${Date.now()}`,
                                  category: defectCategory,
                                  note: defectNote.trim(),
                                  status: ui.hmStatusNew,
                                },
                                ...prev,
                              ]);
                              setDefectNote('');
                            }}
                            className="w-full rounded-lg bg-cyan-500 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 cursor-pointer"
                          >
                            {ui.hmSubmitTicket}
                          </button>
                        </div>

                        <div className="space-y-2">
                          {defectList.map((d) => (
                            <div
                              key={d.id}
                              className="rounded-lg border border-white/[0.06] bg-[#090d16] px-3 py-2 text-xs"
                            >
                              <div className="flex justify-between">
                                <span className="font-semibold text-cyan-300">{d.category}</span>
                                <span className="text-[11px] text-amber-300">{d.status}</span>
                              </div>
                              <div className="mt-0.5 text-slate-300">{d.note}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Bottom Navigation */}
                  <div className="grid grid-cols-3 border-t border-white/[0.08] bg-[#131d31] py-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setHmTab('tasks')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        hmTab === 'tasks' ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      <ClipboardCheck className="h-4 w-4" />
                      <span>{ui.hmNavTasks}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHmTab('meters')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        hmTab === 'meters' ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      <Gauge className="h-4 w-4" />
                      <span>{ui.hmNavMeters}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHmTab('defects')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        hmTab === 'defects' ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      <Building2 className="h-4 w-4" />
                      <span>{ui.hmNavDefects}</span>
                    </button>
                  </div>
                    </>
                  )}
                </div>
              )}

              {/* 2. NATALYBEAUTY APP (REAL LIVE IFRAME EMBED) */}
              {selectedProject === 'nataly_beauty' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1524]">
                  {/* Mobile Browser Address Bar */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] bg-[#131d31] px-3 py-2">
                    <div className="flex-1 truncate rounded-md border border-white/[0.08] bg-[#090d16] px-2.5 py-1 font-mono text-[10px] text-cyan-300">
                      lucent-kashata-59eb70.netlify.app
                    </div>
                    <button
                      type="button"
                      onClick={() => setIframeKey((k) => k + 1)}
                      aria-label="Reload NatalyBeauty App"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href="https://lucent-kashata-59eb70.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open NatalyBeauty App in new tab"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Embedded Live App Viewport */}
                  <div className="relative flex-1 bg-white">
                    <iframe
                      key={iframeKey}
                      src="https://lucent-kashata-59eb70.netlify.app/"
                      title="NatalyBeauty App Live Mobile Preview"
                      className="h-full w-full border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                </div>
              )}

              {/* 3. BAUMEISTER PRO APP */}
              {selectedProject === 'baumeister' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1524]">
                  {/* Mobile Browser / Mode Bar */}
                  <div className="flex items-center justify-between gap-1.5 border-b border-white/[0.08] bg-[#131d31] px-2.5 py-2">
                    <div className="flex-1 truncate rounded-md border border-white/[0.08] bg-[#090d16] px-2 py-1 font-mono text-[10px] text-amber-300">
                      bauapp.vision-it-systems.de
                    </div>
                    <div className="flex items-center rounded-md border border-white/[0.08] bg-[#090d16] p-0.5 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setBmMode('live')}
                        className={`rounded px-1.5 py-0.5 font-medium cursor-pointer ${
                          bmMode === 'live' ? 'bg-amber-400/20 text-amber-300' : 'text-slate-400'
                        }`}
                      >
                        Live
                      </button>
                      <button
                        type="button"
                        onClick={() => setBmMode('interactive')}
                        className={`rounded px-1.5 py-0.5 font-medium cursor-pointer ${
                          bmMode === 'interactive'
                            ? 'bg-amber-400/20 text-amber-300'
                            : 'text-slate-400'
                        }`}
                      >
                        Demo
                      </button>
                    </div>
                    {bmMode === 'live' && (
                      <button
                        type="button"
                        onClick={() => setBmIframeKey((k) => k + 1)}
                        aria-label="Reload Baumeister Pro App"
                        className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                      </button>
                    )}
                    <a
                      href="https://bauapp.vision-it-systems.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Baumeister Pro App in new tab"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {bmMode === 'live' ? (
                    <>
                      {/* Compact Demo Credential Hint Strip */}
                      <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] bg-[#090d16] px-3 py-1.5 text-[10px]">
                        <span className="truncate font-mono text-slate-300">
                          <span className="text-amber-300">{kbLoginCopy.hintPrefix}:</span>{' '}
                          demo@vision-it.de / 12345678
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyCredential('email', 'demo@vision-it.de')}
                          className="shrink-0 font-medium text-amber-300 hover:text-amber-200 cursor-pointer"
                        >
                          {copiedField === 'email' ? kbLoginCopy.copied : 'Copy'}
                        </button>
                      </div>

                      <div className="relative flex-1 bg-white">
                        <iframe
                          key={bmIframeKey}
                          src="https://bauapp.vision-it-systems.de"
                          title="Baumeister Pro App Live Mobile Preview"
                          className="h-full w-full border-0"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                  {/* Header */}
                  <div className="border-b border-white/[0.08] bg-[#131d31] px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <HardHat className="h-4 w-4 text-amber-400" />
                        <span className="font-display text-sm font-bold text-white">
                          Baumeister Pro
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-300">8°C · Trocken</span>
                    </div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      {ui.bmSiteLine}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                    {bmTab === 'diary' && (
                      <>
                        <div className="rounded-xl border border-white/[0.08] bg-[#141e33] p-3 space-y-2">
                          <div className="flex items-center justify-between text-xs text-slate-300">
                            <span>{ui.bmCrewLabel}</span>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setBmCrewCount((c) => Math.max(1, c - 1))}
                                className="h-6 w-6 rounded bg-[#090d16] text-white cursor-pointer"
                              >
                                -
                              </button>
                              <span className="font-mono text-cyan-300 tabular-nums">
                                {bmCrewCount}
                              </span>
                              <button
                                type="button"
                                onClick={() => setBmCrewCount((c) => c + 1)}
                                className="h-6 w-6 rounded bg-[#090d16] text-white cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={bmNoteInput}
                              onChange={(e) => setBmNoteInput(e.target.value)}
                              placeholder={ui.bmNotePlaceholder}
                              className="flex-1 rounded-lg border border-white/[0.1] bg-[#090d16] px-2.5 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                if (!bmNoteInput.trim()) return;
                                setBmCustomLogs((prev) => [
                                  {
                                    id: `l-${Date.now()}`,
                                    time: new Date().toLocaleTimeString('de-DE', {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                    }),
                                    crew: bmCrewCount,
                                    text: bmNoteInput.trim(),
                                  },
                                  ...prev,
                                ]);
                                setBmNoteInput('');
                              }}
                              className="rounded-lg bg-amber-400 px-2.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-amber-300 cursor-pointer"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {bmLogs.map((log) => (
                            <div
                              key={log.id}
                              className="rounded-xl border border-white/[0.06] bg-[#141e33] p-3 text-xs"
                            >
                              <div className="flex justify-between text-[11px] text-slate-400">
                                <span className="font-mono">{log.time}</span>
                                <span className="text-amber-300">
                                  {log.crew} {ui.bmWorkersUnit}
                                </span>
                              </div>
                              <p className="mt-1 text-slate-200">
                                {log.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {bmTab === 'trades' && (
                      <div className="space-y-3">
                        <div className="text-[11px] font-medium text-slate-400">
                          {ui.bmProgressLabel}
                        </div>
                        {bmTrades.map((trade) => (
                          <div
                            key={trade.id}
                            className="rounded-xl border border-white/[0.08] bg-[#141e33] p-3 space-y-2"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-white">
                                {trade.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-amber-300 tabular-nums">
                                  {trade.pct}%
                                </span>
                                {trade.pct < 100 && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setBmTradePct((prev) => ({
                                        ...prev,
                                        [trade.id]: Math.min(100, (prev[trade.id] || 0) + 5),
                                      }))
                                    }
                                    className="rounded bg-[#090d16] px-1.5 py-0.5 text-[10px] text-cyan-300 hover:bg-cyan-500/20 cursor-pointer"
                                  >
                                    +5%
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-[#090d16] overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-cyan-400 transition-all"
                                style={{ width: `${trade.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {bmTab === 'inspect' && (
                      <div className="space-y-2.5">
                        <div className="text-[11px] font-medium text-slate-400">
                          {ui.bmInspectLabel}
                        </div>
                        {bmChecks.map((check) => (
                          <button
                            key={check.id}
                            type="button"
                            onClick={() =>
                              setBmCheckOk((prev) => ({
                                ...prev,
                                [check.id]: !prev[check.id],
                              }))
                            }
                            className="flex w-full items-center justify-between rounded-xl border border-white/[0.08] bg-[#141e33] p-3 text-left text-xs cursor-pointer"
                          >
                            <span className="text-slate-200">
                              {check.label}
                            </span>
                            <span
                              className={`font-semibold ${
                                check.ok ? 'text-emerald-400' : 'text-amber-300'
                              }`}
                            >
                              {check.ok ? ui.bmPassed : ui.bmPending}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Bottom Nav */}
                  <div className="grid grid-cols-3 border-t border-white/[0.08] bg-[#131d31] py-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setBmTab('diary')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        bmTab === 'diary' ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    >
                      <ClipboardCheck className="h-4 w-4" />
                      <span>{ui.bmNavDiary}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBmTab('trades')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        bmTab === 'trades' ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    >
                      <Hammer className="h-4 w-4" />
                      <span>{ui.bmNavTrades}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBmTab('inspect')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        bmTab === 'inspect' ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    >
                      <Check className="h-4 w-4" />
                      <span>{ui.bmNavInspect}</span>
                    </button>
                  </div>
                    </>
                  )}
                </div>
              )}

              {/* 4. VISION KI TELEGRAM BOT */}
              {selectedProject === 'vision_tg' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1621]">
                  {/* Telegram Header */}
                  <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[#17212b] px-4 py-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-xs font-semibold text-white">
                        Vision Ki Telegram Bot
                      </div>
                      <div className="text-[10px] text-cyan-300">
                        @VisionITsystems_bot · Webhook active
                      </div>
                    </div>
                    <a
                      href="https://t.me/VisionITsystems_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open @VisionITsystems_bot in Telegram"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Chat Feed */}
                  <div className="flex-1 space-y-2.5 overflow-y-auto p-3">
                    {renderedTgMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-[88%] rounded-xl px-3 py-2 text-xs leading-relaxed whitespace-pre-line ${
                            msg.sender === 'user'
                              ? 'bg-[#2b5278] text-white'
                              : 'border border-white/[0.06] bg-[#182533] text-slate-100'
                          }`}
                        >
                          <div>{msg.text}</div>
                          <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400 tabular-nums">
                            <span>{msg.time}</span>
                            {msg.sender === 'user' && (
                              <CheckCheck className="h-3 w-3 text-cyan-300" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Inline Quick Action Keyboard */}
                    <div className="grid grid-cols-1 gap-1.5 pt-1">
                      <button
                        type="button"
                        onClick={() =>
                          handleTgAction(ui.tgQuoteBtn, ui.tgQuoteReply)
                        }
                        className="rounded-lg border border-cyan-400/25 bg-[#1d2d3e] px-3 py-1.5 text-xs font-medium text-cyan-200 hover:bg-cyan-500/20 cursor-pointer"
                      >
                        {ui.tgQuoteBtn}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleTgAction(ui.tgVoiceBtn, ui.tgVoiceReply)
                        }
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-cyan-400/25 bg-[#1d2d3e] px-3 py-1.5 text-xs font-medium text-cyan-200 hover:bg-cyan-500/20 cursor-pointer"
                      >
                        <Mic className="h-3.5 w-3.5" />
                        <span>{ui.tgVoiceBtn}</span>
                      </button>
                    </div>
                  </div>

                  {/* Mobile Telegram Message Input */}
                  <form
                    onSubmit={handleTgSend}
                    className="flex items-center gap-2 border-t border-white/[0.08] bg-[#17212b] px-3 py-2"
                  >
                    <MessageCircle className="h-4 w-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={tgInput}
                      onChange={(e) => setTgInput(e.target.value)}
                      placeholder={ui.tgMsgPlaceholder}
                      className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Send Telegram message"
                      className="rounded-md bg-cyan-500 p-1.5 text-slate-950 hover:bg-cyan-400 cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* 5. KRAFTBRUDER HAUSMEISTER APP (REAL LIVE IFRAME EMBED) */}
              {selectedProject === 'kraftbruder' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1524]">
                  {/* Mobile Browser Address Bar */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] bg-[#131d31] px-3 py-2">
                    <div className="flex-1 truncate rounded-md border border-white/[0.08] bg-[#090d16] px-2.5 py-1 font-mono text-[10px] text-cyan-300">
                      app.vision-it-systems.de
                    </div>
                    <button
                      type="button"
                      onClick={() => setKbIframeKey((k) => k + 1)}
                      aria-label="Reload Kraftbruder Hausmeister App"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href="https://app.vision-it-systems.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Kraftbruder Hausmeister App in new tab"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Compact Demo Credential Hint Strip */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] bg-[#090d16] px-3 py-1.5 text-[10px]">
                    <span className="truncate font-mono text-slate-300">
                      <span className="text-cyan-300">{kbLoginCopy.hintPrefix}:</span>{' '}
                      demo@vision-it.de / 12345678
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyCredential('email', 'demo@vision-it.de')}
                      className="shrink-0 font-medium text-cyan-300 hover:text-cyan-200 cursor-pointer"
                    >
                      {copiedField === 'email' ? kbLoginCopy.copied : 'Copy'}
                    </button>
                  </div>

                  {/* Embedded Live App Viewport */}
                  <div className="relative flex-1 bg-white">
                    <iframe
                      key={kbIframeKey}
                      src="https://app.vision-it-systems.de"
                      title="Kraftbruder Hausmeister App Live Mobile Preview"
                      className="h-full w-full border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                </div>
              )}

              {/* Bottom Home Indicator */}
              <div className="flex justify-center bg-[#090d16] py-2">
                <div className="h-1 w-28 rounded-full bg-slate-600/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
