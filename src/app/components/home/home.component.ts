import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/Models/trainer';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Trainers:Trainer[] = [];
  constructor(private crudTrainerService:CrudTrainerService) { }

  // constructor(private lgin:LoginService) {
  //   // console.log(this.lgin.login('aj'));
  // }

  ngOnInit(): void {
    this.crudTrainerService.getTrainers().subscribe( res=>{
      console.log(res)
      this.Trainers = res;
    });
  }

  color="";
  go(){
    this.color="green";
  }
  back(){
    this.color="";
  }


}
