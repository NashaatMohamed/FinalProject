import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit ,NgZone} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // product:FormGroup;
  products:any;

  constructor(private productservice:ProductService,
    public formbuider:FormBuilder,
    private router:Router,
    private ngZone:NgZone) {


  }

  showproducts(){
    this.products=this.productservice.listproducts().subscribe(product=>{
       this.products=product;
       console.log(this.products);
    },(err)=>{
      // console.log(err);
    })
  }

  ngOnInit(): void {
    this.showproducts();
  }

  searchText:string='';

  onsearchTextEntered(searchValue: string){
    this.searchText = searchValue;
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
