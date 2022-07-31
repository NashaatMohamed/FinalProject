import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next2DaysClassesComponent } from './next2-days-classes.component';

describe('Next2DaysClassesComponent', () => {
  let component: Next2DaysClassesComponent;
  let fixture: ComponentFixture<Next2DaysClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Next2DaysClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Next2DaysClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
