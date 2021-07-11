import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{fPLName}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/fplPlayers']">Player List</a></li>
      <li><a class='nav-link' [routerLink]="['/userSettings']">User Settings</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent
{
  fPLName: string = "Fantasy Premier League";
}