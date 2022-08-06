import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciesComponent } from './add-exercies.component';

describe('AddExerciesComponent', () => {
  let component: AddExerciesComponent;
  let fixture: ComponentFixture<AddExerciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExerciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExerciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
