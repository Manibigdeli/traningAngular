import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShopDetailComponent } from "./shops/shop-detail/shop-detail.component";
import { ShopEditComponent } from "./shops/shop-edit/shop-edit.component";
import { ShopStartComponent } from "./shops/shop-start/shop-start.component";
import { ShopsComponent } from "./shops/shops.component";
const rout:Routes=[
    {path:'',redirectTo:'/shop' ,pathMatch:'full'},
    {path:'shop' , component:ShopsComponent,children:[
        {path: '' , component:ShopStartComponent},
        {path: 'new',component:ShopEditComponent},
        {path:':id' , component:ShopDetailComponent},
        {path: ':id/edit',component:ShopEditComponent},
        

    ]},
    {path:'shopping-list' , component:ShoppingListComponent}
]





@NgModule({
    imports:[RouterModule.forRoot(rout)],
    exports:[RouterModule]
})
export class AppRoutingModule{}