import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopListComponent } from './shops/shop-list/shop-list.component';
import { ShopDetailComponent } from './shops/shop-detail/shop-detail.component';
import { ShopItemComponent } from './shops/shop-item/shop-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app.routing.module';
import { ShopStartComponent } from './shops/shop-start/shop-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopsComponent,
    ShopListComponent,
    ShopDetailComponent,
    ShopItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    ShopStartComponent
    
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
