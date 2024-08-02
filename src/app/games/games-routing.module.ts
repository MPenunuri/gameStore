import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './all-games/all-games.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';

const routes: Routes = [
  { path: 'all-games', component: AllGamesComponent },
  { path: 'recently-added', component: RecentlyAddedComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'all-games' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
