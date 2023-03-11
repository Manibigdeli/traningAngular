import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthSignUpModel } from "./auth-signup.model";
import { AuthService } from "./auth.service";
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
    selector: 'app-auth',
    templateUrl:'./auth.component.html',
    styleUrls: ['./auth.component.css']
    
})
export class AuthComponent{
    LoginMode = true;
    isloading = false;
    error:string = null;
    passwordVisible = false;
    password?: string;

constructor(private authservice:AuthService ,
     private router:Router, private activeroute:ActivatedRoute,private notification:NzNotificationService){}
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
        authObs$ =  this.authservice.login(email , password);
        this.notification.blank('success','login').onClick.subscribe(res=>{
            console.log(res)
            })
        
       }else{
        authObs$ = this.authservice.signup(email , password);
        this.notification.blank('success','Logout').onClick.subscribe(res=>{
            console.log(res)
            })
    }
    authObs$.subscribe(
        respnsData=>{
             
            console.log(respnsData);
            this.isloading = false;
            this.router.navigate(['/shop'],{relativeTo:this.activeroute})
        },errormessage=>{
            console.log(errormessage);
            this.error = errormessage
            this.isloading = false

        }
    )


 

        authform.reset();

    }
}