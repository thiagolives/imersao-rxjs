import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class ObservablesComponent implements OnInit {


  ngOnInit(): void {
    this.initObservable();
  }

  initObservable(): void {
    const observable$ = new Observable((subscriber) => {
      subscriber.next('Paulo');
      subscriber.next(10);
      subscriber.next({ name: 'Eduardo' });
      subscriber.next(true);
      subscriber.complete();
    });

    const it = interval(1000);

    const observer = {
      next: (value: any) => console.log(`This is my value ${value}`)
    }

    observable$.subscribe(observer);
    const subscription2 = it.subscribe(res => console.log(res));

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000);

  }
}
