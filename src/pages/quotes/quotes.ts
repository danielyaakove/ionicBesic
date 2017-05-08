import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from '../../data/category.interface';
import { Quote } from '../../data/quote.interface'

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes implements OnInit {
  quotesCategory: Category;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.quotesCategory = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Quotes');
  }

  onAddToFavorite(quote:Quote){

  }

}
