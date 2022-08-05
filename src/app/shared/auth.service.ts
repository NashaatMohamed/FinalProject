import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// User interface
export class User {
  id!:number;
  name!: String;
  email!: String;
  password!: String;
  address!:string;
  phone!:String;
  gender!:String;
  image!:String;
  fileSource!:any;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  name: any;
  id: any;
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  // User registration
  register(user: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }
 
}