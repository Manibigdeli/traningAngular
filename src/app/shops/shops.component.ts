import { Component, OnInit } from '@angular/core';
import { ShoesModel } from './shoes.model';
import { ShopsService } from './shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
  providers: [ShopsService]
})
export class ShopsComponent implements OnInit {

  SelctedShoes:ShoesModel
  

  constructor(private ShoesService:ShopsService) { }

  ngOnInit(){
   this.ShoesService.ShoesSelcted.subscribe(
    (shoes:ShoesModel)=>{
      this.SelctedShoes = shoes
    })
  }

}
