export type Language = 'de' | 'en';

export type DemoModuleId = 'chatbot' | 'n8n' | 'telegram' | 'apps_roi';

export type ServiceOptionId =
  | 'n8n_automation'
  | 'telegram_bot'
  | 'web_android_app'
  | 'ai_chatbot'
  | 'docker_hosting';

export interface LeadSubmission {
  name: string;
  email: string;
  company: string;
  services: ServiceOptionId[];
  notes?: string;
  language: Language;
  sourceModule?: DemoModuleId | 'hero' | 'navbar' | 'section';
}

export interface FeedbackSubmission {
  module: DemoModuleId;
  rating: number;
  comment?: string;
  language: Language;
}

export interface ToastItem {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

export interface LeadPrefill {
  services?: ServiceOptionId[];
  notes?: string;
  sourceModule?: DemoModuleId | 'hero' | 'navbar' | 'section';
}
