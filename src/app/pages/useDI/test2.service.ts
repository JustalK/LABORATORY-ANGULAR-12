import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class TestService2 {
  sayHello() {
    console.log(`From TestService2 --> Hello`);
  }
}
