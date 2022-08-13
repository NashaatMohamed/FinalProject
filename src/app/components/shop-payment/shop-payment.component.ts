import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-payment',
  templateUrl: './shop-payment.component.html',
  styleUrls: ['./shop-payment.component.css']
})
export class ShopPaymentComponent implements OnInit {
  paymentHandler:any = null;
  constructor() { }

  ngOnInit(): void {

    this.invokeStripe();
  }
  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LPt1HHqRgQUoXwugQh1UIh1kBMdPbOcbTcApe27Y8slCZspelwvVHN1XOKrWmKjOhnzIX8F84fG4CS4CrIfpO2C00GJRw6oTY',
      locale: 'auto',
    token: function (stripeToken: any) {
      console.log({stripeToken})
      alert('Payment make Successfully:)');
    }
    });
    paymentHandler.open({
      // name: '',
      description: 'Payment Sir :)',
      amount: localStorage.getItem('x')
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LPt1HHqRgQUoXwugQh1UIh1kBMdPbOcbTcApe27Y8slCZspelwvVHN1XOKrWmKjOhnzIX8F84fG4CS4CrIfpO2C00GJRw6oTY',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
            this.router.navigate(['home']);
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

}
