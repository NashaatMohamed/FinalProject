import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Memebership } from 'src/app/Models/memebership';
import { MembershipsService } from 'src/app/services/memberships.service';
@Component({
  selector: 'app-adminmembership',
  templateUrl: './adminmembership.component.html',
  styleUrls: ['./adminmembership.component.css']
})
export class AdminmembershipComponent implements OnInit {
  member:Memebership[] = [];
  constructor(private membershipsService:MembershipsService,private router: Router) { }

  ngOnInit(): void {
    this.membershipsService.getMemebreships().subscribe( res=>{
      this.member = res;
      console.log(this.member);
    })
  }

  delete(id:any,i:any){
    console.log(id);
    this.membershipsService.deletemember(id).subscribe(res => {
     
      this.member.splice(i,1);
    })
  }


}
