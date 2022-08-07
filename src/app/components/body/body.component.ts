import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipsService } from 'src/app/services/memberships.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  paymentHandler:any = null;
  getId:any;
  getmember:any;
  myname:any;



  constructor(private membershipsService:MembershipsService,private router: Router,private activateRout: ActivatedRoute) {

    // this.getId = this.activateRout.snapshot.paramMap.get('id');
    // this.membershipsService.getMemebreship(this.getId).subscribe(res=>{
    //   console.log(res)
    // });

    this.activateRout.paramMap.subscribe((params)=>{
      this.getId = params.get("id")
    })

    this.membershipsService.getMemebreship(this.getId).subscribe((data:any[])=>{
      this.getmember = data;
      console.log(this.getmember);
    })

  }

  ngOnInit(): void {

    this.invokeStripe();
  }
  initializePayment(amount: number) {
    amount = this.getmember['price'];
    console.log(amount);
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LPt1HHqRgQUoXwugQh1UIh1kBMdPbOcbTcApe27Y8slCZspelwvVHN1XOKrWmKjOhnzIX8F84fG4CS4CrIfpO2C00GJRw6oTY',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('payment is Successfully:)');
      }
    });
      this.myname = this.getmember['type'] || localStorage.getItem('price');
    paymentHandler.open({
      name: this.myname,
      description: 'ادفع يلا',
      amount: amount
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
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }
}
