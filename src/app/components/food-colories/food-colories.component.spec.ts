import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodColoriesComponent } from './food-colories.component';

describe('FoodColoriesComponent', () => {
  let component: FoodColoriesComponent;
  let fixture: ComponentFixture<FoodColoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodColoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodColoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
