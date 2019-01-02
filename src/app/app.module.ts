import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings.component';
import { HomeComponent } from './home.component';


const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent},
  { path: 'home', component: HomeComponent},
  {
  path: '**',
    redirectTo: 'home',
  pathMatch: 'full'
 }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, SettingsComponent, HomeComponent ],
  bootstrap:    [ AppComponent, HomeComponent, SettingsComponent ],
  providers: [  { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }
  ]
})
export class AppModule { }

export function getLocalStorage() {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}
