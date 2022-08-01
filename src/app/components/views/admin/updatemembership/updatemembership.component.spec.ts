import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemembershipComponent } from './updatemembership.component';

describe('UpdatemembershipComponent', () => {
  let component: UpdatemembershipComponent;
  let fixture: ComponentFixture<UpdatemembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemembershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
