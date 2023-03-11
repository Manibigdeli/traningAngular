import { ShopsService } from "../shops/shops.service";
import { ShoesModel } from "../shops/shoes.model";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map ,tap , } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
@Injectable({providedIn:'root'})
export class DataStorageService{
    isPending$ = new BehaviorSubject<boolean>(false);

    error$ = new BehaviorSubject<string>(null);
    
  
    //testing up

    get isPending ():Observable<boolean>{
       return this.isPending$.asObservable();
    }

    set setPending(flag:boolean){
        this.isPending$.next(flag);
    }

    constructor( private http:HttpClient ,
        private ShoesService:ShopsService,private authservice:AuthService){
        
    }
    SaveShoesFirebase(){
        const Shoes = this.ShoesService.getshoes();
         return this.http.put('https://angular-shoes-shop-default-rtdb.firebaseio.com/shoes.json',Shoes).subscribe(
            response => {
                console.log(response)
            }
         )

    }

    

    FetchingData(){
        this.setPending = true;
     return this.http.get<ShoesModel[]>
     ('https://angular-shoes-shop-default-rtdb.firebaseio.com/shoes.json').pipe(map(
            shoes=>{
                return shoes.map(
                    shoes=>{
                        return{
                            ...shoes ,
                              
                        }
            })
        }),
         tap(shoes=>{
            this.setPending = false;
            this.ShoesService.setShoes(shoes);
         })).pipe(catchError(this.errorhandle));
    }


    
    private errorhandle(errorrepons:HttpErrorResponse){
        let errormessage = 'This is Unknow Error';
        if(!errorrepons.error || !errorrepons.error.error){
            return throwError(errormessage)
          }
            switch (errorrepons.error.error.message){
                case 'HttpErrorResponse' :
                  errormessage = 'Http error request'
            }
            return throwError(errormessage);
        }
   
   }
    
