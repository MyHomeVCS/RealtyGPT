import { OpenAI } from 'openai';
import { Injectable } from '@nestjs/common';
import { ESupportedLanguages, IAiResponse, IFilterFields } from 'src/interfaces';
import { MessageDto } from 'src/message/dto/message.dto';
import { IOpenAiPostPromptBody, ISocketMessageResponse } from 'src/ai/interfaces';
import { JSONFileService } from 'src/file-service/file-service.service';
import { AI_FIRST_PROMPT, AI_SALUTATION_PROMPT, AI_THIRD_PROMPT } from 'src/ai/constants/ai.prompts';
import { AI_PREDEFINED_QUESTIONS_ANSWERS } from 'src/ai/constants/ai.predefinedQuestions';
import { getValidFields } from 'src/ai/utils/query.mofifyer';
import { AI_SALUTATIONS } from 'src/ai/constants/ai.salutations';

// @Todo need to move into database
const CHAT_HISTORY: Record<string, { role: 'assistant' | 'user'; content: string }[]> = {};

@Injectable()
export class AiService {
  private readonly openai: OpenAI;
  private readonly dataDefaultConfigs: any | Omit<IOpenAiPostPromptBody, 'prompt'>;

  constructor(private readonly fileService: JSONFileService) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.dataDefaultConfigs = {
      model: 'gpt-4o',
    };
  }
  async getData(fields: IFilterFields, clientSocket: any) {
    try {
      const data = await this.fileService.findBy(fields);
      clientSocket.emit('data', data);
    } catch (e) {
      return [];
    }
  }

  async sendSalutation(userId: string, lang: ESupportedLanguages): Promise<ISocketMessageResponse> {
    try {
      await this.getAiResponse(AI_FIRST_PROMPT, userId);
      await this.getAiResponse(AI_THIRD_PROMPT, userId);
      console.log('SSSSSSSSSSSS', lang);
      CHAT_HISTORY[userId].unshift();
      CHAT_HISTORY[userId].push({ role: 'assistant', content: AI_SALUTATIONS[lang] });
      return { content: AI_SALUTATIONS[lang], language: lang };
    } catch (e) {
      console.error(e);
      return { content: 'ssory, service is down' };
    }
  }

  async generateAnswer(aiResponse: IAiResponse, client: WebSocket): Promise<ISocketMessageResponse> {
    const predefinedAnswer = aiResponse.predefinedQuestionNumber && AI_PREDEFINED_QUESTIONS_ANSWERS[aiResponse.lang][aiResponse.predefinedQuestionNumber];
    if (predefinedAnswer) {
      return { content: predefinedAnswer };
    }
    const validParams = getValidFields(aiResponse.fields);
    if (aiResponse.isPrevFieldsChanged && Object.values(validParams).length >= 3) {
      // @Todo should be send with specific event
      this.getData(aiResponse.fields, client);
    }
    return { content: aiResponse.response, language: aiResponse.lang };
  }

  async sendMessage(message: MessageDto, client: WebSocket): Promise<ISocketMessageResponse> {
    try {
      const result = await this.getAiResponse(message.content, message.userId);
      console.log('MESSAGE RESPONSE', result);

      return this.generateAnswer(result, client);
    } catch (e) {
      console.log('errr', e);
      return { content: 'sorry, service is down' };
    }
  }
  async getAiResponse(prompt: string, userId: string): Promise<IAiResponse> {
    if (!CHAT_HISTORY[userId]) {
      CHAT_HISTORY[userId] = [];
    }
    CHAT_HISTORY[userId].push({ role: 'user', content: prompt });

    const response = await this.openai.chat.completions.create({
      ...this.dataDefaultConfigs,
      // @Todo find bet practice for this
      // user: userId,
      messages: CHAT_HISTORY[userId],
    });

    const _response = response.choices[0].message.content;
    CHAT_HISTORY[userId].push({ role: 'assistant', content: _response });
    return JSON.parse(_response) as IAiResponse;
  }
}
