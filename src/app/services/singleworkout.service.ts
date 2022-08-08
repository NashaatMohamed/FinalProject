import { ErrorHandler, Injectable } from '@angular/core';
import { singleworkout } from './singleworkout';
import { catchError,map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleworkoutService {

  Rest_Api:string="http://localhost:8000/api/auth/singleworkout";
  // Rest_Api:string="http://127.0.0.1:8000/api/singleworkout";
  httpHeader=new HttpHeaders().set('content-type','application/json');
constructor(private http:HttpClient ) { }



  listsingleworkout(){
      return this.http.get(this.Rest_Api)
    }


    // to add single work out

    addSingleWorkout(data:any){
      return this.http.post(this.Rest_Api,data).pipe(catchError(this.handelerror))

    }


    // get single workout by id
    getSingleWorkout(id:any):Observable<any>{
      let api_url=`${this.Rest_Api}/${id}`;
      return this.http.get(api_url,{headers:this.httpHeader})
      .pipe(map((res:any)=>{
        return res|| {};
      }),
        catchError(this.handelerror));
    }




    updateSingleWorkout(id:any,data:singleworkout):Observable<any>{
      let api_url=`${this.Rest_Api}/${id}`;
      return this.http.post(api_url,data,{headers:this.httpHeader})
      .pipe(catchError(this.handelerror));
    }
//////////////////

    deleteSingleWorkout(id:any):Observable<any>{
      let api_url=`${this.Rest_Api}/${id}`;
      return this.http.delete(api_url,{headers:this.httpHeader})
      .pipe(catchError(this.handelerror));
    }

///////////////////////////

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
