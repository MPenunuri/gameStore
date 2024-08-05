import { Component } from '@angular/core';
import { GamesDataService } from '../../core/services/games-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.scss',
})
export class AddGameComponent {
  registerForm: FormGroup;
  constructor(
    private dataService: GamesDataService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.email]],
      releaseDate: ['', Validators.required],
      rating: ['', Validators.required],
      downloads: ['', Validators.required],
      comingSoon: [false],
    });
  }

  onSubmit() {
    const formValue = this.registerForm.value;
    const transformedValue = {
      ...formValue,
      releaseDate: new Date(formValue.releaseDate),
      rating: formValue.rating ? Number(formValue.rating) : null,
      downloads: formValue.downloads ? Number(formValue.downloads) : null,
    };

    this.dataService.addGame(transformedValue);
  }
}
