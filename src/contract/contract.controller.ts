import { Controller, Get, HttpException, Param, Post, Provider } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ProviderService } from './../shared/services/provider/provider.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('contract')
export default class ContractController {
  constructor(
    private contractService: ContractService,
    private providerService: ProviderService,
  ) {}

  @Get('metadata/:id')
  @ApiOperation({
    summary: 'Metadata By Id',
    description: 'Retrieves the metadata object for the specified tokenId',
  })
  @ApiResponse({
    status: 200,
    description: 'Metadata retrieved',
  })
  @ApiResponse({
    status: 503,
    description: 'The server is not connected to a valid provider',
  })
  async getMetadataById(@Param('id') id: number) {
    let result;
    try {
      result = await this.contractService.getNFTMetadataById(id);
    } catch (error) {
      throw new HttpException(error.message, 503);
    }
    if (!result) throw new HttpException('NFT ID may be out of bounds', 404);
    return result;
  }

  @Get('wallet/:address')
  @ApiOperation({
    summary: 'Get wallet balance',
    description: 'Retreives wallet balance of account passed as parameter',
  })
  async getWalletBalanceByAddress(@Param('address') address: string) {
    const result = await this.providerService.getBalance(address);
    return result;
  }

  @Post('wallet/mint/')
  @ApiOperation({
    summary: 'Mint NFTto msg.sender',
    description: 'Mints an NFT from the contract',
  })
  async mintNftToAddress() {
    const tx = await this.contractService.mintTokens();
    return tx;
  }
}
