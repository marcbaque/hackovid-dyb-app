import { Injectable } from '@angular/core';
import { Web3Service } from 'src/app/core/web3/web3.service';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';
import TransactionEntity from './transaction/transaction.entity';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import TicketEntity from 'src/app/core/entities/ticket.entity';
import ProductEntity from 'src/app/core/entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    public http: HttpClient,
    public web3Service: Web3Service
  ) { }

  public getBalance() {
    return this.web3Service.getBalance();
  }

  public getTransactionList() {
    return this.http.get(`${environment.apiUrl}/tickets?buyer=${this.web3Service.getAccount()}`)
      .pipe(
        map((tickets: any[]) => {
          return tickets.map(ticket => {
            return new TicketEntity({
              id: ticket.id,
              buyer: {
                name: "Marc Baqué"
              },
              seller: {
                name: ticket.Seller.name
              },
              products: ticket.products.map(product => {
                return new ProductEntity({
                  id: product.Product.product_id,
                  name: product.Product.name,
                  price: product.Product.price,
                  count: product.amount
                })
              }),
              date: new Date(ticket.timestamp)
            })
          })
        })
      )
  }

  public updateTicket(ticket: TicketEntity) {
    const body = {
      hash: ticket.getHash(),
      tx_hash: "0x2d695003e941EA33354a10A69F4ca11da869871b",
      buyer: this.web3Service.getAccount()
    }

    return this.http.put(`${environment.apiUrl}/tickets/${ticket.id}`, body);
  }
}
