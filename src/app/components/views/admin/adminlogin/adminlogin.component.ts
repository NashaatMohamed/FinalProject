import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/shared/token.service';
import { LoginService } from 'src/app/services/login.service';
import { AdminStateService } from 'src/app/services/shared/admin-state.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  loginForm: FormGroup;
  errors:any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public loginService: LoginService,
    private token: TokenService,
    private adminState: AdminStateService
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }
  ngOnInit() {}
  onSubmit() {
    this.loginService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => { 
        
        this.adminState.setAdminState(true);
        this.loginForm.reset();
        this.router.navigate(['admin']);
      }
    );
  }
  // Handle response
  responseHandler(data:any) {
    this.token.handleData(data.admin.access_token);
console.log(data);
  }

}
