import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  public client?:Client;
  public clientId?:number;
  public update:boolean;
  @ViewChild('modal') private modalComponent:any;
  @ViewChild('dialog') private dialogComponent:any;


  constructor(private route: ActivatedRoute,private clientsService: ClientsService) {
    this.update=false;
  }

  ngOnInit(): void {
    this.getClient();
  }

  getClient():void{
    const id= Number(this.route.snapshot.paramMap.get('id'));
    //other methods to get information from url path
    // this.route.url.subscribe(url=>{
    //   const id=Number(url[length-1].path);
    //   this.clientId=id;
    // })

    this.clientsService.getClientById(id).subscribe(client =>this.client=client );
}

  switchUpdate():void{
    this.update=!this.update;
  }

  newClient():Client {
    return new Client(this.client);
  }

  private setMsg():string{
    return this.update?"La mofification a été prise en compte":"";
  }

  private setTitle():string {
    return this.client!=null? "Modification du client: "+this.client.nom:"client inconnu";
  }

  displayDialog():void{
    let title=this.setTitle();
    let msg=this.setMsg();
    this.dialogComponent.openDialog(title,msg );
  }

  private displayModal():void{
    let title=this.setTitle();
    let msg=this.setMsg();
    this.modalComponent.open(title, msg);
  }

  //TODO: voir pour la gestion de la modale par rapport aux templates
  updateClient():void{
    let clientUpdate= this.newClient();
    this.clientsService.updateClient(clientUpdate).subscribe();
    this.displayDialog();

    console.log(this.dialogComponent.isClosed);
    this.switchUpdate();
  }
}
