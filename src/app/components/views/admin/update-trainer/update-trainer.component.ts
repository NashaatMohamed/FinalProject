import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classes } from 'src/app/Models/classes';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent implements OnInit {
  getId:any;
  updateForm: FormGroup;
  control1 = new FormControl;
  classs:Classes[] = [];
  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private crudTrainerService: CrudTrainerService,
    private classCrudServicesService:ClassCrudServicesService
  ) {
    this.getId = this.activateRout.snapshot.paramMap.get('id');
    this.crudTrainerService.gettrainer(this.getId).subscribe(res=>{
      console.log(res)
      this.updateForm.setValue({
        name: res['name'],
        phone: res['phone'],
        gender :res['gender'],
        decription: res['decription'],
        session_id: res['session_id'],
      });
    });

    this.updateForm = this.formBiulder.group({
        name: [''],
        phone: [''],
        gender:[''],
        decription:[''],
        session_id:this.control1
      })
   }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    this.classCrudServicesService.getclasses().subscribe( res=>{
      this.classs = res;
      console.log(this.classs);
    })
    
  }


  onUpdate(): any {
    this.crudTrainerService.updatetrainer(this.getId,this.updateForm.value)
      .subscribe((res) => {
        console.log(res);
        console.log('Trainer updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/admin/trainers'))
      }, (err) => {
        console.log(err)
      })
  }
}
