import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Memebership } from '../Models/memebership';

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');


  constructor(private httpClient: HttpClient) { }

  // get all Memebreship
  getMemebreships():Observable<Memebership[]>{
    return this.httpClient.get<Memebership[]>(`${environment.APIBaseURL}/auth/allmembership`);
  }
    // get Memebreship by ID
  getMemebreship(id: any): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/auth/yourmembership/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders})
  .pipe(map((res:any)=>{
    return res || {}
  }),
    catchError(this.handleError))
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
