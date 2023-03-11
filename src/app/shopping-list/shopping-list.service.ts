import { Subject } from "rxjs";
import { BrandsModel } from "../shared/brands.model";

export class ShoppingListService{
  brandsChanged = new Subject<BrandsModel[]>()

  startededitingmode = new Subject<number>();

   private brands :BrandsModel[] = [
        new BrandsModel('Nike' , 1),
        new BrandsModel('Adidas' , 2),
        new BrandsModel('Puma',3)
      ] ;

      getShoppinglist(){
        return this.brands.slice();
      }

      getbrandsid(index:number){
         return this.brands[index]
      }

      AddbrandsToShoppinglist(Brands: BrandsModel){
        this.brands.push(Brands);
        this.brandsChanged.next(this.brands.slice())
      }

      AddbrandstoShService(brand:BrandsModel[]){
        this.brands.push(...brand);
        this.brandsChanged.next(this.brands.slice())
      }


      Updatebrands(id:number,newbrand:BrandsModel){
        this.brands[id] = newbrand;
        this.brandsChanged.next(this.brands.slice());

      }


      Deletebrands(index:number){
        this.brands.splice(index,1);
        this.brandsChanged.next(this.brands.slice())

      }

     }
