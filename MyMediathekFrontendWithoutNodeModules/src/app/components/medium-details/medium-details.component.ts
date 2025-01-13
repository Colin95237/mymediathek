import {Component, Input} from '@angular/core';
import {Medium} from "../../interfaces/Medium";
import {MediumService} from "../../services/medium.service";

@Component({
  selector: 'app-medium-details',
  templateUrl: './medium-details.component.html',
  styleUrl: './medium-details.component.css'
})
export class MediumDetailsComponent {

  @Input()
  selectedMedium?: Medium;

  starsArray = Array(10).fill(0);


  constructor(private mediumService: MediumService) {
  }

  onWasReadChange(value: boolean): void {
    // Update the selectedMedium's wasRead property
    this.selectedMedium!.wasRead = value;
    this.mediumService.updateMedium(this.selectedMedium!).subscribe(
      (data)=>this.selectedMedium!.wasRead = data.wasRead
    )}


}
