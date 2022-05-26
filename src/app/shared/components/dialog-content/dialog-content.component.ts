import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {
  public title:string='';
  public msg:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
