import { BrandsModel } from "../shared/brands.model";
import { CallInformationModel } from "../shared/call-information.model";
import { ShoesColorModel } from "../shared/color-shoes.model";
import { SizeModel } from "../shared/shoes.size.model";

export class ShoesModel{
    name:string
    descraption:string
    img:string
    price:number

    public brandmodel:BrandsModel[];

    public call:CallInformationModel[];


    public shoessize:SizeModel[];

    public colors:ShoesColorModel[];

    constructor(name : string , descraption : string 
        , img : string , price : number 
        , brandmodel : BrandsModel[] 
        , call : CallInformationModel[],shoessize:SizeModel[],colors:ShoesColorModel[]){
        this.name = name
        this.descraption = descraption
        this.img = img
        this.price = price

        this.brandmodel =  brandmodel

        this.call = call


        this.shoessize = shoessize

        this.colors = colors



        
    }
}