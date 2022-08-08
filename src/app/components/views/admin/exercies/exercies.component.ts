import { Component, OnInit ,NgZone} from '@angular/core';
import{ExerciesService} from '../../../../services/exercies.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exercies',
  templateUrl: './exercies.component.html',
  styleUrls: ['./exercies.component.css']
})
export class ExerciesComponent implements OnInit {
  exercieses:any;
  imagepath:any="http://localhost:8000/assets/";
//   exercise:any;
  constructor(private exerciseService:ExerciesService,
    private router:Router,) { }



    showExercises(){
      this.exercieses=this.exerciseService.getAllExercise().subscribe(res=>{
         this.exercieses=res;
         console.log(this.exercieses);
      },(err)=>{
        // console.log(err);
      })
    }

    ngOnInit(): void {
      this.showExercises();
     }



  delete(id:any,i:any){
    console.log(id);
    this.exerciseService.deleteExercies(id).subscribe(res=>{
      console.log(res);
      this.exercieses.splice(i,1);

    })
this.showExercises();
  } 

}
