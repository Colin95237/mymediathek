import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-rating-events',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './rating-events.component.html',
  styles: `
			i {
				position: relative;
				display: inline-block;
				font-size: 2rem;
				padding-right: 0.1rem;
				color: #d3d3d3;
			}

			.filled {
				color: orange;
				overflow: hidden;
				position: absolute;
				top: 0;
				left: 0;
			}
		`,
})
export class NgbdRatingEvents {
  @Input()
  rating: number|null = null;
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  onRatingChange(newRating: number): void {
    this.rating = newRating;
    this.ratingChange.emit(this.rating);
  }

  hovered: number = 0;
  readonly: boolean = false;
}
