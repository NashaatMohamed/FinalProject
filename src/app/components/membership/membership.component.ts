import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Memebership } from 'src/app/Models/memebership';
import { MembershipsService } from 'src/app/services/memberships.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  Membership:Memebership[] =[];
  imagepath:any = "http://127.0.0.1:8000/assets/"
  getId:any;
  constructor(private membershipsService:MembershipsService,  private router: Router,
    private activateRout: ActivatedRoute,) { 

    this.activateRout.paramMap.subscribe((params)=>{
      this.getId = params.get("id")
    })
  }

  ngOnInit(): void {
    this.membershipsService.getMemebreships().subscribe( res=>{
      console.log(res)
      this.Membership = res;
  })
  }
}
