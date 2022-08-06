import { Component, OnInit ,NgZone} from '@angular/core';
import{SingleworkoutService} from '../../services/singleworkout.service';
import { Router ,ActivatedRoute} from '@angular/router';
// import { FormGroup,FormBuilder } from '@angular/forms';
import { ExerciesService } from 'src/app/services/exercies.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {
getid:any;
imagepath:any="http://localhost:8000/assets/";

// updateform:FormGroup;
SingleworkoutDitails:any;
constructor(private SingleworkoutService:SingleworkoutService,
    public formbuider:FormBuilder,
    private router:Router,
    private activatrouter:ActivatedRoute,
    private ngZone:NgZone,
    private exerciesService:ExerciesService) {

      this.getid=this.activatrouter.snapshot.paramMap.get('id');
      this.exerciesService.getSingallexercise(this.getid).subscribe(res=>{
        this.SingleworkoutDitails=res;
      console.log( this.SingleworkoutDitails)   })
     }

  ngOnInit(): void {
  }

}
