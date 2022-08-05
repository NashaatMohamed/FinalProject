import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmymemberComponent } from './allmymember.component';

describe('AllmymemberComponent', () => {
  let component: AllmymemberComponent;
  let fixture: ComponentFixture<AllmymemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmymemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllmymemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
