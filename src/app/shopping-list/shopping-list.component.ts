import { Component, OnInit } from '@angular/core';
import { BrandsModel } from '../shared/brands.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  brands :BrandsModel[]
  constructor(private ShoppingService:ShoppingListService) { }

  ngOnInit(){
    this.brands = this.ShoppingService.getShoppinglist()
    this.ShoppingService.brandsChanged.subscribe(
      (brandslice:BrandsModel[])=>{
        this.brands = brandslice
      }
    )
  }

  Onedititem(id : number){
    this.ShoppingService.startededitingmode.next(id)

  }
    
  }



