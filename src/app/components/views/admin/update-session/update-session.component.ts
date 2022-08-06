import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';


@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.css']
})
export class UpdateSessionComponent implements OnInit {

  getId:any;
  updateForm: FormGroup;


  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private classCrudServicesService: ClassCrudServicesService
  ) {
    this.getId = this.activateRout.snapshot.paramMap.get('id');
    this.classCrudServicesService.getclass(this.getId).subscribe(res=>{
      console.log(res)
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        Duaration :res['Duaration'],
        image:null,
        discount:res['discount'],
        Day:res['Day'],
        Time:res['Time'],
        description: res['description'],
      });
    });

    this.updateForm = this.formBiulder.group({
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

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.classCrudServicesService.updateclass(this.getId,this.updateForm.value)
      .subscribe((res) => {
        console.log(res);
        console.log('class updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/admin/sessions'))
      }, (err) => {
        console.log(err)
      })
  }
}
