import {ClientI} from "../interfaces/client-i";
import {FiabiliteClient} from "../enums/fiabilite-client";

export class Client implements ClientI{
  adresse= '';
  id= 0;
  nom= '';
  prenom= '';
  societe= '';

  fiabilite=FiabiliteClient.CLASSIQUE

  constructor(obj? :Partial<Client>) {
    if (obj){
      Object.assign(this, obj);

    }
  }
}
