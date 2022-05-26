import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'projet-poei';

  ngOnInit(): void {
    // var subject = new Subject(); //subject est un observable
    // subject.next(1);
    // subject.subscribe({
    //     next:(v)=>console.log('ObserverA: '+v)
    // });
    // subject.next(2);
    // subject.subscribe({
    //   next:(v)=>console.log('ObserverB: '+v)
    // });
    // subject.next(50);

    //
    // var subject = new BehaviorSubject(0); //BehaviorSubject est un observable
    // subject.subscribe({
    //   next:(v)=>console.log('ObserverA: '+v)
    // });
    // subject.next(1);
    //
    // subject.next(2);
    // subject.subscribe({
    //   next:(v)=>console.log('ObserverB: '+v)
    // });
    // subject.next(3);


    //buffer 3 values for new subject
    var subject = new ReplaySubject(3); //ReplaySubject est un observable
    subject.subscribe({
      next:(v)=>console.log('ObserverA: '+v)
    });
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.subscribe({
      next:(v)=>console.log('ObserverB: '+v)
    });
    subject.next(5);
  }

}
