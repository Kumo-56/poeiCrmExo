import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {AuthentificationService} from "../../../core/services/authentification.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit, OnDestroy {
  private souscription:Subscription|null=null;

  @Input() clients?:Client[];
  constructor(private clientsService:ClientsService,
              private location: Location,
              private router:Router,
              private route: ActivatedRoute,
              private authService:AuthentificationService
  ) { }

  ngOnInit(): void {
    this.getClients()
  }

  getClients():void{
    this.clientsService.getClients().subscribe({
    next:(clients )=>{this.clients=clients;},
      error:(msg)=>{alert("Une erreur est survenue"+msg);},
      complete:()=>{console.info('Fin de la récupération des clients');}
  });

    this.souscription=this.authService.connected$.subscribe({
      next:(value)=>console.info('Observater test: '+value),
      error:(msg)=>console.info("Une erreur est survenue "+msg),
        complete:()=>console.info("Observateur test fin: complete")
    })
}

  goToClientPage(id:number):void{
    let url:string =this.location.path()+"/"+id;
    this.router.navigate(['./../edit/',id], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.souscription?.unsubscribe();
  }
}
