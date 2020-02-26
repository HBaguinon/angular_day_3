import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements
  OnInit {
  // , OnChanges {

  @Input()
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('simple changes: ', changes);
  // }

}
