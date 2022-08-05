import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  classs:number = 0;
  trainers:number = 0;
  members:number = 0;
  users:number = 0;


  constructor(private classCrudServicesService:ClassCrudServicesService,private router: Router) { }

  ngOnInit(): void {
    this.classCrudServicesService.getclassnumber().subscribe( res=>{
      this.classs = res;
      console.log(this.classs);
    })

    this.classCrudServicesService.gettrainernumber().subscribe( res=>{
      this.trainers = res;
      console.log(this.classs);
    })

    this.classCrudServicesService.getmembernumber().subscribe( res=>{
      this.members = res;
      console.log(this.classs);
    })

    this.classCrudServicesService.getusersnumber().subscribe( res=>{
      this.users = res;
      console.log(this.classs);
    })
  }


}
