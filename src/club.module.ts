import { Module } from '@nestjs/common';
import { ClubController } from './club.controller';
import { ClubService } from './club.service';
import { HttpModule } from '@nestjs/axios';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [HttpModule.register({ timeout: 5000, maxRedirects: 5 }), ConfigModule.forRoot({isGlobal: true})],
  controllers: [ClubController],
  providers: [ClubService],
})
export class ClubModule {}
