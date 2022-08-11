import { Product } from './../../services/product';
import { Component, OnInit ,NgZone} from '@angular/core';
import{SingleworkoutService} from '../../services/singleworkout.service';
import { Router ,ActivatedRoute} from '@angular/router';
// import { FormGroup,FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { leadingComment } from '@angular/compiler';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories:any;
  // selectedCatId:number=0;
  imagepath:any="http://localhost:8000/assets/";

  products:any;
  constructor(private SingleworkoutService:SingleworkoutService,
    private formbuilde:FormBuilder,
    private router:Router,
    private activatrouter:ActivatedRoute,
    private ngZone:NgZone,
    private categoryService:CategoryService,
    private productservice:ProductService) { }

    



    allcat(){
      this.categories=this.categoryService.allCategories().subscribe(category=>{
         this.categories=category;
         console.log(this.categories);
      },(err)=>{
        // console.log(err);
      })
    }







    // show all products function
    showproducts(){
      this.products=this.productservice.listproducts().subscribe(product=>{
         this.products=product;
         console.log(this.products);
      },(err)=>{
        // console.log(err);
      })
    }


  fiterCategory(event:any){
      let value=event.target.value;
      if (value==0){
        this.showproducts()
      }else{
          console.log(value);
     this.getProductsCategory(value);
      }


    }


getProductsCategory(id:any){
  this.productservice.getproductByCategory(id).subscribe(res=>{
    this.products=res;

  })

}




    ngOnInit(): void {
      this.showproducts();
      this.allcat();
     }



  // product:FormGroup;
  // products:any;

  // constructor(
  //   private productservice:ProductService,
  //   public formbuider:FormBuilder,
  //   private router:Router,
  //   private ngZone:NgZone) {


  // }

  // showproducts(){
  //   this.products=this.productservice.listproducts().subscribe(product=>{
  //      this.products=product;
  //      console.log(this.products);
  //   },(err)=>{
  //     // console.log(err);
  //   })
  // }

  // ngOnInit(): void {
  //   this.showproducts();
  // }

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


  detailProducts:any[]=[];

  detailcart(prd:any){


      localStorage.setItem('detail',JSON.stringify([]));

    if('detail' in localStorage){
      this.detailProducts = JSON.parse(localStorage.getItem('detail')!);
      let exist =this.detailProducts.find(item => item.id == prd.id);
      if(exist){
        // alert('product is already exists in shopingcart')
      }else{
      this.detailProducts.push(prd);
    localStorage.setItem('detail',JSON.stringify(this.detailProducts));
      }

    }else{
      this.detailProducts.push(prd);
      localStorage.setItem('detail',JSON.stringify(this.detailProducts));
    }


  }


}
