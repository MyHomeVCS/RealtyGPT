import { Logger } from '@nestjs/common';
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

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

    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  // @Todo need to handle after implementation database module
  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage('init-user')
  async handleUserInit(@MessageBody() userInfo: IInitUser) {
    this.logger.log('user', userInfo);
    const response = await this.aiService.sendSalutation(userInfo.userId, userInfo.language);
    return {
      event: 'message',
      data: response,
    };
  }

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() message: MessageDto, @ConnectedSocket() clientSocket: any) {
    console.log('message', message);
    const data = await this.aiService.sendMessage(message, clientSocket);
    // this.logger.log(`Message received from client id: ${client.id}`);
    // this.logger.debug(`Payload: ${data}`);
    console.log('DATAAAA', data);
    return {
      event: 'message',
      data,
    };
  }
}
