import { Component, OnInit, Output ,EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ShoesModel } from '../shoes.model';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit,OnDestroy {
  
  constructor(private ShoesService:ShopsService 
    , private router:Router , private Activeroute:ActivatedRoute) { }

  shoes : ShoesModel[];
  Subscription:Subscription;
  ngOnInit(): void {
    
   //Add Shoes From Shoes Edit Form.value/ And Shop Service Shoeschange Subject
    this.Subscription = this.ShoesService.shoeschanges.subscribe(
      (Shoes : ShoesModel[])=>{
        this.shoes = Shoes
      }
    )
    this.shoes = this.ShoesService.getshoes();
  }

  OnAddnewShoes(){
    this.router.navigate(['new'],{relativeTo:this.Activeroute})

  }

ngOnDestroy(): void {
  this.Subscription.unsubscribe();
}

}
