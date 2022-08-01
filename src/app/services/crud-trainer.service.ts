import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Trainer } from '../Models/trainer';



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

  // getTrainer

  gettrainer(id: any): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/auth/trainer/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders})
  .pipe(map((res:any)=>{
    return res || {}
  }),
    catchError(this.handleError))
  }

  // post book
  addtrainer(data:Trainer): Observable<any>{
    console.log(data);
    let API_URL =  `${environment.APIBaseURL}/admin/trainers`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }
      // update class
  updatetrainer(id: any, data: Trainer): Observable<any> {
    console.log(data);
    let API_URL = `${environment.APIBaseURL}/admin/trainer/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError))
  }
    // delete Class
  deletetrainer(id: any ): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/admin/trainers/${id}`;
    return this.httpClient.delete(API_URL,  { headers: this.httpHeaders })
      .pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}



