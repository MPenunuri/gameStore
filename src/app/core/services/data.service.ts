import { Injectable } from '@angular/core';
import { IUser } from '../../models/user.model';
import { IGame } from '../../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'Manuel Peñuñuri',
      email: 'penunuri.rmg@gmail.com',
      password: '123456',
    },
  ];

  private games: IGame[] = [
    {
      id: 1,
      name: 'The Legend of Zelda: Breath of the Wild',
      description: 'An open-world adventure game set in the land of Hyrule.',
      date: new Date('2017-03-03'),
    },
    {
      id: 2,
      name: 'Super Mario Odyssey',
      description:
        'A 3D platformer where Mario travels across various kingdoms to save Princess Peach.',
      date: new Date('2017-10-27'),
    },
    {
      id: 3,
      name: 'Minecraft',
      description:
        'A sandbox game where players can build and explore their own worlds.',
      date: new Date('2011-11-18'),
    },
    {
      id: 4,
      name: 'The Witcher 3: Wild Hunt',
      description:
        'An action RPG where players control Geralt of Rivia, a monster hunter on a quest to find his adopted daughter.',
      date: new Date('2015-05-19'),
    },
    {
      id: 5,
      name: 'Red Dead Redemption 2',
      description:
        'An open-world western game that follows the story of Arthur Morgan, a member of the Van der Linde gang.',
      date: new Date('2018-10-26'),
    },
    {
      id: 6,
      name: 'Final Fantasy VII Remake',
      description:
        'A reimagining of the classic RPG with modern graphics and gameplay.',
      date: new Date('2020-04-10'),
    },
    {
      id: 7,
      name: 'Among Us',
      description:
        'A multiplayer game where players work together to complete tasks on a spaceship while trying to identify impostors.',
      date: new Date('2018-06-15'),
    },
    {
      id: 8,
      name: 'Hades',
      description:
        'A rogue-like dungeon crawler where players attempt to escape the Underworld.',
      date: new Date('2020-09-17'),
    },
    {
      id: 9,
      name: 'Cyberpunk 2077',
      description:
        'An open-world RPG set in a dystopian future where players control V, a mercenary with customizable cybernetic enhancements.',
      date: new Date('2020-12-10'),
    },
    {
      id: 10,
      name: 'Animal Crossing: New Horizons',
      description:
        'A life simulation game where players develop a deserted island into a community of anthropomorphic animals.',
      date: new Date('2020-03-20'),
    },
  ];

  constructor() {}

  getUsers(): IUser[] {
    return this.users;
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }

  getGames(): IGame[] {
    return this.games;
  }

  addGame(game: IGame): void {
    this.games.push(game);
  }
}
