import { HttpClient } from "@angular/common/http";
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
).pipe(catchError(errorRespons=>{
  let errormessage = 'An unknow error';
  if(!errorRespons.error || !errorRespons.error.error){
    return throwError(errormessage)
  }
  switch (errorRespons.error.error.message){
    case 'EMAIL_EXISTS':
      errormessage = 'this email exist already'
}
return throwError(errormessage)
}))
  }


  login(email:string ,password:string ,){
    return this.http.post<AuthSignUpModel>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k',{
      email:email,
      password:password,
      returnSecureToken : true
    })

  }

}