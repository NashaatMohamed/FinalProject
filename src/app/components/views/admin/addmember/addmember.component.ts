import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MembershipsService } from 'src/app/services/memberships.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  memberForm: FormGroup;
  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private membershipsService: MembershipsService
  ) { 
     this.memberForm = this.formBiulder.group({
      type: [''],
      price: [''],
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
    this.membershipsService.addmember(this.memberForm.value)
    .subscribe((res)=>{
      console.log('member added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/Adminmembership'))
    },(err)=>{
      console.log(err)
    })
  }

}
