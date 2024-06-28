export enum ESupportedLanguages {
  armenian = 'armenian',
  english = 'english',
  russian = 'russian',
}

export const SUPPORTED_LANGUAGES_MAPPING: Record<ESupportedLanguages, string> = {
  [ESupportedLanguages.armenian]: 'am',
  [ESupportedLanguages.russian]: 'ru',
  [ESupportedLanguages.english]: 'us',
};

export const SUPPORTED_LANGUAGES = Object.keys(SUPPORTED_LANGUAGES_MAPPING) as ESupportedLanguages[];

export const SUPPORTED_LANGUAGES_PREFIXES = Object.values(SUPPORTED_LANGUAGES_MAPPING);
