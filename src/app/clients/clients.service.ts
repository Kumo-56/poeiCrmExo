import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../core/models/client";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private url:string='http://localhost:3000/clients';

  constructor(private httpClient: HttpClient) { }

  getClientById(id: number): Observable<Client>{
    //console.log(this.httpClient.get<Client>(this.url+'/'+id));
    return this.httpClient.get<Client>(`${this.url}/${id}`);
  }

  getClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.url);
  }

  deleteClientById(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.url+'/'+id);
  }

  updateClient(client:Client):Observable<void>{
    return this.httpClient.put<void>(this.url+'/'+client.id,client);
  }

  addClient(client:Client):Observable<void>{
    return this.httpClient.post<void>(this.url, client);
  }
}
