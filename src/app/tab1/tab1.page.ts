import { Component } from '@angular/core';
import { QuotesService } from '../service/quotes.service';
import { Quotes } from 'src/assets/data/quotes.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  quotes: Quotes[];
  constructor( private quoteservice: QuotesService) {}
  ionViewWillEnter() {
    this.quotes = this.quoteservice.getFavoriteQuotes();
    console.log(this.quotes)
  }
  onRemoveQuoteFromFavorite(quote: Quotes){
    this.quoteservice.removeQuoteFromFavorite(quote)
  }
}
