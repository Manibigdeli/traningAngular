import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
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
        this.isloading = true;
      if(this.LoginMode){
       //..login
       }else{
        this.authservice.signup(email , password).subscribe(
            respnsData=>{
                console.log(respnsData);
                this.isloading = false
            },errorRespons=>{
                console.log(errorRespons);
                switch (errorRespons.error.error.message){
                    case 'EMAIL_EXISTS':
                        this.error = 'this email exist already'
                }
                this.isloading = false
 
            }
            
        )
    }

        authform.reset();

    }
}