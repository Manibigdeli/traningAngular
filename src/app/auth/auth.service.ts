import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  throwError } from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { catchError, tap } from "rxjs/operators";
import {  AuthSignUpModel } from "./auth-signup.model";
import { UserModel } from "./user.model";






@Injectable({providedIn:'root'})
export class AuthService{
user = new BehaviorSubject<UserModel>(null);

constructor( private http : HttpClient){}

    signup(email:string, password:string){
  return this.http.post<AuthSignUpModel>
  ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k',
{
email:email,
password:password,
returnSecureToken:true
}
).pipe(catchError(this.HandleError),tap(responsData=>{
  this.Auth(
    responsData.email , responsData.idToken, +responsData.expiresIn,responsData.localId
  )
})
)
    }


  login(email:string ,password:string ,){
    return this.http.post<AuthSignUpModel>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k',{
      email:email,
      password:password,
      returnSecureToken : true
    }).pipe(catchError(this.HandleError),tap(responsData=>{
      this.Auth(
        responsData.email , responsData.idToken, +responsData.expiresIn,responsData.localId
      )
    })
    )

  }

  private Auth(email:string , idToken:string , expiresIn: number , userid:string){
    const exparationDate = new Date(new Date().getTime() + +expiresIn *1000);
    const user = new UserModel(email, userid , idToken , exparationDate);
    this.user.next(user);
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