import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required]),
       address:new FormControl('', [Validators.required]),
      phone:new FormControl('', [Validators.required]),
      gender:new FormControl('', [Validators.required]),
      image:new FormControl('', [Validators.required]),
      fileSource: [null],
      password:new FormControl('', [Validators.required]),
      password_confirmation:new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {}



  get f() {
    return this.registerForm.controls;
  };


  
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.patchValue({
        fileSource: file
      });
    }
  }
  onSubmit() {


    const formData = new FormData();
    formData.append('image', this.registerForm.get('fileSource')?.value);
    formData.append('name', this.registerForm.get('name')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('address', this.registerForm.get('address')?.value);
    formData.append('phone', this.registerForm.get('phone')?.value);
    formData.append('gender', this.registerForm.get('gender')?.value);
    formData.append('password', this.registerForm.get('password')?.value);
    formData.append('password_confirmation', this.registerForm.get('password_confirmation')?.value);


    this.authService.register(formData).subscribe(
      (result) => {
        console.log(result);
        
       
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    );
  }
 
}