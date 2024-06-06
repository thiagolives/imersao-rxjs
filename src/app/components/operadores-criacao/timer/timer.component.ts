import { Component, OnInit } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit {
  ngOnInit(): void {
    this.operatorTimer();
  }

  operatorTimer(): void {
    const obs = of(1,2,3);
    timer(5000)
    .pipe(
      concatMap(() => obs)
    ).subscribe(console.log)
  }
}
