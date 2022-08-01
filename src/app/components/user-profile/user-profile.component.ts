import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
// User interface
export class User {
  name: any;
  email: any;
  address:any;
  phone:any;
  gender:any;
  image:any;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  UserProfile!: User;
  imageuser!:User;
  constructor(public authService: AuthService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile =data;
      this.imageuser=data.image
      

    });
  }
  ngOnInit() {}
}