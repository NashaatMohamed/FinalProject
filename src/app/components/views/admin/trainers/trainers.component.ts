import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/Models/trainer';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  trainers:Trainer[] = [];
  imagepath:any = "http://127.0.0.1:8000/assets/"
  constructor(private crudTrainerService:CrudTrainerService,private router: Router) { }

  ngOnInit(): void {
    this.crudTrainerService.getTrainers().subscribe( res=>{
      this.trainers = res;
      console.log(this.trainers);
    })
  }

  delete(id:any,i:any){
    console.log(id);
    this.crudTrainerService.deletetrainer(id).subscribe(res => {
      this.trainers.splice(i,1);
    })
  }
}
