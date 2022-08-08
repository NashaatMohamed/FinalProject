import { Component, OnInit, NgZone } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { SingleworkoutService } from '../../../../services/singleworkout.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { singleworkout } from 'src/app/services/singleworkout';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-sigle-workout-category',
  templateUrl: './add-sigle-workout-category.component.html',
  styleUrls: ['./add-sigle-workout-category.component.css']
})
export class AddSigleWorkoutCategoryComponent implements OnInit {

  selectedFile=null;
  url= "./assets/not.jpg";

  singleWorkoutForm:FormGroup;
food =new singleworkout() ;
  constructor(private  http:HttpClient ,  public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private singleWorkoutservice:SingleworkoutService) {
      this.singleWorkoutForm=this.formBiulder.group({
        name:[''],
        level:[''],
        body_place:[''],
        image:[''],
        fileSource: [null],

      })
     }


     onFileChange(event:any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.singleWorkoutForm.patchValue({
          fileSource: file
        });
      }
    }

  ngOnInit(): void {
  }

  onSubmit():any{
    // const formData:any = new FormData();
    // formData.append("image",this.singleWorkoutForm.controls['image'].value);

    const formData :any= new FormData();
    formData.append('image', this.singleWorkoutForm.get('fileSource')?.value);
    formData.append('body_place', this.singleWorkoutForm.get('body_place')?.value);
    formData.append('name', this.singleWorkoutForm.get('name')?.value);
    formData.append('level', this.singleWorkoutForm.get('level')?.value);

    this.singleWorkoutservice.addSingleWorkout(formData)
    .subscribe((res)=>{
      console.log('class added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/singleWorkout'))
    },(err)=>{
      console.log(err)
    })
}}
