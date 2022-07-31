import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TokenService } from '../shared/token.service';
@Injectable({
  providedIn: 'root',
})
export class AdminStateService {
  private userState = new BehaviorSubject<boolean>(this.token.isLoggedIn()!);
  userAdminState = this.userState.asObservable();
  constructor(public token: TokenService) {}
  setAdminState(value: boolean) {
    this.userState.next(value);
  }
}