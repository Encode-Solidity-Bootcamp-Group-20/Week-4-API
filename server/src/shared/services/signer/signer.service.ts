import { Injectable } from '@nestjs/common';
import { WalletService } from './../wallet/wallet.service';
import { ProviderService } from './../provider/provider.service';
import { ethers } from 'ethers';

@Injectable()
export class SignerService {
  signer: ethers.Wallet;

  constructor(
    private walletService: WalletService,
    private providerService: ProviderService,
  ) {
    this.setupSigner();
  }

  setupSigner() {
    if (!this.walletService.wallet || !this.providerService.provider) return;
    this.signer = this.walletService.wallet.connect(
      this.providerService.provider,
    );
  }
}
