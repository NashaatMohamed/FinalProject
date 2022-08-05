import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciesComponent } from './exercies.component';

describe('ExerciesComponent', () => {
  let component: ExerciesComponent;
  let fixture: ComponentFixture<ExerciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
