import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import {MatButtonModule} from "@angular/material/button";
import {TemplateModule} from "../template/template.module";
import {IconsModule} from "../icons/icons.module";
import { TableComponent } from './components/table/table.component';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalContentComponent,
    DialogComponent,
    DialogContentComponent,
    TableComponent,
    BtnComponent
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
    DialogComponent,
    TemplateModule,
    IconsModule,
    TableComponent,
    BtnComponent
  ]
})
export class SharedModule { }
