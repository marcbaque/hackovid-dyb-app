import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/core/web3/web3.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(
    public router: Router,
    public web3Service: Web3Service
  ) { }

  ngOnInit() {
  }

  public dismiss() {
    if (this.web3Service.getAccount()) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/signup']);
    }
  }

}
