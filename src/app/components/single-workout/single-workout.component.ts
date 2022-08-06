import { Component, OnInit ,NgZone} from '@angular/core';
import{SingleworkoutService} from '../../services/singleworkout.service';
import { Router } from '@angular/router';
// import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-workout',
  templateUrl: './single-workout.component.html',
  styleUrls: ['./single-workout.component.css']
})
export class SingleWorkoutComponent implements OnInit {
  singleworkoutform:FormGroup;
 imagepath:any="http://localhost:8000/assets/"
  Singleworkout:any;
  // productDirectorypath:any='http://127.0.0.1:8000/';


  constructor(private SingleworkoutService:SingleworkoutService,
    public formbuider:FormBuilder,
    private router:Router,
    private ngZone:NgZone) {
         this.singleworkoutform=this.formbuider.group({
           name:[''],
           image:[''],
           level:[''],
           body_place:[''],
         })




    }

    showsingleWorkout(){
      this.Singleworkout=this.SingleworkoutService.listsingleworkout().subscribe(category=>{
         this.Singleworkout=category;
         console.log(this.Singleworkout);
      },(err)=>{
        // console.log(err);
      })
    }




    ngOnInit(): void {
      this.showsingleWorkout();
     }

     onsubmit():any{
      this.SingleworkoutService.addSingleWorkout(this.singleworkoutform.value).subscribe(()=>{
        console.log('added successfully');
        this.ngZone.run(()=>this.router.navigateByUrl('/single-workout'))
      },(err)=>{
        // console.log(err)
      });
     }


     categorydetailsbyi(categryid:number){

     }

     delete(id:any,i:any){
      this.SingleworkoutService.deleteSingleWorkout(id).subscribe(res=>{
      console.log(id);
        console.log(res);
        this.Singleworkout.splice(i,1);
      })
   }
}
