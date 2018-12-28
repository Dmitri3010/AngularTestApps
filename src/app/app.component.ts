import { Component } from '@angular/core';

class Item {
  purchase: string;
  done: boolean;
  price: number;
  count: number;

  constructor(purchase: string, price: number, count: number) {

    this.purchase = purchase;
    this.price = price;
    this.count = count;
    this.done = false;

  }
}

@Component({
  selector: 'app-purchase',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items: Item[] =
    [
      { purchase: 'Хлеб', done: false, price: 15.9, count: 1 },
      { purchase: 'Масло', done: false, price: 60, count: 10 },
      { purchase: 'Картофель', done: true, price: 22.6, count: 14 },
      { purchase: 'Сыр', done: false, price: 310 , count: 11},
      { purchase: 'Саня', done: false, price: 30 , count: 1}
    ];
  addItem(text: string, price: number, count: number): void {

    if (!text || text.trim() === '' || !price ) {
      return;
    }
    this.items.push(new Item(text, price, count));
  }
}
