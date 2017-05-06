import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Users } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userPage = Users

  constructor(public navCtrl: NavController) {

  }

  goToUsers() {
    this.navCtrl.push(Users).catch(function (error) {
      console.log(error);
    }
    );
  }
}
