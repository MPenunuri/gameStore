import { Component } from '@angular/core';
import { UsersDataService } from '../../core/services/users-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private dataService: UsersDataService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    });
  }

  addUser(user: { name: string; email: string; password: string }): void {
    const newUser = { id: this.dataService.getUsers().length + 1, ...user };
    this.dataService.addUser(newUser);
  }

  onSubmit() {
    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const pswConfirmation = this.registerForm.value.passwordConfirmation;
    if (password !== pswConfirmation) {
      return alert('Las contraseñas deben coincidir.');
    }
    const user = { name, email, password };
    this.addUser(user);
    this.router.navigate(['/users/login']);
  }
}
