import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';

@Component({
  selector: 'app-allmymember',
  templateUrl: './allmymember.component.html',
  styleUrls: ['./allmymember.component.css']
})
export class AllmymemberComponent implements OnInit {
MemberClass:any;
  constructor(private classCrudServicesService:ClassCrudServicesService,private router: Router) { }

  ngOnInit(): void {
    this.classCrudServicesService.getmemberclass().subscribe( res=>{
      this.MemberClass = res;
      console.log(this.MemberClass);
    })
  }

}
