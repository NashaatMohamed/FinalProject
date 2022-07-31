import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  selectedFile=null;
  url= "./assets/not.jpg";


  constructor(private  http:HttpClient ) { }

  onfileSelected(event: any){
     if (event.targe.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(e:any)=>{
        this.url=e.target.result;
      }
     }
  //  this.selectedFile=;
   }
uploadimege(){


}


  ngOnInit(): void {
  }

}
