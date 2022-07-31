import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayClassesComponent } from './today-classes.component';

describe('TodayClassesComponent', () => {
  let component: TodayClassesComponent;
  let fixture: ComponentFixture<TodayClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
