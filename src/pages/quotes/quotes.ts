import { QuotesService } from '../../services/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Category } from '../../data/category.interface';
import { Quote } from '../../data/quote.interface'

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes implements OnInit {
  quotesCategory: Category;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  private alertCtrl: AlertController,
  private quotesService:QuotesService) {
  }

  ngOnInit() {
    this.quotesCategory = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Quotes');
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

}
