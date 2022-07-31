import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  // dataForm=new FormGroup({
  //   age : new FormControl(null),
  //   gender : new FormControl(null),
  //   height : new FormControl(null),
  //   weight : new FormControl(null),

  // });


  // onSubmit(){
  //   console.log(this.dataForm.get('age'));
  // }

 age:number=0;
 gender:any;
 height:number=0;
 weight:number=0;
 bmr:number=0;

calculate(){
  if(this.gender=='male'){
     this.bmr=    10*this.weight + 6.25*this.height -5*this.age+5;
    //  this.bmr = Math.floor(this.bmr);


  }else{
    this.bmr=10*this.weight + 6.25*this.height -5*this.age -161 ;

  } this.bmr = Math.floor(this.bmr);



}
  constructor() {


  }

  ngOnInit(): void {
  }

}
