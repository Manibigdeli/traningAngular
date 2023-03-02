import { Component, OnInit, Output ,EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, observable, pipe } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'src/app/shared/data-storage-shoes.service';

import { ShoesModel } from '../shoes.model';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit,OnDestroy {
  
  constructor(private ShoesService:ShopsService 
    , private router:Router , private Activeroute:ActivatedRoute,private datastorage:DataStorageService) { }

  shoes : ShoesModel[];
  Subscription:Subscription;
  subscribe:Subscription;
  error:string;
  isloading = false;
  fetchingmode = true;
  
 
  ngOnInit(): void {
    
   //Add Shoes From Shoes Edit Form.value/ And Shop Service Shoeschange Subject

   this.Subscription = this.ShoesService.shoeschanges.subscribe(
      (Shoes : ShoesModel[])=>{
        this.shoes = Shoes
      }
    )
    this.shoes = this.ShoesService.getshoes();
  }
  
  FetchingDatas(){
  let erorrobs$ = new Observable<any>();
 erorrobs$ = this.datastorage.FetchingData();
 
  this.datastorage.setPending = true;

  if(this.fetchingmode){
    erorrobs$.subscribe(()=>{
      console.log();
      this.error = null
      if(this.error){
        return this.error
      }
    },errormessage=>{
      console.log(errormessage)
      this.error = errormessage;
      this.datastorage.setPending = false;   
    })
  }
  }
  
  

  OnAddnewShoes(){
    this.router.navigate(['new'],{relativeTo:this.Activeroute})

  }

  ngOnDestroy(): void {
  this.Subscription.unsubscribe();
  this.subscribe.unsubscribe();
}


}
