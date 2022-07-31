import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/Models/classes';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';

@Component({
  selector: 'app-next2-days-classes',
  templateUrl: './next2-days-classes.component.html',
  styleUrls: ['./next2-days-classes.component.css']
})
export class Next2DaysClassesComponent implements OnInit {
  Next2DayClass:Classes[] = [];
  constructor(private classCrudServicesService:ClassCrudServicesService) { }

  ngOnInit(): void {
    this.classCrudServicesService.getnext2DayClass().subscribe( res=>{
      console.log(res)
      this.Next2DayClass = res;
    })
  }
}
