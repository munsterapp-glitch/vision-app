import {
  Bot,
  Calendar,
  Check,
  Database,
  MessageSquare,
  Mic,
  RotateCcw,
  Send,
  Square,
  User,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Translations } from '../../i18n/translations';
import type { Language, LeadPrefill, ServiceOptionId } from '../../types';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  showSlots?: boolean;
}

interface CrmContext {
  intent: string;
  focusArea: string;
  recommendedStack: string;
  qualification: string;
  services: ServiceOptionId[];
}

interface AiChatbotDemoProps {
  lang: Language;
  t: Translations['chatbot'];
  onApplyToLeadModal: (prefill: LeadPrefill) => void;
}

const CHAT_REPLIES: Record<
  Language,
  {
    n8n: { reply: string; crm: CrmContext };
    telegram: { reply: string; crm: CrmContext };
    appointment: { reply: string; crm: CrmContext };
    gdpr: { reply: string; crm: CrmContext };
    fallback: { reply: string; crm: CrmContext };
    preferredSlot: string;
    voiceCrm: CrmContext;
    voiceIdleHint: string;
    voiceDoneBanner: string;
    voiceNotePrefill: string;
    crmFooter: string;
  }
> = {
  de: {
    n8n: {
      reply:
        'Mit n8n verbinden wir Ihre Postfächer (IMAP/SMTP), ERP, Google Sheets und CRM-Systeme DSGVO-konform auf Ihrem eigenen Docker-Server. Eingehende Anfragen oder Rechnungen werden in ~1,4 Sekunden per KI klassifiziert, extrahiert und automatisch verbucht. Möchten Sie dazu ein kurzes Architekturbild im Erstgespräch besprechen?',
      crm: {
        intent: 'Prozess- & E-Mail-Automatisierung',
        focusArea: 'IMAP-Eingang, Rechnungen & CRM-Sync',
        recommendedStack: 'n8n + Docker (Hetzner DE) + LLM Classifier',
        qualification: 'Qualifiziert · Hohes Einsparpotenzial',
        services: ['n8n_automation', 'docker_hosting'],
      },
    },
    telegram: {
      reply:
        'Ein produktiver Telegram Business Bot (z.B. für Bestellstatus, Sofort-Angebote oder Sprachnotiz-zu-Aufgabe) startet je nach ERP-Anbindung bei 1.490 € einmalig inklusive Docker-Setup auf Hetzner. Laufende Serverkosten liegen meist unter 25 €/Monat. Sollen wir Ihren konkreten Anwendungsfall kalkulieren?',
      crm: {
        intent: 'Budget- & Lösungsanfrage Telegram Bot',
        focusArea: 'Mobile Team- & Kundenautomatisierung',
        recommendedStack: 'Telegram Bot API + n8n Webhook + Whisper',
        qualification: 'Kaufbereit · Budget-Evaluierung',
        services: ['telegram_bot', 'n8n_automation'],
      },
    },
    appointment: {
      reply:
        'Sehr gerne! Unsere Senior-Architekten analysieren Ihren Prozess in einem kompakten 15-Minuten-Videocall kostenlos und unverbindlich. Wählen Sie direkt unten einen passenden Terminslot aus:',
      crm: {
        intent: 'Direkte Terminbuchung (Erstanalyse)',
        focusArea: 'Erstgespräch & Systemarchitektur',
        recommendedStack: 'AI Chatbot + Calendar Sync + PocketBase',
        qualification: 'Hot Lead · Terminwunsch',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    gdpr: {
      reply:
        'Alle Systeme laufen auf Wunsch zu 100 % isoliert in Docker-Containern auf deutschen Hetzner-Servern (Nürnberg / Falkenstein) mit Auftragsverarbeitungsvertrag (AVV). Kundendaten verlassen die EU nicht — auch KI-Klassifizierungen können über EU-Endpunkte oder lokale Modelle laufen.',
      crm: {
        intent: 'Datenschutz & Infrastruktur-Prüfung',
        focusArea: 'DSGVO-Hosting in Deutschland',
        recommendedStack: 'Docker Compose + Traefik + Hetzner DE',
        qualification: 'Qualifiziert · Compliance-Fokus',
        services: ['docker_hosting'],
      },
    },
    fallback: {
      reply:
        'Verstanden! Genau solche wiederkehrenden Abläufe automatisieren wir mit einer Kombination aus KI-Agenten, n8n-Workflows und maßgeschneiderten Web/Android-Interfaces. Wählen Sie gerne direkt einen kostenlosen Terminslot, um Ihren Prozess durchzugehen.',
      crm: {
        intent: 'Individuelle KI- & IT-Beratung',
        focusArea: 'End-to-End Digitalisierung',
        recommendedStack: 'AI Agent + n8n + Custom Web/App',
        qualification: 'Qualifiziert · Erstkontakt',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    preferredSlot: 'Gewünschter Terminslot',
    voiceCrm: {
      intent: 'Eingehender Voice-Lead (Vapi)',
      focusArea: '80+ Angebotsmails / Tag → ERP',
      recommendedStack: 'Vapi / LiveKit + n8n IMAP + Hetzner DE',
      qualification: 'Qualifiziert · Call aktiv',
      services: ['ai_chatbot', 'n8n_automation'],
    },
    voiceIdleHint: 'Klicken Sie auf „Testanruf abspielen“, um das Live-Transkript zu starten.',
    voiceDoneBanner: 'Anruf abgeschlossen · Terminslot automatisch im CRM vorgemerkt.',
    voiceNotePrefill: 'Interesse an Voice Agent (Vapi/LiveKit) + n8n IMAP Pipeline.',
    crmFooter:
      'Alle erkannten Leads werden automatisch via Webhook in PocketBase, HubSpot, Pipedrive oder Google Sheets synchronisiert.',
  },
  en: {
    n8n: {
      reply:
        'Using n8n on dedicated German Docker servers, we connect your IMAP mailboxes, ERP, Google Sheets, and CRM systems. Incoming inquiries or invoices are classified by AI in ~1.4 seconds and routed automatically. Would you like to review an architecture blueprint on a quick call?',
      crm: {
        intent: 'Workflow & Email Automation',
        focusArea: 'IMAP Inbox, Invoices & CRM Sync',
        recommendedStack: 'n8n + Docker (Hetzner DE) + LLM Classifier',
        qualification: 'Qualified · High ROI Potential',
        services: ['n8n_automation', 'docker_hosting'],
      },
    },
    telegram: {
      reply:
        'A production Telegram Business Bot (e.g., order lookups, instant quotes, or voice-to-task) starts at €1,490 one-time including Hetzner Docker setup, depending on ERP integrations. Hosting costs typically stay under €25/month. Shall we scope your exact use case?',
      crm: {
        intent: 'Telegram Bot Pricing & Scope',
        focusArea: 'Mobile Team & Client Automation',
        recommendedStack: 'Telegram Bot API + n8n Webhook + Whisper',
        qualification: 'High Intent · Budget Evaluation',
        services: ['telegram_bot', 'n8n_automation'],
      },
    },
    appointment: {
      reply:
        'Gladly! Our senior engineers review your workflow in a focused 15-minute video discovery call at no charge. Select an available slot right below:',
      crm: {
        intent: 'Direct Appointment Booking',
        focusArea: 'Discovery Call & Architecture',
        recommendedStack: 'AI Chatbot + Calendar Sync + PocketBase',
        qualification: 'Hot Lead · Booking Requested',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    gdpr: {
      reply:
        'All systems can run 100% isolated in Docker containers on German Hetzner servers (Nuremberg / Falkenstein) with a signed GDPR DPA (AVV). Customer data never leaves the EU — AI classification can use EU-hosted endpoints or self-hosted models.',
      crm: {
        intent: 'GDPR & Infrastructure Verification',
        focusArea: 'German GDPR Hosting',
        recommendedStack: 'Docker Compose + Traefik + Hetzner DE',
        qualification: 'Qualified · Compliance Focus',
        services: ['docker_hosting'],
      },
    },
    fallback: {
      reply:
        'Understood! Those exact repetitive workflows are what we automate using AI agents, n8n pipelines, and tailored web/Android interfaces. Feel free to pick a free consultation slot below to map out your setup.',
      crm: {
        intent: 'Custom AI & IT Consultation',
        focusArea: 'End-to-End Automation',
        recommendedStack: 'AI Agent + n8n + Custom Web/App',
        qualification: 'Qualified · Initial Discovery',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    preferredSlot: 'Preferred slot',
    voiceCrm: {
      intent: 'Inbound Voice Lead (Vapi)',
      focusArea: '80+ RFQ emails / day → ERP',
      recommendedStack: 'Vapi / LiveKit + n8n IMAP + Hetzner DE',
      qualification: 'Qualified · Call Active',
      services: ['ai_chatbot', 'n8n_automation'],
    },
    voiceIdleHint: 'Click "Play Sample Call" to stream the live voice transcript.',
    voiceDoneBanner: 'Call completed · Discovery slot automatically reserved in CRM.',
    voiceNotePrefill: 'Interested in Voice Agent (Vapi/LiveKit) + n8n IMAP Pipeline.',
    crmFooter:
      'All qualified leads synchronize automatically via webhook to PocketBase, HubSpot, Pipedrive, or Google Sheets.',
  },
  hr: {
    n8n: {
      reply:
        'Putem n8n-a povezujemo vaše IMAP/SMTP sandučiće, ERP, Google Sheets i CRM sustave sukladno GDPR-u na vašem Docker poslužitelju. Dolazne poruke i računi klasificiraju se AI-jem za ~1,4 s i automatski knjiže. Želite li kratki pregled arhitekture na uvodnom pozivu?',
      crm: {
        intent: 'Automatizacija procesa i e-pošte',
        focusArea: 'IMAP ulaz, računi i CRM sinkronizacija',
        recommendedStack: 'n8n + Docker (Hetzner DE) + LLM Classifier',
        qualification: 'Kvalificiran · Visok ROI potencijal',
        services: ['n8n_automation', 'docker_hosting'],
      },
    },
    telegram: {
      reply:
        'Produkcijski Telegram Business Bot (npr. status narudžbe, brze ponude ili glasovna bilješka u zadatak) kreće od 1.490 € jednokratno uključujući Docker postavljanje na Hetzneru. Mjesečni trošak poslužitelja obično je ispod 25 €. Želite li izračun za vaš slučaj?',
      crm: {
        intent: 'Upit za cijenu i opseg Telegram bota',
        focusArea: 'Mobilna automatizacija tima i klijenata',
        recommendedStack: 'Telegram Bot API + n8n Webhook + Whisper',
        qualification: 'Visoka namjera · Procjena proračuna',
        services: ['telegram_bot', 'n8n_automation'],
      },
    },
    appointment: {
      reply:
        'Vrlo rado! Naši senior arhitekti besplatno analiziraju vaš proces u fokusiranom 15-minutnom videopozivu. Odaberite slobodan termin odmah ispod:',
      crm: {
        intent: 'Izravna rezervacija termina',
        focusArea: 'Uvodna analiza i arhitektura sustava',
        recommendedStack: 'AI Chatbot + Calendar Sync + PocketBase',
        qualification: 'Hot Lead · Zatražen termin',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    gdpr: {
      reply:
        'Svi sustavi rade 100 % izolirano u Docker kontejnerima na njemačkim Hetzner poslužiteljima (Nürnberg / Falkenstein) uz ugovor o obradi podataka (AVV). Podaci nikada ne napuštaju EU.',
      crm: {
        intent: 'Provjera GDPR-a i infrastrukture',
        focusArea: 'GDPR hosting u Njemačkoj',
        recommendedStack: 'Docker Compose + Traefik + Hetzner DE',
        qualification: 'Kvalificiran · Fokus na usklađenost',
        services: ['docker_hosting'],
      },
    },
    fallback: {
      reply:
        'Razumijemo! Upravo takve ponavljajuće procese automatiziramo kombinacijom AI agenata, n8n radnih tokova i prilagođenih Web/Android sučelja. Slobodno odaberite besplatni termin ispod.',
      crm: {
        intent: 'Prilagođeno AI i IT savjetovanje',
        focusArea: 'End-to-End automatizacija',
        recommendedStack: 'AI Agent + n8n + Custom Web/App',
        qualification: 'Kvalificiran · Prvi kontakt',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    preferredSlot: 'Odabrani termin',
    voiceCrm: {
      intent: 'Dolazni glasovni lead (Vapi)',
      focusArea: '80+ upita dnevno → ERP',
      recommendedStack: 'Vapi / LiveKit + n8n IMAP + Hetzner DE',
      qualification: 'Kvalificiran · Poziv aktivan',
      services: ['ai_chatbot', 'n8n_automation'],
    },
    voiceIdleHint: 'Kliknite „Pokreni probni poziv“ za pokretanje prijenosa uživo.',
    voiceDoneBanner: 'Poziv završen · Termin automatski rezerviran u CRM-u.',
    voiceNotePrefill: 'Interes za Voice Agent (Vapi/LiveKit) + n8n IMAP pipeline.',
    crmFooter:
      'Svi kvalificirani leadovi automatski se sinkroniziraju putem webhooka u PocketBase, HubSpot, Pipedrive ili Google Sheets.',
  },
  ru: {
    n8n: {
      reply:
        'С помощью n8n на выделенных немецких Docker-серверах мы связываем ваши почтовые ящики IMAP/SMTP, ERP, Google Sheets и CRM в соответствии с GDPR. Входящие заявки и счета классифицируются ИИ за ~1,4 секунды. Обсудим архитектуру на коротком созвоне?',
      crm: {
        intent: 'Автоматизация процессов и почты',
        focusArea: 'IMAP-входящие, счета и CRM-синхронизация',
        recommendedStack: 'n8n + Docker (Hetzner DE) + LLM Classifier',
        qualification: 'Квалифицирован · Высокий ROI',
        services: ['n8n_automation', 'docker_hosting'],
      },
    },
    telegram: {
      reply:
        'Продуктивный Telegram Business Bot (статус заказа, расчёт КП или голосовые заметки в задачи) стоит от 1 490 € разово с настройкой Docker на Hetzner. Сервер обходится обычно до 25 €/мес. Рассчитать решение под ваши задачи?',
      crm: {
        intent: 'Запрос стоимости и функций Telegram-бота',
        focusArea: 'Мобильная автоматизация команды и клиентов',
        recommendedStack: 'Telegram Bot API + n8n Webhook + Whisper',
        qualification: 'Готовность к покупке · Оценка бюджета',
        services: ['telegram_bot', 'n8n_automation'],
      },
    },
    appointment: {
      reply:
        'С удовольствием! Наши ведущие архитекторы бесплатно разберут ваш процесс на 15-минутном видеозвонке. Выберите удобный слот ниже:',
      crm: {
        intent: 'Прямая запись на консультацию',
        focusArea: 'Первичный аудит и архитектура',
        recommendedStack: 'AI Chatbot + Calendar Sync + PocketBase',
        qualification: 'Горячий лид · Запрос встречи',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    gdpr: {
      reply:
        'Все системы работают изолированно в Docker-контейнерах на немецких серверах Hetzner (Нюрнберг / Фалькенштайн) с договором обработки данных (AVV). Данные не покидают пределы ЕС.',
      crm: {
        intent: 'Проверка GDPR и инфраструктуры',
        focusArea: 'GDPR-хостинг в Германии',
        recommendedStack: 'Docker Compose + Traefik + Hetzner DE',
        qualification: 'Квалифицирован · Фокус на комплаенс',
        services: ['docker_hosting'],
      },
    },
    fallback: {
      reply:
        'Понятно! Именно такие рутинные процессы мы автоматизируем с помощью ИИ-агентов, сценариев n8n и веб/Android-интерфейсов. Выберите бесплатный слот ниже для разбора вашей задачи.',
      crm: {
        intent: 'Индивидуальная AI- и IT-консультация',
        focusArea: 'Сквозная автоматизация',
        recommendedStack: 'AI Agent + n8n + Custom Web/App',
        qualification: 'Квалифицирован · Первый контакт',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    preferredSlot: 'Выбранный слот',
    voiceCrm: {
      intent: 'Входящий голосовой лид (Vapi)',
      focusArea: '80+ заявок/день → ERP',
      recommendedStack: 'Vapi / LiveKit + n8n IMAP + Hetzner DE',
      qualification: 'Квалифицирован · Идёт звонок',
      services: ['ai_chatbot', 'n8n_automation'],
    },
    voiceIdleHint: 'Нажмите «Запустить тестовый звонок», чтобы увидеть транскрипт в реальном времени.',
    voiceDoneBanner: 'Звонок завершён · Слот встречи автоматически забронирован в CRM.',
    voiceNotePrefill: 'Интерес к Voice Agent (Vapi/LiveKit) + n8n IMAP.',
    crmFooter:
      'Все квалифицированные лиды автоматически синхронизируются по webhook в PocketBase, HubSpot, Pipedrive или Google Sheets.',
  },
  tr: {
    n8n: {
      reply:
        'Almanya’daki özel Docker sunucularında çalışan n8n ile IMAP/SMTP posta kutularınızı, ERP, Google Sheets ve CRM sistemlerinizi GDPR uyumlu şekilde bağlıyoruz. Gelen talepler veya faturalar ~1,4 saniyede yapay zeka ile sınıflandırılır. Hızlı bir görüşmede mimariyi inceleyelim mi?',
      crm: {
        intent: 'Süreç ve E-posta Otomasyonu',
        focusArea: 'IMAP Gelen Kutusu, Faturalar ve CRM Senkronizasyonu',
        recommendedStack: 'n8n + Docker (Hetzner DE) + LLM Classifier',
        qualification: 'Nitelikli · Yüksek ROI Potansiyeli',
        services: ['n8n_automation', 'docker_hosting'],
      },
    },
    telegram: {
      reply:
        'Üretime hazır bir Telegram Business Bot (sipariş durumu, anlık teklif veya sesten göreve dönüştürme) Hetzner Docker kurulumu dahil tek seferlik 1.490 €’dan başlar. Sunucu maliyeti genellikle ayda 25 € altındadır. Kendi senaryonuz için fiyat çıkaralım mı?',
      crm: {
        intent: 'Telegram Bot Fiyat ve Kapsam Talebi',
        focusArea: 'Mobil Ekip ve Müşteri Otomasyonu',
        recommendedStack: 'Telegram Bot API + n8n Webhook + Whisper',
        qualification: 'Yüksek Niyet · Bütçe Değerlendirmesi',
        services: ['telegram_bot', 'n8n_automation'],
      },
    },
    appointment: {
      reply:
        'Memnuniyetle! Kıdemli mimarlarımız sürecinizi 15 dakikalık ücretsiz görüntülü görüşmede analiz eder. Aşağıdan uygun bir zaman aralığı seçebilirsiniz:',
      crm: {
        intent: 'Doğrudan Randevu Talebi',
        focusArea: 'Ön Analiz ve Sistem Mimarisi',
        recommendedStack: 'AI Chatbot + Calendar Sync + PocketBase',
        qualification: 'Sıcak Lead · Randevu İstendi',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    gdpr: {
      reply:
        'Tüm sistemler imzalı GDPR DPA (AVV) ile Alman Hetzner sunucularındaki (Nürnberg / Falkenstein) izole Docker konteynerlerinde çalışır. Müşteri verileri AB dışına çıkmaz.',
      crm: {
        intent: 'GDPR ve Altyapı Doğrulaması',
        focusArea: 'Almanya’da GDPR Uyumlu Barındırma',
        recommendedStack: 'Docker Compose + Traefik + Hetzner DE',
        qualification: 'Nitelikli · Uyumluluk Odaklı',
        services: ['docker_hosting'],
      },
    },
    fallback: {
      reply:
        'Anlaşıldı! Tam da bu tür tekrarlayan işleri yapay zeka ajanları, n8n akışları ve özel Web/Android arayüzleriyle otomatikleştiriyoruz. Sürecinizi planlamak için aşağıdan ücretsiz bir randevu seçebilirsiniz.',
      crm: {
        intent: 'Özel Yapay Zeka ve BT Danışmanlığı',
        focusArea: 'Uçtan Uca Otomasyon',
        recommendedStack: 'AI Agent + n8n + Custom Web/App',
        qualification: 'Nitelikli · İlk Görüşme',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    preferredSlot: 'Tercih edilen zaman',
    voiceCrm: {
      intent: 'Gelen Sesli Lead (Vapi)',
      focusArea: 'Günde 80+ teklif e-postası → ERP',
      recommendedStack: 'Vapi / LiveKit + n8n IMAP + Hetzner DE',
      qualification: 'Nitelikli · Arama Aktif',
      services: ['ai_chatbot', 'n8n_automation'],
    },
    voiceIdleHint: 'Canlı ses dökümünü başlatmak için “Örnek Aramayı Oynat” düğmesine tıklayın.',
    voiceDoneBanner: 'Arama tamamlandı · Randevu slotu CRM’de otomatik ayrıldı.',
    voiceNotePrefill: 'Sesli Ajan (Vapi/LiveKit) + n8n IMAP hattına ilgi.',
    crmFooter:
      'Nitelikli tüm potansiyel müşteriler webhook aracılığıyla PocketBase, HubSpot, Pipedrive veya Google Sheets’e otomatik aktarılır.',
  },
  pl: {
    n8n: {
      reply:
        'Dzięki n8n na dedykowanych niemieckich serwerach Docker łączymy skrzynki IMAP/SMTP, ERP, Google Sheets i CRM zgodnie z RODO. Zapytania i faktury są klasyfikowane przez AI w ok. 1,4 s i automatycznie księgowane. Omówimy architekturę na krótkiej rozmowie?',
      crm: {
        intent: 'Automatyzacja procesów i poczty',
        focusArea: 'Skrzynka IMAP, faktury i synchronizacja CRM',
        recommendedStack: 'n8n + Docker (Hetzner DE) + LLM Classifier',
        qualification: 'Zakwalifikowany · Wysoki potencjał ROI',
        services: ['n8n_automation', 'docker_hosting'],
      },
    },
    telegram: {
      reply:
        'Produkcyjny Telegram Business Bot (np. status zamówień, szybkie wyceny, notatka głosowa na zadanie) zaczyna się od 1 490 € jednorazowo z konfiguracją Docker na Hetznerze. Koszt serwera to zwykle poniżej 25 €/mies. Przygotować wycenę dla Twojej firmy?',
      crm: {
        intent: 'Zapytanie o koszt i zakres bota Telegram',
        focusArea: 'Mobilna automatyzacja zespołu i klientów',
        recommendedStack: 'Telegram Bot API + n8n Webhook + Whisper',
        qualification: 'Wysoki zamiar · Ocena budżetu',
        services: ['telegram_bot', 'n8n_automation'],
      },
    },
    appointment: {
      reply:
        'Chętnie! Nasi starsi architekci bezpłatnie przeanalizują Twój proces podczas 15-minutowej wideorozmowy. Wybierz dogodny termin poniżej:',
      crm: {
        intent: 'Bezpośrednia rezerwacja terminu',
        focusArea: 'Rozmowa wstępna i architektura systemu',
        recommendedStack: 'AI Chatbot + Calendar Sync + PocketBase',
        qualification: 'Hot Lead · Prośba o termin',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    gdpr: {
      reply:
        'Wszystkie systemy działają w izolowanych kontenerach Docker na niemieckich serwerach Hetzner (Norymberga / Falkenstein) z umową powierzenia danych (AVV). Dane klientów nie opuszczają UE.',
      crm: {
        intent: 'Weryfikacja RODO i infrastruktury',
        focusArea: 'Hosting RODO w Niemczech',
        recommendedStack: 'Docker Compose + Traefik + Hetzner DE',
        qualification: 'Zakwalifikowany · Fokus na zgodność',
        services: ['docker_hosting'],
      },
    },
    fallback: {
      reply:
        'Rozumiemy! Dokładnie takie powtarzalne procesy automatyzujemy za pomocą agentów AI, przepływów n8n oraz dedykowanych aplikacji Web/Android. Wybierz bezpłatny termin poniżej, aby omówić wdrożenie.',
      crm: {
        intent: 'Indywidualne doradztwo AI i IT',
        focusArea: 'Automatyzacja End-to-End',
        recommendedStack: 'AI Agent + n8n + Custom Web/App',
        qualification: 'Zakwalifikowany · Pierwszy kontakt',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    preferredSlot: 'Preferowany termin',
    voiceCrm: {
      intent: 'Przychodzący lead głosowy (Vapi)',
      focusArea: '80+ zapytań dziennie → ERP',
      recommendedStack: 'Vapi / LiveKit + n8n IMAP + Hetzner DE',
      qualification: 'Zakwalifikowany · Połączenie aktywne',
      services: ['ai_chatbot', 'n8n_automation'],
    },
    voiceIdleHint: 'Kliknij „Odtwórz testowe połączenie”, aby uruchomić transkrypcję na żywo.',
    voiceDoneBanner: 'Rozmowa zakończona · Termin automatycznie zarezerwowany w CRM.',
    voiceNotePrefill: 'Zainteresowanie Voice Agent (Vapi/LiveKit) + n8n IMAP.',
    crmFooter:
      'Wszystkie zakwalifikowane leady automatycznie trafiają przez webhook do PocketBase, HubSpot, Pipedrive lub Google Sheets.',
  },
  sq: {
    n8n: {
      reply:
        'Me n8n në serverë gjermanë Docker lidhim kutitë tuaja IMAP/SMTP, ERP, Google Sheets dhe CRM sipas GDPR. Kërkesat dhe faturat hyrëse klasifikohen me AI në ~1,4 sekonda dhe regjistrohen automatikisht. Dëshironi të shohim arkitekturën në një telefonatë të shkurtër?',
      crm: {
        intent: 'Automatizim Procesesh & Emaili',
        focusArea: 'Kutia IMAP, Faturat & Sinkronizimi CRM',
        recommendedStack: 'n8n + Docker (Hetzner DE) + LLM Classifier',
        qualification: 'I kualifikuar · Potencial i lartë ROI',
        services: ['n8n_automation', 'docker_hosting'],
      },
    },
    telegram: {
      reply:
        'Një Telegram Business Bot produktiv (p.sh. statusi i porosive, ofertat e shpejta ose shënimi zanor në detyrë) fillon nga 1.490 € njëherësh përfshirë konfigurimin Docker në Hetzner. Hostimi zakonisht kushton nën 25 €/muaj. Të llogarisim rastin tuaj konkret?',
      crm: {
        intent: 'Kërkesë çmimi & fushëveprimi Telegram Bot',
        focusArea: 'Automatizim mobil për ekipin & klientët',
        recommendedStack: 'Telegram Bot API + n8n Webhook + Whisper',
        qualification: 'Gati për blerje · Vlerësim buxheti',
        services: ['telegram_bot', 'n8n_automation'],
      },
    },
    appointment: {
      reply:
        'Me kënaqësi! Arkitektët tanë senior analizojnë procesin tuaj falas në një video-thirrje 15-minutëshe. Zgjidhni një orar të lirë menjëherë më poshtë:',
      crm: {
        intent: 'Rezervim i drejtpërdrejtë takimi',
        focusArea: 'Konsultim fillestar & Arkitektura e sistemit',
        recommendedStack: 'AI Chatbot + Calendar Sync + PocketBase',
        qualification: 'Hot Lead · Kërkesë për takim',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    gdpr: {
      reply:
        'Të gjitha sistemet mund të funksionojnë 100 % të izoluara në kontejnerë Docker në serverët gjermanë Hetzner (Nürnberg / Falkenstein) me kontratë AVV sipas GDPR. Të dhënat e klientëve nuk dalin kurrë jashtë BE-së.',
      crm: {
        intent: 'Verifikimi i GDPR & Infrastrukturës',
        focusArea: 'Hosting GDPR në Gjermani',
        recommendedStack: 'Docker Compose + Traefik + Hetzner DE',
        qualification: 'I kualifikuar · Fokus në përputhshmëri',
        services: ['docker_hosting'],
      },
    },
    fallback: {
      reply:
        'E kuptuar! Pikërisht këto procese përsëritëse i automatizojmë me agjentë AI, rrjedha n8n dhe ndërfaqe të personalizuara Web/Android. Zgjidhni lirisht një orar falas më poshtë.',
      crm: {
        intent: 'Konsulencë e personalizuar AI & IT',
        focusArea: 'Automatizim End-to-End',
        recommendedStack: 'AI Agent + n8n + Custom Web/App',
        qualification: 'I kualifikuar · Kontakt i parë',
        services: ['ai_chatbot', 'n8n_automation'],
      },
    },
    preferredSlot: 'Orari i preferuar',
    voiceCrm: {
      intent: 'Lead hyrës me zë (Vapi)',
      focusArea: '80+ emaile ofertash / ditë → ERP',
      recommendedStack: 'Vapi / LiveKit + n8n IMAP + Hetzner DE',
      qualification: 'I kualifikuar · Thirrje aktive',
      services: ['ai_chatbot', 'n8n_automation'],
    },
    voiceIdleHint: 'Klikoni „Luaj thirrjen test“ për të nisur transkriptin live.',
    voiceDoneBanner: 'Thirrja përfundoi · Orari u rezervua automatikisht në CRM.',
    voiceNotePrefill: 'Interes për Voice Agent (Vapi/LiveKit) + tubacionin n8n IMAP.',
    crmFooter:
      'Të gjithë lead-et e kualifikuara sinkronizohen automatikisht me webhook në PocketBase, HubSpot, Pipedrive ose Google Sheets.',
  },
};

function buildBotReply(
  input: string,
  lang: Language
): { reply: string; crm: CrmContext; showSlots: boolean } {
  const q = input.toLowerCase();
  const copy = CHAT_REPLIES[lang];

  if (
    q.includes('n8n') ||
    q.includes('imap') ||
    q.includes('email') ||
    q.includes('e-mail') ||
    q.includes('rechnung') ||
    q.includes('e-pošt') ||
    q.includes('почт') ||
    q.includes('e-posta') ||
    q.includes('poczt') ||
    q.includes('fatur')
  ) {
    return { ...copy.n8n, showSlots: false };
  }

  if (
    q.includes('telegram') ||
    q.includes('bot') ||
    q.includes('kost') ||
    q.includes('pric') ||
    q.includes('cijen') ||
    q.includes('стои') ||
    q.includes('ücret') ||
    q.includes('fiyat') ||
    q.includes('koszt') ||
    q.includes('çmim') ||
    q.includes('kusht')
  ) {
    return { ...copy.telegram, showSlots: true };
  }

  if (
    q.includes('termin') ||
    q.includes('call') ||
    q.includes('appointment') ||
    q.includes('book') ||
    q.includes('gespräch') ||
    q.includes('razgovor') ||
    q.includes('встреч') ||
    q.includes('запис') ||
    q.includes('randevu') ||
    q.includes('spotkan') ||
    q.includes('umów') ||
    q.includes('takim') ||
    q.includes('cakto')
  ) {
    return { ...copy.appointment, showSlots: true };
  }

  if (
    q.includes('dsgvo') ||
    q.includes('gdpr') ||
    q.includes('rodo') ||
    q.includes('kvkk') ||
    q.includes('hetzner') ||
    q.includes('docker') ||
    q.includes('host') ||
    q.includes('сервер')
  ) {
    return { ...copy.gdpr, showSlots: false };
  }

  return { ...copy.fallback, showSlots: true };
}

const VOICE_TRANSCRIPTS: Record<
  Language,
  Array<{ time: string; speaker: string; text: string }>
> = {
  de: [
    { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems, digitaler Assistent am Apparat. Wobei darf ich helfen?' },
    { time: '00:05', speaker: 'Anrufer (B2B)', text: 'Hallo, wir bekommen täglich über 80 Angebotsmails und kommen mit dem Abtippen ins ERP nicht hinterher.' },
    { time: '00:11', speaker: 'Vision Voice AI', text: 'Das lösen wir mit einer n8n-IMAP-Pipeline inklusive KI-Extraktion. Sollen wir morgen um 10:00 Uhr eine Live-Analyse dazu machen?' },
    { time: '00:17', speaker: 'Anrufer (B2B)', text: 'Ja, morgen 10:00 Uhr passt hervorragend.' },
    { time: '00:20', speaker: 'Vision Voice AI', text: 'Perfekt, der Slot ist vorgemerkt und die Kalendereinladung geht Ihnen gleich per E-Mail zu.' },
  ],
  en: [
    { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems digital assistant speaking. How can I help your team today?' },
    { time: '00:05', speaker: 'Caller (B2B)', text: 'Hi, we receive over 80 RFQ emails every day and our staff spends hours copying them into our ERP.' },
    { time: '00:11', speaker: 'Vision Voice AI', text: 'We solve that with an n8n IMAP pipeline and AI extraction. Would tomorrow at 10:00 CET work for a brief architecture review?' },
    { time: '00:17', speaker: 'Caller (B2B)', text: 'Yes, tomorrow at 10:00 works great.' },
    { time: '00:20', speaker: 'Vision Voice AI', text: 'Booked! I have reserved the slot and queued your calendar confirmation.' },
  ],
  hr: [
    { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems, digitalni asistent na telefonu. Kako vam mogu pomoći?' },
    { time: '00:05', speaker: 'Pozivatelj (B2B)', text: 'Pozdrav, dnevno primamo preko 80 upita e-poštom i ne stižemo ih ručno prepisivati u ERP.' },
    { time: '00:11', speaker: 'Vision Voice AI', text: 'To rješavamo n8n IMAP cjevovodom i AI ekstrakcijom. Odgovara li vam sutra u 10:00 za kratku analizu uživo?' },
    { time: '00:17', speaker: 'Pozivatelj (B2B)', text: 'Da, sutra u 10:00 savršeno odgovara.' },
    { time: '00:20', speaker: 'Vision Voice AI', text: 'Odlično, termin je rezerviran i pozivnica za kalendar stiže vam e-poštom.' },
  ],
  ru: [
    { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems, цифровой ассистент на линии. Чем могу помочь?' },
    { time: '00:05', speaker: 'Абонент (B2B)', text: 'Здравствуйте, мы получаем более 80 запросов в день по почте и не успеваем вручную переносить их в ERP.' },
    { time: '00:11', speaker: 'Vision Voice AI', text: 'Мы решим это с помощью n8n IMAP-конвейера и ИИ-извлечения. Проведём живой разбор завтра в 10:00 CET?' },
    { time: '00:17', speaker: 'Абонент (B2B)', text: 'Да, завтра в 10:00 отлично подходит.' },
    { time: '00:20', speaker: 'Vision Voice AI', text: 'Готово! Слот зарезервирован, приглашение в календарь уже отправлено на почту.' },
  ],
  tr: [
    { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems dijital asistanı konuşuyor. Ekibinize nasıl yardımcı olabilirim?' },
    { time: '00:05', speaker: 'Arayan (B2B)', text: 'Merhaba, günde 80’den fazla teklif e-postası alıyoruz ve bunları ERP’ye elle girmekte zorlanıyoruz.' },
    { time: '00:11', speaker: 'Vision Voice AI', text: 'Bunu n8n IMAP hattı ve yapay zeka veri çıkarımıyla çözüyoruz. Yarın saat 10:00 CET’de kısa bir analiz yapalım mı?' },
    { time: '00:17', speaker: 'Arayan (B2B)', text: 'Evet, yarın 10:00 çok uygun.' },
    { time: '00:20', speaker: 'Vision Voice AI', text: 'Harika! Zaman dilimi ayrıldı ve takvim davetiniz e-posta ile gönderildi.' },
  ],
  pl: [
    { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems, cyfrowy asystent przy telefonie. W czym mogę pomóc?' },
    { time: '00:05', speaker: 'Dzwoniący (B2B)', text: 'Dzień dobry, otrzymujemy ponad 80 zapytań dziennie e-mailem i nie nadążamy z przepisywaniem ich do ERP.' },
    { time: '00:11', speaker: 'Vision Voice AI', text: 'Rozwiązujemy to potokiem n8n IMAP i ekstrakcją AI. Czy jutro o 10:00 CET pasuje na krótką analizę?' },
    { time: '00:17', speaker: 'Dzwoniący (B2B)', text: 'Tak, jutro o 10:00 pasuje idealnie.' },
    { time: '00:20', speaker: 'Vision Voice AI', text: 'Zarezerwowane! Zaproszenie do kalendarza zostało właśnie wysłane e-mailem.' },
  ],
  sq: [
    { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems, asistenti digjital në linjë. Si mund t’ju ndihmoj?' },
    { time: '00:05', speaker: 'Thirrësi (B2B)', text: 'Përshëndetje, marrim mbi 80 emaile ofertash në ditë dhe nuk arrijmë t’i hedhim me dorë në ERP.' },
    { time: '00:11', speaker: 'Vision Voice AI', text: 'Këtë e zgjidhim me një tubacion n8n IMAP dhe ekstraktim AI. A ju përshtatet nesër në 10:00 CET për një analizë të shkurtër?' },
    { time: '00:17', speaker: 'Thirrësi (B2B)', text: 'Po, nesër në 10:00 është perfekte.' },
    { time: '00:20', speaker: 'Vision Voice AI', text: 'U rezervua! Orari u ruajt dhe ftesa e kalendarit sapo u dërgua me email.' },
  ],
};

export function AiChatbotDemo({
  lang,
  t,
  onApplyToLeadModal,
}: AiChatbotDemoProps) {
  const [mode, setMode] = useState<'text' | 'voice'>('text');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', role: 'assistant', text: t.welcomeMsg },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [crmContext, setCrmContext] = useState<CrmContext | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Voice agent simulation state
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceStep, setVoiceStep] = useState(0);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const streamIntervalRef = useRef<number | null>(null);
  const voiceTimerRef = useRef<number | null>(null);

  // Reset welcome message when language changes cleanly if no user messages yet
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [{ id: 'welcome', role: 'assistant', text: t.welcomeMsg }];
      }
      return prev;
    });
  }, [t.welcomeMsg]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, selectedSlot]);

  useEffect(() => {
    return () => {
      if (streamIntervalRef.current) window.clearInterval(streamIntervalRef.current);
      if (voiceTimerRef.current) window.clearInterval(voiceTimerRef.current);
    };
  }, []);

  const voiceTranscript = VOICE_TRANSCRIPTS[lang];
  const copy = CHAT_REPLIES[lang];

  const handleReset = () => {
    if (streamIntervalRef.current) window.clearInterval(streamIntervalRef.current);
    setIsStreaming(false);
    setSelectedSlot(null);
    setCrmContext(null);
    setMessages([{ id: 'welcome', role: 'assistant', text: t.welcomeMsg }]);
  };

  const sendPrompt = (promptText: string) => {
    const trimmed = promptText.trim();
    if (!trimmed || isStreaming) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    const { reply, crm, showSlots } = buildBotReply(trimmed, lang);
    const botId = `bot-${Date.now() + 1}`;

    setMessages((prev) => [...prev, userMsg, { id: botId, role: 'assistant', text: '' }]);
    setInputValue('');
    setIsStreaming(true);
    setCrmContext(crm);

    const words = reply.split(' ');
    let idx = 0;

    if (streamIntervalRef.current) window.clearInterval(streamIntervalRef.current);
    streamIntervalRef.current = window.setInterval(() => {
      idx += 2;
      const partial = words.slice(0, idx).join(' ');
      const done = idx >= words.length;

      setMessages((prev) =>
        prev.map((m) =>
          m.id === botId
            ? { ...m, text: partial, showSlots: done ? showSlots : false }
            : m
        )
      );

      if (done && streamIntervalRef.current) {
        window.clearInterval(streamIntervalRef.current);
        streamIntervalRef.current = null;
        setIsStreaming(false);
      }
    }, 35);
  };

  const toggleVoiceSimulation = () => {
    if (voiceActive) {
      if (voiceTimerRef.current) window.clearInterval(voiceTimerRef.current);
      setVoiceActive(false);
      return;
    }

    setVoiceStep(1);
    setVoiceActive(true);
    setCrmContext(copy.voiceCrm);

    if (voiceTimerRef.current) window.clearInterval(voiceTimerRef.current);
    let step = 1;
    voiceTimerRef.current = window.setInterval(() => {
      step += 1;
      if (step > voiceTranscript.length) {
        if (voiceTimerRef.current) window.clearInterval(voiceTimerRef.current);
        setVoiceActive(false);
        return;
      }
      setVoiceStep(step);
    }, 1700);
  };

  return (
    <div className="space-y-6">
      {/* Sub-mode Toggle: Text Chatbox vs Voice Agent */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="inline-flex items-center rounded-lg border border-white/[0.1] bg-[#090d16] p-1">
          <button
            type="button"
            onClick={() => setMode('text')}
            className={`inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'text'
                ? 'bg-cyan-500/20 text-cyan-300'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{t.modeText}</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('voice')}
            className={`inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'voice'
                ? 'bg-violet-500/25 text-violet-200'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mic className="h-3.5 w-3.5" />
            <span>{t.modeVoice}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-white/25 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{t.reset}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Interactive Area (Chatbox or Voice Agent) */}
        <div className="lg:col-span-7 flex flex-col rounded-xl border border-white/[0.08] bg-[#090d16] overflow-hidden">
          {mode === 'text' ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0d1422] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.agentName}</div>
                    <div className="text-xs text-slate-400">{t.agentRole}</div>
                  </div>
                </div>
                {isStreaming && (
                  <span className="text-xs font-mono text-cyan-300">streaming...</span>
                )}
              </div>

              {/* Message Feed */}
              <div className="flex-1 space-y-4 overflow-y-auto p-4 h-[330px]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 text-cyan-300">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-cyan-500 text-slate-950 font-medium'
                          : 'border border-white/[0.08] bg-[#121a2a] text-slate-200'
                      }`}
                    >
                      <p>{msg.text || '...'}</p>

                      {msg.showSlots && (
                        <div className="mt-3 border-t border-white/[0.08] pt-3">
                          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{t.bookSlotTitle}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {t.slots.map((slot) => {
                              const active = selectedSlot === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot)}
                                  className={`rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                                    active
                                      ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                                      : 'border-white/[0.12] bg-[#090d16] text-slate-300 hover:border-cyan-400/50'
                                  }`}
                                >
                                  {active && <Check className="mr-1 inline h-3 w-3" />}
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                          {selectedSlot && (
                            <button
                              type="button"
                              onClick={() =>
                                onApplyToLeadModal({
                                  services: crmContext?.services || ['ai_chatbot'],
                                  notes: `${copy.preferredSlot}: ${selectedSlot}`,
                                  sourceModule: 'chatbot',
                                })
                              }
                              className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400 cursor-pointer"
                            >
                              <span>{t.transferToForm}</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {msg.role === 'user' && (
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-800 text-slate-300">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Prompts */}
              <div className="border-t border-white/[0.06] bg-[#0b111d] px-4 py-2.5">
                <div className="mb-1.5 text-[11px] font-medium text-slate-400">
                  {t.quickPromptsLabel}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {t.quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      disabled={isStreaming}
                      onClick={() => sendPrompt(prompt)}
                      className="rounded-md border border-white/[0.1] bg-[#121a2a] px-2.5 py-1 text-xs text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-200 disabled:opacity-50 cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendPrompt(inputValue);
                }}
                className="flex items-center gap-2 border-t border-white/[0.08] bg-[#0d1422] p-3"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t.inputPlaceholder}
                  className="flex-1 rounded-lg border border-white/[0.1] bg-[#090d16] px-3.5 py-2 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isStreaming || !inputValue.trim()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-40 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{t.send}</span>
                </button>
              </form>
            </>
          ) : (
            /* Voice Agent Simulation Mode */
            <div className="flex h-[480px] flex-col justify-between p-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {t.voiceTitle}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{t.voiceSubtitle}</p>

                {/* Waveform / Call Control Bar */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#0f1623] p-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={toggleVoiceSimulation}
                      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        voiceActive
                          ? 'bg-rose-500/20 text-rose-200 border border-rose-500/40 hover:bg-rose-500/30'
                          : 'bg-violet-500 text-white hover:bg-violet-400'
                      }`}
                    >
                      {voiceActive ? (
                        <>
                          <Square className="h-3.5 w-3.5" />
                          <span>{t.voiceStop}</span>
                        </>
                      ) : (
                        <>
                          <Mic className="h-3.5 w-3.5" />
                          <span>{t.voiceStart}</span>
                        </>
                      )}
                    </button>
                    {voiceActive && (
                      <span className="text-xs font-medium text-violet-300">
                        {t.voiceRunning}
                      </span>
                    )}
                  </div>

                  {/* Audio Bars */}
                  <div className="flex items-center gap-1 h-7" aria-hidden="true">
                    {[14, 24, 18, 28, 16, 26, 12, 22, 16, 20].map((height, i) => (
                      <span
                        key={i}
                        className={`w-1 rounded-full transition-all duration-200 ${
                          voiceActive ? 'bg-violet-400' : 'bg-slate-700'
                        }`}
                        style={{
                          height: voiceActive ? `${Math.max(8, ((height + voiceStep * 7) % 26) + 4)}px` : '6px',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Transcript Feed */}
              <div className="my-4 flex-1 space-y-3 overflow-y-auto rounded-xl border border-white/[0.06] bg-[#0b111d] p-4">
                {voiceStep === 0 ? (
                  <div className="flex h-full items-center justify-center text-center text-sm text-slate-500">
                    {copy.voiceIdleHint}
                  </div>
                ) : (
                  voiceTranscript.slice(0, voiceStep).map((line, index) => (
                    <div key={index} className="flex gap-3 text-sm">
                      <span className="font-mono text-xs text-slate-500 tabular-nums pt-0.5">
                        {line.time}
                      </span>
                      <div>
                        <span
                          className={`text-xs font-semibold ${
                            line.speaker.includes('Vision')
                              ? 'text-violet-300'
                              : 'text-cyan-300'
                          }`}
                        >
                          {line.speaker}:
                        </span>
                        <p className="mt-0.5 text-slate-200 leading-relaxed">{line.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {voiceStep >= voiceTranscript.length && (
                <div className="flex items-center justify-between gap-3 rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-4 py-2.5 text-xs text-cyan-200">
                  <span>{copy.voiceDoneBanner}</span>
                  <button
                    type="button"
                    onClick={() =>
                      onApplyToLeadModal({
                        services: ['ai_chatbot', 'n8n_automation'],
                        notes: copy.voiceNotePrefill,
                        sourceModule: 'chatbot',
                      })
                    }
                    className="rounded bg-cyan-500 px-2.5 py-1 font-semibold text-slate-950 hover:bg-cyan-400 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {t.transferToForm}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Live CRM Lead Qualification Inspector */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#090d16] p-5">
          <div>
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <Database className="h-4 w-4 text-cyan-400" />
              <h4 className="font-display text-sm font-semibold text-white">
                {t.crmPanelTitle}
              </h4>
            </div>

            {!crmContext ? (
              <div className="py-12 text-center text-sm leading-relaxed text-slate-500">
                {t.crmEmpty}
              </div>
            ) : (
              <dl className="mt-4 space-y-4 text-sm">
                <div className="border-b border-white/[0.06] pb-3">
                  <dt className="text-xs text-slate-400">{t.crmFields.intent}</dt>
                  <dd className="mt-1 font-medium text-white">{crmContext.intent}</dd>
                </div>
                <div className="border-b border-white/[0.06] pb-3">
                  <dt className="text-xs text-slate-400">{t.crmFields.companySize}</dt>
                  <dd className="mt-1 font-medium text-slate-200">{crmContext.focusArea}</dd>
                </div>
                <div className="border-b border-white/[0.06] pb-3">
                  <dt className="text-xs text-slate-400">{t.crmFields.recommendedStack}</dt>
                  <dd className="mt-1 font-mono text-xs text-cyan-300">
                    {crmContext.recommendedStack}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-400">{t.crmFields.qualification}</dt>
                  <dd className="mt-1 font-medium text-emerald-400">
                    {crmContext.qualification}
                  </dd>
                </div>
              </dl>
            )}
          </div>

          <div className="mt-6 border-t border-white/[0.08] pt-4">
            <div className="text-xs text-slate-400 leading-relaxed">
              {copy.crmFooter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
