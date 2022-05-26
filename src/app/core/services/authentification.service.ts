import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  //$ pour signifier attribut de type Observable
  public connected$= new BehaviorSubject(false);

  constructor() { }

  public connect(){
    this.connected$.next(true);
  }

  public disconnect(){
    //this.connected$.error('Mon erreur: perte du serveur');
    this.connected$.next(false);
  }
}
