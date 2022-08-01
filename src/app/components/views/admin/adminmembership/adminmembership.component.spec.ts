import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmembershipComponent } from './adminmembership.component';

describe('AdminmembershipComponent', () => {
  let component: AdminmembershipComponent;
  let fixture: ComponentFixture<AdminmembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmembershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
