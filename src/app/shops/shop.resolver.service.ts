import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage-shoes.service";
import { ShoesModel } from "./shoes.model";
import { ShopsService } from "./shops.service";


@Injectable({providedIn:'root'})
export class ShopResolverService implements Resolve<ShoesModel[]> {
        constructor(private dataStorage : DataStorageService , private ShService:ShopsService){}
        resolve( ActiveRoute:ActivatedRouteSnapshot , state:RouterStateSnapshot){
                const Shoes = this.ShService.getshoes();
                if(Shoes.length === 0){
                        return this.dataStorage.FetchingData();
                }else{
                        return Shoes;
                }
           
        }
}