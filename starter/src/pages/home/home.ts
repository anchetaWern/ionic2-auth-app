import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup-page/signup-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }


  login(type) {

    let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 5000);

  }

  signup() {
    this.email = '';
    this.password = '';
    this.navCtrl.push(SignupPage);
  }

}
