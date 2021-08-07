import { Component, Inject } from '@angular/core';
import TestService from './test.service';

@Component({
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  constructor(@Inject('PROVIDERS_USE_VALUE') private value: string, private readonly testService: TestService) {
    console.log(value);
    testService.sayHello();
  }
}
