import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CreateMediumComponent} from "./components/create-medium/create-medium.component";
import {EditMediumComponent} from "./components/edit-medium/edit-medium.component";
import {CreateTypeComponent} from "./components/create-type/create-type.component";
import {EditTypeComponent} from "./components/edit-type/edit-type.component";
import { ModalComponent } from './components/modal/modal.component';
import { TypeOverviewComponent } from './components/type-overview/type-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'medium-overview', component: HomeComponent },
  { path: 'create-medium', component: CreateMediumComponent },
  { path: 'type-overview', component: TypeOverviewComponent },
  { path: 'create-type', component: CreateTypeComponent },
  { path: 'edit-medium/:id', component: EditMediumComponent },
  { path: 'edit-type/:id', component: EditTypeComponent },
  { path: 'modal/:id', component: ModalComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
