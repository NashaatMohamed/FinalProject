import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPaymentComponent } from './shop-payment.component';

describe('ShopPaymentComponent', () => {
  let component: ShopPaymentComponent;
  let fixture: ComponentFixture<ShopPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
