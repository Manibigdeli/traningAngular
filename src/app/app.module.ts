import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import {MatRadioModule} from '@angular/material/radio';





















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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableBasicExample } from './table/table.component';
import { ProgressBarQueryExample } from './shared/progress-bar/progress-bar';


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
    TableBasicExample,
    ProgressBarQueryExample,
    
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatInputModule,
    NzButtonModule,
    NzDropDownModule,
    NzAvatarModule,
    NzNotificationModule,
    NzInputModule,
    NzIconModule,
    MatToolbarModule,
    MatIconModule,
    NzMessageModule,
    MatRadioModule
    
  ],
  providers: [ShoppingListService,ShopsService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterCeptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
