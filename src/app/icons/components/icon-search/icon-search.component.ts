import { Component, OnInit } from '@angular/core';
import {faSearch, IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrls: ['./icon-search.component.scss']
})
export class IconSearchComponent implements OnInit {
  public myIcon: IconDefinition=faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
