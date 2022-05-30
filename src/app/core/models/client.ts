import {ClientI} from "../interfaces/client-i";
import {FiabiliteClient} from "../enums/fiabilite-client";

export class Client implements ClientI{
  id= 0;
  nom= '';
  prenom= '';
  societe= '';
  adresse= '';
  fiabilite=FiabiliteClient.CLASSIQUE;
  totalCaHT=0;
  tauxImposition=0;

  constructor(obj? :Partial<Client>) {
    if (obj){
      Object.assign(this, obj);

    }
  }
}
