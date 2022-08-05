import { Component, OnInit ,NgZone} from '@angular/core';
import{FoodService} from '../../../../services/food.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
foods:any;
  constructor(private foodService:FoodService,
    private router:Router,) { }
    showFood(){
      this.foods=this.foodService.listFood().subscribe(res=>{
         this.foods=res;
         console.log(this.foods);
      },(err)=>{
        // console.log(err);
      })
    }
  ngOnInit(): void {
    this.showFood();
  }

  delete(id:any,i:any){
    console.log(id);
    this.foodService.deleteFood(id).subscribe(res=>{
      this.foods.splice(i,1);


    })
  this.showFood();

 }


}
