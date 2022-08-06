import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWorkoutCategoryComponent } from './single-workout-category.component';

describe('SingleWorkoutCategoryComponent', () => {
  let component: SingleWorkoutCategoryComponent;
  let fixture: ComponentFixture<SingleWorkoutCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWorkoutCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleWorkoutCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
