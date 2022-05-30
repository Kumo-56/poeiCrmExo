import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpdateVersionService} from "../../services/update-version.service";
import {map} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  //public numVersion:number=0;
  public numVersion!:string;
  constructor(private  uptVersion:UpdateVersionService) { }

  ngOnInit(): void {
    console.log(this.numVersion);
    this.uptVersion.numVersion$.pipe(map(version=>'Version: '+version)).subscribe(value=>this.numVersion=value);
  }

  ngOnDestroy(): void {
    this.uptVersion.numVersion$.unsubscribe();
  }

}
