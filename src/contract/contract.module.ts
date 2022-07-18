import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import ContractController from './contract.controller';
import { HttpModule } from '@nestjs/axios';
import { SharedModule } from './../shared/shared.module';

@Module({
  imports: [SharedModule, HttpModule],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}
