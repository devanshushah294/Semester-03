import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentByIdComponent } from './student-by-id.component';

describe('StudentByIdComponent', () => {
  let component: StudentByIdComponent;
  let fixture: ComponentFixture<StudentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
