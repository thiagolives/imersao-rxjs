import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss'
})
export class FromComponent implements OnInit {
  ngOnInit(): void {
    this.operatorFrom();
  }

  operatorFrom(): void {
    const arr = from([1,2,3,4,5,6]);
    arr.subscribe(res => console.log(res));

    const promise = from(new Promise(resolve => resolve('Olá Mundo!')));
    promise.subscribe(res => console.log(res));

    const string = from('Hello!');
    string.subscribe(res => console.log(res));
  }

}
