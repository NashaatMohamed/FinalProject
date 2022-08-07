import { Component, OnInit, NgZone } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { SingleworkoutService } from '../../../../services/singleworkout.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit-sigle-workout',
  templateUrl: './edit-sigle-workout.component.html',
  styleUrls: ['./edit-sigle-workout.component.css']
})
export class EditSigleWorkoutComponent implements OnInit {

  getId:any;
  updateForm: FormGroup;
  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private singleWorkoutService: SingleworkoutService
  )  { this.getId = this.activateRout.snapshot.paramMap.get('id');
  this.singleWorkoutService.getSingleWorkout(this.getId).subscribe(res=>{
    console.log(res)
      this.updateForm.setValue({
        name:res ['name'],
        level: res['level'],
        body_place:res ['body_place'],
         fileSource:res ['fileSource'],
      })

  });

  this.updateForm = this.formBiulder.group({
    name: [''],
    level: [''],
    body_place: [''],



  })}

  ngOnInit(): void {
  }



 


  onUpdate(): any {
    this.singleWorkoutService.updateSingleWorkout(this.getId,this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/admin/singleWorkout'))
      }, (err) => {
        console.log(err)
      })
  }


}
