import { Component, OnInit } from '@angular/core';
import { Memebership } from 'src/app/Models/memebership';
import { MembershipsService } from 'src/app/services/memberships.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  Membership:Memebership[] =[];
  constructor(private membershipsService:MembershipsService) { }

  ngOnInit(): void {
    this.membershipsService.getMemebreships().subscribe( res=>{
      console.log(res)
      this.Membership = res;
  })
  }
}
