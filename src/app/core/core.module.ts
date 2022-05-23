import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../layout/layout.module";
import {IconsModule} from "../icons/icons.module";
import {TemplateModule} from "../template/template.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutModule,
    IconsModule,
    TemplateModule
  ]
})
export class CoreModule { }
