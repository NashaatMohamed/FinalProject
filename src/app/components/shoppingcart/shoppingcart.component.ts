import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  paymentHandler:any = null;
  myname:any;
  favoriteProducts:any[]=[];
  total:number =0||1;
  quantity:number=1;
  favorite:number=0;
  constructor() { }

  ngOnInit(): void {
    this.getFavoriteProducts();
    this.invokeStripe();


  }

  // ngOnInit(): void {

  // }
  initializePayment(amount: number) {
    // amount = 
    console.log(amount);
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LPt1HHqRgQUoXwugQh1UIh1kBMdPbOcbTcApe27Y8slCZspelwvVHN1XOKrWmKjOhnzIX8F84fG4CS4CrIfpO2C00GJRw6oTY',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('payment is Successfully:)');
      }
    });
      // this.myname = localStorage.getItem('price');
    paymentHandler.open({
      name: '',
      description: 'Payment Sir :)',
      amount: '10$',
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


  getFavoriteProducts(){

    if('shoppingcart' in localStorage){
      this.favoriteProducts = JSON.parse(localStorage.getItem('shoppingcart')!);
  }
  console.log( this.favoriteProducts);
  this.getTotal()
}



getTotal(){
  this.total=0;

  for(let i in this.favoriteProducts ){
    this.total += this.favoriteProducts[i].price * (this.favoriteProducts[i].quantity)||0;
  }
  let x = this.total>0?this.total:1;
  return x;
}



getmax(index:number){
  this.favoriteProducts[index].quantity++;
  this.getTotal();
  localStorage.setItem('shoppingcart',JSON.stringify(this.favoriteProducts));
}
getmin(index:number){
  if(this.quantity>0){
  Math.abs(this.favoriteProducts[index].quantity--);
  this.getTotal();
  localStorage.setItem('shoppingcart',JSON.stringify(this.favoriteProducts));


  }
}

deleteItem(index:number){
  this.favoriteProducts.splice(index,1);
  this.getTotal();
  localStorage.setItem('shoppingcart',JSON.stringify(this.favoriteProducts));

}

clearProducts(){
  this.favoriteProducts = [];
  this.getTotal();
  localStorage.setItem('shoppingcart',JSON.stringify(this.favoriteProducts));

}


}
