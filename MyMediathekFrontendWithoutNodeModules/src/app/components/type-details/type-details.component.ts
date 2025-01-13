import { Router } from '@angular/router';
import { Medium } from '../../interfaces/Medium';
import { MediumService } from '../../services/medium.service';
import { Type } from './../../interfaces/Type';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrl: './type-details.component.css',
})
export class TypeDetailsComponent implements OnInit {
  mediaOfType: Medium[] = [];
  @Input()
  typeDetails?: Type;
  @Output()
  typeEvent = new EventEmitter<Type>();
  modalMedium?: Medium;

  constructor(private mediumService: MediumService, private router: Router) {}

  ngOnInit(): void {
    if (this.typeDetails?.id) {
      this.mediumService
        .getMediaByTypeId(this.typeDetails.id)
        .subscribe((data) => (this.mediaOfType = data));
    }
  }

  goBack(): void {
    this.typeDetails = undefined;
    this.typeEvent.emit(this.typeDetails);
  }

  showModal(medium: Medium) {
    this.modalMedium = medium;
  }
  goToNewMedium() {
    this.router.navigate(['/create-medium']);
  }
}
