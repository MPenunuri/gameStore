import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  login(email: string, password: string): void {
    const users = this.dataService.getUsers();
    const user = users.find((i) => i.email === email);
    if (!user) {
      return alert('Email no encontrado');
    }
    if (user.password !== password) {
      return alert('Contraseña incorrecta');
    }
    this.isAuthenticated = true;
    this.router.navigate(['/games']);
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
