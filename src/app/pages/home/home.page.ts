import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ModalController, Platform } from '@ionic/angular';
import { AskCreditComponent } from './ask-credit/ask-credit.component';
import { CupertinoPane } from 'cupertino-pane';
import TransactionEntity from './transaction/transaction.entity';
import TicketEntity from 'src/app/core/entities/ticket.entity';
import { PayComponent } from './pay/pay.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public balance: number = 0;
  public tickets: TicketEntity[] = [];

  public activeTransaction: TransactionEntity;

  public pane: CupertinoPane;

  constructor(
    public modalController: ModalController,
    public homeService: HomeService,
    private platform: Platform,
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
    this.fetchData()
  }

  public fetchData() {
    this.homeService.getBalance()
      .subscribe(balance => {
        this.balance = balance;
      })

    this.homeService.getTransactionList()
      .subscribe(tickets => {
        this.tickets = tickets;
      })
  }

  async presentAskCreditModal() {
    const modal = await this.modalController.create({
      component: AskCreditComponent
    });

    modal.onDidDismiss()
      .then(() => this.fetchData())

    return await modal.present();
  }

  public presentTransactionDetails(transaction) {
    this.activeTransaction = transaction;

    if (!this.pane) {
      this.pane = new CupertinoPane('.cupertino-pane', { 
        parentElement: 'ion-content',
        breaks: {
            middle: { enabled: true, offset: 300 },
            bottom: { enabled: true, offset: 80 },
        },
        bottomClose: true,
        buttonClose: false,
        darkMode: window.matchMedia('(prefers-color-scheme: dark)')
      });
    }

    this.pane.present({animate: true});
  }

  public async scanQr() {
    let ticket;
    if (this.platform.is("cordova")) {
      try {
        let scanned = await this.barcodeScanner.scan();
        console.log(scanned, JSON.parse(scanned.text))
        this.presentPayModal(JSON.parse(scanned.text))
      } catch (error) {
        console.error(error)
      }
      
    } else {
      ticket = JSON.parse('{"id":15,"seller":{"id":"0xb3294cE62e9aF759266e4b4aEf5AF237ad6EFE95","name":"Mercadona"},"products":[{"id":1,"name":"Producte 1","_price":1,"count":1}],"date":1586504294780}');
      this.presentPayModal(ticket)
    }
  }

  async presentPayModal(ticket) {
    const modal = await this.modalController.create({
      component: PayComponent,
      componentProps: ticket
    });

    modal.onDidDismiss()
      .then(() => this.fetchData())

    return await modal.present();
  }
}
