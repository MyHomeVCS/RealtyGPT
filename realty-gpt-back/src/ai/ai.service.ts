import { OpenAI } from 'openai';
import { Injectable } from '@nestjs/common';
import { IAiResponse, IFilterFields } from 'src/interfaces';
import { MessageDto } from 'src/message/dto/message.dto';
import { IOpenAiPostPromptBody } from 'src/ai/interfaces';
import { JSONFileService } from 'src/file-service/file-service.service';
import { AI_FIRST_PROMPT, AI_THIRD_PROMPT } from 'src/ai/constants/ai.prompts';
import { AI_PREDEFINED_QUESTIONS_ANSWERS } from 'src/ai/constants/ai.predefinedQuestions';
import { getValidFields } from 'src/ai/utils/query.mofifyer';

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

  async sendSalutation(userId: string) {
    try {
      await this.getAiResponse(AI_FIRST_PROMPT, userId);
      const parsedData = await this.getAiResponse(AI_THIRD_PROMPT, userId);
      return parsedData.response;
    } catch (e) {
      console.error(e);
      return 'ssory, service is down';
    }
  }

  async generateAnswer(aiResponse: IAiResponse, client: WebSocket): Promise<string> {
    const predefinedAnswer = aiResponse.predefinedQuestionNumber && AI_PREDEFINED_QUESTIONS_ANSWERS[aiResponse.predefinedQuestionNumber];
    if (predefinedAnswer) {
      return predefinedAnswer;
    }
    const validParams = getValidFields(aiResponse.fields);
    if (aiResponse.isPrevFieldsChanged && Object.values(validParams).length >= 3) {
      // @Todo should be send with specific event
      this.getData(aiResponse.fields, client);

      return aiResponse.response;
      // return this.getData();
    }
    return aiResponse.response;
  }

  async sendMessage(message: MessageDto, client: WebSocket) {
    try {
      const result = await this.getAiResponse(message.content, message.userId);
      console.log('MESSAGE RESPONSE', result);

      return this.generateAnswer(result, client);
    } catch (e) {
      console.log('errr', e);
      return 'sorry, service is down';
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
