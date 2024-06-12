import { WebSocketGateway, WebSocketServer, MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string) {
    this.server.clients.forEach(client => {
      client.send(message);
    });
  }
}
