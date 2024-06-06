import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;
  ngAfterViewInit(): void {
    console.log(this.myButton);
   this.operatorFromEvent();
  }

  operatorFromEvent(): void {
   /*  const el = fromEvent(document, 'click');
    el.subscribe(res => console.log(res)) */

    const el = fromEvent(this.myButton.nativeElement, 'click');
    el.subscribe(res => console.log(res));

  }

}
