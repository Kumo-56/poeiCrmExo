import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  constructor(private clientsService:ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((clients:Client[])=>console.info(clients));
  }

}
