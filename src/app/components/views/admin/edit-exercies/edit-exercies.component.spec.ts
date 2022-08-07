import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExerciesComponent } from './edit-exercies.component';

describe('EditExerciesComponent', () => {
  let component: EditExerciesComponent;
  let fixture: ComponentFixture<EditExerciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExerciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExerciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
