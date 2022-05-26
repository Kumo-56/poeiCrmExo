import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
//TODO: use mat dialog instead of ngbootstrap modal

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(title:string, msg:string) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.msg = msg;
    modalRef.componentInstance.title = title;
  }

}
