import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminStateService } from 'src/app/services/shared/admin-state.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  isSignedIn!: boolean;
  constructor(
    private auth: AdminStateService,
    public router: Router,
    public token: TokenService
  ) {}
  ngOnInit() {
    this.auth.userAdminState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }
  // Signout
  signOut() {
    this.auth.setAdminState(false);
    window.localStorage.clear();
    this.token.removeToken();
    this.router.navigate(['admin/login']);
  }




}
