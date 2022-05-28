import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../core/services/authentification.service";
import {Observable} from "rxjs";
import {User} from "../core/models/user";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string='http://localhost:3000/users';

  constructor(private httpClient: HttpClient, private authService:AuthentificationService) { }

  getUserByMail(mail: string): Observable<User>{
    return this.httpClient.get<User>(`${this.url}/${mail}`);
  }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }

  deleteUserById(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.url+'/'+id);
  }

  updateUser(user:User):Observable<void>{
    return this.httpClient.put<void>(this.url+'/'+user.id,user);
  }

  addProduct(user:User):Observable<void>{
    return this.httpClient.post<void>(this.url, user);
  }
}
