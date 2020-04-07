import { Injectable } from '@angular/core';
import { Web3Service } from 'src/app/core/web3/web3.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import TransactionEntity from './transaction/transaction.entity';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    public web3Service: Web3Service
  ) { }

  public getBalance() {
    return this.web3Service.getBalance();
  }

  public getTransactionList() {
    return of([
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
      new TransactionEntity({
        id: 1,
        products: [
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          },
          {
            id: 1,
            name: "Colacao",
            price: 1.23,
            count: 1
          }
        ],
        seller: {
          name: "Bonpreu"
        },
        total: 12.21,
        currency: '€',
        date: new Date()
      }),
    ]).pipe(
      delay(500)
    )
  }
}
