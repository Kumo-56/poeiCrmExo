import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {AuthentificationService} from "../../../core/services/authentification.service";
import {Observable, Subscription} from "rxjs";
import {FiabiliteClient} from "../../../core/enums/fiabilite-client";
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit, OnDestroy {
  private souscription:Subscription|null=null;

  //@Input() clients?:Client[];
  @Input() clients$?:Observable<Client[]>;

  public clientHeaders=['Id','Nom','Prénom','Adresse','Société','CA','Fiabilité'];

  public fiabiliteStatus=Object.values(FiabiliteClient);

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
    this.clients$= this.clientsService.getClients();
  //   this.clientsService.getClients().subscribe({
  //   next:(clients )=>{this.clients=clients;},
  //     error:(msg)=>{alert("Une erreur est survenue"+msg);},
  //     complete:()=>{console.info('Fin de la récupération des clients');}
  // });

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


  updateFiabilite(client: Client, event: any):void{
    const newFiabilite=event.target.value;
    const newClientToUpdate= new Client(client);
    newClientToUpdate.fiabilite=newFiabilite;
    console.log(client);
    console.log(event.target.value);
    //client.fiabilite=newFiabilite;
    this.clientsService.updateClient(newClientToUpdate).subscribe();
  }
}
