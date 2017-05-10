import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-signup-page',
  templateUrl: 'signup-page.html',
})
export class SignupPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  register() {

    let loader = this.loadingCtrl.create({
      content: "Signing you up..."
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 5000);

  }

}
