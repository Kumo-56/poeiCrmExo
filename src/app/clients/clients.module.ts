import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { EditClientComponent } from './pages/edit-client/edit-client.component';
import { NavTopBarComponent } from './components/nav-top-bar/nav-top-bar.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { TotalCaPipe } from './pipes/total-ca.pipe';



@NgModule({
  declarations: [
    ClientsListComponent,
    AddClientComponent,
    EditClientComponent,
    NavTopBarComponent,
    TotalCaPipe
  ],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        FormsModule,
        SharedModule


    ]
})
export class ClientsModule { }
