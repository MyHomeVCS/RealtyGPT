import { QUERY_FIELDS } from 'src/ai/constants/aiPrompt';

export class PromptBuilder {
  private AI_PROMPT_WRAPPER_FIRST_PART = 'extract fields from user prompt: ';
  private AI_PROMPT_WRAPPER_SECOND_PART = `generate response in user's prompt language if prompt hasn't contain at 3 main fields (the main fields starts with \"$\" symbol) to have more detaled response\n" +
    "get the response only like js object without markdown syntax described below and values should be in english lang:`;
  private AI_RESPONSE_PATTERN = `
  {
      "response": your response if there no any data,
      "fields": the object of fields that youre extraced from user's prompt like this ${JSON.stringify(QUERY_FIELDS)}
  }`;

  private userPrompt: string;

  constructor(prompt: string) {
    this.userPrompt = prompt;
  }

  build() {
    return `${this.AI_PROMPT_WRAPPER_FIRST_PART} "${this.userPrompt}" ${this.AI_PROMPT_WRAPPER_SECOND_PART} ${this.AI_RESPONSE_PATTERN}`;
  }
}
