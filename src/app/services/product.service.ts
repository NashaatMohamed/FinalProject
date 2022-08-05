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
  second_api:string="http://127.0.0.1:8000/api/products/category/";

  httpHeader=new HttpHeaders().set('content-type','application/json');


  constructor(private http:HttpClient) { }

    addproducts(data:Product):Observable<any>{
      let api_url=this.Rest_Api;
      return this.http.post(api_url,data).pipe(catchError(this.handelerror));

    }




///////////////
    listproducts(){
      return this.http.get(this.Rest_Api)
    }





// get one product
    getproduct(id:any):Observable<any>{
      let api_url=`${this.Rest_Api}/${id}`;
      return this.http.post(api_url,{headers:this.httpHeader})
      .pipe(map((res:any)=>{
        return res|| {};
      }),
        catchError(this.handelerror));
    }





/////////////////

    updateproduct(id:any,data:Product):Observable<any>{
      let api_url=`${this.Rest_Api}/${id}`;
      return this.http.put(api_url,data,{headers:this.httpHeader})
      .pipe(catchError(this.handelerror));
    }


/////////////////////////////////
deleteProduct(id:any):Observable<any>{
  let api_url=`${this.Rest_Api}/${id}`;
  return this.http.delete(api_url,{headers:this.httpHeader})
  .pipe(catchError(this.handelerror));
}

/////////////////////////////////
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




// to get products by its category
// getproductByCategory(id:any):Observable<any>{
//   let api_url=`${this.second_api}/${id}`;
//   return this.http.get(api_url,{headers:this.httpHeader})
//   .pipe(map((res:any)=>{
//     return res|| {};
//   }),
//     catchError(this.handelerror));




// }


getproductByCategory(id:any){
  return this.http.get(this.second_api+id)
}

}
