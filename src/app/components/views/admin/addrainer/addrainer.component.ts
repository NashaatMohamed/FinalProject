import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-addrainer',
  templateUrl: './addrainer.component.html',
  styleUrls: ['./addrainer.component.css']
})
export class AddrainerComponent implements OnInit {
  memberForm: FormGroup;
  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudTrainerService: CrudTrainerService
  ) { 
     this.memberForm = this.formBiulder.group({
      price: [''],
      phone: [''],
      gender:[''],
      decription:['']
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
    // formData.append("image",this.bookForm.controls['im/age'].value);
    this.crudTrainerService.addtrainer(this.memberForm.value)
    .subscribe((res)=>{
      console.log('trainer added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/Adminmembership'))
    },(err)=>{
      console.log(err)
    })
  }

}
