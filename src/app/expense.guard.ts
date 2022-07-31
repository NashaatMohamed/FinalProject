
import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { TokenService } from './shared/token.service';


@Injectable({

  providedIn: 'root'

})

export class ExpenseGuard implements CanActivate {

  constructor(private token:TokenService ,private router: Router) {}

  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.token.isLoggedIn()) {

        this.router.navigate(['/login']); // go to login if not authenticated

        return false;

      }

    return true;

  }

}