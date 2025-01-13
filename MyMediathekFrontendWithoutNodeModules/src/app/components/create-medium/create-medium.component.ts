import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MediumService } from '../../services/medium.service';
import { Router } from '@angular/router';
import { TypeService } from '../../services/type.service';
import { Type } from '../../interfaces/Type';
@Component({
  selector: 'app-create-medium',
  templateUrl: './create-medium.component.html',
  styleUrl: './create-medium.component.css',
})
export class CreateMediumComponent {
  mediumForm: FormGroup;
  typeList: Type[] | undefined;
  tabNumber: number = 1;

  constructor(
    private fb: FormBuilder,
    private mediumService: MediumService,
    private typeService: TypeService,
    private router: Router
  ) {
    this.mediumForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      author: [''],
      description: [''],
      link: [''],
      imageLink: [''],
      publishedDate: [''],
      priority: [
        null,
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      wasRead: [false],
      rating: [null, [Validators.min(0), Validators.max(5)]],
      comment: [''],
    });

    this.typeService
      .getAllTypes()
      .subscribe((types) => (this.typeList = types));
  }

  onRatingChange(newRating: number): void {
    this.mediumForm.controls['rating'].setValue(newRating);
  }

  onSubmit(): void {
    this.mediumService
      .addMedium(this.mediumForm.value)
      .subscribe(() => this.router.navigate(['medium-overview']));
  }

  jumpOnClick(tabNumber: number) {
    this.tabNumber = tabNumber;
  }
}
