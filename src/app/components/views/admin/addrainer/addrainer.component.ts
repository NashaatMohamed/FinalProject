import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Classes } from 'src/app/Models/classes';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-addrainer',
  templateUrl: './addrainer.component.html',
  styleUrls: ['./addrainer.component.css']
})
export class AddrainerComponent implements OnInit {
  memberForm: FormGroup;
  classs:Classes[] = [];
  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudTrainerService: CrudTrainerService,
    private classCrudServicesService:ClassCrudServicesService
  ) { 
     this.memberForm = this.formBiulder.group({
      name:[''],
      price: [''],
      phone: [''],
      gender:[''],
      decription:[''],
      session_id:['']
     })
  }
  

 

  ngOnInit(): void {
    
  }

  onSubmit():any{
    this.crudTrainerService.addtrainer(this.memberForm.value)
    .subscribe((res)=>{
      console.log('trainer added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/trainers'))
    },(err)=>{
      console.log(err)
    })
  }

}
