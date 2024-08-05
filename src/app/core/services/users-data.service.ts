import { Injectable } from '@angular/core';
import { IUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'Manuel Peñuñuri',
      email: 'penunuri.rmg@gmail.com',
      password: '123',
    },
  ];

  constructor() {}

  getUsers(): IUser[] {
    return this.users;
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }
}
