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

  public formData = {
    name: '',
    email: '',
    nif: ''
  }

  constructor(
    public router: Router,
    public signupService: SignupService
  ) { }

  ngOnInit() { }

  public signup() {
    console.log(this.formData)

    this.signupService.signupUser(this.formData.name, this.formData.email, this.formData.nif)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/home']);
      })
  }
}
