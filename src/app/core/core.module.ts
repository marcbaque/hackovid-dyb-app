import { NgModule, ModuleWithProviders } from '@angular/core';
import { Web3Service } from './web3/web3.service';
import { EnchainteService } from './web3/enchainte.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
      Web3Service,
      EnchainteService
  ]
})
export class CoreModule {}
