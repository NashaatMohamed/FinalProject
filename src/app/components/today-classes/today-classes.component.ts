import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/Models/classes';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';

@Component({
  selector: 'app-today-classes',
  templateUrl: './today-classes.component.html',
  styleUrls: ['./today-classes.component.css']
})
export class TodayClassesComponent implements OnInit {
  TodayClass:Classes[] = [];
  constructor(private classCrudServicesService:ClassCrudServicesService) { }

  ngOnInit(): void {
    this.classCrudServicesService.getTodayClass().subscribe( res=>{
      this.TodayClass = res;
      console.log(res)
    })
  }

}
