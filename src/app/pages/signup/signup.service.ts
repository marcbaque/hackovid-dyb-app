import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, mergeMap, switchMap } from 'rxjs/internal/operators';
import { Web3Service } from 'src/app/core/web3/web3.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    public http: HttpClient,
    public web3Service: Web3Service
  ) { }

  public signupUser(name, email, nif) {
    return this.web3Service.registerUser()
      .pipe(
        switchMap(res => {
          const body = {
            public_key: res,
            name: name,
            email: email,
            nif: nif
          }
          return this.http.post(`${environment.apiUrl}/buyer`, body)
        })
      )
    
  }
}
