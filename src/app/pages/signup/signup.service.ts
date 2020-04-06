import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/internal/operators';
import { Web3Service } from 'src/app/core/web3/web3.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    public web3Service: Web3Service
  ) { }

  public signupUser(name, email, nif, password) {
    return of(true)
      .pipe(
        delay(300),
        mergeMap(() => {
          return this.web3Service.registerUser();
        })
      )
  }
}
