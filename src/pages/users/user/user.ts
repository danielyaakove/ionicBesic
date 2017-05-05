import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'user-page',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {
    name: string

    ngOnInit() {
        this.name = this.navParams.data.userName;
    }
    constructor(
        private navParams: NavParams,
        private navController: NavController
    ) {

    }

    onGoBack() {
        //this.navController.pop();
        this.navController.popToRoot();
    }
}