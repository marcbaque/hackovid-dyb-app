import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Web3Service } from './core/web3/web3.service';
import { Router } from '@angular/router';

import 'cupertino-pane';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private web3Service: Web3Service,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    translate: TranslateService
  ) {
    this.initializeApp();

    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang());
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    if (!this.web3Service.getAccount()) {
      this.router.navigate(['/signup']);
    } else {
      //this.router.navigate(['/home']);
      this.router.navigate(['/signup']);
    }
  }
}
