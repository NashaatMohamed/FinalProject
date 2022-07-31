import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { catchError,map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Rest_Api:string="http://localhost:8000/api/products";
  httpHeader=new HttpHeaders().set('content-type','application/json');
  // public set value(v : string) {

  // }

// url:string ='http://localhost:8000';
  constructor(private http:HttpClient) { }

    addproducts(data:Product):Observable<any>{
      let api_url=this.Rest_Api;
      return this.http.post(api_url,data).pipe(catchError(this.handelerror));
      // return this.http.get<any>(this.url+'/api/products');

      // return this.http.get('http://127.0.0.1:8000/api/products')
    }


    listproducts(){
      return this.http.get(this.Rest_Api)
    }


    getproduct(id:any):Observable<any>{
      let api_url=`${this.Rest_Api}/${id}`;
      return this.http.post(api_url,{headers:this.httpHeader})
      .pipe(map((res:any)=>{
        return res|| {};
      }),
        catchError(this.handelerror));
    }


    updateproduct(id:any,data:Product):Observable<any>{
      let api_url=`${this.Rest_Api}/${id}`;
      return this.http.put(api_url,data,{headers:this.httpHeader})
      .pipe(catchError(this.handelerror));
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
