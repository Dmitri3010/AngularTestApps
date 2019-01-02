import {Component, Injectable} from '@angular/core';
import {ItemsService} from './items.service';
import {List} from './List';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemsService]
})

export class HomeComponent  {

  listname = (localStorage.getItem('name'));
  constructor(private itemservice: ItemsService) {
  }

  items: {}[] = [];

  addItem(text: string, price: number, count: number) {
    this.itemservice.addItem(text, price, count);
  }


  DeleteItem(item) {
    this.itemservice.DeleteItem(item);
  }

  ngOnInit() {
    this.items = this.itemservice.getData();
  }

}


