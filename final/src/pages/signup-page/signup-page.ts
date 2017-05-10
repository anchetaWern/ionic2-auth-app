import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, UserDetails, IDetailedError } from '@ionic/cloud-angular';

@Component({
  selector: 'page-signup-page',
  templateUrl: 'signup-page.html',
})
export class SignupPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public auth: Auth, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  register() {

    let loader = this.loadingCtrl.create({
      content: "Signing you up..."
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 5000);

    let details: UserDetails = {
      'email': this.email,
      'password': this.password
    };

    this.auth.signup(details).then((res) => {

      loader.dismiss();
      let alert = this.alertCtrl.create({
        title: "You're registered!",
        subTitle: 'You can now login.',
        buttons: ['OK']
      });
      alert.present();

    }, (err: IDetailedError<string[]>) => {

      loader.dismiss();

      var error_message = '';
      for (let e of err.details) {
        if (e === 'conflict_email') {
          error_message += "Email already exists. <br />";
        } else {
          error_message += "Invalid credentials. <br />";
        }
      }

      let alert = this.alertCtrl.create({
        title: error_message,
        subTitle: 'Please try again.',
        buttons: ['OK']
      });
      alert.present();

    });

  }

}
