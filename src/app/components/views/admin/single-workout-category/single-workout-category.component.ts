import { Component, OnInit } from '@angular/core';
import{SingleworkoutService}from '../../../../services/singleworkout.service';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-single-workout-category',
  templateUrl: './single-workout-category.component.html',
  styleUrls: ['./single-workout-category.component.css']
})
export class SingleWorkoutCategoryComponent implements OnInit {
  imagepath:any="http://localhost:8000/assets/"
  Singleworkout:any;
  constructor(private SingleworkoutService:SingleworkoutService,) { }

  ngOnInit(): void {
    this.showsingleWorkout();
  }


  showsingleWorkout(){
    this.Singleworkout=this.SingleworkoutService.listsingleworkout().subscribe(category=>{
       this.Singleworkout=category;
       console.log(this.Singleworkout);
    },(err)=>{
      // console.log(err);
    })
  }





  delete(id:any,i:any){
    console.log(id);
    this.SingleworkoutService.deleteSingleWorkout(id).subscribe(res=>{
      console.log(res);
      this.Singleworkout.splice(i,1);
    })
    this.showsingleWorkout();
 }



}
