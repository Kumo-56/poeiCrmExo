import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PageDefaultProductComponent } from './pages/page-default-product/page-default-product.component';
import { PageListProductComponent } from './pages/page-list-product/page-list-product.component';
import { PageEditProductComponent } from './pages/page-edit-product/page-edit-product.component';
import { PageAddProductComponent } from './pages/page-add-product/page-add-product.component';
import { NavTopBarProductComponent } from './components/nav-top-bar-product/nav-top-bar-product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {IconsModule} from "../icons/icons.module";


@NgModule({
  declarations: [
    PageDefaultProductComponent,
    PageListProductComponent,
    PageEditProductComponent,
    PageAddProductComponent,
    NavTopBarProductComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    IconsModule
  ]
})
export class ProductsModule { }
