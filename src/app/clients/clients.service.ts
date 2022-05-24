import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getClientById(id: number): Client{
    return new Client();
  }

  getClients():Client[] {
    return [new Client()];
  }

  deleteClientById(id:number):void{

  }

  updateClient(client:Client):void{

  }

  addClient(client:Client):void{
    
  }
}
