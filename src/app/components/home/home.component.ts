import { Component, OnInit ,NgZone} from '@angular/core';
import { Trainer } from 'src/app/Models/trainer';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Trainers:Trainer[] = [];
  products:any;
  imagepath:any="http://localhost:8000/assets/";
  constructor(private crudTrainerService:CrudTrainerService,
    private productservice:ProductService,
    public formbuider:FormBuilder,
    private router:Router,
    private ngZone:NgZone
    ) { }

  // constructor(private lgin:LoginService) {
  //   // console.log(this.lgin.login('aj'));
  // }
  showproducts(){
    this.products=this.productservice.listproducts().subscribe(product=>{
       this.products=product;
       console.log(this.products);
    },(err)=>{
      // console.log(err);
    });
  }

  ngOnInit(): void {
    this.crudTrainerService.getTrainers().subscribe( res=>{
      console.log(res)
      this.Trainers = res;
    });
    this.showproducts();
  }

  favoriteProducts:any[]=[];

  add(prd:any){

    if('favorite' in localStorage){
      this.favoriteProducts = JSON.parse(localStorage.getItem('favorite')!);
      let exist =this.favoriteProducts.find(item => item.id == prd.id);
      if(exist){
        alert('product is already exists in favorite')
      }else{
      this.favoriteProducts.push(prd);
    localStorage.setItem('favorite',JSON.stringify(this.favoriteProducts));
      }

    }else{
      this.favoriteProducts.push(prd);
      localStorage.setItem('favorite',JSON.stringify(this.favoriteProducts));


    }

  }

  cartProducts:any[]=[];

  addcart(prd:any){

    if('shoppingcart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('shoppingcart')!);
      let exist =this.cartProducts.find(item => item.id == prd.id);
      if(exist){
        alert('product is already exists in shopingcart')
      }else{
      this.cartProducts.push(prd);
    localStorage.setItem('shoppingcart',JSON.stringify(this.cartProducts));
      }

    }else{
      this.cartProducts.push(prd);
      localStorage.setItem('shoppingcart',JSON.stringify(this.cartProducts));


    }

  }


}
