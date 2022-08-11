import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciesService {

  Rest_Api:string="http://127.0.0.1:8000/api/auth/exercies";
  second_api:string="http://localhost:8000/api/auth/exercies/details";
  httpHeader=new HttpHeaders().set('content-type','application/json');
constructor(private http:HttpClient) { }




getAllExercise(){
  return this.http.get(this.Rest_Api)
}



addExercies(data:any){
  return this.http.post(this.Rest_Api,data).pipe(catchError(this.handelerror))

}



deleteExercies(id:any):Observable<any>{
  let api_url=`${this.Rest_Api}/${id}`;
  return this.http.delete(api_url,{headers:this.httpHeader})
  .pipe(catchError(this.handelerror));
}




updateExercies(id:any,data:exercise):Observable<any>{
  let api_url=`${this.Rest_Api}/${id}`;
  return this.http.post(api_url,data,{headers:this.httpHeader})
  .pipe(catchError(this.handelerror));
}


getSingallexercise(id:any):Observable<any>{
  let api_url=`${this.Rest_Api}/${id}`;
  return this.http.get(api_url,{headers:this.httpHeader})
  .pipe(map((res:any)=>{
    return res|| {};
  }),
    catchError(this.handelerror));




}



// to get singe exercies

getSingleExercies(id:any):Observable<any>{
  let api_url=`${this.second_api}/${id}`;
  return this.http.get(api_url,{headers:this.httpHeader})
  .pipe(map((res:any)=>{
    return res|| {};
  }),
    catchError(this.handelerror));




}



handelerror(error:HttpErrorResponse){
let errorMessage='';
if(error.error instanceof ErrorEvent){
  errorMessage=error.error.message;

}else{
  errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`
}
console.log(errorMessage);
return throwError(errorMessage);

}

}
