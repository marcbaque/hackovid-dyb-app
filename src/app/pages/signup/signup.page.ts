import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/core/web3/web3.service';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public step = 0;

  public formData = {
    email: '',
    publicKey: '',
    privateKey: ''
  }

  constructor(
    public router: Router,
    public signupService: SignupService
  ) { }

  ngOnInit() { }

  public next() {
    this.step = 1;

    this.formData.publicKey = this.signupService.getNewKey().address;
    this.formData.privateKey = this.signupService.getNewKey().privateKey;
  }

  public signup() {
    console.log(this.formData)

    this.signupService.signupUser(this.formData.email, this.formData.publicKey)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/home']);
      })
  }
}
