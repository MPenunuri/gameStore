import { Component } from '@angular/core';
import { GamesDataService } from '../../core/services/games-data.service';
import { IGame } from '../../models/game.model';

@Component({
  selector: 'app-most-downloaded',
  templateUrl: './most-downloaded.component.html',
  styleUrl: './most-downloaded.component.scss',
})
export class MostDownloadedComponent {
  games: IGame[] = [];
  constructor(private dataService: GamesDataService) {
    this.games = this.dataService.getGames().filter((i) => i.downloads > 100);
  }
}
