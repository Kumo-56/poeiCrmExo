import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public connected=false;
  constructor(private authServices:AuthentificationService) { }

  ngOnInit(): void {
    this.authServices.connected$.subscribe({
      next:(statutConnexion)=>{ this.connected=statutConnexion;}
    })
  }


  connect():void{
    this.authServices.connect();
  }

  disconnect():void{
    this.authServices.disconnect();
  }

}
