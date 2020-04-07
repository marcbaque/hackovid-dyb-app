import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CupertinoPane } from 'cupertino-pane';

import TransactionEntity from './transaction.entity';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {

  @ViewChild('itemSliding', { static: true }) public itemSliding: IonItemSliding; 

  @Input() public transaction: TransactionEntity;
  @Output() public onVerify = new EventEmitter<TransactionEntity>();

  constructor() { }

  ngOnInit() {}

  public onItemClick() {
    this.itemSliding.open('end');
  }

  public onVerifyClick() {
    this.onVerify.emit(this.transaction);
  }

}
