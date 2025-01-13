import { MediumService } from './../../services/medium.service';
import { Medium } from './../../interfaces/Medium';
import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {


  @Input()
  selectedMedium?:Medium;

  constructor(private router: Router, private mediumService:MediumService) {}

  onClick(medium:Medium){
    this.selectedMedium=medium;
  }

  editMedium() {
    this.router.navigateByUrl(`/edit-medium/${this.selectedMedium!.id}`).then(() => {
    });
  }

  onDelte(id:number){
    this.mediumService.deleteMedium(id).subscribe(()=>window.location.reload());
  }
}
