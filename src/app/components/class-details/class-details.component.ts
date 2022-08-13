import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/Models/member';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {
  paymentHandler:any = null;
  getId:any;
  getClass:any;
  myname:any;
  memberForm: FormGroup;
  classs:Member[] = [];


  constructor(private classCrudServicesService:ClassCrudServicesService,
    private router: Router,
    private activateRout: ActivatedRoute,
    public formBiulder:FormBuilder,
    private ngZone:NgZone,

    ) { 

    // this.getId = this.activateRout.snapshot.paramMap.get('id');
    // this.membershipsService.getMemebreship(this.getId).subscribe(res=>{
    //   console.log(res)
    // });

    this.activateRout.paramMap.subscribe((params)=>{
      this.getId = params.get("id")
    })

    this.classCrudServicesService.getclass(this.getId).subscribe((data:any[])=>{
      this.getClass = data;
      console.log(this.getClass);
    })

    this.memberForm = this.formBiulder.group({
      name:[''],
      email: [''],
      session_id:this.getId,
      user_id: '5'
     })


  }  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit():any{
    this.classCrudServicesService.addmember(this.memberForm.value)
    .subscribe((res)=>{
      console.log('member added successfully')
      console.log(res.id);
      this.ngZone.run(()=> this.router.navigate(['membership',this.getId]))
    },(err)=>{
      console.log(err)
    })
  }
 
}




