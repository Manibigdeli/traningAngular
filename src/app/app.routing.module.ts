import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShopDetailComponent } from "./shops/shop-detail/shop-detail.component";
import { ShopEditComponent } from "./shops/shop-edit/shop-edit.component";
import { ShopStartComponent } from "./shops/shop-start/shop-start.component";
import { ShopResolverService } from "./shops/shop.resolver.service";
import { ShopsComponent } from "./shops/shops.component";
import { TableBasicExample } from "./table/table.component";
const rout:Routes=[
    {path:'',redirectTo:'/shop' ,pathMatch:'full'},
    {path:'shop' , component:ShopsComponent,children:[
        {path: '' , component:ShopStartComponent},
        {path: 'new',component:ShopEditComponent},
        {path:':id' , component:ShopDetailComponent,resolve:[ShopResolverService]},
        {path: ':id/edit',component:ShopEditComponent,resolve:[ShopResolverService]},
        

    ]},
    {path:'shopping-list' , component:ShoppingListComponent},
    {path:'auth' , component:AuthComponent},
    {path:'table',component:TableBasicExample}
]





@NgModule({
    imports:[RouterModule.forRoot(rout)],
    exports:[RouterModule]
})
export class AppRoutingModule{}