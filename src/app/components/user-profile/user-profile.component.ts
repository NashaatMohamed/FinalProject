import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
// User interface
export class User {
  name: any;
  email: any;
  address:any;
  phone:any;
  gender:any;
  image?: { url: string }}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  UserProfile!: User;
  imageuser!:User;
  imagepath:any = "http://127.0.0.1:8000/assets/"
  constructor(public authService: AuthService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile =data;
      this.imageuser=data.image
    });
  }
  ngOnInit() {}
}