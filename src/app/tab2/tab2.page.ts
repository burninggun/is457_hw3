import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';
import quotes from 'src/assets/data/quotes';
import { AlertController } from '@ionic/angular';
import { QuotesService } from '../service/quotes.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  quoteCollection: {
    category: string,
    quotes: Quotes[]
  }[];

  constructor(
    private alertController: AlertController,
    private quoteService: QuotesService,
  ) { }

  async onAddToFavorite(SelectedQuote: Quotes) {
    const alert = await this.alertController.create({
      header: 'Add Quote',
      subHeader: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.quoteService.addQuoteToFavorite(SelectedQuote),
        },
        {
          text: 'No',
          handler: () => console.log('cancelled'),
        }
      ]
    })
    await alert.present()
  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
