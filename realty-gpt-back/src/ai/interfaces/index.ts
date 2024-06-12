export interface IOpenAiPostPromptBody {
  model: EOpenAiGptTypes;
  max_tokens: number;
  n: number;
  stop: null | any;
  temperature: number;
  prompt: string;
}

export enum EOpenAiGptTypes {
  OMNY = 'gpt-4o',
}
