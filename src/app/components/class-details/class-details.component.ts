import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  

  constructor(private classCrudServicesService:ClassCrudServicesService,private router: Router,private activateRout: ActivatedRoute) { 

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

  }  

  ngOnInit(): void {
  }

}
