import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
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
      image:[''],
      fileSource: [null],
     })
  }
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.memberForm.patchValue({
        fileSource: file
      });
    }
  }
  ngOnInit(): void {
  }
  // submitForm(){
  //   const formData:any = new FormData();
  //   formData.append("image",this.bookForm.controls['image'].value);
  // }

  onSubmit():any{
    const formData :any= new FormData();
    formData.append('image', this.memberForm.get('fileSource')?.value);
    formData.append('price', this.memberForm.get('price')?.value);
    formData.append('type', this.memberForm.get('type')?.value);
    this.membershipsService.addmember(formData)
    .subscribe((res)=>{
      console.log('member added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/Adminmembership'))
    },(err)=>{
      console.log(err)
    })
  }

}
