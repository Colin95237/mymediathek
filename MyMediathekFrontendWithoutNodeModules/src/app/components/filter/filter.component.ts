import { Medium } from '../../interfaces/Medium';
import { TypeService } from '../../services/type.service';
import { Type } from './../../interfaces/Type';
import { Component, EventEmitter, input, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { MediumService } from '../../services/medium.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  listTypes:Type[] = [];
  list?:Medium[];
  originalList!:Medium[];

  selectedSorting?:string;

  filterFormGroup:FormGroup;

  constructor(private typeService:TypeService, private mediumService:MediumService, private fb:FormBuilder){
    this.typeService.getAllTypes().subscribe(res=>this.listTypes=res);
    this.mediumService.getAllMedia().subscribe(res=>{
      this.originalList=res
      this.filter();
    });

    this.filterFormGroup=fb.group(
      {
        search:[],
        filterType:['Alle'],
        filterDone:['Nicht Fertig'],
        sort:['']
      });
  }


  @Output()
  filteredListEvent:EventEmitter<Medium[]> = new EventEmitter();

  filter(){
    this.list=this.originalList;
    const searchInput = this.filterFormGroup.controls['search'].value;
    const filterTypeInput = this.filterFormGroup.controls['filterType'].value;
    const filterDoneInput = this.filterFormGroup.controls['filterDone'].value;
    const sortInput = this.filterFormGroup.controls['sort'].value;
    if (searchInput!==""&&searchInput!==null){
      this.search(searchInput);
    }
    if (filterTypeInput&&filterTypeInput!=="Alle"){
      this.filterByType(filterTypeInput);
    }
    if (filterDoneInput&&filterDoneInput!=="Alle"){
      this.filterByDone(filterDoneInput);
    }
    if (sortInput){
      this.sort(sortInput);
    }

    this.filteredListEvent.emit(this.list);
  }

  search(input:string){
    this.list = this.list!.filter(medium=>medium.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
  }

  filterByType(type:string){
    this.list = this.list!.filter(medium=>medium.type.name==type);
  }

  filterByDone(done:string){
    switch (done){
      case "Fertig": {
        this.list = this.list!.filter(medium => medium.wasRead);
        break;
      }
      case "Nicht Fertig": {
        this.list = this.list!.filter(medium => !medium.wasRead);
        break;
      }

    }
  }

  sort(input:string){
    switch (input) {
      case "alphabetical": {
        this.list= this.list!.sort((medium1, medium2)=> {
          if(medium1.name < medium2.name){
            return -1;
          }
          if(medium1.name > medium2.name){
            return 1;
          }
          return 0;
        });
        break;
      }
      case "sortRatingAscending": {
        this.list= this.list!.sort((medium1, medium2)=> {
          if (!medium1.rating) {
            return 1;
            } else if (!medium2.rating){
              return -1;
            } else {
              return medium1.rating - medium2.rating;
            }
        });
        break;
      }
      case "sortRatingDescending": {
        this.list= this.list!.sort((medium1, medium2)=> {
          if (!medium1.rating) {
            return 1;
            } else if (!medium2.rating){
              return -1;
            } else {
              return medium2.rating - medium1.rating;
            }
        });
        break;
      }
      case "sortPriorityAscending": {
        this.list= this.list!.sort((medium1, medium2)=> {
          if (!medium1.priority) {
            return 1;
            } else if (!medium2.priority){
              return -1;
            } else {
              return medium1.priority - medium2.priority;
            }
        });
        break;
      }
      case "sortPriorityDescending": {
        this.list= this.list!.sort((medium1, medium2)=> {
          if (!medium1.priority) {
            return 1;
            } else if (!medium2.priority){
              return -1;
            } else {
              return medium2.priority - medium1.priority;
            }
        });
        break;
      }
      case "sortReleaseDateAscending": {
        this.list= this.list!.sort((medium1, medium2)=> {
          if (!medium1.publishedDate) {
            return 1;
          } else if (!medium2.publishedDate){
            return -1;
          } else {
              const date1 = new Date(medium1.publishedDate);
              const date2 = new Date(medium2.publishedDate);
              return date1.getTime() - date2.getTime();
            }
        });
        break;
      }
      case "sortReleaseDateDescending": {
        this.list= this.list!.sort((medium1, medium2)=> {
          if (!medium1.publishedDate) {
            return 1;
          } else if (!medium2.publishedDate){
            return -1;
          } else {
              const date1 = new Date(medium1.publishedDate);
              const date2 = new Date(medium2.publishedDate);
              return date2.getTime() - date1.getTime();
            }
        });
        break;
      }

    }
  }

}
