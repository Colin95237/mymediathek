import { Component } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { Type } from '../../interfaces/Type';
import { MediumService } from '../../services/medium.service';
import { Medium } from '../../interfaces/Medium';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-overview',
  templateUrl: './type-overview.component.html',
  styleUrl: './type-overview.component.css',
})
export class TypeOverviewComponent {
  types: Type[] = [];
  clickedType: Type | undefined;

  typeAndNumberOfMedia: { [key: number]: number } = {};

  constructor(
    private typeService: TypeService,
    private mediumService: MediumService,
    private router: Router
  ) {
    typeService.getAllTypes().subscribe((data) => {
      this.types = data;
      this.types.forEach((type) => {
        let media: Medium[];
        let key: number = type.id!;
        this.mediumService.getMediaByTypeId(type.id!).subscribe((data) => {
          media = data;
          this.typeAndNumberOfMedia[key] = media.length;
        });
      });
    });
  }

  showDetails(clickedType: Type): void {
    this.clickedType = clickedType;
  }

  edit(id: number): void {
    event?.stopPropagation();
    this.router.navigate([`/edit-type/${id}`]);
  }

  onClickDelete(id: number): void {
    event?.stopPropagation();
    let existingMedia: Medium[] = [];
    this.mediumService.getMediaByTypeId(id).subscribe((data) => {
      existingMedia = data;
      if (existingMedia.length > 0) {
        alert('Lösche zuerst die Media vom diesen Typ');
      } else {
        this.typeService
          .deleteType(id)
          .subscribe(() =>
            this.typeService
              .getAllTypes()
              .subscribe((data) => (this.types = data))
          );
      }
    });
  }
}
