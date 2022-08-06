import { Component, OnInit ,NgZone} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import{FoodService}from '../../../../services/food.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { throwError } from 'rxjs';
import { Foods } from 'src/app/services/food';

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


    //  onSubmit(){
    //   this.foodservice.addFood(this.food).subscribe(res=>{
    //      console.log(res)
    //   })
    // }


  // uploadFile(event : Event){
  //   const file = (event.target as HTMLInputElement)?.files?.[0];
  //   this.foodForm.patchValue({
  //     image : file
  //   });
  // }

  // submitForm(){
  //   const formData:any = new FormData();
  //   formData.append("image",this.foodForm.controls['image'].value);
  // }

  // onSubmit():any{
  //   // const formData:any = new FormData();
  //   // formData.append("image",this.foodForm.controls['image'].value);

  //   const formData :any= new FormData();
  //   formData.append('name', this.foodForm.get('name')?.value);
  //   formData.append('Carbohydrates', this.foodForm.get('Carbohydrates')?.value);
  //   formData.append('Calories', this.foodForm.get('Calories')?.value);


  //   this.foodservice.addFood(formData)
  //   .subscribe((res)=>{
  //     console.log('class added successfully')
  //     console.log(res);
  //     this.ngZone.run(()=> this.router.navigateByUrl('/admin/products'))
  //   },(err)=>{
  //     console.log(err)
  //   })
  // }


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
