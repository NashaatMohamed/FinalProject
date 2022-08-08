import { Component, OnInit ,NgZone} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import{FoodService}from '../../../../services/food.service';
import { throwError } from 'rxjs';
import { Foods } from 'src/app/services/food';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  selectedFile=null;
  url= "./assets/not.jpg";

  foodForm:FormGroup;
food =new Foods() ;
  constructor(private  http:HttpClient ,  public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private foodservice:FoodService) {
      this.foodForm=this.formBiulder.group({
        name:[''],
        Calories:[''],
        Carbohydrates:['']


      })
     }


    

 


  onSubmit():any{
    this.foodservice.addFood(this.foodForm.value)
    .subscribe(()=>{
      console.log('Data added successfully')
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/foods'))
    },(err)=>{
      console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
