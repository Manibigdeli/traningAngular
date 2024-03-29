import { ShoesModel } from "./shoes.model";
import {  Injectable } from "@angular/core";
import { BrandsModel } from "../shared/brands.model";
import { CallInformationModel } from "../shared/call-information.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { SizeModel } from "../shared/shoes.size.model";
import { ShoesColorModel } from "../shared/color-shoes.model";
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class ShopsService{

  shoeschanges = new Subject<ShoesModel[]>();

  

  //  private shoes : ShoesModel[] = [
  //       new ShoesModel('AirJordan' 
  //       , 'This is best Shoes' ,
  //        'https://houseofheat.co/app/uploads/2021/02/Air-Jordan-1-FlyEase-Turf-Orange-CQ3835-008-Release-Date.jpg' 
  //        , 100,[
  //         new BrandsModel('Jordan',2)

  //        ],[
  //         new CallInformationModel('09125411618','mani.bigdeli1381@gmail.com')
  //        ],[
  //         new SizeModel(42)
  //        ],[
  //         new ShoesColorModel(['black' , 'white' , 'red'])
  //        ]),
    
  //       new ShoesModel('Balanciago' ,
  //        'best for Womens Wear' , 'https://sneakernews.com/wp-content/uploads/2022/02/air-jordan-1-mid-yellow-white-bq6472-117-8.jpg'
  //         , 200,[
  //           new BrandsModel('Nike',3)

  //         ],[
  //           new CallInformationModel('09125411618','mani.bigdeli1381@gmail.com')

  //         ],[
  //           new SizeModel(41)
  //         ],[
  //           new ShoesColorModel(['black' , 'white' ])
  //         ]),
    
  //       new ShoesModel('Adidas Air' 
  //       , 'this Is A great Shoes' ,
  //        'https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/4:3/w_1032,h_774,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png' , 300,[
  //         new BrandsModel('Adidas' , 1)

  //        ],[
  //         new CallInformationModel('09125411618','mani.bigdeli1381@gmail.com')
  //        ],[
  //         new SizeModel(44)
  //        ],[
  //         new ShoesColorModel(['black' , 'white' ])
  //        ])
  //     ]

      private shoes : ShoesModel[] = []

      constructor(private shoppinglistService:ShoppingListService){}

    setShoes(Shoes:ShoesModel[]){
      this.shoes = Shoes;
      this.shoeschanges.next(this.shoes.slice())
    }

      getshoes(){
        return this.shoes.slice()
      }


      AddShoes(Shoes : ShoesModel){
       this.shoes.push(Shoes);
       this.shoeschanges.next(this.shoes.slice());
      }

      UpdateShoes(index : number , NewShoedAdd:ShoesModel){
        this.shoes[index] = NewShoedAdd;
        this.shoeschanges.next(this.shoes.slice());

      }



      getshoesid(index:number){
        return this.shoes[index]
      }



      Addbrandtoshoppinglist(brand:BrandsModel[]){
        this.shoppinglistService.AddbrandstoShService(brand);

      }

      OnDelete(index : number){
        this.shoes.splice(index , 1);
        this.shoeschanges.next(this.shoes.slice());
      }


   
}