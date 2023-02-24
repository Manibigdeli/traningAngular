export class AuthSignUpModel{  
    constructor( public idToken:string,public  email:string,
        public refreshToken:string
        ,public expiresIn:string,public localId:string 
        ,public registered:boolean){}
}