import { Component, OnDestroy, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { BrandsModel } from 'src/app/shared/brands.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  isLoadingOne
  @ViewChild('f') form:NgForm
Subscription:Subscription
//Are You in Edit Mode ?
EditMode = false
brandsitemiD : number;
//Item Edit ?
Editedbrand : BrandsModel
constructor(private shService:ShoppingListService) { }

  ngOnInit(): void {
   this.Subscription = this.shService.startededitingmode.subscribe(
   (id : number)=>{
    this.brandsitemiD = id ;
    this.EditMode = true;
    this.Editedbrand = this.shService.getbrandsid(id);
    this.form.setValue({
      name: this.Editedbrand.name,
      amount : this.Editedbrand.amount
    })

   }
   )
    
  }


  Onsubmit(form:NgForm){
  const value = form.value;
  const newbrandAdd = new BrandsModel(value.name , value.amount);
  if(this.EditMode){
    this.shService.Updatebrands(this.brandsitemiD , newbrandAdd )
  }else{
  this.shService.AddbrandsToShoppinglist(newbrandAdd);
  }
  this.EditMode = false
  form.reset();
  }

  OnClear(){
    this.form.reset();
    this.EditMode = false ;
  }
  OnDelete(){
    this.shService.Deletebrands(this.brandsitemiD);
    this.OnClear()
  }

  ngOnDestroy(): void {
   this.Subscription.unsubscribe();
  }
}
