export class Item {
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
