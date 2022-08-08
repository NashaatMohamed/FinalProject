import { Component, OnInit ,NgZone} from '@angular/core';
import{ProductService} from '../../../../services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:FormGroup;
// productDirectorypath:any='http://127.0.0.1:8000/public/assets/images/products';
products:any;
imagepath:any="http://localhost:8000/assets/";

  constructor(private productservice:ProductService,
              public formbuider:FormBuilder,
              private router:Router,
              private ngZone:NgZone
              ) {
          this.product=this.formbuider.group({
            name:[''],
            image:[''],
            details:[''],
            amount:[''],
            price:['']
            // productDirectorypath:['']

          })
    // this.productservice.listproducts().subscribe(data=>this.products=data);
    // console.log(this.products);
   }



 onsubmit():any{
  this.productservice.addproducts(this.product.value).subscribe(()=>{
    console.log('added successfully');
    this.ngZone.run(()=>this.router.navigateByUrl('/products'))
  },(err)=>{
    // console.log(err)
  });
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


///////////////////
delete(id:any,i:any){
   console.log(id);
   this.productservice.deleteProduct(id).subscribe(res=>{
     console.log(res);
     this.products.splice(i,1);
   })
   this.showproducts();

}

}
