import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListOrdersComponent} from "./pages/list-orders/list-orders.component";
import {AddOrderComponent} from "./pages/add-order/add-order.component";
import {EditOrderComponent} from "./pages/edit-order/edit-order.component";

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:ListOrdersComponent},
  {path:'edit',component:EditOrderComponent},
  {path:'add',component:AddOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
