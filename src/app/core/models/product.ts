import {ProductI} from "../interfaces/product-i";
import {Tva} from "../enums/tva";

export class Product implements ProductI{

  id: number=0;
  denomination: string='';
  prixHT: number=0;
  reference: string='';
  societe: string='';
  tva: Tva=Tva.TAUXINTERMEDIAIRE;
  img:string='/assets/images/pomme.jpg';

  constructor(obj? :Partial<Product>) {
    if (obj){
      Object.assign(this, obj);

    }
  }

  getId():number{
    return this.id;
  }


}
