import { Component, OnInit, Output ,EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, observable, pipe } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'src/app/shared/data-storage-shoes.service';
import { NzMessageService } from 'ng-zorro-antd/message';

import { ShoesModel } from '../shoes.model';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit,OnDestroy {
  
  constructor(private ShoesService:ShopsService 
    , private router:Router , private Activeroute:ActivatedRoute,private datastorage:DataStorageService,private message:NzMessageService) { }

  shoes : ShoesModel[];
  Subscription:Subscription;
  subscribe:Subscription;
  error:string;
  id:number;
  isloading = false;
  fetchingmode = true;
  progress = false;
  messager:string
  
 
  ngOnInit(): void {
    
   //Add Shoes From Shoes Edit Form.value/ And Shop Service Shoeschange Subject

   this.Subscription = this.ShoesService.shoeschanges.subscribe(
      (Shoes : ShoesModel[])=>{
        this.shoes = Shoes
        this.id = Shoes.length
      }
    )
    this.shoes = this.ShoesService.getshoes();
  }
  

  
  FetchingDatas(type: string){
  let erorrobs$ = new Observable<any>();
 erorrobs$ = this.datastorage.FetchingData();

 
  // this.datastorage.setPending = true;
  this.progress = true

  if(this.fetchingmode){
    erorrobs$.subscribe(()=>{
      this.message.create(type, `Loaded ${type}`);
      this.progress = false
      console.log();
      this.error = null
      if(this.error){
        return this.error;
        
      }
    },errormessage=>{
      this.message.remove();
      console.log(errormessage)
      this.error = errormessage;
      this.progress = false  
    })
  }
  }
  
  

  OnAddnewShoes(){
    this.router.navigate(['new'],{relativeTo:this.Activeroute})

  }

  ngOnDestroy(): void {
  this.Subscription.unsubscribe();

}


}
