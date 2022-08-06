import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSigleWorkoutCategoryComponent } from './add-sigle-workout-category.component';

describe('AddSigleWorkoutCategoryComponent', () => {
  let component: AddSigleWorkoutCategoryComponent;
  let fixture: ComponentFixture<AddSigleWorkoutCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSigleWorkoutCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSigleWorkoutCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
