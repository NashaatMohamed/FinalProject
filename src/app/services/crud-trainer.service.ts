import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from '../Models/trainer';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CrudTrainerService {
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient: HttpClient) { }

   // get all trainers
   getTrainers():Observable<Trainer[]>{
    return this.httpClient.get<Trainer[]>(`${environment.APIBaseURL}/auth/trainers`);
  }

}
