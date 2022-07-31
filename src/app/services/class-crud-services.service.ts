import { Classes } from './../Models/classes';
import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClassCrudServicesService {

  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient: HttpClient) { }
    // get all classes
  getclasses():Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${environment.APIBaseURL}/auth/allclass`);
  }

  // get TodayClass
  getTodayClass():Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${environment.APIBaseURL}/auth/todayclass`);
  }
  // get next2DayClass

  getnext2DayClass():Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${environment.APIBaseURL}/auth/tomorrowClass`);
  }

  getclass(id: any): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/yourClass/user/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders})
  .pipe(map((res:any)=>{
    return res || {}
  }),
    catchError(this.handleError))
  }

  // post book
  addclass(data:Classes): Observable<any>{
    let API_URL =  `${environment.APIBaseURL}/addclass`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }
      // update class
  updateclass(id: any, data: Classes): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/newClass/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError))
  }
    // delete Class
  deleteclass(id: any ): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/delClass/${id}`;
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
