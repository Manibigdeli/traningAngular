import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthModel } from "./auth.model";





@Injectable({providedIn:'root'})
export class AuthService{
constructor( private http : HttpClient){}

    signup(email:string, password:string){
  return this.http.post<AuthModel>
  ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k',
{
email:email,
password:password,
returnSecureToken:true
}
)
  }

}