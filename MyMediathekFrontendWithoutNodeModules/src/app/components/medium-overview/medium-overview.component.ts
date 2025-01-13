import { Component, Input } from '@angular/core';
import { Medium } from '../../interfaces/Medium';
import { MediumService } from '../../services/medium.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-medium-overview',
  templateUrl: './medium-overview.component.html',
  styleUrl: './medium-overview.component.css'
})
export class MediumOverviewComponent {


  listMedium:Medium[]=[];
  selectedMedium?:Medium;
  isLoaded:boolean=false;

  constructor(private mediumService:MediumService, private fb:FormBuilder){
    mediumService.getAllMedia().subscribe(media => {
      this.listMedium=media;
      this.isLoaded=true;
      this.selectedMedium=this.listMedium[0];

    });
  }

  onClick(medium:Medium){
    this.selectedMedium=medium;
  }

  onFilterList(listMedium:Medium[]){
    this.listMedium=listMedium;

  }

  onDelte(id:number){
    this.mediumService.deleteMedium(id).subscribe(()=>window.location.reload());
  }

  onSort(listMedium:Medium[]){
   this.listMedium=listMedium;
  }

  noWasRead(){
    return this.listMedium.some(medium=>medium.wasRead);
  }

}





