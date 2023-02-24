import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {  AuthSignUpModel } from "./auth-signup.model";






@Injectable({providedIn:'root'})
export class AuthService{
constructor( private http : HttpClient){}

    signup(email:string, password:string){
  return this.http.post<AuthSignUpModel>
  ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k',
{
email:email,
password:password,
returnSecureToken:true
}
).pipe(catchError(this.HandleError))
  }


  login(email:string ,password:string ,){
    return this.http.post<AuthSignUpModel>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k',{
      email:email,
      password:password,
      returnSecureToken : true
    }).pipe(catchError(this.HandleError))

  }

  private HandleError(errorRes : HttpErrorResponse){
    let errormessage = 'An unknow error!';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errormessage)
    }
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errormessage = 'this email exist already';
        break;
        case 'INVALID_PASSWORD':
          errormessage = 'INVALID_PASSWORD';
          break;
          case 'EMAIL_NOT_FOUND':
            errormessage = 'EMAIL NOT FOUND'
  }
  return throwError(errormessage)

  }

}