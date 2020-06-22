import { Injectable } from '@angular/core';
import { Hash, EnchainteClient } from '@enchainte/sdk';
import { Observable, from } from 'rxjs';
import TicketEntity from '../entities/ticket.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnchainteService {

  private sdk: EnchainteClient

  constructor() {
    this.sdk = new EnchainteClient(environment.apiKey);
  }

  public writeTicket(ticket: TicketEntity): Observable<any> {
    return from(
      this.sdk.write(Hash.fromString(ticket.getHash()))
    );    
  }
}
