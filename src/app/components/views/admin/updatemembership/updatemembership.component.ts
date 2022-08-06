import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipsService } from 'src/app/services/memberships.service';

@Component({
  selector: 'app-updatemembership',
  templateUrl: './updatemembership.component.html',
  styleUrls: ['./updatemembership.component.css']
})
export class UpdatemembershipComponent implements OnInit {

  getId:any;
  updateForm: FormGroup;


  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private membershipsService:MembershipsService
  ) {
    this.getId = this.activateRout.snapshot.paramMap.get('id');
    this.membershipsService.getMemebreship(this.getId).subscribe(res=>{
      console.log(res)
      this.updateForm.setValue({
        type: res['type'],
        price: res['price'],
      });
    });

    this.updateForm = this.formBiulder.group({
      type: [''],
      price: [''],
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.membershipsService.updatemember(this.getId,this.updateForm.value)
      .subscribe((res) => {
        console.log(res);
        console.log('membership updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/admin/Adminmembership'))
      }, (err) => {
        console.log(err)
      })
  }

}
