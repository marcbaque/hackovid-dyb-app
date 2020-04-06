import { Component, OnInit, Input } from '@angular/core';
import TransactionEntity from './transaction.entity';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {

  @Input() public transaction: TransactionEntity;

  constructor() { }

  ngOnInit() {}

}
