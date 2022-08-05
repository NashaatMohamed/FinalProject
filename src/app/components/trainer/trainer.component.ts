import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/Models/trainer';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  Trainers:Trainer[] = [];
  constructor(private crudTrainerService:CrudTrainerService) { }

  ngOnInit(): void {
    this.crudTrainerService.getTrainers().subscribe( res=>{
      console.log(res)
      this.Trainers = res;
    });
  }

  searchText:string='';

  onsearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }

}
