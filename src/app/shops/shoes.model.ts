import { BrandsModel } from "../shared/brands.model";
import { ShoesColorModel } from "../shared/color-shoes.model";

export class ShoesModel{
    name:string
    description:string
    img:string
    price:number

    public brandmodel:BrandsModel[];




 



    constructor(name : string , description : string 
        , img : string , price : number 
        , brandmodel : BrandsModel[]){
        this.name = name
        this.description = description
        this.img = img
        this.price = price

        this.brandmodel =  brandmodel








        
    }
}