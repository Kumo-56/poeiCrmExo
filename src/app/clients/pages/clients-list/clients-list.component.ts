import {Component, Input, OnInit} from '@angular/core';
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  @Input() clients?:Client[];
  constructor(private clientsService:ClientsService,
              private location: Location,
              private router:Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getClients()
  }

  getClients():void{
    this.clientsService.getClients().subscribe((clients =>this.clients=clients));
}

  goToClientPage(id:number):void{
    let url:string =this.location.path()+"/"+id;
    this.router.navigate(['./../edit/',id], { relativeTo: this.route });
  }
}
