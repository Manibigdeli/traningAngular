import { Component } from "@angular/core";
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ShopsService } from "../shops.service";

@Component({selector:'shop-edit',
templateUrl:'./shop-edit.component.html',
styleUrls:['./shop-edit.component.css']
})
export class ShopEditComponent{
    ShoesForm:UntypedFormGroup
    
    id:number
    editMode = false
    constructor(private router:Router,private route:ActivatedRoute , private ShopService:ShopsService){
    this.route.params.subscribe(
        (params:Params)=>{
            this.id = +params['id'];
                this.editMode = params['id'] !=null;
                this.initform();
                
            }
        )

    }

    private initform(){
        let name = '';
        let img = '';
        let description = '';

        //testing formArry 
        let Shoesbrands = new UntypedFormArray([])

        const Shoesinformation = this.ShopService.getshoesid(this.id);
        if(this.editMode){
            name = Shoesinformation.name;
            img = Shoesinformation.img;
            description = Shoesinformation.description;
            if(Shoesinformation['brandmodel']){
                for(let brands of Shoesinformation.brandmodel){
                    Shoesbrands.push(
                        new UntypedFormGroup({
                            'name' : new UntypedFormControl(brands.name),
                            'amount': new UntypedFormControl(brands.amount)
                        })
                    )
                }
            }

            
            

        }
         
        
        this.ShoesForm = new UntypedFormGroup({
            'name' : new UntypedFormControl(name,Validators.required),
            'img' : new UntypedFormControl(img,Validators.required),
            "description" : new UntypedFormControl(description,Validators.required),
            'brandform' : Shoesbrands
        })

    }

    Onsubmit(){
        if(this.editMode){
            this.ShopService.UpdateShoes(this.id , this.ShoesForm.value);
        }else{
            this.ShopService.AddShoes(this.ShoesForm.value)
        }
        this.Oncancel();
    }

    Addbrands(){
        (<UntypedFormArray>this.ShoesForm.get('brandform')).push(
            new UntypedFormGroup({
                'name' : new UntypedFormControl(null,Validators.required),
                'amount': new UntypedFormControl(null,[Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
        )
    }

    Oncancel(){
        this.router.navigate(['../'],{relativeTo:this.route})
    }

    OnHome(){
        this.router.navigate(['/shop'],{relativeTo:this.route})
    }

    Oncancelbrands(index:number){
     (<UntypedFormArray>this.ShoesForm.get('brandform')).removeAt(index);

    }

}