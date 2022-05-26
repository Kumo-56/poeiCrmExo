import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../../../core/models/client";
import {ClientsService} from "../../clients.service";


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  @ViewChild('addClientForm') private addClientForm:any;
  @ViewChild('addClientModal') private modalComponent:any;
  public nom:string='';
  public prenom:string='';
  public societe:string='';
  public adresse:string='';

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
  }

  private displayModal():void{
    this.modalComponent.open("Ajout d'un client", "Client ajouté");
  }

  //TODO: controle des valeurs avant de les assigner à l'objet
  addClient() {
    let clientToAdd:Client = new Client();
    clientToAdd.nom=this.nom;
    clientToAdd.prenom=this.prenom;
    clientToAdd.adresse=this.adresse;
    clientToAdd.societe=this.societe;
    this.clientsService.addClient(clientToAdd).subscribe();
    this.displayModal();
    this.addClientForm.reset();
  }
}
