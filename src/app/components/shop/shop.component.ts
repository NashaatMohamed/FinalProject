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

}
