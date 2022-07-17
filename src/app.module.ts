import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractModule } from './contract/contract.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot(), ContractModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
