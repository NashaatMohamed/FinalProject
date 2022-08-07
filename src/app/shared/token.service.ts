import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  // useridleData(id: any) {
  //   throw new Error('Method not implemented.');
  // }
  private issuer = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    register: 'http://127.0.0.1:8000/api/auth/register',
  };
  constructor() {}

  useridleData(userId:any){
    localStorage.setItem('user-id',JSON.stringify(userId));
  }
  handleData(token: any) {
    localStorage.setItem('auth_token',token);
  }
  getToken() {
    return localStorage.getItem('auth_token');
  }

  getid(){
    return localStorage.getItem('user-id');

  }
  // Verify the token
  isValidToken() {
    
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true
          : false;
      }
      return true;
    } else {
      return false;
    }
  }
  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }
  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }
  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }

  isLoggedInn() {

    const token = localStorage.getItem('token'); // get token from local storage

    const payload = atob(token!.split('.')[1]); // decode payload of token

    const parsedPayload = JSON.parse(payload); // convert payload into an Object

    return parsedPayload.exp > Date.now() / 1000; // check if token is expired

  }


}
