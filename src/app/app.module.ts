import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerDetailGuard } from './Players/player-detail.guard';
import { WelcomeComponent } from './home/welcome.component';
import { PlayerModule } from './Players/player.module';
import { UserSettingsFormModule } from './user-settings-form/user-settings-form.module';
import { ClubComponent } from './club/club.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'welcome', component:WelcomeComponent },
      { path:'', redirectTo:'welcome', pathMatch:'full' },
      { path:'**', redirectTo:'welcome', pathMatch:'full' }
    ]),
    PlayerModule,
    UserSettingsFormModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
