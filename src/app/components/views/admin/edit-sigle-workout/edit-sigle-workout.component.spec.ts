import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSigleWorkoutComponent } from './edit-sigle-workout.component';

describe('EditSigleWorkoutComponent', () => {
  let component: EditSigleWorkoutComponent;
  let fixture: ComponentFixture<EditSigleWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSigleWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSigleWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
