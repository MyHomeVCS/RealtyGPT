import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
import { PromptBuilder } from 'src/ai/utils/prompt.constructor';
import { EOpenAiGptTypes, IOpenAiPostPromptBody } from 'src/ai/interfaces';
import { AI_SALUTATION_PROMPT } from 'src/ai/constants/aiPrompt';
import { OpenAI } from 'openai';

@Injectable()
export class AiService {
  private readonly openai: OpenAI;
  private readonly dataDefaultConfigs: any | Omit<IOpenAiPostPromptBody, 'prompt'>;

  constructor(private readonly httpService: HttpService) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.dataDefaultConfigs = {
      model: 'gpt-4o',
      max_tokens: 200,
      temperature: 0.5,
    };
  }

  async sendSalutation() {
    try {
      return this.getAiResponse(AI_SALUTATION_PROMPT);
    } catch (e) {
      return 'ssory, service is down';
    }
  }

  async getAiResponse(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      ...this.dataDefaultConfigs,
      // @Todo find bet practice for this
      messages: [{ role: 'user', content: prompt }],
    });

    return response.choices[0].message.content;
  }

  async sendMessage(prompt: string) {
    try {
      const wrapperPrompt = new PromptBuilder(prompt).build();

      const result = await this.getAiResponse(wrapperPrompt);
      const parsedData = JSON.parse(result as unknown as any);
      console.log('parsedData', parsedData);
      return parsedData.response;
    } catch (e) {
      return 'ssory, service is down';
    }
  }
}
