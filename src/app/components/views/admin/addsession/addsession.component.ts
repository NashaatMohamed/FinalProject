import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private classCrudServicesService: ClassCrudServicesService
  ) { 
     this.bookForm = this.formBiulder.group({
       name: [''],
       price: [''],
       Duaration :[''],
       image:null,
       discount:[''],
       Day:[''],
       Time:[''],
       description: [''],
     })
  }
  // uploadFile(event : Event){
  //   const file = (event.target as HTMLInputElement)?.files?.[0];
  //   this.bookForm.patchValue({
  //     image : file
  //   });
  // }

  

  ngOnInit(): void {
  }
  // submitForm(){
  //   const formData:any = new FormData();
  //   formData.append("image",this.bookForm.controls['image'].value);
  // }

  onSubmit():any{
    // const formData:any = new FormData();
    // formData.append("image",this.bookForm.controls['image'].value);
    this.classCrudServicesService.addclass(this.bookForm.value)
    .subscribe((res)=>{
      console.log('class added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/sessions'))
    },(err)=>{
      console.log(err)
    })
  }

}
