import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage-shoes.service';
import { ShoesModel } from '../shops/shoes.model';
import { ShopsService } from '../shops/shops.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   family : string
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position:1,name:'Mani',family:'bigdeli' }
// ];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'table-basic-example',
    styleUrls: ['./table.component.css'],
    templateUrl: './table.component.html',
})
export class TableBasicExample implements OnInit , OnDestroy{
  displayedColumns: string[] = ['price', 'name', 'description', 'img' ];
  dataSource ;
  shoes:ShoesModel[]
  subscription:Subscription
  constructor(private data:DataStorageService, private shopservice:ShopsService){}

  ngOnInit(): void {
    // this.dataSource = this.shopservice.getshoes();
   this.subscription =  this.data.FetchingData().subscribe((res)=>{
     this.dataSource = res
    console.log()
    })
    console.log(this.dataSource);
    
    // this.shoes = this.shopservice.getshoes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

