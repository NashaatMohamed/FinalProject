import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Foods } from 'src/app/services/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  Rest_Api:string="http://localhost:8000/api/auth/food";

  httpHeader=new HttpHeaders().set('content-type','application/json');
  constructor(private http:HttpClient) { }


  addFood(data:any){
    return this.http.post(this.Rest_Api,data).pipe(catchError(this.handelerror))

  }



  listFood(){
    return this.http.get(this.Rest_Api)
  }




  // getFoodById(id:any){
  //   return this.http.get(this.Rest_Api+id)
  // }

  getFoodById(id: any): Observable<any> {
    let API_URL = `${this.Rest_Api}/${id}`;
  return this.http.get(API_URL, { headers: this.httpHeader})
  .pipe(map((res:any)=>{
    return res || {}
  }),
    catchError(this.handelerror))
  }



  

  deleteFood(id:any):Observable<any>{
    let api_url=`${this.Rest_Api}/${id}`;
    return this.http.delete(api_url,{headers:this.httpHeader})
    .pipe(catchError(this.handelerror));
  }




  updateFood(id: any, data: Foods): Observable<any> {
    let API_URL = `${this.Rest_Api}/${id}`;
    return this.http.put(API_URL, data, { headers: this.httpHeader })
      .pipe(catchError(this.handelerror))
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
