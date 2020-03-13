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
  getFavoriteQuotes = () => {
    return this.favoriteQuotes
  }
  removeQuoteFromFavorite = (quote: Quotes) => {
    for(let i = 0; i<this.favoriteQuotes.length; i++){
      if(this.favoriteQuotes[i].id === quote.id ){
        this.favoriteQuotes.splice(i,1);
      }
    }
  }
}
