import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss'
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
    this.operatorOf();
  }

  operatorOf(): void {
    const arr = of([1,2,3,4,5,6]);
    arr.subscribe(res => console.log(res))
  }

}
