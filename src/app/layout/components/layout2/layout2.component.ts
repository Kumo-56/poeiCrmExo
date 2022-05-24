import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.scss']
})
export class Layout2Component implements OnInit {

  //public car doit être accessible depuis le DOM
  public open:boolean;
  constructor() {  this.open=true;}

  ngOnInit(): void {
  }


  public toggle():void{
    this.open=!this.open;
  }

}
