import { Classes } from './../Models/classes';
import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Member } from '../Models/member';
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
  // -----------------------------------------------------------
  /// all Members
  getMembers():Observable<Member[]>{
    return this.httpClient.get<Member[]>(`${environment.APIBaseURL}/auth/allMemeber`);
  }
    // post Member
  addmember(data:Member): Observable<any>{
    console.log(data);
    let API_URL = `${environment.APIBaseURL}/auth/addmember`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }
  // ----------------------------------------

  // get TodayClass
  getTodayClass():Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${environment.APIBaseURL}/auth/todayclass`);
  }
  // get next2DayClass

  getnext2DayClass():Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${environment.APIBaseURL}/auth/tomorrowClass`);
  }

  getclass(id: any): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/auth/yourClass/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders})
  .pipe(map((res:any)=>{
    return res || {}
  }),
    catchError(this.handleError))
  }
  // ---------------------------------------------------------------------------- get Counting for dashboard
  getclassnumber():Observable<number>{
    return this.httpClient.get<number>(`${environment.APIBaseURL}/auth/countClass`);
  }

  gettrainernumber():Observable<number>{
    return this.httpClient.get<number>(`${environment.APIBaseURL}/auth/CountTrainer`);
  }

  getmembernumber():Observable<number>{
    return this.httpClient.get<number>(`${environment.APIBaseURL}/auth/Countusers`);
  }

  getusersnumber():Observable<number>{
    return this.httpClient.get<number>(`${environment.APIBaseURL}/auth/CountMember`);
  }
  // END -----------------------------------------------------------------------------

  //     ----------------------------------------------------------------------------
  getmemberclass():Observable<any>{
    return this.httpClient.get<any>(`${environment.APIBaseURL}/auth/getclassMember`);
  }
  // END ----------------------------------------------------------------------------

  // post class
  addclass(data:Classes): Observable<any>{
    console.log(data);
    let API_URL = `${environment.APIBaseURL}/admin/addclass`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }
  
      // update class
  updateclass(id: any, data: Classes): Observable<any> {
    console.log(data);
    let API_URL = `${environment.APIBaseURL}/admin/newClass/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError))
  }
    // delete Class
  deleteclass(id: any ): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/admin/delClass/${id}`;
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
