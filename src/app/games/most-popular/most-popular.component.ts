import { Component } from '@angular/core';
import { GamesDataService } from '../../core/services/games-data.service';
import { IGame } from '../../models/game.model';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.scss',
})
export class MostPopularComponent {
  games: IGame[] = [];
  constructor(private dataService: GamesDataService) {
    this.games = this.dataService.getGames().filter((i) => i.rating > 4);
  }
}
