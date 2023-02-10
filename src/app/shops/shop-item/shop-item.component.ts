import { Component, Input, OnInit } from '@angular/core';
import { ShoesModel } from '../shoes.model';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
 @Input() shoes:ShoesModel



  ngOnInit(): void {
  }
 
}
