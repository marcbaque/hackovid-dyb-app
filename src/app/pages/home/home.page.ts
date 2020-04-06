import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ModalController } from '@ionic/angular';
import { AskCreditComponent } from './ask-credit/ask-credit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public balance: number = 0;
  public transactions: any[] = [];

  constructor(
    public modalController: ModalController,
    public homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getBalance()
      .subscribe(balance => {
        this.balance = balance;
      })

    this.homeService.getTransactionList()
      .subscribe(transactionList => {
        this.transactions = transactionList;
      })
  }

  async presentAskCreditModal() {
    const modal = await this.modalController.create({
      component: AskCreditComponent
    });
    return await modal.present();
  }

}
