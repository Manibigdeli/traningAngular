import { BrandsModel } from "../shared/brands.model";
import { CallInformationModel } from "../shared/call-information.model";

export class ShoesModel{
    name:string
    descraption:string
    img:string
    price:number

    public brandmodel:BrandsModel[];

    public call:CallInformationModel[];

    constructor(name : string , descraption : string 
        , img : string , price : number , brandmodel : BrandsModel[] , call : CallInformationModel[]){
        this.name = name
        this.descraption = descraption
        this.img = img
        this.price = price

        this.brandmodel =  brandmodel

        this.call = call

        
    }
}