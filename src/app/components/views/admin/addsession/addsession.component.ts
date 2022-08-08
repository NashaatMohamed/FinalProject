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
       image:[''],
       fileSource: [null],
       discount:[''],
       Day:[''],
       Time:[''],
       description: [''],
     })
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.bookForm.patchValue({
        fileSource: file
      });
    }
  }

  ngOnInit(): void {
  }
  

  onSubmit():any{

    const formData :any= new FormData();
    formData.append('image', this.bookForm.get('fileSource')?.value);
    formData.append('price', this.bookForm.get('price')?.value);
    formData.append('Duaration', this.bookForm.get('Duaration')?.value);
    formData.append('discount', this.bookForm.get('discount')?.value);
    formData.append('name', this.bookForm.get('name')?.value);
    formData.append('Day', this.bookForm.get('Day')?.value);
    formData.append('Time', this.bookForm.get('Time')?.value);
    formData.append('description', this.bookForm.get('description')?.value);
    this.classCrudServicesService.addclass(formData)
    .subscribe((res)=>{
      console.log('class added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/sessions'))
    },(err)=>{
      console.log(err)
    })
  }

}
