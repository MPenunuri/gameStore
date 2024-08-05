import { Component, Input } from '@angular/core';
import { IGame } from '../../../models/game.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  game!: IGame;
  imageUrl = 'assets/controller.svg';
}
