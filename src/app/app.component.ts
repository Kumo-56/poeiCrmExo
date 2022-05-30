import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'projet-poei';

  ngOnInit(): void {
    //COLD
    const obs=new Observable(
      (value)=>value.next(Math.random())
    );

    //HOT
    const subject = new Subject();

    const behaviorSub=new BehaviorSubject(1);


    obs.subscribe(value => console.log(value));
    obs.subscribe(value => console.log(value));
    obs.subscribe(value => console.log(value));


    subject.subscribe(value=>console.log(value));
    subject.subscribe(value=>console.log(value));
    subject.subscribe(value=>console.log(value));
    subject.next('coucou');
    subject.unsubscribe();


    behaviorSub.subscribe(value => console.log(value));
    behaviorSub.unsubscribe();
    //
    //
    // obs.subscribe(value => console.log(value),
    //   error => console.log(error),
    //   ()=>console.log('terminé'));


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
    var replaySubject = new ReplaySubject(3); //ReplaySubject est un observable
    replaySubject.subscribe({
      next:(v)=>console.log('ObserverA: '+v)
    });
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.next(4);
    replaySubject.subscribe({
      next:(v)=>console.log('ObserverB: '+v)
    });
    replaySubject.next(5);

    replaySubject.unsubscribe();
  }
}
