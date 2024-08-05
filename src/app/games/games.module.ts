import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { CommonsModule } from '../commons/commons.module';
import { LayoutComponent } from './layout/layout.component';
import { AddGameComponent } from './add-game/add-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MenuComponent } from './layout/navbar/menu/menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AddGameComponent,
    MostPopularComponent,
    MostDownloadedComponent,
    ComingSoonComponent,
    NavbarComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    CommonsModule,
    GamesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class GamesModule {}
