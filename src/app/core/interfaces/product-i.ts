import {Tva} from "../enums/tva";

export interface ProductI {
  id:number;
  denomination:string;
  "societe": string,
  "reference": string,
  "prixHT": number,
  "tva": Tva;
  "img":string;
}
