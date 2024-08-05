import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  stars: boolean[] = Array(5).fill(false);
  filledStars: number = 0;

  ngOnChanges(): void {
    this.filledStars = Math.round(this.rating * 2) / 2;
  }
}
