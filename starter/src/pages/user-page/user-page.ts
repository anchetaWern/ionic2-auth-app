import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-user-page',
  templateUrl: 'user-page.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public platform: Platform) {

    this.platform.registerBackButtonAction(() => {
      this.logoutUser.call(this);
    }, 1);

  }

  logoutUser() {
    this.navCtrl.pop();
  }

  logout() {
    this.logoutUser.call(this);
  }

}
