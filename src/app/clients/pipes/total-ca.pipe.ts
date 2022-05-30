import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalCa'
})
export class TotalCaPipe implements PipeTransform {

  transform(caHt: number, tauxImposition?: number): number {
    let ret:number=caHt-(caHt*20/100);
    if (tauxImposition){
      ret=caHt-(caHt*tauxImposition/100);
    }
    return ret;
  }

}
