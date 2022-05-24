import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  //public car doit être accessible depuis le DOM
  public open:boolean;
  constructor() { this.open=true;}

  ngOnInit(): void {

  }

  public toggle():void{
    this.open=!this.open;
  }
}
