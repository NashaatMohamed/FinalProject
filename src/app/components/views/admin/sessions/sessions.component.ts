import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from 'src/app/Models/classes';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  classs:Classes[] = [];
  imagepath:any = "http://127.0.0.1:8000/assets/"
  constructor(private classCrudServicesService:ClassCrudServicesService,private router: Router) { }

  ngOnInit(): void {
    this.classCrudServicesService.getclasses().subscribe( res=>{
      this.classs = res;
      console.log(this.classs);
    })
  }

  delete(id:any,i:any){
    console.log(id);
    this.classCrudServicesService.deleteclass(id).subscribe(res => {
     
      this.classs.splice(i,1);
    })
  }


}
