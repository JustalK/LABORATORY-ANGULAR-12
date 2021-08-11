import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  parentValue: number = 50;

  parentCount: number = 0;

  increment() {
    this.parentCount += 1;
    this.parentValue += 1;
  }

  countChangedHandler(childValue) {
    console.log('Children Event', childValue);
  }
}
