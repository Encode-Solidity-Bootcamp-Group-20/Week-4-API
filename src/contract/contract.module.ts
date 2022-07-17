import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';

import { SharedModule } from './../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}
