import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})

export class SettingsComponent {
  ClearList(): void {
    localStorage.clear();
  }
}
