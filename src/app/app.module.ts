import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './comons/components/button/button.component';
import { MenuComponent } from './common/components/header/nav-bar/menu/menu.component';
import { MenuItemComponent } from './common/components/header/nav-bar/menu-item/menu-item.component';
import { DropdownMenuComponent } from './common/components/header/nav-bar/menu-item/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MenuComponent,
    MenuItemComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
