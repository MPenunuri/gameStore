import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { AllGamesComponent } from './all-games/all-games.component';


@NgModule({
  declarations: [
    RecentlyAddedComponent,
    AllGamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
