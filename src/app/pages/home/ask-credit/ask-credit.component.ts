import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Web3Service } from 'src/app/core/web3/web3.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ask-credit',
  templateUrl: './ask-credit.component.html',
  styleUrls: ['./ask-credit.component.scss'],
})
export class AskCreditComponent implements OnInit {

  public step: 'PRESENTATION' | 'LOADING' | 'SUCCESS' | 'ERROR' = 'PRESENTATION';

  public value = 0;
  public error = '';

  constructor(
    public modalController: ModalController,
    public web3Service: Web3Service,
    public translate: TranslateService
  ) { }

  ngOnInit() {}

  public dismissModal() {
    this.modalController.dismiss();
  }

  public confirm() {
    this.step = 'LOADING';

    this.web3Service.askCredit()
      .subscribe((res: any) => {
        this.value = res.value;
        this.step = 'SUCCESS';
      }, (error: any) => {
        let errorMessage = this.translate.instant(`ask-credit.error.${error.code}`);

        if (errorMessage === `ask-credit.error.${error.code}`) {
          this.error = this.translate.instant('ask-credit.error.fallback');
        } else {
          this.error = errorMessage;
        }
        
        this.step = 'ERROR';
      })
  }

}
