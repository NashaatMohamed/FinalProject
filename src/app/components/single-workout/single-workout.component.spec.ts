import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWorkoutComponent } from './single-workout.component';

describe('SingleWorkoutComponent', () => {
  let component: SingleWorkoutComponent;
  let fixture: ComponentFixture<SingleWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
