import { ShopsService } from "../shops/shops.service";
import { ShoesModel } from "../shops/shoes.model";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
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
     this.http.get<ShoesModel[]>('https://angular-shoes-shop-default-rtdb.firebaseio.com/shoes.json').subscribe(
            (FetchingData)=>{
                console.log(FetchingData);
                this.ShoesService.setShoes(FetchingData);
            }
        )
    }
}