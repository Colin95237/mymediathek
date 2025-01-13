import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumOverviewComponent } from './medium-overview.component';

describe('MediumOverviewComponent', () => {
  let component: MediumOverviewComponent;
  let fixture: ComponentFixture<MediumOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediumOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
