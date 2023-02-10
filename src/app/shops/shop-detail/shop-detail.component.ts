import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(private ShopService:ShopsService , private route:ActivatedRoute ,) { }

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

}
