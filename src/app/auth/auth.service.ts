import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponsData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string
}



@Injectable({providedIn:'root'})
export class AuthService{
constructor( private http : HttpClient){}

    signup(email:string, password:string){
  return this.http.post<AuthResponsData>
  ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k',
{
email:email,
password:password,
returnSecureToken:true
}
)
  }

}