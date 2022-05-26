import {Component,  OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  public msg:string="";
  public title:string="";


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
  }

  dismiss():void{
    this.activeModal.dismiss('Cross click');
  }

  close():void{
    this.activeModal.close('Close click');
  }


}
