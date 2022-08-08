import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  trainerSession: FormGroup;
  classs:Classes[] = [];
  control1 = new FormControl;

  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudTrainerService: CrudTrainerService,
    private classCrudServicesService:ClassCrudServicesService
  ) { 
     this.trainerSession = this.formBiulder.group({
      name:[''],
      price: [''],
      phone: [''],
      gender:[''],
      image:[''],
      fileSource: [null],
      decription:[''],
      session_id:this.control1
     })
  }
  
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.trainerSession.patchValue({
        fileSource: file
      });
    }
  }

  ngOnInit(): void {
    this.classCrudServicesService.getclasses().subscribe( res=>{
      this.classs = res;
      console.log(this.classs);
    })
    
  }

  onSubmit():any{
    const formData :any= new FormData();
    formData.append('image', this.trainerSession.get('fileSource')?.value);
    formData.append('price', this.trainerSession.get('price')?.value);
    formData.append('phone', this.trainerSession.get('phone')?.value);
    formData.append('gender', this.trainerSession.get('gender')?.value);
    formData.append('name', this.trainerSession.get('name')?.value);
    formData.append('decription', this.trainerSession.get('decription')?.value);
    formData.append('session_id', this.trainerSession.get('session_id')?.value);
    this.crudTrainerService.addtrainer(formData)
    .subscribe((res)=>{
      console.log('trainer added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/trainers'))
    },(err)=>{
      console.log(err)
    })
  }

}
