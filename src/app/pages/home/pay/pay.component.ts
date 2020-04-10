import { Component, OnInit, Input } from '@angular/core';
import TicketEntity from 'src/app/core/entities/ticket.entity';
import ProductEntity from 'src/app/core/entities/product.entity';
import { HomeService } from '../home.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss'],
})
export class PayComponent implements OnInit {

  @Input() public id: number;
  @Input() public products: any[];
  @Input() public seller: any;
  @Input() public date: number;

  public ticket: TicketEntity;

  public status: "PENDING" | "WAITING" | "SUCCESS" | "ERROR" = "PENDING";

  constructor(
    public modalController: ModalController,
    public homeService: HomeService
  ) { }

  ngOnInit() {
    this.ticket = new TicketEntity({
      id: this.id,
      seller: {
        id: this.seller.id,
        name: this.seller.name
      },
      products: this.products.map(product => {
        return new ProductEntity({
          id: product.id,
          name: product.name,
          price: product._price,
          count: product.count
        })
      }),
      date: new Date(this.date),
    })
  }

  public dismissModal() {
    this.modalController.dismiss();
  }

  onSubmit() {
    this.status = 'WAITING';

    this.homeService.payTicket(this.ticket)
      .subscribe(res => {
        console.log(res)
        this.status = 'SUCCESS'
      }, err => {
        console.log(err)
        this.status = 'ERROR'
      })
  }

}
