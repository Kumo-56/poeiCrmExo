import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {Observable, Subject} from "rxjs";
import { from } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  //Return an Observable to set methods according to the result of modalRef
  open(title:string, msg:string):Observable<any> {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.msg = msg;
    modalRef.componentInstance.title = title;
    let ret=from(modalRef.result);
    return ret;
  }

}
