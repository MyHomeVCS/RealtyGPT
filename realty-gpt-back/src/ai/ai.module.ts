import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { HttpModule } from '@nestjs/axios';
import { FileServiceModule } from 'src/file-service/file-service.module';
import { ChatGateway } from 'src/chat/chat.gateway';

@Module({
  imports: [HttpModule, FileServiceModule],
  providers: [AiService],
  exports: [AiService],
})
export class AiModule {}
