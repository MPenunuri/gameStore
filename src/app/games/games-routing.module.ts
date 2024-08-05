import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AddGameComponent } from './add-game/add-game.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'popular', component: MostPopularComponent },
      { path: 'most-downloaded', component: MostDownloadedComponent },
      { path: 'coming-soon', component: ComingSoonComponent },
      { path: 'add-game', component: AddGameComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'popular' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
