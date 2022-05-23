import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { EditClientComponent } from './pages/edit-client/edit-client.component';


@NgModule({
  declarations: [
    ClientsListComponent,
    AddClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
