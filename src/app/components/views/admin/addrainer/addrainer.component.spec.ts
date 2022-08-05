import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrainerComponent } from './addrainer.component';

describe('AddrainerComponent', () => {
  let component: AddrainerComponent;
  let fixture: ComponentFixture<AddrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
