import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeService } from '../../services/type.service';
import { Router } from '@angular/router';
import { ICONS_ARRAY } from '../../../../public/icons';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrl: './create-type.component.css',
})
export class CreateTypeComponent {
  iconNames:string[] = ICONS_ARRAY;
  typeForm: FormGroup;
  selectedIcon:string = 'bi bi-question-diamond';

  constructor(
    private fb: FormBuilder,
    private typeService: TypeService,
    private router: Router
  ) {
    this.typeForm = this.fb.group({
      name: ['', Validators.required],
      icon: [''],
    });
  }

  selectIcon(iconName:string){
    this.selectedIcon = iconName;
    this.typeForm.patchValue({icon: iconName})
  }

  onSubmit(): void {
    if (this.typeForm.valid) {
      this.typeService.addType(this.typeForm.value).subscribe(() => {
        console.log('Der neue Medientyp wurde erfolgreich erstellt');
        this.router.navigate(['/medium-overview']);
      });
    }
  }
}
