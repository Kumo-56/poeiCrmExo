import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../../core/services/authentification.service";
import {Observable} from "rxjs";
import {Product} from "../../core/models/product";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  private url:string=`${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient, private authService:AuthentificationService) { }

  getProductById(id: number): Observable<Product>{
    //console.log(this.httpClient.get<Client>(this.url+'/'+id));
    return this.httpClient.get<Product>(`${this.url}/${id}`);
  }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url);
  }

  deleteProductById(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.url+'/'+id);
  }

  updateProduct(product:Product):Observable<void>{
    return this.httpClient.put<void>(this.url+'/'+product.id,product);
  }

  addProduct(product:Product):Observable<void>{
    return this.httpClient.post<void>(this.url, product);
  }
}
