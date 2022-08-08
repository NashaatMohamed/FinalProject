import { Component, OnInit ,NgZone} from '@angular/core';
import{SingleworkoutService} from '../../services/singleworkout.service';
import { Router ,ActivatedRoute} from '@angular/router';
// import { FormGroup,FormBuilder } from '@angular/forms';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { ExerciesService } from 'src/app/services/exercies.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {
  exerciesId:any;
  exercise:any;
  index:any=10;
minuts:any=0;
second:any=0;
formControl=new FormControl;
 clear:any;

  // timeForm:FormGroup;
// conter:number;
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
    this.startTimer( );
  }




  startTimer( ) {
       console.log(this.second)
    console.log(this.minuts)

if (this.second>0 &&this.minuts>0||this.second>0 && this.minuts==0){
this.countdown();
}


  }

// countdown(){
//   if (this.second>=0 ){
//       setInterval(()=>{
// if (this.second==0 && this.minuts>0) {
//            this.second=this.second+60
//            this.minuts=this.minuts-1;


//   }

//     this.second=this.second-1
//     console.log(this.second)
//   },1000)
//   }else {
//     console.log('time is off')

//   }

// }

  c:number=0;
 countdown(){

  if (this.second>=0  ){
   this.c=setInterval(()=>{
    this.second=this.second-1
    this.countcondition();
    console.log(this.second)
  },100)
  }
}
countcondition(){

  if (this.second==0 && this.minuts>0) {
           this.second=this.second+60
           this.minuts=this.minuts-1;


  }if(this.second==0 && this.minuts==0){
    console.log('fnish');
    clearInterval(this.c)
    this.playaudio();
  }
}

playaudio(){
  let audio =new Audio();
  audio.src="../../assets/alarm-clock-short-6402.mp3";
  audio.load();
  audio.play();
}
}


