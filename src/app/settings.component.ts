import { Component } from '@angular/core';
import {List} from './List';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./app.component.css']
})

export class SettingsComponent {
  nameList = List.name;
  ClearList(): void {
    localStorage.clear();
  }
   AddName(name: string): void {
    this.nameList = name;
    localStorage.setItem('name', name);
}
}
