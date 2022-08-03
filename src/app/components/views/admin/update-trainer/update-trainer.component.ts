import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent implements OnInit {
  getId:any;
  updateForm: FormGroup;


  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private crudTrainerService: CrudTrainerService
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
        // price: [''],
        phone: [''],
        gender:[''],
        decription:[''],
        session_id:[''],
    })
   }

  ngOnInit(): void {
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
