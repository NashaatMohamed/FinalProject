import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {
  paymentHandler:any = null;
  getId:any;
  gettrainer:any;
  myname:any;
  imagepath:any = "http://127.0.0.1:8000/assets/"
  

  constructor(private crudTrainerService:CrudTrainerService,private router: Router,private activateRout: ActivatedRoute) { 

    // this.getId = this.activateRout.snapshot.paramMap.get('id');
    // this.membershipsService.getMemebreship(this.getId).subscribe(res=>{
    //   console.log(res)
    // });

    this.activateRout.paramMap.subscribe((params)=>{
      this.getId = params.get("id")
    })

    this.crudTrainerService.gettrainer(this.getId).subscribe((data:any[])=>{
      this.gettrainer = data;
      console.log(this.gettrainer);
    })

  }  

  ngOnInit(): void {
  }


}
