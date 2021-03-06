import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';
import { AddOrderComponent } from './pages/add-order/add-order.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ListOrdersComponent,
    AddOrderComponent,
    EditOrderComponent
  ],
    imports: [
        CommonModule,
        OrdersRoutingModule,
        SharedModule
    ]
})
export class OrdersModule { }
