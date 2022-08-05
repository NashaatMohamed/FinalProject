import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from 'src/app/Models/classes';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  imagepath:any = "http://127.0.0.1:8000/assets/"
  classs:Classes[] = [];
  constructor(private classCrudServicesService:ClassCrudServicesService,private router: Router) { }

  ngOnInit(): void {
    this.classCrudServicesService.getclasses().subscribe( res=>{
      this.classs = res;
      console.log(this.classs);
    })
  }
}
