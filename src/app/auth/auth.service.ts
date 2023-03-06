import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { throwError } from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { catchError, tap } from "rxjs/operators";
import { AuthSignUpModel } from "./auth-signup.model";
import { UserModel } from "./user.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private acitvateroute: ActivatedRoute
  ) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthSignUpModel>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.HandleError),
        tap((responsData) => {
          this.Auth(
            responsData.email,
            responsData.idToken,
            +responsData.expiresIn,
            responsData.localId
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthSignUpModel>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfAk6Ztg5GTBIAj5fREfvqyIlCYjgBk3k",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.HandleError),
        tap((responsData) => {
          this.Auth(
            responsData.email,
            responsData.idToken,
            +responsData.expiresIn,
            responsData.localId
          );
        })
      );
  }
  logout() {
    this.user.next(null);
    this.router.navigate(["/auth"], { relativeTo: this.acitvateroute });
  }

  private Auth(
    email: string,
    idToken: string,
    expiresIn: number,
    userid: string
  ) {
    const exparationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new UserModel(email, userid, idToken, exparationDate);
    this.user.next(user);
    localStorage.setItem("UserLoginData", JSON.stringify(user)); //json converting to string
  }

  autologin() {
    const userdatas: {
      email: string;
      id: string;
      token: string;
      tokenexpration: string;
    } = JSON.parse(localStorage.getItem("UserLoginData"));
    if (!userdatas) {
      return;
    }
    const newloadeduser = new UserModel(
      userdatas.email,
      userdatas.id,
      userdatas.token,
      new Date(userdatas.tokenexpration)
    );
    if (userdatas.token) {
      this.user.next(newloadeduser);
    }
  }

  private HandleError(errorRes: HttpErrorResponse) {
    let errormessage = "An unknow error!";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorRes.error.error.message);
    }

    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errormessage = "this email exist already";
        break;
      case "INVALID_PASSWORD":
        errormessage = "INVALID_PASSWORD";
        break;
      case "EMAIL_NOT_FOUND":
        errormessage = "EMAIL NOT FOUND";
        break;
      case "WEAK_PASSWORD":
        errormessage = "your password was weak ! try a new one";
        break;
      default:
        errormessage = errorRes.error.error.message;
        break;
    }

    return throwError(errorRes.error.error.message);
  }
}
