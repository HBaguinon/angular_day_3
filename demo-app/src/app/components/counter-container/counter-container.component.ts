import { Component, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { CounterDisplayComponent } from '../counter-display/counter-display.component';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {

  counter = 0;

  // @ViewChild(CounterDisplayComponent)
  // counterDisplay: CounterDisplayComponent;
  constructor() { }

  // constructor(private zone: NgZone) { }

  ngOnInit(): void {

    setInterval(() => {
      this.counter = this.counter + 1;
    }, 500);
  }

  // ngAfterViewInit(): void {

  //   let counter = 0;

  //   this.zone.runOutsideAngular(() => {
  //     setInterval(() => {
  //       // this.counter = this.counter + 1;
  //       this.counterDisplay.counter = counter++;
  //     }, 500);

  //     setTimeout(() => {
  //       this.zone.run(() => {});
  //     }, 1000);

  //   });

  // }

}
