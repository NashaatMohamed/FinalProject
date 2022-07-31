import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// admin interface
export class Admin {
  name!: String;
  email!: String;
  password!: String;
  address!:string;
  phone!:String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  // admin registration
  register(admin: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/admin/register',admin);
  }
  // Login
  signin(admin: Admin): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/admin/login',admin);
  }
  // Access admin profile
  // profileadmin(): Observable<any> {
  //   return this.http.get('http://127.0.0.1:8000/api/auth/admin-profile');
  // }
}