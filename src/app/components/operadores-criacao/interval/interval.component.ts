import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {
  ngOnInit(): void {
    this.operatorInterval();
  }

  operatorInterval(): void {
    const num = interval(1000);

    const subscription = num.subscribe(res => console.log(res))

    setTimeout(() => {
      subscription.unsubscribe();
    }, 3000);
  }

}
