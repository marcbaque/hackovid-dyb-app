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

  public balance: string = '0.00';
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
        this.balance = balance.toFixed(2);
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
      ticket = JSON.parse('{"id":1,"seller":{"id":"0xF7d6d3b5e3bBbF46267dF46603a7508F5Ddec2c9","name":"Bonpreu"},"products":[{"id":4,"name":"Xocolata blanca amb xurros","_price":2.3,"count":2},{"id":2,"name":"Nocilla","_price":0.9,"count":1},{"id":1,"name":"Colacao","_price":1.2,"count":1},{"id":3,"name":"Donut de xocolata","_price":1,"count":10}],"date":1586516804311}');
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
