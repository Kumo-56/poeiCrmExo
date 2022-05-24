import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../layout/layout.module";
import {IconsModule} from "../icons/icons.module";
import {TemplateModule} from "../template/template.module";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { Nav2Component } from './components/nav2/nav2.component';
import { Header2Component } from './components/header2/header2.component';
import { Footer2Component } from './components/footer2/footer2.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    Nav2Component,
    Header2Component,
    Footer2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutModule,
    IconsModule,
    TemplateModule,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    Nav2Component,
    Header2Component,
    Footer2Component
  ]
})
export class CoreModule { }
