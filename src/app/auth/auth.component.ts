import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthSignUpModel } from "./auth-signup.model";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl:'./auth.component.html',
    styleUrls: ['./auth.component.css']
    
})
export class AuthComponent{
    LoginMode = true;
    isloading = false;
    error:string = null;

constructor(private authservice:AuthService){}
    onswithMode(){
        this.LoginMode = !this.LoginMode
    }



    OnSubmite(authform:NgForm){
        if(!authform.valid){
            return;

        }
        const email  = authform.value.email;
        const password = authform.value.password;
        
        
        //observable
        let authObs$ : Observable<AuthSignUpModel>;
        

        this.isloading = true;
      if(this.LoginMode){
        authObs$ =  this.authservice.login(email , password)
       }else{
        authObs$ = this.authservice.signup(email , password)
    }
    authObs$.subscribe(
        respnsData=>{
            console.log(respnsData);
            this.isloading = false
        },errormessage=>{
            console.log(errormessage);
            this.error = errormessage
            this.isloading = false

        }
    )


 

        authform.reset();

    }
}