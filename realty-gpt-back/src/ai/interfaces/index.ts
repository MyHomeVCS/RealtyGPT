import { ESupportedLanguages } from 'src/interfaces';

export interface IOpenAiPostPromptBody {
  model: EOpenAiGptTypes;
  max_tokens: number;
  n: number;
  stop: null | any;
  temperature: number;
  prompt?: string;
  messages: any;
}

export enum EOpenAiGptTypes {
  OMNY = 'gpt-4o',
}

export type TMultiLanguageMapping = Record<ESupportedLanguages, Record<number, string>>;

export interface ISocketMessageResponse {
  content: string;
  language?: ESupportedLanguages;
}
