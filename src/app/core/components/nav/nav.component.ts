import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {UpdateVersionService} from "../../services/update-version.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public connected=false;
  public version$!:Observable<number>;
  constructor(private authServices:AuthentificationService,private  uptVersion:UpdateVersionService) { }

  ngOnInit(): void {
    this.authServices.connected$.subscribe({
      next:(statutConnexion)=>{ this.connected=statutConnexion;}
    })
    this.version$=this.uptVersion.numVersion$.asObservable();

  }


  connect():void{
    this.authServices.connect();
  }

  disconnect():void{
    this.authServices.disconnect();
  }

}
