import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";
import {from, Observable} from "rxjs";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  //public isClosed:boolean=false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(title:string, msg:string):Observable<any>{
    let dialogRef=this.dialog.open(DialogContentComponent);
    dialogRef.componentInstance.title=title;
    dialogRef.componentInstance.msg=msg;

    return  dialogRef.afterClosed();
    //
    // dialogRef.afterClosed().subscribe(result=>{
    //   if (result=='true'){
    //     this.isClosed=true;
    //     console.log(`Dialog resul: ${result}`);
    //   }
    //
    // })
  }

}
