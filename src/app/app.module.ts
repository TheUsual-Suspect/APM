import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './Players/players-list.component';
import { SelectedByPercentageComponent } from './shared/selectedBy.component';
//import { from } from 'rxjs';
import { PlayerDetailComponent } from './Players/player-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    SelectedByPercentageComponent,
    PlayerDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'fplPlayers', component: PlayersListComponent },
      { path:'fplPlayerDetail/:id', component: PlayerDetailComponent },
      { path:'welcome', component:WelcomeComponent },
      { path:'', redirectTo:'welcome', pathMatch:'full' },
      { path:'**', redirectTo:'welcome', pathMatch:'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
