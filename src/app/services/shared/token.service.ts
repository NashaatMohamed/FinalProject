import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private issuer = {
    login: 'http://127.0.0.1:8000/api/admin/login',
    register: 'http://127.0.0.1:8000/api/admin/register',
  };
  constructor() {}
  handleData(token: any) {
    localStorage.setItem('admin_token', token);
  }
  getToken() {
    return localStorage.getItem('admin_token');
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
}
