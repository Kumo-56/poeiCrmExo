import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {Observable, Subject} from "rxjs";
import {UpdateVersionService} from "../../services/update-version.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public connected:boolean =false;
  public errorMsg:string ='';
  constructor(private authServices:AuthentificationService, private  uptVersion:UpdateVersionService) { }

  ngOnInit(): void {
    this.authServices.connected$.subscribe({
      next:(statutConnexion)=>{ this.connected=statutConnexion;
        },
      error:(err )=> {this.errorMsg=err;}
    })
  }

  incrementVersion():void{
    this.uptVersion.increment();
  }

  decrementVersion():void{
    this.uptVersion.decrement();
  }
}
