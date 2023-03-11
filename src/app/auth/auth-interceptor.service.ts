import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { exhaustMap,take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterCeptor implements HttpInterceptor{
    constructor( private AuthService:AuthService){}
    intercept(req: HttpRequest<any>, Handler: HttpHandler){
         return this.AuthService.user.pipe(take(1),exhaustMap(user=>{
          if(!user){
            return Handler.handle(req)

          }
          const Modified = req.clone({
            params: new HttpParams().set('auth' , user.tokens)
          })
          return Handler.handle(Modified)
         }))
    }
}