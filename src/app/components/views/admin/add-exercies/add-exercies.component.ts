import { Component, OnInit ,NgZone} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import{ExerciesService}from '../../../../services/exercies.service';
import{SingleworkoutService}from '../../../../services/singleworkout.service';

import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-exercies',
  templateUrl: './add-exercies.component.html',
  styleUrls: ['./add-exercies.component.css']
})
export class AddExerciesComponent implements OnInit {
  Singleworkout:any;
  selectedFile=null;
  url= "./assets/not.jpg";
  control=new FormControl;

  exerciesForm:FormGroup;

  constructor(private  http:HttpClient ,  public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private exerciesService:ExerciesService,
    private SingleworkoutService:SingleworkoutService) {
      this.exerciesForm=this.formBiulder.group({
        name:[''],
        single:this.control,
        discription:[''],
        image:[''],
        fileSource: [null],
        rest:[''],
        reps:[''],
        sets:[''],
        equipment:[''],
      })
     }






   onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.exerciesForm.patchValue({
        fileSource: file
      });
    }
  }

  onSubmit():any{
    // const formData:any = new FormData();
    // formData.append("image",this.exerciesForm.controls['image'].value);

    const formData :any= new FormData();
    formData.append('image', this.exerciesForm.get('fileSource')?.value);
    formData.append('single_workout_caregorie_id', this.exerciesForm.get('single')?.value);
    formData.append('name', this.exerciesForm.get('name')?.value);
    formData.append('rest', this.exerciesForm.get('rest')?.value);
    formData.append('reps', this.exerciesForm.get('reps')?.value);
    formData.append('sets', this.exerciesForm.get('sets')?.value);
    formData.append('equipment', this.exerciesForm.get('equipment')?.value);
    formData.append('discription', this.exerciesForm.get('discription')?.value);



    this.exerciesService.addExercies(formData)
    .subscribe((res)=>{
      console.log('class added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/exercies'))
    },(err)=>{
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
