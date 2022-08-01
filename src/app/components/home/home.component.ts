import { Component, OnInit ,NgZone} from '@angular/core';
import { Trainer } from 'src/app/Models/trainer';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Trainers:Trainer[] = [];
  products:any;
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



}
