import { Injectable } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private favoriteQuotes: Quotes[] = [];
  constructor() { }
  addQuoteToFavorite = (quote: Quotes) => {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }
}
