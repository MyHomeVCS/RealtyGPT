import { Logger } from '@nestjs/common';
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { MessageDto } from 'src/message/dto/message.dto';

import { Server } from 'socket.io';
import { AiService } from 'src/ai/ai.service';
import { IInitUser } from 'src/interfaces';

@WebSocketGateway({ cors: '*' })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly aiService: AiService) {}
  private readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  // @Todo need to handle after implementation database module
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets;

    console.log('client connected');
    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  // @Todo need to handle after implementation database module
  handleDisconnect(client: any) {
    console.log('client disconnected');
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage('init-user')
  async handleUserInit(@MessageBody() userInfo: IInitUser) {
    console.log('user', userInfo);
    const response = await this.aiService.sendSalutation();
    return {
      event: 'message',
      data: response,
    };
  }

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() message: MessageDto) {
    const result = await this.aiService.sendMessage(message.content);
    // this.logger.log(`Message received from client id: ${client.id}`);
    // this.logger.debug(`Payload: ${data}`);
    return {
      event: 'message',
      data: result,
    };
  }
}
