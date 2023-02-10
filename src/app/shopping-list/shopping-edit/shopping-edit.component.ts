import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { BrandsModel } from 'src/app/shared/brands.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameinput') nameinput:ElementRef;
@ViewChild('amountinput') amountinput:ElementRef;


  constructor(private shService:ShoppingListService) { }

  ngOnInit(): void {
  }


  OnAdditem(){
    const inputvaluename = this.nameinput.nativeElement.value;

    const inputamountvalue = this.amountinput.nativeElement.value;

    const newbrandcreated  = new BrandsModel(inputvaluename,inputamountvalue);

    this.shService.AddbrandsToShoppinglist(newbrandcreated)
  


  }
}
