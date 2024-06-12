import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
import { PromptBuilder } from 'src/ai/utils/prompt.constructor';
import { EOpenAiGptTypes, IOpenAiPostPromptBody } from 'src/ai/interfaces';
import { AI_SALUTATION_PROMPT } from 'src/ai/constants/aiPrompt';

@Injectable()
export class AiService {
  private readonly apiKey: string;
  private readonly apiUrl: string;
  private readonly dataDefaultConfigs: Omit<IOpenAiPostPromptBody, 'prompt'>;

  constructor(private readonly httpService: HttpService) {
    this.apiKey = process.env.OPENAI_API_KEY;
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
    this.dataDefaultConfigs = {
      model: EOpenAiGptTypes.OMNY,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 1,
    };
  }

  sendSalutation() {
    const body = this.generateBody(AI_SALUTATION_PROMPT);
    const config = this.generateConfig();
    this.httpService.post(this.apiUrl, body, config);
  }

  generateResponse(prompt: string): Observable<AxiosResponse> {
    const promptBuilder = new PromptBuilder(prompt);

    const data = {
      prompt: promptBuilder.build(),
    };
    const config = this.generateConfig();

    return this.httpService.post(this.apiUrl, data, config);
  }

  private generateConfig(): AxiosRequestConfig {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    };
  }
  private generateBody(prompt: string): IOpenAiPostPromptBody {
    console.log('dataDefaultConfigs', this.dataDefaultConfigs);
    return {
      prompt,
      ...this.dataDefaultConfigs,
    };
  }
}
