import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [RecentlyAddedComponent, AllGamesComponent],
  imports: [CommonModule, CommonsModule, GamesRoutingModule],
})
export class GamesModule {}
