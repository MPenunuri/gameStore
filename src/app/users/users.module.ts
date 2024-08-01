import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, CommonsModule, UsersRoutingModule],
})
export class UsersModule {}
