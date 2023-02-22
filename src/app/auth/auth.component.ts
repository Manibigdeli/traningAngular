import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent{
    LoginMode = true;

constructor( private authservice:AuthService){}
    onswithMode(){
        this.LoginMode = !this.LoginMode
    }



    OnSubmite(authform:NgForm){
        if(!authform.valid){
            return;

        }
        const email  = authform.value.email;
        const password = authform.value.password;
      if(this.LoginMode){
       //..login
       }else{
        this.authservice.signup(email , password).subscribe(
            respnsData=>{
                console.log(respnsData);
            },error =>{
                console.log(error)
            }
            
        )
    }

        authform.reset();

    }
}