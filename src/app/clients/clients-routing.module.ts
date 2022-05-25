import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsListComponent} from "./pages/clients-list/clients-list.component";
import {EditClientComponent} from "./pages/edit-client/edit-client.component";
import {AddClientComponent} from "./pages/add-client/add-client.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'list'},
  {path:'list',component:ClientsListComponent},
  {path:'edit/:id',component:EditClientComponent},
  {path:'add',component:AddClientComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
