import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  apiData = ajax('https://randomuser.me/api/?results=5');

  obj = {
    c: 123,
    b: 456,
    a: 789,
  };

  myNumber = this.decimalPipe.transform(100.123456789);

  myNumber2 = 100.123456789;

  constructor(private decimalPipe: DecimalPipe) {}

  log(val) {
    console.log(val);
  }
}
