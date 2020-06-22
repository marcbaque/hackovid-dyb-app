import { Injectable } from '@angular/core';
import { Web3Service } from 'src/app/core/web3/web3.service';
import { of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/internal/operators';
import TransactionEntity from './transaction/transaction.entity';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import TicketEntity from 'src/app/core/entities/ticket.entity';
import ProductEntity from 'src/app/core/entities/product.entity';
import { tick } from '@angular/core/testing';
import { EnchainteService } from 'src/app/core/web3/enchainte.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    public http: HttpClient,
    public web3Service: Web3Service,
    public enchainteService: EnchainteService
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

  public payTicket(ticket: TicketEntity) {
    let txReceipt;
    return this.web3Service.prepareTransfer(ticket.seller.id, parseFloat(ticket.total))
      .pipe(
        switchMap(receipt => {
          console.log(receipt)
          txReceipt = receipt;

          ticket.buyer = {
            id: this.web3Service.getAccount()
          };
          ticket.transactionHash = receipt.transactionHash;
          return this.updateTicket(ticket);
        }),
        switchMap(() => {
          return this.web3Service.transfer(txReceipt);
        }),
        switchMap(() => {
          return this.web3Service.waitTransaction(txReceipt.transactionHash);
        }),
        switchMap(() => {
          return this.enchainteService.writeTicket(ticket)
        })
      );
  }

  public updateTicket(ticket: TicketEntity) {
    const body = {
      hash: ticket.getHash(),
      tx_hash: ticket.transactionHash,
      buyer: ticket.buyer ? ticket.buyer.id : null
    }

    return this.http.put(`${environment.apiUrl}/tickets/${ticket.id}`, body);
  }
}
