import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

import { ShoesModel } from '../shoes.model';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  
  constructor(private ShoesService:ShopsService) { }

  shoes : ShoesModel[];

  ngOnInit(): void {
    this.shoes = this.ShoesService.getrecipe();
  }



}
