import {FiabiliteClient} from "../enums/fiabilite-client";

export interface ClientI {
  id:number;
  nom:string;
  prenom:string;
  adresse:string;
  societe:string;
  totalCaHT: number;
  tauxImposition: number;
  fiabilite:FiabiliteClient;
}
