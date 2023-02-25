import { ShopsService } from "../shops/shops.service";
import { ShoesModel } from "../shops/shoes.model";

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map ,tap ,take } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { exhaustMap } from "rxjs/internal/operators/exhaustMap";
@Injectable({providedIn:'root'})
export class DataStorageService{
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
      return this.authservice.user.pipe(take(1),exhaustMap(user=>{
            return this.http.get<ShoesModel[]>
     ('https://angular-shoes-shop-default-rtdb.firebaseio.com/shoes.json'
     ,{params: new HttpParams().set('auth' , user.tokens)})
        }),map(
            shoes=>{
                return shoes.map(
                    shoes=>{
                        return{
                            ...shoes
                              
                        }
                    }
                )}
         ),
         tap(shoes=>{
            this.ShoesService.setShoes(shoes)
         }))
     
    }
}