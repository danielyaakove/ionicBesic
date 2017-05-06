import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from '../../data/category.interface';
import quotes from '../../data/quotes';
import { Quotes } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit {
  quoteCollection: Array<Category>;
  quotesPage = Quotes;

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
