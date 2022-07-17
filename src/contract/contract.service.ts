import { Injectable } from '@nestjs/common';
import { ProviderService } from './../shared/services/provider/provider.service';

@Injectable()
export class ContractService {
  constructor(private providerService: ProviderService) {}

  async getNFTMetadataById(id: number) {
    const url =
      'https://ipfs.io/ipfs/QmP5QyW4phUmDEwRh5CwSQTfM3ZrX1TTBmXErmtK3t2mfQ?filename=metadata.json';
  }
}
