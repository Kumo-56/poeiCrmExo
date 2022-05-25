import { Component, OnInit,Input } from '@angular/core';
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

  updateClient():void{
    this.switchUpdate();

  }
}
