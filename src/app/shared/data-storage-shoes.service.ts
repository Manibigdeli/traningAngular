import { ShopsService } from "../shops/shops.service";
import { ShoesModel } from "../shops/shoes.model";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { tap } from "rxjs/internal/operators/tap";
import { BrandsModel } from "./brands.model";
@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor( private http:HttpClient ,private ShoesService:ShopsService){
        
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
     return this.http.get<ShoesModel[]>('https://angular-shoes-shop-default-rtdb.firebaseio.com/shoes.json').pipe(map(
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