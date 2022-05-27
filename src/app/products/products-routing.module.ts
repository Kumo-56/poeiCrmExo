import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsListComponent} from "../clients/pages/clients-list/clients-list.component";
import {EditClientComponent} from "../clients/pages/edit-client/edit-client.component";
import {AddClientComponent} from "../clients/pages/add-client/add-client.component";
import {PageEditProductComponent} from "./pages/page-edit-product/page-edit-product.component";
import {PageListProductComponent} from "./pages/page-list-product/page-list-product.component";
import {PageAddProductComponent} from "./pages/page-add-product/page-add-product.component";
import {PageDefaultProductComponent} from "./pages/page-default-product/page-default-product.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'list'},
  {path:'list',component:PageListProductComponent},
  {path:'edit/:id',component:PageDefaultProductComponent},
  {path:'add',component:PageAddProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
