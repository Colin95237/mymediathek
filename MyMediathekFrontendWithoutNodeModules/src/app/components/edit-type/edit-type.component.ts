import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Type } from '../../interfaces/Type';
import { TypeService } from '../../services/type.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICONS_ARRAY } from '../../../../public/icons';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrl: './edit-type.component.css',
})
export class EditTypeComponent {
  iconNames: string[] = ICONS_ARRAY;
  selectedIcon: string|undefined;
  typeForm: FormGroup;
  typeId: number | undefined;
  type: Type | undefined;

  constructor(
    private fb: FormBuilder,
    private typeService: TypeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.typeForm = this.fb.group({
      id: [this.typeId],
      name: ['', Validators.required],
      icon: [],
    });
  }

  ngOnInit(): void {
    this.typeId = +this.route.snapshot.paramMap.get('id')!;
    this.typeService.getTypeById(this.typeId).subscribe((data: Type) => {
      this.type = data;
      this.selectedIcon = data.icon;
      this.typeForm.patchValue(this.type);
    });
  }

  selectIcon(iconName: string) {
    this.selectedIcon = iconName;
    this.typeForm.patchValue({ icon: iconName });
  }

  onSubmit(): void {
    if (this.typeForm.valid) {
      // let editedName: string = this.typeForm.controls['name'].value;

      // const editedType: Type = {
      //   id: +this.route.snapshot.paramMap.get('id')!,
      //   name: editedName,
      // };

      this.typeService.updateType(this.typeForm.value).subscribe(() => {
        console.log('Der Typ wurde erfolgreich aktualisiert');
        this.router.navigate(['/type-overview']);
      });
    }
  }
}
