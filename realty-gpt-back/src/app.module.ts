import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { databaseConfig } from 'src/configs/database.config';
import { AiModule } from './ai/ai.module';
import { MessageModule } from './message/message.module';
import { FileServiceModule } from './file-service/file-service.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/static/',
      rootPath: (() => {
        return join(__dirname, '..', 'static');
      })(),
    }),
    DatabaseModule,
    AiModule,
    MessageModule,
    FileServiceModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
