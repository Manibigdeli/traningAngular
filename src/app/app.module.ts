import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


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
import { ShopEditComponent } from './shops/shop-edit/shop-edit.component';
import { ShopsService } from './shops/shops.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinner } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterCeptor } from './auth/auth-interceptor.service';

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
    ShopStartComponent,
    ShopEditComponent,
    AuthComponent,
    LoadingSpinner,
 
    
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ShoppingListService,ShopsService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterCeptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
