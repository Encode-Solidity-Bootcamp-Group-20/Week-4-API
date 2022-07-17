import { Injectable } from '@nestjs/common';
import { ProviderService } from './../shared/services/provider/provider.service';

@Injectable()
export class ContractService {
  constructor(private providerService: ProviderService) {}

  getNFTMetadataById() {
    return 'Get NFT metadata';
  }
}
