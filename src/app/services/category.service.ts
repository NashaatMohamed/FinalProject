import { Injectable } from '@angular/core';
import { singleworkout } from './singleworkout';
import { catchError,map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  Rest_Api:string="http://127.0.0.1:8000/api/auth/category";
  httpHeader=new HttpHeaders().set('content-type','application/json');
constructor(private http:HttpClient) { }

allCategories(){
  return this.http.get(this.Rest_Api)
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
