import { Component, OnInit } from '@angular/core';
import { TokenService } from './../../shared/token.service';
import { AuthStateService } from './../../shared/auth-state.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isSignedIn!: boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ) {}
  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    window.localStorage.clear();
    this.token.removeToken();
    this.router.navigate(['login']);
  }


}
