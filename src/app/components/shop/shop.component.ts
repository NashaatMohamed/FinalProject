import { Component, OnInit ,NgZone} from '@angular/core';
import{SingleworkoutService} from '../../services/singleworkout.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { leadingComment } from '@angular/compiler';

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
    public formbuider:FormBuilder,
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



}
