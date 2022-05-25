import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { EditClientComponent } from './pages/edit-client/edit-client.component';
import { NavTopBarComponent } from './components/nav-top-bar/nav-top-bar.component';


@NgModule({
  declarations: [
    ClientsListComponent,
    AddClientComponent,
    EditClientComponent,
    NavTopBarComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
