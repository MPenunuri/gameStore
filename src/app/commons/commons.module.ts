import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TextInputComponent } from './components/form/text-input/text-input.component';
import { EmailInputComponent } from './components/form/email-input/email-input.component';
import { PasswordInputComponent } from './components/form/password-input/password-input.component';
import { TextAreaComponent } from './components/form/text-area/text-area.component';
import { DateInputComponent } from './components/form/date-input/date-input.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { MenuComponent } from './components/header/nav-bar/menu/menu.component';
import { MenuItemComponent } from './components/header/nav-bar/menu-item/menu-item.component';
import { DropdownMenuComponent } from './components/header/nav-bar/menu-item/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    FormComponent,
    TextInputComponent,
    EmailInputComponent,
    PasswordInputComponent,
    TextAreaComponent,
    DateInputComponent,
    ButtonComponent,
    TitleComponent,
    SubtitleComponent,
    HeaderComponent,
    NavBarComponent,
    MenuComponent,
    MenuItemComponent,
    DropdownMenuComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormComponent,
    TextInputComponent,
    EmailInputComponent,
    PasswordInputComponent,
    TextAreaComponent,
    DateInputComponent,
    ButtonComponent,
    TitleComponent,
    SubtitleComponent,
    HeaderComponent,
    NavBarComponent,
    MenuComponent,
    MenuItemComponent,
    DropdownMenuComponent,
  ],
})
export class CommonsModule {}
