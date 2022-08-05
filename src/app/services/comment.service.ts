import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
export class Comment {
  id:any;
  comment!: any;
  name!:any;
  session_id!: string;
  created_at!:any;
  user_id:any;
 
}
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient: HttpClient) { }

   // get all trainers
   getcomment(id: any):Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${environment.APIBaseURL}/comment/${id}`);
  }
  addComment(data:Comment): Observable<any>{
    console.log(data);
    let API_URL =  `${environment.APIBaseURL}/comments`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError));
  }

  deletecomment(id: any ): Observable<any> {
    let API_URL = `${environment.APIBaseURL}/comments/${id}`;
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
