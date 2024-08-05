import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TextInputComponent } from './components/form/text-input/text-input.component';
import { EmailInputComponent } from './components/form/email-input/email-input.component';
import { PasswordInputComponent } from './components/form/password-input/password-input.component';
import { TextAreaComponent } from './components/form/text-area/text-area.component';
import { DateInputComponent } from './components/form/date-input/date-input.component';
import { ButtonComponent } from './components/button/button.component';
import { ConfirmPasswordInputComponent } from './components/form/confirm-password-input/confirm-password-input.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxInputComponent } from './components/form/checkbox-input/checkbox-input.component';
import { NumberInputComponent } from './components/form/number-input/number-input.component';
import { StarRatingComponent } from './components/card/star-rating/star-rating.component';

@NgModule({
  declarations: [
    FormComponent,
    TextInputComponent,
    EmailInputComponent,
    PasswordInputComponent,
    TextAreaComponent,
    DateInputComponent,
    CheckboxInputComponent,
    NumberInputComponent,
    ButtonComponent,
    ConfirmPasswordInputComponent,
    CardComponent,
    StarRatingComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormComponent,
    TextInputComponent,
    EmailInputComponent,
    PasswordInputComponent,
    TextAreaComponent,
    DateInputComponent,
    CheckboxInputComponent,
    NumberInputComponent,
    ButtonComponent,
    ConfirmPasswordInputComponent,
    CardComponent,
  ],
})
export class CommonsModule {}
