import { Component } from '@angular/core';
import { GamesDataService } from '../../core/services/games-data.service';
import { IGame } from '../../models/game.model';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {
  games: IGame[] = [];
  constructor(private dataService: GamesDataService) {
    this.games = this.dataService
      .getGames()
      .filter((i) => i.comingSoon === true);
  }
}
