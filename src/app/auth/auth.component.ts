import { Component } from "@angular/core";

@Component({
    selector: 'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent{
    LoginMode = true;
    onswithMode(){
        this.LoginMode = !this.LoginMode
    }
}