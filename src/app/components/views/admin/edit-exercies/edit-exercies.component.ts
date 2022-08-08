import { Component, OnInit, NgZone } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ExerciesService } from '../../../../services/exercies.service';
import { SingleworkoutService } from '../../../../services/singleworkout.service';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Foods } from 'src/app/services/food';
@Component({
  selector: 'app-edit-exercies',
  templateUrl: './edit-exercies.component.html',
  styleUrls: ['./edit-exercies.component.css']
})
export class EditExerciesComponent implements OnInit {

  Singleworkout:any;

  getId:any;
  control=new FormControl;
  updateForm: FormGroup;
  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private exerciesService: ExerciesService,
    private SingleworkoutService:SingleworkoutService
  ) {
    this.getId = this.activateRout.snapshot.paramMap.get('id');
    this.exerciesService.getSingleExercies(this.getId).subscribe(res=>{
      console.log(res)
        this.updateForm.setValue({
          name:res ['name'],
          single_workout_caregorie_id: res['single_workout_caregorie_id'],
          discription:res ['discription'],
          rest:res ['rest'],
          reps:res ['reps'],
          sets:res ['sets'],
          equipment:res ['equipment'],
          image:res ['image'],

        })

    });

    this.updateForm = this.formBiulder.group({
      name:[''],
      single_workout_caregorie_id:this.control,
      discription:[''],
      rest:[''],
      reps:[''],
      sets:[''],
      equipment:[''],
      image:['']
    })
   }






  onUpdate(): any {
    this.exerciesService.updateExercies(this.getId,this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/admin/exercies'))
      }, (err) => {
        console.log(err)
      })
  }




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





}
