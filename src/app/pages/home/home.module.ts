import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';
import { TransactionComponent } from './transaction/transaction.component';
import { AskCreditComponent } from './ask-credit/ask-credit.component';
import { PayComponent } from './pay/pay.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [HomePage, TransactionComponent, AskCreditComponent, PayComponent],
  entryComponents: [AskCreditComponent, PayComponent],
  providers: [
    BarcodeScanner
  ]
})
export class HomePageModule {}
