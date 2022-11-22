import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedFacultiesComponent } from './experienced-faculties.component';

describe('ExperiencedFacultiesComponent', () => {
  let component: ExperiencedFacultiesComponent;
  let fixture: ComponentFixture<ExperiencedFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencedFacultiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencedFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
