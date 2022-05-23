import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { Layout2Component } from './components/layout2/layout2.component';

@NgModule({
  declarations: [
    LayoutComponent,
    Layout2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutComponent,
    Layout2Component
  ]
})
export class LayoutModule { }
