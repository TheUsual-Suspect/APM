import { NgModule } from '@angular/core';
import { PlayersListComponent } from './players-list.component';
import { PlayerDetailComponent } from './player-detail.component';
import { RouterModule } from '@angular/router';
import { PlayerDetailGuard } from './player-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PlayersListComponent,
    PlayerDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path:'fplPlayers', component: PlayersListComponent },
      { path:'fplPlayerDetail/:id', 
        canActivate: [PlayerDetailGuard],
        component: PlayerDetailComponent },
    ]),
    SharedModule
  ]
})
export class PlayerModule { }
