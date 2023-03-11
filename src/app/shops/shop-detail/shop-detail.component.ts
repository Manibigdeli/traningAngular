import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoesModel } from '../shoes.model';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
   shoes:ShoesModel
   id: number

   color = ['black' , 'White' , 'red']
   
  constructor(private ShopService:ShopsService ,
     private route:ActivatedRoute ,
     private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id']
        this.shoes = this.ShopService.getshoesid(this.id)
      }
    )
    
  }
  

  OnAddToShoppinList(){
   this.ShopService.Addbrandtoshoppinglist(this.shoes.brandmodel)
  }


  Onedit(){
  this.router.navigate(['edit'],{relativeTo:this.route})
  }


  OneditShoes(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  OnDelet(){
    this.ShopService.OnDelete(this.id);
    this.router.navigate(['/shop'],{relativeTo:this.route})
  }

}
