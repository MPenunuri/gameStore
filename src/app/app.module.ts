import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';
import { UsersDataService } from './core/services/users-data.service';
import { GamesDataService } from './core/services/games-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, UsersDataService, GamesDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
