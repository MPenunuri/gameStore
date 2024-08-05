import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  imageUrl: string = '../../../../../assets/menu-outline.svg';
  showing: boolean = false;

  constructor(private service: AuthService) {}

  onClick() {
    this.showing = !this.showing;
  }

  logout() {
    this.service.logout();
  }
}
