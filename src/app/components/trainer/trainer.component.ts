import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/Models/classes';
import { Trainer } from 'src/app/Models/trainer';
import { ClassCrudServicesService } from 'src/app/services/class-crud-services.service';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  Trainers:Trainer[] = [];
  classs:Classes[] = [];
  imagepath:any = "http://127.0.0.1:8000/assets/"
  constructor(private crudTrainerService:CrudTrainerService) { }

  ngOnInit(): void {
    this.crudTrainerService.getTrainers().subscribe( res=>{
      console.log(res)
      this.Trainers = res;
    });
    //   this.classCrudServicesService.getclasses().subscribe( res=>{
    //     // this.classs = res;
    //     this.classs.forEach()
    // });
  }


  searchText:string='';

  onsearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }

}
