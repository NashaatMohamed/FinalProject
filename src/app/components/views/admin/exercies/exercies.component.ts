import { Component, OnInit ,NgZone} from '@angular/core';
import{ExerciesService} from '../../../../services/exercies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercies',
  templateUrl: './exercies.component.html',
  styleUrls: ['./exercies.component.css']
})
export class ExerciesComponent implements OnInit {

//   exercise:any;
  constructor(private exerciseService:ExerciesService,
    private router:Router,) { }
//     showExercise(){
//       this.exercise=this.exerciseService.getSingleExercies().subscribe(res=>{
//          this.exercise=res;
//          console.log(this.exercise);
//       },(err)=>{
//         // console.log(err);
//       })
//     }
 ngOnInit(): void {
//     this.showExercise();
  }

//   delete(id:any,i:any){
//     console.log(id);
//     this.exerciseService.(id).subscribe(res=>{
//       console.log(res);
//       this.exercise.splice(i,1);
//     })
//  }

}
