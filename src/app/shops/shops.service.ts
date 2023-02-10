import { ShoesModel } from "./shoes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { BrandsModel } from "../shared/brands.model";
import { CallInformationModel } from "../shared/call-information.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class ShopsService{

  ShoesSelcted = new EventEmitter<ShoesModel>()

   private shoes : ShoesModel[] = [
        new ShoesModel('AirJordan' 
        , 'This is best Shoes' ,
         'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0cdd2029-a1f1-479c-b9d6-04dc4331c0e5/air-jordan-1-retro-high-og-shoes-1QP6Gw.png' 
         , 100,[
          new BrandsModel('Jordan:brand',1)

         ],[
          new CallInformationModel('09125411618','mani.bigdeli1381@gmail.com')
         ]),
    
        new ShoesModel('Balanciago' ,
         'best for Womens Wear' , 'https://m.media-amazon.com/images/I/71UqbZE6v1L._UX500_.jpg'
          , 200,[
            new BrandsModel('Nike:brand',1)

          ],[
            new CallInformationModel('09125411618','mani.bigdeli1381@gmail.com')

          ]),
    
        new ShoesModel('Adidas Air' 
        , 'this Is A great Shoes' ,
         'https://blog.footdistrict.com/wp-content/uploads/2022/10/enfrentadas.png' , 300,[
          new BrandsModel('Adidas:brand' , 1)

         ],[
          new CallInformationModel('09125411618','mani.bigdeli1381@gmail.com')
         ])
      ]
      constructor(private shoppinglistService:ShoppingListService){}

      



      getshoesid(id:number){
        return this.shoes.slice()[id]

      }



      Addbrandtoshoppinglist(brand:BrandsModel[]){
        this.shoppinglistService.AddbrandstoShService(brand);

      }


   
}