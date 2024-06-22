import { Module } from '@nestjs/common';
import { JSONFileService } from './file-service.service';

@Module({
  providers: [JSONFileService],
  exports: [JSONFileService],
})
export class FileServiceModule {}
