import { EventEmitter } from "@angular/core";
import { BrandsModel } from "../shared/brands.model";

export class ShoppingListService{
  brandsChanged = new EventEmitter<BrandsModel[]>()

   private brands :BrandsModel[] = [
        new BrandsModel('Nike' , 1),
        new BrandsModel('Adidas' , 2),
        new BrandsModel('Puma',3)
      ] ;

      getShoppinglist(){
        return this.brands.slice();
      }

      AddbrandsToShoppinglist(Brands: BrandsModel){
        this.brands.push(Brands);
        this.brandsChanged.emit(this.brands.slice())
      }

      AddbrandstoShService(brand:BrandsModel[]){
        this.brands.push(...brand);
        this.brandsChanged.emit(this.brands.slice())
      }

     }
