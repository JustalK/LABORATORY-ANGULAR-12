import { Injectable } from '@angular/core';
import TestService2 from './test2.service';
import TestService3 from './test3.service';

@Injectable({
  providedIn: 'root',
  useFactory: () => new TestService3(),
})
export default class TestService {
  sayHello() {
    console.log(`From TestService --> Hello`);
  }
}
