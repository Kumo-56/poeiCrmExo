import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ModalComponent,
    ModalContentComponent,
    DialogComponent,
    DialogContentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[
    ModalComponent,
    NgbModule,
    DialogComponent
  ]
})
export class SharedModule { }
