import type { Language } from '../types';
import { de } from './de';
import { en } from './en';
import { hr } from './hr';
import { pl } from './pl';
import { ru } from './ru';
import { sq } from './sq';
import { tr } from './tr';
import { LANGUAGE_OPTIONS, type LanguageOption, type Translations } from './types';

export { LANGUAGE_OPTIONS, type LanguageOption, type Translations };

export const translations: Record<Language, Translations> = {
  de,
  en,
  hr,
  ru,
  tr,
  pl,
  sq,
};
