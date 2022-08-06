import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-colories',
  templateUrl: './food-colories.component.html',
  styleUrls: ['./food-colories.component.css']
})
export class FoodColoriesComponent implements OnInit {
  foods:any;
foodTotalCalories:number=0;
p: number = 1;
  constructor(private foodService:FoodService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.showAllFoods();
  }

  @Output()
  enterSearchValue:string='';
  searchTextchange:EventEmitter<string>=new EventEmitter<string>();
  // onSearchTextChange (){
  //   this.searchTextchange.emit(this.enterSearchValue);
  //   console.log(this.enterSearchValue);
  // }

  // onSearchTextChange (searchValue:string){
  //   this.enterSearchValue=searchValue;
  //   console.log(this.enterSearchValue);
  // }




  // fiterCategory(event:any){
  //   let value=event.target.value;
  //       //  console.log(value);
  //       if (value===''  ){
  //         // this.showproducts()
  //       }else{
  //           console.log(value);
  //     //  this.getProductsCategory(value);
  //       }

  // }

   // show all products function
   showAllFoods(){
    this.foods=this.foodService.listFood().subscribe(data=>{
       this.foods=data;
       console.log(this.foods);
    },(err)=>{
      console.log(err);
    })
  }





  fiterCategory(event:any){
     this.enterSearchValue=event.target.value;
         console.log( this.enterSearchValue);
      //   if (value===''  ){
      //     // this.showproducts()
      //   }else{
      //       console.log(value);
      // //  this.getProductsCategory(value);
      //   }

  }


  // counte total colories of food
  updateFoodCalories(foodCalories:number , itemCount:any){
   this.foodTotalCalories+= (foodCalories*itemCount);


  }

}
