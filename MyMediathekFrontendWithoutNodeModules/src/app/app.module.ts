import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TypeDetailsComponent } from './components/type-details/type-details.component';
import { TypeOverviewComponent } from './components/type-overview/type-overview.component';
import { CreateMediumComponent } from './components/create-medium/create-medium.component';
import { MediumOverviewComponent } from './components/medium-overview/medium-overview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditMediumComponent } from './components/edit-medium/edit-medium.component';
import { CreateTypeComponent } from './components/create-type/create-type.component';
import { EditTypeComponent } from './components/edit-type/edit-type.component';
import { NgOptimizedImage } from '@angular/common';
import { MediumDetailsComponent } from './components/medium-details/medium-details.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbdRatingEvents } from './components/rating-events/rating-events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypeDetailsComponent,
    TypeOverviewComponent,
    CreateMediumComponent,
    MediumOverviewComponent,
    NavbarComponent,
    EditMediumComponent,
    CreateTypeComponent,
    EditTypeComponent,
    ModalComponent,
    FilterComponent,
    FooterComponent,
    MediumDetailsComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage,
    NgbRatingModule,
    NgbdRatingEvents,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
