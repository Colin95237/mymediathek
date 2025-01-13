import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Medium} from "../../interfaces/Medium";
import {ActivatedRoute, Router} from "@angular/router";
import {MediumService} from "../../services/medium.service";
import {Type} from "../../interfaces/Type";
import {TypeService} from "../../services/type.service";

@Component({
  selector: 'app-edit-medium',
  templateUrl: './edit-medium.component.html',
  styleUrl: './edit-medium.component.css'
})
export class EditMediumComponent {
  mediumForm: FormGroup;
  medium: Medium | undefined;
  typeList: Type[] | undefined;
  tabNumber: number = 1;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private mediumService: MediumService,
    private router: Router,
    private typeService: TypeService
  ) {
    this.mediumForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      type: ['', Validators.required],
      author: [''],
      description: [''],
      link: [''],
      imageLink: [''],
      publishedDate: [''],
      priority: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      wasRead: [false],
      rating: ['', [Validators.min(0), Validators.max(5)]],
      comment: ['']
    });
    const id =  this.route.snapshot.paramMap.get('id')!;
    if (id){
      this.mediumService.getMediumById(parseInt(id)).subscribe(
        (medium)=>{
          this.mediumForm.patchValue(medium)}
      )
    }
    this.typeService.getAllTypes().subscribe(
      (types)=> this.typeList = types
    )
  }

  compareTypes(type1: Type, type2: Type): boolean {
    if (!type1 || !type2) {
      return false;
    }
    return type1.id === type2.id;
  }


  onSubmit(): void {
    this.mediumService.updateMedium(this.mediumForm.value).subscribe(
      ()=> this.router.navigate(['/medium-overview'])
    )

  }

  onRatingChange(newRating: number): void {
    this.mediumForm.controls['rating'].setValue(newRating);
  }

  jumpOnClick(tabNumber: number) {
    this.tabNumber = tabNumber;
  }
}
