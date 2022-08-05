import { Component, OnInit ,NgZone} from '@angular/core';
import{SingleworkoutService} from '../../services/singleworkout.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ExerciesService } from 'src/app/services/exercies.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {
  exerciesId:any;
  exercise:any;
  imagepath:any="http://localhost:8000/assets/";
  constructor(private SingleworkoutService:SingleworkoutService,
    public formbuider:FormBuilder,
    private router:Router,
    private activatrouter:ActivatedRoute,
    private ngZone:NgZone,
    private exerciesService:ExerciesService) {

      this.exerciesId=this.activatrouter.snapshot.paramMap.get('id');
      this.exerciesService.getSingleExercies(this.exerciesId).subscribe(res=>{
        this.exercise=res;
      console.log( this.exercise)
     })
     }

  ngOnInit(): void {
  }

}
