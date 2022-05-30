import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateVersionService {
  private num:number=0;
  public numVersion$=new Subject<number>();

  constructor() { }

  public increment():void{
    console.log(this.num);
    this.numVersion$.next(this.num+=1);

  }

  public decrement():void{
    this.numVersion$.next(this.num-=1);
  }
}
